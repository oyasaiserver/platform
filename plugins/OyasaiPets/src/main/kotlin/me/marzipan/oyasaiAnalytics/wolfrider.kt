package me.marzipan.oyasaiAnalytics

import io.papermc.paper.entity.LookAnchor
import io.papermc.paper.event.player.AsyncChatEvent
import io.papermc.paper.registry.RegistryAccess
import io.papermc.paper.registry.RegistryKey
import java.util.Locale
import java.util.UUID
import net.kyori.adventure.text.Component
import net.kyori.adventure.text.format.NamedTextColor
import net.kyori.adventure.text.format.NamedTextColor.*
import net.kyori.adventure.text.serializer.legacy.LegacyComponentSerializer
import net.kyori.adventure.text.serializer.plain.PlainTextComponentSerializer
import org.bukkit.*
import org.bukkit.Keyed
import org.bukkit.attribute.Attribute
import org.bukkit.command.*
import org.bukkit.enchantments.Enchantment
import org.bukkit.entity.*
import org.bukkit.event.EventHandler
import org.bukkit.event.Listener
import org.bukkit.event.block.Action
import org.bukkit.event.entity.EntityDismountEvent
import org.bukkit.event.entity.EntityTeleportEvent
import org.bukkit.event.inventory.InventoryClickEvent
import org.bukkit.event.inventory.InventoryCloseEvent
import org.bukkit.event.player.*
import org.bukkit.inventory.*
import org.bukkit.persistence.PersistentDataType
import org.bukkit.plugin.java.JavaPlugin
import org.bukkit.scheduler.BukkitRunnable
import org.bukkit.util.Vector

class BigWolfPlugin : JavaPlugin(), Listener, CommandExecutor, TabCompleter {

  companion object {
    private const val PERMISSION = "bigwolf.admin"
    private const val MAX_FOOD_LEVEL = 50
    private const val SKILL_COOLDOWN_MS = 5000L

    // Keys
    lateinit var KEY_FOOD: NamespacedKey
    lateinit var KEY_OWNER: NamespacedKey
    lateinit var KEY_SILENT: NamespacedKey
    lateinit var KEY_PARTICLE: NamespacedKey
    lateinit var KEY_PET_ID: NamespacedKey
    lateinit var KEY_SKILL_TYPE: NamespacedKey
    lateinit var KEY_HOVER_STATE: NamespacedKey // ★追加: ホバリング状態

    lateinit var KEY_STORED_FLAG: NamespacedKey
    lateinit var KEY_STORED_TYPE: NamespacedKey
    lateinit var KEY_STORED_VARIANT: NamespacedKey
    lateinit var KEY_STORED_NAME: NamespacedKey
    lateinit var KEY_STORED_ID: NamespacedKey
    lateinit var KEY_STORED_SKILL: NamespacedKey
    lateinit var KEY_STORED_HOVER: NamespacedKey // ★追加
  }

  private val guiTitle = Component.text("ペットステータス", BLACK)

  // Cooldowns & Tasks
  private val skillCooldowns = mutableMapOf<UUID, Long>()
  private val mountCooldowns = mutableMapOf<UUID, Long>()
  private val dashEndTimes = mutableMapOf<UUID, Long>()
  private val dropCooldowns = mutableMapOf<UUID, Long>()

  private val renamingPlayers = mutableMapOf<UUID, LivingEntity>()
  private val openedGuis = mutableMapOf<Inventory, LivingEntity>()

  // タスク管理
  private val activeFetchTasks = mutableMapOf<UUID, BukkitRunnable>()
  // タンデム用座席管理 (ペットUUID -> 座席エンティティ)
  private val tandemSeats = mutableMapOf<UUID, ArmorStand>()

  override fun onEnable() {
    // Keys Init
    KEY_FOOD = NamespacedKey(this, "food_count")
    KEY_OWNER = NamespacedKey(this, "owner_uuid")
    KEY_SILENT = NamespacedKey(this, "is_silent_mode")
    KEY_PARTICLE = NamespacedKey(this, "particle_type")
    KEY_PET_ID = NamespacedKey(this, "unique_pet_id")
    KEY_SKILL_TYPE = NamespacedKey(this, "skill_type")
    KEY_HOVER_STATE = NamespacedKey(this, "hover_state")

    KEY_STORED_FLAG = NamespacedKey(this, "is_stored_pet")
    KEY_STORED_TYPE = NamespacedKey(this, "stored_type")
    KEY_STORED_VARIANT = NamespacedKey(this, "stored_variant")
    KEY_STORED_NAME = NamespacedKey(this, "stored_name")
    KEY_STORED_ID = NamespacedKey(this, "stored_pet_id")
    KEY_STORED_SKILL = NamespacedKey(this, "stored_skill")
    KEY_STORED_HOVER = NamespacedKey(this, "stored_hover")

    getCommand("bigwolf")?.apply {
      setExecutor(this@BigWolfPlugin)
      setTabCompleter(this@BigWolfPlugin)
    }
    server.pluginManager.registerEvents(this, this)
    logger.info("BigWolfPlugin enabled")
  }

  override fun onDisable() {
    // 座席のクリーンアップ
    tandemSeats.values.forEach { if (it.isValid) it.remove() }
    tandemSeats.clear()
    logger.info("BigWolfPlugin disabled")
  }

  // --- Extension Properties (PDC Access) ---
  private var LivingEntity.foodLevel: Int
    get() = persistentDataContainer.get(KEY_FOOD, PersistentDataType.INTEGER) ?: 0
    set(value) = persistentDataContainer.set(KEY_FOOD, PersistentDataType.INTEGER, value)

  private var LivingEntity.ownerId: String?
    get() = persistentDataContainer.get(KEY_OWNER, PersistentDataType.STRING)
    set(value) {
      if (value != null) persistentDataContainer.set(KEY_OWNER, PersistentDataType.STRING, value)
    }

  private var LivingEntity.isSilentMode: Boolean
    get() = (persistentDataContainer.get(KEY_SILENT, PersistentDataType.BYTE) ?: 0).toInt() == 1
    set(value) =
        persistentDataContainer.set(KEY_SILENT, PersistentDataType.BYTE, if (value) 1 else 0)

  private var LivingEntity.particleType: Int
    get() = persistentDataContainer.get(KEY_PARTICLE, PersistentDataType.INTEGER) ?: 0
    set(value) = persistentDataContainer.set(KEY_PARTICLE, PersistentDataType.INTEGER, value)

  private var LivingEntity.petId: String?
    get() = persistentDataContainer.get(KEY_PET_ID, PersistentDataType.STRING)
    set(value) {
      if (value != null) persistentDataContainer.set(KEY_PET_ID, PersistentDataType.STRING, value)
    }

  private var LivingEntity.skillType: Int
    get() = persistentDataContainer.get(KEY_SKILL_TYPE, PersistentDataType.INTEGER) ?: 0
    set(value) = persistentDataContainer.set(KEY_SKILL_TYPE, PersistentDataType.INTEGER, value)

  // ★追加: ホバリング状態
  private var LivingEntity.isHovering: Boolean
    get() =
        (persistentDataContainer.get(KEY_HOVER_STATE, PersistentDataType.BYTE) ?: 0).toInt() == 1
    set(value) =
        persistentDataContainer.set(KEY_HOVER_STATE, PersistentDataType.BYTE, if (value) 1 else 0)

  // --- Commands ---
  override fun onCommand(
      sender: CommandSender,
      command: Command,
      label: String,
      args: Array<out String>,
  ): Boolean {
    if (!sender.hasPermission(PERMISSION))
        return true.also { sender.sendMessage(Component.text("権限がありません。", RED)) }
    if (sender !is Player)
        return true.also { sender.sendMessage(Component.text("プレイヤーのみ可能です。", RED)) }

    if (args.isEmpty()) {
      spawnAndMountEntity(sender, EntityType.WOLF, null)
      return true
    }

    val sub = args[0].lowercase()

    when (sub) {
      "toy" -> {
        if (!sender.isOp) {
          sender.sendMessage(Component.text("おもちゃを入手する権限(OP)がありません。", RED))
          return true
        }
        val toys = PetRegistry.getAllToyItems()
        if (toys.isNotEmpty()) {
          toys.forEach { sender.inventory.addItem(it) }
          sender.sendMessage(Component.text("おもちゃセットを入手しました！", YELLOW))
        } else {
          sender.sendMessage(Component.text("おもちゃ定義が見つかりません。", GRAY))
        }
      }
      "food" -> {
        sender.inventory.addItem(createPetFoodItem())
        sender.sendMessage(Component.text("魔法のペットフードを入手しました！", YELLOW))
      }
      "exp" -> handleExperimentalSummon(sender, args)
      else -> handleNormalSummon(sender, sub, args)
    }
    return true
  }

  private fun handleExperimentalSummon(player: Player, args: Array<out String>) {
    if (!player.isOp) {
      player.sendMessage(Component.text("実験的なMOBを召喚する権限(OP)がありません。", RED))
      return
    }
    if (args.size < 2) {
      player.sendMessage(Component.text("MOB名を指定してください。例: /bigwolf exp zombie", RED))
      return
    }
    val type = runCatching { EntityType.valueOf(args[1].uppercase()) }.getOrNull()
    if (type == null || !type.isAlive) {
      player.sendMessage(Component.text("無効なMOB名です。", RED))
      return
    }
    val variant = if (args.size >= 3) args[2].lowercase() else null
    spawnAndMountEntity(player, type, variant)
    player.sendMessage(Component.text("[Exp] 実験的MOB: ${type.name} を召喚しました。", GRAY))
  }

  private fun handleNormalSummon(player: Player, sub: String, args: Array<out String>) {
    val type = runCatching { EntityType.valueOf(sub.uppercase()) }.getOrNull()
    if (type == null) {
      player.sendMessage(Component.text("そのエンティティは見つかりません: $sub", RED))
      return
    }

    if (!PetRegistry.isOfficial(type)) {
      player.sendMessage(Component.text("そのMOB (${type.name}) は通常召喚できません。", RED))
      player.sendMessage(Component.text("実験的なMOBの召喚にはOP権限と /bigwolf exp コマンドが必要です。", GRAY))
      return
    }

    if (!type.isAlive) {
      player.sendMessage(Component.text("召喚できません。", RED))
      return
    }
    val variant = if (args.size >= 2) args[1].lowercase() else null
    spawnAndMountEntity(player, type, variant)
  }

  override fun onTabComplete(
      sender: CommandSender,
      command: Command,
      label: String,
      args: Array<out String>,
  ): MutableList<String>? {
    if (!sender.hasPermission(PERMISSION)) return mutableListOf()

    return when (args.size) {
      1 -> {
        val completions =
            PetRegistry.officialPets.map { it.name.lowercase() } +
                listOf("food") +
                if (sender.isOp) listOf("toy") else emptyList()
        val result = if (sender.isOp) completions + "exp" else completions
        result.filter { it.startsWith(args[0].lowercase()) }.toMutableList()
      }
      2 -> {
        val arg1 = args[0].lowercase()
        if (arg1 == "exp") {
          if (!sender.isOp) return mutableListOf()
          EntityType.entries
              .filter { it.isSpawnable && it.isAlive }
              .map { it.name.lowercase() }
              .filter { it.startsWith(args[1].lowercase()) }
              .toMutableList()
        } else {
          val type = runCatching { EntityType.valueOf(arg1.uppercase()) }.getOrNull()
          if (type != null && PetRegistry.isOfficial(type)) {
            VariantHandler.getVariantNames(type)
                .map { it.lowercase() }
                .filter { it.startsWith(args[1].lowercase()) }
                .toMutableList()
          } else {
            mutableListOf()
          }
        }
      }
      3 -> {
        if (args[0].lowercase() == "exp") {
          val type = runCatching { EntityType.valueOf(args[1].uppercase()) }.getOrNull()
          if (type != null) {
            VariantHandler.getVariantNames(type)
                .map { it.lowercase() }
                .filter { it.startsWith(args[2].lowercase()) }
                .toMutableList()
          } else mutableListOf()
        } else mutableListOf()
      }
      else -> mutableListOf()
    }
  }

  // --- Events ---

  @EventHandler
  fun onPlayerDropItem(event: PlayerDropItemEvent) {
    dropCooldowns[event.player.uniqueId] = System.currentTimeMillis()
  }

  @EventHandler
  fun onEntityTeleport(event: EntityTeleportEvent) {
    if (activeFetchTasks.containsKey(event.entity.uniqueId)) {
      event.isCancelled = true
    }
  }

  // ★ 追加: 降車時の自動着陸処理
  @EventHandler
  fun onEntityDismount(event: EntityDismountEvent) {
    val entity = event.dismounted as? LivingEntity ?: return
    // ペットかどうか確認
    if (entity.ownerId == null) return

    val spec = PetRegistry.get(entity.type)
    if (spec.category == PetCategory.FLYING) {
      // 着地するまで下方向に力を加え続けるタスク
      object : BukkitRunnable() {
            override fun run() {
              // エンティティが無効、死亡、または誰かが乗った場合は終了
              if (!entity.isValid || entity.isDead || !entity.passengers.isEmpty()) {
                cancel()
                return
              }
              // 地面に着いたら終了
              if (entity.isOnGround) {
                cancel()
                return
              }
              // ゆっくり降下
              val vel = entity.velocity
              vel.y = -0.2
              entity.velocity = vel
            }
          }
          .runTaskTimer(this, 0L, 1L)
    }
  }

  @EventHandler
  fun onEntityInteract(event: PlayerInteractEntityEvent) {
    val player = event.player
    val entity = event.rightClicked as? LivingEntity ?: return

    checkAndMigrateOwner(entity, player)
    val isOwner = isOwner(entity, player)

    val plainName =
        entity.customName()?.let { PlainTextComponentSerializer.plainText().serialize(it) } ?: ""
    if (entity.ownerId == null && !plainName.contains("'s Big ")) return

    event.isCancelled = true

    if (isOwner && isPetFood(player.inventory.itemInMainHand)) {
      giveFood(player, entity)
      return
    }

    if (isOwner) {
      if (!player.hasPermission(PERMISSION))
          return player.sendMessage(Component.text("権限がありません。", RED))

      if (player.isSneaking) {
        openInfoGui(player, entity)
      } else {
        if (player !in entity.passengers) {
          stopFetchTask(entity)
          if (entity is Sittable) entity.isSitting = false
          entity.addPassenger(player)
          mountCooldowns[player.uniqueId] = System.currentTimeMillis()
          player.sendMessage(Component.text("運転席に乗りました！(左クリックでスキル)", GREEN))
          startControlTask(player, entity)
        }
      }
    } else {
      // 同乗処理 (タンデム)
      val spec = PetRegistry.get(entity.type)
      if (spec.category == PetCategory.LAND) {
        mountTandem(player, entity)
      } else {
        player.sendMessage(Component.text("このペットは2人乗りできません（陸上生物のみ可）。", RED))
      }
    }
  }

  private fun mountTandem(player: Player, pet: LivingEntity) {
    var seat = tandemSeats[pet.uniqueId]
    if (seat == null || !seat.isValid) {
      val loc = pet.location.clone().subtract(pet.location.direction.multiply(1.2))
      seat =
          pet.world.spawn(loc, ArmorStand::class.java) {
            it.isVisible = false
            it.isMarker = true
            it.isSmall = true
            it.setGravity(false)
            it.setBasePlate(false)
          }
      tandemSeats[pet.uniqueId] = seat
    }

    if (seat.passengers.isNotEmpty()) {
      player.sendMessage(Component.text("席がいっぱいです。", RED))
      return
    }

    seat.addPassenger(player)
    player.sendMessage(Component.text("後ろに乗りました！", YELLOW))
  }

  @EventHandler
  fun onPlayerInteract(event: PlayerInteractEvent) {
    val item = event.item ?: return
    val player = event.player

    if (event.action == Action.RIGHT_CLICK_AIR || event.action == Action.RIGHT_CLICK_BLOCK) {
      val toySpec = PetRegistry.findSpecByToy(item)

      if (toySpec != null && toySpec.toyType == ToyType.THROW_FETCH) {
        event.isCancelled = true
        handleThrowToy(player, item, toySpec)
        return
      }
    }

    if (event.action == Action.RIGHT_CLICK_BLOCK && event.hand == EquipmentSlot.HAND) {
      val meta = item.itemMeta ?: return
      if (meta.persistentDataContainer.has(KEY_STORED_FLAG, PersistentDataType.BYTE)) {
        event.isCancelled = true
        val loc = event.clickedBlock?.location?.add(0.5, 1.0, 0.5) ?: return
        restorePetFromItem(player, item, loc)
      }
    }
  }

  private fun handleThrowToy(player: Player, item: ItemStack, toySpec: PetSpec) {
    val pet =
        player.getNearbyEntities(15.0, 10.0, 15.0).filterIsInstance<LivingEntity>().firstOrNull {
          it.type == toySpec.entityType && isOwner(it, player) && it.passengers.isEmpty()
        }

    if (pet != null) {
      val thrownItem = player.world.dropItem(player.eyeLocation, item.asOne())
      thrownItem.setGravity(toySpec.toyGravity)
      if (!toySpec.toyGravity) {
        thrownItem.velocity = player.location.direction.multiply(0.5)
      } else {
        thrownItem.velocity = player.location.direction.multiply(1.2)
      }

      thrownItem.pickupDelay = 20
      item.amount -= 1

      player.sendMessage(Component.text("取ってこい！", AQUA))
      player.playSound(player.location, Sound.ENTITY_SNOWBALL_THROW, 1f, 1f)

      startFetchTask(player, pet, thrownItem, toySpec)
    } else {
      player.sendMessage(Component.text("遊んでくれる ${toySpec.entityType.name} が近くにいません。", RED))
    }
  }

  @EventHandler
  fun onPlayerFish(event: PlayerFishEvent) {
    val player = event.player
    val item = player.inventory.itemInMainHand

    val toySpec = PetRegistry.findSpecByToy(item) ?: return
    if (toySpec.toyType != ToyType.FISHING_ROD) return

    if (event.state == PlayerFishEvent.State.FISHING) {
      handleFishingToy(player, toySpec)
    }
  }

  private fun handleFishingToy(player: Player, toySpec: PetSpec) {
    val pet =
        player.getNearbyEntities(15.0, 10.0, 15.0).filterIsInstance<LivingEntity>().firstOrNull {
          it.type == toySpec.entityType && isOwner(it, player) && it.passengers.isEmpty()
        }

    if (pet != null) {
      val targetLoc = player.eyeLocation.add(player.location.direction.normalize().multiply(6.0))
      val vec = targetLoc.toVector().subtract(pet.location.toVector())
      val dist = vec.clone().setY(0).length()
      val strength = (dist * 0.25).coerceIn(0.5, 1.8)
      val velocity = vec.clone().setY(0).normalize().multiply(strength).setY(0.6)

      pet.velocity = velocity
      pet.lookAt(targetLoc, LookAnchor.EYES)

      player.sendMessage(Component.text("とびかかれ！", LIGHT_PURPLE))
      pet.world.playSound(pet.location, Sound.ENTITY_CAT_HISS, 1f, 1f)
    }
  }

  @EventHandler
  fun onPlayerSkillTrigger(event: PlayerInteractEvent) {
    if (event.action != Action.LEFT_CLICK_AIR && event.action != Action.LEFT_CLICK_BLOCK) return
    if (event.hand != EquipmentSlot.HAND) return

    val player = event.player
    val vehicle = player.vehicle as? LivingEntity ?: return

    if (!isOwner(vehicle, player)) return

    val now = System.currentTimeMillis()
    if (now - dropCooldowns.getOrDefault(player.uniqueId, 0L) < 500) return
    if (now - mountCooldowns.getOrDefault(player.uniqueId, 0L) < 1000) return

    val skill = vehicle.skillType
    if (skill == 3) return

    // ★修正: スキル2 (ホバリング/水泳) の処理
    if (skill == 2) {
      val spec = PetRegistry.get(vehicle.type)
      if (spec.category == PetCategory.FLYING) {
        // ホバリング切り替え
        val newState = !vehicle.isHovering
        vehicle.isHovering = newState
        val status = if (newState) "ON" else "OFF"
        val color = if (newState) GREEN else RED
        player.sendActionBar(Component.text("ホバリング: $status", color))
        vehicle.world.playSound(vehicle.location, Sound.UI_BUTTON_CLICK, 1f, 2f)
      } else {
        // 水生生物などのパッシブ表示
        player.sendActionBar(Component.text("水泳モード有効中", AQUA))
      }
      return
    }

    val lastUsed = skillCooldowns.getOrDefault(player.uniqueId, 0L)
    if (now - lastUsed < SKILL_COOLDOWN_MS) {
      val remain = "%.1f".format((SKILL_COOLDOWN_MS - (now - lastUsed)) / 1000.0)
      player.sendActionBar(Component.text("スキル準備中... 残り $remain 秒", RED))
      return
    }

    skillCooldowns[player.uniqueId] = now
    when (skill) {
      0 -> activateRoarSkill(player, vehicle)
      1 -> activateDashSkill(player, vehicle)
    }
  }

  @EventHandler
  fun onInventoryClick(event: InventoryClickEvent) {
    if (event.view.title() != guiTitle) return
    event.isCancelled = true
    val player = event.whoClicked as? Player ?: return
    val item = event.currentItem ?: return

    val entity =
        openedGuis[event.view.topInventory]
            ?: return player.closeInventory().also {
              player.sendMessage(Component.text("操作対象のペットが見つかりません。", RED))
            }

    if (!entity.isValid) {
      player.closeInventory()
      player.sendMessage(Component.text("ペットが存在しません。", RED))
      return
    }

    when (item.type) {
      Material.NAME_TAG -> {
        player.closeInventory()
        renamingPlayers[player.uniqueId] = entity
        player.sendMessage(Component.text("--------------------------------", YELLOW))
        player.sendMessage(Component.text("新しい名前をチャットに入力してください。(例: amanda)", AQUA))
        player.sendMessage(Component.text("--------------------------------", YELLOW))
      }
      Material.LIME_WOOL,
      Material.RED_WOOL -> {
        entity.isSilentMode = !entity.isSilentMode
        player.playSound(player.location, Sound.UI_BUTTON_CLICK, 1f, 1f)
        openInfoGui(player, entity)
      }
      Material.IRON_SWORD -> {
        var nextSkill = entity.skillType + 1
        if (nextSkill > 3) nextSkill = 0
        entity.skillType = nextSkill
        player.playSound(player.location, Sound.UI_BUTTON_CLICK, 1f, 1f)
        openInfoGui(player, entity)
      }
      Material.BLAZE_POWDER -> {
        entity.particleType = (entity.particleType + 1) % 5
        player.playSound(player.location, Sound.BLOCK_AMETHYST_BLOCK_CHIME, 1f, 1f)
        openInfoGui(player, entity)
      }
      Material.CHEST -> {
        player.closeInventory()
        storePetToItem(player, entity)
      }
      else -> {}
    }
  }

  @EventHandler
  fun onInventoryClose(event: InventoryCloseEvent) {
    openedGuis.remove(event.inventory)
  }

  @EventHandler
  fun onPlayerChat(event: AsyncChatEvent) {
    val player = event.player
    val entity = renamingPlayers.remove(player.uniqueId) ?: return
    event.isCancelled = true

    val msg = PlainTextComponentSerializer.plainText().serialize(event.message())
    if (entity.isValid && !msg.equals("cancel", true)) {
      Bukkit.getScheduler()
          .runTask(
              this,
              Runnable {
                entity.customName(LegacyComponentSerializer.legacyAmpersand().deserialize(msg))
                entity.isCustomNameVisible = true
                player.sendMessage(Component.text("名前を変更しました！", GREEN))
                entity.world.playSound(entity.location, Sound.ENTITY_PLAYER_LEVELUP, 1f, 1f)
              },
          )
    } else {
      player.sendMessage(Component.text("変更をキャンセルしました。", RED))
    }
  }

  @EventHandler
  fun onPlayerQuit(event: PlayerQuitEvent) {
    renamingPlayers.remove(event.player.uniqueId)
    mountCooldowns.remove(event.player.uniqueId)
    skillCooldowns.remove(event.player.uniqueId)
    dashEndTimes.remove(event.player.uniqueId)
    dropCooldowns.remove(event.player.uniqueId)
  }

  // --- Logic Methods ---

  private fun setupPetEntity(entity: LivingEntity, spec: PetSpec, player: Player) {
    entity.apply {
      customName(Component.text("${player.name}'s Big ${type.name}"))
      isCustomNameVisible = true
      setRemoveWhenFarAway(false)
      isInvulnerable = true
      setAI(true)

      getAttribute(Attribute.SCALE)?.baseValue = spec.scaleRange.start
      getAttribute(Attribute.MOVEMENT_SPEED)?.baseValue = 0.0
      getAttribute(Attribute.FLYING_SPEED)?.baseValue = 0.0
      getAttribute(Attribute.STEP_HEIGHT)?.baseValue = 1.1

      if (this is Tameable) {
        isTamed = true
        owner = player
      }
      if (this is Sittable) isSitting = false
      if (this is Ageable) setAdult()
    }
  }

  private fun spawnAndMountEntity(player: Player, type: EntityType, variantName: String?) {
    val spec = PetRegistry.get(type)
    val entity =
        player.world.spawnEntity(player.location.add(0.0, 1.0, 0.0), type) as? LivingEntity
            ?: return

    setupPetEntity(entity, spec, player)

    if (variantName != null) {
      VariantHandler.applyVariant(entity, variantName)
    }

    entity.ownerId = player.uniqueId.toString()
    entity.petId = UUID.randomUUID().toString()
    entity.foodLevel = 0
    entity.isSilentMode = false
    entity.particleType = 0
    entity.skillType = 0
    entity.isHovering = false // 初期はホバリングOFF

    updateStats(entity, 0, spec)

    Bukkit.getScheduler()
        .runTaskLater(
            this,
            Runnable {
              entity.addPassenger(player)
              mountCooldowns[player.uniqueId] = System.currentTimeMillis()
              startControlTask(player, entity)
            },
            2L,
        )

    player.sendMessage(Component.text("巨大な ${type.name} を召喚しました！", AQUA))
  }

  private fun startFetchTask(player: Player, entity: LivingEntity, toyItem: Item, spec: PetSpec) {
    activeFetchTasks[entity.uniqueId]?.cancel()

    val returnItemStack = spec.createToyItem()
    val holdingMat = returnItemStack.type

    val task =
        object : BukkitRunnable() {
          var phase = 0
          val runSpeed = 0.35

          override fun run() {
            if (!entity.isValid || entity.isDead || !player.isOnline) {
              cleanup(true)
              return
            }
            if (!entity.passengers.isEmpty()) {
              cleanup(true)
              return
            }
            if (phase == 0) {
              if (!toyItem.isValid) {
                cleanup(false)
                return
              }
              val targetLoc = toyItem.location
              val dist = entity.location.distance(targetLoc)
              if (dist < 1.5) {
                toyItem.remove()
                entity.equipment?.setItemInMainHand(returnItemStack)
                entity.world.playSound(entity.location, Sound.ENTITY_ITEM_PICKUP, 1f, 1f)
                phase = 1
              } else {
                moveTo(entity, targetLoc, runSpeed)
              }
            } else {
              if (entity.equipment?.itemInMainHand?.type != holdingMat) {
                entity.equipment?.setItemInMainHand(returnItemStack)
              }
              val targetLoc = player.location
              val dist = entity.location.distance(targetLoc)
              if (dist < 2.5) {
                player.sendMessage(Component.text("えらい！", GREEN))
                entity.world.spawnParticle(Particle.HEART, entity.location.add(0.0, 1.0, 0.0), 3)
                entity.world.playSound(entity.location, Sound.ENTITY_EXPERIENCE_ORB_PICKUP, 1f, 1f)

                entity.equipment?.setItemInMainHand(null)

                val dirToPlayer =
                    player.location.toVector().subtract(entity.location.toVector()).normalize()
                val dropLoc = entity.location.add(0.0, 0.5, 0.0).add(dirToPlayer)

                val dropped = entity.world.dropItem(dropLoc, returnItemStack)
                dropped.setGravity(spec.toyGravity)
                dropped.pickupDelay = 20

                if (spec.toyGravity) {
                  dropped.velocity = Vector(0, 0, 0)
                } else {
                  dropped.velocity = Vector(0, 0, 0)
                }

                cleanup(false)
              } else {
                moveTo(entity, targetLoc, runSpeed)
              }
            }
          }

          fun moveTo(e: LivingEntity, loc: Location, speed: Double) {
            val targetVec =
                loc.toVector().subtract(e.location.toVector()).normalize().multiply(speed)

            if (spec.category == PetCategory.FLYING ||
                (spec.category == PetCategory.WATER && e.isInWater)) {
              e.velocity = targetVec
            } else {
              targetVec.y = e.velocity.y
              e.velocity = targetVec
            }

            e.lookAt(loc, LookAnchor.EYES)
          }

          fun cleanup(dropItem: Boolean) {
            if (dropItem) {
              entity.equipment?.setItemInMainHand(null)
              val drop = entity.world.dropItem(entity.location, returnItemStack)
              drop.setGravity(spec.toyGravity)
              if (!spec.toyGravity) drop.velocity = Vector(0, 0, 0)
            }
            this.cancel()
            activeFetchTasks.remove(entity.uniqueId)
          }
        }
    task.runTaskTimer(this, 0L, 1L)
    activeFetchTasks[entity.uniqueId] = task
  }

  private fun stopFetchTask(entity: LivingEntity) {
    if (activeFetchTasks.containsKey(entity.uniqueId)) {
      activeFetchTasks[entity.uniqueId]?.cancel()
      activeFetchTasks.remove(entity.uniqueId)
      if (entity.equipment?.itemInMainHand?.type != Material.AIR) {
        entity.equipment?.setItemInMainHand(null)
      }
    }
  }

  private fun storePetToItem(player: Player, entity: LivingEntity) {
    if (player.inventory.firstEmpty() == -1)
        return player.sendMessage(Component.text("インベントリがいっぱいです！", RED))

    val matName = "${entity.type.name}_SPAWN_EGG"
    val mat = Material.getMaterial(matName) ?: Material.PIG_SPAWN_EGG
    val item = ItemStack(mat)
    val meta = item.itemMeta

    val pdc = meta.persistentDataContainer
    pdc.set(KEY_STORED_FLAG, PersistentDataType.BYTE, 1)
    pdc.set(KEY_STORED_TYPE, PersistentDataType.STRING, entity.type.name)

    val pid = entity.petId ?: UUID.randomUUID().toString()
    pdc.set(KEY_STORED_ID, PersistentDataType.STRING, pid)

    val currentName = entity.customName() ?: Component.text(entity.type.name)
    val nameStr = LegacyComponentSerializer.legacyAmpersand().serialize(currentName)
    pdc.set(KEY_STORED_NAME, PersistentDataType.STRING, nameStr)

    pdc.set(KEY_FOOD, PersistentDataType.INTEGER, entity.foodLevel)
    pdc.set(KEY_SILENT, PersistentDataType.BYTE, if (entity.isSilentMode) 1 else 0)
    pdc.set(KEY_PARTICLE, PersistentDataType.INTEGER, entity.particleType)
    pdc.set(KEY_STORED_SKILL, PersistentDataType.INTEGER, entity.skillType)
    pdc.set(KEY_STORED_HOVER, PersistentDataType.BYTE, if (entity.isHovering) 1 else 0)

    val variantName = VariantHandler.getVariantNameFromEntity(entity)
    if (variantName != null) {
      pdc.set(KEY_STORED_VARIANT, PersistentDataType.STRING, variantName)
    }

    meta.displayName(Component.text("収納された: ", GOLD).append(currentName))
    meta.lore(
        listOf(
            Component.text("右クリックで解放", GRAY), Component.text("ID: ${pid.take(8)}...", DARK_GRAY)))
    meta.addEnchant(Enchantment.UNBREAKING, 1, true)
    meta.addItemFlags(ItemFlag.HIDE_ENCHANTS)
    item.itemMeta = meta

    player.inventory.addItem(item)
    entity.remove()
    player.playSound(player.location, Sound.ENTITY_ENDERMAN_TELEPORT, 1f, 1f)
    player.sendMessage(Component.text("ペットをアイテムに収納しました！", GREEN))
  }

  private fun restorePetFromItem(player: Player, item: ItemStack, loc: Location) {
    val meta = item.itemMeta
    val pdc = meta.persistentDataContainer

    val storedId = pdc.get(KEY_STORED_ID, PersistentDataType.STRING)
    if (storedId != null) {
      for (world in Bukkit.getWorlds()) {
        for (e in world.livingEntities) {
          if (e.petId == storedId) {
            player.sendMessage(Component.text("このペットは既に召喚されています！(コピー禁止)", RED))
            return
          }
        }
      }
    }

    val typeStr = pdc.get(KEY_STORED_TYPE, PersistentDataType.STRING) ?: "WOLF"
    val type = runCatching { EntityType.valueOf(typeStr) }.getOrNull() ?: EntityType.WOLF
    val spec = PetRegistry.get(type)

    val entity = player.world.spawnEntity(loc, type) as? LivingEntity ?: return

    setupPetEntity(entity, spec, player)

    val nameStr = pdc.get(KEY_STORED_NAME, PersistentDataType.STRING)
    if (nameStr != null) {
      entity.customName(LegacyComponentSerializer.legacyAmpersand().deserialize(nameStr))
      entity.isCustomNameVisible = true
    }

    entity.ownerId = player.uniqueId.toString()
    entity.petId = storedId ?: UUID.randomUUID().toString()

    val food = pdc.get(KEY_FOOD, PersistentDataType.INTEGER) ?: 0
    entity.foodLevel = food
    entity.isSilentMode = (pdc.get(KEY_SILENT, PersistentDataType.BYTE) ?: 0).toInt() == 1
    entity.particleType = pdc.get(KEY_PARTICLE, PersistentDataType.INTEGER) ?: 0
    entity.skillType = pdc.get(KEY_STORED_SKILL, PersistentDataType.INTEGER) ?: 0
    entity.isHovering = (pdc.get(KEY_STORED_HOVER, PersistentDataType.BYTE) ?: 0).toInt() == 1

    updateStats(entity, food, spec)

    val vStr = pdc.get(KEY_STORED_VARIANT, PersistentDataType.STRING)
    if (vStr != null) {
      VariantHandler.applyVariant(entity, vStr)
    }

    item.amount -= 1
    player.sendMessage(Component.text("ペットを解放しました！", GREEN))
    player.playSound(loc, Sound.ENTITY_ITEM_PICKUP, 1f, 1f)
  }

  private fun startControlTask(player: Player, entity: LivingEntity) {
    val spec = PetRegistry.get(entity.type)

    object : BukkitRunnable() {
          override fun run() {
            if (!entity.isValid || !player.isOnline || player !in entity.passengers) {
              if (entity.isValid) entity.isSilent = false
              cancel()
              return
            }
            if (entity is Sittable) entity.isSitting = false

            val level = entity.foodLevel
            val progress = level.toDouble() / MAX_FOOD_LEVEL

            var speed = spec.baseSpeed + (spec.maxSpeed - spec.baseSpeed) * progress
            entity.isSilent = entity.isSilentMode

            val inWater = entity.isInWater

            when (spec.category) {
              PetCategory.LAND -> {
                if (inWater && entity.skillType != 2) speed *= 0.3
              }
              PetCategory.WATER -> {
                if (inWater) speed *= 1.2 else speed *= 0.6
              }
              PetCategory.FLYING -> {
                if (inWater) speed *= 0.3
              }
            }

            val now = System.currentTimeMillis()
            val isDashing = now < dashEndTimes.getOrDefault(player.uniqueId, 0L)
            val input = player.currentInput
            val dir = player.location.direction.setY(0).normalize()
            val right = dir.clone().crossProduct(Vector(0, 1, 0))
            val velocity = Vector(0, 0, 0)

            if (input.isForward) velocity.add(dir)
            if (input.isBackward) velocity.subtract(dir)
            if (input.isLeft) velocity.subtract(right)
            if (input.isRight) velocity.add(right)

            // 水生生物: 水中上下
            if (spec.category == PetCategory.WATER && inWater) {
              if (input.isForward || input.isBackward) {
                velocity.y = player.location.direction.y * speed
              }
            }

            if (isDashing) {
              spawnParticles(entity)
            } else {
              if (velocity.lengthSquared() > 0) {
                velocity.normalize().multiply(speed)
                if (spec.category != PetCategory.WATER || !inWater) {
                  velocity.y = entity.velocity.y
                }
                if (inWater && input.isJump && spec.category != PetCategory.WATER) {
                  velocity.y = 0.4
                }
                entity.velocity = velocity
                spawnParticles(entity)
              }
            }

            // ジャンプ・飛行処理
            if (spec.category == PetCategory.FLYING) {
              if (input.isJump) {
                val vel = entity.velocity
                vel.y = 0.4
                entity.velocity = vel
                if (entity.ticksLived % 5 == 0) {
                  entity.world.spawnParticle(
                      Particle.CLOUD, entity.location, 1, 0.0, 0.0, 0.0, 0.01)
                }
              } else if (!entity.isOnGround) {
                // ★修正: ホバリングスキル実装 (SkillType 2)
                if (entity.skillType == 2 && entity.isHovering) {
                  // ホバリング (静止)
                  val vel = entity.velocity
                  vel.y = 0.0
                  entity.velocity = vel
                  if (entity.ticksLived % 10 == 0) {
                    entity.world.spawnParticle(
                        Particle.END_ROD,
                        entity.location,
                        1,
                        0.1,
                        0.0,
                        0.1,
                        0.0,
                    )
                  }
                } else {
                  // スローフォーリング
                  val vel = entity.velocity
                  vel.y = -0.15
                  entity.velocity = vel
                }
              }
            } else {
              // 陸・水 (ジャンプ)
              if (input.isJump && entity.isOnGround && !inWater) {
                entity.velocity = entity.velocity.setY(spec.jumpPower)
              }
            }

            entity.setRotation(player.location.yaw, 0f)

            // タンデム座席
            val seat = tandemSeats[entity.uniqueId]
            if (seat != null) {
              if (!seat.isValid || seat.passengers.isEmpty()) {
                seat.remove()
                tandemSeats.remove(entity.uniqueId)
              } else {
                val offset = entity.location.direction.clone().setY(0).normalize().multiply(-1.2)
                val seatLoc = entity.location.clone().add(offset).add(0.0, 0.5, 0.0)
                seatLoc.yaw = entity.location.yaw
                seatLoc.pitch = entity.location.pitch
                seat.teleport(seatLoc)
              }
            }
          }
        }
        .runTaskTimer(this, 0L, 1L)
  }

  private fun spawnParticles(entity: LivingEntity) {
    val pType = entity.particleType
    if (pType == 4) return
    val particle =
        when (pType) {
          1 -> Particle.FLAME
          2 -> Particle.SOUL_FIRE_FLAME
          3 -> Particle.HEART
          else -> Particle.ELECTRIC_SPARK
        }
    entity.world.spawnParticle(particle, entity.location, 5, 0.5, 0.2, 0.5, 0.0)
  }

  private fun activateRoarSkill(player: Player, entity: LivingEntity) {
    entity.world.playSound(entity.location, Sound.ENTITY_ENDER_DRAGON_GROWL, 1.5f, 0.8f)
    entity.world.playSound(entity.location, Sound.ENTITY_GENERIC_EXPLODE, 0.5f, 1.2f)
    entity.world.spawnParticle(Particle.EXPLOSION_EMITTER, entity.location.add(0.0, 1.0, 0.0), 1)
    entity.getNearbyEntities(8.0, 4.0, 8.0).forEach { target ->
      if (target is LivingEntity &&
          target != player &&
          target != entity &&
          target !in entity.passengers) {
        val vec =
            target.location
                .toVector()
                .subtract(entity.location.toVector())
                .normalize()
                .multiply(1.5)
                .setY(0.8)
        target.velocity = vec
        target.damage(2.0, entity)
      }
    }
    player.sendActionBar(Component.text(">>> 咆哮スキル発動！ <<<", GOLD))
  }

  private fun activateDashSkill(player: Player, entity: LivingEntity) {
    val direction = player.location.direction.clone().normalize()
    direction.multiply(4.0).setY(0.6)
    entity.velocity = direction
    dashEndTimes[player.uniqueId] = System.currentTimeMillis() + 800
    entity.world.playSound(entity.location, Sound.ENTITY_HORSE_JUMP, 2.0f, 0.5f)
    entity.world.playSound(entity.location, Sound.ENTITY_GENERIC_EXPLODE, 1.0f, 2.0f)
    entity.world.spawnParticle(Particle.CLOUD, entity.location, 30, 0.5, 0.5, 0.5, 0.2)
    player.sendActionBar(Component.text(">>> 突進！ <<<", AQUA))
  }

  private fun openInfoGui(player: Player, entity: LivingEntity) {
    val inv = Bukkit.createInventory(null, 9, guiTitle)
    openedGuis[inv] = entity
    val level = entity.foodLevel
    val spec = PetRegistry.get(entity.type)

    fun item(mat: Material, name: String, color: NamedTextColor, vararg lore: Component) =
        ItemStack(mat).apply {
          itemMeta =
              itemMeta.apply {
                displayName(Component.text(name, color))
                lore(lore.toList())
              }
        }

    val nameComp = entity.customName() ?: Component.text("不明")
    inv.setItem(
        0,
        item(Material.NAME_TAG, "名前: ", AQUA, nameComp, Component.text("クリックで変更", GREEN)),
    )

    val vName = VariantHandler.getVariantNameFromEntity(entity)
    val typeName = if (vName != null) "${entity.type.name} ($vName)" else entity.type.name
    val eggMat = Material.getMaterial("${entity.type.name}_SPAWN_EGG") ?: Material.PIG_SPAWN_EGG
    inv.setItem(
        1,
        item(eggMat, "種類: $typeName", YELLOW, Component.text("カテゴリ: ${spec.category}", GRAY)),
    )

    val silent = entity.isSilentMode
    val (sIcon, sText, sColor) =
        if (silent) Triple(Material.RED_WOOL, "静寂 (無音)", RED)
        else Triple(Material.LIME_WOOL, "通常 (音あり)", GREEN)
    inv.setItem(
        2,
        item(
            sIcon,
            "サイレント: ${if (silent) "ON" else "OFF"}",
            WHITE,
            Component.text(sText, sColor),
            Component.text("クリックで切替", GRAY),
        ),
    )

    val skill = entity.skillType

    val (skName, skColor, skDesc) =
        when (skill) {
          0 -> Triple("咆哮 (Roar)", GOLD, "左クリックで範囲攻撃")
          1 -> Triple("突進 (Dash)", AQUA, "左クリックで高速移動")
          2 -> {
            if (spec.category == PetCategory.FLYING) {
              Triple("ホバリング (Hover)", LIGHT_PURPLE, "左クリックでホバリングON/OFF")
            } else {
              Triple("水泳 (Aqua)", BLUE, "水中速度低下を無効化")
            }
          }
          else -> Triple("OFF", GRAY, "スキル無効")
        }

    inv.setItem(
        3,
        item(
            Material.IRON_SWORD,
            "スキル設定",
            skColor,
            Component.text("現在: $skName", WHITE),
            Component.text(skDesc, YELLOW),
            Component.text("クリックで変更", GREEN),
        ),
    )

    val scaleStr = "%.1f".format(entity.getAttribute(Attribute.SCALE)?.baseValue ?: 1.0)
    val speedStr =
        "%.1f"
            .format(
                spec.baseSpeed +
                    (spec.maxSpeed - spec.baseSpeed) * (level.toDouble() / MAX_FOOD_LEVEL))
    inv.setItem(
        4,
        item(
            Material.COOKED_BEEF,
            "育成ステータス",
            GOLD,
            Component.text("フード: $level / $MAX_FOOD_LEVEL", GRAY).replaceText {
              it.match(level.toString()).replacement(Component.text(level.toString(), YELLOW))
            },
            Component.text("サイズ: $scaleStr 倍", GRAY),
            Component.text("速度: $speedStr", GRAY),
        ),
    )

    val pNames = listOf("電気", "炎", "青炎", "ハート", "なし")
    val pColors = listOf(YELLOW, RED, AQUA, LIGHT_PURPLE, GRAY)
    val pType = entity.particleType
    inv.setItem(
        6,
        item(
            Material.BLAZE_POWDER,
            "エフェクト設定",
            GOLD,
            Component.text("現在: ", GRAY)
                .append(
                    Component.text(
                        pNames.getOrElse(pType) { "?" }, pColors.getOrElse(pType) { WHITE })),
            Component.text("クリックで変更", GREEN),
        ),
    )

    inv.setItem(
        7,
        item(Material.CHEST, "ペットをしまう", LIGHT_PURPLE, Component.text("アイテム化して持ち運ぶ", GRAY)),
    )

    val hp =
        "${entity.health.toInt()} / ${entity.getAttribute(Attribute.MAX_HEALTH)?.value?.toInt()}"
    inv.setItem(8, item(Material.RED_DYE, "体力", RED, Component.text(hp, WHITE)))

    player.openInventory(inv)
  }

  private fun giveFood(player: Player, entity: LivingEntity) {
    val level = entity.foodLevel
    if (level >= MAX_FOOD_LEVEL) return player.sendMessage(Component.text("MAXです！", RED))
    val newLevel = level + 1
    entity.foodLevel = newLevel

    val spec = PetRegistry.get(entity.type)
    updateStats(entity, newLevel, spec)

    player.inventory.itemInMainHand.amount -= 1
    entity.world.playSound(entity.location, Sound.ENTITY_GENERIC_EAT, 1f, 1f)
    entity.world.spawnParticle(Particle.HEART, entity.location.add(0.0, 1.0, 0.0), 5, 0.5, 0.5, 0.5)
    player.sendMessage(Component.text("成長しました！ ($newLevel / $MAX_FOOD_LEVEL)", GOLD))
  }

  private fun updateStats(entity: LivingEntity, level: Int, spec: PetSpec) {
    val progress = level.toDouble() / MAX_FOOD_LEVEL
    val scale =
        spec.scaleRange.start + (spec.scaleRange.endInclusive - spec.scaleRange.start) * progress
    entity.getAttribute(Attribute.SCALE)?.baseValue = scale
  }

  private fun checkAndMigrateOwner(entity: LivingEntity, player: Player) {
    val plainName =
        entity.customName()?.let { PlainTextComponentSerializer.plainText().serialize(it) } ?: ""
    if (entity.ownerId == null && plainName.startsWith("${player.name}'s Big ")) {
      entity.ownerId = player.uniqueId.toString()
    }
  }

  private fun isOwner(entity: LivingEntity, player: Player) =
      entity.ownerId == player.uniqueId.toString()

  private fun isPetFood(item: ItemStack): Boolean =
      item.type == Material.COOKED_BEEF &&
          PlainTextComponentSerializer.plainText()
              .serialize(item.itemMeta?.displayName() ?: Component.empty())
              .contains("魔法のペットフード")

  private fun createPetFoodItem() =
      ItemStack(Material.COOKED_BEEF).apply {
        itemMeta =
            itemMeta.apply {
              displayName(Component.text("★ 魔法のペットフード", GOLD))
              lore(listOf(Component.text("右クリックで与える", YELLOW)))
              addEnchant(Enchantment.UNBREAKING, 1, true)
              addItemFlags(ItemFlag.HIDE_ENCHANTS)
            }
      }
}

// ==========================================
// ★ Registry & Definitions
// ==========================================

enum class PetCategory {
  LAND, // 陸上型: 水中で遅い
  WATER, // 水棲型: 水中で速い、陸で遅い
  FLYING, // 飛行型: ジャンプで上昇、スローフォーリング
}

enum class ToyType {
  NONE,
  THROW_FETCH, // 投げて取ってくる
  FISHING_ROD, // 釣竿で遊ぶ
}

// MOBごとの仕様定義
data class PetSpec(
    val category: PetCategory,
    val baseSpeed: Double = 0.6,
    val maxSpeed: Double = 1.1,
    val jumpPower: Double = 0.5,
    val scaleRange: ClosedRange<Double> = 1.5..2.5,
    val entityType: EntityType,
    val toyMaterial: Material? = null,
    val toyName: String? = null,
    val toyType: ToyType = ToyType.NONE,
    // ★ 追加: おもちゃが重力の影響を受けるか (Allay用)
    val toyGravity: Boolean = true,
) {
  fun createToyItem(): ItemStack {
    if (toyMaterial == null || toyName == null) return ItemStack(Material.AIR)
    return ItemStack(toyMaterial).apply {
      itemMeta =
          itemMeta.apply {
            displayName(
                Component.text(
                    "★ $toyName",
                    if (toyType == ToyType.FISHING_ROD) LIGHT_PURPLE else YELLOW,
                ))
            val desc =
                when (toyType) {
                  ToyType.THROW_FETCH -> "右クリックで投げて遊ぶ (${entityType.name.lowercase()}用)"
                  ToyType.FISHING_ROD -> "投げてジャンプさせる (${entityType.name.lowercase()}用)"
                  else -> ""
                }
            lore(listOf(Component.text(desc, GRAY)))
            addEnchant(Enchantment.UNBREAKING, 1, true)
            addItemFlags(ItemFlag.HIDE_ENCHANTS)
          }
    }
  }
}

object PetRegistry {
  // 公式サポートMOBリスト
  val officialPets =
      setOf(
          EntityType.WOLF,
          EntityType.CAT,
          EntityType.CHICKEN,
          EntityType.DOLPHIN,
          EntityType.PARROT,
          EntityType.FOX,
          EntityType.FROG,
          EntityType.ALLAY,
      )

  private val defaultSpec = PetSpec(PetCategory.LAND, entityType = EntityType.PIG)

  private val specs =
      mapOf(
          // --- 陸上系 ---
          EntityType.WOLF to
              PetSpec(
                  category = PetCategory.LAND,
                  entityType = EntityType.WOLF,
                  baseSpeed = 0.6,
                  maxSpeed = 1.2,
                  jumpPower = 0.6,
                  toyMaterial = Material.BONE,
                  toyName = "骨のおもちゃ",
                  toyType = ToyType.THROW_FETCH,
              ),
          EntityType.CAT to
              PetSpec(
                  category = PetCategory.LAND,
                  entityType = EntityType.CAT,
                  baseSpeed = 0.7,
                  maxSpeed = 1.3,
                  jumpPower = 0.9,
                  scaleRange = 1.2..2.2,
                  toyMaterial = Material.FISHING_ROD,
                  toyName = "猫じゃらし",
                  toyType = ToyType.FISHING_ROD,
              ),
          EntityType.FOX to
              PetSpec(
                  category = PetCategory.LAND,
                  entityType = EntityType.FOX,
                  baseSpeed = 0.7,
                  maxSpeed = 1.3,
                  jumpPower = 0.7,
                  toyMaterial = Material.SWEET_BERRIES,
                  toyName = "ベリーのおもちゃ",
                  toyType = ToyType.THROW_FETCH,
              ),

          // --- 水棲系 ---
          EntityType.DOLPHIN to
              PetSpec(
                  category = PetCategory.WATER,
                  entityType = EntityType.DOLPHIN,
                  baseSpeed = 0.5,
                  maxSpeed = 1.0,
                  scaleRange = 1.2..2.2,
                  toyMaterial = Material.SNOWBALL,
                  toyName = "ビーチボール",
                  toyType = ToyType.THROW_FETCH,
              ),
          EntityType.AXOLOTL to
              PetSpec(
                  category = PetCategory.WATER,
                  entityType = EntityType.AXOLOTL,
                  baseSpeed = 0.5,
                  maxSpeed = 1.0,
                  scaleRange = 1.0..2.0,
                  toyMaterial = Material.TROPICAL_FISH_BUCKET,
                  toyName = "お魚バケツ",
                  toyType = ToyType.THROW_FETCH,
              ),
          EntityType.FROG to
              PetSpec(
                  category = PetCategory.WATER,
                  entityType = EntityType.FROG,
                  baseSpeed = 0.5,
                  maxSpeed = 1.0,
                  jumpPower = 1.2,
                  scaleRange = 1.0..2.0,
                  toyMaterial = Material.SLIME_BALL,
                  toyName = "スライムボール",
                  toyType = ToyType.THROW_FETCH,
              ),

          // --- 飛行系 ---
          EntityType.PARROT to
              PetSpec(
                  category = PetCategory.FLYING,
                  entityType = EntityType.PARROT,
                  baseSpeed = 0.5,
                  maxSpeed = 1.0,
                  scaleRange = 1.0..2.0,
                  toyMaterial = Material.WHEAT_SEEDS,
                  toyName = "種のおもちゃ",
                  toyType = ToyType.THROW_FETCH,
              ),
          EntityType.CHICKEN to
              PetSpec(
                  category = PetCategory.FLYING,
                  entityType = EntityType.CHICKEN,
                  baseSpeed = 0.4,
                  maxSpeed = 0.9,
                  toyMaterial = Material.MELON_SEEDS,
                  toyName = "スイカの種",
                  toyType = ToyType.THROW_FETCH,
              ),
          EntityType.BEE to
              PetSpec(
                  category = PetCategory.FLYING,
                  entityType = EntityType.BEE,
                  baseSpeed = 0.6,
                  maxSpeed = 1.1,
                  scaleRange = 1.0..2.0,
                  toyMaterial = Material.HONEY_BOTTLE,
                  toyName = "ハチミツ",
                  toyType = ToyType.THROW_FETCH,
              ),
          EntityType.ALLAY to
              PetSpec(
                  category = PetCategory.FLYING,
                  entityType = EntityType.ALLAY,
                  baseSpeed = 0.6,
                  maxSpeed = 1.2,
                  scaleRange = 1.0..2.0,
                  toyMaterial = Material.AMETHYST_SHARD,
                  toyName = "キラキラ",
                  toyType = ToyType.THROW_FETCH,
                  toyGravity = false, // ★ Allayのおもちゃは空中に浮く
              ),
      )

  fun get(type: EntityType): PetSpec = specs[type] ?: defaultSpec.copy(entityType = type)

  fun isOfficial(type: EntityType): Boolean = officialPets.contains(type)

  fun findSpecByToy(item: ItemStack): PetSpec? {
    if (!item.hasItemMeta()) return null
    val name =
        PlainTextComponentSerializer.plainText()
            .serialize(item.itemMeta.displayName() ?: Component.empty())
    return specs.values.find { spec ->
      spec.toyMaterial == item.type && name.contains(spec.toyName ?: "")
    }
  }

  fun getAllToyItems(): List<ItemStack> {
    return officialPets.mapNotNull { type -> specs[type]?.createToyItem() }
  }
}

// ==========================================
// ★ Variant Handler (汎用管理オブジェクト)
// ==========================================
object VariantHandler {

  fun getVariantNames(type: EntityType): List<String> {
    return when (type) {
      EntityType.WOLF -> getRegistryNames(RegistryKey.WOLF_VARIANT)
      EntityType.CAT -> getRegistryNames(RegistryKey.CAT_VARIANT)
      EntityType.FROG -> getRegistryNames(RegistryKey.FROG_VARIANT)
      EntityType.VILLAGER -> getRegistryNames(RegistryKey.VILLAGER_TYPE)

      EntityType.AXOLOTL -> Axolotl.Variant.entries.map { it.name }
      EntityType.PARROT -> Parrot.Variant.entries.map { it.name }
      EntityType.RABBIT -> Rabbit.Type.entries.map { it.name }
      EntityType.LLAMA,
      EntityType.TRADER_LLAMA -> Llama.Color.entries.map { it.name }
      EntityType.HORSE -> Horse.Color.entries.map { it.name }
      EntityType.MOOSHROOM -> MushroomCow.Variant.entries.map { it.name }
      EntityType.PANDA -> Panda.Gene.entries.map { it.name }
      EntityType.FOX -> Fox.Type.entries.map { it.name }
      EntityType.SHEEP -> DyeColor.entries.map { it.name }

      else -> emptyList()
    }
  }

  fun applyVariant(entity: LivingEntity, variantName: String) {
    val name = variantName.uppercase(Locale.ROOT)
    runCatching {
      when (entity) {
        is Wolf ->
            applyRegistryVariant(entity, RegistryKey.WOLF_VARIANT, variantName) { e, v ->
              e.variant = v
            }
        is Cat ->
            applyRegistryVariant(entity, RegistryKey.CAT_VARIANT, variantName) { e, v ->
              e.catType = v
            }
        is Frog ->
            applyRegistryVariant(entity, RegistryKey.FROG_VARIANT, variantName) { e, v ->
              e.variant = v
            }
        is Villager ->
            applyRegistryVariant(entity, RegistryKey.VILLAGER_TYPE, variantName) { e, v ->
              e.villagerType = v
            }

        is Axolotl -> entity.variant = Axolotl.Variant.valueOf(name)
        is Parrot -> entity.variant = Parrot.Variant.valueOf(name)
        is Rabbit -> entity.rabbitType = Rabbit.Type.valueOf(name)
        is Llama -> entity.color = Llama.Color.valueOf(name)
        is Horse -> entity.color = Horse.Color.valueOf(name)
        is MushroomCow -> entity.variant = MushroomCow.Variant.valueOf(name)
        is Panda -> entity.mainGene = Panda.Gene.valueOf(name)
        is Fox -> entity.foxType = Fox.Type.valueOf(name)
        is Sheep -> entity.color = DyeColor.valueOf(name)
        else -> {}
      }
    }
  }

  fun getVariantNameFromEntity(entity: LivingEntity): String? {
    return when (entity) {
      is Wolf -> entity.variant.key().value()
      is Cat -> entity.catType.key().value()
      is Frog -> entity.variant.key().value()
      is Villager -> entity.villagerType.key().value()
      is Axolotl -> entity.variant.name
      is Parrot -> entity.variant.name
      is Rabbit -> entity.rabbitType.name
      is Llama -> entity.color.name
      is Horse -> entity.color.name
      is MushroomCow -> entity.variant.name
      is Panda -> entity.mainGene.name
      is Fox -> entity.foxType.name
      is Sheep -> entity.color?.name
      else -> null
    }
  }

  private fun <T : Keyed> getRegistryNames(key: RegistryKey<T>): List<String> {
    return RegistryAccess.registryAccess().getRegistry(key).map { it.key().value() }
  }

  private fun <T : Keyed, E : LivingEntity> applyRegistryVariant(
      entity: E,
      key: RegistryKey<T>,
      name: String,
      applier: (E, T) -> Unit,
  ) {
    val registry = RegistryAccess.registryAccess().getRegistry(key)
    val variant =
        registry.firstOrNull {
          it.key().value().equals(name, true) || it.key().toString().equals(name, true)
        }
    if (variant != null) {
      applier(entity, variant)
    }
  }
}
