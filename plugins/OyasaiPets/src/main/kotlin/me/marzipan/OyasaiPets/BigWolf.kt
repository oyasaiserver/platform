package me.marzipan.OyasaiPets

import java.util.UUID
import me.marzipan.OyasaiPets.commands.CommandManager
import me.marzipan.OyasaiPets.commands.OpCommands
import me.marzipan.OyasaiPets.commands.PlayerCommands
import me.marzipan.OyasaiPets.domain.*
import me.marzipan.OyasaiPets.listeners.*
import me.marzipan.OyasaiPets.services.*
import me.marzipan.OyasaiPets.systems.*
import net.kyori.adventure.text.Component
import net.kyori.adventure.text.format.NamedTextColor.*
import org.bukkit.*
import org.bukkit.command.*
import org.bukkit.entity.*
import org.bukkit.inventory.*
import org.bukkit.persistence.PersistentDataType
import org.bukkit.plugin.java.JavaPlugin
import org.bukkit.scheduler.BukkitTask

class BigWolfPlugin : JavaPlugin(), CommandExecutor, TabCompleter {

  // システム層
  private val skillSystem = SkillSystem()
  private val guiManager = me.marzipan.OyasaiPets.gui.GuiManager()
  private lateinit var petSpawnSystem: PetSpawnSystem
  private lateinit var fetchSystem: FetchSystem
  private lateinit var breedingSystem: BreedingSystem
  private val shopSystem = ShopSystem()
  private lateinit var petControlSystem: PetControlSystem

  // 新しいサービス層
  private lateinit var economySystem: EconomySystem
  private val itemManagement = ItemManagementSystem()
  private lateinit var interactionService: PetInteractionService
  private lateinit var storageService: PetStorageService
  private lateinit var queryService: PetQueryService
  private lateinit var reviveService: PetReviveService
  private lateinit var transferService: TransferService
  private lateinit var petCommandService: PetCommandService
  private lateinit var petShopGuiService: PetShopGuiService
  private lateinit var commandManager: CommandManager

  private val guiTitle = Component.text("ペットステータス", BLACK)
  private val shopGuiTitle = Component.text("購入確認", BLACK)
  private val mainMenuTitle = Component.text("★ BigWolf メインメニュー", DARK_PURPLE)

  private val openedGuis = guiManager.openedPetGuis
  private val openedShopGuis = guiManager.openedShopGuis
  private val openedMainMenus = guiManager.openedMainMenus
  // --- shopremoveall 確認待ち管理 ---
  private val pendingRemoveAllConfirm = mutableMapOf<UUID, Long>()

  // Cooldowns & Tasks
  private val mountCooldowns = mutableMapOf<UUID, Long>()
  private val dropCooldowns = mutableMapOf<UUID, Long>()
  private val brushCooldowns = mutableMapOf<UUID, Long>() // ブラシ（撫でる）のクールダウン


  // タスク管理
  private val activeFetchTasks = mutableMapOf<UUID, BukkitTask>()

  override fun onEnable() {
    // プラグインバージョン情報をログ出力
    logger.info("========================================")
    logger.info("OyasaiPets (BigWolf) v${pluginMeta.version}")
    logger.info("Build Date: 2026-01-27")
    logger.info("Features: Breeding GUI v3, Variant Randomization, Config Auto-generation")
    logger.info("========================================")

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
    queryService = PetQueryService(economySystem, storageService)

    // Systems Init
    petControlSystem = PetControlSystem(this, interactionService::spawnParticles)
    server.pluginManager.registerEvents(petControlSystem, this)
    skillSystem.setDashCallback { player, endTime -> petControlSystem.setDashEndTime(player, endTime) }
    petSpawnSystem = PetSpawnSystem(
        this,
        mountCooldowns,
        { player, entity -> petControlSystem.startControlTask(player, entity) },
        { entity, level, spec -> interactionService.updateStats(entity, level, spec) }
    )
    reviveService = PetReviveService(this, economySystem, petSpawnSystem, interactionService)
    transferService = TransferService(this, storageService, logger)
    fetchSystem = FetchSystem(this, activeFetchTasks)
    breedingSystem = BreedingSystem(
        this,
        petSpawnSystem::countActivePets,
        { entity, spec, player -> storageService.setupPetEntity(entity, spec, player) },
        { entity, level, spec -> interactionService.updateStats(entity, level, spec) },
        { player, amount -> economySystem.consumeTokens(player, amount) }
    )
    petCommandService = PetCommandService(breedingSystem, logger)
    petShopGuiService = PetShopGuiService(
        { player, ctx, getTokens -> guiManager.openShopGui(player, ctx, getTokens) },
        economySystem::getPlayerTokens
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
      guiManager,
      fetchSystem,
      petControlSystem,
      mountCooldowns,
      interactionService::checkAndMigrateOwner,
      interactionService::isOwner,
      itemManagement::isPetFood,
      { player: Player, entity: LivingEntity -> interactionService.giveFood(player, entity, economySystem::consumeTokens) },
      itemManagement::isPetBrush,
      interactionService::useBrush,
      itemManagement::isPetTreat,
      interactionService::giveTreat,
      itemManagement::isPetHeal,
      interactionService::healPet,
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
          petSpawnSystem::countActivePets,
          { entity: LivingEntity, spec: PetSpec, p: Player -> storageService.setupPetEntity(entity, spec, p) },
          { entity: LivingEntity, level: Int, spec: PetSpec -> interactionService.updateStats(entity, level, spec) }
        )
      }
    )
    server.pluginManager.registerEvents(playerActionListener, this)

    val petInventoryListener = PetInventoryListener(
      logger,
      guiManager,
      petSpawnSystem,
      openedGuis,
      openedShopGuis,
      openedMainMenus,
      guiTitle,
      shopGuiTitle,
      mainMenuTitle,
      petCommandService.breedGuiTitle,
      economySystem::consumeTokens,
      { player: Player, entity: LivingEntity -> interactionService.giveFood(player, entity, economySystem::consumeTokens) },
      storageService::storePetToItem,
      storageService::storeAllPets,
      queryService::handleDeadPetsList,
      queryService::handlePetHistory,
      petCommandService::handleBreedCommand
    )
    server.pluginManager.registerEvents(petInventoryListener, this)

    // BreedGuiListener登録
    val breedGuiListener = BreedGuiListener(petCommandService, breedingSystem, breedingSystem::executeBreeding)
    server.pluginManager.registerEvents(breedGuiListener, this)
    petCommandService.breedGuiListener = breedGuiListener // 参照を設定

    // PetShopGuiListener登録
    val petShopGuiListener = PetShopGuiListener(petShopGuiService)
    server.pluginManager.registerEvents(petShopGuiListener, this)

    // PetLifecycleListener登録
    val petLifecycleListener = PetLifecycleListener(
      this,
      logger,
      storageService::storeAllPets
    )
    server.pluginManager.registerEvents(petLifecycleListener, this)

    // ShopListener登録
    val shopListener = ShopListener(shopSystem) { player, ctx ->
      guiManager.openShopGui(player, ctx, economySystem::getPlayerTokens)
    }
    server.pluginManager.registerEvents(shopListener, this)

    val playerCommands = PlayerCommands(
      this::openMainMenu,
      petShopGuiService::openMainShopGui,
      petShopGuiService::openPurchaseConfirmation,
      storageService::storeAllPets,
      reviveService::handleRevivePet,
      queryService::handleDeadPetsList,
      queryService::handlePetHistory,
      queryService::handleLocatePet,
      queryService::handleRecoverEgg,
      petCommandService::handleBreedCommand,
      petCommandService::handleRenameCommand,
      transferService::handleTransferCommand,
      this::handleNormalSummon,
      this::sendVersionInfo
    )
    val opCommands = OpCommands(
      this,
      shopSystem,
      petSpawnSystem::spawnAndMountEntity,
      itemManagement,
      this::showOpUsage,
      this::handleOpShopRemoveAll,
      this::handleForceStoreTarget,
      this::handleForceStoreAll,
      queryService::handlePetHistory
    )
    commandManager = CommandManager(playerCommands, opCommands)

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

    return commandManager.onCommand(sender, command, label, args)
  }

  private fun showOpUsage(player: Player) {
    player.sendMessage(Component.text("=== BigWolfOP 管理コマンド ===", GOLD))
    player.sendMessage(Component.text("/bigwolfop version - バージョン表示", YELLOW))
    player.sendMessage(Component.text("/bigwolfop reload - 設定リロード", YELLOW))
    player.sendMessage(Component.text("/bigwolfop item <種類> - アイテム配布", YELLOW))
    player.sendMessage(Component.text("/bigwolfop exp <mob> [variant] - 実験的召喚", YELLOW))
    player.sendMessage(Component.text("/bigwolfop shop <mob> [variant] [cost] [yaw] - ショップ設置", YELLOW))
    player.sendMessage(Component.text("/bigwolfop shopremove - ショップ削除", YELLOW))
    player.sendMessage(Component.text("/bigwolfop shopremoveall - 全ショップ削除", YELLOW))
    player.sendMessage(Component.text("/bigwolfop force_store - 強制収納", YELLOW))
    player.sendMessage(Component.text("/bigwolfop force_storeall <player> - 全強制収納", YELLOW))
    player.sendMessage(Component.text("/bigwolfop history <player> - 他人の履歴", YELLOW))
  }

  private fun sendVersionInfo(player: Player) {
    val version = pluginMeta.version
    player.sendMessage(Component.text("=== OyasaiPets (BigWolf) ===", GOLD))
    player.sendMessage(Component.text("Version: $version", YELLOW))
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
  // ★ 設定の初期化
  // ==========================================

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

  private fun handleNormalSummon(player: Player, sub: String, args: Array<out String>) {
    logger.warning("=== handleNormalSummon called ===")
    logger.warning("This should NOT happen for 'buy' command!")
    logger.warning("Sub: '$sub', Args: [${args.joinToString(", ")}]")

    // subがMOB名、args[1]がvariant
    val typeName = sub
    val variantArg = args.getOrNull(1)

    player.sendMessage(Component.text("ペット購入は /bigwolf buy を使用してください。", YELLOW))

    val type = runCatching { EntityType.valueOf(typeName.uppercase()) }.getOrNull()
    if (type == null) {
      player.sendMessage(Component.text("そのエンティティは見つかりません: $typeName", RED))
      return
    }

    if (!PetRegistry.isOfficial(type)) {
      player.sendMessage(Component.text("その${me.marzipan.OyasaiPets.i18n.MobTranslator.toJapanese(type)}は通常召喚できません。", RED))
      player.sendMessage(Component.text("実験的なMOBの召喚にはOP権限と /bigwolf exp コマンドが必要です。", GRAY))
      return
    }

    if (!type.isAlive) {
      player.sendMessage(Component.text("召喚できません。", RED))
      return
    }

    val variant = variantArg?.lowercase()
    val cost = BigWolfConfig.defaultShopCost

    // ショップGUIを開いて購入処理
    guiManager.openShopGui(player, ShopContext(type, variant, cost)) { p -> economySystem.getPlayerTokens(p) }
  }




  private fun openMainMenu(player: Player) {
    guiManager.openMainMenu(player)
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


















} // End of BigWolfPlugin class
