package io.oyasai.worldgen.height

import ca.spottedleaf.moonrise.patches.starlight.light.StarLightInterface
import java.lang.reflect.Field
import java.util.IdentityHashMap
import java.util.concurrent.ConcurrentHashMap
import java.util.logging.Level
import java.util.logging.Logger
import net.minecraft.core.Holder
import net.minecraft.core.MappedRegistry
import net.minecraft.core.RegistrationInfo
import net.minecraft.core.registries.Registries
import net.minecraft.resources.Identifier
import net.minecraft.resources.ResourceKey
import net.minecraft.server.MinecraftServer
import net.minecraft.server.level.ServerLevel
import net.minecraft.world.level.dimension.BuiltinDimensionTypes
import net.minecraft.world.level.dimension.DimensionType
import org.bukkit.Bukkit
import org.bukkit.World
import org.bukkit.craftbukkit.CraftWorld
import sun.misc.Unsafe

class NmsHeightProvider(private val logger: Logger) : HeightProvider {
  override val name: String = "NMS/Purpur-26.2-build.2622|2593"

  private val declarations = ConcurrentHashMap<String, HeightSpec>()
  private val unsafe: Unsafe by lazy { resolveUnsafe() }

  override fun declare(worldName: String, spec: HeightSpec) {
    declarations[worldName] = spec
    logger.info(
        "[OWG][height] Declared $worldName: min=${spec.minY} max=${spec.maxHeight} logical=${spec.logicalHeight}"
    )
  }

  override fun apply(world: World): Boolean {
    val spec = declarations[world.name] ?: return false
    if (!isSupportedServer()) {
      logger.severe(
          "[OWG][height] Refusing to patch ${world.name}: expected Purpur 26.2 build 2622|2593, got ${runtimeVersion()}"
      )
      return false
    }

    var registration: DimensionRegistration? = null
    var levelSnapshot: LevelSnapshot? = null
    var starlightSnapshot: StarlightSnapshot? = null
    var levelMutationStarted = false
    var starlightMutationStarted = false
    return try {
      logger.info("[OWG][height] APPLY BEGIN world=${world.name} provider=$name")
      val serverLevel = (world as CraftWorld).handle
      registration = createOrReadDimensionType(world.name, spec)
      levelSnapshot = captureLevel(serverLevel)
      starlightSnapshot = captureStarlight(serverLevel)
      levelMutationStarted = true
      patchLevel(serverLevel, registration.holder, spec, levelSnapshot)
      starlightMutationStarted = true
      patchStarlight(serverLevel, spec, starlightSnapshot)
      check(verify(world, spec)) {
        "final verification failed: actual min=${world.minHeight} max=${world.maxHeight}"
      }
      logger.info(
          "[OWG][height] APPLY PASS world=${world.name} min=${world.minHeight} max=${world.maxHeight}"
      )
      true
    } catch (throwable: Throwable) {
      logger.log(Level.SEVERE, "[OWG][height] APPLY FAILED world=${world.name}", throwable)
      var rollbackFailure: Throwable? = null
      if (starlightMutationStarted) {
        rollbackFailure = rollback("Starlight", rollbackFailure) { starlightSnapshot!!.restore() }
      }
      if (levelMutationStarted) {
        rollbackFailure = rollback("ServerLevel", rollbackFailure) { levelSnapshot!!.restore() }
      }
      registration?.rollback?.let { restore ->
        rollbackFailure = rollback("DimensionType registry", rollbackFailure, restore)
      }
      if (rollbackFailure == null) {
        logger.info("[OWG][height] ROLLBACK PASS world=${world.name}")
      } else {
        logger.log(
            Level.SEVERE,
            "[OWG][height] ROLLBACK FAILED world=${world.name}; world must be unloaded without saving",
            rollbackFailure,
        )
      }
      false
    }
  }

  override fun verify(world: World, spec: HeightSpec): Boolean {
    return try {
      val serverLevel = (world as CraftWorld).handle
      val dimension = serverLevel.dimensionType()
      val light = serverLevel.lightEngine.`starlight$getLightEngine`()
      val expectedMinSection = spec.minY shr 4
      val expectedMaxSection = (spec.maxHeight - 1) shr 4
      val valid =
          world.minHeight == spec.minY &&
              world.maxHeight == spec.maxHeight &&
              serverLevel.minY == spec.minY &&
              serverLevel.height == spec.height &&
              serverLevel.maxY == spec.maxHeight - 1 &&
              serverLevel.minSectionY == expectedMinSection &&
              serverLevel.maxSectionY == expectedMaxSection &&
              serverLevel.sectionsCount == expectedMaxSection - expectedMinSection + 1 &&
              dimension.minY() == spec.minY &&
              dimension.height() == spec.height &&
              dimension.logicalHeight() == spec.logicalHeight &&
              readInt(light, "minSection") == expectedMinSection &&
              readInt(light, "maxSection") == expectedMaxSection &&
              readInt(light, "minLightSection") == expectedMinSection - 1 &&
              readInt(light, "maxLightSection") == expectedMaxSection + 1
      if (!valid) {
        logger.severe(
            "[OWG][height] VERIFY FAILED world=${world.name} expected=min=${spec.minY} max=${spec.maxHeight} " +
                "logical=${spec.logicalHeight} actual=min=${world.minHeight} max=${world.maxHeight} " +
                "dimension=min:${dimension.minY()} height:${dimension.height()} logical:${dimension.logicalHeight()}"
        )
      }
      valid
    } catch (throwable: Throwable) {
      logger.log(Level.SEVERE, "[OWG][height] VERIFY EXCEPTION world=${world.name}", throwable)
      false
    }
  }

  fun isSupportedServer(): Boolean =
      Bukkit.getMinecraftVersion() == SUPPORTED_MINECRAFT_VERSION &&
          Bukkit.getName().contains("Purpur", ignoreCase = true) &&
          serverBuild() in SUPPORTED_PURPUR_BUILDS

  fun appliedVersion(): String =
      "minecraft=${Bukkit.getMinecraftVersion()} purpur-build=${serverBuild() ?: "unknown"}"

  fun runtimeVersion(): String =
      "name=${Bukkit.getName()} minecraft=${Bukkit.getMinecraftVersion()} " +
          "bukkit=${Bukkit.getBukkitVersion()} server=${Bukkit.getVersion()}"

  private fun serverBuild(): String? {
    val values = listOf(Bukkit.getBukkitVersion(), Bukkit.getVersion())
    val patterns =
        listOf(
            Regex("""26\.2\.build\.(\d+)"""),
            Regex("""26\.2-(\d+)-"""),
        )
    for (value in values) {
      for (pattern in patterns) {
        pattern.find(value)?.groupValues?.get(1)?.let {
          return it
        }
      }
    }
    return null
  }

  private fun createOrReadDimensionType(
      worldName: String,
      spec: HeightSpec,
  ): DimensionRegistration {
    val registry =
        MinecraftServer.getServer().registryAccess().lookup(Registries.DIMENSION_TYPE).orElseThrow()
            as? MappedRegistry<DimensionType>
            ?: error("DimensionType registry is not a MappedRegistry")
    val key =
        ResourceKey.create(
            Registries.DIMENSION_TYPE,
            Identifier.fromNamespaceAndPath("oyasai", dimensionPath(worldName, spec)),
        )

    registry.get(key).orElse(null)?.let { existing ->
      checkDimension(existing.value(), spec, "existing registry entry")
      logger.info("[OWG][height] Registry entry reused and verified: ${key.identifier()}")
      return DimensionRegistration(existing, null)
    }

    val base = registry.getOrThrow(BuiltinDimensionTypes.END).value()
    val copied =
        DimensionType(
            base.hasFixedTime(),
            base.hasSkyLight(),
            base.hasCeiling(),
            base.hasEnderDragonFight(),
            base.coordinateScale(),
            spec.minY,
            spec.height,
            spec.logicalHeight,
            base.infiniburn(),
            base.ambientLight(),
            base.monsterSettings(),
            base.skybox(),
            base.cardinalLightType(),
            base.attributes(),
            base.timelines(),
            base.defaultClock(),
        )
    checkDimension(copied, spec, "copied DimensionType")
    logger.info("[OWG][height] Copied vanilla the_end DimensionType and verified height fields")

    val frozenField = resolveRegistryFrozenField(registry)
    val intrusiveField = resolveRegistryIntrusiveField(registry, frozenField)
    val registrySnapshot = captureRegistry(registry)
    val originalFrozen = frozenField.getBoolean(registry)
    val originalIntrusive = intrusiveField.get(registry)
    var registered: Holder.Reference<DimensionType>? = null
    var operationFailure: Throwable? = null
    try {
      writeBoolean(registry, frozenField, false)
      writeObject(
          registry,
          intrusiveField,
          IdentityHashMap<DimensionType, Holder.Reference<DimensionType>>(),
      )
      check(!frozenField.getBoolean(registry)) { "registry remained frozen after write" }
      check(intrusiveField.get(registry) is Map<*, *>) { "intrusive holder map was not installed" }
      logger.info("[OWG][height] DimensionType registry temporarily unfrozen and verified")

      registry.createIntrusiveHolder(copied)
      val newHolder = registry.register(key, copied, RegistrationInfo.BUILT_IN)
      registered = newHolder
      check(newHolder.unwrapKey().orElseThrow() == key) { "registered holder key mismatch" }
      checkDimension(newHolder.value(), spec, "registered DimensionType")
      logger.info("[OWG][height] Registered and verified ${key.identifier()}")
    } catch (throwable: Throwable) {
      operationFailure = throwable
    } finally {
      try {
        writeObject(registry, intrusiveField, originalIntrusive)
        writeBoolean(registry, frozenField, originalFrozen)
        check(frozenField.getBoolean(registry) == originalFrozen) {
          "registry frozen state was not restored"
        }
        check(intrusiveField.get(registry) === originalIntrusive) {
          "registry intrusive holder map was not restored"
        }
        logger.info("[OWG][height] DimensionType registry state restored and verified")
      } catch (restoreFailure: Throwable) {
        operationFailure?.addSuppressed(restoreFailure) ?: run { operationFailure = restoreFailure }
      }
    }
    if (operationFailure != null) {
      try {
        registrySnapshot.restore()
      } catch (restoreFailure: Throwable) {
        operationFailure.addSuppressed(restoreFailure)
        logger.log(
            Level.SEVERE,
            "[OWG][height] DimensionType registration rollback failed for ${key.identifier()}",
            restoreFailure,
        )
      }
      throw operationFailure
    }
    val holder = checkNotNull(registered) { "DimensionType registration produced no holder" }
    return DimensionRegistration(holder) { registrySnapshot.restore() }
  }

  private fun captureLevel(level: ServerLevel): LevelSnapshot {
    val values =
        intArrayOf(
            level.minY,
            level.height,
            level.maxY,
            level.minSectionY,
            level.maxSectionY,
            level.sectionsCount,
        )
    return LevelSnapshot(
        level,
        resolveDimensionHolderField(level),
        level.dimensionTypeRegistration(),
        resolveLevelHeightFields(level, values),
        values,
    )
  }

  private fun patchLevel(
      level: ServerLevel,
      holder: Holder.Reference<DimensionType>,
      spec: HeightSpec,
      snapshot: LevelSnapshot,
  ) {
    val fields = snapshot.fields
    val holderField = snapshot.holderField
    val minSection = spec.minY shr 4
    val maxSection = (spec.maxHeight - 1) shr 4
    val values =
        intArrayOf(
            spec.minY,
            spec.height,
            spec.maxHeight - 1,
            minSection,
            maxSection,
            maxSection - minSection + 1,
        )

    writeObject(level, holderField, holder)
    values.indices.forEach { writeInt(level, fields[it], values[it]) }
    check(holderField.get(level) === holder) { "dimensionTypeRegistration write did not stick" }
    values.indices.forEach {
      check(fields[it].getInt(level) == values[it]) { "${fields[it].name} readback mismatch" }
    }
    check(
        level.minY == spec.minY && level.height == spec.height && level.maxY == spec.maxHeight - 1
    ) {
      "ServerLevel public height readback mismatch"
    }
    check(level.dimensionTypeRegistration() === holder) {
      "ServerLevel dimension holder readback mismatch"
    }
    logger.info(
        "[OWG][height] ServerLevel fields patched and verified: min=${level.minY} maxExclusive=${level.maxY + 1} sections=${level.sectionsCount}"
    )
  }

  private fun captureStarlight(level: ServerLevel): StarlightSnapshot {
    val light = level.lightEngine.`starlight$getLightEngine`()
    val values =
        intArrayOf(
            readInt(light, "minSection"),
            readInt(light, "maxSection"),
            readInt(light, "minLightSection"),
            readInt(light, "maxLightSection"),
        )
    return StarlightSnapshot(light, resolveStarlightFields(light, values), values)
  }

  private fun patchStarlight(
      level: ServerLevel,
      spec: HeightSpec,
      snapshot: StarlightSnapshot,
  ) {
    val light = level.lightEngine.`starlight$getLightEngine`()
    val fields = snapshot.fields
    val minSection = spec.minY shr 4
    val maxSection = (spec.maxHeight - 1) shr 4
    val values = intArrayOf(minSection, maxSection, minSection - 1, maxSection + 1)
    values.indices.forEach { writeInt(light, fields[it], values[it]) }
    values.indices.forEach {
      check(fields[it].getInt(light) == values[it]) {
        "Starlight ${fields[it].name} readback mismatch"
      }
    }
    logger.info(
        "[OWG][height] Starlight fields patched and verified: minSection=$minSection maxSection=$maxSection minLight=${minSection - 1} maxLight=${maxSection + 1}"
    )
  }

  private fun resolveLevelHeightFields(level: ServerLevel, current: IntArray): List<Field> {
    val names = listOf("minY", "height", "maxY", "minSectionY", "maxSectionY", "sectionsCount")
    runCatching {
      return names.map { findField(level.javaClass, it, Int::class.javaPrimitiveType!!) }
    }

    val candidates = net.minecraft.world.level.Level::class.java.declaredFields.toList()
    val matches =
        candidates.indices.mapNotNull { index ->
          if (index + current.size > candidates.size) return@mapNotNull null
          val slice = candidates.subList(index, index + current.size)
          if (slice.all { it.type == Int::class.javaPrimitiveType }) {
            slice.forEach { it.isAccessible = true }
            if (slice.indices.all { slice[it].getInt(level) == current[it] }) slice else null
          } else null
        }
    check(matches.size == 1) {
      "Could not uniquely resolve Level height fields by type/order; matches=${matches.size}"
    }
    logger.warning("[OWG][height] Level field names changed; using verified type/order fallback")
    return matches.single()
  }

  private fun resolveDimensionHolderField(level: ServerLevel): Field {
    runCatching {
      return findField(level.javaClass, "dimensionTypeRegistration", Holder::class.java)
    }
    val expected = level.dimensionTypeRegistration()
    val matches =
        allFields(level.javaClass).filter { field ->
          Holder::class.java.isAssignableFrom(field.type) &&
              runCatching { field.get(level) === expected }.getOrDefault(false)
        }
    check(matches.size == 1) {
      "Could not uniquely resolve dimension holder field by type/value; matches=${matches.size}"
    }
    logger.warning(
        "[OWG][height] Dimension holder field name changed; using verified type/value fallback"
    )
    return matches.single()
  }

  private fun resolveRegistryFrozenField(registry: MappedRegistry<*>): Field {
    runCatching {
      return findField(registry.javaClass, "frozen", Boolean::class.javaPrimitiveType!!)
    }
    val matches =
        registry.javaClass.declaredFields.filter { it.type == Boolean::class.javaPrimitiveType }
    check(matches.size == 1) {
      "Could not uniquely resolve registry frozen field by type; matches=${matches.size}"
    }
    logger.warning(
        "[OWG][height] Registry frozen field name changed; using unique boolean fallback"
    )
    return matches.single().also { it.isAccessible = true }
  }

  private fun resolveRegistryIntrusiveField(
      registry: MappedRegistry<*>,
      frozenField: Field,
  ): Field {
    runCatching {
      return findField(registry.javaClass, "unregisteredIntrusiveHolders", Map::class.java)
    }
    val fields = registry.javaClass.declaredFields.toList()
    val frozenIndex = fields.indexOf(frozenField)
    val matches = fields.drop(frozenIndex + 1).filter { Map::class.java.isAssignableFrom(it.type) }
    check(matches.size == 1) {
      "Could not uniquely resolve intrusive holder map after frozen field; matches=${matches.size}"
    }
    logger.warning(
        "[OWG][height] Registry intrusive map name changed; using unique type/order fallback"
    )
    return matches.single().also { it.isAccessible = true }
  }

  private fun resolveStarlightFields(light: StarLightInterface, current: IntArray): List<Field> {
    val names = listOf("minSection", "maxSection", "minLightSection", "maxLightSection")
    runCatching {
      return names.map { findField(light.javaClass, it, Int::class.javaPrimitiveType!!) }
    }
    val candidates = light.javaClass.declaredFields.toList()
    val matches =
        candidates.indices.mapNotNull { index ->
          if (index + current.size > candidates.size) return@mapNotNull null
          val slice = candidates.subList(index, index + current.size)
          if (slice.all { it.type == Int::class.javaPrimitiveType }) {
            slice.forEach { it.isAccessible = true }
            if (slice.indices.all { slice[it].getInt(light) == current[it] }) slice else null
          } else null
        }
    check(matches.size == 1) {
      "Could not uniquely resolve Starlight bounds by type/order; matches=${matches.size}"
    }
    logger.warning(
        "[OWG][height] Starlight field names changed; using verified type/order fallback"
    )
    return matches.single()
  }

  private fun checkDimension(dimension: DimensionType, spec: HeightSpec, label: String) {
    check(
        dimension.minY() == spec.minY &&
            dimension.height() == spec.height &&
            dimension.logicalHeight() == spec.logicalHeight
    ) {
      "$label readback mismatch"
    }
  }

  private fun findField(type: Class<*>, name: String, expectedType: Class<*>): Field {
    val field =
        allFields(type).singleOrNull { it.name == name }
            ?: error("Field $name not found in ${type.name} hierarchy")
    check(
        field.type == expectedType ||
            expectedType.isAssignableFrom(field.type) ||
            field.type.isAssignableFrom(expectedType)
    ) {
      "Field ${field.name} has unexpected type ${field.type.name}; expected ${expectedType.name}"
    }
    field.isAccessible = true
    return field
  }

  private fun allFields(type: Class<*>): List<Field> =
      generateSequence(type) { it.superclass }
          .flatMap { it.declaredFields.asSequence() }
          .onEach { it.isAccessible = true }
          .toList()

  private fun readInt(target: Any, name: String): Int =
      findField(target.javaClass, name, Int::class.javaPrimitiveType!!).getInt(target)

  private fun captureRegistry(registry: MappedRegistry<DimensionType>): RegistrySnapshot {
    val byIdField = findField(registry.javaClass, "byId", List::class.java)
    val toIdField = findField(registry.javaClass, "toId", Map::class.java)
    val byLocationField = findField(registry.javaClass, "byLocation", Map::class.java)
    val byKeyField = findField(registry.javaClass, "byKey", Map::class.java)
    val byValueField = findField(registry.javaClass, "byValue", Map::class.java)
    val registrationInfosField = findField(registry.javaClass, "registrationInfos", Map::class.java)
    val lifecycleField = findField(registry.javaClass, "registryLifecycle", Any::class.java)
    val temporaryField = findField(registry.javaClass, "temporaryUnfrozenMap", Map::class.java)
    return RegistrySnapshot(
        registry,
        byIdField,
        mutableList(byIdField, registry).toList(),
        toIdField,
        mutableMap(toIdField, registry).toMap(),
        byLocationField,
        mutableMap(byLocationField, registry).toMap(),
        byKeyField,
        mutableMap(byKeyField, registry).toMap(),
        byValueField,
        mutableMap(byValueField, registry).toMap(),
        registrationInfosField,
        mutableMap(registrationInfosField, registry).toMap(),
        lifecycleField,
        lifecycleField.get(registry),
        temporaryField,
        mutableMap(temporaryField, registry).toMap(),
    )
  }

  @Suppress("UNCHECKED_CAST")
  private fun mutableList(field: Field, target: Any): MutableList<Any?> =
      field.get(target) as MutableList<Any?>

  @Suppress("UNCHECKED_CAST")
  private fun mutableMap(field: Field, target: Any): MutableMap<Any?, Any?> =
      field.get(target) as MutableMap<Any?, Any?>

  private fun rollback(
      label: String,
      previousFailure: Throwable?,
      restore: () -> Unit,
  ): Throwable? {
    return try {
      restore()
      logger.info("[OWG][height] $label rollback restored and verified")
      previousFailure
    } catch (restoreFailure: Throwable) {
      logger.log(Level.SEVERE, "[OWG][height] $label rollback failed", restoreFailure)
      if (previousFailure == null) restoreFailure
      else previousFailure.apply { addSuppressed(restoreFailure) }
    }
  }

  @Suppress("DEPRECATION")
  private fun writeInt(target: Any, field: Field, value: Int) {
    unsafe.putInt(target, unsafe.objectFieldOffset(field), value)
  }

  @Suppress("DEPRECATION")
  private fun writeBoolean(target: Any, field: Field, value: Boolean) {
    unsafe.putBoolean(target, unsafe.objectFieldOffset(field), value)
  }

  @Suppress("DEPRECATION")
  private fun writeObject(target: Any, field: Field, value: Any?) {
    unsafe.putObject(target, unsafe.objectFieldOffset(field), value)
  }

  private fun resolveUnsafe(): Unsafe {
    val field = Unsafe::class.java.getDeclaredField("theUnsafe")
    field.isAccessible = true
    return field.get(null) as Unsafe
  }

  private fun dimensionPath(worldName: String, spec: HeightSpec): String {
    val safeName = worldName.lowercase().replace(Regex("[^a-z0-9/._-]"), "_")
    return "the_end_${safeName}_${spec.minY}_${spec.height}_${spec.logicalHeight}"
  }

  private data class DimensionRegistration(
      val holder: Holder.Reference<DimensionType>,
      val rollback: (() -> Unit)?,
  )

  private inner class LevelSnapshot(
      private val level: ServerLevel,
      val holderField: Field,
      private val holder: Holder<DimensionType>,
      val fields: List<Field>,
      private val values: IntArray,
  ) {
    fun restore() {
      fields.indices.reversed().forEach { writeInt(level, fields[it], values[it]) }
      writeObject(level, holderField, holder)
      check(holderField.get(level) === holder) { "dimension holder rollback readback mismatch" }
      fields.indices.forEach { index ->
        check(fields[index].getInt(level) == values[index]) {
          "${fields[index].name} rollback readback mismatch"
        }
      }
      check(level.minY == values[0] && level.height == values[1] && level.maxY == values[2]) {
        "ServerLevel public rollback readback mismatch"
      }
      check(level.dimensionTypeRegistration() === holder) {
        "ServerLevel dimension holder rollback mismatch"
      }
    }
  }

  private inner class StarlightSnapshot(
      private val light: StarLightInterface,
      val fields: List<Field>,
      private val values: IntArray,
  ) {
    fun restore() {
      fields.indices.reversed().forEach { writeInt(light, fields[it], values[it]) }
      fields.indices.forEach { index ->
        check(fields[index].getInt(light) == values[index]) {
          "Starlight ${fields[index].name} rollback readback mismatch"
        }
      }
    }
  }

  private inner class RegistrySnapshot(
      private val registry: MappedRegistry<DimensionType>,
      private val byIdField: Field,
      private val byId: List<Any?>,
      private val toIdField: Field,
      private val toId: Map<Any?, Any?>,
      private val byLocationField: Field,
      private val byLocation: Map<Any?, Any?>,
      private val byKeyField: Field,
      private val byKey: Map<Any?, Any?>,
      private val byValueField: Field,
      private val byValue: Map<Any?, Any?>,
      private val registrationInfosField: Field,
      private val registrationInfos: Map<Any?, Any?>,
      private val lifecycleField: Field,
      private val lifecycle: Any?,
      private val temporaryField: Field,
      private val temporary: Map<Any?, Any?>,
  ) {
    fun restore() {
      restoreMap(temporaryField, temporary)
      writeObject(registry, lifecycleField, lifecycle)
      restoreMap(registrationInfosField, registrationInfos)
      restoreMap(byValueField, byValue)
      restoreMap(byKeyField, byKey)
      restoreMap(byLocationField, byLocation)
      restoreMap(toIdField, toId)
      val currentById = mutableList(byIdField, registry)
      currentById.clear()
      currentById.addAll(byId)

      check(currentById.toList() == byId) { "registry byId rollback readback mismatch" }
      check(mutableMap(toIdField, registry) == toId) { "registry toId rollback mismatch" }
      check(mutableMap(byLocationField, registry) == byLocation) {
        "registry byLocation rollback mismatch"
      }
      check(mutableMap(byKeyField, registry) == byKey) { "registry byKey rollback mismatch" }
      check(mutableMap(byValueField, registry) == byValue) { "registry byValue rollback mismatch" }
      check(mutableMap(registrationInfosField, registry) == registrationInfos) {
        "registry registrationInfos rollback mismatch"
      }
      check(lifecycleField.get(registry) === lifecycle) { "registry lifecycle rollback mismatch" }
      check(mutableMap(temporaryField, registry) == temporary) {
        "registry temporary map rollback mismatch"
      }
    }

    private fun restoreMap(field: Field, snapshot: Map<Any?, Any?>) {
      val current = mutableMap(field, registry)
      current.clear()
      current.putAll(snapshot)
    }
  }

  companion object {
    private const val SUPPORTED_MINECRAFT_VERSION = "26.2"
    private val SUPPORTED_PURPUR_BUILDS = setOf("2622", "2593")
  }
}
