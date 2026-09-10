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
  override val name: String = "NMS/Purpur-26.2"

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
          "[OWG][height] Refusing to patch ${world.name}: expected Purpur 26.2, got ${Bukkit.getName()} ${Bukkit.getMinecraftVersion()}"
      )
      return false
    }

    return try {
      logger.info("[OWG][height] APPLY BEGIN world=${world.name} provider=$name")
      val serverLevel = (world as CraftWorld).handle
      val holder = createOrReadDimensionType(world.name, spec)
      patchLevel(serverLevel, holder, spec)
      patchStarlight(serverLevel, spec)
      check(verify(world, spec)) {
        "final verification failed: actual min=${world.minHeight} max=${world.maxHeight}"
      }
      logger.info(
          "[OWG][height] APPLY PASS world=${world.name} min=${world.minHeight} max=${world.maxHeight}"
      )
      true
    } catch (throwable: Throwable) {
      logger.log(Level.SEVERE, "[OWG][height] APPLY FAILED world=${world.name}", throwable)
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
      Bukkit.getMinecraftVersion() == "26.2" &&
          Bukkit.getName().contains("Purpur", ignoreCase = true)

  private fun createOrReadDimensionType(
      worldName: String,
      spec: HeightSpec,
  ): Holder.Reference<DimensionType> {
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
      return existing
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
    operationFailure?.let { throw it }
    return checkNotNull(registered) { "DimensionType registration produced no holder" }
  }

  private fun patchLevel(
      level: ServerLevel,
      holder: Holder.Reference<DimensionType>,
      spec: HeightSpec,
  ) {
    val oldValues =
        intArrayOf(
            level.minY,
            level.height,
            level.maxY,
            level.minSectionY,
            level.maxSectionY,
            level.sectionsCount,
        )
    val fields = resolveLevelHeightFields(level, oldValues)
    val holderField = resolveDimensionHolderField(level)
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
    fields.zip(values.toTypedArray()).forEach { (field, value) -> writeInt(level, field, value) }
    check(holderField.get(level) === holder) { "dimensionTypeRegistration write did not stick" }
    fields.zip(values.toTypedArray()).forEach { (field, value) ->
      check(field.getInt(level) == value) { "${field.name} readback mismatch" }
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

  private fun patchStarlight(level: ServerLevel, spec: HeightSpec) {
    val light = level.lightEngine.`starlight$getLightEngine`()
    val oldMinSection = levelHeightBeforePatch(light, "minSection")
    val oldValues =
        intArrayOf(
            oldMinSection,
            levelHeightBeforePatch(light, "maxSection"),
            levelHeightBeforePatch(light, "minLightSection"),
            levelHeightBeforePatch(light, "maxLightSection"),
        )
    val fields = resolveStarlightFields(light, oldValues)
    val minSection = spec.minY shr 4
    val maxSection = (spec.maxHeight - 1) shr 4
    val values = intArrayOf(minSection, maxSection, minSection - 1, maxSection + 1)
    fields.zip(values.toTypedArray()).forEach { (field, value) -> writeInt(light, field, value) }
    fields.zip(values.toTypedArray()).forEach { (field, value) ->
      check(field.getInt(light) == value) { "Starlight ${field.name} readback mismatch" }
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
    check(matches.isNotEmpty()) { "Could not resolve intrusive holder map after frozen field" }
    logger.warning("[OWG][height] Registry intrusive map name changed; using type/order fallback")
    return matches.first().also { it.isAccessible = true }
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

  private fun levelHeightBeforePatch(target: Any, name: String): Int = readInt(target, name)

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
}
