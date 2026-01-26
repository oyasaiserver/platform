package me.marzipan.OyasaiPets

import io.papermc.paper.entity.LookAnchor
import io.papermc.paper.event.player.AsyncChatEvent
import io.papermc.paper.registry.RegistryAccess
import io.papermc.paper.registry.RegistryKey
import java.io.File
import java.util.Locale
import java.util.UUID
import me.marzipan.OyasaiPets.domain.*
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
import org.bukkit.event.inventory.InventoryType
import org.bukkit.event.player.*
import org.bukkit.inventory.*
import org.bukkit.persistence.PersistentDataType
import org.bukkit.plugin.java.JavaPlugin
import org.bukkit.scheduler.BukkitRunnable
import org.bukkit.util.Vector

class BigWolfPlugin : JavaPlugin(), Listener, CommandExecutor, TabCompleter {


  private val guiTitle = Component.text("ペットステータス", BLACK)
  private val shopGuiTitle = Component.text("購入確認", BLACK)
  private val mainMenuTitle = Component.text("★ BigWolf メインメニュー", DARK_PURPLE)

  private val openedShopGuis = mutableMapOf<Inventory, ShopContext>()
  private val openedMainMenus = mutableSetOf<Inventory>()
  // --- shopremoveall 確認待ち管理 ---
  private val pendingRemoveAllConfirm = mutableMapOf<UUID, Long>()

  // Cooldowns & Tasks
  private val skillCooldowns = mutableMapOf<UUID, Long>()
  private val mountCooldowns = mutableMapOf<UUID, Long>()
  private val dashEndTimes = mutableMapOf<UUID, Long>()
  private val dropCooldowns = mutableMapOf<UUID, Long>()
  private val brushCooldowns = mutableMapOf<UUID, Long>() // ブラシ（撫でる）のクールダウン

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
    getCommand("bigwolfop")?.apply {
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

    // コマンド分岐
    return when (command.name.lowercase()) {
      "bigwolfop" -> handleOpCommand(sender, args)
      "bigwolf" -> handlePlayerCommand(sender, args)
      else -> true
    }
  }

  // ==========================================
  // ★ OP専用コマンド: /bigwolfop
  // ==========================================
  private fun handleOpCommand(sender: Player, args: Array<out String>): Boolean {
    if (!sender.isOp) {
      sender.sendMessage(Component.text("このコマンドはOP専用です。", RED))
      return true
    }

    if (args.isEmpty()) {
      sender.sendMessage(Component.text("=== BigWolfOP 管理コマンド ===", GOLD))
      sender.sendMessage(Component.text("/bigwolfop version - バージョン表示", YELLOW))
      sender.sendMessage(Component.text("/bigwolfop reload - 設定リロード", YELLOW))
      sender.sendMessage(Component.text("/bigwolfop item <種類> - アイテム配布", YELLOW))
      sender.sendMessage(Component.text("/bigwolfop exp <mob> [variant] - 実験的召喚", YELLOW))
      sender.sendMessage(Component.text("/bigwolfop shop <mob> [variant] [cost] [yaw] - ショップ設置", YELLOW))
      sender.sendMessage(Component.text("/bigwolfop shopremove - ショップ削除", YELLOW))
      sender.sendMessage(Component.text("/bigwolfop shopremoveall - 全ショップ削除", YELLOW))
      sender.sendMessage(Component.text("/bigwolfop force_store - 強制収納", YELLOW))
      sender.sendMessage(Component.text("/bigwolfop force_storeall <player> - 全強制収納", YELLOW))
      sender.sendMessage(Component.text("/bigwolfop history <player> - 他人の履歴", YELLOW))
      return true
    }

    val sub = args[0].lowercase()
    when (sub) {
      "version" -> {
        val version = description.version
        sender.sendMessage(Component.text("=== OyasaiPets (BigWolf) ===", GOLD))
        sender.sendMessage(Component.text("Version: $version", YELLOW))
      }
      "reload" -> {
        reloadConfig()
        ensureDefaultConfig()
        PetRegistry.applyConfig(this)
        BigWolfConfig.loadFrom(config)
        sender.sendMessage(Component.text("BigWolf: config reloaded!", GREEN))
      }
      "item" -> handleOpItemCommand(sender, args)
      "exp" -> handleExperimentalSummon(sender, args)
      "shop" -> handleOpShopCommand(sender, args)
      "shopremove" -> handleOpShopRemove(sender)
      "shopremoveall" -> handleOpShopRemoveAll(sender)
      "force_store" -> handleForceStoreTarget(sender)
      "force_storeall" -> handleForceStoreAll(sender, args)
      "history" -> handlePetHistory(sender, args)
      else -> sender.sendMessage(Component.text("不明なサブコマンド: $sub", RED))
    }
    return true
  }

  // OP専用: アイテム配布
  private fun handleOpItemCommand(sender: Player, args: Array<out String>) {
    if (args.size < 2) {
      sender.sendMessage(Component.text(
        "使い方: /bigwolfop item <food|brush|treat|toys|skillbook|particle|all>", RED))
      return
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
      "particle" -> {
        // アンロック可能なパーティクルアイテムのみ配布（5-10）
        for (i in 5..10) {
          sender.inventory.addItem(createParticleUnlockItem(i))
        }
        sender.sendMessage(Component.text("パーティクルの結晶セットを入手しました！", LIGHT_PURPLE))
      }
      "all" -> {
        sender.inventory.addItem(createPetFoodItem())
        sender.inventory.addItem(createPetBrushItem())
        sender.inventory.addItem(createPetTreatItem())
        val toys = PetRegistry.getAllToyItems()
        toys.forEach { sender.inventory.addItem(it) }
        sender.inventory.addItem(createSkillUnlockItem(1))
        sender.inventory.addItem(createSkillUnlockItem(2))
        sender.inventory.addItem(createSkillUnlockItem(3))
        for (i in 5..10) {
          sender.inventory.addItem(createParticleUnlockItem(i))
        }
        sender.sendMessage(Component.text("フード・ブラシ・おやつ・おもちゃ・スキルブック・パーティクル を入手しました！", YELLOW))
      }
      else -> sender.sendMessage(Component.text("不明なアイテム: $key", RED))
    }
  }

  // OP専用: ショップ設置
  private fun handleOpShopCommand(sender: Player, args: Array<out String>) {
    if (args.size < 2) {
      sender.sendMessage(Component.text("使い方: /bigwolfop shop <mob> [variant] [cost] [yawDeg]", RED))
      return
    }
    val type = runCatching { EntityType.valueOf(args[1].uppercase()) }.getOrNull()
    if (type == null || !type.isAlive) {
      sender.sendMessage(Component.text("無効なMOB名です。", RED))
      return
    }
    val variant = args.getOrNull(2)?.lowercase()
    val cost = args.getOrNull(3)?.toIntOrNull() ?: BigWolfConfig.defaultShopCost
    val yawArg = args.getOrNull(4)
    val yawDeg: Float? = if (yawArg.isNullOrBlank()) null else {
      val raw = yawArg.toFloatOrNull()
      if (raw == null) {
        sender.sendMessage(Component.text("yawDeg は数値で指定してください", RED))
        return
      }
      (((raw % 360f) + 360f) % 360f)
    }
    spawnShopMob(sender, type, variant, cost, yawDeg)
    sender.sendMessage(Component.text(
      "購入用MOBを設置しました: ${type.name}${if (variant != null) " ($variant)" else ""} cost=$cost", GREEN))
  }

  // OP専用: ショップ削除
  private fun handleOpShopRemove(sender: Player) {
    val target = sender.getTargetEntity(6) as? LivingEntity
    if (target == null) {
      sender.sendMessage(Component.text("狙っているエンティティが見つかりません。", RED))
      return
    }
    val pdc = target.persistentDataContainer
    val isShop = (pdc.get(BigWolfKeys.SHOP_FLAG, PersistentDataType.BYTE) ?: 0).toInt() == 1
    if (!isShop) {
      sender.sendMessage(Component.text("そのエンティティはショップ用ではありません。", RED))
      return
    }
    target.world.spawnParticle(Particle.POOF, target.location, 10, 0.3, 0.3, 0.3, 0.0)
    target.remove()
    sender.sendMessage(Component.text("ショップ用MOBを削除しました。", GREEN))
  }

  // OP専用: 全ショップ削除
  private fun handleOpShopRemoveAll(sender: Player) {
    val now = System.currentTimeMillis()
    val last = pendingRemoveAllConfirm[sender.uniqueId]
    if (last != null && now - last <= BigWolfConfig.REMOVEALL_CONFIRM_TIMEOUT_MS) {
      pendingRemoveAllConfirm.remove(sender.uniqueId)
      var removed = 0
      for (world in Bukkit.getWorlds()) {
        val it = world.livingEntities.iterator()
        while (it.hasNext()) {
          val e = it.next()
          val pdc = e.persistentDataContainer
          val isShop = (pdc.get(BigWolfKeys.SHOP_FLAG, PersistentDataType.BYTE) ?: 0).toInt() == 1
          if (isShop) {
            e.remove()
            removed++
          }
        }
      }
      sender.sendMessage(Component.text("ショップ用MOBを $removed 体削除しました。", GREEN))
      return
    }
    pendingRemoveAllConfirm[sender.uniqueId] = now
    sender.sendMessage(Component.text("【確認】本当に全ワールドのショップMOBを削除しますか？", RED))
    sender.sendMessage(Component.text("15秒以内にもう一度 /bigwolfop shopremoveall を実行してください。", YELLOW))
  }

  // ==========================================
  // ★ 一般プレイヤーコマンド: /bigwolf
  // ==========================================
  private fun handlePlayerCommand(sender: Player, args: Array<out String>): Boolean {
    if (args.isEmpty()) {
      sender.sendMessage(Component.text("=== BigWolf 使用方法 ===", GOLD))
      sender.sendMessage(Component.text("/bigwolf <mob名> [variant] - ペットを購入して召喚", YELLOW))
      sender.sendMessage(Component.text("/bigwolf storeall - 自分の全ペットを収納", YELLOW))
      sender.sendMessage(Component.text("/bigwolf dead - 死亡したペット一覧", YELLOW))
      sender.sendMessage(Component.text("/bigwolf revive <番号> - ペットを復活", YELLOW))
      sender.sendMessage(Component.text("/bigwolf history - ペット履歴", YELLOW))
      sender.sendMessage(Component.text("/bigwolf locate <番号> - ペットの位置確認", YELLOW))
      sender.sendMessage(Component.text("/bigwolf recover <番号> - スポーンエッグ再取得", YELLOW))
      sender.sendMessage(Component.text("/bigwolf breed - 交配", YELLOW))
      sender.sendMessage(Component.text("/bigwolf rename <番号> <新しい名前> - ペットの名前変更", YELLOW))
      sender.sendMessage(Component.text("/bigwolf transfer <番号> <プレイヤー名> - ペット譲渡", YELLOW))
      sender.sendMessage(Component.text("/bigwolf menu - メインメニューを開く", GOLD))
      sender.sendMessage(Component.text("例: /bigwolf wolf, /bigwolf cat tabby", GRAY))
      return true
    }

    val sub = args[0].lowercase()
    when (sub) {
      "menu" -> openMainMenu(sender)
      "storeall" -> storeAllPets(sender)
      "revive" -> handleRevivePet(sender, args)
      "dead" -> handleDeadPetsList(sender)
      "history" -> handlePetHistory(sender, args)
      "locate" -> handleLocatePet(sender, args)
      "recover" -> handleRecoverEgg(sender, args)
      "breed" -> handleBreedCommand(sender)
      "rename" -> handleRenameCommand(sender, args)
      "transfer" -> handleTransferCommand(sender, args)
      // 旧OPコマンドは/bigwolfopに移行したことを案内
      "item", "shop", "shopremove", "shopremoveall", "reload", "force_store", "force_storeall", "exp", "version" -> {
        if (sender.isOp) {
          sender.sendMessage(Component.text("管理コマンドは /bigwolfop を使用してください。", YELLOW))
        } else {
          sender.sendMessage(Component.text("不明なコマンドです。", RED))
        }
      }
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
    // ページ番号を取得（デフォルト: 1）
    var page = 1
    var targetUuid = player.uniqueId

    // 引数の解析: /bigwolf history [ページ] または /bigwolf history [プレイヤー名] [ページ]
    if (args.size >= 2) {
      val arg1 = args[1]
      val pageNumber = arg1.toIntOrNull()

      if (pageNumber != null) {
        // 第1引数が数字 → ページ番号
        page = pageNumber
      } else if (player.isOp) {
        // 第1引数が数字でない かつ OPの場合 → プレイヤー名
        targetUuid = Bukkit.getPlayer(arg1)?.uniqueId ?: Bukkit.getOfflinePlayer(arg1).uniqueId

        if (args.size >= 3) {
          page = args[2].toIntOrNull() ?: 1
        }
      } else {
        // 一般プレイヤーが数字でない引数を指定
        player.sendMessage(Component.text("使い方: /bigwolf history [ページ番号]", RED))
        return
      }
    }

    if (page < 1) page = 1

    val pets = PetDataManager.getAllPets(targetUuid).sortedBy { it.petNumber }

    if (pets.isEmpty()) {
      player.sendMessage(Component.text("ペットの履歴がありません。", GRAY))
      return
    }

    val targetName = Bukkit.getOfflinePlayer(targetUuid).name ?: "Unknown"

    // ページネーション設定
    val petsPerPage = 10
    val totalPages = (pets.size + petsPerPage - 1) / petsPerPage

    if (page > totalPages) {
      page = totalPages
    }

    val startIndex = (page - 1) * petsPerPage
    val endIndex = minOf(startIndex + petsPerPage, pets.size)
    val petsOnPage = pets.subList(startIndex, endIndex)

    // ヘッダー
    player.sendMessage(Component.text("=== ${targetName} のペット履歴 (ページ $page/$totalPages) ===", GOLD))

    // ペットリスト表示
    for (pet in petsOnPage) {
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

    // フッター（ページナビゲーション）
    if (totalPages > 1) {
      val navComponents = mutableListOf<Component>()

      if (page > 1) {
        val prevCommand = if (player.isOp && targetUuid != player.uniqueId) {
          "/bigwolf history $targetName ${page - 1}"
        } else {
          "/bigwolf history ${page - 1}"
        }
        navComponents.add(
          Component.text("« 前", GREEN)
            .hoverEvent(Component.text("ページ ${page - 1} へ"))
            .clickEvent(net.kyori.adventure.text.event.ClickEvent.runCommand(prevCommand))
        )
        navComponents.add(Component.text(" | ", GRAY))
      }

      navComponents.add(Component.text("$page/$totalPages", YELLOW))

      if (page < totalPages) {
        navComponents.add(Component.text(" | ", GRAY))
        val nextCommand = if (player.isOp && targetUuid != player.uniqueId) {
          "/bigwolf history $targetName ${page + 1}"
        } else {
          "/bigwolf history ${page + 1}"
        }
        navComponents.add(
          Component.text("次 »", GREEN)
            .hoverEvent(Component.text("ページ ${page + 1} へ"))
            .clickEvent(net.kyori.adventure.text.event.ClickEvent.runCommand(nextCommand))
        )
      }

      val navigation = Component.text("")
      for ((index, comp) in navComponents.withIndex()) {
        if (index == 0) {
          navigation.append(comp)
        } else {
          navigation.append(comp)
        }
      }
      player.sendMessage(navigation)
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

  // --- スポーンエッグ再取得コマンド ---
  private fun handleRecoverEgg(player: Player, args: Array<out String>) {
    if (args.size < 2) {
      player.sendMessage(Component.text("使い方: /bigwolf recover <ペット番号>", RED))
      player.sendMessage(Component.text("収納中のペットのスポーンエッグを再取得します (${BigWolfConfig.recoverCost}pt)", GRAY))
      return
    }

    val petNumber = args[1].toIntOrNull()
    if (petNumber == null) {
      player.sendMessage(Component.text("ペット番号は数字で指定してください。", RED))
      return
    }

    val petData = PetDataManager.getStoredPetForRecover(player.uniqueId, petNumber)
    if (petData == null) {
      player.sendMessage(Component.text("番号 $petNumber の収納中ペットは見つかりません。", RED))
      player.sendMessage(Component.text("/bigwolf history で収納中のペットを確認できます。", GRAY))
      return
    }

    // ポイント消費
    val cost = BigWolfConfig.recoverCost
    if (!consumeTokens(player, cost)) {
      return
    }

    // スポーンエッグを生成して付与
    val type = runCatching { EntityType.valueOf(petData.type) }.getOrNull() ?: EntityType.WOLF
    val item = createRecoveredStoredPetItem(petData, type, player.uniqueId.toString())

    val leftovers = player.inventory.addItem(item)
    if (leftovers.isNotEmpty()) {
      leftovers.values.forEach { player.world.dropItem(player.location, it) }
      player.sendMessage(Component.text("インベントリがいっぱいのため足元にドロップしました。", YELLOW))
    }

    player.playSound(player.location, Sound.ENTITY_ITEM_PICKUP, 1f, 1f)
    player.sendMessage(Component.text("ペット #${petNumber} のスポーンエッグを再取得しました！ (-${cost}pt)", GREEN))
  }

  // 再取得用のスポーンエッグ作成
  private fun createRecoveredStoredPetItem(petData: PetData, type: EntityType, ownerUuid: String): ItemStack {
    val eggMat = Material.getMaterial("${type.name}_SPAWN_EGG") ?: Material.PIG_SPAWN_EGG
    val item = ItemStack(eggMat)
    val meta = item.itemMeta
    val pdc = meta.persistentDataContainer

    val variantStr = petData.variant?.let { " ($it)" } ?: ""
    val nameStr = petData.customName ?: "名前なし"

    meta.displayName(Component.text("【収納】${type.name}$variantStr - $nameStr", AQUA))

    val ownerName = runCatching { Bukkit.getOfflinePlayer(UUID.fromString(ownerUuid)).name }.getOrNull() ?: "Unknown"
    meta.lore(listOf(
      Component.text("右クリックでペットを解放", GRAY),
      Component.text("Lv: ${petData.foodLevel}", YELLOW),
      Component.text("オーナー: $ownerName", DARK_GRAY)
    ))

    // PDCにデータを保存（全データを正しく保存）
    pdc.set(BigWolfKeys.STORED_FLAG, PersistentDataType.BYTE, 1)
    pdc.set(BigWolfKeys.STORED_TYPE, PersistentDataType.STRING, type.name)
    petData.variant?.let { pdc.set(BigWolfKeys.STORED_VARIANT, PersistentDataType.STRING, it) }
    petData.customName?.let { pdc.set(BigWolfKeys.STORED_NAME, PersistentDataType.STRING, it) }
    pdc.set(BigWolfKeys.STORED_ID, PersistentDataType.STRING, petData.petId)
    pdc.set(BigWolfKeys.STORED_OWNER, PersistentDataType.STRING, ownerUuid)
    pdc.set(BigWolfKeys.STORED_SKILL, PersistentDataType.INTEGER, petData.skillType)
    pdc.set(BigWolfKeys.STORED_UNLOCKED, PersistentDataType.INTEGER, petData.skillUnlockedLevel)
    pdc.set(BigWolfKeys.FOOD, PersistentDataType.INTEGER, petData.foodLevel)
    pdc.set(BigWolfKeys.STORED_STAT_DISTANCE, PersistentDataType.DOUBLE, petData.stats.distance)
    pdc.set(BigWolfKeys.STORED_STAT_JUMPS, PersistentDataType.INTEGER, petData.stats.jumps)
    pdc.set(BigWolfKeys.STORED_STAT_TOYS, PersistentDataType.INTEGER, petData.stats.toys)
    pdc.set(BigWolfKeys.STORED_STAT_BRUSHES, PersistentDataType.INTEGER, petData.stats.brushes)
    pdc.set(BigWolfKeys.STORED_STAT_TREATS, PersistentDataType.INTEGER, petData.stats.treats)

    // v2データ
    pdc.set(BigWolfKeys.STORED_PCD_VERSION, PersistentDataType.INTEGER, BigWolfKeys.CURRENT_PCD_VERSION)
    petData.originalOwner?.let { pdc.set(BigWolfKeys.STORED_ORIGINAL_OWNER, PersistentDataType.STRING, it) }
    pdc.set(BigWolfKeys.STORED_TRANSFER_COUNT, PersistentDataType.INTEGER, petData.transferHistory.size)

    petData.breedInfo?.let { breedInfo ->
      pdc.set(BigWolfKeys.STORED_PARENT_1, PersistentDataType.STRING, breedInfo.parent1Id)
      pdc.set(BigWolfKeys.STORED_PARENT_2, PersistentDataType.STRING, breedInfo.parent2Id)
      pdc.set(BigWolfKeys.STORED_GENERATION, PersistentDataType.INTEGER, breedInfo.generation)
    }
    pdc.set(BigWolfKeys.STORED_BREED_COUNT, PersistentDataType.INTEGER, petData.breedCount)
    pdc.set(BigWolfKeys.STORED_PARTICLE_UNLOCKED, PersistentDataType.STRING, petData.particleUnlocked)

    meta.addEnchant(Enchantment.UNBREAKING, 1, true)
    meta.addItemFlags(ItemFlag.HIDE_ENCHANTS)
    item.itemMeta = meta
    return item
  }

  // --- 交配コマンド ---
  private fun handleBreedCommand(player: Player) {
    // プレイヤーの召喚中ペットを取得
    val playerPets = mutableListOf<LivingEntity>()
    val targetId = player.uniqueId.toString()
    for (world in Bukkit.getWorlds()) {
      for (entity in world.livingEntities) {
        if (entity.ownerId == targetId) {
          playerPets.add(entity)
        }
      }
    }

    if (playerPets.size < 2) {
      player.sendMessage(Component.text("交配には2匹以上のペットが必要です。", RED))
      return
    }

    // 交配可能なペットをフィルタ
    val breedablePets = playerPets.filter {
      it.foodLevel >= BigWolfConfig.breedMinLevel
    }

    if (breedablePets.size < 2) {
      player.sendMessage(Component.text("交配にはLv.${BigWolfConfig.breedMinLevel}以上のペットが2匹必要です。", RED))
      return
    }

    // 交配GUIを開く
    openBreedGui(player, breedablePets)
  }

  // 交配GUI
  private val breedGuiTitle = Component.text("★ 交配するペットを選択", DARK_PURPLE)
  private val pendingBreedSelections = mutableMapOf<UUID, LivingEntity?>()

  private fun openBreedGui(player: Player, pets: List<LivingEntity>) {
    val inv = Bukkit.createInventory(null, 27, breedGuiTitle)
    pendingBreedSelections[player.uniqueId] = null

    pets.take(9).forEachIndexed { index, pet ->
      val typeStr = pet.type.name
      val name = pet.customName()?.let { PlainTextComponentSerializer.plainText().serialize(it) } ?: typeStr
      val level = pet.foodLevel
      val eggMat = Material.getMaterial("${pet.type.name}_SPAWN_EGG") ?: Material.PIG_SPAWN_EGG

      val item = ItemStack(eggMat)
      item.itemMeta = item.itemMeta.apply {
        displayName(Component.text("$name (Lv.$level)", AQUA))
        lore(listOf(
          Component.text("クリックで選択", GRAY),
          Component.text("交配回数: ${pet.breedCount}", YELLOW)
        ))
        // ペットIDを保存
        persistentDataContainer.set(BigWolfKeys.PET_ID, PersistentDataType.STRING, pet.petId ?: "")
      }
      inv.setItem(index, item)
    }

    // コスト表示
    val infoItem = ItemStack(Material.PAPER)
    infoItem.itemMeta = infoItem.itemMeta.apply {
      displayName(Component.text("交配について", GOLD))
      lore(listOf(
        Component.text("コスト: ${BigWolfConfig.defaultShopCost}pt", YELLOW),
        Component.text("必要レベル: ${BigWolfConfig.breedMinLevel}以上", YELLOW),
        Component.text("同じ種類のペット同士のみ", GRAY)
      ))
    }
    inv.setItem(22, infoItem)

    player.openInventory(inv)
  }

  // --- 名前変更コマンド ---
  private fun handleRenameCommand(player: Player, args: Array<out String>) {
    if (args.size < 3) {
      player.sendMessage(Component.text("使い方: /bigwolf rename <ペット番号> <新しい名前>", RED))
      player.sendMessage(Component.text("例: /bigwolf rename 1 ポチ", GRAY))
      return
    }

    val petNumber = args[1].toIntOrNull()
    if (petNumber == null) {
      player.sendMessage(Component.text("ペット番号は数字で指定してください。", RED))
      return
    }

    // 残りの引数を名前として結合
    val newName = args.drop(2).joinToString(" ")
    if (newName.isBlank() || newName.length > 32) {
      player.sendMessage(Component.text("名前は1～32文字で指定してください。", RED))
      return
    }

    // ペット確認（召喚中のペットから検索）
    var targetEntity: LivingEntity? = null
    val playerUuidStr = player.uniqueId.toString()
    for (world in Bukkit.getWorlds()) {
      for (entity in world.livingEntities) {
        if (entity.ownerId == playerUuidStr) {
          val petData = entity.petId?.let { PetDataManager.getPetData(player.uniqueId, it) }
          if (petData?.petNumber == petNumber) {
            targetEntity = entity
            break
          }
        }
      }
      if (targetEntity != null) break
    }

    if (targetEntity == null) {
      player.sendMessage(Component.text("番号 $petNumber の召喚中ペットが見つかりません。", RED))
      player.sendMessage(Component.text("名前を変更するにはペットを召喚している必要があります。", GRAY))
      return
    }

    // 名前を変更
    val nameComponent = Component.text(newName, AQUA)
    targetEntity.customName(nameComponent)
    targetEntity.isCustomNameVisible = true

    // JSONファイルにも保存
    val petId = targetEntity.petId
    if (petId != null) {
      try {
        PetDataManager.updateCustomName(player.uniqueId, petId, newName)
      } catch (e: Exception) {
        logger.warning("Failed to update pet name in JSON: ${e.message}")
      }
    }

    player.sendMessage(Component.text("ペット #$petNumber の名前を「$newName」に変更しました！", GREEN))
    player.playSound(player.location, Sound.ENTITY_PLAYER_LEVELUP, 1f, 1f)
    targetEntity.world.spawnParticle(Particle.HEART, targetEntity.location.add(0.0, 1.0, 0.0), 10, 0.5, 0.5, 0.5)
  }

  // --- 譲渡コマンド ---
  private val pendingTransfers = mutableMapOf<UUID, TransferRequest>()

  data class TransferRequest(
    val petId: String,
    val targetPlayer: UUID,
    val expireTime: Long
  )

  private fun handleTransferCommand(player: Player, args: Array<out String>) {
    if (args.size < 3) {
      player.sendMessage(Component.text("使い方: /bigwolf transfer <ペット番号> <プレイヤー名>", RED))
      return
    }

    val petNumber = args[1].toIntOrNull()
    if (petNumber == null) {
      player.sendMessage(Component.text("ペット番号は数字で指定してください。", RED))
      return
    }

    val targetName = args[2]
    val targetPlayer = Bukkit.getPlayer(targetName)
    if (targetPlayer == null) {
      player.sendMessage(Component.text("プレイヤー $targetName はオンラインではありません。", RED))
      return
    }

    if (targetPlayer.uniqueId == player.uniqueId) {
      player.sendMessage(Component.text("自分自身には譲渡できません。", RED))
      return
    }

    // ペット確認（召喚中のペットから検索）
    var targetEntity: LivingEntity? = null
    val playerUuidStr = player.uniqueId.toString()
    for (world in Bukkit.getWorlds()) {
      for (entity in world.livingEntities) {
        if (entity.ownerId == playerUuidStr) {
          val petData = entity.petId?.let { PetDataManager.getPetData(player.uniqueId, it) }
          if (petData?.petNumber == petNumber) {
            targetEntity = entity
            break
          }
        }
      }
      if (targetEntity != null) break
    }

    if (targetEntity == null) {
      player.sendMessage(Component.text("番号 $petNumber の召喚中ペットが見つかりません。", RED))
      player.sendMessage(Component.text("譲渡するにはペットを召喚している必要があります。", GRAY))
      return
    }

    val petId = targetEntity.petId!!
    val petName = targetEntity.customName()?.let {
      PlainTextComponentSerializer.plainText().serialize(it)
    } ?: targetEntity.type.name

    // ★ 2回目の実行チェック（確認済みリクエストがあるか）
    val existingRequest = pendingTransfers[player.uniqueId]
    if (existingRequest != null) {
      // 有効期限チェック
      if (System.currentTimeMillis() > existingRequest.expireTime) {
        pendingTransfers.remove(player.uniqueId)
        player.sendMessage(Component.text("譲渡確認の有効期限が切れました。もう一度最初から実行してください。", RED))
        return
      }

      // 同じペット・同じターゲットか確認
      if (existingRequest.petId == petId && existingRequest.targetPlayer == targetPlayer.uniqueId) {
        // ★ 実際の譲渡処理を実行
        executePetTransfer(player, targetPlayer, targetEntity, petId, petName)
        pendingTransfers.remove(player.uniqueId)
        return
      } else {
        // 違うペット/ターゲットなので、リクエストを更新
        pendingTransfers.remove(player.uniqueId)
        player.sendMessage(Component.text("前回の譲渡確認をキャンセルしました。", GRAY))
      }
    }

    // ★ 1回目の実行：確認リクエストを保存
    pendingTransfers[player.uniqueId] = TransferRequest(
      petId = petId,
      targetPlayer = targetPlayer.uniqueId,
      expireTime = System.currentTimeMillis() + 30_000 // 30秒
    )

    player.sendMessage(Component.text("=== 譲渡確認 ===", GOLD))
    player.sendMessage(Component.text("ペット「$petName」を ${targetPlayer.name} に譲渡しますか？", YELLOW))
    player.sendMessage(Component.text("確定するには30秒以内にもう一度同じコマンドを実行してください。", GRAY))
    player.sendMessage(Component.text("※譲渡後は取り消せません", RED))
  }

  // ★ 実際の譲渡処理
  private fun executePetTransfer(
    sender: Player,
    targetPlayer: Player,
    petEntity: LivingEntity,
    petId: String,
    petName: String
  ) {
    try {
      val senderUuid = sender.uniqueId
      val targetUuid = targetPlayer.uniqueId

      // 1. 元のペットデータを取得
      val petData = PetDataManager.getPetData(senderUuid, petId)
      if (petData == null) {
        sender.sendMessage(Component.text("ペットデータが見つかりません。", RED))
        return
      }

      // 2. ペットを収納してスポーンエッグを取得
      val egg = createStoredPetItem(petEntity)

      // 3. エンティティを削除
      petEntity.remove()

      // 4. 元のデータファイルを削除
      val senderFolder = File(File(this.dataFolder, "players"), senderUuid.toString())
      val oldFileName = getPetFileName(petData)
      val oldFile = File(senderFolder, oldFileName)
      if (oldFile.exists()) {
        oldFile.delete()
      }

      // ★ 元のオーナーのキャッシュからも削除
      PetDataManager.removePetFromCache(senderUuid, petId)

      // 5. 新しいオーナーで全ペットを読み込んで最大番号を取得
      val targetPets = PetDataManager.getAllPets(targetUuid)
      val nextNumber = (targetPets.maxOfOrNull { it.petNumber } ?: 0) + 1

      // 6. 譲渡履歴を記録
      val transferRecord = TransferRecord(
        fromOwner = senderUuid.toString(),
        toOwner = targetUuid.toString(),
        timestamp = java.time.LocalDateTime.now().toString()
      )
      val updatedHistory = petData.transferHistory.toMutableList()
      updatedHistory.add(transferRecord)

      // 7. originalOwnerが未設定の場合は現在の送信者をセット
      val originalOwner = petData.originalOwner ?: senderUuid.toString()

      // 8. 新しいペット番号でデータを作成
      val newPetData = petData.copy(
        petNumber = nextNumber,
        originalOwner = originalOwner,
        transferHistory = updatedHistory
      )


      // 9. 新しいオーナーでデータを保存
      val targetFolder = File(File(this.dataFolder, "players"), targetUuid.toString())
      if (!targetFolder.exists()) {
        targetFolder.mkdirs()
      }
      val newFileName = getPetFileName(newPetData)
      val newFile = File(targetFolder, newFileName)
      newFile.writeText(com.google.gson.GsonBuilder().setPrettyPrinting().create().toJson(newPetData))

      // ★ PetDataManagerのキャッシュを更新
      PetDataManager.savePetData(targetUuid, newPetData)

      // 10. スポーンエッグのオーナーUUIDを更新
      egg.itemMeta = egg.itemMeta?.apply {
        persistentDataContainer.set(
          BigWolfKeys.STORED_OWNER,
          PersistentDataType.STRING,
          targetUuid.toString()
        )
      }

      // 11. 譲渡先プレイヤーにスポーンエッグを渡す
      val leftover = targetPlayer.inventory.addItem(egg)
      if (leftover.isNotEmpty()) {
        targetPlayer.world.dropItem(targetPlayer.location, egg)
        targetPlayer.sendMessage(Component.text("インベントリがいっぱいだったため、足元にドロップしました。", YELLOW))
      }

      // 12. 成功メッセージ（譲渡回数を表示）
      val transferCount = updatedHistory.size
      sender.sendMessage(Component.text("ペット「$petName」(#${petData.petNumber})を ${targetPlayer.name} に譲渡しました！(譲渡回数: $transferCount)", GREEN))
      targetPlayer.sendMessage(Component.text("${sender.name} からペット「$petName」(あなたの#$nextNumber)を譲渡されました！", GREEN))

      logger.info("Pet transfer: $petName (ID: $petId) #${petData.petNumber} from ${sender.name} to ${targetPlayer.name} #$nextNumber")

    } catch (e: Exception) {
      sender.sendMessage(Component.text("譲渡処理中にエラーが発生しました: ${e.message}", RED))
      logger.warning("Pet transfer error: ${e.message}")
      e.printStackTrace()
    }
  }

  // ペットデータのファイル名を生成するヘルパー関数
  private fun getPetFileName(petData: PetData): String {
    val number = petData.petNumber.toString().padStart(3, '0')
    val variant = petData.variant?.let { "_$it" } ?: ""
    return "${number}_${petData.type}${variant}.json"
  }

  // --- Anvil GUI 機能（廃止: コマンド方式に変更） ---

  // ★ メインメニューGUI
  private fun openMainMenu(player: Player) {
    val inv = Bukkit.createInventory(null, 27, mainMenuTitle)
    openedMainMenus.add(inv)

    fun item(mat: Material, name: String, color: NamedTextColor, vararg lore: Component) =
      ItemStack(mat).apply {
        itemMeta = itemMeta.apply {
          displayName(Component.text(name, color))
          lore(lore.toList())
        }
      }

    // スロット10: 全ペット収納
    inv.setItem(10, item(Material.CHEST, "全ペット収納", GOLD,
      Component.text("自分のペットを全て収納", GRAY),
      Component.text("クリックで実行", GREEN)))

    // スロット11: 死亡ペット一覧
    inv.setItem(11, item(Material.SKELETON_SKULL, "死亡ペット一覧", RED,
      Component.text("死亡したペットを確認", GRAY),
      Component.text("クリックで表示", GREEN)))

    // スロット12: ペット履歴
    inv.setItem(12, item(Material.BOOK, "ペット履歴", YELLOW,
      Component.text("全ペットの履歴を確認", GRAY),
      Component.text("クリックで表示", GREEN)))

    // スロット13: 交配
    inv.setItem(13, item(Material.HEART_OF_THE_SEA, "交配", LIGHT_PURPLE,
      Component.text("ペット同士を交配", GRAY),
      Component.text("コスト: ${BigWolfConfig.defaultShopCost}pt", GOLD),
      Component.text("クリックで選択", GREEN)))

    // スロット14: ペット復活
    inv.setItem(14, item(Material.TOTEM_OF_UNDYING, "ペット復活", AQUA,
      Component.text("死亡ペットを復活", GRAY),
      Component.text("コスト: ${BigWolfConfig.reviveCost}pt/匹", GOLD),
      Component.text("※番号指定が必要", DARK_GRAY)))

    // スロット15: スポーンエッグ再取得
    inv.setItem(15, item(Material.EGG, "エッグ再取得", GREEN,
      Component.text("収納ペットのエッグを再取得", GRAY),
      Component.text("コスト: ${BigWolfConfig.recoverCost}pt", GOLD),
      Component.text("※番号指定が必要", DARK_GRAY)))

    // スロット16: 位置確認
    inv.setItem(16, item(Material.COMPASS, "位置確認", YELLOW,
      Component.text("ペットの最終位置を確認", GRAY),
      Component.text("※番号指定が必要", DARK_GRAY)))

    // スロット22: 閉じる
    inv.setItem(22, item(Material.BARRIER, "閉じる", RED,
      Component.text("メニューを閉じる", GRAY)))

    player.openInventory(inv)
  }

  override fun onTabComplete(
    sender: CommandSender,
    command: Command,
    label: String,
    args: Array<out String>,
  ): MutableList<String>? {
    // コマンドによってタブ補完を分ける
    return when (command.name.lowercase()) {
      "bigwolfop" -> onTabCompleteOp(sender, args).toMutableList()
      "bigwolf" -> onTabCompletePlayer(args).toMutableList()
      else -> mutableListOf()
    }
  }

  // /bigwolfop のタブ補完
  private fun onTabCompleteOp(sender: CommandSender, args: Array<out String>): List<String> {
    if (!sender.isOp) return mutableListOf()

    val a0 = args.getOrNull(0)?.lowercase() ?: ""
    val a1 = args.getOrNull(1)?.lowercase() ?: ""

    val result: List<String> = when (args.size) {
      1 -> listOf("version", "reload", "item", "exp", "shop", "shopremove", "shopremoveall",
        "force_store", "force_storeall", "history")
        .filter { it.startsWith(a0) }
      2 -> when (a0) {
        "item" -> listOf("food", "brush", "treat", "toys", "skillbook", "skillbook1", "skillbook2", "skillbook3", "particle", "all")
          .filter { it.startsWith(a1) }
        "exp", "shop" -> EntityType.entries.filter { it.isSpawnable && it.isAlive }
          .map { it.name.lowercase() }.filter { it.startsWith(a1) }
        "force_storeall", "history" -> Bukkit.getOnlinePlayers().map { it.name }
          .filter { it.lowercase().startsWith(a1) }
        else -> emptyList()
      }
      3 -> when (a0) {
        "exp", "shop" -> {
          val type = runCatching { EntityType.valueOf(args[1].uppercase()) }.getOrNull()
          if (type != null) VariantHandler.getVariantNames(type).map { it.lowercase() }.filter { it.startsWith(args[2].lowercase()) }
          else emptyList()
        }
        "history" -> {
          // ページ番号の候補（1-5程度）
          (1..5).map { it.toString() }.filter { it.startsWith(args[2]) }
        }
        else -> emptyList()
      }
      else -> emptyList()
    }
    return result.toMutableList()
  }

  // /bigwolf のタブ補完
  private fun onTabCompletePlayer(args: Array<out String>): List<String> {
    val a0 = args.getOrNull(0)?.lowercase() ?: ""
    val a1 = args.getOrNull(1)?.lowercase() ?: ""
    val a2 = args.getOrNull(2)?.lowercase() ?: ""

    val result: List<String> = when (args.size) {
      1 -> {
        val base = PetRegistry.officialPets.map { it.name.lowercase() } +
          listOf("menu", "storeall", "revive", "dead", "history", "locate", "recover", "breed", "transfer")
        base.filter { it.startsWith(a0) }
      }
      2 -> when (a0) {
        "revive", "locate", "recover" -> {
          // ペット番号の候補（1-10程度）
          (1..10).map { it.toString() }.filter { it.startsWith(a1) }
        }
        "transfer" -> {
          // ペット番号の候補
          (1..10).map { it.toString() }.filter { it.startsWith(a1) }
        }
        "history" -> {
          // ページ番号の候補（1-5程度）
          (1..5).map { it.toString() }.filter { it.startsWith(a1) }
        }
        else -> {
          // バリアント候補
          val type = runCatching { EntityType.valueOf(a0.uppercase()) }.getOrNull()
          if (type != null) VariantHandler.getVariantNames(type).map { it.lowercase() }.filter { it.startsWith(a1) }
          else emptyList()
        }
      }
      3 -> when (a0) {
        "transfer" -> {
          // プレイヤー名候補
          Bukkit.getOnlinePlayers().map { it.name }.filter { it.lowercase().startsWith(a2) }
        }
        else -> emptyList()
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

      // パーティクルアンロックアイテム
      if (isParticleUnlockItem(main)) {
        handleParticleUnlock(player, entity, main)
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
      return
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

  private fun handleParticleUnlock(player: Player, entity: LivingEntity, item: ItemStack) {
    val particleId = getParticleUnlockId(item)
    if (particleId < 5 || particleId > 10) {
      player.sendMessage(Component.text("無効なパーティクルアイテムです。", RED))
      return
    }

    if (entity.isParticleUnlocked(particleId)) {
      player.sendMessage(Component.text("このパーティクルは既にアンロック済みです！", RED))
      return
    }

    entity.unlockParticle(particleId)
    item.amount -= 1

    val particleName = particleTypes.find { it.first == particleId }?.second?.first ?: "不明"
    entity.world.playSound(entity.location, Sound.BLOCK_AMETHYST_BLOCK_CHIME, 1f, 1.5f)
    entity.world.spawnParticle(Particle.END_ROD, entity.location.add(0.0, 1.0, 0.0), 20, 0.5, 0.5, 0.5, 0.1)
    player.sendMessage(Component.text("パーティクル「$particleName」をアンロックしました！", LIGHT_PURPLE))
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

      // ★ 遊びでレベルアップ判定
      tryPlayLevelUp(player, pet)
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

      // ★ 遊びでレベルアップ判定
      tryPlayLevelUp(player, pet)
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

    // ★ Anvil GUIは廃止されました（コマンド方式に変更）

    // ★ パーティクル選択GUI
    if (event.view.title() == Component.text("パーティクル選択", GOLD)) {
      event.isCancelled = true
      val entity = openedGuis[event.view.topInventory] ?: return

      when (item.type) {
        Material.BARRIER, Material.LIGHTNING_ROD, Material.BLAZE_POWDER, Material.SOUL_CAMPFIRE, Material.RED_DYE,
        Material.NETHER_STAR, Material.NOTE_BLOCK, Material.SNOWBALL, Material.CHERRY_LEAVES,
        Material.ENDER_PEARL, Material.SLIME_BALL -> {
          // パーティクルを選択
          val particleId = when (event.slot) {
            0 -> 0   // なし
            1 -> 1   // 電気
            2 -> 2   // 炎
            3 -> 3   // 青炎
            4 -> 4   // ハート
            9 -> 5   // 星
            10 -> 6  // 音符
            11 -> 7  // 雪
            12 -> 8  // 桜
            13 -> 9  // エンド
            14 -> 10 // スライム
            else -> -1
          }

          if (particleId >= 0) {
            // デフォルトパーティクル(0-4)は常に選択可能
            // アンロック可能パーティクル(5-10)は解放済みかチェック
            if (particleId <= 4 || entity.isParticleUnlocked(particleId)) {
              entity.particleType = particleId
              player.playSound(player.location, Sound.BLOCK_AMETHYST_BLOCK_CHIME, 1f, 1f)
              openParticleSelectGui(player, entity) // GUI再描画
            } else {
              player.sendMessage(Component.text("このパーティクルは未解放です！", RED))
              player.playSound(player.location, Sound.ENTITY_VILLAGER_NO, 1f, 1f)
            }
          }
        }
        Material.ARROW -> {
          // 戻る
          player.closeInventory()
          openInfoGui(player, entity)
        }
        Material.GRAY_DYE -> {
          // 未解放パーティクル
          player.sendMessage(Component.text("このパーティクルは未解放です！", RED))
          player.playSound(player.location, Sound.ENTITY_VILLAGER_NO, 1f, 1f)
        }
        else -> {}
      }
      return
    }

    // ★ メインメニューGUI
    if (event.view.title() == mainMenuTitle) {
      event.isCancelled = true
      if (!openedMainMenus.contains(event.view.topInventory)) return

      when (item.type) {
        Material.CHEST -> {
          // 全ペット収納
          player.closeInventory()
          storeAllPets(player)
        }
        Material.SKELETON_SKULL -> {
          // 死亡ペット一覧
          player.closeInventory()
          handleDeadPetsList(player)
        }
        Material.BOOK -> {
          // ペット履歴
          player.closeInventory()
          handlePetHistory(player, emptyArray())
        }
        Material.HEART_OF_THE_SEA -> {
          // 交配
          player.closeInventory()
          handleBreedCommand(player)
        }
        Material.TOTEM_OF_UNDYING -> {
          // ペット復活（コマンド案内）
          player.closeInventory()
          player.sendMessage(Component.text("=== ペット復活 ===", GOLD))
          player.sendMessage(Component.text("/bigwolf revive <番号> で復活できます", YELLOW))
          player.sendMessage(Component.text("コスト: ${BigWolfConfig.reviveCost}pt", GRAY))
        }
        Material.EGG -> {
          // エッグ再取得（コマンド案内）
          player.closeInventory()
          player.sendMessage(Component.text("=== エッグ再取得 ===", GOLD))
          player.sendMessage(Component.text("/bigwolf recover <番号> で再取得できます", YELLOW))
          player.sendMessage(Component.text("コスト: ${BigWolfConfig.recoverCost}pt", GRAY))
        }
        Material.COMPASS -> {
          // 位置確認（コマンド案内）
          player.closeInventory()
          player.sendMessage(Component.text("=== ペット位置確認 ===", GOLD))
          player.sendMessage(Component.text("/bigwolf locate <番号> で確認できます", YELLOW))
        }
        Material.BARRIER -> {
          // 閉じる
          player.closeInventory()
        }
        else -> {}
      }
      return
    }

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
        // ペット番号を取得
        val petId = entity.petId
        val ownerId = entity.ownerId
        if (petId != null && ownerId != null) {
          try {
            val ownerUuid = UUID.fromString(ownerId)
            val petData = PetDataManager.getPetData(ownerUuid, petId)
            if (petData != null) {
              player.sendMessage(Component.text("=== ペット名前変更 ===", GOLD))
              player.sendMessage(Component.text("下のメッセージをクリックすると、チャット欄に自動入力されます。", YELLOW))
              player.sendMessage(Component.text("名前を入力してEnterキーで確定してください。", YELLOW))
              player.sendMessage(Component.empty())
              player.sendMessage(
                Component.text("▶ /bigwolf rename ${petData.petNumber} <新しい名前>", GREEN)
                  .clickEvent(net.kyori.adventure.text.event.ClickEvent.suggestCommand("/bigwolf rename ${petData.petNumber} "))
                  .hoverEvent(Component.text("クリックでコマンドを入力欄に挿入"))
              )
            } else {
              player.sendMessage(Component.text("ペットデータが見つかりません。", RED))
              logger.warning("Pet data not found: ownerUuid=$ownerUuid, petId=$petId")
            }
          } catch (e: Exception) {
            player.sendMessage(Component.text("ペット情報の取得に失敗しました。", RED))
            logger.warning("Failed to get pet data: ${e.message}")
          }
        } else {
          player.sendMessage(Component.text("ペットIDまたはオーナーIDが見つかりません。", RED))
        }
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
        // 右クリックの場合は逆送り
        if (event.isRightClick) {
          nextSkill = entity.skillType - 1
          if (nextSkill < 1) nextSkill = unlocked
        } else {
          if (nextSkill > unlocked) nextSkill = 1 // skills start from 1
        }
        // ループ修正: 1..unlocked の範囲にする
        if (nextSkill < 1) nextSkill = unlocked
        if (nextSkill > unlocked) nextSkill = 1

        entity.skillType = nextSkill
        player.playSound(player.location, Sound.UI_BUTTON_CLICK, 1f, 1f)
        openInfoGui(player, entity)
      }

      Material.BARRIER -> {
        if (event.slot == 3) {
          player.sendMessage(Component.text("スキルが未解放です。スキル強化の本を与えてください。", RED))
        } else if (event.slot == 8) { // 閉じるボタン
          player.closeInventory()
        }
      }

      Material.BLAZE_POWDER -> {
        // パーティクル選択GUIを開く
        player.closeInventory()
        openParticleSelectGui(player, entity)
      }

      Material.CHEST -> {
        player.closeInventory()
        storePetToItem(player, entity)
      }

      // ★ 譲渡ボタン
      Material.PLAYER_HEAD -> {
        player.closeInventory()
        val petId = entity.petId
        val ownerId = entity.ownerId
        if (petId == null || ownerId == null) {
          player.sendMessage(Component.text("ペットIDまたはオーナーIDが見つかりません。", RED))
          return
        }

        try {
          val ownerUuid = UUID.fromString(ownerId)
          val petData = PetDataManager.getPetData(ownerUuid, petId)
          if (petData == null) {
            player.sendMessage(Component.text("ペットデータが見つかりません。", RED))
            logger.warning("Pet data not found for transfer: ownerUuid=$ownerUuid, petId=$petId")
            return
          }

          player.sendMessage(Component.text("=== ペット譲渡 ===", GOLD))
          player.sendMessage(Component.text("下のメッセージをクリックすると、チャット欄に自動入力されます。", YELLOW))
          player.sendMessage(Component.text("譲渡先のプレイヤー名を入力してEnterキーで確定してください。", YELLOW))
          player.sendMessage(Component.text("※誤操作防止のため、2回実行で確定されます", GRAY))
          player.sendMessage(Component.empty())
          player.sendMessage(
            Component.text("▶ /bigwolf transfer ${petData.petNumber} <プレイヤー名>", GREEN)
              .clickEvent(net.kyori.adventure.text.event.ClickEvent.suggestCommand("/bigwolf transfer ${petData.petNumber} "))
              .hoverEvent(Component.text("クリックでコマンドを入力欄に挿入"))
          )
        } catch (e: Exception) {
          player.sendMessage(Component.text("譲渡処理中にエラーが発生しました: ${e.message}", RED))
          logger.warning("Transfer error: ${e.message}")
        }
      }

      // フード (旧: giveFoodをここから呼び出す)
      Material.COOKED_BEEF -> {
        giveFood(player, entity)
        openInfoGui(player, entity) // 更新
      }

      else -> {}
    }
  }

  // ★ 交配GUI処理
  @EventHandler
  fun onBreedGuiClick(event: InventoryClickEvent) {
    val player = event.whoClicked as? Player ?: return
    if (event.view.title() != breedGuiTitle) return
    event.isCancelled = true

    val item = event.currentItem ?: return
    if (!item.hasItemMeta()) return

    val pdc = item.itemMeta.persistentDataContainer
    val petId = pdc.get(BigWolfKeys.PET_ID, PersistentDataType.STRING) ?: return

    // ペットエンティティを取得
    var selectedPet: LivingEntity? = null
    for (world in Bukkit.getWorlds()) {
      for (entity in world.livingEntities) {
        if (entity.petId == petId) {
          selectedPet = entity
          break
        }
      }
      if (selectedPet != null) break
    }

    if (selectedPet == null) {
      player.sendMessage(Component.text("ペットが見つかりません。", RED))
      return
    }

    val firstSelection = pendingBreedSelections[player.uniqueId]

    if (firstSelection == null) {
      // 1匹目を選択
      pendingBreedSelections[player.uniqueId] = selectedPet
      player.sendMessage(Component.text("1匹目を選択しました。2匹目を選択してください。", YELLOW))
      player.playSound(player.location, Sound.UI_BUTTON_CLICK, 1f, 1f)
    } else {
      // 2匹目を選択 → 交配実行
      if (firstSelection.petId == selectedPet.petId) {
        player.sendMessage(Component.text("同じペットは選択できません。", RED))
        return
      }

      // 同じ種類かチェック
      if (firstSelection.type != selectedPet.type) {
        player.sendMessage(Component.text("異なる種類のペットは交配できません。", RED))
        pendingBreedSelections.remove(player.uniqueId)
        return
      }

      player.closeInventory()
      pendingBreedSelections.remove(player.uniqueId)
      executeBreeding(player, firstSelection, selectedPet)
    }
  }

  // 交配実行
  private fun executeBreeding(player: Player, parent1: LivingEntity, parent2: LivingEntity) {
    // ★ ペット数制限チェック
    if (countActivePets(player) >= BigWolfConfig.MAX_PET_COUNT) {
      player.sendMessage(Component.text("ペットは同時に${BigWolfConfig.MAX_PET_COUNT}匹までしか召喚できません！", RED))
      player.sendMessage(Component.text("他のペットを収納してから交配してください。", GRAY))
      return
    }

    // コスト確認
    val cost = BigWolfConfig.defaultShopCost
    if (!consumeTokens(player, cost)) {
      return
    }

    // 新しいペットを生成
    val newPetId = UUID.randomUUID().toString()
    val type = parent1.type
    val variant = VariantHandler.getVariantNameFromEntity(parent1)
      ?: VariantHandler.getVariantNameFromEntity(parent2)

    // 世代計算（修正：両親の最大世代 + 1）
    val gen1 = parent1.generation
    val gen2 = parent2.generation
    val newGeneration = maxOf(gen1, gen2) + 1

    // ★ 能力値の遺伝計算
    // 親の平均 + ランダム(-5% ~ +10%)
    val parentSpeedAvg = (parent1.speedMultiplier + parent2.speedMultiplier) / 2.0
    val parentJumpAvg = (parent1.jumpMultiplier + parent2.jumpMultiplier) / 2.0

    // ランダム要素（コンフィグで設定可能）
    val randomRange = BigWolfConfig.breedRandomMax - BigWolfConfig.breedRandomMin
    val randomFactor = BigWolfConfig.breedRandomMin + (Math.random() * randomRange)

    // 世代ボーナス（コンフィグで設定可能）
    val genBonus = (newGeneration * BigWolfConfig.breedGenBonusPerGen).coerceAtMost(BigWolfConfig.breedGenBonusMax)

    // 突然変異（コンフィグで設定可能）
    val mutation = if (Math.random() < BigWolfConfig.breedMutationChance) BigWolfConfig.breedMutationBoost else 1.0

    var newSpeed = parentSpeedAvg * randomFactor * mutation + genBonus
    var newJump = parentJumpAvg * randomFactor * mutation + genBonus

    // 上限設定（コンフィグで設定可能）
    newSpeed = newSpeed.coerceAtMost(BigWolfConfig.breedStatCap)
    newJump = newJump.coerceAtMost(BigWolfConfig.breedStatCap)

    // ★ スポーン位置を上空からの降臨に変更（復活と同じロジック）
    val playerLoc = player.location.clone()

    // 安全な着地点を探す
    val groundLoc = playerLoc.clone()
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

    val spec = PetRegistry.get(type)

    val newEntity = player.world.spawnEntity(spawnLoc, type) as? LivingEntity
    if (newEntity == null) {
      player.sendMessage(Component.text("この場所ではペットを生成できません。", RED))
      // ポイント返却
      @Suppress("DEPRECATION")
      TMAPI.addTokens(player.uniqueId, cost)
      return
    }

    setupPetEntity(newEntity, spec, player)
    newEntity.petId = newPetId
    newEntity.ownerId = player.uniqueId.toString()
    newEntity.originalOwnerId = player.uniqueId.toString()
    newEntity.generation = newGeneration
    newEntity.parent1Id = parent1.petId
    newEntity.parent2Id = parent2.petId
    newEntity.pcdVersion = BigWolfKeys.CURRENT_PCD_VERSION
    newEntity.speedMultiplier = newSpeed
    newEntity.jumpMultiplier = newJump

    // ★ デフォルトパーティクル(0-4)はアンロック済み
    newEntity.particleUnlocked = "0,1,2,3,4"

    // 世代ボーナスとして初期レベルアップ（コンフィグで設定可能）
    val bonusLevel = ((newGeneration - 1) * BigWolfConfig.breedBonusLevelPerGen).coerceAtMost(BigWolfConfig.breedBonusLevelMax)
    if (bonusLevel > 0) {
      newEntity.foodLevel = bonusLevel
      updateStats(newEntity, bonusLevel, spec)
    }

    // バリアント適用
    if (variant != null) {
      VariantHandler.applyVariant(newEntity, variant)
    }

    // ★ 降臨演出を非同期タスクで実行
    var ticks = 0
    object : BukkitRunnable() {
      override fun run() {
        if (!newEntity.isValid || newEntity.isDead) {
          cancel()
          return
        }

        // 着地判定
        if (newEntity.isOnGround || ticks > 40) {
          cancel()
          // 最終演出
          newEntity.world.spawnParticle(
            Particle.EXPLOSION_EMITTER,
            newEntity.location.clone().add(0.0, 0.5, 0.0),
            1
          )
          newEntity.world.playSound(newEntity.location, Sound.ENTITY_GENERIC_EXPLODE, 0.8f, 1.5f)
          player.sendMessage(Component.text("★ 新しいペットが誕生しました！ (第${newGeneration}世代)", GREEN))
          return
        }

        // パーティクル演出（キラキラと光の柱）
        val currentLoc = newEntity.location
        newEntity.world.spawnParticle(
          Particle.HEART,
          currentLoc.clone().add(0.0, 1.0, 0.0),
          5,
          0.3,
          0.5,
          0.3,
          0.02
        )
        newEntity.world.spawnParticle(
          Particle.TOTEM_OF_UNDYING,
          currentLoc.clone().add(0.0, 2.0, 0.0),
          3,
          0.2,
          0.2,
          0.2,
          0.01
        )
        newEntity.world.spawnParticle(
          Particle.FIREWORK,
          currentLoc.clone().add(0.0, 0.5, 0.0),
          2,
          0.4,
          0.3,
          0.4,
          0.0
        )

        ticks++
      }
    }.runTaskTimer(this@BigWolfPlugin, 0L, 2L)

    // ★ 親の交配回数更新（PCD + JSONの両方）
    parent1.breedCount++
    parent2.breedCount++

    // JSONにも保存
    val parent1Id = parent1.petId
    val parent2Id = parent2.petId
    if (parent1Id != null) {
      val petData1 = PetDataManager.getPetData(player.uniqueId, parent1Id)
      if (petData1 != null) {
        petData1.breedCount = parent1.breedCount
        PetDataManager.savePetData(player.uniqueId, petData1)
      }
    }
    if (parent2Id != null) {
      val petData2 = PetDataManager.getPetData(player.uniqueId, parent2Id)
      if (petData2 != null) {
        petData2.breedCount = parent2.breedCount
        PetDataManager.savePetData(player.uniqueId, petData2)
      }
    }

    // PetDataManagerに記録
    PetDataManager.recordBreeding(
      ownerUuid = player.uniqueId,
      petId = newPetId,
      type = type,
      variant = variant,
      parent1Id = parent1.petId ?: "",
      parent2Id = parent2.petId ?: "",
      generation = newGeneration,
      speedMultiplier = newSpeed,
      jumpMultiplier = newJump
    )

    // 初期音演出
    player.playSound(player.location, Sound.ENTITY_PLAYER_LEVELUP, 1f, 1.5f)

    // 能力値メッセージ（降臨後に表示）
    Bukkit.getScheduler().runTaskLater(this, Runnable {
      val speedPct = (newSpeed * 100).toInt()
      player.sendMessage(Component.text("   コスト: -${cost}pt", GRAY))
      player.sendMessage(Component.text("   能力: 速度${speedPct}%, ジャンプ${(newJump*100).toInt()}%", AQUA))
      if (bonusLevel > 0) {
        player.sendMessage(Component.text("   世代ボーナス: 初期レベル +$bonusLevel", YELLOW))
      }
    }, 45L)
  }

  @EventHandler
  fun onInventoryClose(event: InventoryCloseEvent) {
    openedGuis.remove(event.inventory)
    openedShopGuis.remove(event.inventory)
    openedMainMenus.remove(event.inventory)
  }

  @EventHandler
  fun onPlayerQuit(event: PlayerQuitEvent) {
    val player = event.player

    renamingPlayers.remove(player.uniqueId)
    mountCooldowns.remove(player.uniqueId)
    skillCooldowns.remove(player.uniqueId)
    dashEndTimes.remove(player.uniqueId)
    dropCooldowns.remove(player.uniqueId)
    pendingRemoveAllConfirm.remove(player.uniqueId)
    pendingTransfers.remove(player.uniqueId)

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

      // ★ RabbitとChickenのHP増加（デフォルトが低いため）
      if (this is Rabbit) {
        getAttribute(Attribute.MAX_HEALTH)?.baseValue = 20.0  // デフォルト3 → 20
        health = 20.0
      }
      if (this is Chicken) {
        getAttribute(Attribute.MAX_HEALTH)?.baseValue = 20.0  // デフォルト4 → 20
        health = 20.0
      }

      // ★ Turtleの陸上移動速度を低く設定（モーション高速化を防ぐ）
      if (this is Turtle) {
        // Turtleは水中では速く、陸上ではゆっくり移動
        getAttribute(Attribute.MOVEMENT_SPEED)?.baseValue = 0.1
      }
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

    // ★ デフォルトパーティクル(0-4)はアンロック済み
    entity.particleUnlocked = "0,1,2,3,4"

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

    // ★ v2データを保存（交配、譲渡、パーティクル）
    pdc.set(BigWolfKeys.STORED_PCD_VERSION, PersistentDataType.INTEGER, entity.pcdVersion)
    entity.originalOwnerId?.let { pdc.set(BigWolfKeys.STORED_ORIGINAL_OWNER, PersistentDataType.STRING, it) }
    pdc.set(BigWolfKeys.STORED_TRANSFER_COUNT, PersistentDataType.INTEGER, entity.transferCount)
    pdc.set(BigWolfKeys.STORED_BREED_COUNT, PersistentDataType.INTEGER, entity.breedCount)
    pdc.set(BigWolfKeys.STORED_GENERATION, PersistentDataType.INTEGER, entity.generation)
    entity.parent1Id?.let { pdc.set(BigWolfKeys.STORED_PARENT_1, PersistentDataType.STRING, it) }
    entity.parent2Id?.let { pdc.set(BigWolfKeys.STORED_PARENT_2, PersistentDataType.STRING, it) }
    pdc.set(BigWolfKeys.STORED_PARTICLE_UNLOCKED, PersistentDataType.STRING, entity.particleUnlocked)

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

    // ★ v2データを復元（交配、譲渡、パーティクル）
    entity.pcdVersion = pdc.get(BigWolfKeys.STORED_PCD_VERSION, PersistentDataType.INTEGER) ?: BigWolfKeys.CURRENT_PCD_VERSION
    entity.originalOwnerId = pdc.get(BigWolfKeys.STORED_ORIGINAL_OWNER, PersistentDataType.STRING)
    entity.transferCount = pdc.get(BigWolfKeys.STORED_TRANSFER_COUNT, PersistentDataType.INTEGER) ?: 0
    entity.breedCount = pdc.get(BigWolfKeys.STORED_BREED_COUNT, PersistentDataType.INTEGER) ?: 0
    entity.generation = pdc.get(BigWolfKeys.STORED_GENERATION, PersistentDataType.INTEGER) ?: 1
    entity.parent1Id = pdc.get(BigWolfKeys.STORED_PARENT_1, PersistentDataType.STRING)
    entity.parent2Id = pdc.get(BigWolfKeys.STORED_PARENT_2, PersistentDataType.STRING)

    // パーティクルアンロック状態を復元（互換性処理）
    val unlockedStr = pdc.get(BigWolfKeys.STORED_PARTICLE_UNLOCKED, PersistentDataType.STRING) ?: "0"
    // 古いペットの場合、デフォルトパーティクル(0-4)を自動的にアンロック
    val currentUnlocked = unlockedStr.split(",").mapNotNull { it.trim().toIntOrNull() }.toMutableSet()
    currentUnlocked.addAll(listOf(0, 1, 2, 3, 4))
    entity.particleUnlocked = currentUnlocked.sorted().joinToString(",")

    updateStats(entity, food, spec)

    val vStr = pdc.get(BigWolfKeys.STORED_VARIANT, PersistentDataType.STRING)
    if (vStr != null) {
      VariantHandler.applyVariant(entity, vStr)
    }

    // ★ PetDataManagerに解放状態を記録
    PetDataManager.markAsAlive(player.uniqueId, entity.petId!!)

    // ★ 解放位置を記録（見失い対策）
    PetDataManager.updateLastLocation(player.uniqueId, entity.petId!!, loc)

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

        // ★ 移動速度に補正値を適用
        val baseSpeed = spec.baseSpeed + (spec.maxSpeed - spec.baseSpeed) * progress
        var speed = baseSpeed * entity.speedMultiplier

        entity.isSilent = entity.isSilentMode

        val inWater = entity.isInWater

        when (spec.category) {
          PetCategory.LAND -> {
            if (inWater && entity.skillType != 3) speed *= 0.3
          }

          PetCategory.WATER -> {
            if (inWater) {
              speed *= 1.2
            } else {
              // 陸上での速度調整
              if (entity.type == EntityType.TURTLE) {
                // Turtleは陸上で非常に遅く（モーション高速化を防ぐ）
                speed *= 0.3
              } else {
                speed *= 0.6
              }
            }
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
            vel.y = 0.4 * entity.jumpMultiplier
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
            entity.velocity = entity.velocity.setY(spec.jumpPower * entity.jumpMultiplier)
            // ★ 地上ジャンプ（単発カウント）
            if (!lastJumpPressed) {
              entity.statJumps = entity.statJumps + 1
            }
          }

          // ★ Rabbitの移動中ジャンプアニメーション（EntityEffect）
          if (entity.type == EntityType.RABBIT && entity.isOnGround && !inWater) {
            if (velocity.length() > 0.1 && entity.ticksLived % 8 == 0) {
              try {
                // EntityEffect.RABBIT_JUMP を試す
                entity.playEffect(org.bukkit.EntityEffect.RABBIT_JUMP)
              } catch (e: Exception) {
                // 失敗した場合はvelocityでジャンプ
                val vel = entity.velocity
                vel.y = 0.4
                entity.velocity = vel
              }
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
    if (pType == 0) return // 0 = なし

    val particle = when (pType) {
      1 -> Particle.ELECTRIC_SPARK  // 電気
      2 -> Particle.FLAME           // 炎
      3 -> Particle.SOUL_FIRE_FLAME // 青炎
      4 -> Particle.HEART           // ハート
      5 -> Particle.END_ROD         // 星
      6 -> Particle.NOTE            // 音符
      7 -> Particle.SNOWFLAKE       // 雪
      8 -> Particle.CHERRY_LEAVES   // 桜
      9 -> Particle.PORTAL          // エンド
      10 -> Particle.ITEM_SLIME     // スライム
      else -> return
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
    // 9スロットに再編成
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

    // スロット0: 基本情報
    val nameComp = entity.customName() ?: Component.text(entity.type.name, AQUA)
    val vName = VariantHandler.getVariantNameFromEntity(entity)
    val typeName = if (vName != null) "${entity.type.name} ($vName)" else entity.type.name
    val hp = "${entity.health.toInt()} / ${entity.getAttribute(Attribute.MAX_HEALTH)?.value?.toInt()}"
    val ownerName = Bukkit.getOfflinePlayer(UUID.fromString(entity.ownerId ?: player.uniqueId.toString())).name ?: "Unknown"

    inv.setItem(0, item(Material.NAME_TAG, "基本情報", AQUA,
      Component.text("名前: ", GRAY).append(nameComp),
      Component.text("種類: $typeName", GRAY),
      Component.text("オーナー: $ownerName", GRAY),
      Component.text("体力: $hp", RED),
      Component.text("クリックで名前変更", GREEN)))

    // スロット1: 記録 & 家系図
    val gen = entity.generation
    val speedPct = (entity.speedMultiplier * 100).toInt()
    val jumpPct = (entity.jumpMultiplier * 100).toInt()

    val recordLore = mutableListOf<Component>()
    recordLore.add(Component.text("=== 能力値 ===", GOLD))
    recordLore.add(Component.text("世代: 第${gen}世代", YELLOW))
    recordLore.add(Component.text("移動速度: ${speedPct}%", if(speedPct > 100) AQUA else GRAY))
    recordLore.add(Component.text("ジャンプ: ${jumpPct}%", if(jumpPct > 100) AQUA else GRAY))

    val dist = "%.1f".format(entity.statDistance)
    recordLore.add(Component.text("=== 遊んだ記録 ===", GOLD))
    recordLore.add(Component.text("距離: ${dist}m, ジャンプ: ${entity.statJumps}", GRAY))
    recordLore.add(Component.text("おもちゃ: ${entity.statToys}, なでた: ${entity.statBrushes}, おやつ: ${entity.statTreats}", GRAY))

    // 譲渡履歴を表示
    val petId = entity.petId
    val ownerId = entity.ownerId
    if (petId != null && ownerId != null) {
      try {
        val ownerUuid = UUID.fromString(ownerId)
        val petData = PetDataManager.getPetData(ownerUuid, petId)
        if (petData != null && petData.transferHistory.isNotEmpty()) {
          recordLore.add(Component.text("=== 譲渡履歴 ===", GOLD))
          recordLore.add(Component.text("譲渡回数: ${petData.transferHistory.size}", YELLOW))
          if (petData.originalOwner != null) {
            val originalName = Bukkit.getOfflinePlayer(UUID.fromString(petData.originalOwner)).name ?: "Unknown"
            recordLore.add(Component.text("初代オーナー: $originalName", GRAY))
          }
        }
      } catch (e: Exception) {
        // エラーは無視
      }
    }

    if (entity.parent1Id != null || entity.parent2Id != null) {
      recordLore.add(Component.text("=== 親情報 ===", GOLD))
      // 親情報の詳細は長くなるので省略、または必要なら追加
      recordLore.add(Component.text("ID: ${entity.petId?.take(8)}...", DARK_GRAY))
    }

    inv.setItem(1, item(Material.PAPER, "能力・記録", YELLOW, *recordLore.toTypedArray()))

    // スロット2: 食事 & 成長 (旧スロット4)
    inv.setItem(2, item(Material.COOKED_BEEF, "食事・成長", GOLD,
      Component.text("現在のレベル: $level / ${BigWolfConfig.maxFoodLevel}", WHITE),
      Component.text("次のレベルまで: ${BigWolfConfig.foodPointCost}pt", GRAY),
      Component.text("クリックでフードを与える", GREEN)))

    // スロット3: スキル設定 (旧スロット3)
    val currentSkill = entity.skillType
    val unlocked = entity.skillUnlockedLevel
    val (skName, skColor, skDesc) = when (currentSkill) {
      1 -> Triple("咆哮 (Roar)", GOLD, "周囲を吹き飛ばす")
      2 -> Triple("突進 (Dash)", AQUA, "前方に高速移動")
      3 -> Triple("特殊 (Special)", LIGHT_PURPLE,
        if (spec.category == PetCategory.FLYING) "ホバリング" else if (spec.category == PetCategory.WATER) "水面走行" else "高速水泳")
      else -> Triple("なし (NONE)", GRAY, "スキル未セット")
    }
    val skillIcon = if (unlocked == 0) Material.BARRIER else Material.IRON_SWORD
    inv.setItem(3, item(skillIcon, "スキル設定", skColor,
      Component.text("現在: $skName", WHITE),
      Component.text("解放状況: $unlocked / 3", DARK_GRAY),
      Component.text(skDesc, YELLOW),
      if (unlocked > 0) Component.text("クリックで切り替え", GREEN) else Component.text("要:強化アイテム", RED)))

    // スロット4: エフェクト設定
    val pType = entity.particleType
    val particleName = when (pType) {
      0 -> "なし"
      1 -> "電気"
      2 -> "炎"
      3 -> "青炎"
      4 -> "ハート"
      5 -> "星"
      6 -> "音符"
      7 -> "雪"
      8 -> "桜"
      9 -> "エンド"
      10 -> "スライム"
      else -> "不明"
    }
    val particleColor = when (pType) {
      0 -> GRAY
      1 -> YELLOW
      2 -> RED
      3 -> AQUA
      4 -> LIGHT_PURPLE
      5 -> WHITE
      6 -> GREEN
      7 -> AQUA
      8 -> LIGHT_PURPLE
      9 -> DARK_PURPLE
      10 -> GREEN
      else -> WHITE
    }
    inv.setItem(4, item(Material.BLAZE_POWDER, "エフェクト設定", GOLD,
      Component.text("現在: ", GRAY).append(Component.text(particleName, particleColor)),
      Component.text("クリックで選択画面を開く", GREEN)))

    // スロット5: マナーモード (旧スロット2)
    val silent = entity.isSilentMode
    val (sIcon, sText, sColor) = if (silent) Triple(Material.RED_WOOL, "静寂 (ON)", RED) else Triple(Material.LIME_WOOL, "通常 (OFF)", GREEN)
    inv.setItem(5, item(sIcon, "マナーモード", WHITE,
      Component.text(sText, sColor),
      Component.text("クリックで切替", GRAY)))

    // スロット6: 収納
    inv.setItem(6, item(Material.CHEST, "収納する", LIGHT_PURPLE,
      Component.text("ペットをアイテム化して", GRAY),
      Component.text("インベントリに戻します", GRAY),
      Component.text("クリックで実行", GREEN)))

    // スロット7: 譲渡
    // ★ 譲渡回数をJSONから取得（上で既に宣言されたpetIdとownerIdを使用）
    var transferCount = 0
    if (petId != null && ownerId != null) {
      try {
        val ownerUuid = UUID.fromString(ownerId)
        val petData = PetDataManager.getPetData(ownerUuid, petId)
        transferCount = petData?.transferHistory?.size ?: 0
      } catch (e: Exception) {
        // エラーは無視
      }
    }

    inv.setItem(7, item(Material.PLAYER_HEAD, "譲渡する", GOLD,
      Component.text("他のプレイヤーに譲渡", GRAY),
      Component.text("譲渡回数: $transferCount 回", DARK_GRAY),
      Component.text("クリックで宛先入力", GREEN)))

    // スロット8: 閉じる
    inv.setItem(8, item(Material.BARRIER, "閉じる", RED, Component.text("メニューを閉じる", GRAY)))

    player.openInventory(inv)
  }

  private fun openParticleSelectGui(player: Player, entity: LivingEntity) {
    val inv = Bukkit.createInventory(null, 27, Component.text("パーティクル選択", GOLD))
    openedGuis[inv] = entity

    fun item(mat: Material, name: String, color: NamedTextColor, vararg lore: Component) =
      ItemStack(mat).apply {
        itemMeta = itemMeta.apply {
          displayName(Component.text(name, color))
          lore(lore.toList())
        }
      }

    // デフォルトパーティクル (0-4) - 常に選択可能
    val defaultParticles = listOf(
      Triple(0, "なし", Material.BARRIER),
      Triple(1, "電気", Material.LIGHTNING_ROD),
      Triple(2, "炎", Material.BLAZE_POWDER),
      Triple(3, "青炎", Material.SOUL_CAMPFIRE),
      Triple(4, "ハート", Material.RED_DYE)
    )

    defaultParticles.forEachIndexed { idx, (id, name, mat) ->
      val current = entity.particleType == id
      val lore = mutableListOf<Component>()
      if (current) lore.add(Component.text("現在使用中", GREEN))
      lore.add(Component.text("クリックで選択", GRAY))

      val itemStack = item(mat, name, if (current) GREEN else WHITE, *lore.toTypedArray())
      if (current) {
        itemStack.itemMeta = itemStack.itemMeta.apply {
          addEnchant(Enchantment.UNBREAKING, 1, true)
          addItemFlags(ItemFlag.HIDE_ENCHANTS)
        }
      }
      inv.setItem(idx, itemStack)
    }

    // アンロック可能パーティクル (5-10)
    val unlockableParticles = listOf(
      Triple(5, "星", Material.NETHER_STAR),
      Triple(6, "音符", Material.NOTE_BLOCK),
      Triple(7, "雪", Material.SNOWBALL),
      Triple(8, "桜", Material.CHERRY_LEAVES),
      Triple(9, "エンド", Material.ENDER_PEARL),
      Triple(10, "スライム", Material.SLIME_BALL)
    )

    unlockableParticles.forEachIndexed { idx, (id, name, mat) ->
      val unlocked = entity.isParticleUnlocked(id)
      val current = entity.particleType == id
      val slot = idx + 9 // スロット9から配置

      if (unlocked) {
        val lore = mutableListOf<Component>()
        if (current) lore.add(Component.text("現在使用中", GREEN))
        lore.add(Component.text("クリックで選択", GRAY))

        val itemStack = item(mat, name, if (current) GREEN else AQUA, *lore.toTypedArray())
        if (current) {
          itemStack.itemMeta = itemStack.itemMeta.apply {
            addEnchant(Enchantment.UNBREAKING, 1, true)
            addItemFlags(ItemFlag.HIDE_ENCHANTS)
          }
        }
        inv.setItem(slot, itemStack)
      } else {
        inv.setItem(slot, item(Material.GRAY_DYE, "???", DARK_GRAY,
          Component.text("未解放", RED),
          Component.text("パーティクルアイテムで解放", GRAY)))
      }
    }

    // 戻るボタン
    inv.setItem(26, item(Material.ARROW, "戻る", YELLOW, Component.text("ペットメニューに戻る", GRAY)))

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
    val now = System.currentTimeMillis()
    val lastBrush = brushCooldowns.getOrDefault(player.uniqueId, 0L)
    val cooldownMillis = 5000L // 5秒

    if (now - lastBrush < cooldownMillis) {
      val remainingSec = ((cooldownMillis - (now - lastBrush)) / 1000.0).toInt() + 1
      player.sendActionBar(Component.text("クールダウン中... ${remainingSec}秒", RED))
      player.playSound(player.location, Sound.ENTITY_VILLAGER_NO, 0.5f, 1f)
      return
    }

    brushCooldowns[player.uniqueId] = now

    entity.statBrushes = entity.statBrushes + 1
    entity.world.spawnParticle(Particle.HEART, entity.location.add(0.0, 1.0, 0.0), 6, 0.4, 0.4, 0.4)
    // 代替音を使用（ITEM_BRUSH_BRUSHING_GENERICは1.21.8では非推奨の可能性）
    entity.world.playSound(entity.location, Sound.ENTITY_CAT_PURR, 1f, 1.2f)
    player.sendMessage(Component.text("なでなで...", AQUA))

    // ★ 遊びでレベルアップ
    tryPlayLevelUp(player, entity)
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

    // ★ 遊びでレベルアップ
    tryPlayLevelUp(player, entity)
  }

  // ★ 遊びでレベルアップ（確率判定）
  private fun tryPlayLevelUp(player: Player, entity: LivingEntity) {
    val currentLevel = entity.foodLevel
    val maxPlayLevel = BigWolfConfig.playLevelUpMaxLevel
    val chance = BigWolfConfig.playLevelUpChance

    // すでに遊びでの上限に達している場合はスキップ
    if (currentLevel >= maxPlayLevel) return

    // 確率判定
    if (Math.random() < chance) {
      entity.foodLevel = currentLevel + 1
      val spec = PetRegistry.get(entity.type)
      updateStats(entity, entity.foodLevel, spec)

      player.sendMessage(Component.text("★ ペットのレベルが上がった！ (Lv.${entity.foodLevel})", GREEN))
      player.playSound(player.location, Sound.ENTITY_PLAYER_LEVELUP, 1f, 1.5f)
      entity.world.spawnParticle(Particle.TOTEM_OF_UNDYING, entity.location.add(0.0, 1.0, 0.0), 20, 0.5, 0.5, 0.5, 0.1)
    }
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

  // --- パーティクルアンロックアイテム ---
  // デフォルト: 0=なし, 1=電気, 2=炎, 3=青炎, 4=ハート
  // アンロック可能: 5=星, 6=音符, 7=雪, 8=桜, 9=エンド, 10=スライム
  private val particleTypes = listOf(
    0 to ("なし" to Material.BARRIER),
    1 to ("電気" to Material.LIGHTNING_ROD),
    2 to ("炎" to Material.BLAZE_POWDER),
    3 to ("青炎" to Material.SOUL_CAMPFIRE),
    4 to ("ハート" to Material.RED_DYE),
    5 to ("星" to Material.NETHER_STAR),
    6 to ("音符" to Material.NOTE_BLOCK),
    7 to ("雪" to Material.SNOWBALL),
    8 to ("桜" to Material.CHERRY_LEAVES),
    9 to ("エンド" to Material.ENDER_PEARL),
    10 to ("スライム" to Material.SLIME_BALL)
  )

  private fun createParticleUnlockItem(particleId: Int): ItemStack {
    val (name, material) = particleTypes.find { it.first == particleId }?.second ?: ("不明" to Material.PAPER)
    return ItemStack(material).apply {
      itemMeta = itemMeta.apply {
        displayName(Component.text("★ パーティクルの結晶【$name】", LIGHT_PURPLE))
        lore(listOf(
          Component.text("ペットに右クリックで使用", GRAY),
          Component.text("パーティクル「$name」をアンロック！", YELLOW)
        ))
        persistentDataContainer.set(BigWolfKeys.PARTICLE, PersistentDataType.INTEGER, particleId)
        addEnchant(Enchantment.UNBREAKING, 1, true)
        addItemFlags(ItemFlag.HIDE_ENCHANTS)
      }
    }
  }

  private fun isParticleUnlockItem(item: ItemStack): Boolean {
    if (!item.hasItemMeta()) return false
    val meta = item.itemMeta
    val name = PlainTextComponentSerializer.plainText().serialize(meta.displayName() ?: Component.empty())
    return name.contains("パーティクルの結晶") &&
      meta.persistentDataContainer.has(BigWolfKeys.PARTICLE, PersistentDataType.INTEGER)
  }

  private fun getParticleUnlockId(item: ItemStack): Int {
    if (!item.hasItemMeta()) return -1
    return item.itemMeta.persistentDataContainer.get(BigWolfKeys.PARTICLE, PersistentDataType.INTEGER) ?: -1
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
    val cost = pdc.get(BigWolfKeys.SHOP_COST, PersistentDataType.INTEGER) ?: BigWolfConfig.defaultShopCost

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
} // End of BigWolfPlugin class

// ==========================================
// ★ Shop Helpers
// ==========================================

data class ShopContext(val type: EntityType, val variant: String?, val cost: Int)

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
      EntityType.ALLAY,
      EntityType.AXOLOTL,
      EntityType.BEE,
      EntityType.RABBIT,
      EntityType.PANDA,
      EntityType.POLAR_BEAR,
      EntityType.PUFFERFISH,
      EntityType.TURTLE,
      EntityType.ARMADILLO)

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
          toyGravity = false),
      EntityType.RABBIT to
        PetSpec(
          category = PetCategory.LAND,
          entityType = EntityType.RABBIT,
          baseSpeed = 0.6,
          maxSpeed = 1.2,
          jumpPower = 0.8,
          scaleRange = 1.5..2.5,
          toyMaterial = Material.CARROT,
          toyName = "ニンジン",
          toyType = ToyType.THROW_FETCH),
      EntityType.PANDA to
        PetSpec(
          category = PetCategory.LAND,
          entityType = EntityType.PANDA,
          baseSpeed = 0.4,
          maxSpeed = 0.8,
          jumpPower = 0.5,
          scaleRange = 2.0..3.0,
          toyMaterial = Material.BAMBOO,
          toyName = "竹",
          toyType = ToyType.THROW_FETCH),
      EntityType.POLAR_BEAR to
        PetSpec(
          category = PetCategory.LAND,
          entityType = EntityType.POLAR_BEAR,
          baseSpeed = 0.5,
          maxSpeed = 1.0,
          jumpPower = 0.6,
          scaleRange = 2.5..3.5,
          toyMaterial = Material.COD,
          toyName = "魚",
          toyType = ToyType.THROW_FETCH),
      EntityType.PUFFERFISH to
        PetSpec(
          category = PetCategory.WATER,
          entityType = EntityType.PUFFERFISH,
          baseSpeed = 0.4,
          maxSpeed = 0.8,
          scaleRange = 1.0..2.0,
          toyMaterial = Material.KELP,
          toyName = "昆布",
          toyType = ToyType.THROW_FETCH),
      EntityType.TURTLE to
        PetSpec(
          category = PetCategory.WATER,
          entityType = EntityType.TURTLE,
          baseSpeed = 0.3,
          maxSpeed = 0.7,
          scaleRange = 1.5..2.5,
          toyMaterial = Material.SEAGRASS,
          toyName = "海草",
          toyType = ToyType.THROW_FETCH),
      EntityType.ARMADILLO to
        PetSpec(
          category = PetCategory.LAND,
          entityType = EntityType.ARMADILLO,
          baseSpeed = 0.5,
          maxSpeed = 1.0,
          jumpPower = 0.5,
          scaleRange = 1.2..2.2,
          toyMaterial = Material.SPIDER_EYE,
          toyName = "クモの目",
          toyType = ToyType.THROW_FETCH))

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
