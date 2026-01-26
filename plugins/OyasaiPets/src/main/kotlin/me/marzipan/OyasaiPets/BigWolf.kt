package me.marzipan.OyasaiPets

import io.papermc.paper.entity.LookAnchor
import io.papermc.paper.event.player.AsyncChatEvent
import io.papermc.paper.registry.RegistryAccess
import io.papermc.paper.registry.RegistryKey
import java.io.File
import java.util.Locale
import java.util.UUID
import me.marzipan.OyasaiPets.domain.*
import me.marzipan.OyasaiPets.items.PetItemFactory
import me.marzipan.OyasaiPets.listeners.*
import me.marzipan.OyasaiPets.services.*
import me.marzipan.OyasaiPets.systems.*
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

class BigWolfPlugin : JavaPlugin(), CommandExecutor, TabCompleter {

  // システム層
  private val skillSystem = SkillSystem()
  private val guiManager = me.marzipan.OyasaiPets.gui.GuiManager()
  private lateinit var petSpawnSystem: PetSpawnSystem
  private lateinit var fetchSystem: FetchSystem
  private lateinit var breedingSystem: BreedingSystem
  private val transferSystem = TransferSystem()
  private val shopSystem = ShopSystem()
  private lateinit var petControlSystem: PetControlSystem

  // 新しいサービス層
  private lateinit var economySystem: EconomySystem
  private val itemManagement = ItemManagementSystem()
  private lateinit var interactionService: PetInteractionService
  private lateinit var storageService: PetStorageService

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

    // サービス・システムの初期化
    economySystem = EconomySystem(logger)
    interactionService = PetInteractionService(this)
    storageService = PetStorageService(this)

    // Systems Init
    petControlSystem = PetControlSystem(this)
    petSpawnSystem = PetSpawnSystem(
        this,
        mountCooldowns,
        { player, entity -> petControlSystem.startControlTask(player, entity) },
        { entity, level, spec -> interactionService.updateStats(entity, level, spec) }
    )
    fetchSystem = FetchSystem(this)
    breedingSystem = BreedingSystem(
        this,
        ::countActivePets,
        { entity, spec, player -> storageService.setupPetEntity(entity, spec, player) },
        { entity, level, spec -> interactionService.updateStats(entity, level, spec) },
        { player, amount -> economySystem.consumeTokens(player, amount) }
    )


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

    // リスナーの登録
    val petEventListener = PetEventListener(
      this,
      dropCooldowns,
      activeFetchTasks
    )
    server.pluginManager.registerEvents(petEventListener, this)

    val petInteractionListener = PetInteractionListener(
      this,
      guiManager,
      fetchSystem,
      petControlSystem,
      mountCooldowns,
      brushCooldowns,
      interactionService::checkAndMigrateOwner,
      interactionService::isOwner,
      itemManagement::isPetFood,
      { player: Player, entity: LivingEntity -> interactionService.giveFood(player, entity, economySystem::consumeTokens) },
      itemManagement::isPetBrush,
      interactionService::useBrush,
      itemManagement::isPetTreat,
      interactionService::giveTreat,
      itemManagement::getUnlockItemLevel,
      { player: Player, entity: LivingEntity, item: ItemStack, level: Int -> interactionService.handleSkillUnlock(player, entity, item, level, economySystem::consumeTokens) },
      itemManagement::isParticleUnlockItem,
      interactionService::handleParticleUnlock
    )
    server.pluginManager.registerEvents(petInteractionListener, this)

    val playerActionListener = PlayerActionListener(
      this,
      fetchSystem,
      petSpawnSystem,
      skillSystem,
      dropCooldowns,
      mountCooldowns,
      interactionService::isOwner,
      { player: Player, item: ItemStack, loc: Location ->
        storageService.restorePetFromItem(
          player, item, loc,
          ::countActivePets,
          { entity: LivingEntity, spec: PetSpec, p: Player -> storageService.setupPetEntity(entity, spec, p) },
          { entity: LivingEntity, level: Int, spec: PetSpec -> interactionService.updateStats(entity, level, spec) }
        )
      }
    )
    server.pluginManager.registerEvents(playerActionListener, this)

    val petInventoryListener = PetInventoryListener(
      this,
      logger,
      guiManager,
      petSpawnSystem,
      openedGuis,
      openedShopGuis,
      openedMainMenus,
      pendingBreedSelections,
      guiTitle,
      shopGuiTitle,
      mainMenuTitle,
      breedGuiTitle,
      economySystem::consumeTokens,
      { entity: LivingEntity, level: Int ->
        val spec = PetRegistry.get(entity.type)
        interactionService.updateStats(entity, level, spec)
      },
      { player: Player, entity: LivingEntity -> interactionService.giveFood(player, entity, economySystem::consumeTokens) },
      storageService::storePetToItem,
      storageService::storeAllPets,
      this::handleDeadPetsList,
      this::handlePetHistory,
      this::handleBreedCommand,
      breedingSystem::executeBreeding
    )
    server.pluginManager.registerEvents(petInventoryListener, this)

    // PetLifecycleListener登録
    val petLifecycleListener = PetLifecycleListener(
      this,
      logger,
      storageService::storeAllPets
    )
    server.pluginManager.registerEvents(petLifecycleListener, this)

    // ShopListener登録
    val shopListener = ShopListener { player, ctx ->
      val inv = guiManager.openShopGui(player, ctx, economySystem::getPlayerTokens)
      player.openInventory(inv)
    }
    server.pluginManager.registerEvents(shopListener, this)

    logger.info("BigWolfPlugin enabled with TokenManager integration")
  }

  override fun onDisable() {
    logger.info("BigWolfPlugin disabled")
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
        sender.inventory.addItem(PetItemFactory.createPetFoodItem())
        sender.sendMessage(Component.text("魔法のペットフードを入手しました！", YELLOW))
      }
      "brush" -> {
        sender.inventory.addItem(PetItemFactory.createPetBrushItem())
        sender.sendMessage(Component.text("ペットブラシを入手しました！", YELLOW))
      }
      "treat" -> {
        sender.inventory.addItem(PetItemFactory.createPetTreatItem())
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
        sender.inventory.addItem(itemManagement.createSkillUnlockItem(1))
        sender.inventory.addItem(itemManagement.createSkillUnlockItem(2))
        sender.inventory.addItem(itemManagement.createSkillUnlockItem(3))
        sender.sendMessage(Component.text("スキル強化用アイテムを入手しました！", LIGHT_PURPLE))
      }
      "skillbook1" -> {
        sender.inventory.addItem(itemManagement.createSkillUnlockItem(1))
        sender.sendMessage(Component.text("スキルブック(Lv.1)を入手しました！", LIGHT_PURPLE))
      }
      "skillbook2" -> {
        sender.inventory.addItem(itemManagement.createSkillUnlockItem(2))
        sender.sendMessage(Component.text("スキルブック(Lv.2)を入手しました！", LIGHT_PURPLE))
      }
      "skillbook3" -> {
        sender.inventory.addItem(itemManagement.createSkillUnlockItem(3))
        sender.sendMessage(Component.text("スキルブック(Lv.3)を入手しました！", LIGHT_PURPLE))
      }
      "particle" -> {
        // アンロック可能なパーティクルアイテムのみ配布（5-10）
        for (i in 5..10) {
          sender.inventory.addItem(itemManagement.createParticleUnlockItem(i))
        }
        sender.sendMessage(Component.text("パーティクルの結晶セットを入手しました！", LIGHT_PURPLE))
      }
      "all" -> {
        sender.inventory.addItem(PetItemFactory.createPetFoodItem())
        sender.inventory.addItem(PetItemFactory.createPetBrushItem())
        sender.inventory.addItem(PetItemFactory.createPetTreatItem())
        val toys = PetRegistry.getAllToyItems()
        toys.forEach { sender.inventory.addItem(it) }
        sender.inventory.addItem(itemManagement.createSkillUnlockItem(1))
        sender.inventory.addItem(itemManagement.createSkillUnlockItem(2))
        sender.inventory.addItem(itemManagement.createSkillUnlockItem(3))
        for (i in 5..10) {
          sender.inventory.addItem(itemManagement.createParticleUnlockItem(i))
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
    shopSystem.spawnShopMob(sender, type, variant, cost, yawDeg)
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
      "storeall" -> storageService.storeAllPets(sender)
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

    val item = storageService.createStoredPetItem(target)
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
        val item = storageService.createStoredPetItem(entity)
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
    petSpawnSystem.spawnAndMountEntity(player, type, variant)
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
    guiManager.openShopGui(player, ShopContext(type, variant, cost)) { p -> economySystem.getPlayerTokens(p) }
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
    if (petSpawnSystem.countActivePets(player) >= BigWolfConfig.MAX_PET_COUNT) {
      player.sendMessage(Component.text("ペットは同時に${BigWolfConfig.MAX_PET_COUNT}匹までしか召喚できません！", RED))
      return
    }

    // ポイント消費
    val cost = BigWolfConfig.reviveCost
    if (!economySystem.consumeTokens(player, cost)) {
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

    petSpawnSystem.setupPetEntity(entity, spec, player)

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

    interactionService.updateStats(entity, petData.foodLevel, spec)

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
    if (!economySystem.consumeTokens(player, cost)) {
      return
    }

    // スポーンエッグを生成して付与
    val type = runCatching { EntityType.valueOf(petData.type) }.getOrNull() ?: EntityType.WOLF
    val item = storageService.createRecoveredStoredPetItem(petData, type, player.uniqueId.toString())

    val leftovers = player.inventory.addItem(item)
    if (leftovers.isNotEmpty()) {
      leftovers.values.forEach { player.world.dropItem(player.location, it) }
      player.sendMessage(Component.text("インベントリがいっぱいのため足元にドロップしました。", YELLOW))
    }

    player.playSound(player.location, Sound.ENTITY_ITEM_PICKUP, 1f, 1f)
    player.sendMessage(Component.text("ペット #${petNumber} のスポーンエッグを再取得しました！ (-${cost}pt)", GREEN))
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
      val egg = storageService.createStoredPetItem(petEntity)

      // 3. エンティティを削除
      petEntity.remove()

      // 4. 元のデータファイルを削除
      val senderFolder = File(File(this.dataFolder, "players"), senderUuid.toString())
      val oldFileName = storageService.getPetFileName(petData)
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
      val newFileName = storageService.getPetFileName(newPetData)
      val newFile = File(targetFolder, newFileName)
      newFile.writeText(com.google.gson.GsonBuilder().setPrettyPrinting().create().toJson(newPetData))

      // ★ PetDataManagerのキャッシュを更新
      PetDataManager.savePet(targetUuid, newPetData)

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
    return when (command.name.lowercase()) {
      "bigwolfop" -> me.marzipan.OyasaiPets.commands.CommandTabCompleter.onTabCompleteOp(sender, args).toMutableList()
      "bigwolf" -> me.marzipan.OyasaiPets.commands.CommandTabCompleter.onTabCompletePlayer(args).toMutableList()
      else -> mutableListOf()
    }
  }



  // --- Events ---


















  // ★ 交配GUI処理

  // 交配実行
  private fun executeBreeding(player: Player, parent1: LivingEntity, parent2: LivingEntity) {
    // ★ ペット数制限チェック
    if (petSpawnSystem.countActivePets(player) >= BigWolfConfig.MAX_PET_COUNT) {
      player.sendMessage(Component.text("ペットは同時に${BigWolfConfig.MAX_PET_COUNT}匹までしか召喚できません！", RED))
      player.sendMessage(Component.text("他のペットを収納してから交配してください。", GRAY))
      return
    }

    // コスト確認
    val cost = BigWolfConfig.defaultShopCost
    if (!economySystem.consumeTokens(player, cost)) {
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

    petSpawnSystem.setupPetEntity(newEntity, spec, player)
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
        interactionService.updateStats(newEntity, bonusLevel, spec)
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
        PetDataManager.savePet(player.uniqueId, petData1)
      }
    }
    if (parent2Id != null) {
      val petData2 = PetDataManager.getPetData(player.uniqueId, parent2Id)
      if (petData2 != null) {
        petData2.breedCount = parent2.breedCount
        PetDataManager.savePet(player.uniqueId, petData2)
      }
    }

    // PetDataManagerに記録
    PetDataManager.recordBreeding(
      ownerUuid = player.uniqueId,
      petId = newPetId,
      type = type,
      variant = variant,
      customName = null,
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



  // --- Logic Methods ---



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
    if (petSpawnSystem.countActivePets(player) >= BigWolfConfig.MAX_PET_COUNT) {
      player.sendMessage(Component.text("ペットは同時に${BigWolfConfig.MAX_PET_COUNT}匹までしか召喚できません！", RED))
      return null
    }

    val spec = PetRegistry.get(type)
    val entity = player.world.spawnEntity(player.location.add(0.0, 1.0, 0.0), type) as? LivingEntity

    if (entity == null || !entity.isValid) {
      player.sendMessage(Component.text("この場所では召喚できません（保護されています）。", RED))
      return null
    }

    petSpawnSystem.setupPetEntity(entity, spec, player)

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

    interactionService.updateStats(entity, 0, spec)

    Bukkit.getScheduler()
        .runTaskLater(
            this,
            Runnable {
              if (entity.isValid) {
                entity.addPassenger(player)
                mountCooldowns[player.uniqueId] = System.currentTimeMillis()
                petControlSystem.startControlTask(player, entity)
              }
            },
            2L)

    player.sendMessage(Component.text("巨大な ${type.name} を召喚しました！", AQUA))
    return petId
  }



  private val KEY_STORED_STAT_BRUSHES = NamespacedKey(this, "stored_stat_brushes")
  private val KEY_STORED_STAT_TREATS = NamespacedKey(this, "stored_stat_treats")










  // --- Shop & Voucher Features ---


} // End of BigWolfPlugin class
