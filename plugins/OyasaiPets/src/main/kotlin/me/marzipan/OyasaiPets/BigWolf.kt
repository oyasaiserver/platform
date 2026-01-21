package me.marzipan.OyasaiPets

import io.papermc.paper.entity.LookAnchor
import io.papermc.paper.event.player.AsyncChatEvent
import io.papermc.paper.registry.RegistryAccess
import io.papermc.paper.registry.RegistryKey
import java.util.Locale
import java.util.UUID
import me.realized.tm.api.TMAPI
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
import org.bukkit.event.entity.EntityDamageEvent
import org.bukkit.event.entity.EntityDeathEvent
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

  private val guiTitle = Component.text("ペットステータス", BLACK)

  private val shopGuiTitle = Component.text("購入確認", BLACK)

  data class ShopContext(val type: EntityType, val variant: String?, val cost: Int)

  private val openedShopGuis = mutableMapOf<Inventory, ShopContext>()
  // --- shopremoveall 確認待ち管理 ---
  private val pendingRemoveAllConfirm = mutableMapOf<UUID, Long>()

  // Cooldowns & Tasks
  private val skillCooldowns = mutableMapOf<UUID, Long>()
  private val mountCooldowns = mutableMapOf<UUID, Long>()
  private val dashEndTimes = mutableMapOf<UUID, Long>()
  private val dropCooldowns = mutableMapOf<UUID, Long>()

  private val renamingPlayers = mutableMapOf<UUID, LivingEntity>()
  private val openedGuis = mutableMapOf<Inventory, LivingEntity>()

  // タスク管理
  private val activeFetchTasks = mutableMapOf<UUID, BukkitRunnable>()

  override fun onEnable() {
    // TokenManager プラグインの存在確認
    val tmPlugin = server.pluginManager.getPlugin("TokenManager")
    if (tmPlugin == null || !tmPlugin.isEnabled) {
      logger.severe("TokenManager not found! This plugin requires TokenManager to work.")
      server.pluginManager.disablePlugin(this)
      return
    }
    logger.info("TokenManager found - Economy system enabled")

    // Keys Init
    BigWolfKeys.initialize(this)

    // PetDataManager Init
    PetDataManager.initialize(this)

    // Ensure config and apply config
    ensureDefaultConfig()
    PetRegistry.applyConfig(this)

    // Load configurable values
    BigWolfConfig.loadFrom(config)

    getCommand("bigwolf")?.apply {
      setExecutor(this@BigWolfPlugin)
      setTabCompleter(this@BigWolfPlugin)
    }
    server.pluginManager.registerEvents(this, this)
    logger.info("BigWolfPlugin enabled with TokenManager integration")
  }

  override fun onDisable() {
    logger.info("BigWolfPlugin disabled")
  }

  /** プレイヤーのポイント残高を取得 */
  @Suppress("DEPRECATION")
  private fun getPlayerTokens(player: Player): Long {
    return try {
      TMAPI.getTokens(player.uniqueId)
    } catch (e: Exception) {
      logger.warning("Failed to get tokens for ${player.name}: ${e.message}")
      0L
    }
  }

  /**
   * プレイヤーからポイントを消費（残高チェック付き）
   *
   * @return 成功したかどうか
   */
  @Suppress("DEPRECATION")
  private fun consumeTokens(player: Player, amount: Int): Boolean {
    if (amount <= 0) return true

    val currentTokens =
        try {
          TMAPI.getTokens(player.uniqueId)
        } catch (e: Exception) {
          logger.warning("Failed to get tokens for ${player.name}: ${e.message}")
          player.sendMessage(Component.text("ポイント情報の取得に失敗しました。", RED))
          return false
        }

    if (currentTokens < amount) {
      player.sendMessage(
          Component.text("ポイントが不足しています！ (必要: ${amount}pt, 所持: ${currentTokens}pt)", RED))
      return false
    }

    return try {
      TMAPI.removeTokens(player.uniqueId, amount)
      true
    } catch (e: Exception) {
      logger.warning("Failed to remove tokens from ${player.name}: ${e.message}")
      player.sendMessage(Component.text("ポイント処理中にエラーが発生しました。", RED))
      false
    }
  }

  // --- Commands ---
  override fun onCommand(
      sender: CommandSender,
      command: Command,
      label: String,
      args: Array<out String>,
  ): Boolean {
    if (sender !is Player)
        return true.also { sender.sendMessage(Component.text("プレイヤーのみ可能です。", RED)) }

    if (args.isEmpty()) {
      // non-OP用の使用方法を表示
      sender.sendMessage(Component.text("=== BigWolf 使用方法 ===", GOLD))
      sender.sendMessage(Component.text("/bigwolf <mob名> [variant] - ペットを購入して召喚", YELLOW))
      sender.sendMessage(Component.text("/bigwolf storeall - 自分の全ペットを収納", YELLOW))
      sender.sendMessage(Component.text("例: /bigwolf wolf, /bigwolf cat tabby", GRAY))
      return true
    }

    val sub = args[0].lowercase()

    when (sub) {
      "item" -> {
        if (!sender.isOp) {
          sender.sendMessage(Component.text("OPのみ使用できます。", RED))
          return true
        }
        if (args.size < 2) {
          sender.sendMessage(
              Component.text(
                  "使い方: /bigwolf item <food|brush|treat|toys|skillbook|skillbook1|skillbook2|skillbook3|all>",
                  RED))
          return true
        }
        val key = args[1].lowercase()
        when (key) {
          "food" -> {
            sender.inventory.addItem(createPetFoodItem())
            sender.sendMessage(Component.text("魔法のペットフードを入手しました！", YELLOW))
          }

          "brush" -> {
            sender.inventory.addItem(createPetBrushItem())
            sender.sendMessage(Component.text("ペットブラシを入手しました！", YELLOW))
          }

          "treat" -> {
            sender.inventory.addItem(createPetTreatItem())
            sender.sendMessage(Component.text("ペットのおやつを入手しました！", YELLOW))
          }

          "toys" -> {
            val toys = PetRegistry.getAllToyItems()
            if (toys.isNotEmpty()) {
              toys.forEach { sender.inventory.addItem(it) }
              sender.sendMessage(Component.text("おもちゃセットを入手しました！", YELLOW))
            } else {
              sender.sendMessage(Component.text("おもちゃ定義が見つかりません。", GRAY))
            }
          }

          "skillbook" -> {
            sender.inventory.addItem(createSkillUnlockItem(1))
            sender.inventory.addItem(createSkillUnlockItem(2))
            sender.inventory.addItem(createSkillUnlockItem(3))
            sender.sendMessage(Component.text("スキル強化用アイテムを入手しました！", LIGHT_PURPLE))
          }

          "skillbook1" -> {
            sender.inventory.addItem(createSkillUnlockItem(1))
            sender.sendMessage(Component.text("スキルブック(Lv.1)を入手しました！", LIGHT_PURPLE))
          }

          "skillbook2" -> {
            sender.inventory.addItem(createSkillUnlockItem(2))
            sender.sendMessage(Component.text("スキルブック(Lv.2)を入手しました！", LIGHT_PURPLE))
          }

          "skillbook3" -> {
            sender.inventory.addItem(createSkillUnlockItem(3))
            sender.sendMessage(Component.text("スキルブック(Lv.3)を入手しました！", LIGHT_PURPLE))
          }

          "all" -> {
            sender.inventory.addItem(createPetFoodItem())
            sender.inventory.addItem(createPetBrushItem())
            sender.inventory.addItem(createPetTreatItem())

            // toys
            val toys = PetRegistry.getAllToyItems()
            if (toys.isNotEmpty()) {
              toys.forEach { sender.inventory.addItem(it) }
            }
            // skillbooks
            sender.inventory.addItem(createSkillUnlockItem(1))
            sender.inventory.addItem(createSkillUnlockItem(2))
            sender.inventory.addItem(createSkillUnlockItem(3))

            sender.sendMessage(Component.text("フード・ブラシ・おやつ・おもちゃ・スキルブック を入手しました！", YELLOW))
          }

          else -> {
            sender.sendMessage(Component.text("不明なアイテムです: $key", RED))
            return true
          }
        }
      }
      "shop" -> {
        if (!sender.isOp) {
          sender.sendMessage(Component.text("OPのみ使用できます。", RED))
          return true
        }
        if (args.size < 2) {
          sender.sendMessage(
              Component.text("使い方: /bigwolf shop <mob> [variant] [cost] [yawDeg]", RED))
          return true
        }

        val type = runCatching { EntityType.valueOf(args[1].uppercase()) }.getOrNull()
        if (type == null || !type.isAlive) {
          sender.sendMessage(Component.text("無効なMOB名です。", RED))
          return true
        }

        val variant = args.getOrNull(2)?.lowercase()
        val cost = args.getOrNull(3)?.toIntOrNull() ?: BigWolfConfig.defaultShopCost

        // optional yaw: any degree angle (float allowed). If omitted, use admin's current yaw.
        val yawArg = args.getOrNull(4)
        val yawDeg: Float? =
            if (yawArg.isNullOrBlank()) {
              null
            } else {
              val raw = yawArg.toFloatOrNull()
              if (raw == null) {
                sender.sendMessage(
                    Component.text("yawDeg は数値で指定してください (例: 0, 90, 180, 270, 45.5)", RED))
                return true
              }
              // normalize to [0, 360)
              (((raw % 360f) + 360f) % 360f)
            }

        spawnShopMob(sender, type, variant, cost, yawDeg)
        sender.sendMessage(
            Component.text(
                "購入用MOBを設置しました: ${type.name}${if (variant != null) " ($variant)" else ""} cost=$cost",
                GREEN))
      }
      "shopremove" -> {
        if (!sender.isOp) {
          sender.sendMessage(Component.text("OPのみ使用できます。", RED))
          return true
        }
        val target = sender.getTargetEntity(6) as? LivingEntity
        if (target == null) {
          sender.sendMessage(Component.text("狙っているエンティティが見つかりません。", RED))
          return true
        }
        val pdc = target.persistentDataContainer
        val isShop = (pdc.get(BigWolfKeys.SHOP_FLAG, PersistentDataType.BYTE) ?: 0).toInt() == 1
        if (!isShop) {
          sender.sendMessage(Component.text("そのエンティティはショップ用ではありません。", RED))
          return true
        }
        target.world.spawnParticle(Particle.POOF, target.location, 10, 0.3, 0.3, 0.3, 0.0)
        target.remove()
        sender.sendMessage(Component.text("ショップ用MOBを削除しました。", GREEN))
      }
      "shopremoveall" -> {
        if (!sender.isOp) {
          sender.sendMessage(Component.text("OPのみ使用できます。", RED))
          return true
        }

        val now = System.currentTimeMillis()
        val last = pendingRemoveAllConfirm[sender.uniqueId]

        // 確認済み（制限時間内）なら実行
        if (last != null && now - last <= BigWolfConfig.REMOVEALL_CONFIRM_TIMEOUT_MS) {
          pendingRemoveAllConfirm.remove(sender.uniqueId)

          var removed = 0
          for (world in Bukkit.getWorlds()) {
            val it = world.livingEntities.iterator()
            while (it.hasNext()) {
              val e = it.next()
              val pdc = e.persistentDataContainer
              val isShop =
                  (pdc.get(BigWolfKeys.SHOP_FLAG, PersistentDataType.BYTE) ?: 0).toInt() == 1
              if (isShop) {
                e.remove()
                removed++
              }
            }
          }

          sender.sendMessage(Component.text("ショップ用MOBを $removed 体削除しました。", GREEN))
          return true
        }

        // 初回 or タイムアウト後
        pendingRemoveAllConfirm[sender.uniqueId] = now
        sender.sendMessage(Component.text("【確認】本当に全ワールドのショップMOBを削除しますか？", RED))
        sender.sendMessage(Component.text("15秒以内にもう一度 /bigwolf shopremoveall を実行してください。", YELLOW))
        return true
      }
      "reload" -> {
        if (!sender.isOp) {
          sender.sendMessage(Component.text("OPのみ使用できます。", RED))
          return true
        }
        reloadConfig()
        ensureDefaultConfig()
        PetRegistry.applyConfig(this)

        // Reload configurable values
        BigWolfConfig.loadFrom(config)

        sender.sendMessage(Component.text("BigWolf: config reloaded!", GREEN))
      }
      "toy" -> {
        if (!sender.isOp) {
          sender.sendMessage(Component.text("OPのみ使用できます。", RED))
          return true
        }
        sender.sendMessage(Component.text("/bigwolf item toys を使ってください", YELLOW))
        val toys = PetRegistry.getAllToyItems()
        if (toys.isNotEmpty()) {
          toys.forEach { sender.inventory.addItem(it) }
          sender.sendMessage(Component.text("おもちゃセットを入手しました！", YELLOW))
        } else {
          sender.sendMessage(Component.text("おもちゃ定義が見つかりません。", GRAY))
        }
      }
      "food" -> {
        if (!sender.isOp) {
          sender.sendMessage(Component.text("OPのみ使用できます。", RED))
          return true
        }
        sender.sendMessage(Component.text("/bigwolf item food を使ってください！", YELLOW))
        sender.inventory.addItem(createPetFoodItem())
        sender.sendMessage(Component.text("魔法のペットフードを入手しました！", YELLOW))
      }

      // OP用：全部配布 (旧コマンド: リダイレクト)
      "skillbook" -> {
        if (!sender.isOp) {
          sender.sendMessage(Component.text("OPのみ使用できます！", RED))
          return true
        }
        sender.sendMessage(Component.text("/bigwolf item skillbook を使ってください", YELLOW))
        if (!sender.isOp) {
          sender.sendMessage(Component.text("権限がありません。", RED))
          return true
        }
        sender.inventory.addItem(createSkillUnlockItem(1))
        sender.inventory.addItem(createSkillUnlockItem(2))
        sender.inventory.addItem(createSkillUnlockItem(3))
        sender.sendMessage(Component.text("スキル強化用アイテムを入手しました！", LIGHT_PURPLE))
      }

      // ★ 新規: 強制収納（ターゲット）
      "force_store" -> handleForceStoreTarget(sender)

      // ★ 新規: 強制収納（指定プレイヤーの全ペット）
      "force_storeall" -> handleForceStoreAll(sender, args)

      "storeall" -> storeAllPets(sender)
      "exp" -> handleExperimentalSummon(sender, args)

      // バージョン表示
      "version" -> {
        val version = description.version
        sender.sendMessage(Component.text("=== OyasaiPets (BigWolf) ===", GOLD))
        sender.sendMessage(Component.text("Version: $version", YELLOW))
      }

      // ペット復活コマンド
      "revive" -> handleRevivePet(sender, args)

      // 死亡したペット一覧
      "dead" -> handleDeadPetsList(sender)

      // ペット履歴（OPのみ他プレイヤー指定可）
      "history" -> handlePetHistory(sender, args)

      // ペットの最終位置を確認
      "locate" -> handleLocatePet(sender, args)

      else -> handleNormalSummon(sender, sub, args)
    }
    return true
  }

  private fun ensureDefaultConfig() {
    // 既に設定が存在する場合は尊重しつつ、未定義キーだけデフォルトを注入
    val cfg = config

    // global defaults
    BigWolfConfig.applyDefaultsTo(cfg)

    // pets.<mob>.* をデフォルト化（例: pets.wolf.baseSpeed）
    for (type in PetRegistry.allConfigurableTypes()) {
      val spec = PetRegistry.getDefaultSpec(type)
      val key = type.name.lowercase()
      val base = "pets.$key"

      cfg.addDefault("$base.baseSpeed", spec.baseSpeed)
      cfg.addDefault("$base.maxSpeed", spec.maxSpeed)
      cfg.addDefault("$base.jumpPower", spec.jumpPower)
      cfg.addDefault("$base.scaleMin", spec.scaleRange.start)
      cfg.addDefault("$base.scaleMax", spec.scaleRange.endInclusive)
    }

    cfg.options().copyDefaults(true)
    saveConfig()
  }

  // --- OP向け強制収納ロジック ---

  // 視線の先のペットを強制収納
  private fun handleForceStoreTarget(player: Player) {
    if (!player.isOp) {
      player.sendMessage(Component.text("OPのみ使用できます。", RED))
      return
    }

    val target = player.getTargetEntity(15) as? LivingEntity
    if (target == null) {
      player.sendMessage(Component.text("ターゲットが見つかりません。", RED))
      return
    }

    val petId = target.petId
    val ownerId = target.ownerId
    if (petId == null || ownerId == null) {
      player.sendMessage(Component.text("これはBigWolfのペットではないようです。", RED))
      return
    }

    val item = createStoredPetItem(target)
    val leftovers = player.inventory.addItem(item)
    leftovers.values.forEach { player.world.dropItem(player.location, it) }

    val ownerName = Bukkit.getOfflinePlayer(UUID.fromString(ownerId)).name ?: "Unknown"
    player.sendMessage(Component.text("対象のペットを強制収納しました。(Owner: $ownerName)", GREEN))
    player.playSound(player.location, Sound.ENTITY_ENDERMAN_TELEPORT, 1f, 1f)
    target.world.spawnParticle(Particle.POOF, target.location, 10, 0.5, 0.5, 0.5, 0.0)
    target.remove()
  }

  // 指定プレイヤーの全ペットを強制収納
  private fun handleForceStoreAll(player: Player, args: Array<out String>) {
    if (!player.isOp) {
      player.sendMessage(Component.text("OPのみが使用できます。", RED))
      return
    }
    if (args.size < 2) {
      player.sendMessage(Component.text("プレイヤー名を指定してください: /bigwolf force_storeall <player>", RED))
      return
    }

    val targetName = args[1]
    // オンラインまたはオフラインプレイヤーからUUIDを取得
    val targetUuid =
        Bukkit.getPlayer(targetName)?.uniqueId ?: Bukkit.getOfflinePlayer(targetName).uniqueId

    val targetIdStr = targetUuid.toString()
    var count = 0
    val itemsToGive = mutableListOf<ItemStack>()

    for (world in Bukkit.getWorlds()) {
      // ロードされているエンティティのみ対象
      val pets = world.livingEntities.filter { it.ownerId == targetIdStr }
      for (entity in pets) {
        val item = createStoredPetItem(entity)
        itemsToGive.add(item)
        entity.world.spawnParticle(Particle.POOF, entity.location, 10, 0.5, 0.5, 0.5, 0.0)
        entity.remove()
        count++
      }
    }

    if (count == 0) {
      player.sendMessage(Component.text("${targetName} のロード済みペットは見つかりませんでした。", RED))
      return
    }

    val leftovers = player.inventory.addItem(*itemsToGive.toTypedArray())
    leftovers.values.forEach { item -> player.world.dropItem(player.location, item) }

    player.playSound(player.location, Sound.ENTITY_ENDERMAN_TELEPORT, 1f, 1f)
    player.sendMessage(Component.text("${targetName} のペット $count 匹を強制回収しました！", GREEN))
    if (leftovers.isNotEmpty()) {
      player.sendMessage(Component.text("インベントリに入り切らなかった分を足元にドロップしました。", YELLOW))
    }
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
    val cost = BigWolfConfig.defaultShopCost

    // ショップGUIを開いて購入処理
    openShopGui(player, ShopContext(type, variant, cost))
  }

  // --- 復活コマンド ---
  private fun handleRevivePet(player: Player, args: Array<out String>) {
    if (args.size < 2) {
      player.sendMessage(Component.text("使い方: /bigwolf revive <ペット番号>", RED))
      player.sendMessage(Component.text("/bigwolf dead で死亡したペットを確認できます。", GRAY))
      return
    }

    val petNumber = args[1].toIntOrNull()
    if (petNumber == null) {
      player.sendMessage(Component.text("ペット番号は数字で指定してください。", RED))
      return
    }

    val petData = PetDataManager.getDeathDataForRevive(player.uniqueId, petNumber)
    if (petData == null) {
      player.sendMessage(Component.text("番号 $petNumber の死亡したペットは見つかりません。", RED))
      return
    }

    // ペット数制限チェック
    if (countActivePets(player) >= BigWolfConfig.MAX_PET_COUNT) {
      player.sendMessage(Component.text("ペットは同時に${BigWolfConfig.MAX_PET_COUNT}匹までしか召喚できません！", RED))
      return
    }

    // ポイント消費
    val cost = BigWolfConfig.reviveCost
    if (!consumeTokens(player, cost)) {
      return
    }

    // ペットを復活（上空からの降臨演出）
    val type = runCatching { EntityType.valueOf(petData.type) }.getOrNull() ?: EntityType.WOLF
    val spec = PetRegistry.get(type)

    // ★ 安全なスポーン位置を計算（プレイヤーの位置を基準に）
    val playerLoc = player.location.clone()

    // 安全な着地点を探す（プレイヤーの足元から固体ブロックを探す）
    val groundLoc = playerLoc.clone()
    // 下方向に固体ブロックを探す
    var safeY = playerLoc.y.toInt()
    for (y in playerLoc.y.toInt() downTo (playerLoc.y.toInt() - 5)) {
      val block = playerLoc.world?.getBlockAt(playerLoc.blockX, y, playerLoc.blockZ)
      if (block != null && block.type.isSolid && !block.isLiquid) {
        safeY = y + 1
        break
      }
    }
    groundLoc.y = safeY.toDouble()

    // 上空10ブロックからスタート
    val spawnLoc = groundLoc.clone().add(0.0, 10.0, 0.0)

    val entity = player.world.spawnEntity(spawnLoc, type) as? LivingEntity
    if (entity == null) {
      player.sendMessage(Component.text("この場所ではペットを復活できません。", RED))
      return
    }

    setupPetEntity(entity, spec, player)

    // データ復元
    entity.ownerId = player.uniqueId.toString()
    entity.petId = petData.petId

    if (petData.customName != null) {
      entity.customName(
          LegacyComponentSerializer.legacyAmpersand().deserialize(petData.customName!!))
      entity.isCustomNameVisible = true
    }

    entity.foodLevel = petData.foodLevel
    entity.skillType = petData.skillType
    entity.skillUnlockedLevel = petData.skillUnlockedLevel
    entity.statDistance = petData.stats.distance
    entity.statJumps = petData.stats.jumps
    entity.statToys = petData.stats.toys
    entity.statBrushes = petData.stats.brushes
    entity.statTreats = petData.stats.treats

    if (petData.variant != null) {
      VariantHandler.applyVariant(entity, petData.variant)
    }

    updateStats(entity, petData.foodLevel, spec)

    // ステータス更新
    PetDataManager.markAsRevived(player.uniqueId, petData.petId)

    // ★ 上空から降りてくる演出
    player.playSound(player.location, Sound.ENTITY_PLAYER_LEVELUP, 1f, 1.2f)
    player.sendMessage(Component.text("ペット #${petNumber} を復活させました！ (-${cost}pt)", GREEN))

    // 降臨演出タスク（テレポートで段階的に降下）
    val targetY = groundLoc.y + 0.5 // 着地点（地面より少し上）

    object : BukkitRunnable() {
          var currentY = spawnLoc.y

          override fun run() {
            if (!entity.isValid) {
              cancel()
              return
            }

            // パーティクル演出（キラキラと光の柱）
            val currentLoc = entity.location
            entity.world.spawnParticle(
                Particle.TOTEM_OF_UNDYING,
                currentLoc.clone().add(0.0, 1.0, 0.0),
                5,
                0.3,
                0.5,
                0.3,
                0.02)
            entity.world.spawnParticle(
                Particle.END_ROD, currentLoc.clone().add(0.0, 2.0, 0.0), 3, 0.2, 0.2, 0.2, 0.01)
            entity.world.spawnParticle(
                Particle.FIREWORK, currentLoc.clone().add(0.0, 0.5, 0.0), 2, 0.4, 0.3, 0.4, 0.0)

            // テレポートでゆっくり降下（物理演算を使わない）
            if (currentY > targetY) {
              currentY -= 0.3 // 1tickあたり0.3ブロック降下
              if (currentY < targetY) currentY = targetY

              val newLoc = groundLoc.clone()
              newLoc.y = currentY
              newLoc.yaw = entity.location.yaw
              newLoc.pitch = entity.location.pitch
              entity.teleport(newLoc)
              entity.fallDistance = 0f // 落下ダメージ防止
            } else {
              // 着地完了
              val finalLoc = groundLoc.clone()
              finalLoc.y = targetY
              finalLoc.yaw = entity.location.yaw
              finalLoc.pitch = entity.location.pitch
              entity.teleport(finalLoc)

              // 着地時の派手なエフェクト
              entity.world.spawnParticle(
                  Particle.TOTEM_OF_UNDYING,
                  entity.location.add(0.0, 1.0, 0.0),
                  50,
                  1.0,
                  1.0,
                  1.0,
                  0.2)
              entity.world.spawnParticle(
                  Particle.EXPLOSION, entity.location.add(0.0, 0.5, 0.0), 3, 0.5, 0.5, 0.5, 0.0)
              entity.world.playSound(entity.location, Sound.ENTITY_FIREWORK_ROCKET_TWINKLE, 1f, 1f)
              entity.world.playSound(entity.location, Sound.BLOCK_BEACON_ACTIVATE, 0.8f, 1.2f)

              cancel()
            }
          }
        }
        .runTaskTimer(this, 0L, 1L)
  }

  // --- 死亡ペット一覧 ---
  private fun handleDeadPetsList(player: Player) {
    val deadPets = PetDataManager.getDeadPets(player.uniqueId)

    if (deadPets.isEmpty()) {
      player.sendMessage(Component.text("死亡したペットはいません。", GRAY))
      return
    }

    player.sendMessage(Component.text("=== 死亡したペット一覧 ===", GOLD))
    player.sendMessage(Component.text("復活コスト: ${BigWolfConfig.reviveCost}pt", YELLOW))

    for (pet in deadPets.sortedBy { it.petNumber }) {
      val variantStr = pet.variant?.let { " ($it)" } ?: ""
      val nameStr = pet.customName?.let { " 「$it」" } ?: ""
      val deathTime = pet.deathData?.deathTime?.take(10) ?: "不明"
      player.sendMessage(
          Component.text("#${pet.petNumber} ${pet.type}$variantStr$nameStr - $deathTime 死亡", RED))
    }

    player.sendMessage(Component.text("/bigwolf revive <番号> で復活", GRAY))
  }

  // --- ペット履歴 ---
  private fun handlePetHistory(player: Player, args: Array<out String>) {
    val targetUuid =
        if (args.size >= 2 && player.isOp) {
          val targetName = args[1]
          Bukkit.getPlayer(targetName)?.uniqueId ?: Bukkit.getOfflinePlayer(targetName).uniqueId
        } else {
          player.uniqueId
        }

    val pets = PetDataManager.getAllPets(targetUuid)

    if (pets.isEmpty()) {
      player.sendMessage(Component.text("ペットの履歴がありません。", GRAY))
      return
    }

    val targetName = Bukkit.getOfflinePlayer(targetUuid).name ?: "Unknown"
    player.sendMessage(Component.text("=== ${targetName} のペット履歴 ===", GOLD))

    for (pet in pets.sortedBy { it.petNumber }) {
      val variantStr = pet.variant?.let { " ($it)" } ?: ""
      val nameStr = pet.customName?.let { " 「$it」" } ?: ""
      val statusColor =
          when (pet.status) {
            PetStatus.ALIVE -> GREEN
            PetStatus.DEAD -> RED
            PetStatus.STORED -> YELLOW
          }
      val statusStr =
          when (pet.status) {
            PetStatus.ALIVE -> "生存"
            PetStatus.DEAD -> "死亡"
            PetStatus.STORED -> "収納中"
          }
      player.sendMessage(
          Component.text("#${pet.petNumber} ${pet.type}$variantStr$nameStr ", WHITE)
              .append(Component.text("[$statusStr]", statusColor)))
    }
  }

  // --- ペットの最終位置を確認 ---
  private fun handleLocatePet(player: Player, args: Array<out String>) {
    if (args.size < 2) {
      player.sendMessage(Component.text("使い方: /bigwolf locate <ペット番号>", RED))
      return
    }

    val petNumber = args[1].toIntOrNull()
    if (petNumber == null) {
      player.sendMessage(Component.text("ペット番号は数字で指定してください。", RED))
      return
    }

    val pets = PetDataManager.getAllPets(player.uniqueId)
    val pet = pets.find { it.petNumber == petNumber }

    if (pet == null) {
      player.sendMessage(Component.text("番号 $petNumber のペットは見つかりません。", RED))
      return
    }

    val loc = pet.lastLocation
    if (loc == null) {
      player.sendMessage(Component.text("ペット #${petNumber} の位置情報がありません。", RED))
      return
    }

    val variantStr = pet.variant?.let { " ($it)" } ?: ""
    val nameStr = pet.customName?.let { " 「$it」" } ?: ""
    player.sendMessage(
        Component.text("=== ペット #${petNumber} ${pet.type}$variantStr$nameStr ===", GOLD))
    player.sendMessage(
        Component.text(
            "最終位置: ${loc.world} (${loc.x.toInt()}, ${loc.y.toInt()}, ${loc.z.toInt()})", YELLOW))
    player.sendMessage(Component.text("ステータス: ${pet.status}", GRAY))
  }

  override fun onTabComplete(
      sender: CommandSender,
      command: Command,
      label: String,
      args: Array<out String>,
  ): MutableList<String>? {
    val a0 = args.getOrNull(0)?.lowercase() ?: ""
    val a1 = args.getOrNull(1)?.lowercase() ?: ""
    val a2 = args.getOrNull(2)?.lowercase() ?: ""
    val a4 = args.getOrNull(4)?.lowercase() ?: ""

    val result: List<String> =
        when (args.size) {
          1 -> {
            val base =
                PetRegistry.officialPets.map { it.name.lowercase() } +
                    listOf("storeall", "version", "revive", "dead", "history", "locate")
            val op =
                if (sender.isOp)
                    listOf(
                        "item",
                        "toy",
                        "food",
                        "skillbook",
                        "exp",
                        "shop",
                        "shopremove",
                        "shopremoveall",
                        "reload",
                        "force_store",
                        "force_storeall")
                else emptyList()
            (base + op).filter { it.startsWith(a0) }
          }

          2 -> {
            when (a0) {
              "item" -> {
                if (!sender.isOp) emptyList()
                else {
                  val suggestions =
                      listOf(
                          "food",
                          "brush",
                          "treat",
                          "toys",
                          "skillbook",
                          "skillbook1",
                          "skillbook2",
                          "skillbook3",
                          "all")
                  suggestions.filter { it.startsWith(a1) }
                }
              }

              "force_storeall" -> {
                if (!sender.isOp) emptyList()
                else
                    Bukkit.getOnlinePlayers()
                        .map { it.name }
                        .filter { it.lowercase().startsWith(a1) }
              }

              "exp" -> {
                if (!sender.isOp) emptyList()
                else
                    EntityType.entries
                        .filter { it.isSpawnable && it.isAlive }
                        .map { it.name.lowercase() }
                        .filter { it.startsWith(a1) }
              }

              "shop" -> {
                if (!sender.isOp) emptyList()
                else
                    EntityType.entries
                        .filter { it.isSpawnable && it.isAlive }
                        .map { it.name.lowercase() }
                        .filter { it.startsWith(a1) }
              }

              else -> {
                val type = runCatching { EntityType.valueOf(a0.uppercase()) }.getOrNull()
                if (type != null && PetRegistry.isOfficial(type)) {
                  VariantHandler.getVariantNames(type)
                      .map { it.lowercase() }
                      .filter { it.startsWith(a1) }
                } else emptyList()
              }
            }
          }

          3 -> {
            if (a0 == "exp" || a0 == "shop") {
              if (a0 == "shop" && !sender.isOp) {
                emptyList()
              } else {
                val type = runCatching { EntityType.valueOf(args[1].uppercase()) }.getOrNull()
                if (type != null) {
                  VariantHandler.getVariantNames(type)
                      .map { it.lowercase() }
                      .filter { it.startsWith(a2) }
                } else emptyList()
              }
            } else emptyList()
          }

          // /bigwolf shop <type> <variant> <cost> <yawDeg>
          5 -> {
            if (a0 == "shop") {
              if (!sender.isOp) {
                emptyList()
              } else {
                val opts =
                    listOf(
                        "0",
                        "15",
                        "30",
                        "45",
                        "60",
                        "75",
                        "90",
                        "105",
                        "120",
                        "135",
                        "150",
                        "165",
                        "180",
                        "195",
                        "210",
                        "225",
                        "240",
                        "255",
                        "270",
                        "285",
                        "300",
                        "315",
                        "330",
                        "345")
                opts.filter { it.startsWith(a4) }
              }
            } else emptyList()
          }

          else -> emptyList()
        }

    return result.toMutableList()
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

  @EventHandler
  fun onEntityDismount(event: EntityDismountEvent) {
    val entity = event.dismounted as? LivingEntity ?: return
    if (entity.ownerId == null) return

    val spec = PetRegistry.get(entity.type)
    if (spec.category == PetCategory.FLYING) {
      object : BukkitRunnable() {
            override fun run() {
              if (!entity.isValid || entity.isDead || !entity.passengers.isEmpty()) {
                cancel()
                return
              }
              if (entity.isOnGround) {
                cancel()
                return
              }
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

    // --- 新規: ブラシ ---
    if (isOwner && isPetBrush(player.inventory.itemInMainHand)) {
      useBrush(player, entity)
      return
    }
    // --- 新規: おやつ ---
    if (isOwner && isPetTreat(player.inventory.itemInMainHand)) {
      giveTreat(player, entity)
      return
    }

    // スキル強化アイテム
    if (isOwner) {
      val main = player.inventory.itemInMainHand
      val unlockLevel = getUnlockItemLevel(main)
      if (unlockLevel > 0) {
        handleSkillUnlock(player, entity, main, unlockLevel)
        event.isCancelled = true
        return
      }
    }

    if (isOwner) {

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
      player.sendMessage(Component.text("このペットには飼い主しか乗れません。", RED))
    }
  }

  private fun handleSkillUnlock(
      player: Player,
      entity: LivingEntity,
      item: ItemStack,
      itemLevel: Int
  ) {
    val currentUnlocked = entity.skillUnlockedLevel

    if (itemLevel <= currentUnlocked) {
      player.sendMessage(Component.text("このスキル（またはそれ以上）は既に解放されています！", RED))
      return
    }

    if (itemLevel > currentUnlocked + 1) {
      player.sendMessage(Component.text("前の段階のスキルを先に解放する必要があります！", RED))
      return
    }

    // ポイントコストを取得
    val cost = BigWolfConfig.getSkillBookCost(itemLevel)

    // ポイント残高チェックと消費
    if (cost > 0) {
      if (!consumeTokens(player, cost)) {
        player.playSound(player.location, Sound.ENTITY_VILLAGER_NO, 1f, 1f)
        return
      }
    }

    // 解放成功
    entity.skillUnlockedLevel = itemLevel
    entity.skillType = itemLevel
    item.amount -= 1

    entity.world.playSound(entity.location, Sound.UI_TOAST_CHALLENGE_COMPLETE, 1f, 1.2f)
    entity.world.spawnParticle(Particle.EXPLOSION_EMITTER, entity.location.add(0.0, 1.0, 0.0), 1)
    player.sendMessage(Component.text("おめでとうございます！新しいスキルがアンロックされました！ (-${cost}pt)", GREEN))
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
      if (meta.persistentDataContainer.has(BigWolfKeys.STORED_FLAG, PersistentDataType.BYTE)) {
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
      // ★ おもちゃで遊んだ回数（投げたタイミングでカウント）
      pet.statToys = pet.statToys + 1

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
      // ★ おもちゃで遊んだ回数
      pet.statToys = pet.statToys + 1

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
    if (skill == 0) return

    if (skill == 3) {
      val spec = PetRegistry.get(vehicle.type)

      // ★ 飛行または水生ならトグル式
      if (spec.category == PetCategory.FLYING || spec.category == PetCategory.WATER) {
        val newState = !vehicle.isHovering
        vehicle.isHovering = newState
        val status = if (newState) "ON" else "OFF"
        val color = if (newState) GREEN else RED

        val skillName = if (spec.category == PetCategory.FLYING) "ホバリング" else "水面走行"
        player.sendActionBar(Component.text("$skillName: $status", color))
        vehicle.world.playSound(vehicle.location, Sound.UI_BUTTON_CLICK, 1f, 2f)
      }
      return
    }

    val lastUsed = skillCooldowns.getOrDefault(player.uniqueId, 0L)
    if (now - lastUsed < BigWolfConfig.SKILL_COOLDOWN_MS) {
      val remain = "%.1f".format((BigWolfConfig.SKILL_COOLDOWN_MS - (now - lastUsed)) / 1000.0)
      player.sendActionBar(Component.text("スキル準備中... 残り $remain 秒", RED))
      return
    }

    skillCooldowns[player.uniqueId] = now
    when (skill) {
      1 -> activateRoarSkill(player, vehicle)
      2 -> activateDashSkill(player, vehicle)
    }
  }

  @EventHandler
  fun onInventoryClick(event: InventoryClickEvent) {
    val player = event.whoClicked as? Player ?: return
    val item = event.currentItem ?: return

    // ★ 購入GUI
    if (event.view.title() == shopGuiTitle) {
      event.isCancelled = true
      val ctx = openedShopGuis[event.view.topInventory] ?: return player.closeInventory()

      when (item.type) {
        Material.EMERALD_BLOCK -> {
          // ペット数制限チェック
          if (countActivePets(player) >= BigWolfConfig.MAX_PET_COUNT) {
            player.closeInventory()
            player.sendMessage(
                Component.text("ペットは同時に${BigWolfConfig.MAX_PET_COUNT}匹までしか召喚できません！", RED))
            player.playSound(player.location, Sound.ENTITY_VILLAGER_NO, 1f, 1f)
            return
          }

          // ポイント残高チェックと消費
          if (!consumeTokens(player, ctx.cost)) {
            player.closeInventory()
            player.playSound(player.location, Sound.ENTITY_VILLAGER_NO, 1f, 1f)
            return
          }

          player.closeInventory()

          // ★ 直接ペットをスポーン（購入券システム廃止）
          val petId = spawnAndMountEntity(player, ctx.type, ctx.variant)

          // ★ 購入履歴を記録
          if (petId != null) {
            PetDataManager.recordPurchase(
                ownerUuid = player.uniqueId,
                petId = petId,
                type = ctx.type,
                variant = ctx.variant,
                customName = null)
          }

          player.playSound(player.location, Sound.ENTITY_PLAYER_LEVELUP, 1f, 1.2f)
          val label =
              if (ctx.variant != null) "${ctx.type.name} (${ctx.variant})" else ctx.type.name
          player.sendMessage(Component.text("購入しました: $label (-${ctx.cost}pt)", GREEN))
        }

        Material.BARRIER -> {
          player.closeInventory()
          player.playSound(player.location, Sound.UI_BUTTON_CLICK, 1f, 1f)
          player.sendMessage(Component.text("購入をキャンセルしました。", RED))
        }

        else -> {}
      }
      return
    }

    // ★ 既存のペット情報GUI
    if (event.view.title() != guiTitle) return
    event.isCancelled = true

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
        val unlocked = entity.skillUnlockedLevel
        if (unlocked == 0) {
          player.sendMessage(Component.text("スキルが一つも解放されていません。強化アイテムを与えてください。", RED))
          return
        }
        var nextSkill = entity.skillType + 1
        if (nextSkill > unlocked) nextSkill = 0
        entity.skillType = nextSkill
        player.playSound(player.location, Sound.UI_BUTTON_CLICK, 1f, 1f)
        openInfoGui(player, entity)
      }

      Material.BARRIER -> {
        player.sendMessage(Component.text("スキルが未解放です。スキル強化の本を与えてください。", RED))
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
    openedShopGuis.remove(event.inventory)
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
              })
    } else {
      player.sendMessage(Component.text("変更をキャンセルしました。", RED))
    }
  }

  @EventHandler
  fun onPlayerQuit(event: PlayerQuitEvent) {
    val player = event.player

    renamingPlayers.remove(player.uniqueId)
    mountCooldowns.remove(player.uniqueId)
    skillCooldowns.remove(player.uniqueId)
    dashEndTimes.remove(player.uniqueId)
    dropCooldowns.remove(player.uniqueId)
    // shopremoveall確認状態も破棄
    pendingRemoveAllConfirm.remove(player.uniqueId)

    // ★ ペットの位置を記録（見失い対策）
    val vehicle = player.vehicle as? LivingEntity
    if (vehicle != null) {
      val petId = vehicle.petId
      val ownerId = vehicle.ownerId
      if (petId != null && ownerId != null) {
        val ownerUuid = runCatching { UUID.fromString(ownerId) }.getOrNull()
        if (ownerUuid != null) {
          PetDataManager.updateLastLocation(ownerUuid, petId, vehicle.location)
        }
      }
    }

    // 所有する全ペットの位置も更新
    val playerUuidStr = player.uniqueId.toString()
    for (world in Bukkit.getWorlds()) {
      for (entity in world.livingEntities) {
        if (entity.ownerId == playerUuidStr) {
          val petId = entity.petId ?: continue
          PetDataManager.updateLastLocation(player.uniqueId, petId, entity.location)
        }
      }
    }
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

  private fun countActivePets(player: Player): Int {
    var count = 0
    val targetId = player.uniqueId.toString()
    for (world in Bukkit.getWorlds()) {
      for (entity in world.livingEntities) {
        if (entity.ownerId == targetId) {
          count++
        }
      }
    }
    return count
  }

  private fun spawnAndMountEntity(player: Player, type: EntityType, variantName: String?): String? {
    if (countActivePets(player) >= BigWolfConfig.MAX_PET_COUNT) {
      player.sendMessage(Component.text("ペットは同時に${BigWolfConfig.MAX_PET_COUNT}匹までしか召喚できません！", RED))
      return null
    }

    val spec = PetRegistry.get(type)
    val entity = player.world.spawnEntity(player.location.add(0.0, 1.0, 0.0), type) as? LivingEntity

    if (entity == null || !entity.isValid) {
      player.sendMessage(Component.text("この場所では召喚できません（保護されています）。", RED))
      return null
    }

    setupPetEntity(entity, spec, player)

    if (variantName != null) {
      VariantHandler.applyVariant(entity, variantName)
    }

    val petId = UUID.randomUUID().toString()
    entity.ownerId = player.uniqueId.toString()
    entity.petId = petId
    entity.foodLevel = 0
    entity.isSilentMode = false
    entity.particleType = 0
    entity.skillUnlockedLevel = 0
    entity.skillType = 0
    entity.isHovering = false

    // ★ 遊んだ記録：新規召喚はゼロ初期化
    entity.statDistance = 0.0
    entity.statJumps = 0
    entity.statToys = 0

    updateStats(entity, 0, spec)

    Bukkit.getScheduler()
        .runTaskLater(
            this,
            Runnable {
              if (entity.isValid) {
                entity.addPassenger(player)
                mountCooldowns[player.uniqueId] = System.currentTimeMillis()
                startControlTask(player, entity)
              }
            },
            2L)

    player.sendMessage(Component.text("巨大な ${type.name} を召喚しました！", AQUA))
    return petId
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
                dropped.velocity = Vector(0, 0, 0)

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

  private val KEY_STORED_STAT_BRUSHES = NamespacedKey(this, "stored_stat_brushes")
  private val KEY_STORED_STAT_TREATS = NamespacedKey(this, "stored_stat_treats")

  private fun createStoredPetItem(entity: LivingEntity): ItemStack {
    val matName = "${entity.type.name}_SPAWN_EGG"
    val mat = Material.getMaterial(matName) ?: Material.PIG_SPAWN_EGG
    val item = ItemStack(mat)
    val meta = item.itemMeta

    val pdc = meta.persistentDataContainer
    pdc.set(BigWolfKeys.STORED_FLAG, PersistentDataType.BYTE, 1)
    pdc.set(BigWolfKeys.STORED_TYPE, PersistentDataType.STRING, entity.type.name)

    val pid = entity.petId ?: UUID.randomUUID().toString()
    pdc.set(BigWolfKeys.STORED_ID, PersistentDataType.STRING, pid)

    // ★ オーナーUUIDを保存（譲渡防止）
    val ownerId = entity.ownerId
    if (ownerId != null) {
      pdc.set(BigWolfKeys.STORED_OWNER, PersistentDataType.STRING, ownerId)
    }

    val currentName = entity.customName() ?: Component.text(entity.type.name)
    val nameStr = LegacyComponentSerializer.legacyAmpersand().serialize(currentName)
    pdc.set(BigWolfKeys.STORED_NAME, PersistentDataType.STRING, nameStr)

    pdc.set(BigWolfKeys.FOOD, PersistentDataType.INTEGER, entity.foodLevel)
    pdc.set(BigWolfKeys.SILENT, PersistentDataType.BYTE, if (entity.isSilentMode) 1 else 0)
    pdc.set(BigWolfKeys.PARTICLE, PersistentDataType.INTEGER, entity.particleType)
    pdc.set(BigWolfKeys.STORED_SKILL, PersistentDataType.INTEGER, entity.skillType)
    pdc.set(BigWolfKeys.STORED_UNLOCKED, PersistentDataType.INTEGER, entity.skillUnlockedLevel)
    pdc.set(BigWolfKeys.STORED_HOVER, PersistentDataType.BYTE, if (entity.isHovering) 1 else 0)

    // ★ 遊んだ記録を収納アイテムに保存
    pdc.set(BigWolfKeys.STORED_STAT_DISTANCE, PersistentDataType.DOUBLE, entity.statDistance)
    pdc.set(BigWolfKeys.STORED_STAT_JUMPS, PersistentDataType.INTEGER, entity.statJumps)
    pdc.set(BigWolfKeys.STORED_STAT_TOYS, PersistentDataType.INTEGER, entity.statToys)
    pdc.set(KEY_STORED_STAT_BRUSHES, PersistentDataType.INTEGER, entity.statBrushes)
    pdc.set(KEY_STORED_STAT_TREATS, PersistentDataType.INTEGER, entity.statTreats)

    val variantName = VariantHandler.getVariantNameFromEntity(entity)
    if (variantName != null) {
      pdc.set(BigWolfKeys.STORED_VARIANT, PersistentDataType.STRING, variantName)
    }

    // オーナー名を取得してLoreに表示
    val ownerName =
        if (ownerId != null) {
          Bukkit.getOfflinePlayer(UUID.fromString(ownerId)).name ?: "Unknown"
        } else {
          "Unknown"
        }

    meta.displayName(Component.text("収納された: ", GOLD).append(currentName))
    meta.lore(
        listOf(
            Component.text("右クリックで解放", GRAY),
            Component.text("オーナー: $ownerName", AQUA),
            Component.text("ID: ${pid.take(8)}...", DARK_GRAY),
            Component.text("記録:", DARK_AQUA),
            Component.text("  距離: ${"%.1f".format(entity.statDistance)} m", GRAY),
            Component.text("  ジャンプ: ${entity.statJumps} 回", GRAY),
            Component.text("  おもちゃ: ${entity.statToys} 回", GRAY),
            Component.text("  なでた: ${entity.statBrushes} 回", GRAY),
            Component.text("  おやつ: ${entity.statTreats} 回", GRAY),
        ))
    meta.addEnchant(Enchantment.UNBREAKING, 1, true)
    meta.addItemFlags(ItemFlag.HIDE_ENCHANTS)
    item.itemMeta = meta

    // ★ PetDataManagerに収納状態を記録
    if (ownerId != null) {
      val ownerUuid = runCatching { UUID.fromString(ownerId) }.getOrNull()
      if (ownerUuid != null) {
        PetDataManager.markAsStored(ownerUuid, pid, entity)
      }
    }

    return item
  }

  private fun storePetToItem(player: Player, entity: LivingEntity) {
    if (player.inventory.firstEmpty() == -1)
        return player.sendMessage(Component.text("インベントリがいっぱいです！", RED))

    val item = createStoredPetItem(entity)

    player.inventory.addItem(item)
    entity.remove()
    player.playSound(player.location, Sound.ENTITY_ENDERMAN_TELEPORT, 1f, 1f)
    player.sendMessage(Component.text("ペットをアイテムに収納しました！", GREEN))
  }

  private fun storeAllPets(player: Player) {
    val targetId = player.uniqueId.toString()
    var count = 0
    val itemsToGive = mutableListOf<ItemStack>()

    for (world in Bukkit.getWorlds()) {
      val pets = world.livingEntities.filter { it.ownerId == targetId }
      for (entity in pets) {
        val item = createStoredPetItem(entity)
        itemsToGive.add(item)
        entity.world.spawnParticle(Particle.POOF, entity.location, 10, 0.5, 0.5, 0.5, 0.0)
        entity.remove()
        count++
      }
    }

    if (count == 0) {
      player.sendMessage(Component.text("収納するペットがいません。", RED))
      return
    }

    val leftovers = player.inventory.addItem(*itemsToGive.toTypedArray())
    leftovers.values.forEach { item -> player.world.dropItem(player.location, item) }

    player.playSound(player.location, Sound.ENTITY_ENDERMAN_TELEPORT, 1f, 1f)
    player.sendMessage(Component.text("$count 匹のペットを収納しました！", GREEN))
    if (leftovers.isNotEmpty()) {
      player.sendMessage(Component.text("インベントリに入り切らなかった分を足元にドロップしました。", YELLOW))
    }
  }

  private fun restorePetFromItem(player: Player, item: ItemStack, loc: Location) {
    if (countActivePets(player) >= BigWolfConfig.MAX_PET_COUNT) {
      player.sendMessage(Component.text("ペットは同時に${BigWolfConfig.MAX_PET_COUNT}匹までしか召喚できません！", RED))
      return
    }

    val meta = item.itemMeta
    val pdc = meta.persistentDataContainer

    // ★ オーナーチェック（譲渡防止）
    val storedOwner = pdc.get(BigWolfKeys.STORED_OWNER, PersistentDataType.STRING)
    if (storedOwner != null && storedOwner != player.uniqueId.toString()) {
      val ownerName =
          runCatching { Bukkit.getOfflinePlayer(UUID.fromString(storedOwner)).name }.getOrNull()
              ?: "Unknown"
      player.sendMessage(Component.text("このペットはあなたのものではありません！(オーナー: $ownerName)", RED))
      return
    }

    val storedId = pdc.get(BigWolfKeys.STORED_ID, PersistentDataType.STRING)
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

    val typeStr = pdc.get(BigWolfKeys.STORED_TYPE, PersistentDataType.STRING) ?: "WOLF"
    val type = runCatching { EntityType.valueOf(typeStr) }.getOrNull() ?: EntityType.WOLF
    val spec = PetRegistry.get(type)

    val entity = player.world.spawnEntity(loc, type) as? LivingEntity

    if (entity == null || !entity.isValid) {
      player.sendMessage(Component.text("この場所ではペットを解放できません（保護されています）。", RED))
      return
    }

    setupPetEntity(entity, spec, player)

    val nameStr = pdc.get(BigWolfKeys.STORED_NAME, PersistentDataType.STRING)
    if (nameStr != null) {
      entity.customName(LegacyComponentSerializer.legacyAmpersand().deserialize(nameStr))
      entity.isCustomNameVisible = true
    }

    entity.ownerId = player.uniqueId.toString()
    entity.petId = storedId ?: UUID.randomUUID().toString()

    val food = pdc.get(BigWolfKeys.FOOD, PersistentDataType.INTEGER) ?: 0
    entity.foodLevel = food
    entity.isSilentMode = (pdc.get(BigWolfKeys.SILENT, PersistentDataType.BYTE) ?: 0).toInt() == 1
    entity.particleType = pdc.get(BigWolfKeys.PARTICLE, PersistentDataType.INTEGER) ?: 0
    entity.skillUnlockedLevel =
        pdc.get(BigWolfKeys.STORED_UNLOCKED, PersistentDataType.INTEGER) ?: 0
    entity.skillType = pdc.get(BigWolfKeys.STORED_SKILL, PersistentDataType.INTEGER) ?: 0
    entity.isHovering =
        (pdc.get(BigWolfKeys.STORED_HOVER, PersistentDataType.BYTE) ?: 0).toInt() == 1

    // ★ 遊んだ記録を復元
    entity.statDistance =
        pdc.get(BigWolfKeys.STORED_STAT_DISTANCE, PersistentDataType.DOUBLE) ?: 0.0
    entity.statJumps = pdc.get(BigWolfKeys.STORED_STAT_JUMPS, PersistentDataType.INTEGER) ?: 0
    entity.statToys = pdc.get(BigWolfKeys.STORED_STAT_TOYS, PersistentDataType.INTEGER) ?: 0
    entity.statBrushes = pdc.get(KEY_STORED_STAT_BRUSHES, PersistentDataType.INTEGER) ?: 0
    entity.statTreats = pdc.get(KEY_STORED_STAT_TREATS, PersistentDataType.INTEGER) ?: 0

    updateStats(entity, food, spec)

    val vStr = pdc.get(BigWolfKeys.STORED_VARIANT, PersistentDataType.STRING)
    if (vStr != null) {
      VariantHandler.applyVariant(entity, vStr)
    }

    // ★ PetDataManagerに解放状態を記録
    PetDataManager.markAsAlive(player.uniqueId, entity.petId!!)

    item.amount -= 1
    player.sendMessage(Component.text("ペットを解放しました！", GREEN))
    player.playSound(loc, Sound.ENTITY_ITEM_PICKUP, 1f, 1f)
  }

  private fun startControlTask(player: Player, entity: LivingEntity) {
    val spec = PetRegistry.get(entity.type)

    object : BukkitRunnable() {
          var lastPos = entity.location.toVector()
          var rideDistance = 0.0
          var ticks = 0

          // ジャンプの「押しっぱなし」を連打カウントしないため
          var lastJumpPressed = false

          override fun run() {
            if (!entity.isValid || !player.isOnline || player !in entity.passengers) {
              if (entity.isValid) entity.isSilent = false

              // ★ 乗車中の距離を永続値へ反映（降りる/切断などで保持）
              if (rideDistance > 0.0 && entity.isValid) {
                entity.statDistance = entity.statDistance + rideDistance
              }

              cancel()
              return
            }
            if (entity is Sittable) entity.isSitting = false

            val level = entity.foodLevel
            val progress = level.toDouble() / BigWolfConfig.maxFoodLevel

            var speed = spec.baseSpeed + (spec.maxSpeed - spec.baseSpeed) * progress
            entity.isSilent = entity.isSilentMode

            val inWater = entity.isInWater

            when (spec.category) {
              PetCategory.LAND -> {
                if (inWater && entity.skillType != 3) speed *= 0.3
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

            // ★ 水生MOBの挙動制御
            if (spec.category == PetCategory.WATER && inWater) {
              if (entity.skillType == 3 && entity.isHovering) {
                // --- Skill 3: 水面高速走行モード ---
                // 水面または少し下にいる場合、強制的に浮かせる
                val loc = entity.location
                // 足元が水、または少し下が水なら「水上」とみなす
                val isSurface =
                    loc.block.type == Material.WATER ||
                        loc.clone().subtract(0.0, 0.5, 0.0).block.type == Material.WATER

                if (isSurface) {
                  // 水面付近なら加速＆浮力維持
                  speed *= 2.5 // 通常の2.5倍速
                  if (velocity.lengthSquared() > 0) {
                    velocity.normalize().multiply(speed)
                    velocity.y = 0.05 // 少しだけ浮かせて水面を滑らせる
                    // 水しぶきエフェクト
                    entity.world.spawnParticle(
                        Particle.SPLASH, entity.location, 5, 0.5, 0.0, 0.5, 0.0)
                  }
                } else {
                  // 深い場所にいるなら通常水泳より少し速い程度で浮上させる
                  if (input.isForward || input.isBackward) {
                    velocity.normalize().multiply(speed * 1.5)
                    velocity.y = 0.2 // 強制浮上
                  }
                }
              } else {
                // --- 通常水泳モード ---
                if (input.isForward || input.isBackward) {
                  // カメラの向きに進む（潜行可能）
                  velocity.y = player.location.direction.y * speed
                }
              }
            }

            if (isDashing) {
              spawnParticles(entity)
            } else {
              if (velocity.lengthSquared() > 0) {
                // 水生スキルの場合は上でvelocityセット済みなので、それ以外の場合に適用
                val isWaterSkillActive =
                    (spec.category == PetCategory.WATER &&
                        inWater &&
                        entity.skillType == 3 &&
                        entity.isHovering)

                if (!isWaterSkillActive) {
                  velocity.normalize().multiply(speed)
                  if (spec.category != PetCategory.WATER || !inWater) {
                    velocity.y = entity.velocity.y
                  }
                }

                if (inWater && input.isJump && spec.category != PetCategory.WATER) {
                  velocity.y = 0.4
                  // ★ 水中ジャンプ（単発カウント）
                  if (!lastJumpPressed) {
                    entity.statJumps = entity.statJumps + 1
                  }
                }
                entity.velocity = velocity
                spawnParticles(entity)
              }
            }

            // ★ ジャンプ押下の立ち上がり検知（押しっぱなし除外）
            val jumpPressedNow = input.isJump

            if (spec.category == PetCategory.FLYING) {
              if (input.isJump) {
                val vel = entity.velocity
                vel.y = 0.4
                entity.velocity = vel
                if (entity.ticksLived % 5 == 0) {
                  entity.world.spawnParticle(
                      Particle.CLOUD, entity.location, 1, 0.0, 0.0, 0.0, 0.01)
                }
                // ★ 飛行ジャンプ（単発カウント）
                if (!lastJumpPressed) {
                  entity.statJumps = entity.statJumps + 1
                }
              } else if (!entity.isOnGround) {
                if (entity.skillType == 3 && entity.isHovering) {
                  val vel = entity.velocity
                  vel.y = 0.0
                  entity.velocity = vel
                  if (entity.ticksLived % 10 == 0) {
                    entity.world.spawnParticle(
                        Particle.END_ROD, entity.location, 1, 0.1, 0.0, 0.1, 0.0)
                  }
                } else {
                  val vel = entity.velocity
                  vel.y = -0.15
                  entity.velocity = vel
                }
              }
            } else {
              if (input.isJump && entity.isOnGround && !inWater) {
                entity.velocity = entity.velocity.setY(spec.jumpPower)
                // ★ 地上ジャンプ（単発カウント）
                if (!lastJumpPressed) {
                  entity.statJumps = entity.statJumps + 1
                }
              }
            }

            lastJumpPressed = jumpPressedNow

            entity.setRotation(player.location.yaw, 0f)

            // ★ 落下などで1tickの移動量が大きくても、いきなり「0に見える」挙動になりにくいように計測を改善
            val curr = entity.location.toVector()
            val delta = curr.distance(lastPos)
            if (delta.isFinite()) {
              // teleport級だけ無視、それ以外は上限を設けて加算（落下時も一定量は距離として積む）
              if (delta < 100.0) {
                rideDistance += delta.coerceAtMost(8.0)
              }
            }
            lastPos = curr

            ticks++

            // ★ 長時間乗りっぱなしでも落ちにくいよう、定期的に永続値へ反映
            if (ticks % 200 == 0 && rideDistance > 0.0) { // 約10秒ごと
              entity.statDistance = entity.statDistance + rideDistance
              rideDistance = 0.0
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
    // ★ 音量を半分に
    entity.world.playSound(entity.location, Sound.ENTITY_ENDER_DRAGON_GROWL, 0.75f, 0.8f)
    entity.world.playSound(entity.location, Sound.ENTITY_GENERIC_EXPLODE, 0.25f, 1.2f)

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
        0, item(Material.NAME_TAG, "名前: ", AQUA, nameComp, Component.text("クリックで変更", GREEN)))

    val vName = VariantHandler.getVariantNameFromEntity(entity)
    val typeName = if (vName != null) "${entity.type.name} ($vName)" else entity.type.name
    val eggMat = Material.getMaterial("${entity.type.name}_SPAWN_EGG") ?: Material.PIG_SPAWN_EGG
    inv.setItem(
        1, item(eggMat, "種類: $typeName", YELLOW, Component.text("カテゴリ: ${spec.category}", GRAY)))

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
            Component.text("クリックで切替", GRAY)))

    val currentSkill = entity.skillType
    val unlocked = entity.skillUnlockedLevel
    val (skName, skColor, skDesc) =
        when (currentSkill) {
          1 -> Triple("咆哮 (Roar)", GOLD, "周囲を吹き飛ばす")
          2 -> Triple("突進 (Dash)", AQUA, "前方に高速移動")
          3 ->
              Triple(
                  "特殊 (Special)",
                  LIGHT_PURPLE,
                  if (spec.category == PetCategory.FLYING) "ホバリング"
                  else if (spec.category == PetCategory.WATER) "水面走行" else "高速水泳")
          else -> Triple("なし (NONE)", GRAY, "スキル未セット")
        }
    val skillIcon = if (unlocked == 0) Material.BARRIER else Material.IRON_SWORD
    inv.setItem(
        3,
        item(
            skillIcon,
            "スキル設定",
            skColor,
            Component.text("現在: $skName", WHITE),
            Component.text("解放状況: $unlocked / 3", DARK_GRAY),
            Component.text(skDesc, YELLOW),
            if (unlocked > 0) Component.text("クリックで切り替え", GREEN)
            else Component.text("強化アイテムで解放してください", RED)))

    inv.setItem(
        4,
        item(
            Material.COOKED_BEEF,
            "ステータス",
            GOLD,
            Component.text("フード: $level / ${BigWolfConfig.maxFoodLevel}", GRAY),
            Component.text("育成コスト: ${BigWolfConfig.foodPointCost} pt", DARK_AQUA)))

    // ★ 遊んだ記録（GUIでのみ確認）
    inv.setItem(
        5,
        item(
            Material.PAPER,
            "遊んだ記録",
            AQUA,
            Component.text("距離: ${"%.1f".format(entity.statDistance)} m", GRAY),
            Component.text("ジャンプ: ${entity.statJumps} 回", GRAY),
            Component.text("おもちゃ: ${entity.statToys} 回", GRAY),
            Component.text("なでた: ${entity.statBrushes} 回", GRAY),
            Component.text("おやつ: ${entity.statTreats} 回", GRAY),
            Component.text("収納/復元でも保持されます", DARK_GRAY)))

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
            Component.text("クリックで変更", GREEN)))

    inv.setItem(
        7, item(Material.CHEST, "ペットをしまう", LIGHT_PURPLE, Component.text("アイテム化して持ち運ぶ", GRAY)))

    val hp =
        "${entity.health.toInt()} / ${entity.getAttribute(Attribute.MAX_HEALTH)?.value?.toInt()}"
    inv.setItem(8, item(Material.RED_DYE, "体力", RED, Component.text(hp, WHITE)))

    player.openInventory(inv)
  }

  private fun giveFood(player: Player, entity: LivingEntity) {
    val level = entity.foodLevel
    if (level >= BigWolfConfig.maxFoodLevel)
        return player.sendMessage(Component.text("既に最大レベルです！", RED))

    // ポイント残高チェックと消費
    if (!consumeTokens(player, BigWolfConfig.foodPointCost)) {
      player.playSound(player.location, Sound.ENTITY_VILLAGER_NO, 1f, 1f)
      return
    }

    val newLevel = level + 1
    entity.foodLevel = newLevel

    val spec = PetRegistry.get(entity.type)
    updateStats(entity, newLevel, spec)

    // ★ フードアイテムは消費しない（減らさない）
    entity.world.playSound(entity.location, Sound.ENTITY_GENERIC_EAT, 1f, 1f)
    entity.world.spawnParticle(Particle.HEART, entity.location.add(0.0, 1.0, 0.0), 5, 0.5, 0.5, 0.5)
    player.sendMessage(Component.text("成長しました！ (-${BigWolfConfig.foodPointCost}pt)", GOLD))
  }

  private fun updateStats(entity: LivingEntity, level: Int, spec: PetSpec) {
    val progress = level.toDouble() / BigWolfConfig.maxFoodLevel
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

  // --- 新規: ブラシ・おやつ ---
  private fun isPetBrush(item: ItemStack): Boolean =
      item.type == Material.BRUSH &&
          PlainTextComponentSerializer.plainText()
              .serialize(item.itemMeta?.displayName() ?: Component.empty())
              .contains("ペットブラシ")

  private fun createPetBrushItem(): ItemStack =
      ItemStack(Material.BRUSH).apply {
        itemMeta =
            itemMeta.apply {
              displayName(Component.text("★ ペットブラシ", GOLD))
              lore(listOf(Component.text("右クリックでなでる", YELLOW)))
              addEnchant(Enchantment.UNBREAKING, 1, true)
              addItemFlags(ItemFlag.HIDE_ENCHANTS)
            }
      }

  private fun isPetTreat(item: ItemStack): Boolean =
      item.type == Material.COOKIE &&
          PlainTextComponentSerializer.plainText()
              .serialize(item.itemMeta?.displayName() ?: Component.empty())
              .contains("おやつ")

  private fun createPetTreatItem(): ItemStack =
      ItemStack(Material.COOKIE).apply {
        itemMeta =
            itemMeta.apply {
              displayName(Component.text("★ ペットのおやつ", GOLD))
              lore(listOf(Component.text("右クリックで与える", YELLOW)))
              addEnchant(Enchantment.UNBREAKING, 1, true)
              addItemFlags(ItemFlag.HIDE_ENCHANTS)
            }
      }

  // --- 新規: ブラシ・おやつのロジック ---
  private fun useBrush(player: Player, entity: LivingEntity) {
    entity.statBrushes = entity.statBrushes + 1
    entity.world.spawnParticle(Particle.HEART, entity.location.add(0.0, 1.0, 0.0), 6, 0.4, 0.4, 0.4)
    // 代替音を使用（ITEM_BRUSH_BRUSHING_GENERICは1.21.8では非推奨の可能性）
    entity.world.playSound(entity.location, Sound.ENTITY_CAT_PURR, 1f, 1.2f)
    player.sendMessage(Component.text("なでなで...", AQUA))
  }

  private fun giveTreat(player: Player, entity: LivingEntity) {
    val item = player.inventory.itemInMainHand
    if (item.amount > 0) {
      item.amount -= 1
    }
    entity.statTreats = entity.statTreats + 1
    // Heal the pet slightly, up to max (no kotlin.math import needed)
    val maxHealth = entity.getAttribute(Attribute.MAX_HEALTH)?.value ?: entity.health
    entity.health = (entity.health + 2.0).coerceAtMost(maxHealth)
    entity.world.spawnParticle(Particle.HEART, entity.location.add(0.0, 1.0, 0.0), 8, 0.5, 0.5, 0.5)
    entity.world.playSound(entity.location, Sound.ENTITY_GENERIC_EAT, 1f, 1.1f)
    player.sendMessage(Component.text("おやつをあげた！", GOLD))
  }

  private fun createSkillUnlockItem(level: Int) =
      ItemStack(Material.BOOK).apply {
        val (name, color) =
            when (level) {
              1 -> "咆哮の書" to GOLD
              2 -> "突進の書" to AQUA
              3 -> "極意の書" to LIGHT_PURPLE
              else -> "未知の書" to WHITE
            }
        val cost = BigWolfConfig.getSkillBookCost(level)
        itemMeta =
            itemMeta.apply {
              displayName(Component.text("【スキル強化】$name", color))
              lore(
                  listOf(
                      Component.text("ペットに右クリックで与えて", GRAY),
                      Component.text("新しいスキルをアンロック！", YELLOW),
                      Component.text("コスト: ${cost}pt", GOLD)))
              addEnchant(Enchantment.UNBREAKING, 1, true)
              addItemFlags(ItemFlag.HIDE_ENCHANTS)
            }
      }

  private fun getUnlockItemLevel(item: ItemStack): Int {
    if (item.type != Material.BOOK || !item.hasItemMeta()) return 0
    val name =
        PlainTextComponentSerializer.plainText()
            .serialize(item.itemMeta.displayName() ?: Component.empty())
    return when {
      name.contains("咆哮の書") -> 1
      name.contains("突進の書") -> 2
      name.contains("極意の書") -> 3
      else -> 0
    }
  }

  // --- Shop & Voucher Features ---

  private fun spawnShopMob(
      admin: Player,
      type: EntityType,
      variant: String?,
      cost: Int,
      yawDeg: Float?
  ) {
    val loc = admin.location.block.location.add(0.5, 0.0, 0.5)

    val ent = admin.world.spawnEntity(loc, type) as? LivingEntity ?: return
    ent.setAI(false)
    ent.isInvulnerable = true
    ent.isSilent = true
    ent.setRemoveWhenFarAway(false)

    // set facing direction (optional) in 45-degree increments
    val yaw = yawDeg ?: admin.location.yaw
    ent.setRotation(yaw, 0f)

    if (variant != null) {
      VariantHandler.applyVariant(ent, variant)
    }

    val name = buildString {
      append("【購入】")
      append(type.name)
      if (variant != null) append(" ($variant)")
      append(" - ${cost}pt")
    }
    ent.customName(Component.text(name, GOLD))
    ent.isCustomNameVisible = true

    val pdc = ent.persistentDataContainer
    pdc.set(BigWolfKeys.SHOP_FLAG, PersistentDataType.BYTE, 1)
    pdc.set(BigWolfKeys.SHOP_TYPE, PersistentDataType.STRING, type.name)
    if (variant != null) pdc.set(BigWolfKeys.SHOP_VARIANT, PersistentDataType.STRING, variant)
    pdc.set(BigWolfKeys.SHOP_COST, PersistentDataType.INTEGER, cost)
  }

  // ★ 非推奨: 購入券システムは廃止されました。既存の購入券の互換性のために残しています。
  @Deprecated("購入券システムは廃止されました。直接スポーン方式に移行してください。")
  private fun createVoucherEgg(type: EntityType, variant: String?): ItemStack {
    val eggMat = Material.getMaterial("${type.name}_SPAWN_EGG") ?: Material.PIG_SPAWN_EGG
    val item = ItemStack(eggMat)

    item.itemMeta =
        item.itemMeta.apply {
          displayName(
              Component.text(
                  "【購入券】${type.name}${if (variant != null) " ($variant)" else ""}", LIGHT_PURPLE))
          lore(listOf(Component.text("右クリックでペットを召喚", GRAY), Component.text("※購入済み", DARK_GRAY)))
          persistentDataContainer.set(BigWolfKeys.VOUCHER_FLAG, PersistentDataType.BYTE, 1)
          persistentDataContainer.set(
              BigWolfKeys.VOUCHER_TYPE, PersistentDataType.STRING, type.name)
          if (variant != null)
              persistentDataContainer.set(
                  BigWolfKeys.VOUCHER_VARIANT, PersistentDataType.STRING, variant)
          addEnchant(Enchantment.UNBREAKING, 1, true)
          addItemFlags(ItemFlag.HIDE_ENCHANTS)
        }
    return item
  }

  // ★ 非推奨: 購入券システムは廃止されました。既存の購入券の互換性のために残しています。
  @EventHandler
  fun onVoucherUse(event: PlayerInteractEvent) {
    if (event.hand != EquipmentSlot.HAND) return
    if (event.action != Action.RIGHT_CLICK_AIR && event.action != Action.RIGHT_CLICK_BLOCK) return

    val item = event.item ?: return
    val meta = item.itemMeta ?: return
    val pdc = meta.persistentDataContainer
    val isVoucher = (pdc.get(BigWolfKeys.VOUCHER_FLAG, PersistentDataType.BYTE) ?: 0).toInt() == 1
    if (!isVoucher) return

    event.isCancelled = true

    val player = event.player

    // ペット数制限チェック - アイテム消費前に確認
    if (countActivePets(player) >= BigWolfConfig.MAX_PET_COUNT) {
      player.sendMessage(Component.text("ペットは同時に${BigWolfConfig.MAX_PET_COUNT}匹までしか召喚できません！", RED))
      return
    }

    val typeStr = pdc.get(BigWolfKeys.VOUCHER_TYPE, PersistentDataType.STRING) ?: return
    val type = runCatching { EntityType.valueOf(typeStr) }.getOrNull() ?: return
    val variant = pdc.get(BigWolfKeys.VOUCHER_VARIANT, PersistentDataType.STRING)

    spawnAndMountEntity(player, type, variant)
    item.amount -= 1
  }

  private fun openShopGui(player: Player, ctx: ShopContext) {
    val inv = Bukkit.createInventory(null, 27, shopGuiTitle)
    openedShopGuis[inv] = ctx

    fun item(mat: Material, name: String, color: NamedTextColor, vararg lore: Component) =
        ItemStack(mat).apply {
          itemMeta =
              itemMeta.apply {
                displayName(Component.text(name, color))
                lore(lore.toList())
              }
        }

    val spec = PetRegistry.get(ctx.type)
    val typeLabel = if (ctx.variant != null) "${ctx.type.name} (${ctx.variant})" else ctx.type.name

    // プレイヤーの現在のポイント残高を取得
    val currentTokens = getPlayerTokens(player)
    val canAfford = currentTokens >= ctx.cost

    // 左: 商品
    val eggMat = Material.getMaterial("${ctx.type.name}_SPAWN_EGG") ?: Material.PIG_SPAWN_EGG
    inv.setItem(
        10,
        item(
            eggMat,
            "購入対象: $typeLabel",
            GOLD,
            Component.text("カテゴリ: ${spec.category}", GRAY),
            Component.text("価格: ${ctx.cost}pt", YELLOW),
            Component.text("所持: ${currentTokens}pt", if (canAfford) GREEN else RED)))

    // 中: ステータス表示
    inv.setItem(
        13,
        item(
            Material.PAPER,
            "ステータス",
            AQUA,
            Component.text("baseSpeed: ${"%.2f".format(spec.baseSpeed)}", GRAY),
            Component.text("maxSpeed : ${"%.2f".format(spec.maxSpeed)}", GRAY),
            Component.text("jumpPower: ${"%.2f".format(spec.jumpPower)}", GRAY),
            Component.text(
                "scale    : ${"%.2f".format(spec.scaleRange.start)} .. ${"%.2f".format(spec.scaleRange.endInclusive)}",
                GRAY)))

    // 右: 購入 / キャンセル
    inv.setItem(
        16,
        item(
            Material.EMERALD_BLOCK,
            "購入する",
            GREEN,
            Component.text("クリックで購入確定", GRAY),
            if (canAfford) Component.text("購入可能", GREEN) else Component.text("ポイント不足", RED)))
    inv.setItem(22, item(Material.BARRIER, "キャンセル", RED, Component.text("購入しない", GRAY)))

    player.openInventory(inv)
  }

  @EventHandler
  fun onShopMobInteract(event: PlayerInteractEntityEvent) {
    val player = event.player
    val entity = event.rightClicked as? LivingEntity ?: return

    val pdc = entity.persistentDataContainer
    val isShop = (pdc.get(BigWolfKeys.SHOP_FLAG, PersistentDataType.BYTE) ?: 0).toInt() == 1
    if (!isShop) return

    event.isCancelled = true

    val typeStr = pdc.get(BigWolfKeys.SHOP_TYPE, PersistentDataType.STRING) ?: return
    val type = runCatching { EntityType.valueOf(typeStr) }.getOrNull() ?: return
    val variant = pdc.get(BigWolfKeys.SHOP_VARIANT, PersistentDataType.STRING)
    val cost = pdc.get(BigWolfKeys.SHOP_COST, PersistentDataType.INTEGER) ?: 0

    openShopGui(player, ShopContext(type, variant, cost))
  }

  @EventHandler
  fun onShopMobDamage(event: EntityDamageEvent) {
    val ent = event.entity as? LivingEntity ?: return
    val pdc = ent.persistentDataContainer
    val isShop = (pdc.get(BigWolfKeys.SHOP_FLAG, PersistentDataType.BYTE) ?: 0).toInt() == 1
    if (!isShop) return
    event.isCancelled = true
  }

  // --- ペット死亡時の処理 ---
  @EventHandler
  fun onPetDeath(event: EntityDeathEvent) {
    val entity = event.entity
    val petId = entity.petId ?: return
    val ownerId = entity.ownerId ?: return

    val ownerUuid = runCatching { UUID.fromString(ownerId) }.getOrNull() ?: return

    // 死亡データを記録
    PetDataManager.recordDeath(ownerUuid, entity)

    // オーナーにメッセージを送信
    val owner = Bukkit.getPlayer(ownerUuid)
    if (owner != null) {
      val petName =
          entity.customName()?.let { PlainTextComponentSerializer.plainText().serialize(it) }
              ?: entity.type.name
      owner.sendMessage(Component.text("あなたのペット「$petName」が死亡しました...", RED))
      owner.sendMessage(Component.text("/bigwolf dead で死亡したペットを確認できます。", GRAY))
      owner.sendMessage(
          Component.text("/bigwolf revive <番号> で ${BigWolfConfig.reviveCost}pt で復活できます。", GRAY))
    }

    logger.info("Pet died: Owner=$ownerId, PetId=$petId")
  }

  // --- 降車時にペットの位置を記録 ---
  @EventHandler
  fun onPetDismount(event: EntityDismountEvent) {
    if (event.entity !is Player) return
    val entity = event.dismounted as? LivingEntity ?: return

    val petId = entity.petId ?: return
    val ownerId = entity.ownerId ?: return

    val ownerUuid = runCatching { UUID.fromString(ownerId) }.getOrNull() ?: return

    // 位置を記録
    PetDataManager.updateLastLocation(ownerUuid, petId, entity.location)
  }
}

// ==========================================
// ★ Registry & Definitions
// ==========================================

enum class PetCategory {
  LAND, // 陸上型: 水中で遅い
  WATER, // 水棲型: 水中で速い、陸で遅い
  FLYING // 飛行型: ジャンプで上昇、スローフォーリング
}

enum class ToyType {
  NONE,
  THROW_FETCH, // 投げて取ってこい
  FISHING_ROD // 釣竿で遊ぶ
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
    val toyGravity: Boolean = true
) {
  fun createToyItem(): ItemStack {
    if (toyMaterial == null || toyName == null) return ItemStack(Material.AIR)
    return ItemStack(toyMaterial).apply {
      itemMeta =
          itemMeta.apply {
            displayName(
                Component.text(
                    "★ $toyName", if (toyType == ToyType.FISHING_ROD) LIGHT_PURPLE else YELLOW))
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
  val officialPets =
      setOf(
          EntityType.WOLF,
          EntityType.CAT,
          EntityType.CHICKEN,
          EntityType.DOLPHIN,
          EntityType.PARROT,
          EntityType.FOX,
          EntityType.FROG,
          EntityType.ALLAY)

  private val overrides = mutableMapOf<EntityType, PetSpec>()

  private val defaultSpec = PetSpec(PetCategory.LAND, entityType = EntityType.PIG)

  private val specs =
      mapOf(
          EntityType.WOLF to
              PetSpec(
                  category = PetCategory.LAND,
                  entityType = EntityType.WOLF,
                  baseSpeed = 0.6,
                  maxSpeed = 1.2,
                  jumpPower = 0.6,
                  toyMaterial = Material.BONE,
                  toyName = "骨のおもちゃ",
                  toyType = ToyType.THROW_FETCH),
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
                  toyType = ToyType.FISHING_ROD),
          EntityType.FOX to
              PetSpec(
                  category = PetCategory.LAND,
                  entityType = EntityType.FOX,
                  baseSpeed = 0.7,
                  maxSpeed = 1.3,
                  jumpPower = 0.7,
                  toyMaterial = Material.SWEET_BERRIES,
                  toyName = "ベリーのおもちゃ",
                  toyType = ToyType.THROW_FETCH),
          EntityType.DOLPHIN to
              PetSpec(
                  category = PetCategory.WATER,
                  entityType = EntityType.DOLPHIN,
                  baseSpeed = 0.5,
                  maxSpeed = 1.0,
                  scaleRange = 1.2..2.2,
                  toyMaterial = Material.SNOWBALL,
                  toyName = "ビーチボール",
                  toyType = ToyType.THROW_FETCH),
          EntityType.AXOLOTL to
              PetSpec(
                  category = PetCategory.WATER,
                  entityType = EntityType.AXOLOTL,
                  baseSpeed = 0.5,
                  maxSpeed = 1.0,
                  scaleRange = 1.0..2.0,
                  toyMaterial = Material.TROPICAL_FISH_BUCKET,
                  toyName = "お魚バケツ",
                  toyType = ToyType.THROW_FETCH),
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
                  toyType = ToyType.THROW_FETCH),
          EntityType.PARROT to
              PetSpec(
                  category = PetCategory.FLYING,
                  entityType = EntityType.PARROT,
                  baseSpeed = 0.5,
                  maxSpeed = 1.0,
                  scaleRange = 1.0..2.0,
                  toyMaterial = Material.WHEAT_SEEDS,
                  toyName = "種のおもちゃ",
                  toyType = ToyType.THROW_FETCH),
          EntityType.CHICKEN to
              PetSpec(
                  category = PetCategory.FLYING,
                  entityType = EntityType.CHICKEN,
                  baseSpeed = 0.4,
                  maxSpeed = 0.9,
                  toyMaterial = Material.MELON_SEEDS,
                  toyName = "スイカの種",
                  toyType = ToyType.THROW_FETCH),
          EntityType.BEE to
              PetSpec(
                  category = PetCategory.FLYING,
                  entityType = EntityType.BEE,
                  baseSpeed = 0.6,
                  maxSpeed = 1.1,
                  scaleRange = 1.0..2.0,
                  toyMaterial = Material.HONEY_BOTTLE,
                  toyName = "ハチミツ",
                  toyType = ToyType.THROW_FETCH),
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
                  toyGravity = false))

  fun allConfigurableTypes(): Set<EntityType> {
    // 公式 + specs に定義されているものを対象（実験MOBも設定可能にしておく）
    return (officialPets + specs.keys).toSet()
  }

  fun getDefaultSpec(type: EntityType): PetSpec = specs[type] ?: defaultSpec.copy(entityType = type)

  fun applyConfig(plugin: JavaPlugin) {
    overrides.clear()
    val sec = plugin.config.getConfigurationSection("pets") ?: return

    for (mobKey in sec.getKeys(false)) {
      val type =
          runCatching { EntityType.valueOf(mobKey.uppercase(Locale.ROOT)) }.getOrNull() ?: continue
      val base = "pets.$mobKey"

      // 既存デフォルトをベースに、存在する項目だけ上書き
      val def = getDefaultSpec(type)

      val baseSpeed = plugin.config.getDouble("$base.baseSpeed", def.baseSpeed)
      val maxSpeed = plugin.config.getDouble("$base.maxSpeed", def.maxSpeed)
      val jumpPower = plugin.config.getDouble("$base.jumpPower", def.jumpPower)
      val scaleMin = plugin.config.getDouble("$base.scaleMin", def.scaleRange.start)
      val scaleMax = plugin.config.getDouble("$base.scaleMax", def.scaleRange.endInclusive)

      val tuned =
          def.copy(
              baseSpeed = baseSpeed,
              maxSpeed = maxSpeed,
              jumpPower = jumpPower,
              scaleRange = scaleMin..scaleMax,
              entityType = type)

      overrides[type] = tuned
    }
  }

  fun get(type: EntityType): PetSpec =
      overrides[type] ?: specs[type] ?: defaultSpec.copy(entityType = type)

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
      applier: (E, T) -> Unit
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
