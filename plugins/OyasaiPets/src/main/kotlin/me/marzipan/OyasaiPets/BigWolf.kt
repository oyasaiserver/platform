@file:Suppress("DEPRECATION")

package me.marzipan.OyasaiPets

import java.io.File
import java.util.UUID
import java.util.concurrent.ConcurrentHashMap
import kotlin.random.Random
import net.kyori.adventure.text.Component
import net.kyori.adventure.text.format.NamedTextColor.*
import org.bukkit.*
import org.bukkit.command.*
import org.bukkit.entity.*
import org.bukkit.inventory.*
import org.bukkit.persistence.PersistentDataType
import org.bukkit.plugin.java.JavaPlugin
import org.bukkit.scheduler.BukkitRunnable
import org.bukkit.scheduler.BukkitTask

class BigWolfPlugin : JavaPlugin(), CommandExecutor, TabCompleter {

  // システム層
  private val skillSystem = SkillSystem()
  private val guiManager = GuiManager()
  private lateinit var petSpawnSystem: PetSpawnSystem
  private lateinit var fetchSystem: FetchSystem
  private lateinit var breedingSystem: BreedingSystem
  private val shopSystem = ShopSystem()
  private lateinit var petControlSystem: PetControlSystem
  private lateinit var childAISystem: ChildAISystem

  // 新しいサービス層
  private lateinit var economySystem: EconomySystem
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

  // Cooldowns & Tasks
  private val mountCooldowns = ConcurrentHashMap<UUID, Long>()
  private val dropCooldowns = ConcurrentHashMap<UUID, Long>()

  // タスク管理
  private val activeFetchTasks = ConcurrentHashMap<UUID, BukkitTask>()

  override fun onEnable() {
    // プラグインバージョン情報をログ出力
    logger.info("========================================")
    logger.info("OyasaiPets (BigWolf) v${pluginMeta.version}")
    logger.info("Build Date: 2026-03-10")
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

    // ChildAISystemを先に初期化（ペットスポーン登録コールバックに必要）
    childAISystem = ChildAISystem(this)

    // Systems Init
    petControlSystem =
        PetControlSystem(this) { entity, pt -> interactionService.spawnParticles(entity, pt) }
    server.pluginManager.registerEvents(petControlSystem, this)
    skillSystem.setDashCallback { player, endTime ->
      petControlSystem.setDashEndTime(player, endTime)
    }
    petSpawnSystem =
        PetSpawnSystem(
            this,
            mountCooldowns,
            { player, entity -> petControlSystem.startControlTask(player, entity) },
            { entity, level, spec -> interactionService.updateStats(entity, level, spec) },
            { entity, spec, player -> storageService.setupPetEntity(entity, spec, player) },
            this::registerPetToAI,
        )
    reviveService =
        PetReviveService(
            this,
            economySystem,
            petSpawnSystem::countActivePets,
            { entity, spec, player -> storageService.setupPetEntity(entity, spec, player) },
            interactionService,
            this::registerPetToAI,
        )
    transferService = TransferService(this, storageService, logger)
    fetchSystem = FetchSystem(this, activeFetchTasks)
    breedingSystem =
        BreedingSystem(
            this,
            petSpawnSystem::countActivePets,
            { entity, spec, player -> storageService.setupPetEntity(entity, spec, player) },
            { entity, level, spec -> interactionService.updateStats(entity, level, spec) },
            { player, amount -> economySystem.consumeTokens(player, amount) },
            this::registerPetToAI,
        )
    petCommandService = PetCommandService(breedingSystem, logger)
    petShopGuiService =
        PetShopGuiService(
            { player, ctx, getTokens -> guiManager.openShopGui(player, ctx, getTokens) },
            economySystem::getPlayerTokens,
        )

    // 子供AIシステムの開始（初期化はSystems Init前に実施済み）
    childAISystem.startGlobalAITask()

    // ペットのオーナー追従テレポート + 空中パロットのエフェクト起動（5秒ごと）
    object : BukkitRunnable() {
          override fun run() {
            for (entity in ActivePetRegistry.getAll()) {
              if (!entity.isValid) continue
              val isRidden = entity.passengers.isNotEmpty()

              // 空中パロットのエフェクト起動（騎乗中でない & エフェクト未起動の場合）
              if (
                  entity is Parrot &&
                      !isRidden &&
                      !entity.isOnGround &&
                      !entity.isInWater &&
                      !ParrotFloatEffectRegistry.isRunning(entity.uniqueId)
              ) {
                ParrotFloatEffectRegistry.start(this@BigWolfPlugin, entity, 400)
              }

              if (isRidden) continue // 騎乗中はテレポートスキップ
              val ownerId = ActivePetRegistry.getOwnerId(entity.uniqueId) ?: continue
              val ownerUuid = runCatching { UUID.fromString(ownerId) }.getOrNull() ?: continue
              val owner = Bukkit.getPlayer(ownerUuid) ?: continue
              if (owner.world != entity.world) continue
              if (entity.location.distance(owner.location) <= 20.0) continue
              // 安全な着地地点にテレポート
              val target =
                  SpawnUtils.findSafeSpawnLocation(
                      owner.location
                          .clone()
                          .add((Random.nextDouble() * 4 - 2), 0.0, (Random.nextDouble() * 4 - 2))
                  )
              entity.teleport(target)
              if (entity is Parrot && !entity.isOnGround) {
                ParrotFloatEffectRegistry.start(this@BigWolfPlugin, entity, 400)
              }
            }
          }
        }
        .runTaskTimer(this, 100L, 100L) // 5秒ごとにチェック

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
    val petEventListener = PetEventListener(dropCooldowns, activeFetchTasks)
    server.pluginManager.registerEvents(petEventListener, this)

    val petInteractionListener =
        PetInteractionListener(
            guiManager,
            fetchSystem,
            petControlSystem,
            mountCooldowns,
            interactionService::checkAndMigrateOwner,
            interactionService::isOwner,
            PetItemFactory::isPetFood,
            { player: Player, entity: LivingEntity ->
              interactionService.giveFood(player, entity, economySystem::consumeTokens)
            },
            PetItemFactory::isPetBrush,
            interactionService::useBrush,
            PetItemFactory::isPetTreat,
            interactionService::giveTreat,
            PetItemFactory::isPetHeal,
            interactionService::healPet,
            PetItemFactory::getUnlockItemLevel,
            { player: Player, entity: LivingEntity, item: ItemStack, level: Int ->
              interactionService.handleSkillUnlock(
                  player,
                  entity,
                  item,
                  level,
                  economySystem::consumeTokens,
              )
            },
            PetItemFactory::isParticleUnlockItem,
            interactionService::handleParticleUnlock,
        )
    server.pluginManager.registerEvents(petInteractionListener, this)

    val playerActionListener =
        PlayerActionListener(
            this,
            fetchSystem,
            petSpawnSystem,
            skillSystem,
            dropCooldowns,
            mountCooldowns,
            interactionService::isOwner,
            { player: Player, item: ItemStack, loc: Location ->
              storageService.restorePetFromItem(
                  player,
                  item,
                  loc,
                  petSpawnSystem::countActivePets,
                  { entity: LivingEntity, spec: PetSpec, p: Player ->
                    storageService.setupPetEntity(entity, spec, p)
                  },
                  { entity: LivingEntity, level: Int, spec: PetSpec ->
                    interactionService.updateStats(entity, level, spec)
                  },
                  this::registerPetToAI,
              )
            },
        )
    server.pluginManager.registerEvents(playerActionListener, this)

    val petInventoryListener =
        PetInventoryListener(
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
            economySystem::refundTokens,
            { player: Player, entity: LivingEntity ->
              interactionService.giveFood(player, entity, economySystem::consumeTokens)
            },
            storageService::storePetToItem,
            storageService::storeAllPets,
            petCommandService::handleBreedCommand,
            petShopGuiService::openMainShopGui,
        )
    server.pluginManager.registerEvents(petInventoryListener, this)

    val petListGuiListener = PetListGuiListener(guiManager)
    server.pluginManager.registerEvents(petListGuiListener, this)

    val petDetailGuiListener =
        PetDetailGuiListener(
            guiManager,
            reviveService::handleRevivePet,
            queryService::handleRecoverEgg,
            storageService::storePetToItem,
            this::executePetAbandon,
        )
    server.pluginManager.registerEvents(petDetailGuiListener, this)

    val abandonConfirmGuiListener = AbandonConfirmGuiListener(guiManager, this::executePetAbandon)
    server.pluginManager.registerEvents(abandonConfirmGuiListener, this)

    // BreedGuiListener登録
    val breedGuiListener =
        BreedGuiListener(petCommandService, breedingSystem::executeBreeding, this::openMainMenu)
    server.pluginManager.registerEvents(breedGuiListener, this)
    petCommandService.breedGuiListener = breedGuiListener // 参照を設定

    // PetShopGuiListener登録
    val petShopGuiListener =
        PetShopGuiListener(petShopGuiService, this::openMainMenu, economySystem::consumeTokens)
    server.pluginManager.registerEvents(petShopGuiListener, this)

    // PetLifecycleListener登録
    val petLifecycleListener =
        PetLifecycleListener(
            this,
            logger,
            { player ->
              // フェッチタスクをキャンセル（storeAllPets でエンティティが消える前に行う）
              for (entity in ActivePetRegistry.getByOwner(player.uniqueId.toString())) {
                fetchSystem.stopFetchTask(entity)
              }
              storageService.storeAllPets(player)
              skillSystem.cleanup(player.uniqueId)
              interactionService.cleanupPlayer(player.uniqueId)
              PetDataManager.clearPlayerCache(player.uniqueId)
              mountCooldowns.remove(player.uniqueId)
              dropCooldowns.remove(player.uniqueId)
              PetDebugger.disable(player.uniqueId)
            },
        )
    server.pluginManager.registerEvents(petLifecycleListener, this)

    // ShopListener登録
    val shopListener =
        ShopListener(shopSystem) { player, ctx ->
          guiManager.openShopGui(player, ctx, economySystem::getPlayerTokens)
        }
    server.pluginManager.registerEvents(shopListener, this)

    val playerCommands =
        PlayerCommands(
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
            this::sendVersionInfo,
            this::handleAbandonCommand,
            queryService::handlePetDetail,
            { player, filter -> guiManager.openPetListGui(player, player.uniqueId, filter) },
        )
    val opCommands =
        OpCommands(
            this,
            this::showOpUsage,
            this::handleForceStoreTarget,
            this::handleForceStoreAll,
            queryService::handlePetHistory,
        )
    commandManager = CommandManager(playerCommands, opCommands)

    logger.info("BigWolfPlugin enabled with TokenManager integration")
  }

  override fun onDisable() {
    // 子供AIシステムのクリーンアップ
    if (::childAISystem.isInitialized) {
      childAISystem.cleanup()
    }
    // 騎乗制御タスクの全停止
    if (::petControlSystem.isInitialized) {
      petControlSystem.clearAllTasks()
    }
    // アクティブペットレジストリをリセット
    ActivePetRegistry.clear()
    PetDebugger.clear()
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
    player.sendMessage(Component.text("/bigwolfop force_store - 強制収納", YELLOW))
    player.sendMessage(Component.text("/bigwolfop force_storeall <player> - 全強制収納", YELLOW))
    player.sendMessage(Component.text("/bigwolfop history <player> - 他人の履歴", YELLOW))
    player.sendMessage(
        Component.text("/bigwolfop debug_egg <mob> [key=value ...] - デバッグ用スポーンエッグ生成", YELLOW)
    )
    player.sendMessage(
        Component.text(
            "/bigwolfop config [list|get <key>|set <key> <value>|mob <mob> ...] - コンフィグ編集",
            YELLOW,
        )
    )
  }

  private fun sendVersionInfo(player: Player) {
    val version = pluginMeta.version
    player.sendMessage(Component.text("=== OyasaiPets (BigWolf) ===", GOLD))
    player.sendMessage(Component.text("Version: $version", YELLOW))
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
    ActivePetRegistry.unregister(target.uniqueId)
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

    for (entity in ActivePetRegistry.getByOwner(targetIdStr)) {
      val item = storageService.createStoredPetItem(entity)
      itemsToGive.add(item)
      entity.world.spawnParticle(Particle.POOF, entity.location, 10, 0.5, 0.5, 0.5, 0.0)
      ActivePetRegistry.unregister(entity.uniqueId)
      entity.remove()
      count++
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
      player.sendMessage(Component.text("その${MobTranslator.toJapanese(type)}は通常召喚できません。", RED))
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
    guiManager.openShopGui(player, ShopContext(type, variant, cost)) { p ->
      economySystem.getPlayerTokens(p)
    }
  }

  /** 召喚されたペットエンティティをActivePetRegistryに登録 */
  private fun registerPetToAI(entity: LivingEntity) {
    ActivePetRegistry.register(entity)
  }

  private fun handleAbandonCommand(player: Player, args: Array<out String>) {
    if (args.size < 2) {
      player.sendMessage(Component.text("使い方: /bigwolf abandon <ペット番号>", RED))
      return
    }
    val petNumber = args[1].toIntOrNull()
    if (petNumber == null) {
      player.sendMessage(Component.text("ペット番号は数字で入力してください。", RED))
      return
    }
    val petData = PetDataManager.getAllPets(player.uniqueId).find { it.petNumber == petNumber }
    if (petData == null) {
      player.sendMessage(Component.text("ペット番号 $petNumber が見つかりません。", RED))
      return
    }
    if (petData.status == PetStatus.DEAD) {
      player.sendMessage(Component.text("死亡したペットは放棄できません。", RED))
      return
    }
    guiManager.openAbandonConfirmGui(player, petData)
  }

  private fun executePetAbandon(player: Player, petData: PetData) {
    val ownerUuid = player.uniqueId
    val petId = petData.petId

    // 1. エンティティが召喚中の場合は削除
    if (petData.status == PetStatus.ALIVE) {
      val entity = ActivePetRegistry.findByPetId(petId)
      if (entity != null) {
        ActivePetRegistry.unregister(entity.uniqueId)
        entity.remove()
      }
    }

    // 2. インベントリ内の同一petIdを持つエッグを全て削除（複製対策）
    if (petData.status == PetStatus.STORED) {
      for (item in player.inventory.contents) {
        val storedId =
            item
                ?.itemMeta
                ?.persistentDataContainer
                ?.get(BigWolfKeys.STORED_ID, PersistentDataType.STRING)
        if (storedId == petId) {
          item.amount = 0
        }
      }
    }

    // 3. JSONをアーカイブとしてコピー
    val number = petData.petNumber.toString().padStart(3, '0')
    val variantSuffix = petData.variant?.let { "_$it" } ?: ""
    val fileName = "${number}_${petData.type}${variantSuffix}.json"
    val petFile = File(dataFolder, "players/${ownerUuid}/$fileName")
    if (petFile.exists()) {
      val archiveFolder = File(dataFolder, "players_archive/${ownerUuid}")
      archiveFolder.mkdirs()
      petFile.copyTo(File(archiveFolder, fileName), overwrite = true)
    }

    // 4. PetDataManagerから削除
    PetDataManager.removePetFromCache(ownerUuid, petId)

    // 5. 通知
    val name = petData.customName ?: petData.type
    player.sendMessage(Component.text("ペット「$name」を放棄しました。", YELLOW))
    player.playSound(player.location, Sound.ENTITY_ITEM_BREAK, 1f, 0.5f)
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
      "bigwolfop" -> CommandTabCompleter.onTabCompleteOp(sender, args).toMutableList()
      "bigwolf" -> CommandTabCompleter.onTabCompletePlayer(args).toMutableList()
      else -> mutableListOf()
    }
  }
}
