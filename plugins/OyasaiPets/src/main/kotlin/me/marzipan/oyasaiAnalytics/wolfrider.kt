package me.marzipan.oyasaiAnalytics

import io.papermc.paper.entity.LookAnchor
import io.papermc.paper.event.player.AsyncChatEvent
import io.papermc.paper.registry.RegistryAccess
import io.papermc.paper.registry.RegistryKey
import net.kyori.adventure.text.Component
import net.kyori.adventure.text.format.NamedTextColor
import net.kyori.adventure.text.format.NamedTextColor.*
import net.kyori.adventure.text.serializer.legacy.LegacyComponentSerializer
import net.kyori.adventure.text.serializer.plain.PlainTextComponentSerializer
import org.bukkit.*
import org.bukkit.attribute.Attribute
import org.bukkit.command.*
import org.bukkit.enchantments.Enchantment
import org.bukkit.entity.*
import org.bukkit.event.EventHandler
import org.bukkit.event.Listener
import org.bukkit.event.block.Action
import org.bukkit.event.entity.EntityTeleportEvent
import org.bukkit.event.inventory.InventoryClickEvent
import org.bukkit.event.inventory.InventoryCloseEvent
import org.bukkit.event.player.*
import org.bukkit.inventory.*
import org.bukkit.persistence.PersistentDataType
import org.bukkit.plugin.java.JavaPlugin
import org.bukkit.scheduler.BukkitRunnable
import org.bukkit.util.Vector
import java.util.UUID

class BigWolfPlugin : JavaPlugin(), Listener, CommandExecutor, TabCompleter {

  companion object {
    private const val PERMISSION = "bigwolf.admin"
    private const val MAX_FOOD_LEVEL = 50
    private const val SKILL_COOLDOWN_MS = 5000L

    private const val MIN_SCALE = 1.5
    private const val MAX_SCALE = 2.5
    private const val MIN_SPEED = 0.6
    private const val MAX_SPEED = 1.1

    // Keys
    lateinit var KEY_FOOD: NamespacedKey
    lateinit var KEY_OWNER: NamespacedKey
    lateinit var KEY_SILENT: NamespacedKey
    lateinit var KEY_PARTICLE: NamespacedKey
    lateinit var KEY_PET_ID: NamespacedKey
    lateinit var KEY_SKILL_TYPE: NamespacedKey

    lateinit var KEY_STORED_FLAG: NamespacedKey
    lateinit var KEY_STORED_TYPE: NamespacedKey
    lateinit var KEY_STORED_VARIANT: NamespacedKey
    lateinit var KEY_STORED_NAME: NamespacedKey
    lateinit var KEY_STORED_ID: NamespacedKey
    lateinit var KEY_STORED_SKILL: NamespacedKey
  }

  private val guiTitle = Component.text("ペットステータス", BLACK)

  // Cooldowns & Tasks
  private val skillCooldowns = mutableMapOf<UUID, Long>()
  private val mountCooldowns = mutableMapOf<UUID, Long>()
  private val dashEndTimes = mutableMapOf<UUID, Long>()
  private val dropCooldowns = mutableMapOf<UUID, Long>() // ★追加: ドロップ誤爆防止用

  private val renamingPlayers = mutableMapOf<UUID, LivingEntity>()
  private val openedGuis = mutableMapOf<Inventory, LivingEntity>()
  private val activeFetchTasks = mutableMapOf<UUID, BukkitRunnable>()

  override fun onEnable() {
    // Keys Init
    KEY_FOOD = NamespacedKey(this, "food_count")
    KEY_OWNER = NamespacedKey(this, "owner_uuid")
    KEY_SILENT = NamespacedKey(this, "is_silent_mode")
    KEY_PARTICLE = NamespacedKey(this, "particle_type")
    KEY_PET_ID = NamespacedKey(this, "unique_pet_id")
    KEY_SKILL_TYPE = NamespacedKey(this, "skill_type")

    KEY_STORED_FLAG = NamespacedKey(this, "is_stored_pet")
    KEY_STORED_TYPE = NamespacedKey(this, "stored_type")
    KEY_STORED_VARIANT = NamespacedKey(this, "stored_variant")
    KEY_STORED_NAME = NamespacedKey(this, "stored_name")
    KEY_STORED_ID = NamespacedKey(this, "stored_pet_id")
    KEY_STORED_SKILL = NamespacedKey(this, "stored_skill")

    getCommand("bigwolf")?.apply {
      setExecutor(this@BigWolfPlugin)
      setTabCompleter(this@BigWolfPlugin)
    }
    server.pluginManager.registerEvents(this, this)
    logger.info("BigWolfPlugin enabled")
  }

  override fun onDisable() {
    logger.info("BigWolfPlugin disabled")
  }

  // --- Extension Properties (PDC Access) ---
  private var LivingEntity.foodLevel: Int
    get() = persistentDataContainer.get(KEY_FOOD, PersistentDataType.INTEGER) ?: 0
    set(value) = persistentDataContainer.set(KEY_FOOD, PersistentDataType.INTEGER, value)

  private var LivingEntity.ownerId: String?
    get() = persistentDataContainer.get(KEY_OWNER, PersistentDataType.STRING)
    set(value) { if (value != null) persistentDataContainer.set(KEY_OWNER, PersistentDataType.STRING, value) }

  private var LivingEntity.isSilentMode: Boolean
    get() = (persistentDataContainer.get(KEY_SILENT, PersistentDataType.BYTE) ?: 0).toInt() == 1
    set(value) = persistentDataContainer.set(KEY_SILENT, PersistentDataType.BYTE, if (value) 1 else 0)

  private var LivingEntity.particleType: Int
    get() = persistentDataContainer.get(KEY_PARTICLE, PersistentDataType.INTEGER) ?: 0
    set(value) = persistentDataContainer.set(KEY_PARTICLE, PersistentDataType.INTEGER, value)

  private var LivingEntity.petId: String?
    get() = persistentDataContainer.get(KEY_PET_ID, PersistentDataType.STRING)
    set(value) { if (value != null) persistentDataContainer.set(KEY_PET_ID, PersistentDataType.STRING, value) }

  private var LivingEntity.skillType: Int
    get() = persistentDataContainer.get(KEY_SKILL_TYPE, PersistentDataType.INTEGER) ?: 0
    set(value) = persistentDataContainer.set(KEY_SKILL_TYPE, PersistentDataType.INTEGER, value)

  // --- Commands ---
  override fun onCommand(sender: CommandSender, command: Command, label: String, args: Array<out String>): Boolean {
    if (!sender.hasPermission(PERMISSION)) return true.also { sender.sendMessage(Component.text("権限がありません。", RED)) }
    if (sender !is Player) return true.also { sender.sendMessage(Component.text("プレイヤーのみ可能です。", RED)) }

    if (args.isEmpty()) {
      spawnAndMountEntity(sender, EntityType.WOLF, null)
      return true
    }

    when (val sub = args[0].lowercase()) {
      "toy" -> {
        sender.inventory.addItem(createBoneToyItem())
        sender.sendMessage(Component.text("骨のおもちゃを入手しました！右クリックで投げて遊びましょう。", YELLOW))
      }
      "food" -> {
        sender.inventory.addItem(createPetFoodItem())
        sender.sendMessage(Component.text("魔法のペットフードを入手しました！", YELLOW))
      }
      else -> {
        val type = runCatching { EntityType.valueOf(sub.uppercase()) }.getOrNull()
        if (type == null) {
          sender.sendMessage(Component.text("そのエンティティは見つかりません: $sub", RED))
          return true
        }
        if (!type.isAlive) {
          sender.sendMessage(Component.text("召喚できません。", RED))
          return true
        }
        val variant = if (args.size >= 2 && type == EntityType.WOLF) args[1].lowercase() else null
        spawnAndMountEntity(sender, type, variant)
      }
    }
    return true
  }

  override fun onTabComplete(sender: CommandSender, command: Command, label: String, args: Array<out String>): MutableList<String>? {
    if (!sender.hasPermission(PERMISSION)) return mutableListOf()
    return when (args.size) {
      1 -> (EntityType.entries.filter { it.isSpawnable && it.isAlive }.map { it.name.lowercase() } + listOf("food", "toy"))
        .filter { it.startsWith(args[0].lowercase()) }.toMutableList()
      2 -> if (args[0].equals("wolf", true)) {
        RegistryAccess.registryAccess().getRegistry(RegistryKey.WOLF_VARIANT)
          .map { it.key().value().lowercase() }.filter { it.startsWith(args[1].lowercase()) }.toMutableList()
      } else mutableListOf()
      else -> mutableListOf()
    }
  }

  // --- Events ---

  // ★追加: アイテムドロップ時にクールダウンを設定 (スキル誤爆防止)
  @EventHandler
  fun onPlayerDropItem(event: PlayerDropItemEvent) {
    dropCooldowns[event.player.uniqueId] = System.currentTimeMillis()
  }

  @EventHandler
  fun onEntityTeleport(event: EntityTeleportEvent) {
    // Fetch中の強制TP防止
    if (activeFetchTasks.containsKey(event.entity.uniqueId)) {
      event.isCancelled = true
    }
  }

  @EventHandler
  fun onEntityInteract(event: PlayerInteractEntityEvent) {
    val player = event.player
    val entity = event.rightClicked as? LivingEntity ?: return

    checkAndMigrateOwner(entity, player)
    val isOwner = isOwner(entity, player)
    val plainName = entity.customName()?.let { PlainTextComponentSerializer.plainText().serialize(it) } ?: ""

    if (entity.ownerId == null && !plainName.contains("'s Big ")) return

    event.isCancelled = true

    // フード
    if (isOwner && isPetFood(player.inventory.itemInMainHand)) {
      giveFood(player, entity)
      return
    }

    if (isOwner) {
      if (!player.hasPermission(PERMISSION)) return player.sendMessage(Component.text("権限がありません。", RED))

      if (player.isSneaking) {
        openInfoGui(player, entity)
      } else {
        // 騎乗
        if (player !in entity.passengers) {
          // Fetch中断
          stopFetchTask(entity)

          if (entity is Sittable) entity.isSitting = false
          entity.addPassenger(player)
          mountCooldowns[player.uniqueId] = System.currentTimeMillis()
          player.sendMessage(Component.text("運転席に乗りました！(左クリックでスキル)", GREEN))
          startControlTask(player, entity)
        }
      }
    } else {
      // 同乗
      if (player !in entity.passengers) {
        entity.addPassenger(player)
        player.sendMessage(Component.text("後ろに乗りました！", YELLOW))
      }
    }
  }

  @EventHandler
  fun onPlayerInteract(event: PlayerInteractEvent) {
    val item = event.item ?: return
    val player = event.player

    // 骨のおもちゃ (投げる)
    if ((event.action == Action.RIGHT_CLICK_AIR || event.action == Action.RIGHT_CLICK_BLOCK) && isBoneToy(item)) {
      event.isCancelled = true

      // 自分のペットを探す
      val pet = player.getNearbyEntities(15.0, 10.0, 15.0)
        .filterIsInstance<LivingEntity>()
        .firstOrNull { isOwner(it, player) && it.passengers.isEmpty() }

      if (pet != null) {
        val thrownItem = player.world.dropItem(player.eyeLocation, item.asOne())
        thrownItem.velocity = player.location.direction.multiply(1.2)
        thrownItem.pickupDelay = 20
        item.amount -= 1

        player.sendMessage(Component.text("取ってこい！", AQUA))
        player.playSound(player.location, Sound.ENTITY_SNOWBALL_THROW, 1f, 1f)
        startFetchTask(player, pet, thrownItem)
      } else {
        player.sendMessage(Component.text("遊んでくれるペットが近くにいません（乗車中は不可）", RED))
      }
      return
    }

    // ペット復元 (Monster Ball)
    if (event.action == Action.RIGHT_CLICK_BLOCK && event.hand == EquipmentSlot.HAND) {
      val meta = item.itemMeta ?: return
      if (meta.persistentDataContainer.has(KEY_STORED_FLAG, PersistentDataType.BYTE)) {
        event.isCancelled = true
        val loc = event.clickedBlock?.location?.add(0.5, 1.0, 0.5) ?: return
        restorePetFromItem(player, item, loc)
      }
    }
  }

  // ★ スキル発動処理
  @EventHandler
  fun onPlayerSkillTrigger(event: PlayerInteractEvent) {
    // 左クリックのみ
    if (event.action != Action.LEFT_CLICK_AIR && event.action != Action.LEFT_CLICK_BLOCK) return
    // メインハンドのみ (二重発動防止)
    if (event.hand != EquipmentSlot.HAND) return

    val player = event.player
    val vehicle = player.vehicle as? LivingEntity ?: return

    if (!isOwner(vehicle, player)) return

    val now = System.currentTimeMillis()

    // ★ ドロップ直後なら無視 (500ms)
    if (now - dropCooldowns.getOrDefault(player.uniqueId, 0L) < 500) return

    // 騎乗直後なら無視 (1000ms)
    if (now - mountCooldowns.getOrDefault(player.uniqueId, 0L) < 1000) return

    val skill = vehicle.skillType
    if (skill == 3) return // OFF

    // Aquaはパッシブ
    if (skill == 2) {
      player.sendActionBar(Component.text("水泳モード有効中 (水中移動速度UP)", AQUA))
      return
    }

    // クールダウンチェック
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

    val entity = openedGuis[event.view.topInventory] ?: return player.closeInventory().also {
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
      Material.LIME_WOOL, Material.RED_WOOL -> {
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
      Bukkit.getScheduler().runTask(this, Runnable {
        entity.customName(LegacyComponentSerializer.legacyAmpersand().deserialize(msg))
        entity.isCustomNameVisible = true
        player.sendMessage(Component.text("名前を変更しました！", GREEN))
        entity.world.playSound(entity.location, Sound.ENTITY_PLAYER_LEVELUP, 1f, 1f)
      })
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

  private fun spawnAndMountEntity(player: Player, type: EntityType, variantName: String?) {
    val entity = player.world.spawnEntity(player.location.add(0.0, 1.0, 0.0), type) as? LivingEntity ?: return

    entity.apply {
      customName(Component.text("${player.name}'s Big ${type.name}"))
      isCustomNameVisible = true
      setRemoveWhenFarAway(false)
      isInvulnerable = true
      setAI(true)
      getAttribute(Attribute.SCALE)?.baseValue = 2.0
      getAttribute(Attribute.MOVEMENT_SPEED)?.baseValue = 0.0
      getAttribute(Attribute.FLYING_SPEED)?.baseValue = 0.0
      getAttribute(Attribute.STEP_HEIGHT)?.baseValue = 1.1

      if (this is Tameable) { isTamed = true; owner = player }
      if (this is Sittable) isSitting = false
      if (this is Ageable) setAdult()
      if (this is Wolf && variantName != null) {
        RegistryAccess.registryAccess().getRegistry(RegistryKey.WOLF_VARIANT)
          .firstOrNull { it.key().value().equals(variantName, true) }?.let { variant = it }
      }

      ownerId = player.uniqueId.toString()
      petId = UUID.randomUUID().toString()
      foodLevel = 0
      isSilentMode = false
      particleType = 0
      skillType = 0
      updateStats(this, 0)
    }

    Bukkit.getScheduler().runTaskLater(this, Runnable {
      entity.addPassenger(player)
      mountCooldowns[player.uniqueId] = System.currentTimeMillis()
      startControlTask(player, entity)
    }, 2L)

    player.sendMessage(Component.text("巨大な ${type.name} を召喚しました！", AQUA))
  }

  private fun startFetchTask(player: Player, entity: LivingEntity, toyItem: Item) {
    activeFetchTasks[entity.uniqueId]?.cancel()

    val task = object : BukkitRunnable() {
      var phase = 0 // 0:GoToToy, 1:ReturnToPlayer
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
            toyItem.remove() // 拾う
            entity.equipment?.setItemInMainHand(createBoneToyItem())
            entity.world.playSound(entity.location, Sound.ENTITY_ITEM_PICKUP, 1f, 1f)
            phase = 1
          } else {
            moveTo(entity, targetLoc, runSpeed)
          }

        } else {
          // 持ってるか確認
          if (entity.equipment?.itemInMainHand?.type != Material.BONE) {
            entity.equipment?.setItemInMainHand(createBoneToyItem())
          }

          val targetLoc = player.location
          val dist = entity.location.distance(targetLoc)

          if (dist < 2.0) {
            cleanup(true)
            player.sendMessage(Component.text("えらい！", GREEN))
            entity.world.spawnParticle(Particle.HEART, entity.location.add(0.0, 1.0, 0.0), 3)
            entity.world.playSound(entity.location, Sound.ENTITY_WOLF_WHINE, 1f, 1f)
          } else {
            moveTo(entity, targetLoc, runSpeed)
          }
        }
      }

      fun moveTo(e: LivingEntity, loc: Location, speed: Double) {
        val vec = loc.toVector().subtract(e.location.toVector()).normalize().multiply(speed).setY(e.velocity.y)
        e.velocity = vec
        e.lookAt(loc, LookAnchor.EYES)
      }

      fun cleanup(dropItem: Boolean) {
        if (dropItem) {
          entity.equipment?.setItemInMainHand(null)
          entity.world.dropItem(entity.location, createBoneToyItem())
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
      if (entity.equipment?.itemInMainHand?.type == Material.BONE) {
        entity.equipment?.setItemInMainHand(null)
      }
    }
  }

  private fun storePetToItem(player: Player, entity: LivingEntity) {
    if (player.inventory.firstEmpty() == -1) return player.sendMessage(Component.text("インベントリがいっぱいです！", RED))

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

    if (entity is Wolf) {
      pdc.set(KEY_STORED_VARIANT, PersistentDataType.STRING, entity.variant.key().value())
    }

    meta.displayName(Component.text("収納された: ", GOLD).append(currentName))
    meta.lore(listOf(
      Component.text("右クリックで解放", GRAY),
      Component.text("ID: ${pid.take(8)}...", DARK_GRAY)
    ))
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
            player.playSound(player.location, Sound.BLOCK_ANVIL_LAND, 1f, 1f)
            return
          }
        }
      }
    }

    val typeStr = pdc.get(KEY_STORED_TYPE, PersistentDataType.STRING) ?: "WOLF"
    val type = runCatching { EntityType.valueOf(typeStr) }.getOrNull() ?: EntityType.WOLF
    val entity = player.world.spawnEntity(loc, type) as? LivingEntity ?: return

    entity.apply {
      setRemoveWhenFarAway(false)
      isInvulnerable = true
      setAI(true)
      getAttribute(Attribute.MOVEMENT_SPEED)?.baseValue = 0.0
      getAttribute(Attribute.FLYING_SPEED)?.baseValue = 0.0
      getAttribute(Attribute.STEP_HEIGHT)?.baseValue = 1.1
      if (this is Tameable) { isTamed = true; owner = player }
      if (this is Sittable) isSitting = false
      if (this is Ageable) setAdult()
    }

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

    updateStats(entity, food)

    if (entity is Wolf) {
      val vStr = pdc.get(KEY_STORED_VARIANT, PersistentDataType.STRING)
      if (vStr != null) {
        RegistryAccess.registryAccess().getRegistry(RegistryKey.WOLF_VARIANT)
          .firstOrNull { it.key().value().equals(vStr, true) }?.let { entity.variant = it }
      }
    }

    item.amount -= 1
    player.sendMessage(Component.text("ペットを解放しました！", GREEN))
    player.playSound(loc, Sound.ENTITY_ITEM_PICKUP, 1f, 1f)
  }

  private fun startControlTask(player: Player, entity: LivingEntity) {
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
        var speed = MIN_SPEED + (MAX_SPEED - MIN_SPEED) * progress
        entity.isSilent = entity.isSilentMode

        val inWater = entity.isInWater
        if (inWater) {
          if (entity.skillType != 2) {
            speed *= 0.3
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

        if (isDashing) {
          spawnParticles(entity)
        } else {
          if (velocity.lengthSquared() > 0) {
            velocity.normalize().multiply(speed)
            velocity.y = entity.velocity.y
            if (inWater && input.isJump) velocity.y = 0.4
            entity.velocity = velocity
            spawnParticles(entity)
          }
        }

        if (input.isJump && entity.isOnGround && !inWater) {
          entity.velocity = entity.velocity.setY(0.6)
        }
        entity.setRotation(player.location.yaw, 0f)
      }
    }.runTaskTimer(this, 0L, 1L)
  }

  private fun spawnParticles(entity: LivingEntity) {
    val pType = entity.particleType
    if (pType == 4) return
    val particle = when (pType) {
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
      if (target is LivingEntity && target != player && target != entity && target !in entity.passengers) {
        val vec = target.location.toVector().subtract(entity.location.toVector()).normalize().multiply(1.5).setY(0.8)
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

  // --- GUI & Items ---
  private fun openInfoGui(player: Player, entity: LivingEntity) {
    val inv = Bukkit.createInventory(null, 9, guiTitle)
    openedGuis[inv] = entity

    val level = entity.foodLevel

    fun item(mat: Material, name: String, color: NamedTextColor, vararg lore: Component) = ItemStack(mat).apply {
      itemMeta = itemMeta.apply {
        displayName(Component.text(name, color))
        lore(lore.toList())
      }
    }

    val nameComp = entity.customName() ?: Component.text("不明")
    inv.setItem(0, item(Material.NAME_TAG, "名前: ", AQUA, nameComp, Component.text("クリックで変更", GREEN)))

    val typeName = if (entity is Wolf) "狼 (${entity.variant.key().value()})" else entity.type.name
    val eggMat = Material.getMaterial("${entity.type.name}_SPAWN_EGG") ?: Material.PIG_SPAWN_EGG
    inv.setItem(1, item(eggMat, "種類", YELLOW, Component.text(typeName, WHITE)))

    val silent = entity.isSilentMode
    val (sIcon, sText, sColor) = if (silent) Triple(Material.RED_WOOL, "静寂 (無音)", RED) else Triple(Material.LIME_WOOL, "通常 (音あり)", GREEN)
    inv.setItem(2, item(sIcon, "サイレント: ${if (silent) "ON" else "OFF"}", WHITE, Component.text(sText, sColor), Component.text("クリックで切替", GRAY)))

    val skill = entity.skillType
    val (skName, skColor) = when(skill) {
      0 -> "咆哮 (Roar)" to GOLD
      1 -> "突進 (Dash)" to AQUA
      2 -> "水泳 (Aqua)" to BLUE
      else -> "OFF" to GRAY
    }
    val skDesc = when(skill) {
      0 -> "左クリックで範囲攻撃"
      1 -> "左クリックで高速移動"
      2 -> "水中速度低下を無効化"
      else -> "スキル無効"
    }
    inv.setItem(3, item(Material.IRON_SWORD, "スキル設定", skColor,
      Component.text("現在: $skName", WHITE),
      Component.text(skDesc, YELLOW),
      Component.text("クリックで変更", GREEN)))

    val scaleStr = "%.1f".format(entity.getAttribute(Attribute.SCALE)?.baseValue ?: 1.0)
    val speedStr = "%.1f".format(MIN_SPEED + (MAX_SPEED - MIN_SPEED) * (level.toDouble() / MAX_FOOD_LEVEL))
    inv.setItem(4, item(Material.COOKED_BEEF, "育成ステータス", GOLD,
      Component.text("フード: $level / $MAX_FOOD_LEVEL", GRAY).replaceText { it.match(level.toString()).replacement(Component.text(level.toString(), YELLOW)) },
      Component.text("サイズ: $scaleStr 倍", GRAY),
      Component.text("速度: $speedStr", GRAY)
    ))

    val pNames = listOf("電気", "炎", "青炎", "ハート", "なし")
    val pColors = listOf(YELLOW, RED, AQUA, LIGHT_PURPLE, GRAY)
    val pType = entity.particleType
    inv.setItem(6, item(Material.BLAZE_POWDER, "エフェクト設定", GOLD,
      Component.text("現在: ", GRAY).append(Component.text(pNames.getOrElse(pType){"?"}, pColors.getOrElse(pType){WHITE})),
      Component.text("クリックで変更", GREEN)
    ))

    inv.setItem(7, item(Material.CHEST, "ペットをしまう", LIGHT_PURPLE, Component.text("アイテム化して持ち運ぶ", GRAY)))

    val hp = "${entity.health.toInt()} / ${entity.getAttribute(Attribute.MAX_HEALTH)?.value?.toInt()}"
    inv.setItem(8, item(Material.RED_DYE, "体力", RED, Component.text(hp, WHITE)))

    player.openInventory(inv)
  }

  private fun giveFood(player: Player, entity: LivingEntity) {
    val level = entity.foodLevel
    if (level >= MAX_FOOD_LEVEL) return player.sendMessage(Component.text("MAXです！", RED))

    val newLevel = level + 1
    entity.foodLevel = newLevel
    updateStats(entity, newLevel)
    player.inventory.itemInMainHand.amount -= 1
    entity.world.playSound(entity.location, Sound.ENTITY_GENERIC_EAT, 1f, 1f)
    entity.world.spawnParticle(Particle.HEART, entity.location.add(0.0, 1.0, 0.0), 5, 0.5, 0.5, 0.5)
    player.sendMessage(Component.text("成長しました！ ($newLevel / $MAX_FOOD_LEVEL)", GOLD))
  }

  private fun updateStats(entity: LivingEntity, level: Int) {
    val progress = level.toDouble() / MAX_FOOD_LEVEL
    entity.getAttribute(Attribute.SCALE)?.baseValue = MIN_SCALE + (MAX_SCALE - MIN_SCALE) * progress
  }

  private fun checkAndMigrateOwner(entity: LivingEntity, player: Player) {
    val plainName = entity.customName()?.let { PlainTextComponentSerializer.plainText().serialize(it) } ?: ""
    if (entity.ownerId == null && plainName.startsWith("${player.name}'s Big ")) {
      entity.ownerId = player.uniqueId.toString()
    }
  }

  private fun isOwner(entity: LivingEntity, player: Player) = entity.ownerId == player.uniqueId.toString()

  private fun isPetFood(item: ItemStack): Boolean =
    item.type == Material.COOKED_BEEF &&
      PlainTextComponentSerializer.plainText().serialize(item.itemMeta?.displayName() ?: Component.empty()).contains("魔法のペットフード")

  private fun isBoneToy(item: ItemStack): Boolean =
    item.type == Material.BONE &&
      PlainTextComponentSerializer.plainText().serialize(item.itemMeta?.displayName() ?: Component.empty()).contains("骨のおもちゃ")

  private fun createPetFoodItem() = ItemStack(Material.COOKED_BEEF).apply {
    itemMeta = itemMeta.apply {
      displayName(Component.text("★ 魔法のペットフード", GOLD))
      lore(listOf(Component.text("右クリックで与える", YELLOW)))
      addEnchant(Enchantment.UNBREAKING, 1, true)
      addItemFlags(ItemFlag.HIDE_ENCHANTS)
    }
  }

  private fun createBoneToyItem() = ItemStack(Material.BONE).apply {
    itemMeta = itemMeta.apply {
      displayName(Component.text("★ 骨のおもちゃ", YELLOW))
      lore(listOf(Component.text("右クリックで投げて遊ぶ", GRAY)))
      addEnchant(Enchantment.UNBREAKING, 1, true)
      addItemFlags(ItemFlag.HIDE_ENCHANTS)
    }
  }
}
