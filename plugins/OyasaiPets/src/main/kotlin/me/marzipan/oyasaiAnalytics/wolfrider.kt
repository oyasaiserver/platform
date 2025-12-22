package me.marzipan.oyasaiAnalytics

import io.papermc.paper.event.player.AsyncChatEvent
import io.papermc.paper.registry.RegistryAccess
import io.papermc.paper.registry.RegistryKey
import java.util.UUID
import net.kyori.adventure.text.Component
import net.kyori.adventure.text.format.NamedTextColor
import net.kyori.adventure.text.serializer.legacy.LegacyComponentSerializer
import net.kyori.adventure.text.serializer.plain.PlainTextComponentSerializer
import org.bukkit.*
import org.bukkit.attribute.Attribute
import org.bukkit.command.Command
import org.bukkit.command.CommandExecutor
import org.bukkit.command.CommandSender
import org.bukkit.command.TabCompleter
import org.bukkit.enchantments.Enchantment
import org.bukkit.entity.*
import org.bukkit.event.EventHandler
import org.bukkit.event.Listener
import org.bukkit.event.inventory.InventoryClickEvent
import org.bukkit.event.player.PlayerInteractEntityEvent
import org.bukkit.event.player.PlayerQuitEvent
import org.bukkit.inventory.ItemFlag
import org.bukkit.inventory.ItemStack
import org.bukkit.persistence.PersistentDataType
import org.bukkit.plugin.java.JavaPlugin
import org.bukkit.scheduler.BukkitRunnable
import org.bukkit.util.Vector

class BigWolfPlugin : JavaPlugin(), Listener, CommandExecutor, TabCompleter {

  private val guiTitleComponent = Component.text("ペットステータス", NamedTextColor.BLACK)

  // データ保存用のキー
  private lateinit var foodKey: NamespacedKey
  private lateinit var ownerKey: NamespacedKey
  private lateinit var silentKey: NamespacedKey

  // 定数
  private val MAX_FOOD_LEVEL = 50
  private val MIN_SCALE = 1.5
  private val MAX_SCALE = 2.5
  private val MIN_SPEED = 0.6
  private val MAX_SPEED = 1.1

  private val renamingPlayers = mutableMapOf<UUID, LivingEntity>()

  override fun onEnable() {
    foodKey = NamespacedKey(this, "food_count")
    ownerKey = NamespacedKey(this, "owner_uuid")
    silentKey = NamespacedKey(this, "is_silent_mode")

    val cmd = this.getCommand("bigwolf")
    cmd?.setExecutor(this)
    cmd?.setTabCompleter(this)

    server.pluginManager.registerEvents(this, this)
    logger.info("BigWolfPlugin enabled")
  }

  override fun onDisable() {
    logger.info("BigWolfPlugin disabled")
  }

  // --- Tab補完 ---
  override fun onTabComplete(
    sender: CommandSender,
    command: Command,
    label: String,
    args: Array<out String>,
  ): MutableList<String>? {
    if (args.size == 1) {
      val list =
        EntityType.entries
          .filter { it.isSpawnable && it.isAlive }
          .map { it.name.lowercase() }
          .toMutableList()
      list.add("food")
      return list.filter { it.startsWith(args[0].lowercase()) }.toMutableList()
    } else if (args.size == 2 && args[0].equals("wolf", ignoreCase = true)) {
      val registry = RegistryAccess.registryAccess().getRegistry(RegistryKey.WOLF_VARIANT)
      return registry
        .map { it.key().value().lowercase() }
        .filter { it.startsWith(args[1].lowercase()) }
        .toMutableList()
    }
    return mutableListOf()
  }

  // --- コマンド処理 ---
  override fun onCommand(
    sender: CommandSender,
    command: Command,
    label: String,
    args: Array<out String>,
  ): Boolean {
    if (sender !is Player) {
      sender.sendMessage(Component.text("プレイヤーのみ使用可能です。", NamedTextColor.RED))
      return true
    }

    if (args.isEmpty()) {
      spawnAndMountEntity(sender, EntityType.WOLF, null)
      return true
    }

    val subCommand = args[0].lowercase()

    if (subCommand == "food") {
      sender.inventory.addItem(createPetFoodItem())
      sender.sendMessage(Component.text("魔法のペットフードを入手しました！", NamedTextColor.YELLOW))
      return true
    }

    var type = EntityType.WOLF
    try {
      type = EntityType.valueOf(subCommand.uppercase())
    } catch (e: IllegalArgumentException) {
      sender.sendMessage(Component.text("そのエンティティは見つかりません: $subCommand", NamedTextColor.RED))
      return true
    }

    var variantName: String? = null
    if (args.size >= 2 && type == EntityType.WOLF) {
      variantName = args[1].lowercase()
    }

    if (!type.isAlive) {
      sender.sendMessage(Component.text("そのエンティティは召喚できません。", NamedTextColor.RED))
      return true
    }

    spawnAndMountEntity(sender, type, variantName)
    return true
  }

  // --- インタラクト処理 ---
  @EventHandler
  fun onEntityInteract(event: PlayerInteractEntityEvent) {
    val player = event.player
    val entity = event.rightClicked

    if (entity !is LivingEntity) return

    val plainName =
      entity.customName()?.let { PlainTextComponentSerializer.plainText().serialize(it) }

    if (
      !hasOwnerData(entity) && plainName != null && plainName.startsWith("${player.name}'s Big ")
    ) {
      setOwner(entity, player)
    }

    if (isOwner(entity, player)) {
      event.isCancelled = true

      val handItem = player.inventory.itemInMainHand

      if (isPetFood(handItem)) {
        giveFood(player, entity, handItem)
        return
      }

      if (player.isSneaking) {
        openInfoGui(player, entity)
      } else {
        if (entity.passengers.isEmpty()) {
          if (entity is Sittable) entity.isSitting = false
          entity.addPassenger(player)
          player.sendMessage(Component.text("再騎乗しました！", NamedTextColor.GREEN))
          startControlTask(player, entity)
        }
      }
    }
  }

  // --- GUIクリック処理 ---
  @EventHandler
  fun onInventoryClick(event: InventoryClickEvent) {
    if (event.view.title() == guiTitleComponent) {
      event.isCancelled = true

      val player = event.whoClicked as? Player ?: return
      val item = event.currentItem ?: return

      val targetEntity =
        player.getNearbyEntities(6.0, 6.0, 6.0).filterIsInstance<LivingEntity>().firstOrNull {
          isOwner(it, player)
        }

      if (targetEntity == null) {
        player.closeInventory()
        player.sendMessage(Component.text("近くにペットが見つかりません。", NamedTextColor.RED))
        return
      }

      // 名札クリック
      if (item.type == Material.NAME_TAG) {
        player.closeInventory()
        renamingPlayers[player.uniqueId] = targetEntity
        player.sendMessage(
          Component.text("--------------------------------", NamedTextColor.YELLOW)
        )
        player.sendMessage(Component.text("新しい名前をチャットに入力してください。", NamedTextColor.AQUA))
        player.sendMessage(Component.text("(例: amanda)", NamedTextColor.GRAY))
        player.sendMessage(
          Component.text("--------------------------------", NamedTextColor.YELLOW)
        )
      }
      // サイレントモード切り替え
      else if (item.type == Material.LIME_WOOL || item.type == Material.RED_WOOL) {
        val currentSilent = getSilentMode(targetEntity)
        val newSilent = !currentSilent // 反転
        setSilentMode(targetEntity, newSilent)

        player.playSound(player.location, Sound.UI_BUTTON_CLICK, 1f, 1f)
        openInfoGui(player, targetEntity) // 画面更新
      }
    }
  }

  // --- 名前変更チャット処理 ---
  @EventHandler
  fun onPlayerChat(event: AsyncChatEvent) {
    val player = event.player
    if (renamingPlayers.containsKey(player.uniqueId)) {
      event.isCancelled = true

      val plainMessage = PlainTextComponentSerializer.plainText().serialize(event.message())
      val entity = renamingPlayers.remove(player.uniqueId)

      if (entity == null || !entity.isValid) {
        player.sendMessage(Component.text("ペットがいなくなってしまったようです。", NamedTextColor.RED))
        return
      }

      if (plainMessage.equals("cancel", ignoreCase = true)) {
        player.sendMessage(Component.text("名前変更をキャンセルしました。", NamedTextColor.RED))
        return
      }

      Bukkit.getScheduler()
        .runTask(
          this,
          Runnable {
            val nameComponent =
              LegacyComponentSerializer.legacyAmpersand().deserialize(plainMessage)
            entity.customName(nameComponent)
            entity.isCustomNameVisible = true
            player.sendMessage(Component.text("名前を変更しました！", NamedTextColor.GREEN))
            entity.world.playSound(entity.location, Sound.ENTITY_PLAYER_LEVELUP, 1.0f, 1.0f)
          },
        )
    }
  }

  @EventHandler
  fun onPlayerQuit(event: PlayerQuitEvent) {
    renamingPlayers.remove(event.player.uniqueId)
  }

  // --- 召喚処理 ---
  private fun spawnAndMountEntity(player: Player, type: EntityType, variantName: String?) {
    val loc = player.location.clone().add(0.0, 1.0, 0.0)
    val entity = player.world.spawnEntity(loc, type) as? LivingEntity ?: return

    val initialName = Component.text("${player.name}'s Big ${type.name}")
    entity.customName(initialName)
    entity.isCustomNameVisible = true

    setOwner(entity, player)

    entity.setRemoveWhenFarAway(false)
    entity.isInvulnerable = true
    entity.setAI(true)

    if (entity is Tameable) {
      entity.isTamed = true
      entity.owner = player
    }
    if (entity is Sittable) entity.isSitting = false
    if (entity is Ageable) entity.setAdult()

    if (entity is Wolf && variantName != null) {
      val registry = RegistryAccess.registryAccess().getRegistry(RegistryKey.WOLF_VARIANT)
      val variant = registry.firstOrNull { it.key().value().equals(variantName, ignoreCase = true) }
      if (variant != null) entity.variant = variant
    }

    setFoodLevel(entity, 0)
    setSilentMode(entity, false) // デフォルトは音あり(Silent Mode OFF)
    updateEntityStats(entity, 0)

    entity.getAttribute(Attribute.MOVEMENT_SPEED)?.baseValue = 0.0
    entity.getAttribute(Attribute.FLYING_SPEED)?.baseValue = 0.0
    entity.getAttribute(Attribute.STEP_HEIGHT)?.baseValue = 1.1

    Bukkit.getScheduler()
      .runTaskLater(
        this,
        Runnable {
          entity.addPassenger(player)
          startControlTask(player, entity)
        },
        2L,
      )

    player.sendMessage(Component.text("巨大な ${type.name} を召喚しました！", NamedTextColor.AQUA))
  }

  // --- 操作タスク (シンプル化) ---
  private fun startControlTask(player: Player, entity: LivingEntity) {
    object : BukkitRunnable() {
        override fun run() {
          if (!entity.isValid || !player.isOnline || !entity.passengers.contains(player)) {
            this.cancel()
            if (entity.isValid) entity.isSilent = false
            return
          }
          if (entity is Sittable) entity.isSitting = false

          val level = getFoodLevel(entity)
          val progress = level.toDouble() / MAX_FOOD_LEVEL.toDouble()
          val currentSpeed = MIN_SPEED + (MAX_SPEED - MIN_SPEED) * progress

          // サイレントモード設定を取得
          val isSilentModeOn = getSilentMode(entity)

          // シンプルな切り替え: ONなら無音、OFFならバニラの音
          entity.isSilent = isSilentModeOn

          val input = player.currentInput
          val dir = player.location.direction.setY(0).normalize()
          val right = dir.clone().crossProduct(Vector(0, 1, 0))

          val velocity = Vector(0, 0, 0)
          var isMoving = false

          if (input.isForward) {
            velocity.add(dir)
            isMoving = true
          }
          if (input.isBackward) {
            velocity.subtract(dir)
            isMoving = true
          }
          if (input.isLeft) {
            velocity.subtract(right)
            isMoving = true
          }
          if (input.isRight) {
            velocity.add(right)
            isMoving = true
          }

          if (isMoving) {
            velocity.normalize().multiply(currentSpeed)
            velocity.y = entity.velocity.y
            entity.velocity = velocity
          }

          if (input.isJump && entity.isOnGround) {
            entity.velocity = entity.velocity.setY(0.6)
          }
          entity.setRotation(player.location.yaw, 0f)
        }
      }
      .runTaskTimer(this, 0L, 1L)
  }

  // --- GUI ---
  private fun openInfoGui(player: Player, entity: LivingEntity) {
    val inv = Bukkit.createInventory(null, 9, guiTitleComponent)
    val level = getFoodLevel(entity)
    val isSilentOn = getSilentMode(entity)

    // 1. 名前
    val nameComp = entity.customName() ?: Component.text("不明")
    inv.setItem(
      0,
      createGuiItem(
        Material.NAME_TAG,
        Component.text("名前: ", NamedTextColor.AQUA).append(nameComp),
        Component.text("クリックで名前を変更", NamedTextColor.GREEN),
      ),
    )

    // 2. 種類 (スポーンエッグのアイコン)
    val typeName = entity.type.name
    val eggMaterialName = "${typeName}_SPAWN_EGG"
    val eggMaterial = Material.getMaterial(eggMaterialName) ?: Material.PIG_SPAWN_EGG

    val typeInfo = if (entity is Wolf) "狼 (${entity.variant.key().value()})" else typeName
    inv.setItem(
      1,
      createGuiItem(
        eggMaterial,
        Component.text("種類", NamedTextColor.YELLOW),
        Component.text(typeInfo, NamedTextColor.WHITE),
      ),
    )

    // 3. サイレントモード切り替え
    val soundIcon = if (isSilentOn) Material.RED_WOOL else Material.LIME_WOOL
    val modeName = if (isSilentOn) "サイレントモード: ON" else "サイレントモード: OFF"
    val statusText =
      if (isSilentOn) Component.text("静寂 (無音)", NamedTextColor.RED)
      else Component.text("通常 (バニラの音)", NamedTextColor.GREEN)

    inv.setItem(
      2,
      createGuiItem(
        soundIcon,
        Component.text(modeName, NamedTextColor.WHITE),
        statusText,
        Component.text("クリックで切り替え", NamedTextColor.GRAY),
      ),
    )

    // 4. ステータス
    val scaleStr = String.format("%.1f", entity.getAttribute(Attribute.SCALE)?.baseValue ?: 1.0)
    val displaySpeed =
      String.format(
        "%.1f",
        MIN_SCALE + (MAX_SCALE - MIN_SCALE) * (level.toDouble() / MAX_FOOD_LEVEL),
      )

    inv.setItem(
      4,
      createGuiItem(
        Material.COOKED_BEEF,
        Component.text("育成ステータス", NamedTextColor.GOLD),
        Component.text("フード: $level / $MAX_FOOD_LEVEL", NamedTextColor.GRAY).replaceText {
          it
            .match(level.toString())
            .replacement(Component.text(level.toString(), NamedTextColor.YELLOW))
        },
        Component.text("サイズ: $scaleStr 倍", NamedTextColor.GRAY).replaceText {
          it.match(scaleStr).replacement(Component.text(scaleStr, NamedTextColor.GREEN))
        },
        Component.text("速度ランク: $displaySpeed", NamedTextColor.GRAY).replaceText {
          it.match(displaySpeed).replacement(Component.text(displaySpeed, NamedTextColor.AQUA))
        },
      ),
    )

    // 5. 体力
    val hp = entity.health.toInt()
    val maxHp = entity.getAttribute(Attribute.MAX_HEALTH)?.value?.toInt() ?: 0
    inv.setItem(
      8,
      createGuiItem(
        Material.RED_DYE,
        Component.text("体力", NamedTextColor.RED),
        Component.text("$hp / $maxHp", NamedTextColor.WHITE),
      ),
    )

    player.openInventory(inv)
  }

  // --- データ保存 ---
  private fun setOwner(entity: LivingEntity, player: Player) {
    entity.persistentDataContainer.set(
      ownerKey,
      PersistentDataType.STRING,
      player.uniqueId.toString(),
    )
  }

  private fun hasOwnerData(entity: LivingEntity): Boolean {
    return entity.persistentDataContainer.has(ownerKey, PersistentDataType.STRING)
  }

  private fun isOwner(entity: LivingEntity, player: Player): Boolean {
    val uuidStr = entity.persistentDataContainer.get(ownerKey, PersistentDataType.STRING)
    if (uuidStr != null) {
      return uuidStr == player.uniqueId.toString()
    }
    val plainName =
      entity.customName()?.let { PlainTextComponentSerializer.plainText().serialize(it) }
    return plainName != null && plainName.startsWith("${player.name}'s Big ")
  }

  private fun getFoodLevel(entity: LivingEntity): Int =
    entity.persistentDataContainer.get(foodKey, PersistentDataType.INTEGER) ?: 0

  private fun setFoodLevel(entity: LivingEntity, level: Int) =
    entity.persistentDataContainer.set(foodKey, PersistentDataType.INTEGER, level)

  private fun getSilentMode(entity: LivingEntity): Boolean =
    (entity.persistentDataContainer.get(silentKey, PersistentDataType.BYTE) ?: 0).toInt() == 1

  private fun setSilentMode(entity: LivingEntity, isSilent: Boolean) =
    entity.persistentDataContainer.set(silentKey, PersistentDataType.BYTE, if (isSilent) 1 else 0)

  // --- ユーティリティ ---
  private fun createGuiItem(
    material: Material,
    name: Component,
    vararg lore: Component,
  ): ItemStack {
    val item = ItemStack(material)
    val meta = item.itemMeta
    meta.displayName(name)
    meta.lore(lore.toList())
    item.itemMeta = meta
    return item
  }

  private fun createPetFoodItem(): ItemStack {
    val item = ItemStack(Material.COOKED_BEEF)
    val meta = item.itemMeta
    meta.displayName(Component.text("★ 魔法のペットフード", NamedTextColor.GOLD))
    meta.lore(
      listOf(
        Component.text("ペットに与えると成長します", NamedTextColor.GRAY),
        Component.text("右クリックで与える", NamedTextColor.YELLOW),
      )
    )
    meta.addEnchant(Enchantment.UNBREAKING, 1, true)
    meta.addItemFlags(ItemFlag.HIDE_ENCHANTS)
    item.itemMeta = meta
    return item
  }

  private fun giveFood(player: Player, entity: LivingEntity, item: ItemStack) {
    val currentLevel = getFoodLevel(entity)
    if (currentLevel >= MAX_FOOD_LEVEL) {
      player.sendMessage(Component.text("これ以上食べられません！(MAX)", NamedTextColor.RED))
      return
    }
    val newLevel = currentLevel + 1
    setFoodLevel(entity, newLevel)
    updateEntityStats(entity, newLevel)
    item.amount = item.amount - 1
    entity.world.playSound(entity.location, Sound.ENTITY_GENERIC_EAT, 1.0f, 1.0f)
    entity.world.spawnParticle(
      Particle.HEART,
      entity.location.add(0.0, entity.height + 0.5, 0.0),
      5,
      0.5,
      0.5,
      0.5,
    )
    player.sendMessage(
      Component.text("ムシャムシャ... 成長しました！ ($newLevel / $MAX_FOOD_LEVEL)", NamedTextColor.GOLD)
    )
  }

  private fun isPetFood(item: ItemStack): Boolean {
    if (item.type != Material.COOKED_BEEF) return false
    val meta = item.itemMeta ?: return false
    val displayName = meta.displayName() ?: return false
    val plain = PlainTextComponentSerializer.plainText().serialize(displayName)
    return plain.contains("魔法のペットフード")
  }

  private fun updateEntityStats(entity: LivingEntity, level: Int) {
    val progress = level.toDouble() / MAX_FOOD_LEVEL.toDouble()
    val newScale = MIN_SCALE + (MAX_SCALE - MIN_SCALE) * progress
    entity.getAttribute(Attribute.SCALE)?.baseValue = newScale
  }
}
