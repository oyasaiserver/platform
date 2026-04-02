// Auto-generated mega file combining legacy OyasaiPets sources
@file:Suppress("DEPRECATION")

package me.marzipan.OyasaiPets

import com.google.gson.Gson
import com.google.gson.GsonBuilder
import io.papermc.paper.entity.LookAnchor
import io.papermc.paper.registry.RegistryAccess
import io.papermc.paper.registry.RegistryKey
import java.io.File
import java.time.LocalDateTime
import java.time.format.DateTimeFormatter
import java.util.Locale
import java.util.UUID
import java.util.concurrent.ConcurrentHashMap
import java.util.logging.Logger
import kotlin.random.Random
import me.realized.tm.api.TMAPI
import net.kyori.adventure.text.Component
import net.kyori.adventure.text.event.ClickEvent
import net.kyori.adventure.text.format.NamedTextColor
import net.kyori.adventure.text.format.NamedTextColor.*
import net.kyori.adventure.text.serializer.legacy.LegacyComponentSerializer
import net.kyori.adventure.text.serializer.plain.PlainTextComponentSerializer
import org.bukkit.*
import org.bukkit.attribute.Attribute
import org.bukkit.block.BlockFace
import org.bukkit.command.*
import org.bukkit.configuration.file.FileConfiguration
import org.bukkit.enchantments.Enchantment
import org.bukkit.entity.*
import org.bukkit.event.EventHandler
import org.bukkit.event.Listener
import org.bukkit.event.block.Action
import org.bukkit.event.entity.EntityDamageEvent
import org.bukkit.event.entity.EntityDeathEvent
import org.bukkit.event.entity.EntityDismountEvent
import org.bukkit.event.entity.EntityMountEvent
import org.bukkit.event.entity.EntityTeleportEvent
import org.bukkit.event.inventory.InventoryClickEvent
import org.bukkit.event.inventory.InventoryCloseEvent
import org.bukkit.event.player.PlayerDropItemEvent
import org.bukkit.event.player.PlayerFishEvent
import org.bukkit.event.player.PlayerInteractEntityEvent
import org.bukkit.event.player.PlayerInteractEvent
import org.bukkit.event.player.PlayerQuitEvent
import org.bukkit.inventory.*
import org.bukkit.persistence.PersistentDataType
import org.bukkit.plugin.Plugin
import org.bukkit.plugin.java.JavaPlugin
import org.bukkit.scheduler.BukkitRunnable
import org.bukkit.scheduler.BukkitTask
import org.bukkit.util.Vector

// ===== ファイル共通ユーティリティ =====
/** PlainTextComponentSerializer のシングルトンキャッシュ（毎回生成しない） */
private val PLAIN_TEXT: PlainTextComponentSerializer = PlainTextComponentSerializer.plainText()
/** LegacyComponentSerializer (ampersand) のシングルトンキャッシュ */
private val LEGACY_AMP: LegacyComponentSerializer = LegacyComponentSerializer.legacyAmpersand()

// ===== File: BigWolf.kt =====
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
  // --- shopremoveall 確認待ち管理 ---
  // --- abandon 確認待ち管理 ---
  private val pendingAbandonConfirm = ConcurrentHashMap<UUID, Pair<Int, Long>>()

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
            this::registerPetToAI)
    reviveService =
        PetReviveService(
            this,
            economySystem,
            petSpawnSystem::countActivePets,
            { entity, spec, player -> storageService.setupPetEntity(entity, spec, player) },
            interactionService,
            this::registerPetToAI)
    transferService = TransferService(this, storageService, logger)
    fetchSystem = FetchSystem(this, activeFetchTasks)
    breedingSystem =
        BreedingSystem(
            this,
            petSpawnSystem::countActivePets,
            { entity, spec, player -> storageService.setupPetEntity(entity, spec, player) },
            { entity, level, spec -> interactionService.updateStats(entity, level, spec) },
            { player, amount -> economySystem.consumeTokens(player, amount) },
            this::registerPetToAI)
    petCommandService = PetCommandService(breedingSystem, logger)
    petShopGuiService =
        PetShopGuiService(
            { player, ctx, getTokens -> guiManager.openShopGui(player, ctx, getTokens) },
            economySystem::getPlayerTokens)

    // 子供AIシステムの開始（初期化はSystems Init前に実施済み）
    childAISystem.startGlobalAITask()

    // ペットのオーナー追従テレポート + 空中パロットのエフェクト起動（5秒ごと）
    object : BukkitRunnable() {
          override fun run() {
            for (entity in ActivePetRegistry.getAll()) {
              if (!entity.isValid) continue
              val isRidden = entity.passengers.isNotEmpty()

              // 空中パロットのエフェクト起動（騎乗中でない & エフェクト未起動の場合）
              if (entity is Parrot &&
                  !isRidden &&
                  !entity.isOnGround &&
                  !entity.isInWater &&
                  !ParrotFloatEffectRegistry.isRunning(entity.uniqueId)) {
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
                          .add((Random.nextDouble() * 4 - 2), 0.0, (Random.nextDouble() * 4 - 2)))
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
                  player, entity, item, level, economySystem::consumeTokens)
            },
            PetItemFactory::isParticleUnlockItem,
            interactionService::handleParticleUnlock)
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
                  this::registerPetToAI)
            })
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
            petShopGuiService::openMainShopGui)
    server.pluginManager.registerEvents(petInventoryListener, this)

    val petListGuiListener = PetListGuiListener(guiManager)
    server.pluginManager.registerEvents(petListGuiListener, this)

    val petDetailGuiListener =
        PetDetailGuiListener(
            guiManager,
            reviveService::handleRevivePet,
            queryService::handleRecoverEgg,
            storageService::storePetToItem,
            this::executePetAbandon)
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
              pendingAbandonConfirm.remove(player.uniqueId)
              PetDebugger.disable(player.uniqueId)
            })
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
            { player, filter -> guiManager.openPetListGui(player, player.uniqueId, filter) })
    val opCommands =
        OpCommands(
            this,
            this::showOpUsage,
            this::handleForceStoreTarget,
            this::handleForceStoreAll,
            queryService::handlePetHistory)
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
        Component.text("/bigwolfop debug_egg <mob> [key=value ...] - デバッグ用スポーンエッグ生成", YELLOW))
    player.sendMessage(
        Component.text(
            "/bigwolfop config [list|get <key>|set <key> <value>|mob <mob> ...] - コンフィグ編集", YELLOW))
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

// ===== File: BigWolfConfig.kt =====
/** BigWolfプラグインの設定管理クラス */
object BigWolfConfig {
  // ペット設定
  var maxFoodLevel = 50
  var foodPointCost = 10

  // ショップ設定
  var defaultShopCost = 100

  // スキルブック設定
  var skillBookShopCostLv1 = 50
  var skillBookShopCostLv2 = 100
  var skillBookShopCostLv3 = 150
  var skillBookUseCostLv1 = 50
  var skillBookUseCostLv2 = 100
  var skillBookUseCostLv3 = 150

  // 復活設定
  var reviveCost = 50

  // 交配設定
  var breedMinLevel = 10
  var breedCost = 100
  var maxBreedCount = 3
  var breedRandomMin = 0.9
  var breedRandomMax = 1.1
  var breedGenBonusPerGen = 0.02
  var breedGenBonusMax = 0.2
  var breedMutationChance = 0.1
  var breedMutationBoost = 0.15
  var breedStatCap = 1.5
  var breedBonusLevelPerGen = 1
  var breedBonusLevelMax = 5

  // 交配バリアント確率設定
  // 親のバリアントが選ばれる重み（デフォルト: 7）
  // 親1と親2のバリアントがそれぞれこの重みで候補に追加される
  var breedParentVariantWeight = 7

  // その他のバリアントが選ばれる重み（デフォルト: 3）
  // 親以外の各バリアントがこの重みで候補に追加される
  var breedOtherVariantWeight = 3

  // 復旧設定
  var recoverCost = 50

  // 遊びでのレベルアップ設定
  var playLevelUpChance = 0.05
  var playLevelUpMaxLevel = 10
  var healItemAmount = 10

  // アイテムショップ価格
  var itemShopPetFoodCost = 20
  var itemShopPetBrushCost = 15
  var itemShopPetTreatCost = 15
  var itemShopHealPotionCost = 30
  var itemShopParticleCost = 200
  var itemShopToyCost = 50

  // ペットスポーン時AI設定
  var spawnAiEnabled = true

  // ペット自由移動時の速度倍率（1.0 = デフォルト、0.5 = 半分の速度）
  var freeRoamSpeedMultiplier = 0.5
  // 飛行MOBのフリーローム速度倍率（MOVEMENT_SPEED・FLYING_SPEED 両方に適用）
  var freeRoamFlyingSpeedMultiplier = 0.5

  // 性質（定型/非定型）設定
  var atypicalBaseChance = 0.07 // 基本確率 7%
  var atypicalOneParentChance = 0.15 // 片親非定型 15%
  var atypicalBothParentChance = 0.35 // 両親非定型 35%
  var atypicalLevelUpBonus = 1.5 // レベルアップ確率倍率
  var atypicalAffectionBonus = 1.3 // 親密度上昇倍率
  var childAiEnabled = true // 子供AI有効化

  // システム設定
  const val SKILL_COOLDOWN_MS = 5000L
  const val MAX_PET_COUNT = 3

  /** config.ymlから設定を読み込む */
  fun loadFrom(config: FileConfiguration) {
    // 経済設定
    foodPointCost = config.getInt("economy.foodPointCost", foodPointCost)

    // ペット設定
    maxFoodLevel = config.getInt("pets.maxFoodLevel", maxFoodLevel)

    // ショップ設定
    defaultShopCost = config.getInt("shop.defaultCost", defaultShopCost)

    // スキルブック設定（購入/使用で別コスト対応）
    val legacySkillCostLv1 = config.getInt("skillbook.costLv1", skillBookShopCostLv1)
    val legacySkillCostLv2 = config.getInt("skillbook.costLv2", skillBookShopCostLv2)
    val legacySkillCostLv3 = config.getInt("skillbook.costLv3", skillBookShopCostLv3)
    skillBookShopCostLv1 = config.getInt("skillbook.shopCostLv1", legacySkillCostLv1)
    skillBookShopCostLv2 = config.getInt("skillbook.shopCostLv2", legacySkillCostLv2)
    skillBookShopCostLv3 = config.getInt("skillbook.shopCostLv3", legacySkillCostLv3)
    skillBookUseCostLv1 = config.getInt("skillbook.useCostLv1", legacySkillCostLv1)
    skillBookUseCostLv2 = config.getInt("skillbook.useCostLv2", legacySkillCostLv2)
    skillBookUseCostLv3 = config.getInt("skillbook.useCostLv3", legacySkillCostLv3)

    // 復活設定
    reviveCost = config.getInt("revive.cost", reviveCost)

    // 回復設定
    recoverCost = config.getInt("recover.cost", recoverCost)

    // アイテム設定
    healItemAmount = config.getInt("items.healAmount", healItemAmount)

    // アイテムショップ価格
    itemShopPetFoodCost = config.getInt("itemshop.petFoodCost", itemShopPetFoodCost)
    itemShopPetBrushCost = config.getInt("itemshop.petBrushCost", itemShopPetBrushCost)
    itemShopPetTreatCost = config.getInt("itemshop.petTreatCost", itemShopPetTreatCost)
    itemShopHealPotionCost = config.getInt("itemshop.healPotionCost", itemShopHealPotionCost)
    itemShopParticleCost = config.getInt("itemshop.particleCost", itemShopParticleCost)
    itemShopToyCost = config.getInt("itemshop.toyCost", itemShopToyCost)

    // 遊び機能設定
    playLevelUpChance = config.getDouble("play.levelUpChance", playLevelUpChance)
    playLevelUpMaxLevel = config.getInt("play.levelUpMaxLevel", playLevelUpMaxLevel)

    // ペットスポーン時AI設定
    spawnAiEnabled = config.getBoolean("pets.spawnAiEnabled", spawnAiEnabled)

    // ペット自由移動時の速度倍率
    freeRoamSpeedMultiplier =
        config.getDouble("pets.freeRoamSpeedMultiplier", freeRoamSpeedMultiplier)
    freeRoamFlyingSpeedMultiplier =
        config.getDouble("pets.freeRoamFlyingSpeedMultiplier", freeRoamFlyingSpeedMultiplier)

    // 交配設定
    breedMinLevel = config.getInt("breed.minLevel", breedMinLevel)
    breedCost = config.getInt("breed.cost", breedCost)
    maxBreedCount = config.getInt("breed.maxCount", maxBreedCount)
    breedRandomMin = config.getDouble("breed.randomMin", breedRandomMin)
    breedRandomMax = config.getDouble("breed.randomMax", breedRandomMax)
    breedGenBonusPerGen = config.getDouble("breed.genBonusPerGen", breedGenBonusPerGen)
    breedGenBonusMax = config.getDouble("breed.genBonusMax", breedGenBonusMax)
    breedMutationChance = config.getDouble("breed.mutationChance", breedMutationChance)
    breedMutationBoost = config.getDouble("breed.mutationBoost", breedMutationBoost)
    breedStatCap = config.getDouble("breed.statCap", breedStatCap)
    breedBonusLevelPerGen = config.getInt("breed.bonusLevelPerGen", breedBonusLevelPerGen)
    breedBonusLevelMax = config.getInt("breed.bonusLevelMax", breedBonusLevelMax)

    // バリアント遺伝確率設定
    breedParentVariantWeight =
        config.getInt("breed.variantWeights.parent", breedParentVariantWeight)
    breedOtherVariantWeight = config.getInt("breed.variantWeights.other", breedOtherVariantWeight)

    // 性質設定
    atypicalBaseChance = config.getDouble("traits.atypicalBaseChance", atypicalBaseChance)
    atypicalOneParentChance =
        config.getDouble("traits.atypicalOneParentChance", atypicalOneParentChance)
    atypicalBothParentChance =
        config.getDouble("traits.atypicalBothParentChance", atypicalBothParentChance)
    atypicalLevelUpBonus = config.getDouble("traits.atypicalLevelUpBonus", atypicalLevelUpBonus)
    atypicalAffectionBonus =
        config.getDouble("traits.atypicalAffectionBonus", atypicalAffectionBonus)
    childAiEnabled = config.getBoolean("traits.childAiEnabled", childAiEnabled)
  }

  /** config.ymlにデフォルト値を設定 */
  fun applyDefaultsTo(config: FileConfiguration) {
    // 経済設定
    config.addDefault("economy.foodPointCost", foodPointCost)

    // ペット設定
    config.addDefault("pets.maxFoodLevel", maxFoodLevel)

    // ショップ設定
    config.addDefault("shop.defaultCost", defaultShopCost)

    // スキルブック設定
    // 旧キー（costLv*）は互換性維持のため残しつつ、新しいshop/useキーも設定
    config.addDefault("skillbook.costLv1", skillBookShopCostLv1)
    config.addDefault("skillbook.costLv2", skillBookShopCostLv2)
    config.addDefault("skillbook.costLv3", skillBookShopCostLv3)
    config.addDefault("skillbook.shopCostLv1", skillBookShopCostLv1)
    config.addDefault("skillbook.shopCostLv2", skillBookShopCostLv2)
    config.addDefault("skillbook.shopCostLv3", skillBookShopCostLv3)
    config.addDefault("skillbook.useCostLv1", skillBookUseCostLv1)
    config.addDefault("skillbook.useCostLv2", skillBookUseCostLv2)
    config.addDefault("skillbook.useCostLv3", skillBookUseCostLv3)

    // 復活設定
    config.addDefault("revive.cost", reviveCost)

    // 回復設定
    config.addDefault("recover.cost", recoverCost)

    // アイテム設定
    config.addDefault("items.healAmount", healItemAmount)

    // アイテムショップ価格
    config.addDefault("itemshop.petFoodCost", itemShopPetFoodCost)
    config.addDefault("itemshop.petBrushCost", itemShopPetBrushCost)
    config.addDefault("itemshop.petTreatCost", itemShopPetTreatCost)
    config.addDefault("itemshop.healPotionCost", itemShopHealPotionCost)
    config.addDefault("itemshop.particleCost", itemShopParticleCost)
    config.addDefault("itemshop.toyCost", itemShopToyCost)

    // 遊び機能設定
    config.addDefault("play.levelUpChance", playLevelUpChance)
    config.addDefault("play.levelUpMaxLevel", playLevelUpMaxLevel)

    // ペットスポーン時AI設定
    config.addDefault("pets.spawnAiEnabled", spawnAiEnabled)

    // ペット自由移動時の速度倍率
    config.addDefault("pets.freeRoamSpeedMultiplier", freeRoamSpeedMultiplier)
    config.addDefault("pets.freeRoamFlyingSpeedMultiplier", freeRoamFlyingSpeedMultiplier)

    // 交配設定
    config.addDefault("breed.minLevel", breedMinLevel)
    config.addDefault("breed.cost", breedCost)
    config.addDefault("breed.maxCount", maxBreedCount)
    config.addDefault("breed.randomMin", breedRandomMin)
    config.addDefault("breed.randomMax", breedRandomMax)
    config.addDefault("breed.genBonusPerGen", breedGenBonusPerGen)
    config.addDefault("breed.genBonusMax", breedGenBonusMax)
    config.addDefault("breed.mutationChance", breedMutationChance)
    config.addDefault("breed.mutationBoost", breedMutationBoost)
    config.addDefault("breed.statCap", breedStatCap)
    config.addDefault("breed.bonusLevelPerGen", breedBonusLevelPerGen)
    config.addDefault("breed.bonusLevelMax", breedBonusLevelMax)

    // バリアント遺伝確率設定
    // parent: 親のバリアントが選ばれる重み（デフォルト: 7）
    // other: その他のバリアントが選ばれる重み（デフォルト: 3）
    //
    // 計算例（オオカミ9種類, parent=7, other=3 の場合）:
    //   親1: 7個, 親2: 7個, その他7種: 各3個
    //   合計: 35個 → 親1=20%, 親2=20%, その他各=8.6%
    //
    // 設定例:
    //   parent=10, other=0  : 親のバリアントのみ（100%遺伝）
    //   parent=7,  other=3  : デフォルト（親40%, その他60%）
    //   parent=5,  other=5  : 均等（各約11%）
    //   parent=0,  other=10 : 完全ランダム
    config.addDefault("breed.variantWeights.parent", breedParentVariantWeight)
    config.addDefault("breed.variantWeights.other", breedOtherVariantWeight)

    // 性質設定
    config.addDefault("traits.atypicalBaseChance", atypicalBaseChance)
    config.addDefault("traits.atypicalOneParentChance", atypicalOneParentChance)
    config.addDefault("traits.atypicalBothParentChance", atypicalBothParentChance)
    config.addDefault("traits.atypicalLevelUpBonus", atypicalLevelUpBonus)
    config.addDefault("traits.atypicalAffectionBonus", atypicalAffectionBonus)
    config.addDefault("traits.childAiEnabled", childAiEnabled)
  }

  /** スキルブック購入時のコスト */
  fun getSkillBookShopCost(level: Int): Int =
      when (level) {
        1 -> skillBookShopCostLv1
        2 -> skillBookShopCostLv2
        3 -> skillBookShopCostLv3
        else -> 0
      }

  /** スキルブック使用時のコスト */
  fun getSkillBookUseCost(level: Int): Int =
      when (level) {
        1 -> skillBookUseCostLv1
        2 -> skillBookUseCostLv2
        3 -> skillBookUseCostLv3
        else -> 0
      }

  @Deprecated("Use getSkillBookShopCost or getSkillBookUseCost instead", replaceWith = ReplaceWith("getSkillBookUseCost(level)"))
  fun getSkillBookCost(level: Int): Int = getSkillBookUseCost(level)

  /** 全コンフィグキーと現在値のリストを返す */
  fun asEntryList(): List<Pair<String, Any>> =
      listOf(
          "foodPointCost" to foodPointCost,
          "maxFoodLevel" to maxFoodLevel,
          "defaultShopCost" to defaultShopCost,
          "skillBookShopCostLv1" to skillBookShopCostLv1,
          "skillBookShopCostLv2" to skillBookShopCostLv2,
          "skillBookShopCostLv3" to skillBookShopCostLv3,
          "skillBookUseCostLv1" to skillBookUseCostLv1,
          "skillBookUseCostLv2" to skillBookUseCostLv2,
          "skillBookUseCostLv3" to skillBookUseCostLv3,
          "reviveCost" to reviveCost,
          "recoverCost" to recoverCost,
          "healItemAmount" to healItemAmount,
          "breedMinLevel" to breedMinLevel,
          "breedCost" to breedCost,
          "maxBreedCount" to maxBreedCount,
          "breedRandomMin" to breedRandomMin,
          "breedRandomMax" to breedRandomMax,
          "breedGenBonusPerGen" to breedGenBonusPerGen,
          "breedGenBonusMax" to breedGenBonusMax,
          "breedMutationChance" to breedMutationChance,
          "breedMutationBoost" to breedMutationBoost,
          "breedStatCap" to breedStatCap,
          "breedBonusLevelPerGen" to breedBonusLevelPerGen,
          "breedBonusLevelMax" to breedBonusLevelMax,
          "breedParentVariantWeight" to breedParentVariantWeight,
          "breedOtherVariantWeight" to breedOtherVariantWeight,
          "playLevelUpChance" to playLevelUpChance,
          "playLevelUpMaxLevel" to playLevelUpMaxLevel,
          "spawnAiEnabled" to spawnAiEnabled,
          "freeRoamSpeedMultiplier" to freeRoamSpeedMultiplier,
          "freeRoamFlyingSpeedMultiplier" to freeRoamFlyingSpeedMultiplier,
          "atypicalBaseChance" to atypicalBaseChance,
          "atypicalOneParentChance" to atypicalOneParentChance,
          "atypicalBothParentChance" to atypicalBothParentChance,
          "atypicalLevelUpBonus" to atypicalLevelUpBonus,
          "atypicalAffectionBonus" to atypicalAffectionBonus,
          "childAiEnabled" to childAiEnabled,
      )

  /** キー名から現在値を取得 */
  fun getField(key: String): Any? =
      when (key) {
        "skillBookCostLv1" -> skillBookUseCostLv1
        "skillBookCostLv2" -> skillBookUseCostLv2
        "skillBookCostLv3" -> skillBookUseCostLv3
        else -> asEntryList().find { it.first == key }?.second
      }

  /** キー名と文字列値でコンフィグを変更（成功時true） */
  fun setField(key: String, raw: String): Boolean =
      when (key) {
        "foodPointCost" -> raw.toIntOrNull()?.also { foodPointCost = it } != null
        "maxFoodLevel" -> raw.toIntOrNull()?.also { maxFoodLevel = it } != null
        "defaultShopCost" -> raw.toIntOrNull()?.also { defaultShopCost = it } != null
        "skillBookShopCostLv1" -> raw.toIntOrNull()?.also { skillBookShopCostLv1 = it } != null
        "skillBookShopCostLv2" -> raw.toIntOrNull()?.also { skillBookShopCostLv2 = it } != null
        "skillBookShopCostLv3" -> raw.toIntOrNull()?.also { skillBookShopCostLv3 = it } != null
        "skillBookUseCostLv1" -> raw.toIntOrNull()?.also { skillBookUseCostLv1 = it } != null
        "skillBookUseCostLv2" -> raw.toIntOrNull()?.also { skillBookUseCostLv2 = it } != null
        "skillBookUseCostLv3" -> raw.toIntOrNull()?.also { skillBookUseCostLv3 = it } != null
        "skillBookCostLv1" ->
            raw.toIntOrNull()?.also {
              skillBookShopCostLv1 = it
              skillBookUseCostLv1 = it
            } != null
        "skillBookCostLv2" ->
            raw.toIntOrNull()?.also {
              skillBookShopCostLv2 = it
              skillBookUseCostLv2 = it
            } != null
        "skillBookCostLv3" ->
            raw.toIntOrNull()?.also {
              skillBookShopCostLv3 = it
              skillBookUseCostLv3 = it
            } != null
        "reviveCost" -> raw.toIntOrNull()?.also { reviveCost = it } != null
        "recoverCost" -> raw.toIntOrNull()?.also { recoverCost = it } != null
        "healItemAmount" -> raw.toIntOrNull()?.also { healItemAmount = it } != null
        "breedMinLevel" -> raw.toIntOrNull()?.also { breedMinLevel = it } != null
        "breedCost" -> raw.toIntOrNull()?.also { breedCost = it } != null
        "maxBreedCount" -> raw.toIntOrNull()?.also { maxBreedCount = it } != null
        "breedRandomMin" -> raw.toDoubleOrNull()?.also { breedRandomMin = it } != null
        "breedRandomMax" -> raw.toDoubleOrNull()?.also { breedRandomMax = it } != null
        "breedGenBonusPerGen" -> raw.toDoubleOrNull()?.also { breedGenBonusPerGen = it } != null
        "breedGenBonusMax" -> raw.toDoubleOrNull()?.also { breedGenBonusMax = it } != null
        "breedMutationChance" -> raw.toDoubleOrNull()?.also { breedMutationChance = it } != null
        "breedMutationBoost" -> raw.toDoubleOrNull()?.also { breedMutationBoost = it } != null
        "breedStatCap" -> raw.toDoubleOrNull()?.also { breedStatCap = it } != null
        "breedBonusLevelPerGen" -> raw.toIntOrNull()?.also { breedBonusLevelPerGen = it } != null
        "breedBonusLevelMax" -> raw.toIntOrNull()?.also { breedBonusLevelMax = it } != null
        "breedParentVariantWeight" ->
            raw.toIntOrNull()?.also { breedParentVariantWeight = it } != null
        "breedOtherVariantWeight" ->
            raw.toIntOrNull()?.also { breedOtherVariantWeight = it } != null
        "playLevelUpChance" -> raw.toDoubleOrNull()?.also { playLevelUpChance = it } != null
        "playLevelUpMaxLevel" -> raw.toIntOrNull()?.also { playLevelUpMaxLevel = it } != null
        "spawnAiEnabled" -> {
          val value =
              when (raw.lowercase()) {
                "true" -> true
                "false" -> false
                else -> return false
              }
          spawnAiEnabled = value
          true
        }
        "freeRoamSpeedMultiplier" ->
            raw.toDoubleOrNull()?.also { freeRoamSpeedMultiplier = it } != null
        "freeRoamFlyingSpeedMultiplier" ->
            raw.toDoubleOrNull()?.also { freeRoamFlyingSpeedMultiplier = it } != null
        "atypicalBaseChance" -> raw.toDoubleOrNull()?.also { atypicalBaseChance = it } != null
        "atypicalOneParentChance" ->
            raw.toDoubleOrNull()?.also { atypicalOneParentChance = it } != null
        "atypicalBothParentChance" ->
            raw.toDoubleOrNull()?.also { atypicalBothParentChance = it } != null
        "atypicalLevelUpBonus" -> raw.toDoubleOrNull()?.also { atypicalLevelUpBonus = it } != null
        "atypicalAffectionBonus" ->
            raw.toDoubleOrNull()?.also { atypicalAffectionBonus = it } != null
        "childAiEnabled" -> {
          val value =
              when (raw.lowercase()) {
                "true" -> true
                "false" -> false
                else -> return false
              }
          childAiEnabled = value
          true
        }
        else -> false
      }

  /** 変更したキーをconfig.ymlに永続化 */
  fun saveField(key: String, plugin: JavaPlugin) {
    when (key) {
      "skillBookCostLv1" -> {
        plugin.config.set("skillbook.shopCostLv1", skillBookShopCostLv1)
        plugin.config.set("skillbook.useCostLv1", skillBookUseCostLv1)
        plugin.config.set("skillbook.costLv1", skillBookUseCostLv1)
        plugin.saveConfig()
        return
      }
      "skillBookCostLv2" -> {
        plugin.config.set("skillbook.shopCostLv2", skillBookShopCostLv2)
        plugin.config.set("skillbook.useCostLv2", skillBookUseCostLv2)
        plugin.config.set("skillbook.costLv2", skillBookUseCostLv2)
        plugin.saveConfig()
        return
      }
      "skillBookCostLv3" -> {
        plugin.config.set("skillbook.shopCostLv3", skillBookShopCostLv3)
        plugin.config.set("skillbook.useCostLv3", skillBookUseCostLv3)
        plugin.config.set("skillbook.costLv3", skillBookUseCostLv3)
        plugin.saveConfig()
        return
      }
    }
    val path =
        when (key) {
          "foodPointCost" -> "economy.foodPointCost"
          "maxFoodLevel" -> "pets.maxFoodLevel"
          "defaultShopCost" -> "shop.defaultCost"
          "skillBookShopCostLv1" -> "skillbook.shopCostLv1"
          "skillBookShopCostLv2" -> "skillbook.shopCostLv2"
          "skillBookShopCostLv3" -> "skillbook.shopCostLv3"
          "skillBookUseCostLv1" -> "skillbook.useCostLv1"
          "skillBookUseCostLv2" -> "skillbook.useCostLv2"
          "skillBookUseCostLv3" -> "skillbook.useCostLv3"
          "reviveCost" -> "revive.cost"
          "recoverCost" -> "recover.cost"
          "healItemAmount" -> "items.healAmount"
          "breedMinLevel" -> "breed.minLevel"
          "breedCost" -> "breed.cost"
          "maxBreedCount" -> "breed.maxCount"
          "breedRandomMin" -> "breed.randomMin"
          "breedRandomMax" -> "breed.randomMax"
          "breedGenBonusPerGen" -> "breed.genBonusPerGen"
          "breedGenBonusMax" -> "breed.genBonusMax"
          "breedMutationChance" -> "breed.mutationChance"
          "breedMutationBoost" -> "breed.mutationBoost"
          "breedStatCap" -> "breed.statCap"
          "breedBonusLevelPerGen" -> "breed.bonusLevelPerGen"
          "breedBonusLevelMax" -> "breed.bonusLevelMax"
          "breedParentVariantWeight" -> "breed.variantWeights.parent"
          "breedOtherVariantWeight" -> "breed.variantWeights.other"
          "playLevelUpChance" -> "play.levelUpChance"
          "playLevelUpMaxLevel" -> "play.levelUpMaxLevel"
          "spawnAiEnabled" -> "pets.spawnAiEnabled"
          "freeRoamSpeedMultiplier" -> "pets.freeRoamSpeedMultiplier"
          "freeRoamFlyingSpeedMultiplier" -> "pets.freeRoamFlyingSpeedMultiplier"
          "atypicalBaseChance" -> "traits.atypicalBaseChance"
          "atypicalOneParentChance" -> "traits.atypicalOneParentChance"
          "atypicalBothParentChance" -> "traits.atypicalBothParentChance"
          "atypicalLevelUpBonus" -> "traits.atypicalLevelUpBonus"
          "atypicalAffectionBonus" -> "traits.atypicalAffectionBonus"
          "childAiEnabled" -> "traits.childAiEnabled"
          else -> return
        }
    plugin.config.set(path, getField(key))
    plugin.saveConfig()
  }
}

// ===== File: BigWolfKeys.kt =====
/** BigWolfプラグインで使用するNamespacedKeyの管理クラス */
object BigWolfKeys {
  // ペット基本情報
  lateinit var FOOD: NamespacedKey
  lateinit var OWNER: NamespacedKey
  lateinit var PARTICLE: NamespacedKey
  lateinit var PET_ID: NamespacedKey
  lateinit var SKILL_TYPE: NamespacedKey
  lateinit var HOVER_STATE: NamespacedKey
  lateinit var SKILL_UNLOCKED: NamespacedKey

  // ペット統計
  lateinit var STAT_DISTANCE: NamespacedKey
  lateinit var STAT_JUMPS: NamespacedKey
  lateinit var STAT_TOYS: NamespacedKey
  lateinit var STAT_BRUSHES: NamespacedKey
  lateinit var STAT_TREATS: NamespacedKey

  // 収納アイテム（メタデータ）
  lateinit var STORED_FLAG: NamespacedKey
  lateinit var STORED_TYPE: NamespacedKey
  lateinit var STORED_VARIANT: NamespacedKey
  lateinit var STORED_NAME: NamespacedKey
  lateinit var STORED_ID: NamespacedKey
  lateinit var STORED_OWNER: NamespacedKey
  lateinit var STORED_SKILL: NamespacedKey
  lateinit var STORED_HOVER: NamespacedKey
  lateinit var STORED_UNLOCKED: NamespacedKey
  lateinit var STORED_STAT_DISTANCE: NamespacedKey
  lateinit var STORED_STAT_JUMPS: NamespacedKey
  lateinit var STORED_STAT_TOYS: NamespacedKey
  lateinit var STORED_STAT_BRUSHES: NamespacedKey
  lateinit var STORED_STAT_TREATS: NamespacedKey

  // ショップMOB
  lateinit var SHOP_FLAG: NamespacedKey
  lateinit var SHOP_TYPE: NamespacedKey
  lateinit var SHOP_VARIANT: NamespacedKey
  lateinit var SHOP_COST: NamespacedKey

  // v2: 交配・譲渡関連
  lateinit var PARENT_1: NamespacedKey
  lateinit var PARENT_2: NamespacedKey
  lateinit var GENERATION: NamespacedKey
  lateinit var BREED_COUNT: NamespacedKey
  lateinit var ORIGINAL_OWNER: NamespacedKey
  lateinit var TRANSFER_COUNT: NamespacedKey
  lateinit var PARTICLE_UNLOCKED: NamespacedKey
  lateinit var SPEED_MULTIPLIER: NamespacedKey
  lateinit var JUMP_MULTIPLIER: NamespacedKey
  lateinit var PCD_VERSION: NamespacedKey

  // v2: 収納アイテム用の追加キー
  lateinit var STORED_PCD_VERSION: NamespacedKey
  lateinit var STORED_ORIGINAL_OWNER: NamespacedKey
  lateinit var STORED_TRANSFER_COUNT: NamespacedKey
  lateinit var STORED_BREED_COUNT: NamespacedKey
  lateinit var STORED_PARENT_1: NamespacedKey
  lateinit var STORED_PARENT_2: NamespacedKey
  lateinit var STORED_GENERATION: NamespacedKey
  lateinit var STORED_PARTICLE_UNLOCKED: NamespacedKey
  lateinit var STORED_SPEED_MULTIPLIER: NamespacedKey
  lateinit var STORED_JUMP_MULTIPLIER: NamespacedKey

  // v3: 性質（定型/非定型）関連
  lateinit var TEMPERAMENT: NamespacedKey
  lateinit var STORED_TEMPERAMENT: NamespacedKey

  // PCDバージョン定数
  const val CURRENT_PCD_VERSION = 3

  /** すべてのキーを初期化 */
  fun initialize(plugin: Plugin) {
    // ペット基本情報
    FOOD = NamespacedKey(plugin, "food_count")
    OWNER = NamespacedKey(plugin, "owner_uuid")
    PARTICLE = NamespacedKey(plugin, "particle_type")
    PET_ID = NamespacedKey(plugin, "unique_pet_id")
    SKILL_TYPE = NamespacedKey(plugin, "skill_type")
    HOVER_STATE = NamespacedKey(plugin, "hover_state")
    SKILL_UNLOCKED = NamespacedKey(plugin, "skill_unlocked_level")

    // ペット統計
    STAT_DISTANCE = NamespacedKey(plugin, "stat_distance_m")
    STAT_JUMPS = NamespacedKey(plugin, "stat_jumps")
    STAT_TOYS = NamespacedKey(plugin, "stat_toys")
    STAT_BRUSHES = NamespacedKey(plugin, "stat_brushes")
    STAT_TREATS = NamespacedKey(plugin, "stat_treats")

    // 収納アイテム（メタデータ）
    STORED_FLAG = NamespacedKey(plugin, "is_stored_pet")
    STORED_TYPE = NamespacedKey(plugin, "stored_type")
    STORED_VARIANT = NamespacedKey(plugin, "stored_variant")
    STORED_NAME = NamespacedKey(plugin, "stored_name")
    STORED_ID = NamespacedKey(plugin, "stored_pet_id")
    STORED_OWNER = NamespacedKey(plugin, "stored_owner_uuid")
    STORED_SKILL = NamespacedKey(plugin, "stored_skill")
    STORED_HOVER = NamespacedKey(plugin, "stored_hover")
    STORED_UNLOCKED = NamespacedKey(plugin, "stored_unlocked_level")
    STORED_STAT_DISTANCE = NamespacedKey(plugin, "stored_stat_distance_m")
    STORED_STAT_JUMPS = NamespacedKey(plugin, "stored_stat_jumps")
    STORED_STAT_TOYS = NamespacedKey(plugin, "stored_stat_toys")
    STORED_STAT_BRUSHES = NamespacedKey(plugin, "stored_stat_brushes")
    STORED_STAT_TREATS = NamespacedKey(plugin, "stored_stat_treats")

    // ショップMOB
    SHOP_FLAG = NamespacedKey(plugin, "shop_flag")
    SHOP_TYPE = NamespacedKey(plugin, "shop_type")
    SHOP_VARIANT = NamespacedKey(plugin, "shop_variant")
    SHOP_COST = NamespacedKey(plugin, "shop_cost")

    // v2: 交配・譲渡関連
    PARENT_1 = NamespacedKey(plugin, "parent_1_id")
    PARENT_2 = NamespacedKey(plugin, "parent_2_id")
    GENERATION = NamespacedKey(plugin, "generation")
    BREED_COUNT = NamespacedKey(plugin, "breed_count")
    ORIGINAL_OWNER = NamespacedKey(plugin, "original_owner_uuid")
    TRANSFER_COUNT = NamespacedKey(plugin, "transfer_count")
    PARTICLE_UNLOCKED = NamespacedKey(plugin, "particle_unlocked")
    SPEED_MULTIPLIER = NamespacedKey(plugin, "speed_multiplier")
    JUMP_MULTIPLIER = NamespacedKey(plugin, "jump_multiplier")
    PCD_VERSION = NamespacedKey(plugin, "pcd_version")

    // v2: 収納アイテム用の追加キー
    STORED_PCD_VERSION = NamespacedKey(plugin, "stored_pcd_version")
    STORED_ORIGINAL_OWNER = NamespacedKey(plugin, "stored_original_owner")
    STORED_TRANSFER_COUNT = NamespacedKey(plugin, "stored_transfer_count")
    STORED_BREED_COUNT = NamespacedKey(plugin, "stored_breed_count")
    STORED_PARENT_1 = NamespacedKey(plugin, "stored_parent_1")
    STORED_PARENT_2 = NamespacedKey(plugin, "stored_parent_2")
    STORED_GENERATION = NamespacedKey(plugin, "stored_generation")
    STORED_PARTICLE_UNLOCKED = NamespacedKey(plugin, "stored_particle_unlocked")
    STORED_SPEED_MULTIPLIER = NamespacedKey(plugin, "stored_speed_multiplier")
    STORED_JUMP_MULTIPLIER = NamespacedKey(plugin, "stored_jump_multiplier")

    // v3: 性質（定型/非定型）関連
    TEMPERAMENT = NamespacedKey(plugin, "temperament")
    STORED_TEMPERAMENT = NamespacedKey(plugin, "stored_temperament")
  }
}

// ===== File: PetDataManager.kt =====
/** ペットデータの永続化管理クラス 各プレイヤーごとにフォルダを作成し、各ペットのJSONファイルを管理 */
object PetDataManager {
  private lateinit var plugin: JavaPlugin
  private lateinit var dataFolder: File
  private val gson: Gson = GsonBuilder().setPrettyPrinting().create()

  // メモリキャッシュ: プレイヤーUUID -> (petId -> PetData)
  private val cache = ConcurrentHashMap<String, MutableMap<String, PetData>>()

  fun initialize(plugin: JavaPlugin) {
    this.plugin = plugin
    this.dataFolder = File(plugin.dataFolder, "players")
    if (!dataFolder.exists()) {
      dataFolder.mkdirs()
    }
  }

  /** ペット購入時にデータを記録 */
  fun recordPurchase(
      ownerUuid: UUID,
      petId: String,
      type: EntityType,
      variant: String?,
      customName: String?
  ): PetData {
    val existingPets = loadPlayerPets(ownerUuid)

    // 次のペット番号を決定（自分が元オーナーのペットの最大番号+1、全番号と衝突しない値を保証）
    val ownerUuidStr = ownerUuid.toString()
    val allNumbers = existingPets.values.map { it.petNumber }.toSet()
    val ownMax =
        existingPets.values.filter { it.originalOwner == ownerUuidStr }.maxOfOrNull { it.petNumber }
            ?: 0
    var nextNumber = ownMax + 1
    while (nextNumber in allNumbers) nextNumber++
    val ownerName = Bukkit.getOfflinePlayer(ownerUuid).name ?: "Unknown"
    val defaultName = buildDefaultPetName(ownerName, type, variant, nextNumber)

    val petData =
        PetData(
            petId = petId,
            petNumber = nextNumber,
            type = type.name,
            variant = variant,
            customName = customName ?: defaultName,
            purchasedAt = LocalDateTime.now().format(DateTimeFormatter.ISO_LOCAL_DATE_TIME),
            status = PetStatus.ALIVE,
            lastLocation = null,
            deathData = null,
            stats = PetStats(),
            skillType = 0,
            skillUnlockedLevel = 0,
            foodLevel = 0)

    savePetData(ownerUuid, petData)

    // キャッシュ更新
    cache.getOrPut(ownerUuid.toString()) { ConcurrentHashMap() }[petId] = petData

    plugin.logger.info("Pet purchased: Player=${ownerUuid}, PetNumber=$nextNumber, Type=$type")
    return petData
  }

  /** ペットの位置を更新（降車時・ログアウト時） */
  fun updateLastLocation(ownerUuid: UUID, petId: String, location: Location) {
    val petData = getPetData(ownerUuid, petId) ?: return

    petData.lastLocation =
        LocationData(
            world = location.world?.name ?: "world", x = location.x, y = location.y, z = location.z)

    savePetData(ownerUuid, petData, syncBack = false)
  }

  /** ペット死亡時にデータを保存 */
  fun recordDeath(ownerUuid: UUID, entity: LivingEntity) {
    val petId =
        entity.persistentDataContainer.get(BigWolfKeys.PET_ID, PersistentDataType.STRING) ?: return

    val petData = getPetData(ownerUuid, petId) ?: return

    // 死亡データを保存
    petData.status = PetStatus.DEAD
    petData.deathData =
        DeathData(
            deathTime = LocalDateTime.now().format(DateTimeFormatter.ISO_LOCAL_DATE_TIME),
            location =
                LocationData(
                    world = entity.location.world?.name ?: "world",
                    x = entity.location.x,
                    y = entity.location.y,
                    z = entity.location.z))

    // エンティティから最新のステータスを取得
    petData.syncFromEntity(entity)

    savePetData(ownerUuid, petData, syncBack = false)

    plugin.logger.info("Pet died: Owner=$ownerUuid, PetNumber=${petData.petNumber}")
  }

  /** ペットを復活させる */
  fun getDeathDataForRevive(ownerUuid: UUID, petNumber: Int): PetData? {
    val pets = loadPlayerPets(ownerUuid)
    return pets.values.find { it.petNumber == petNumber && it.status == PetStatus.DEAD }
  }

  /** 復活後にステータスを更新 */
  fun markAsRevived(ownerUuid: UUID, petId: String) {
    val petData = getPetData(ownerUuid, petId) ?: return
    petData.status = PetStatus.ALIVE
    petData.deathData = null
    savePetData(ownerUuid, petData)
  }

  /** 死亡したペット一覧を取得 */
  fun getDeadPets(ownerUuid: UUID): List<PetData> {
    return loadPlayerPets(ownerUuid).values.filter { it.status == PetStatus.DEAD }
  }

  /** プレイヤーの全ペット一覧を取得 */
  fun getAllPets(ownerUuid: UUID): List<PetData> {
    return loadPlayerPets(ownerUuid).values.toList()
  }

  /** ペット収納時にステータスを更新 */
  fun markAsStored(ownerUuid: UUID, petId: String, entity: LivingEntity) {
    val petData = getPetData(ownerUuid, petId) ?: return
    petData.status = PetStatus.STORED
    petData.lastLocation =
        LocationData(
            world = entity.location.world?.name ?: "world",
            x = entity.location.x,
            y = entity.location.y,
            z = entity.location.z)
    petData.syncFromEntity(entity)
    savePetData(ownerUuid, petData)
  }

  /** ペット解放時にステータスを更新 */
  fun markAsAlive(ownerUuid: UUID, petId: String) {
    val petData = getPetData(ownerUuid, petId) ?: return
    petData.status = PetStatus.ALIVE
    savePetData(ownerUuid, petData)
  }

  // --- Private methods ---

  private fun getPlayerFolder(ownerUuid: UUID): File {
    val folder = File(dataFolder, ownerUuid.toString())
    if (!folder.exists()) {
      folder.mkdirs()
    }
    return folder
  }

  private fun getPetFileName(petData: PetData): String {
    val number = petData.petNumber.toString().padStart(3, '0')
    val variant = petData.variant?.let { v ->
      val safe = v.replace(Regex("[^a-zA-Z0-9_-]"), "")
      if (safe.isNotEmpty()) "_$safe" else ""
    } ?: ""
    return "${number}_${petData.type}${variant}.json"
  }

  private fun savePetData(ownerUuid: UUID, petData: PetData, syncBack: Boolean = true) {
    val playerFolder = getPlayerFolder(ownerUuid)
    val fileName = getPetFileName(petData)
    val file = File(playerFolder, fileName)
    val json = gson.toJson(petData)

    // キャッシュ更新
    cache.getOrPut(ownerUuid.toString()) { ConcurrentHashMap() }[petData.petId] = petData

    // ファイル書き込み（同期: クラッシュ時のデータ消失を防ぐ）
    try {
      file.writeText(json)
    } catch (e: Exception) {
      plugin.logger.warning("Failed to save pet data for $ownerUuid / ${petData.petId}: ${e.message}")
    }

    if (syncBack) {
      PetSynchronizer.syncDataToEntity(ownerUuid, petData)
    }
  }

  private fun loadPlayerPets(ownerUuid: UUID): MutableMap<String, PetData> {
    // キャッシュチェック
    cache[ownerUuid.toString()]?.let {
      return it
    }

    val playerFolder = getPlayerFolder(ownerUuid)
    val pets = ConcurrentHashMap<String, PetData>()

    playerFolder
        .listFiles()
        ?.filter { it.extension == "json" }
        ?.forEach { file ->
          try {
            val petData = gson.fromJson(file.readText(), PetData::class.java)
            pets[petData.petId] = petData
          } catch (e: Exception) {
            plugin.logger.warning("Failed to load pet data: ${file.name} - ${e.message}")
          }
        }

    // キャッシュに保存
    cache[ownerUuid.toString()] = pets
    return pets
  }

  private fun extractStats(entity: LivingEntity): PetStats {
    return PetStats(
        distance = entity.statDistance,
        jumps = entity.statJumps,
        toys = entity.statToys,
        brushes = entity.statBrushes,
        treats = entity.statTreats)
  }

  /** エンティティから最新ステータスを PetData に転写（recordDeath / markAsStored 共通処理） */
  private fun PetData.syncFromEntity(entity: LivingEntity) {
    stats = extractStats(entity)
    skillType = entity.skillType
    skillUnlockedLevel = entity.skillUnlockedLevel
    foodLevel = entity.foodLevel
    particleUnlocked = entity.particleUnlocked
    customName = entity.customName()?.let { LEGACY_AMP.serialize(it) }
    speedMultiplier = entity.speedMultiplier
    jumpMultiplier = entity.jumpMultiplier
    particleType = entity.particleType
    isHovering = entity.isHovering
    temperament = entity.temperament
  }

  /** デフォルトペット名を生成（recordPurchase / recordBreeding 共通処理） */
  private fun buildDefaultPetName(
      ownerName: String,
      type: EntityType,
      variant: String?,
      number: Int
  ): String {
    val mobJap = MobTranslator.toJapanese(type)
    return if (variant != null) {
      val variantJap = MobTranslator.translateVariant(variant)
      "${ownerName}の$variantJap$mobJap #$number"
    } else {
      "${ownerName}の$mobJap #$number"
    }
  }

  /** ペットをキャッシュから削除（譲渡時など） */
  /** プレイヤーのキャッシュを全削除（ログアウト時に呼ぶ） */
  fun clearPlayerCache(ownerUuid: UUID) {
    cache.remove(ownerUuid.toString())
  }

  fun removePetFromCache(ownerUuid: UUID, petId: String) {
    cache[ownerUuid.toString()]?.remove(petId)

    // ファイルも削除
    val playerFolder = getPlayerFolder(ownerUuid)
    val pets = loadPlayerPets(ownerUuid)
    val petData = pets[petId] ?: return
    val fileName = getPetFileName(petData)
    val file = File(playerFolder, fileName)
    if (file.exists()) {
      file.delete()
    }
  }

  /** カスタム名を更新 */
  fun updateCustomName(ownerUuid: UUID, petId: String, newName: String) {
    val petData = getPetData(ownerUuid, petId) ?: return
    petData.customName = newName
    savePetData(ownerUuid, petData)
  }

  /** エンティティ側で最新化されたスナップショットから JSON を更新する。 */
  fun updateFromSnapshot(ownerUuid: UUID, snapshot: PetSnapshot) {
    val petData = getPetData(ownerUuid, snapshot.petId) ?: return
    petData.customName = snapshot.customName
    petData.variant = snapshot.variant
    petData.status = snapshot.status
    petData.lastLocation = snapshot.lastLocation
    petData.stats = snapshot.stats
    petData.skillType = snapshot.skillType
    petData.skillUnlockedLevel = snapshot.skillUnlockedLevel
    petData.foodLevel = snapshot.foodLevel
    petData.originalOwner = snapshot.originalOwnerId ?: petData.originalOwner
    petData.breedCount = snapshot.breedCount
    petData.particleUnlocked = snapshot.particleUnlocked
    savePetData(ownerUuid, petData)
  }

  /** 公開getPetData（他クラスから使用） */
  fun getPetData(ownerUuid: UUID, petId: String): PetData? {
    return loadPlayerPets(ownerUuid)[petId]
  }

  /** 収納されたペットを番号で取得（リカバリー用） */
  fun getStoredPetForRecover(ownerUuid: UUID, petNumber: Int): PetData? {
    val pets = loadPlayerPets(ownerUuid)
    return pets.values.find { it.petNumber == petNumber && it.status == PetStatus.STORED }
  }

  /** 交配結果を記録 */
  fun recordBreeding(
      ownerUuid: UUID,
      petId: String,
      type: EntityType,
      variant: String?,
      customName: String?,
      parent1Id: String,
      parent2Id: String,
      generation: Int
  ): PetData {
    val existingPets = loadPlayerPets(ownerUuid)
    // 自分が元オーナーのペットの最大番号+1、全番号と衝突しない値を保証
    val ownerUuidStr = ownerUuid.toString()
    val allNumbers = existingPets.values.map { it.petNumber }.toSet()
    val ownMax =
        existingPets.values.filter { it.originalOwner == ownerUuidStr }.maxOfOrNull { it.petNumber }
            ?: 0
    var nextNumber = ownMax + 1
    while (nextNumber in allNumbers) nextNumber++
    val ownerName = Bukkit.getOfflinePlayer(ownerUuid).name ?: "Unknown"
    val defaultName = buildDefaultPetName(ownerName, type, variant, nextNumber)

    val petData =
        PetData(
            petId = petId,
            petNumber = nextNumber,
            type = type.name,
            variant = variant,
            customName = customName ?: defaultName,
            purchasedAt = LocalDateTime.now().format(DateTimeFormatter.ISO_LOCAL_DATE_TIME),
            status = PetStatus.ALIVE,
            lastLocation = null,
            deathData = null,
            stats = PetStats(),
            skillType = 0,
            skillUnlockedLevel = 0,
            foodLevel = 0,
            originalOwner = ownerUuid.toString(),
            breedInfo = BreedInfo(parent1Id, parent2Id, generation),
            breedCount = 0,
            particleUnlocked = "0,1,2,3,4")

    savePetData(ownerUuid, petData)
    cache.getOrPut(ownerUuid.toString()) { mutableMapOf() }[petId] = petData

    plugin.logger.info(
        "Pet bred: Player=$ownerUuid, PetNumber=$nextNumber, Type=$type, Gen=$generation")
    return petData
  }

  /** ペットデータを保存（公開用） */
  fun savePet(ownerUuid: UUID, petData: PetData) {
    savePetData(ownerUuid, petData)
  }
}

// --- Data classes ---

enum class PetStatus {
  ALIVE,
  DEAD,
  STORED
}

data class PetData(
    val petId: String,
    val petNumber: Int,
    val type: String,
    var variant: String?,
    var customName: String?,
    val purchasedAt: String,
    var status: PetStatus,
    var lastLocation: LocationData?,
    var deathData: DeathData?,
    var stats: PetStats,
    var skillType: Int,
    var skillUnlockedLevel: Int,
    var foodLevel: Int,
    // v2: 譲渡・交配関連
    var originalOwner: String? = null,
    var transferHistory: MutableList<TransferRecord> = mutableListOf(),
    var breedInfo: BreedInfo? = null,
    var breedCount: Int = 0,
    var particleUnlocked: String = "0,1,2,3,4",
    var speedMultiplier: Double = 1.0,
    var jumpMultiplier: Double = 1.0,
    var particleType: Int = 0,
    var isHovering: Boolean = false,
    var temperament: String = "typical"
)

data class LocationData(val world: String, val x: Double, val y: Double, val z: Double)

data class DeathData(val deathTime: String, val location: LocationData)

data class PetStats(
    var distance: Double = 0.0,
    var jumps: Int = 0,
    var toys: Int = 0,
    var brushes: Int = 0,
    var treats: Int = 0
)

data class TransferRecord(val fromOwner: String, val toOwner: String, val timestamp: String)

data class BreedInfo(val parent1Id: String, val parent2Id: String, val generation: Int)

data class PetSnapshot(
    val petId: String,
    val ownerUuid: UUID,
    val type: EntityType,
    val customName: String?,
    val variant: String?,
    val status: PetStatus,
    val lastLocation: LocationData?,
    val stats: PetStats,
    val skillType: Int,
    val skillUnlockedLevel: Int,
    val foodLevel: Int,
    val particleUnlocked: String,
    val breedCount: Int,
    val originalOwnerId: String?,
)

// ===== File: ActivePetRegistry.kt =====
/** 召喚中のペットエンティティを一元管理するグローバルレジストリ。 全ワールドスキャン (world.livingEntities) の代替として使用する。 */
object ActivePetRegistry {
  // entityUUID → LivingEntity
  private val byEntityId = ConcurrentHashMap<UUID, LivingEntity>()
  // petId (PDC文字列) → entityUUID
  private val byPetId = ConcurrentHashMap<String, UUID>()
  // PDC read を毎秒省くためのインメモリキャッシュ
  private val cachedIsAtypical = ConcurrentHashMap<UUID, Boolean>()
  private val cachedOwnerId = ConcurrentHashMap<UUID, String>()

  /** ペット召喚時に登録 */
  fun register(entity: LivingEntity) {
    val petId = entity.petId ?: return
    byEntityId[entity.uniqueId] = entity
    byPetId[petId] = entity.uniqueId
    cachedIsAtypical[entity.uniqueId] = entity.isAtypical()
    cachedOwnerId[entity.uniqueId] = entity.ownerId ?: ""
  }

  /** ペット収納・死亡・放棄時に登録解除 */
  fun unregister(entityUuid: UUID) {
    val entity = byEntityId.remove(entityUuid) ?: return
    entity.petId?.let { byPetId.remove(it) }
    cachedIsAtypical.remove(entityUuid)
    cachedOwnerId.remove(entityUuid)
  }

  /** キャッシュから isAtypical を取得（PDC 不要） */
  fun isAtypical(entityUuid: UUID): Boolean = cachedIsAtypical[entityUuid] ?: false

  /** キャッシュから ownerId を取得（PDC 不要） */
  fun getOwnerId(entityUuid: UUID): String? = cachedOwnerId[entityUuid]?.ifBlank { null }

  /** petId でエンティティを検索（無効ならクリーンアップして null を返す） */
  fun findByPetId(petId: String): LivingEntity? {
    val uuid = byPetId[petId] ?: return null
    val entity = byEntityId[uuid]
    if (entity == null || !entity.isValid) {
      byEntityId.remove(uuid)
      byPetId.remove(petId)
      return null
    }
    return entity
  }

  /** 指定オーナーのペット一覧（無効エンティティを遅延クリーンアップ） */
  fun getByOwner(ownerUuidStr: String): List<LivingEntity> {
    val result = mutableListOf<LivingEntity>()
    val iter = byEntityId.entries.iterator()
    while (iter.hasNext()) {
      val entry = iter.next()
      val entity = entry.value
      if (!entity.isValid) {
        iter.remove()
        entity.petId?.let { byPetId.remove(it) }
        cachedIsAtypical.remove(entry.key)
        cachedOwnerId.remove(entry.key)
        continue
      }
      if (cachedOwnerId[entry.key] == ownerUuidStr) result.add(entity)
    }
    return result
  }

  /** 指定オーナーのアクティブペット数 */
  fun countByOwner(ownerUuidStr: String): Int = getByOwner(ownerUuidStr).size

  /** 全登録エンティティ一覧（無効エンティティを遅延クリーンアップ） */
  fun getAll(): List<LivingEntity> {
    val result = mutableListOf<LivingEntity>()
    val iter = byEntityId.entries.iterator()
    while (iter.hasNext()) {
      val entry = iter.next()
      val entity = entry.value
      if (!entity.isValid) {
        iter.remove()
        entity.petId?.let { byPetId.remove(it) }
        continue
      }
      result.add(entity)
    }
    return result
  }

  /** サーバー停止時やテスト用にリセット */
  fun clear() {
    byEntityId.clear()
    byPetId.clear()
    cachedIsAtypical.clear()
    cachedOwnerId.clear()
  }
}

// ===== File: ParrotFloatEffectRegistry.kt =====
/** オウムペットの空中浮遊エフェクトを一元管理する */
object ParrotFloatEffectRegistry {
  private val tasks = ConcurrentHashMap<UUID, BukkitTask>()

  fun start(plugin: JavaPlugin, entity: Parrot, timeoutTicks: Int) {
    tasks.remove(entity.uniqueId)?.cancel()
    var tick = 0
    val task =
        object : BukkitRunnable() {
          override fun run() {
            if (!entity.isValid ||
                entity.isDead ||
                entity.isOnGround ||
                entity.isInWater ||
                entity.passengers.isNotEmpty() ||
                tick++ > timeoutTicks) {
              tasks.remove(entity.uniqueId)
              cancel()
              return
            }
            // 足元を中心に円軌道でパーティクルを放出
            val loc = entity.location.clone()
            val angle = 2 * Math.PI * (tick % 30) / 30.0
            val x = Math.cos(angle) * 0.5
            val z = Math.sin(angle) * 0.5
            entity.world.spawnParticle(
                Particle.ENCHANT, loc.clone().add(x, 0.0, z), 2, 0.0, 0.1, 0.0, 0.05)
            if (tick % 10 == 0) {
              entity.world.spawnParticle(Particle.END_ROD, loc, 1, 0.2, 0.1, 0.2, 0.01)
            }
          }
        }
    tasks[entity.uniqueId] = task.runTaskTimer(plugin, 1L, 1L)
  }

  fun stop(entityUuid: UUID) {
    tasks.remove(entityUuid)?.cancel()
  }

  fun isRunning(entityUuid: UUID) = tasks.containsKey(entityUuid)
}

// ===== File: debug/PetDebugger.kt =====
/** /bigwolfop perf_debug で有効化するパフォーマンスデバッグ機能。 有効化中のプレイヤーに対してのみ動作し、無効時はほぼゼロコスト。 */
object PetDebugger {
  private val debugTargets = ConcurrentHashMap.newKeySet<UUID>()

  // ControlTask 統計（UUID ごと）
  private data class ControlStats(
      var tickCount: Int = 0,
      var totalNs: Long = 0L,
      var maxNs: Long = 0L,
      var jumpCount: Int = 0,
      var statWrites: Int = 0
  )

  private val controlStats = ConcurrentHashMap<UUID, ControlStats>()

  @Suppress("unused")
  fun enable(playerUuid: UUID) {
    debugTargets.add(playerUuid)
    controlStats[playerUuid] = ControlStats()
  }

  fun disable(playerUuid: UUID) {
    debugTargets.remove(playerUuid)
    controlStats.remove(playerUuid)
  }

  fun isEnabled(playerUuid: UUID): Boolean = playerUuid in debugTargets

  fun hasAnyEnabled(): Boolean = debugTargets.isNotEmpty()

  fun clear() {
    debugTargets.clear()
    controlStats.clear()
  }

  /**
   * startControlTask の毎 tick 末尾から呼ぶ。
   *
   * @param tickNs このtickの処理時間 (nanoseconds)
   * @param jumpOccurred このtickにジャンプが発生したか
   * @param statWriteOccurred このtickにPDC書き込みが発生したか
   */
  fun recordControlTick(
      playerUuid: UUID,
      tickNs: Long,
      jumpOccurred: Boolean,
      statWriteOccurred: Boolean
  ) {
    val stats = controlStats[playerUuid] ?: return
    stats.tickCount++
    stats.totalNs += tickNs
    if (tickNs > stats.maxNs) stats.maxNs = tickNs
    if (jumpOccurred) stats.jumpCount++
    if (statWriteOccurred) stats.statWrites++
  }

  /** 20 tick ごとに 1 秒サマリーをチャットへ送信してリセット。 */
  fun flushControlSummary(player: Player, food: Int, speed: Double) {
    val uuid = player.uniqueId
    val stats = controlStats[uuid] ?: return
    if (stats.tickCount == 0) return
    val avgMs = stats.totalNs / stats.tickCount / 1_000_000.0
    val maxMs = stats.maxNs / 1_000_000.0
    player.sendMessage(
        Component.text(
            "[PetDebug/Ctrl] ticks=${stats.tickCount} avg=${String.format("%.3f", avgMs)}ms " +
                "max=${String.format("%.3f", maxMs)}ms | " +
                "food=$food speed=${String.format("%.2f", speed)} | " +
                "jumps=${stats.jumpCount} pdcWrites=${stats.statWrites}",
            net.kyori.adventure.text.format.NamedTextColor.AQUA))
    // リセット
    controlStats[uuid] = ControlStats()
  }

  /** startControlTask の毎 tick でアクションバーを更新。 */
  fun updateActionBar(
      player: Player,
      tickNum: Int,
      food: Int,
      speed: Double,
      cachedSkillType: Int,
      jumpOccurred: Boolean,
      tickNs: Long
  ) {
    val jumpMark = if (jumpOccurred) " jump↑" else ""
    val ms = tickNs / 1_000_000.0
    player.sendActionBar(
        Component.text(
            "[Tick #$tickNum] food=$food spd=${String.format("%.2f", speed)} " +
                "skl=$cachedSkillType${jumpMark} | ${String.format("%.3f", ms)}ms",
            net.kyori.adventure.text.format.NamedTextColor.AQUA))
  }

  /** startGlobalAITask の実行結果を全デバッグ有効プレイヤーへ送信。 */
  fun sendAiTaskResult(petsTotal: Int, atypical: Int, acted: Int, elapsedMs: Double) {
    if (debugTargets.isEmpty()) return
    val msg =
        Component.text(
            "[PetDebug/AI] pets=$petsTotal atypical=$atypical acted=$acted time=${String.format("%.3f", elapsedMs)}ms",
            net.kyori.adventure.text.format.NamedTextColor.YELLOW)
    for (uuid in debugTargets) {
      Bukkit.getPlayer(uuid)?.sendMessage(msg)
    }
  }
}

object PetSynchronizer {
  @Suppress("UnstableApiUsage") private val logger = Bukkit.getLogger()

  private fun snapshotFromEntity(entity: LivingEntity): PetSnapshot? {
    val petId = entity.petId ?: return null
    val ownerUuid =
        entity.ownerId?.let {
          runCatching { UUID.fromString(it) }
              .getOrElse { error ->
                logger.warning("[OyasaiPets] Invalid owner UUID on entity: ${error.message}")
                null
              }
        } ?: return null
    val stats =
        PetStats(
            distance = entity.statDistance,
            jumps = entity.statJumps,
            toys = entity.statToys,
            brushes = entity.statBrushes,
            treats = entity.statTreats)
    val location =
        LocationData(
            world = entity.location.world?.name ?: "world",
            x = entity.location.x,
            y = entity.location.y,
            z = entity.location.z)
    return PetSnapshot(
        petId = petId,
        ownerUuid = ownerUuid,
        type = entity.type,
        customName = entity.customName()?.let { LEGACY_AMP.serialize(it) },
        variant = VariantHandler.getVariantNameFromEntity(entity),
        status = PetStatus.ALIVE,
        lastLocation = location,
        stats = stats,
        skillType = entity.skillType,
        skillUnlockedLevel = entity.skillUnlockedLevel,
        foodLevel = entity.foodLevel,
        particleUnlocked = entity.particleUnlocked,
        breedCount = entity.breedCount,
        originalOwnerId = entity.originalOwnerId)
  }

  fun syncEntityToJson(entity: LivingEntity) {
    val snapshot = snapshotFromEntity(entity) ?: return
    PetDataManager.updateFromSnapshot(snapshot.ownerUuid, snapshot)
  }

  fun syncDataToEntity(ownerUuid: UUID, petData: PetData) {
    val entity =
        ActivePetRegistry.findByPetId(petData.petId)?.takeIf { it.ownerId == ownerUuid.toString() }
            ?: return
    petData.customName?.let { rawName ->
      // デフォルト名に古い番号が埋め込まれている場合、正しいpetNumberで修正して保存
      val corrected = rawName.replace(Regex(""" #\d+$"""), " #${petData.petNumber}")
      if (corrected != rawName) {
        petData.customName = corrected
        PetDataManager.savePet(ownerUuid, petData)
      }
      entity.customName(LEGACY_AMP.deserialize(corrected))
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
    entity.particleUnlocked = petData.particleUnlocked
    petData.variant?.let { VariantHandler.applyVariant(entity, it) }
  }
}

// ===== File: PetExtensions.kt =====
/** LivingEntityの拡張プロパティ - ペットデータへのアクセスを提供 */

// 基本情報
var LivingEntity.foodLevel: Int
  get() = persistentDataContainer.get(BigWolfKeys.FOOD, PersistentDataType.INTEGER) ?: 0
  set(value) = persistentDataContainer.set(BigWolfKeys.FOOD, PersistentDataType.INTEGER, value)

var LivingEntity.ownerId: String?
  get() = persistentDataContainer.get(BigWolfKeys.OWNER, PersistentDataType.STRING)
  set(value) {
    if (value != null)
        persistentDataContainer.set(BigWolfKeys.OWNER, PersistentDataType.STRING, value)
  }

var LivingEntity.particleType: Int
  get() = persistentDataContainer.get(BigWolfKeys.PARTICLE, PersistentDataType.INTEGER) ?: 0
  set(value) = persistentDataContainer.set(BigWolfKeys.PARTICLE, PersistentDataType.INTEGER, value)

var LivingEntity.petId: String?
  get() = persistentDataContainer.get(BigWolfKeys.PET_ID, PersistentDataType.STRING)
  set(value) {
    if (value != null)
        persistentDataContainer.set(BigWolfKeys.PET_ID, PersistentDataType.STRING, value)
  }

// スキル関連
var LivingEntity.skillType: Int
  get() = persistentDataContainer.get(BigWolfKeys.SKILL_TYPE, PersistentDataType.INTEGER) ?: 0
  set(value) =
      persistentDataContainer.set(BigWolfKeys.SKILL_TYPE, PersistentDataType.INTEGER, value)

var LivingEntity.skillUnlockedLevel: Int
  get() = persistentDataContainer.get(BigWolfKeys.SKILL_UNLOCKED, PersistentDataType.INTEGER) ?: 0
  set(value) =
      persistentDataContainer.set(BigWolfKeys.SKILL_UNLOCKED, PersistentDataType.INTEGER, value)

var LivingEntity.isHovering: Boolean
  get() =
      (persistentDataContainer.get(BigWolfKeys.HOVER_STATE, PersistentDataType.BYTE) ?: 0)
          .toInt() == 1
  set(value) =
      persistentDataContainer.set(
          BigWolfKeys.HOVER_STATE, PersistentDataType.BYTE, if (value) 1 else 0)

// 統計情報
var LivingEntity.statDistance: Double
  get() = persistentDataContainer.get(BigWolfKeys.STAT_DISTANCE, PersistentDataType.DOUBLE) ?: 0.0
  set(value) =
      persistentDataContainer.set(BigWolfKeys.STAT_DISTANCE, PersistentDataType.DOUBLE, value)

var LivingEntity.statJumps: Int
  get() = persistentDataContainer.get(BigWolfKeys.STAT_JUMPS, PersistentDataType.INTEGER) ?: 0
  set(value) =
      persistentDataContainer.set(BigWolfKeys.STAT_JUMPS, PersistentDataType.INTEGER, value)

var LivingEntity.statToys: Int
  get() = persistentDataContainer.get(BigWolfKeys.STAT_TOYS, PersistentDataType.INTEGER) ?: 0
  set(value) = persistentDataContainer.set(BigWolfKeys.STAT_TOYS, PersistentDataType.INTEGER, value)

var LivingEntity.statBrushes: Int
  get() = persistentDataContainer.get(BigWolfKeys.STAT_BRUSHES, PersistentDataType.INTEGER) ?: 0
  set(value) =
      persistentDataContainer.set(BigWolfKeys.STAT_BRUSHES, PersistentDataType.INTEGER, value)

var LivingEntity.statTreats: Int
  get() = persistentDataContainer.get(BigWolfKeys.STAT_TREATS, PersistentDataType.INTEGER) ?: 0
  set(value) =
      persistentDataContainer.set(BigWolfKeys.STAT_TREATS, PersistentDataType.INTEGER, value)

// PCDバージョン（v2で追加）
var LivingEntity.pcdVersion: Int
  get() = persistentDataContainer.get(BigWolfKeys.PCD_VERSION, PersistentDataType.INTEGER) ?: 1
  set(value) =
      persistentDataContainer.set(BigWolfKeys.PCD_VERSION, PersistentDataType.INTEGER, value)

// 譲渡関連（v2で追加）
var LivingEntity.originalOwnerId: String?
  get() = persistentDataContainer.get(BigWolfKeys.ORIGINAL_OWNER, PersistentDataType.STRING)
  set(value) {
    if (value != null)
        persistentDataContainer.set(BigWolfKeys.ORIGINAL_OWNER, PersistentDataType.STRING, value)
  }

var LivingEntity.transferCount: Int
  get() = persistentDataContainer.get(BigWolfKeys.TRANSFER_COUNT, PersistentDataType.INTEGER) ?: 0
  set(value) =
      persistentDataContainer.set(BigWolfKeys.TRANSFER_COUNT, PersistentDataType.INTEGER, value)

// 交配関連（v2で追加）
var LivingEntity.parent1Id: String?
  get() = persistentDataContainer.get(BigWolfKeys.PARENT_1, PersistentDataType.STRING)
  set(value) {
    if (value != null)
        persistentDataContainer.set(BigWolfKeys.PARENT_1, PersistentDataType.STRING, value)
  }

var LivingEntity.parent2Id: String?
  get() = persistentDataContainer.get(BigWolfKeys.PARENT_2, PersistentDataType.STRING)
  set(value) {
    if (value != null)
        persistentDataContainer.set(BigWolfKeys.PARENT_2, PersistentDataType.STRING, value)
  }

var LivingEntity.generation: Int
  get() = persistentDataContainer.get(BigWolfKeys.GENERATION, PersistentDataType.INTEGER) ?: 1
  set(value) =
      persistentDataContainer.set(BigWolfKeys.GENERATION, PersistentDataType.INTEGER, value)

var LivingEntity.breedCount: Int
  get() = persistentDataContainer.get(BigWolfKeys.BREED_COUNT, PersistentDataType.INTEGER) ?: 0
  set(value) =
      persistentDataContainer.set(BigWolfKeys.BREED_COUNT, PersistentDataType.INTEGER, value)

// パーティクルアンロック（v2で追加）- カンマ区切りの文字列
// デフォルト: 0,1,2,3,4 (なし、電気、炎、青炎、ハート)
var LivingEntity.particleUnlocked: String
  get() =
      persistentDataContainer.get(BigWolfKeys.PARTICLE_UNLOCKED, PersistentDataType.STRING)
          ?: "0,1,2,3,4"
  set(value) =
      persistentDataContainer.set(BigWolfKeys.PARTICLE_UNLOCKED, PersistentDataType.STRING, value)

/** パーティクルがアンロック済みかチェック */
fun LivingEntity.isParticleUnlocked(particleId: Int): Boolean {
  return particleUnlocked.split(",").map { it.trim().toIntOrNull() ?: -1 }.contains(particleId)
}

/** パーティクルをアンロック */
fun LivingEntity.unlockParticle(particleId: Int) {
  val current =
      particleUnlocked
          .split(",")
          .map { it.trim().toIntOrNull() ?: -1 }
          .filter { it >= 0 }
          .toMutableSet()
  current.add(particleId)
  particleUnlocked = current.sorted().joinToString(",")
}

// 能力値補正（v2.1）
var LivingEntity.speedMultiplier: Double
  get() =
      persistentDataContainer.get(BigWolfKeys.SPEED_MULTIPLIER, PersistentDataType.DOUBLE) ?: 1.0
  set(value) =
      persistentDataContainer.set(BigWolfKeys.SPEED_MULTIPLIER, PersistentDataType.DOUBLE, value)

var LivingEntity.jumpMultiplier: Double
  get() = persistentDataContainer.get(BigWolfKeys.JUMP_MULTIPLIER, PersistentDataType.DOUBLE) ?: 1.0
  set(value) =
      persistentDataContainer.set(BigWolfKeys.JUMP_MULTIPLIER, PersistentDataType.DOUBLE, value)

// 性質（v3）: "typical" = 定型, "atypical" = 非定型
var LivingEntity.temperament: String
  get() =
      persistentDataContainer.get(BigWolfKeys.TEMPERAMENT, PersistentDataType.STRING) ?: "typical"
  set(value) =
      persistentDataContainer.set(BigWolfKeys.TEMPERAMENT, PersistentDataType.STRING, value)

/** このペットが非定型かどうかを判定 */
fun LivingEntity.isAtypical(): Boolean = temperament == "atypical"

/** 指定されたプレイヤーがこのペットの飼い主かどうかを判定 */
@Suppress("unused") fun LivingEntity.isOwnedBy(playerId: String): Boolean = ownerId == playerId

fun String.containsDefaultPetMarker(): Boolean = this.contains("'s Big ") || this.contains("の大")

fun String.startsWithDefaultPetName(playerName: String): Boolean =
    this.startsWith("${playerName}'s Big ") || this.startsWith("${playerName}の大")

/** PCDのマイグレーション - 古いバージョンのデータを最新に更新 */
@Suppress("unused")
fun LivingEntity.migratePcdIfNeeded() {
  val version = pcdVersion
  if (version < BigWolfKeys.CURRENT_PCD_VERSION) {
    // v1 → v2 マイグレーション
    if (version < 2) {
      // originalOwnerが未設定なら現在のownerを設定
      if (originalOwnerId == null && ownerId != null) {
        originalOwnerId = ownerId
      }
      // transferCountが未設定なら0
      if (persistentDataContainer.get(BigWolfKeys.TRANSFER_COUNT, PersistentDataType.INTEGER) ==
          null) {
        transferCount = 0
      }
      // particleUnlockedが未設定なら"0"（デフォルトパーティクルのみ）
      if (persistentDataContainer.get(BigWolfKeys.PARTICLE_UNLOCKED, PersistentDataType.STRING) ==
          null) {
        particleUnlocked = "0"
      }
      // generationが未設定なら1（第1世代）
      if (persistentDataContainer.get(BigWolfKeys.GENERATION, PersistentDataType.INTEGER) == null) {
        generation = 1
      }
      // breedCountが未設定なら0
      if (persistentDataContainer.get(BigWolfKeys.BREED_COUNT, PersistentDataType.INTEGER) ==
          null) {
        breedCount = 0
      }
    }
    // 最新バージョンに更新
    pcdVersion = BigWolfKeys.CURRENT_PCD_VERSION
  }
}

object SpawnUtils {
  private const val MAX_CLEARANCE_SEARCH = 6

  /**
   * 通常のスポーンエッグと同じ挙動でスポーン位置を決定
   * - 基本的にクリックした位置をそのまま使用
   * - 固体ブロック内の場合のみ調整
   */
  fun findSafeSpawnLocation(base: Location): Location {
    val world = base.world ?: return base
    val loc = base.clone()

    // クリック位置のブロックが固体の場合のみ上に移動
    val block = world.getBlockAt(loc.blockX, loc.blockY, loc.blockZ)
    if (block.type.isSolid && !block.isPassable) {
      // 上に空間を探す
      for (i in 1..MAX_CLEARANCE_SEARCH) {
        val checkBlock = world.getBlockAt(loc.blockX, loc.blockY + i, loc.blockZ)
        if (checkBlock.isPassable || checkBlock.isLiquid) {
          loc.y = (loc.blockY + i).toDouble() + 0.01
          return loc
        }
      }
    }

    // そのままの位置を返す（水中、空中、地上すべてOK）
    return loc
  }

  /** 旧式の安全な地上スポーン位置を検索（後方互換性のため残す） */
  fun findSafeGroundLocation(base: Location): Location? {
    val world = base.world ?: return null
    val loc = base.clone()
    if (!ensureAirColumn(world, loc)) {
      @Suppress("unused")
      for (step in 1..MAX_CLEARANCE_SEARCH) {
        loc.y += 1.0
        if (ensureAirColumn(world, loc)) break
      }
      if (!ensureAirColumn(world, loc)) {
        return null
      }
    }
    var groundY = loc.blockY - 1
    var steps = 0
    while (steps < MAX_CLEARANCE_SEARCH) {
      val ground = world.getBlockAt(loc.blockX, groundY, loc.blockZ)
      if (ground.type.isSolid && !ground.isLiquid) {
        loc.y = groundY + 1.01
        return loc
      }
      groundY--
      steps++
    }
    return null
  }

  private fun ensureAirColumn(world: World, loc: Location): Boolean {
    for (offset in 0..1) {
      val block = world.getBlockAt(loc.blockX, loc.blockY + offset, loc.blockZ)
      if (!block.isPassable || block.isLiquid) {
        return false
      }
    }
    return true
  }
}

// ===== File: commands/CommandManager.kt =====
/** コマンドマネージャー コマンドのルーティングとディスパッチを管理 */
class CommandManager(
    private val playerCommands: PlayerCommands,
    private val opCommands: OpCommands
) : CommandExecutor {

  override fun onCommand(
      sender: CommandSender,
      command: Command,
      label: String,
      args: Array<out String>
  ): Boolean {
    if (sender !is Player) {
      sender.sendMessage(Component.text("プレイヤーのみ可能です。", RED))
      return true
    }

    return when (command.name.lowercase()) {
      "bigwolf" -> handlePlayerCommand(sender, args)
      "bigwolfop" -> handleOpCommand(sender, args)
      else -> true
    }
  }

  private fun handlePlayerCommand(player: Player, args: Array<out String>): Boolean =
      playerCommands.handleCommand(player, args)

  private fun handleOpCommand(player: Player, args: Array<out String>): Boolean {
    if (!player.isOp) {
      player.sendMessage(Component.text("このコマンドはOP専用です。", RED))
      return true
    }

    return opCommands.handleCommand(player, args)
  }
}

// ===== File: commands/CommandTabCompleter.kt =====
/** タブ補完を提供 BigWolf.ktのonTabComplete実装を分離したもの */
object CommandTabCompleter {

  /** /bigwolfop コマンドのタブ補完 */
  fun onTabCompleteOp(sender: CommandSender, args: Array<out String>): List<String> {
    if (!sender.isOp) return mutableListOf()

    val a0 = args.getOrNull(0)?.lowercase() ?: ""
    val a1 = args.getOrNull(1)?.lowercase() ?: ""

    // debug_egg の key=value タブ補完ヘルパー
    fun debugEggKv(current: String): List<String> {
      val keys =
          listOf(
              "variant=",
              "level=",
              "skill=",
              "unlocked=",
              "speed=",
              "jump=",
              "gen=",
              "temperament=")
      return if ("=" in current) {
        val key = current.substringBefore("=")
        val vp = current.substringAfter("=")
        when (key) {
          "temperament" ->
              listOf("typical", "atypical").filter { it.startsWith(vp) }.map { "temperament=$it" }
          "skill",
          "unlocked" -> listOf("0", "1", "2", "3").filter { it.startsWith(vp) }.map { "$key=$it" }
          else -> emptyList()
        }
      } else {
        keys.filter { it.startsWith(current) }
      }
    }

    val configGlobalKeys =
        listOf(
            "foodPointCost",
            "maxFoodLevel",
            "defaultShopCost",
            "skillBookShopCostLv1",
            "skillBookShopCostLv2",
            "skillBookShopCostLv3",
            "skillBookUseCostLv1",
            "skillBookUseCostLv2",
            "skillBookUseCostLv3",
            "skillBookCostLv1",
            "skillBookCostLv2",
            "skillBookCostLv3",
            "reviveCost",
            "recoverCost",
            "healItemAmount",
            "breedMinLevel",
            "breedCost",
            "maxBreedCount",
            "breedRandomMin",
            "breedRandomMax",
            "breedGenBonusPerGen",
            "breedGenBonusMax",
            "breedMutationChance",
            "breedMutationBoost",
            "breedStatCap",
            "breedBonusLevelPerGen",
            "breedBonusLevelMax",
            "breedParentVariantWeight",
            "breedOtherVariantWeight",
            "playLevelUpChance",
            "playLevelUpMaxLevel",
            "spawnAiEnabled",
            "freeRoamSpeedMultiplier",
            "freeRoamFlyingSpeedMultiplier",
            "atypicalBaseChance",
            "atypicalOneParentChance",
            "atypicalBothParentChance",
            "atypicalLevelUpBonus",
            "atypicalAffectionBonus",
            "childAiEnabled")
    val configMobKeys = listOf("baseSpeed", "maxSpeed", "jumpPower", "scaleMin", "scaleMax")
    val configMobNames = PetRegistry.allConfigurableTypes().map { it.name.lowercase() }.sorted()

    val result: List<String> =
        when (args.size) {
          1 ->
              listOf(
                      "version",
                      "reload",
                      "item",
                      "force_store",
                      "force_storeall",
                      "history",
                      "debug_egg",
                      "config")
                  .filter { it.startsWith(a0) }

          2 ->
              when (a0) {
                "item" ->
                    listOf(
                            "food",
                            "brush",
                            "treat",
                            "heal",
                            "toys",
                            "skillbook",
                            "skillbook1",
                            "skillbook2",
                            "skillbook3",
                            "particle",
                            "all")
                        .filter { it.startsWith(a1) }

                "force_storeall",
                "history" ->
                    Bukkit.getOnlinePlayers()
                        .map { it.name }
                        .filter { it.lowercase().startsWith(a1) }

                "debug_egg" ->
                    EntityType.entries
                        .filter { it.isSpawnable && it.isAlive }
                        .map { it.name.lowercase() }
                        .filter { it.startsWith(a1) }
                "config" -> listOf("list", "get", "set", "mob").filter { it.startsWith(a1) }

                else -> emptyList()
              }

          3 ->
              when (a0) {
                "history" -> {
                  // ページ番号の候補（1-5程度）
                  (1..5).map { it.toString() }.filter { it.startsWith(args[2]) }
                }

                "debug_egg" -> debugEggKv(args[2].lowercase())

                "config" -> {
                  val cur = args[2].lowercase()
                  when (a1) {
                    "get",
                    "set" -> configGlobalKeys.filter { it.lowercase().startsWith(cur) }
                    "mob" -> configMobNames.filter { it.startsWith(cur) }
                    else -> emptyList()
                  }
                }

                else -> emptyList()
              }

          4 ->
              when {
                a0 == "config" && a1 == "mob" -> {
                  val cur = args[3].lowercase()
                  listOf("list", "get", "set").filter { it.startsWith(cur) }
                }
                a0 == "debug_egg" -> debugEggKv(args.last().lowercase())
                else -> emptyList()
              }

          5 ->
              when {
                a0 == "config" && a1 == "mob" -> {
                  val mobSub = args[3].lowercase()
                  val cur = args[4].lowercase()
                  if (mobSub == "get" || mobSub == "set")
                      configMobKeys.filter { it.lowercase().startsWith(cur) }
                  else emptyList()
                }
                a0 == "debug_egg" -> debugEggKv(args.last().lowercase())
                else -> emptyList()
              }

          else -> if (a0 == "debug_egg") debugEggKv(args.last().lowercase()) else emptyList()
        }
    return result.toMutableList()
  }

  /** /bigwolf コマンドのタブ補完 */
  fun onTabCompletePlayer(args: Array<out String>): List<String> {
    val a0 = args.getOrNull(0)?.lowercase() ?: ""
    val a1 = args.getOrNull(1)?.lowercase() ?: ""
    val a2 = args.getOrNull(2)?.lowercase() ?: ""

    val result: List<String> =
        when (args.size) {
          1 -> {
            val base =
                listOf(
                    "buy",
                    "menu",
                    "storeall",
                    "revive",
                    "dead",
                    "history",
                    "locate",
                    "recover",
                    "breed",
                    "transfer",
                    "list",
                    "version",
                    "abandon")
            base.filter { it.startsWith(a0) }
          }

          2 ->
              when (a0) {
                "buy" -> {
                  PetRegistry.officialPets.map { it.name.lowercase() }.filter { it.startsWith(a1) }
                }
                "revive",
                "locate",
                "recover",
                "abandon" -> {
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
                  if (type != null) {
                    VariantHandler.getVariantNames(type)
                        .map { it.lowercase() }
                        .filter { it.startsWith(a1) }
                  } else emptyList()
                }
              }

          3 ->
              when (a0) {
                "buy" -> {
                  val type = runCatching { EntityType.valueOf(args[1].uppercase()) }.getOrNull()
                  if (type != null) {
                    VariantHandler.getVariantNames(type)
                        .map { it.lowercase() }
                        .filter { it.startsWith(args[2].lowercase()) }
                  } else emptyList()
                }
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
}

// ===== File: commands/OpCommands.kt =====
/** OP専用コマンド処理 */
class OpCommands(
    private val plugin: JavaPlugin,
    private val showUsageFn: (Player) -> Unit,
    private val forceStoreFn: (Player) -> Unit,
    private val forceStoreAllFn: (Player, Array<out String>) -> Unit,
    private val historyFn: (Player, Array<out String>) -> Unit
) {

  fun handleCommand(player: Player, args: Array<out String>): Boolean {
    if (args.isEmpty()) {
      showUsageFn(player)
      return true
    }

    return when (val sub = args[0].lowercase()) {
      "item" -> {
        handleItemCommand(player, args)
        true
      }
      "reload" -> {
        handleReload(player)
        true
      }
      "version" -> {
        handleVersion(player)
        true
      }
      "force_store" -> {
        forceStoreFn(player)
        true
      }
      "force_storeall" -> {
        forceStoreAllFn(player, args)
        true
      }
      "history" -> {
        historyFn(player, args)
        true
      }
      "debug_egg" -> {
        handleDebugEgg(player, args)
        true
      }
      "config" -> {
        handleConfigCommand(player, args)
        true
      }
      else -> {
        player.sendMessage(Component.text("不明なサブコマンド: $sub", RED))
        false
      }
    }
  }

  /** アイテム配布コマンド */
  fun handleItemCommand(player: Player, args: Array<out String>) {
    if (args.size < 2) {
      player.sendMessage(
          Component.text(
              "使い方: /bigwolf item <food|brush|treat|heal|toys|skillbook|skillbook1|skillbook2|skillbook3|particle|all>",
              RED))
      return
    }

    val key = args[1].lowercase()
    when (key) {
      "food" -> {
        player.inventory.addItem(PetItemFactory.createPetFoodItem())
        player.sendMessage(Component.text("ペットフードを入手しました！", GREEN))
      }
      "brush" -> {
        player.inventory.addItem(PetItemFactory.createPetBrushItem())
        player.sendMessage(Component.text("ペットブラシを入手しました！", GREEN))
      }
      "treat" -> {
        player.inventory.addItem(PetItemFactory.createPetTreatItem())
        player.sendMessage(Component.text("ペットのおやつを入手しました！", GREEN))
      }
      "heal" -> {
        player.inventory.addItem(PetItemFactory.createPetHealItem())
        player.sendMessage(Component.text("ヒールポーションを入手しました！", GREEN))
      }
      "toys" -> {
        val toys = PetRegistry.getAllToyItems()
        if (toys.isNotEmpty()) {
          toys.forEach { player.inventory.addItem(it) }
          player.sendMessage(Component.text("おもちゃセットを入手しました！", GREEN))
        } else {
          player.sendMessage(Component.text("おもちゃ定義が見つかりません。", GRAY))
        }
      }
      "skillbook" -> {
        player.inventory.addItem(PetItemFactory.createSkillUnlockItem(1))
        player.inventory.addItem(PetItemFactory.createSkillUnlockItem(2))
        player.inventory.addItem(PetItemFactory.createSkillUnlockItem(3))
        player.sendMessage(Component.text("スキル強化用アイテムを入手しました！", LIGHT_PURPLE))
      }
      "skillbook1" -> {
        player.inventory.addItem(PetItemFactory.createSkillUnlockItem(1))
        player.sendMessage(Component.text("スキルブック(Lv.1)を入手しました！", LIGHT_PURPLE))
      }
      "skillbook2" -> {
        player.inventory.addItem(PetItemFactory.createSkillUnlockItem(2))
        player.sendMessage(Component.text("スキルブック(Lv.2)を入手しました！", LIGHT_PURPLE))
      }
      "skillbook3" -> {
        player.inventory.addItem(PetItemFactory.createSkillUnlockItem(3))
        player.sendMessage(Component.text("スキルブック(Lv.3)を入手しました！", LIGHT_PURPLE))
      }
      "particle" -> {
        for (i in 5..10) {
          player.inventory.addItem(PetItemFactory.createParticleUnlockItem(i))
        }
        player.sendMessage(Component.text("パーティクルの結晶セットを入手しました！", LIGHT_PURPLE))
      }
      "all" -> {
        player.inventory.addItem(PetItemFactory.createPetFoodItem())
        player.inventory.addItem(PetItemFactory.createPetBrushItem())
        player.inventory.addItem(PetItemFactory.createPetTreatItem())
        player.inventory.addItem(PetItemFactory.createPetHealItem())
        PetRegistry.getAllToyItems().forEach { player.inventory.addItem(it) }
        player.inventory.addItem(PetItemFactory.createSkillUnlockItem(1))
        player.inventory.addItem(PetItemFactory.createSkillUnlockItem(2))
        player.inventory.addItem(PetItemFactory.createSkillUnlockItem(3))
        for (i in 5..10) {
          player.inventory.addItem(PetItemFactory.createParticleUnlockItem(i))
        }
        player.sendMessage(Component.text("全アイテムを入手しました！", GREEN))
      }
      else -> {
        player.sendMessage(Component.text("不明なアイテムタイプ: $key", RED))
      }
    }
  }

  /** 実験的召喚コマンド */
  /** 設定リロードコマンド */
  fun handleReload(player: Player) {
    plugin.reloadConfig()
    BigWolfConfig.loadFrom(plugin.config)
    PetRegistry.applyConfig(plugin)
    player.sendMessage(Component.text("BigWolf: config reloaded!", GREEN))
  }

  /** バージョン表示コマンド */
  @Suppress("DEPRECATION")
  fun handleVersion(player: Player) {
    val version = plugin.description.version
    player.sendMessage(Component.text("=== OyasaiPets (BigWolf) ===", GOLD))
    player.sendMessage(Component.text("Version: $version", YELLOW))
  }

  private fun handleDebugEgg(player: Player, args: Array<out String>) {
    if (args.size < 2) {
      player.sendMessage(
          Component.text(
              "使い方: /bigwolfop debug_egg <mob> [variant=<name>] [level=<n>] [skill=<0-3>] [unlocked=<0-3>] [speed=<1.0>] [jump=<1.0>] [gen=<1>] [temperament=<typical|atypical>]",
              RED))
      return
    }
    val type = runCatching { EntityType.valueOf(args[1].uppercase()) }.getOrNull()
    if (type == null || !type.isAlive) {
      player.sendMessage(Component.text("無効なMOB名: ${args[1]}", RED))
      return
    }
    val params = mutableMapOf<String, String>()
    for (i in 2 until args.size) {
      val kv = args[i].split("=", limit = 2)
      if (kv.size == 2) params[kv[0].lowercase()] = kv[1]
    }
    val variant = params["variant"]
    val level = params["level"]?.toIntOrNull()?.coerceIn(0, BigWolfConfig.maxFoodLevel) ?: 0
    val skillType = params["skill"]?.toIntOrNull()?.coerceIn(0, 3) ?: 0
    val unlocked = params["unlocked"]?.toIntOrNull()?.coerceIn(0, 3) ?: 0
    val speedMul = params["speed"]?.toDoubleOrNull() ?: 1.0
    val jumpMul = params["jump"]?.toDoubleOrNull() ?: 1.0
    val gen = params["gen"]?.toIntOrNull() ?: 0
    val temperament = params["temperament"]?.lowercase() ?: "typical"
    val allParticles = "0,1,2,3,4,5,6,7,8,9,10"

    val petId = UUID.randomUUID().toString()
    val debugName = "[DEBUG] ${type.name}${variant?.let { " ($it)" } ?: ""}"

    // PetDataManagerに登録（STORED状態で）
    PetDataManager.recordPurchase(player.uniqueId, petId, type, variant, debugName)
    PetDataManager.updateFromSnapshot(
        player.uniqueId,
        PetSnapshot(
            petId = petId,
            ownerUuid = player.uniqueId,
            type = type,
            customName = debugName,
            variant = variant,
            status = PetStatus.STORED,
            lastLocation = null,
            stats = PetStats(),
            skillType = skillType,
            skillUnlockedLevel = unlocked,
            foodLevel = level,
            particleUnlocked = allParticles,
            breedCount = 0,
            originalOwnerId = null,
        ))

    // 収納スポーンエッグを作成
    val eggMat = Material.getMaterial("${type.name}_SPAWN_EGG") ?: Material.PIG_SPAWN_EGG
    val item = ItemStack(eggMat)
    val meta = item.itemMeta
    val pdc = meta.persistentDataContainer
    meta.displayName(
        Component.text("【DEBUG】${type.name}${variant?.let { " ($it)" } ?: ""}", LIGHT_PURPLE))
    meta.lore(
        listOf(
            Component.text("★ デバッグ用スポーンエッグ", RED),
            Component.text("右クリックでペットを解放", GRAY),
            Component.text("Lv: $level | スキル: $skillType | 解放: $unlocked", YELLOW),
            Component.text("速度: $speedMul | ジャンプ: $jumpMul | 世代: $gen", YELLOW),
            Component.text("性質: $temperament", YELLOW),
            Component.text("全パーティクル解放済み", AQUA),
        ))

    pdc.set(BigWolfKeys.STORED_FLAG, PersistentDataType.BYTE, 1)
    pdc.set(BigWolfKeys.STORED_TYPE, PersistentDataType.STRING, type.name)
    variant?.let { pdc.set(BigWolfKeys.STORED_VARIANT, PersistentDataType.STRING, it) }
    pdc.set(BigWolfKeys.STORED_NAME, PersistentDataType.STRING, debugName)
    pdc.set(BigWolfKeys.STORED_ID, PersistentDataType.STRING, petId)
    pdc.set(BigWolfKeys.STORED_OWNER, PersistentDataType.STRING, player.uniqueId.toString())
    pdc.set(BigWolfKeys.STORED_SKILL, PersistentDataType.INTEGER, skillType)
    pdc.set(BigWolfKeys.STORED_UNLOCKED, PersistentDataType.INTEGER, unlocked)
    pdc.set(BigWolfKeys.FOOD, PersistentDataType.INTEGER, level)
    pdc.set(BigWolfKeys.STORED_STAT_DISTANCE, PersistentDataType.DOUBLE, 0.0)
    pdc.set(BigWolfKeys.STORED_STAT_JUMPS, PersistentDataType.INTEGER, 0)
    pdc.set(BigWolfKeys.STORED_STAT_TOYS, PersistentDataType.INTEGER, 0)
    pdc.set(BigWolfKeys.STORED_STAT_BRUSHES, PersistentDataType.INTEGER, 0)
    pdc.set(BigWolfKeys.STORED_STAT_TREATS, PersistentDataType.INTEGER, 0)
    pdc.set(
        BigWolfKeys.STORED_PCD_VERSION, PersistentDataType.INTEGER, BigWolfKeys.CURRENT_PCD_VERSION)
    pdc.set(BigWolfKeys.STORED_BREED_COUNT, PersistentDataType.INTEGER, 0)
    pdc.set(BigWolfKeys.STORED_PARTICLE_UNLOCKED, PersistentDataType.STRING, allParticles)
    pdc.set(BigWolfKeys.STORED_SPEED_MULTIPLIER, PersistentDataType.DOUBLE, speedMul)
    pdc.set(BigWolfKeys.STORED_JUMP_MULTIPLIER, PersistentDataType.DOUBLE, jumpMul)
    pdc.set(BigWolfKeys.STORED_GENERATION, PersistentDataType.INTEGER, gen)
    pdc.set(BigWolfKeys.STORED_TEMPERAMENT, PersistentDataType.STRING, temperament)
    pdc.set(BigWolfKeys.STORED_TRANSFER_COUNT, PersistentDataType.INTEGER, 0)
    meta.addEnchant(Enchantment.UNBREAKING, 1, true)
    meta.addItemFlags(ItemFlag.HIDE_ENCHANTS)
    item.itemMeta = meta

    player.inventory.addItem(item)
    player.sendMessage(Component.text("デバッグ用スポーンエッグを付与しました: $debugName", GREEN))
  }

  private fun handleConfigCommand(player: Player, args: Array<out String>) {
    when (args.getOrNull(1)?.lowercase()) {
      null,
      "list" -> {
        player.sendMessage(Component.text("=== BigWolf Config ===", GOLD))
        BigWolfConfig.asEntryList().forEach { (key, value) ->
          player.sendMessage(Component.text("  $key = $value", YELLOW))
        }
        player.sendMessage(
            Component.text("使い方: /bigwolfop config get <key> | set <key> <value>", GRAY))
      }
      "get" -> {
        val key =
            args.getOrNull(2)
                ?: run {
                  player.sendMessage(Component.text("使い方: /bigwolfop config get <key>", RED))
                  return
                }
        val value =
            BigWolfConfig.getField(key)
                ?: run {
                  player.sendMessage(Component.text("不明なキー: $key", RED))
                  return
                }
        player.sendMessage(Component.text("$key = $value", YELLOW))
      }
      "set" -> {
        val key =
            args.getOrNull(2)
                ?: run {
                  player.sendMessage(
                      Component.text("使い方: /bigwolfop config set <key> <value>", RED))
                  return
                }
        val raw =
            args.getOrNull(3)
                ?: run {
                  player.sendMessage(
                      Component.text("使い方: /bigwolfop config set <key> <value>", RED))
                  return
                }
        if (!BigWolfConfig.setField(key, raw)) {
          player.sendMessage(Component.text("不明なキーまたは無効な値: $key = $raw", RED))
          return
        }
        BigWolfConfig.saveField(key, plugin)
        val newValue = BigWolfConfig.getField(key)
        player.sendMessage(Component.text("$key を $newValue に設定しました。", GREEN))
      }
      "mob" -> {
        val mobName = args.getOrNull(2)
        if (mobName == null) {
          player.sendMessage(Component.text("利用可能なモブ:", GOLD))
          PetRegistry.allConfigurableTypes()
              .sortedBy { it.name }
              .forEach { player.sendMessage(Component.text("  ${it.name.lowercase()}", YELLOW)) }
          player.sendMessage(
              Component.text(
                  "使い方: /bigwolfop config mob <mob> [list | get <key> | set <key> <value>]", GRAY))
          return
        }
        val type =
            runCatching { EntityType.valueOf(mobName.uppercase(Locale.ROOT)) }.getOrNull()
                ?: run {
                  player.sendMessage(Component.text("不明なモブ: $mobName", RED))
                  return
                }
        when (args.getOrNull(3)?.lowercase()) {
          null,
          "list" -> {
            player.sendMessage(Component.text("=== ${type.name.lowercase()} ===", GOLD))
            PetRegistry.getMobEntryList(type).forEach { (k, v) ->
              player.sendMessage(Component.text("  $k = $v", YELLOW))
            }
            player.sendMessage(
                Component.text("キー: baseSpeed / maxSpeed / jumpPower / scaleMin / scaleMax", GRAY))
          }
          "get" -> {
            val key =
                args.getOrNull(4)
                    ?: run {
                      player.sendMessage(
                          Component.text("使い方: /bigwolfop config mob <mob> get <key>", RED))
                      return
                    }
            val value =
                PetRegistry.getMobField(type, key)
                    ?: run {
                      player.sendMessage(Component.text("不明なキー: $key", RED))
                      return
                    }
            player.sendMessage(Component.text("${type.name.lowercase()}.$key = $value", YELLOW))
          }
          "set" -> {
            val key =
                args.getOrNull(4)
                    ?: run {
                      player.sendMessage(
                          Component.text("使い方: /bigwolfop config mob <mob> set <key> <value>", RED))
                      return
                    }
            val raw =
                args.getOrNull(5)
                    ?: run {
                      player.sendMessage(
                          Component.text("使い方: /bigwolfop config mob <mob> set <key> <value>", RED))
                      return
                    }
            if (!PetRegistry.setMobField(type, key, raw, plugin)) {
              player.sendMessage(Component.text("不明なキーまたは無効な値: $key = $raw", RED))
              return
            }
            val newValue = PetRegistry.getMobField(type, key)
            player.sendMessage(
                Component.text("${type.name.lowercase()}.$key を $newValue に設定しました。", GREEN))
          }
          else ->
              player.sendMessage(
                  Component.text(
                      "使い方: /bigwolfop config mob <mob> [list | get <key> | set <key> <value>]",
                      RED))
        }
      }
      else ->
          player.sendMessage(
              Component.text(
                  "使い方: /bigwolfop config [list | get <key> | set <key> <value> | mob <mob> ...]",
                  RED))
    }
  }
}

// ===== File: commands/PlayerCommands.kt =====
/** 一般プレイヤー向けコマンド処理 */
class PlayerCommands(
    private val openMainMenuFn: (Player) -> Unit,
    private val openShopGuiFn: (Player) -> Unit,
    private val openPurchaseConfirmationFn: (Player, EntityType, String?) -> Unit,
    private val storeAllPetsFn: (Player) -> Unit,
    private val reviveFn: (Player, Array<out String>) -> Unit,
    private val deadListFn: (Player) -> Unit,
    private val historyFn: (Player, Array<out String>) -> Unit,
    private val locateFn: (Player, Array<out String>) -> Unit,
    private val recoverFn: (Player, Array<out String>) -> Unit,
    private val breedFn: (Player) -> Unit,
    private val renameFn: (Player, Array<out String>) -> Unit,
    private val transferFn: (Player, Array<out String>) -> Unit,
    private val normalSummonFn: (Player, String, Array<out String>) -> Unit,
    private val versionFn: (Player) -> Unit,
    private val abandonFn: (Player, Array<out String>) -> Unit,
    private val detailFn: (Player, Array<out String>) -> Unit,
    private val openPetListFn: (Player, PetListFilter) -> Unit
) {

  fun handleCommand(player: Player, args: Array<out String>): Boolean {
    if (args.isEmpty()) {
      showUsage(player)
      return true
    }

    val sub = args[0].lowercase()
    return when (sub) {
      "menu" -> {
        openMainMenuFn(player)
        true
      }
      "storeall" -> {
        storeAllPetsFn(player)
        true
      }
      "pets" -> {
        openPetListFn(player, PetListFilter.ALL)
        true
      }
      "revive" -> {
        reviveFn(player, args)
        true
      }
      "dead" -> {
        deadListFn(player)
        true
      }
      "history" -> {
        historyFn(player, args)
        true
      }
      "locate" -> {
        locateFn(player, args)
        true
      }
      "recover" -> {
        recoverFn(player, args)
        true
      }
      "breed" -> {
        breedFn(player)
        true
      }
      "rename" -> {
        renameFn(player, args)
        true
      }
      "transfer" -> {
        transferFn(player, args)
        true
      }
      "list" -> {
        handleListCommand(player)
        true
      }
      "version" -> {
        versionFn(player)
        true
      }
      "abandon" -> {
        abandonFn(player, args)
        true
      }
      "detail" -> {
        detailFn(player, args)
        true
      }
      "buy" -> {
        // 引数なし: 購入GUIを開く
        if (args.size == 1) {
          openShopGuiFn(player)
        } else {
          // 引数あり: /bigwolf buy <MOB> [variant]
          val mobName = args[1].lowercase()
          val type = runCatching { EntityType.valueOf(mobName.uppercase()) }.getOrNull()

          if (type == null || !PetRegistry.isOfficial(type)) {
            player.sendMessage(Component.text("無効なMOB名です: $mobName", RED))
            player.sendMessage(Component.text("/bigwolf list で購入可能なペット一覧を確認できます", YELLOW))
          } else {
            val variant = args.getOrNull(2)?.lowercase()
            // 直接購入確認画面を開く
            openPurchaseConfirmationFn(player, type, variant)
          }
        }
        true
      }
      else -> {
        val typeCheck =
            runCatching { PetRegistry.isOfficial(EntityType.valueOf(sub.uppercase())) }
                .getOrNull() == true
        if (typeCheck) {
          player.sendMessage(Component.text("ペット購入は /bigwolf buy $sub で行ってください。", YELLOW))
          normalSummonFn(player, sub, args)
          true
        } else {
          showUsage(player)
          false
        }
      }
    }
  }

  /** 使用方法を表示 */
  fun showUsage(player: Player) {
    player.sendMessage(Component.text("=== BigWolf 使用方法 ===", GOLD))
    player.sendMessage(Component.text("/bigwolf buy - ペットショップを開く", YELLOW))
    player.sendMessage(Component.text("/bigwolf list - 購入可能なペット一覧", YELLOW))
    player.sendMessage(Component.text("/bigwolf storeall - 自分の全ペットを収納", YELLOW))
    player.sendMessage(Component.text("/bigwolf dead - 死亡したペット一覧", YELLOW))
    player.sendMessage(Component.text("/bigwolf revive <番号> - ペットを復活", YELLOW))
    player.sendMessage(Component.text("/bigwolf breed - 交配", YELLOW))
    player.sendMessage(Component.text("/bigwolf abandon <番号> - ペットを放棄（2段階確認）", YELLOW))
    player.sendMessage(Component.text("/bigwolf history - ペット履歴一覧（行クリックで詳細）", YELLOW))
    player.sendMessage(Component.text("/bigwolf detail <番号> - ペット詳細情報を表示", YELLOW))
    player.sendMessage(Component.text("/bigwolf menu - メインメニューを開く", GOLD))
  }

  /** 購入可能なペット一覧を表示 */
  fun handleListCommand(player: Player) {
    player.sendMessage(Component.text("=== 購入可能なペット ===", GOLD))
    PetRegistry.officialPets.forEach { type ->
      val spec = PetRegistry.get(type)
      player.sendMessage(
          Component.text("- ${type.name}", YELLOW)
              .append(Component.text(" (カテゴリ: ${spec.category})", GRAY)))
    }
    player.sendMessage(Component.text("購入: /bigwolf buy <mob名> で購入画面を開けます", GREEN))
  }
}

// ===== File: domain/PetCategory.kt =====
/** ペットのカテゴリ分類 移動方法や環境適性を決定する */
enum class PetCategory {
  /** 陸上型: 水中で遅くなる */
  LAND,
  /** 水棲型: 水中で速く、陸で遅い */
  WATER,
  /** 飛行型: ジャンプで上昇、スローフォーリング */
  FLYING
}

// ===== File: domain/PetRegistry.kt =====
/** ペットレジストリ 公式ペット一覧と各ペットの仕様を管理 */
object PetRegistry {
  /** 公式にサポートされているペットの種類 */
  val officialPets: Set<EntityType> =
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
          EntityType.TURTLE,
          EntityType.ARMADILLO)

  /** コンフィグによる上書き */
  private val overrides = mutableMapOf<EntityType, PetSpec>()

  /** デフォルトのペット仕様 */
  private val defaultSpec = PetSpec(PetCategory.LAND, entityType = EntityType.PIG)

  /** 各ペットタイプの仕様定義 */
  private val specs: Map<EntityType, PetSpec> =
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
                  baseSpeed = 0.5,
                  maxSpeed = 1.0,
                  jumpPower = 0.8,
                  scaleRange = 2.0..3.0,
                  toyMaterial = Material.FISHING_ROD,
                  toyName = "猫じゃらし",
                  toyType = ToyType.FISHING_ROD),
          EntityType.FOX to
              PetSpec(
                  category = PetCategory.LAND,
                  entityType = EntityType.FOX,
                  baseSpeed = 0.5,
                  maxSpeed = 1.0,
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
                  scaleRange = 1.5..2.2,
                  toyMaterial = Material.PUFFERFISH,
                  toyName = "フグ風船",
                  toyType = ToyType.BALLOON_JUMP,
                  toyGravity = false),
          EntityType.AXOLOTL to
              PetSpec(
                  category = PetCategory.WATER,
                  entityType = EntityType.AXOLOTL,
                  baseSpeed = 0.5,
                  maxSpeed = 1.0,
                  scaleRange = 1.5..2.0,
                  toyMaterial = Material.TROPICAL_FISH_BUCKET,
                  toyName = "お魚バケツ",
                  toyType = ToyType.THROW_FETCH),
          EntityType.FROG to
              PetSpec(
                  category = PetCategory.WATER,
                  entityType = EntityType.FROG,
                  baseSpeed = 0.4,
                  maxSpeed = 0.8,
                  jumpPower = 1.2,
                  scaleRange = 2.0..2.8,
                  toyMaterial = Material.SLIME_BALL,
                  toyName = "スライムボール",
                  toyType = ToyType.THROW_FETCH),
          EntityType.PARROT to
              PetSpec(
                  category = PetCategory.FLYING,
                  entityType = EntityType.PARROT,
                  baseSpeed = 0.5,
                  maxSpeed = 1.0,
                  jumpPower = 0.5,
                  scaleRange = 2.0..3.0,
                  toyMaterial = Material.WHEAT_SEEDS,
                  toyName = "種のおもちゃ",
                  toyType = ToyType.THROW_FETCH,
                  toyGravity = false),
          EntityType.CHICKEN to
              PetSpec(
                  category = PetCategory.FLYING,
                  entityType = EntityType.CHICKEN,
                  maxHealth = 20.0,
                  baseSpeed = 0.4,
                  maxSpeed = 0.9,
                  jumpPower = 0.5,
                  toyMaterial = Material.MELON_SEEDS,
                  toyName = "スイカの種",
                  toyType = ToyType.THROW_FETCH),
          EntityType.BEE to
              PetSpec(
                  category = PetCategory.FLYING,
                  entityType = EntityType.BEE,
                  maxHealth = 16.0,
                  baseSpeed = 0.5,
                  maxSpeed = 1.0,
                  jumpPower = 0.5,
                  scaleRange = 1.25..1.75,
                  toyMaterial = Material.HONEY_BOTTLE,
                  toyName = "ハチミツ",
                  toyType = ToyType.THROW_FETCH),
          EntityType.ALLAY to
              PetSpec(
                  category = PetCategory.FLYING,
                  entityType = EntityType.ALLAY,
                  baseSpeed = 0.5,
                  maxSpeed = 1.0,
                  jumpPower = 0.5,
                  scaleRange = 1.5..2.0,
                  toyMaterial = Material.AMETHYST_SHARD,
                  toyName = "キラキラ",
                  toyType = ToyType.THROW_FETCH,
                  toyGravity = false),
          EntityType.RABBIT to
              PetSpec(
                  category = PetCategory.LAND,
                  entityType = EntityType.RABBIT,
                  maxHealth = 20.0,
                  baseSpeed = 0.4,
                  maxSpeed = 0.8,
                  jumpPower = 1.0,
                  scaleRange = 2.5..3.25,
                  toyMaterial = Material.CARROT,
                  toyName = "ニンジン",
                  toyType = ToyType.THROW_FETCH),
          EntityType.PANDA to
              PetSpec(
                  category = PetCategory.LAND,
                  entityType = EntityType.PANDA,
                  baseSpeed = 0.4,
                  maxSpeed = 0.8,
                  jumpPower = 0.4,
                  scaleRange = 1.25..1.5,
                  toyMaterial = Material.BAMBOO,
                  toyName = "竹",
                  toyType = ToyType.THROW_FETCH),
          EntityType.POLAR_BEAR to
              PetSpec(
                  category = PetCategory.LAND,
                  entityType = EntityType.POLAR_BEAR,
                  baseSpeed = 0.5,
                  maxSpeed = 1.0,
                  jumpPower = 0.4,
                  scaleRange = 1.25..1.5,
                  toyMaterial = Material.COD,
                  toyName = "魚",
                  toyType = ToyType.THROW_FETCH),
          EntityType.TURTLE to
              PetSpec(
                  category = PetCategory.WATER,
                  entityType = EntityType.TURTLE,
                  baseSpeed = 0.3,
                  maxSpeed = 0.7,
                  scaleRange = 1.25..1.75,
                  toyMaterial = Material.SEAGRASS,
                  toyName = "海草",
                  toyType = ToyType.THROW_FETCH),
          EntityType.ARMADILLO to
              PetSpec(
                  category = PetCategory.LAND,
                  entityType = EntityType.ARMADILLO,
                  baseSpeed = 0.4,
                  maxSpeed = 0.8,
                  jumpPower = 0.5,
                  scaleRange = 1.5..2.25,
                  toyMaterial = Material.SPIDER_EYE,
                  toyName = "クモの目",
                  toyType = ToyType.THROW_FETCH))

  /** 設定可能な全ペットタイプを取得 */
  fun allConfigurableTypes(): Set<EntityType> {
    return (officialPets + specs.keys).toSet()
  }

  /** 指定タイプのデフォルト仕様を取得 */
  fun getDefaultSpec(type: EntityType): PetSpec = specs[type] ?: defaultSpec.copy(entityType = type)

  /** config.ymlから設定を適用 */
  fun applyConfig(plugin: JavaPlugin) {
    overrides.clear()
    val sec = plugin.config.getConfigurationSection("pets") ?: return

    for (mobKey in sec.getKeys(false)) {
      val type =
          runCatching { EntityType.valueOf(mobKey.uppercase(Locale.ROOT)) }.getOrNull() ?: continue

      val base = "pets.$mobKey"
      val def = getDefaultSpec(type)

      val maxHealth = plugin.config.getDouble("$base.maxHealth", def.maxHealth)
      val baseSpeed = plugin.config.getDouble("$base.baseSpeed", def.baseSpeed)
      val maxSpeed = plugin.config.getDouble("$base.maxSpeed", def.maxSpeed)
      val jumpPower = plugin.config.getDouble("$base.jumpPower", def.jumpPower)
      val scaleMin = plugin.config.getDouble("$base.scaleMin", def.scaleRange.start)
      val scaleMax = plugin.config.getDouble("$base.scaleMax", def.scaleRange.endInclusive)

      val tuned =
          def.copy(
              maxHealth = maxHealth,
              baseSpeed = baseSpeed,
              maxSpeed = maxSpeed,
              jumpPower = jumpPower,
              scaleRange = scaleMin..scaleMax,
              entityType = type)

      overrides[type] = tuned
    }
  }

  /** 指定タイプの仕様を取得（コンフィグ上書き適用済み） */
  fun get(type: EntityType): PetSpec =
      overrides[type] ?: specs[type] ?: defaultSpec.copy(entityType = type)

  /** 指定タイプが公式ペットかどうか */
  fun isOfficial(type: EntityType): Boolean = officialPets.contains(type)

  /** アイテムに対応するおもちゃ仕様を検索 */
  fun findSpecByToy(item: ItemStack): PetSpec? {
    if (!item.hasItemMeta()) return null
    val name = PLAIN_TEXT.serialize(item.itemMeta.displayName() ?: return null)
    return specs.values.find { spec ->
      spec.toyMaterial == item.type && name.contains(spec.toyName ?: "")
    }
  }

  /** 全公式ペットのおもちゃアイテムリストを取得 */
  fun getAllToyItems(): List<ItemStack> {
    return officialPets.mapNotNull { type -> specs[type]?.createToyItem() }
  }

  /** モブスペックのキーと現在値の一覧を返す */
  fun getMobEntryList(type: EntityType): List<Pair<String, Any>> {
    val spec = get(type)
    return listOf(
        "baseSpeed" to spec.baseSpeed,
        "maxSpeed" to spec.maxSpeed,
        "jumpPower" to spec.jumpPower,
        "scaleMin" to spec.scaleRange.start,
        "scaleMax" to spec.scaleRange.endInclusive,
    )
  }

  /** モブスペックの特定フィールドの現在値を取得 */
  fun getMobField(type: EntityType, key: String): Any? {
    val spec = get(type)
    return when (key) {
      "baseSpeed" -> spec.baseSpeed
      "maxSpeed" -> spec.maxSpeed
      "jumpPower" -> spec.jumpPower
      "scaleMin" -> spec.scaleRange.start
      "scaleMax" -> spec.scaleRange.endInclusive
      else -> null
    }
  }

  /** モブスペックのフィールドを変更してメモリとconfig.ymlに反映（成功時true） */
  fun setMobField(type: EntityType, key: String, raw: String, plugin: JavaPlugin): Boolean {
    val spec = get(type)
    val updated =
        when (key) {
          "baseSpeed" -> raw.toDoubleOrNull()?.let { spec.copy(baseSpeed = it) }
          "maxSpeed" -> raw.toDoubleOrNull()?.let { spec.copy(maxSpeed = it) }
          "jumpPower" -> raw.toDoubleOrNull()?.let { spec.copy(jumpPower = it) }
          "scaleMin" ->
              raw.toDoubleOrNull()?.let { spec.copy(scaleRange = it..spec.scaleRange.endInclusive) }
          "scaleMax" ->
              raw.toDoubleOrNull()?.let { spec.copy(scaleRange = spec.scaleRange.start..it) }
          else -> null
        } ?: return false

    overrides[type] = updated
    val base = "pets.${type.name.lowercase()}"
    plugin.config.set("$base.baseSpeed", updated.baseSpeed)
    plugin.config.set("$base.maxSpeed", updated.maxSpeed)
    plugin.config.set("$base.jumpPower", updated.jumpPower)
    plugin.config.set("$base.scaleMin", updated.scaleRange.start)
    plugin.config.set("$base.scaleMax", updated.scaleRange.endInclusive)
    plugin.saveConfig()
    return true
  }
}

// ===== File: domain/PetSpec.kt =====
/** ペットの仕様定義 MOBごとの能力値やおもちゃ設定を保持 */
data class PetSpec(
    val category: PetCategory,
    val entityType: EntityType,
    val maxHealth: Double = -1.0,
    val baseSpeed: Double = 0.6,
    val maxSpeed: Double = 1.1,
    val jumpPower: Double = 0.5,
    val scaleRange: ClosedRange<Double> = 1.5..2.5,
    val toyMaterial: Material? = null,
    val toyName: String? = null,
    val toyType: ToyType = ToyType.NONE,
    val toyGravity: Boolean = true
) {
  /**
   * このペット用のおもちゃアイテムを生成
   *
   * @return おもちゃアイテム、定義がない場合はAIR
   */
  fun createToyItem(): ItemStack {
    if (toyMaterial == null || toyName == null) return ItemStack(Material.AIR)
    return ItemStack(toyMaterial).apply {
      itemMeta =
          itemMeta.apply {
            val color =
                if (toyType == ToyType.FISHING_ROD) NamedTextColor.LIGHT_PURPLE
                else NamedTextColor.YELLOW
            displayName(Component.text("★ $toyName", color))
            val desc =
                when (toyType) {
                  ToyType.THROW_FETCH -> "右クリックで投げて遊ぶ (${entityType.name.lowercase()}用)"
                  ToyType.FISHING_ROD -> "投げてジャンプさせる (${entityType.name.lowercase()}用)"
                  else -> ""
                }
            lore(listOf(Component.text(desc, NamedTextColor.GRAY)))
            addEnchant(Enchantment.UNBREAKING, 1, true)
            addItemFlags(ItemFlag.HIDE_ENCHANTS)
          }
    }
  }
}

// ===== File: domain/ShopContext.kt =====
/** ショップ購入時のコンテキスト情報 ショップMOBからGUIを開く際に使用 */
data class ShopContext(val type: EntityType, val variant: String?, val cost: Int)

// ===== File: domain/TemperamentHelper.kt =====
/** ペットの性質（定型/非定型）を管理するユーティリティ */
object TemperamentHelper {

  const val TYPICAL = "typical"
  const val ATYPICAL = "atypical"

  /**
   * 購入時・野生スポーン時の性質を決定
   *
   * @return "typical" or "atypical"
   */
  fun determineForPurchase(): String {
    return if (Random.nextDouble() < BigWolfConfig.atypicalBaseChance) {
      ATYPICAL
    } else {
      TYPICAL
    }
  }

  /**
   * 交配時の性質を決定（親の性質に基づく）
   *
   * @param parent1Temperament 親1の性質
   * @param parent2Temperament 親2の性質
   * @return "typical" or "atypical"
   */
  fun determineForBreeding(parent1Temperament: String, parent2Temperament: String): String {
    val parent1Atypical = parent1Temperament == ATYPICAL
    val parent2Atypical = parent2Temperament == ATYPICAL

    val chance =
        when {
          parent1Atypical && parent2Atypical -> BigWolfConfig.atypicalBothParentChance
          parent1Atypical || parent2Atypical -> BigWolfConfig.atypicalOneParentChance
          else -> BigWolfConfig.atypicalBaseChance
        }

    return if (Random.nextDouble() < chance) {
      ATYPICAL
    } else {
      TYPICAL
    }
  }

  /** 性質の日本語表示名を取得 */
  fun getDisplayName(temperament: String): String {
    return when (temperament) {
      ATYPICAL -> "非定型 ★"
      else -> "定型"
    }
  }

  /** 性質に応じたレベルアップ確率倍率を取得 */
  fun getLevelUpMultiplier(temperament: String): Double {
    return if (temperament == ATYPICAL) {
      BigWolfConfig.atypicalLevelUpBonus
    } else {
      1.0
    }
  }

  /** 性質に応じた親密度上昇倍率を取得 */
  @Suppress("unused")
  fun getAffectionMultiplier(temperament: String): Double {
    return if (temperament == ATYPICAL) {
      BigWolfConfig.atypicalAffectionBonus
    } else {
      1.0
    }
  }
}

// ===== File: domain/ToyType.kt =====
/** おもちゃの種類 ペットとの遊び方を決定する */
enum class ToyType {
  /** おもちゃなし */
  NONE,
  /** 投げて取ってこい */
  THROW_FETCH,
  /** 釣竿で遊ぶ（猫じゃらし等） */
  FISHING_ROD,
  /** 風船ジャンプ（イルカ用：水面からジャンプして風船をつつく） */
  BALLOON_JUMP
}

// ===== File: domain/VariantHandler.kt =====
/** ペットのバリアント（見た目のバリエーション）を管理 各MOBタイプごとに適切なバリアント設定を提供 */
object VariantHandler {

  /** 指定タイプで利用可能なバリアント名一覧を取得 */
  fun getVariantNames(type: EntityType): List<String> {
    return when (type) {
      EntityType.WOLF -> getRegistryNames(RegistryKey.WOLF_VARIANT)
      EntityType.CAT -> getRegistryNames(RegistryKey.CAT_VARIANT)
      EntityType.FROG -> getRegistryNames(RegistryKey.FROG_VARIANT)
      EntityType.VILLAGER -> getRegistryNames(RegistryKey.VILLAGER_TYPE)

      EntityType.AXOLOTL -> Axolotl.Variant.entries.map { it.name }
      EntityType.PARROT -> Parrot.Variant.entries.map { it.name }
      EntityType.RABBIT -> Rabbit.Type.entries.filter { it != Rabbit.Type.THE_KILLER_BUNNY }.map { it.name }
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

  /** エンティティにバリアントを適用 */
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

  /** エンティティから現在のバリアント名を取得 */
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

  /** Paper RegistryからKeyed名一覧を取得 */
  private fun <T : Keyed> getRegistryNames(key: RegistryKey<T>): List<String> {
    return RegistryAccess.registryAccess().getRegistry(key).map { it.key().value() }
  }

  /** Registryベースのバリアントを適用（Wolf, Cat, Frog, Villager用） */
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

/** PetStatusのGUI表示色 */
fun PetStatus.guiColor(): NamedTextColor =
    when (this) {
      PetStatus.ALIVE -> GREEN
      PetStatus.STORED -> YELLOW
      PetStatus.DEAD -> RED
    }

// ===== ペット一覧・詳細GUI用データ =====
enum class PetListFilter(val label: String, val statusColor: NamedTextColor) {
  ALL("全て", WHITE),
  ALIVE("生存", GREEN),
  STORED("収納中", YELLOW),
  DEAD("死亡", RED)
}

data class PetListGuiContext(val ownerUuid: UUID, val filter: PetListFilter, val page: Int)

data class PetDetailGuiContext(
    val ownerUuid: UUID,
    val pet: PetData,
    val fromFilter: PetListFilter,
    val fromPage: Int
)

// ===== File: gui/GuiManager.kt =====
/** GUI管理クラス ペット情報GUI、パーティクル選択GUI、ショップGUI、メインメニューを管理 */
class GuiManager {

  // GUIタイトル
  val petInfoTitle = Component.text("ペットステータス", BLACK)
  val shopGuiTitle = Component.text("購入確認", BLACK)
  val mainMenuTitle = Component.text("★ BigWolf メインメニュー", DARK_PURPLE)
  val particleSelectTitle = Component.text("パーティクル選択", GOLD)

  // 開いているGUIのトラッキング
  val openedPetGuis = mutableMapOf<Inventory, LivingEntity>()
  val openedShopGuis = mutableMapOf<Inventory, ShopContext>()
  val openedMainMenus = mutableSetOf<Inventory>()

  // ペット一覧・詳細・放棄確認GUI のタイトル
  val petListTitle = Component.text("★ マイペット一覧", DARK_PURPLE)
  val petDetailTitle = Component.text("ペット詳細", DARK_PURPLE)
  val abandonConfirmTitle = Component.text("ペットの放棄確認", DARK_RED)

  // 追跡マップ
  val openedPetListGuis = mutableMapOf<Inventory, PetListGuiContext>()
  val openedPetDetailGuis = mutableMapOf<Inventory, PetDetailGuiContext>()
  val openedAbandonConfirmGuis = mutableMapOf<Inventory, PetData>()

  /** ヘルパー関数：アイテム生成 */
  private fun createItem(
      mat: Material,
      name: String,
      color: NamedTextColor,
      vararg lore: Component
  ): ItemStack =
      ItemStack(mat).apply {
        itemMeta =
            itemMeta.apply {
              displayName(Component.text(name, color))
              lore(lore.toList())
            }
      }

  /** ペット情報GUIを開く */
  fun openPetInfoGui(player: Player, entity: LivingEntity): Inventory {
    val inv = Bukkit.createInventory(null, 9, petInfoTitle)
    openedPetGuis[inv] = entity
    val level = entity.foodLevel
    val spec = PetRegistry.get(entity.type)

    // スロット0: 基本情報
    val nameComp = entity.customName() ?: Component.text(entity.type.name, AQUA)
    val vName = VariantHandler.getVariantNameFromEntity(entity)
    val variantJap = MobTranslator.translateVariant(vName)
    val mobJap = MobTranslator.toJapanese(entity.type)
    val typeName = if (vName != null) "$mobJap ($variantJap)" else mobJap
    val hp =
        "${entity.health.toInt()} / ${entity.getAttribute(Attribute.MAX_HEALTH)?.value?.toInt()}"
    val ownerName =
        Bukkit.getOfflinePlayer(UUID.fromString(entity.ownerId ?: player.uniqueId.toString())).name
            ?: "Unknown"
    val temperamentDisplay = TemperamentHelper.getDisplayName(entity.temperament)
    val temperamentColor = if (entity.isAtypical()) LIGHT_PURPLE else GRAY

    inv.setItem(
        0,
        createItem(
            Material.NAME_TAG,
            "基本情報",
            AQUA,
            Component.text("名前: ", GRAY).append(nameComp),
            Component.text("種類: $typeName", GRAY),
            Component.text("性質: $temperamentDisplay", temperamentColor),
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
    recordLore.add(Component.text("移動速度: ${speedPct}%", if (speedPct > 100) AQUA else GRAY))
    recordLore.add(Component.text("ジャンプ: ${jumpPct}%", if (jumpPct > 100) AQUA else GRAY))

    val dist = "%.1f".format(entity.statDistance)
    recordLore.add(Component.text("=== 遊んだ記録 ===", GOLD))
    recordLore.add(Component.text("距離: ${dist}m, ジャンプ: ${entity.statJumps}", GRAY))
    recordLore.add(
        Component.text(
            "おもちゃ: ${entity.statToys}, なでた: ${entity.statBrushes}, おやつ: ${entity.statTreats}",
            GRAY))

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
            val originalName =
                Bukkit.getOfflinePlayer(UUID.fromString(petData.originalOwner)).name ?: "Unknown"
            recordLore.add(Component.text("初代オーナー: $originalName", GRAY))
          }
        }
      } catch (_: Exception) {
        // エラーは無視
      }
    }

    if (entity.parent1Id != null || entity.parent2Id != null) {
      recordLore.add(Component.text("=== 親情報 ===", GOLD))
      recordLore.add(Component.text("ID: ${entity.petId?.take(8)}...", DARK_GRAY))
    }

    inv.setItem(1, createItem(Material.PAPER, "能力・記録", YELLOW, *recordLore.toTypedArray()))

    // スロット2: 食事 & 成長
    inv.setItem(
        2,
        createItem(
            Material.COOKED_BEEF,
            "食事・成長",
            GOLD,
            Component.text("現在のレベル: $level / ${BigWolfConfig.maxFoodLevel}", WHITE),
            Component.text("次のレベルまで: ${BigWolfConfig.foodPointCost}pt", GRAY),
            Component.text("クリックでフードを与える", GREEN)))

    // スロット3: スキル設定
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
        createItem(
            skillIcon,
            "スキル設定",
            skColor,
            Component.text("現在: $skName", WHITE),
            Component.text("解放状況: $unlocked / 3", DARK_GRAY),
            Component.text(skDesc, YELLOW),
            if (unlocked > 0) Component.text("クリックで切り替え", GREEN)
            else Component.text("要:強化アイテム", RED)))

    // スロット4: エフェクト設定
    val pType = entity.particleType
    val particleName = PetItemFactory.getParticleName(pType)
    val particleColor = getParticleColor(pType)
    inv.setItem(
        4,
        createItem(
            Material.BLAZE_POWDER,
            "エフェクト設定",
            GOLD,
            Component.text("現在: ", GRAY).append(Component.text(particleName, particleColor)),
            Component.text("クリックで選択画面を開く", GREEN)))

    // スロット5: 収納
    inv.setItem(
        5,
        createItem(
            Material.CHEST,
            "収納する",
            LIGHT_PURPLE,
            Component.text("ペットをアイテム化して", GRAY),
            Component.text("インベントリに戻します", GRAY),
            Component.text("クリックで実行", GREEN)))

    // スロット6: 譲渡
    var transferCount = 0
    if (petId != null && ownerId != null) {
      try {
        val ownerUuid = UUID.fromString(ownerId)
        val petData = PetDataManager.getPetData(ownerUuid, petId)
        transferCount = petData?.transferHistory?.size ?: 0
      } catch (_: Exception) {
        // エラーは無視
      }
    }
    inv.setItem(
        6,
        createItem(
            Material.PLAYER_HEAD,
            "譲渡する",
            GOLD,
            Component.text("他のプレイヤーに譲渡", GRAY),
            Component.text("譲渡回数: $transferCount 回", DARK_GRAY),
            Component.text("クリックで宛先入力", GREEN)))

    // スロット7: 閉じる
    inv.setItem(7, createItem(Material.BARRIER, "閉じる", RED, Component.text("メニューを閉じる", GRAY)))

    player.openInventory(inv)
    return inv
  }

  /** パーティクル選択GUIを開く */
  fun openParticleSelectGui(player: Player, entity: LivingEntity): Inventory {
    val inv = Bukkit.createInventory(null, 27, particleSelectTitle)
    openedPetGuis[inv] = entity

    // デフォルトパーティクル (0-4) - 常に選択可能
    val defaultParticles =
        listOf(
            Triple(0, "なし", Material.BARRIER),
            Triple(1, "電気", Material.LIGHTNING_ROD),
            Triple(2, "炎", Material.BLAZE_POWDER),
            Triple(3, "青炎", Material.SOUL_CAMPFIRE),
            Triple(4, "ハート", Material.RED_DYE))

    defaultParticles.forEachIndexed { idx, (id, name, mat) ->
      val current = entity.particleType == id
      val lore = mutableListOf<Component>()
      if (current) lore.add(Component.text("現在使用中", GREEN))
      lore.add(Component.text("クリックで選択", GRAY))

      val itemStack = createItem(mat, name, if (current) GREEN else WHITE, *lore.toTypedArray())
      if (current) {
        itemStack.itemMeta =
            itemStack.itemMeta.apply {
              addEnchant(Enchantment.UNBREAKING, 1, true)
              addItemFlags(ItemFlag.HIDE_ENCHANTS)
            }
      }
      inv.setItem(idx, itemStack)
    }

    // アンロック可能パーティクル (5-10)
    val unlockableParticles =
        listOf(
            Triple(5, "星", Material.NETHER_STAR),
            Triple(6, "音符", Material.NOTE_BLOCK),
            Triple(7, "雪", Material.SNOWBALL),
            Triple(8, "桜", Material.CHERRY_LEAVES),
            Triple(9, "エンド", Material.ENDER_PEARL),
            Triple(10, "スライム", Material.SLIME_BALL))

    unlockableParticles.forEachIndexed { idx, (id, name, mat) ->
      val unlocked = entity.isParticleUnlocked(id)
      val current = entity.particleType == id
      val slot = idx + 9

      if (unlocked) {
        val lore = mutableListOf<Component>()
        if (current) lore.add(Component.text("現在使用中", GREEN))
        lore.add(Component.text("クリックで選択", GRAY))

        val itemStack = createItem(mat, name, if (current) GREEN else AQUA, *lore.toTypedArray())
        if (current) {
          itemStack.itemMeta =
              itemStack.itemMeta.apply {
                addEnchant(Enchantment.UNBREAKING, 1, true)
                addItemFlags(ItemFlag.HIDE_ENCHANTS)
              }
        }
        inv.setItem(slot, itemStack)
      } else {
        inv.setItem(
            slot,
            createItem(
                Material.GRAY_DYE,
                "???",
                DARK_GRAY,
                Component.text("未解放", RED),
                Component.text("パーティクルアイテムで解放", GRAY)))
      }
    }

    // 戻るボタン
    inv.setItem(26, createItem(Material.ARROW, "戻る", YELLOW, Component.text("ペットメニューに戻る", GRAY)))

    player.openInventory(inv)
    return inv
  }

  /** ショップGUIを開く */
  fun openShopGui(player: Player, ctx: ShopContext, getPlayerTokens: (Player) -> Long): Inventory {
    val inv = Bukkit.createInventory(null, 18, shopGuiTitle)
    openedShopGuis[inv] = ctx

    val spec = PetRegistry.get(ctx.type)

    // バリアント名とMOB名を日本語化
    val mobJap = MobTranslator.toJapanese(ctx.type)
    val variantJap = MobTranslator.translateVariant(ctx.variant)
    val typeLabel = if (ctx.variant != null) "$mobJap ($variantJap)" else mobJap

    val currentTokens = getPlayerTokens(player)
    val canAfford = currentTokens >= ctx.cost

    // 左 (スロット2): 商品情報
    val eggMat = Material.getMaterial("${ctx.type.name}_SPAWN_EGG") ?: Material.PIG_SPAWN_EGG
    inv.setItem(
        2,
        createItem(
            eggMat,
            "購入対象: $typeLabel",
            GOLD,
            Component.text("カテゴリ: ${spec.category}", GRAY),
            Component.text("価格: ${ctx.cost}pt", YELLOW),
            Component.text("所持: ${currentTokens}pt", if (canAfford) GREEN else RED)))

    // 中 (スロット4): ステータス表示
    inv.setItem(
        4,
        createItem(
            Material.PAPER,
            "ステータス",
            AQUA,
            Component.text("baseSpeed: ${"%.2f".format(spec.baseSpeed)}", GRAY),
            Component.text("maxSpeed : ${"%.2f".format(spec.maxSpeed)}", GRAY),
            Component.text("jumpPower: ${"%.2f".format(spec.jumpPower)}", GRAY),
            Component.text(
                "scale    : ${"%.2f".format(spec.scaleRange.start)} .. ${"%.2f".format(spec.scaleRange.endInclusive)}",
                GRAY)))

    // 右 (スロット6): 購入ボタン
    inv.setItem(
        6,
        createItem(
            Material.EMERALD_BLOCK,
            "購入する",
            GREEN,
            Component.text("クリックで購入確定", GRAY),
            if (canAfford) Component.text("購入可能", GREEN) else Component.text("ポイント不足", RED)))

    // 下段左 (スロット10): ショップに戻る
    inv.setItem(
        10,
        createItem(
            Material.ARROW,
            "← ショップへ戻る",
            WHITE,
            Component.text("ペット一覧に戻る", GRAY)))

    // 下段右 (スロット16): キャンセル
    inv.setItem(16, createItem(Material.BARRIER, "閉じる", RED, Component.text("GUIを閉じる", GRAY)))

    player.openInventory(inv)
    return inv
  }

  /** メインメニューGUIを開く */
  fun openMainMenu(player: Player): Inventory {
    val inv = Bukkit.createInventory(null, 27, mainMenuTitle)
    openedMainMenus.add(inv)

    inv.setItem(
        10,
        createItem(
            Material.WRITTEN_BOOK,
            "ペット一覧",
            AQUA,
            Component.text("所有ペットを一覧表示", GRAY),
            Component.text("復活・収納・放棄もここから", GRAY),
            Component.text("クリックで開く", GREEN)))

    inv.setItem(
        12,
        createItem(
            Material.CHEST,
            "全ペット収納",
            GOLD,
            Component.text("自分のペットを全て収納", GRAY),
            Component.text("クリックで実行", GREEN)))

    inv.setItem(
        14,
        createItem(
            Material.HEART_OF_THE_SEA,
            "交配",
            LIGHT_PURPLE,
            Component.text("ペット同士を交配させる", GRAY),
            Component.text("コスト: ${BigWolfConfig.breedCost}pt", GOLD),
            Component.text("クリックで選択", GREEN)))

    inv.setItem(
        16,
        createItem(
            Material.EMERALD,
            "ショップ",
            GREEN,
            Component.text("新しいペットを購入", GRAY),
            Component.text("クリックで開く", GREEN)))

    inv.setItem(22, createItem(Material.BARRIER, "閉じる", RED, Component.text("メニューを閉じる", GRAY)))

    player.openInventory(inv)
    return inv
  }

  /** ペット一覧GUIを開く */
  fun openPetListGui(
      player: Player,
      ownerUuid: UUID,
      filter: PetListFilter = PetListFilter.ALL,
      page: Int = 1
  ): Inventory {
    val allPets = PetDataManager.getAllPets(ownerUuid).sortedBy { it.petNumber }
    val filtered =
        when (filter) {
          PetListFilter.ALL -> allPets
          PetListFilter.ALIVE -> allPets.filter { it.status == PetStatus.ALIVE }
          PetListFilter.STORED -> allPets.filter { it.status == PetStatus.STORED }
          PetListFilter.DEAD -> allPets.filter { it.status == PetStatus.DEAD }
        }

    val petsPerPage = 36
    val totalPages = maxOf(1, (filtered.size + petsPerPage - 1) / petsPerPage)
    val currentPage = page.coerceIn(1, totalPages)

    val inv = Bukkit.createInventory(null, 54, petListTitle)
    openedPetListGuis[inv] = PetListGuiContext(ownerUuid, filter, currentPage)

    // フィルタータブ (スロット 0-3) — 固有アイコンで視認性向上
    PetListFilter.entries.forEachIndexed { idx, f ->
      val isActive = f == filter
      val tabMat =
          when (f) {
            PetListFilter.ALL -> if (isActive) Material.WRITTEN_BOOK else Material.BOOK
            PetListFilter.ALIVE -> if (isActive) Material.LIME_WOOL else Material.WHITE_WOOL
            PetListFilter.STORED -> Material.CHEST
            PetListFilter.DEAD -> if (isActive) Material.SKELETON_SKULL else Material.BONE
          }
      val count =
          when (f) {
            PetListFilter.ALL -> allPets.size
            PetListFilter.ALIVE -> allPets.count { it.status == PetStatus.ALIVE }
            PetListFilter.STORED -> allPets.count { it.status == PetStatus.STORED }
            PetListFilter.DEAD -> allPets.count { it.status == PetStatus.DEAD }
          }
      val lore =
          buildList {
            add(Component.text("${count}匹", f.statusColor))
            if (isActive) add(Component.text("▶ 現在表示中", GREEN))
            else add(Component.text("クリックで切り替え", GRAY))
          }
      inv.setItem(
          idx,
          createItem(
              tabMat,
              "${f.label} (${count})",
              if (isActive) f.statusColor else GRAY,
              *lore.toTypedArray()))
    }
    // 装飾ガラス (スロット 4-7)
    val glassPane = createItem(Material.GRAY_STAINED_GLASS_PANE, " ", GRAY)
    for (i in 4..7) inv.setItem(i, glassPane)

    // メインメニューへ戻るボタン（右上端）
    inv.setItem(
        8,
        createItem(
            Material.BARRIER,
            "← メインメニューへ",
            WHITE,
            Component.text("メインメニューに戻る", GRAY)))

    // ペット一覧 (スロット 9-44)
    val startIdx = (currentPage - 1) * petsPerPage
    val endIdx = minOf(startIdx + petsPerPage, filtered.size)
    for ((i, pet) in filtered.subList(startIdx, endIdx).withIndex()) {
      val slot = i + 9
      val eggMat = Material.getMaterial("${pet.type}_SPAWN_EGG") ?: Material.PIG_SPAWN_EGG
      val typeName =
          runCatching { EntityType.valueOf(pet.type) }.getOrNull()?.let {
            MobTranslator.toJapanese(it)
          } ?: pet.type
      val variantStr = pet.variant?.let { " (${MobTranslator.translateVariant(it)})" } ?: ""
      val plainName = pet.customName?.let { PLAIN_TEXT.serialize(LEGACY_AMP.deserialize(it)) }
      val statusStr =
          when (pet.status) {
            PetStatus.ALIVE -> "生存"
            PetStatus.STORED -> "収納中"
            PetStatus.DEAD -> "死亡"
          }
      val lore =
          mutableListOf(
              Component.text("状態: ", GRAY)
                  .append(Component.text(statusStr, pet.status.guiColor())),
              Component.text("レベル: ${pet.foodLevel} / ${BigWolfConfig.maxFoodLevel}", GRAY))
      if (plainName != null) lore.add(0, Component.text("名前: 「$plainName」", WHITE))
      lore.add(Component.text("クリックで詳細を表示", DARK_AQUA))

      val item =
          createItem(
              eggMat,
              "#${pet.petNumber} $typeName$variantStr",
              pet.status.guiColor(),
              *lore.toTypedArray())
      if (pet.status == PetStatus.DEAD) {
        item.itemMeta =
            item.itemMeta.apply {
              addEnchant(Enchantment.UNBREAKING, 1, true)
              addItemFlags(ItemFlag.HIDE_ENCHANTS)
            }
      }
      inv.setItem(slot, item)
    }

    // ナビゲーション行 (スロット 45-53)
    for (i in 45..53) inv.setItem(i, glassPane)
    if (currentPage > 1) {
      inv.setItem(
          45,
          createItem(
              Material.ARROW,
              "← 前のページ",
              GREEN,
              Component.text("ページ ${currentPage - 1} / $totalPages", GRAY)))
    }
    inv.setItem(
        49,
        createItem(
            Material.BOOK,
            "ページ $currentPage / $totalPages",
            WHITE,
            Component.text("${filtered.size}匹表示中", GRAY)))
    if (currentPage < totalPages) {
      inv.setItem(
          53,
          createItem(
              Material.ARROW,
              "次のページ →",
              GREEN,
              Component.text("ページ ${currentPage + 1} / $totalPages", GRAY)))
    }

    player.openInventory(inv)
    return inv
  }

  /** ペット詳細GUIを開く */
  fun openPetDetailGui(
      player: Player,
      ownerUuid: UUID,
      pet: PetData,
      fromFilter: PetListFilter = PetListFilter.ALL,
      fromPage: Int = 1
  ): Inventory {
    val inv = Bukkit.createInventory(null, 54, petDetailTitle)
    openedPetDetailGuis[inv] = PetDetailGuiContext(ownerUuid, pet, fromFilter, fromPage)

    val glassPane = createItem(Material.GRAY_STAINED_GLASS_PANE, " ", GRAY)
    for (i in 0 until 54) inv.setItem(i, glassPane)

    val typeName =
        runCatching { EntityType.valueOf(pet.type) }.getOrNull()?.let {
          MobTranslator.toJapanese(it)
        } ?: pet.type
    val variantStr = pet.variant?.let { " (${MobTranslator.translateVariant(it)})" } ?: ""
    val plainName = pet.customName?.let { PLAIN_TEXT.serialize(LEGACY_AMP.deserialize(it)) }
    val statusColor = pet.status.guiColor()
    val statusStr =
        when (pet.status) {
          PetStatus.ALIVE -> "生存"
          PetStatus.STORED -> "収納中"
          PetStatus.DEAD -> "死亡"
        }

    // スロット4: ペットアイコン
    val eggMat = Material.getMaterial("${pet.type}_SPAWN_EGG") ?: Material.PIG_SPAWN_EGG
    val nameDisplay = if (plainName != null) "「$plainName」" else "$typeName$variantStr"
    inv.setItem(
        4,
        createItem(
            eggMat,
            "#${pet.petNumber} $nameDisplay",
            statusColor,
            Component.text("種族: $typeName$variantStr", GRAY),
            Component.text("状態: $statusStr", statusColor),
            Component.text("購入日: ${pet.purchasedAt.take(10)}", DARK_GRAY)))

    // スロット10: 基本情報
    val basicLore = mutableListOf<Component>()
    if (plainName != null) basicLore.add(Component.text("名前: 「$plainName」", WHITE))
    basicLore.add(Component.text("種族: $typeName$variantStr", GRAY))
    basicLore.add(Component.text("状態: $statusStr", statusColor))
    basicLore.add(Component.text("購入日: ${pet.purchasedAt.take(10)}", DARK_GRAY))
    inv.setItem(10, createItem(Material.NAME_TAG, "基本情報", AQUA, *basicLore.toTypedArray()))

    // スロット12: レベル・スキル
    inv.setItem(
        12,
        createItem(
            Material.IRON_SWORD,
            "レベル・スキル",
            GOLD,
            Component.text("フードLv: ${pet.foodLevel} / ${BigWolfConfig.maxFoodLevel}", GREEN),
            Component.text("スキル: Lv.${pet.skillType}", AQUA),
            Component.text("解放済み: Lv.${pet.skillUnlockedLevel}", DARK_AQUA)))

    // スロット14: 記録
    inv.setItem(
        14,
        createItem(
            Material.PAPER,
            "遊んだ記録",
            YELLOW,
            Component.text("移動距離: ${"%.1f".format(pet.stats.distance)} m", GRAY),
            Component.text("ジャンプ: ${pet.stats.jumps} 回", GRAY),
            Component.text("おもちゃ: ${pet.stats.toys} 回", GRAY),
            Component.text("なでた: ${pet.stats.brushes} 回", GRAY),
            Component.text("おやつ: ${pet.stats.treats} 回", GRAY)))

    // スロット16: 位置情報
    val deathData = pet.deathData
    val lastLoc = pet.lastLocation
    if (pet.status == PetStatus.DEAD && deathData != null) {
      val loc = deathData.location
      inv.setItem(
          16,
          createItem(
              Material.SKELETON_SKULL,
              "死亡情報",
              RED,
              Component.text("死亡日時: ${deathData.deathTime.take(16)}", GRAY),
              Component.text("場所: ${loc.world}", GRAY),
              Component.text(
                  "  X:${loc.x.toInt()} Y:${loc.y.toInt()} Z:${loc.z.toInt()}", GRAY)))
    } else if (lastLoc != null) {
      inv.setItem(
          16,
          createItem(
              Material.COMPASS,
              "最終位置",
              YELLOW,
              Component.text("ワールド: ${lastLoc.world}", GRAY),
              Component.text(
                  "X:${lastLoc.x.toInt()} Y:${lastLoc.y.toInt()} Z:${lastLoc.z.toInt()}", GRAY)))
    }

    // スロット20: 交配情報（ある場合）
    val breedInfo = pet.breedInfo
    if (breedInfo != null || pet.breedCount > 0) {
      val breedLore = mutableListOf<Component>()
      if (breedInfo != null) {
        breedLore.add(Component.text("世代: 第${breedInfo.generation}世代", AQUA))
        val allPets = PetDataManager.getAllPets(ownerUuid)
        val p1 =
            allPets.find { it.petId == breedInfo.parent1Id }?.let { "#${it.petNumber}" }
                ?: breedInfo.parent1Id.take(8)
        val p2 =
            allPets.find { it.petId == breedInfo.parent2Id }?.let { "#${it.petNumber}" }
                ?: breedInfo.parent2Id.take(8)
        breedLore.add(Component.text("親: $p1 × $p2", GRAY))
      }
      if (pet.breedCount > 0) breedLore.add(Component.text("交配回数: ${pet.breedCount} 回", GRAY))
      inv.setItem(
          20,
          createItem(Material.HEART_OF_THE_SEA, "交配情報", LIGHT_PURPLE, *breedLore.toTypedArray()))
    }

    // スロット22: 譲渡履歴（ある場合）
    if (pet.transferHistory.isNotEmpty()) {
      val transferLore = mutableListOf<Component>()
      transferLore.add(Component.text("譲渡回数: ${pet.transferHistory.size} 回", YELLOW))
      for (record in pet.transferHistory.takeLast(3)) {
        val fromName =
            runCatching { Bukkit.getOfflinePlayer(UUID.fromString(record.fromOwner)).name }
                .getOrNull() ?: record.fromOwner.take(8)
        val toName =
            runCatching { Bukkit.getOfflinePlayer(UUID.fromString(record.toOwner)).name }
                .getOrNull() ?: record.toOwner.take(8)
        transferLore.add(
            Component.text("${record.timestamp.take(10)}: $fromName → $toName", GRAY))
      }
      inv.setItem(22, createItem(Material.PLAYER_HEAD, "譲渡履歴", GOLD, *transferLore.toTypedArray()))
    }

    // アクションボタン (最終行 スロット45-53)
    // スロット45: 戻る
    inv.setItem(
        45,
        createItem(
            Material.ARROW,
            "← 一覧に戻る",
            GREEN,
            Component.text("ペット一覧に戻ります", GRAY)))

    // スロット47: 主要アクション（状態別）
    when (pet.status) {
      PetStatus.DEAD ->
          inv.setItem(
              47,
              createItem(
                  Material.TOTEM_OF_UNDYING,
                  "復活する",
                  GREEN,
                  Component.text("コスト: ${BigWolfConfig.reviveCost}pt", YELLOW),
                  Component.text("クリックで復活実行", GREEN)))
      PetStatus.STORED ->
          inv.setItem(
              47,
              createItem(
                  Material.EGG,
                  "エッグ再取得",
                  YELLOW,
                  Component.text("コスト: ${BigWolfConfig.recoverCost}pt", YELLOW),
                  Component.text("クリックで再取得", GREEN)))
      PetStatus.ALIVE ->
          inv.setItem(
              47,
              createItem(
                  Material.CHEST,
                  "収納する",
                  LIGHT_PURPLE,
                  Component.text("ペットをアイテム化", GRAY),
                  Component.text("クリックで収納", GREEN)))
    }

    // スロット49: 名前変更（死亡以外）
    if (pet.status != PetStatus.DEAD) {
      inv.setItem(
          49,
          createItem(
              Material.NAME_TAG,
              "名前変更",
              AQUA,
              Component.text("/bigwolf rename ${pet.petNumber} <名前>", GRAY),
              Component.text("クリックでコマンド入力", GREEN)))
    }

    // スロット51: 放棄（死亡以外）
    if (pet.status != PetStatus.DEAD) {
      inv.setItem(
          51,
          createItem(
              Material.TNT,
              "放棄する",
              RED,
              Component.text("このペットを永久に放棄", DARK_GRAY),
              Component.text("クリックで確認画面へ", RED)))
    }

    // スロット53: 閉じる
    inv.setItem(53, createItem(Material.BARRIER, "閉じる", RED, Component.text("GUIを閉じる", GRAY)))

    player.openInventory(inv)
    return inv
  }

  /** 放棄確認GUIを開く */
  fun openAbandonConfirmGui(player: Player, pet: PetData): Inventory {
    val inv = Bukkit.createInventory(null, 27, abandonConfirmTitle)
    openedAbandonConfirmGuis[inv] = pet

    val glassPane = createItem(Material.GRAY_STAINED_GLASS_PANE, " ", GRAY)
    for (i in 0 until 27) inv.setItem(i, glassPane)

    val typeName =
        runCatching { EntityType.valueOf(pet.type) }.getOrNull()?.let {
          MobTranslator.toJapanese(it)
        } ?: pet.type
    val variantStr = pet.variant?.let { " (${MobTranslator.translateVariant(it)})" } ?: ""
    val plainName = pet.customName?.let { PLAIN_TEXT.serialize(LEGACY_AMP.deserialize(it)) }
    val nameDisplay = plainName?.let { "「$it」" } ?: "$typeName$variantStr"

    // スロット4: ペット情報
    val eggMat = Material.getMaterial("${pet.type}_SPAWN_EGG") ?: Material.PIG_SPAWN_EGG
    inv.setItem(
        4,
        createItem(
            eggMat,
            "#${pet.petNumber} $nameDisplay",
            GOLD,
            Component.text("$typeName$variantStr", GRAY),
            Component.text("レベル: ${pet.foodLevel}", GRAY),
            Component.text("これを放棄しようとしています", RED)))

    // スロット11: キャンセル
    inv.setItem(
        11,
        createItem(
            Material.GREEN_WOOL,
            "キャンセル",
            GREEN,
            Component.text("放棄しない", GRAY),
            Component.text("クリックで戻る", GREEN)))

    // スロット15: 確認（放棄実行）
    inv.setItem(
        15,
        createItem(
            Material.RED_WOOL,
            "放棄する",
            RED,
            Component.text("$nameDisplay を放棄します", RED),
            Component.text("この操作は取り消せません", DARK_RED),
            Component.text("クリックで確定", RED)))

    player.openInventory(inv)
    return inv
  }

  /** パーティクルIDから色を取得 */
  private fun getParticleColor(pType: Int): NamedTextColor =
      when (pType) {
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
}

// ===== ペット一覧GUIリスナー =====
class PetListGuiListener(private val guiManager: GuiManager) : Listener {

  @EventHandler
  fun onInventoryClick(event: InventoryClickEvent) {
    val player = event.whoClicked as? Player ?: return
    val inv = event.view.topInventory
    val ctx = guiManager.openedPetListGuis[inv] ?: return
    event.isCancelled = true

    val slot = event.rawSlot
    if (slot < 0 || slot >= inv.size) return

    // フィルタータブ (スロット 0-3)
    val newFilter =
        when (slot) {
          0 -> PetListFilter.ALL
          1 -> PetListFilter.ALIVE
          2 -> PetListFilter.STORED
          3 -> PetListFilter.DEAD
          else -> null
        }
    if (newFilter != null) {
      guiManager.openedPetListGuis.remove(inv)
      guiManager.openPetListGui(player, ctx.ownerUuid, newFilter, 1)
      return
    }

    // 前ページ (スロット45)
    if (slot == 45 && ctx.page > 1) {
      guiManager.openedPetListGuis.remove(inv)
      guiManager.openPetListGui(player, ctx.ownerUuid, ctx.filter, ctx.page - 1)
      return
    }

    // メインメニューへ戻る (スロット8 = 右上端)
    if (slot == 8) {
      guiManager.openedPetListGuis.remove(inv)
      player.closeInventory()
      guiManager.openMainMenu(player)
      return
    }

    // 次ページ (スロット53)
    if (slot == 53) {
      val allPets = PetDataManager.getAllPets(ctx.ownerUuid).sortedBy { it.petNumber }
      val filtered =
          when (ctx.filter) {
            PetListFilter.ALL -> allPets
            PetListFilter.ALIVE -> allPets.filter { it.status == PetStatus.ALIVE }
            PetListFilter.STORED -> allPets.filter { it.status == PetStatus.STORED }
            PetListFilter.DEAD -> allPets.filter { it.status == PetStatus.DEAD }
          }
      val totalPages = maxOf(1, (filtered.size + 35) / 36)
      if (ctx.page < totalPages) {
        guiManager.openedPetListGuis.remove(inv)
        guiManager.openPetListGui(player, ctx.ownerUuid, ctx.filter, ctx.page + 1)
      }
      return
    }

    // ペットスロット (スロット9-44)
    if (slot in 9..44) {
      val allPets = PetDataManager.getAllPets(ctx.ownerUuid).sortedBy { it.petNumber }
      val filtered =
          when (ctx.filter) {
            PetListFilter.ALL -> allPets
            PetListFilter.ALIVE -> allPets.filter { it.status == PetStatus.ALIVE }
            PetListFilter.STORED -> allPets.filter { it.status == PetStatus.STORED }
            PetListFilter.DEAD -> allPets.filter { it.status == PetStatus.DEAD }
          }
      val petIdx = (ctx.page - 1) * 36 + (slot - 9)
      if (petIdx < filtered.size) {
        guiManager.openedPetListGuis.remove(inv)
        guiManager.openPetDetailGui(player, ctx.ownerUuid, filtered[petIdx], ctx.filter, ctx.page)
      }
    }
  }

  @EventHandler
  fun onInventoryClose(event: InventoryCloseEvent) {
    guiManager.openedPetListGuis.remove(event.view.topInventory)
  }
}

// ===== ペット詳細GUIリスナー =====
class PetDetailGuiListener(
    private val guiManager: GuiManager,
    private val reviveFn: (Player, Array<out String>) -> Unit,
    private val recoverFn: (Player, Array<out String>) -> Unit,
    private val storePetFn: (Player, LivingEntity) -> Unit,
    private val executePetAbandonFn: (Player, PetData) -> Unit
) : Listener {

  @EventHandler
  fun onInventoryClick(event: InventoryClickEvent) {
    val player = event.whoClicked as? Player ?: return
    val inv = event.view.topInventory
    val ctx = guiManager.openedPetDetailGuis[inv] ?: return
    event.isCancelled = true

    val slot = event.rawSlot
    if (slot < 0 || slot >= inv.size) return

    when (slot) {
      45 -> {
        // ← 一覧に戻る
        guiManager.openedPetDetailGuis.remove(inv)
        player.closeInventory()
        guiManager.openPetListGui(player, ctx.ownerUuid, ctx.fromFilter, ctx.fromPage)
      }
      47 -> {
        // 主要アクション（状態別）
        guiManager.openedPetDetailGuis.remove(inv)
        player.closeInventory()
        when (ctx.pet.status) {
          PetStatus.DEAD -> reviveFn(player, arrayOf("revive", ctx.pet.petNumber.toString()))
          PetStatus.STORED -> recoverFn(player, arrayOf("recover", ctx.pet.petNumber.toString()))
          PetStatus.ALIVE -> {
            val entity = ActivePetRegistry.findByPetId(ctx.pet.petId)
            if (entity != null) {
              storePetFn(player, entity)
            } else {
              player.sendMessage(Component.text("ペットが見つかりません。", RED))
            }
          }
        }
      }
      49 -> {
        // 名前変更
        if (ctx.pet.status != PetStatus.DEAD) {
          player.closeInventory()
          player.sendMessage(
              Component.text("▶ /bigwolf rename ${ctx.pet.petNumber} <新しい名前>", GREEN)
                  .hoverEvent(Component.text("クリックでコマンドを入力欄に挿入"))
                  .clickEvent(
                      ClickEvent.suggestCommand("/bigwolf rename ${ctx.pet.petNumber} ")))
        }
      }
      51 -> {
        // 放棄する → 放棄確認GUI
        if (ctx.pet.status != PetStatus.DEAD) {
          guiManager.openedPetDetailGuis.remove(inv)
          guiManager.openAbandonConfirmGui(player, ctx.pet)
        }
      }
      53 -> {
        guiManager.openedPetDetailGuis.remove(inv)
        player.closeInventory()
      }
    }
  }

  @EventHandler
  fun onInventoryClose(event: InventoryCloseEvent) {
    guiManager.openedPetDetailGuis.remove(event.view.topInventory)
  }
}

// ===== 放棄確認GUIリスナー =====
class AbandonConfirmGuiListener(
    private val guiManager: GuiManager,
    private val executePetAbandonFn: (Player, PetData) -> Unit
) : Listener {

  @EventHandler
  fun onInventoryClick(event: InventoryClickEvent) {
    val player = event.whoClicked as? Player ?: return
    val inv = event.view.topInventory
    val pet = guiManager.openedAbandonConfirmGuis[inv] ?: return
    event.isCancelled = true

    val slot = event.rawSlot
    if (slot < 0 || slot >= inv.size) return

    when (slot) {
      11 -> {
        // キャンセル
        guiManager.openedAbandonConfirmGuis.remove(inv)
        player.closeInventory()
      }
      15 -> {
        // 放棄確定
        guiManager.openedAbandonConfirmGuis.remove(inv)
        player.closeInventory()
        executePetAbandonFn(player, pet)
      }
    }
  }

  @EventHandler
  fun onInventoryClose(event: InventoryCloseEvent) {
    guiManager.openedAbandonConfirmGuis.remove(event.view.topInventory)
  }
}

// ===== File: i18n/MobTranslator.kt =====
/** MOB名称の日本語翻訳を管理するオブジェクト */
object MobTranslator {

  /** EntityType → 日本語のマッピング */
  private val translations =
      mapOf(
          EntityType.WOLF to "オオカミ",
          EntityType.CAT to "ネコ",
          EntityType.FOX to "キツネ",
          EntityType.RABBIT to "ウサギ",
          EntityType.PANDA to "パンダ",
          EntityType.POLAR_BEAR to "シロクマ",
          EntityType.OCELOT to "ヤマネコ",
          EntityType.HORSE to "ウマ",
          EntityType.DONKEY to "ロバ",
          EntityType.MULE to "ラバ",
          EntityType.LLAMA to "ラマ",
          EntityType.TRADER_LLAMA to "行商人のラマ",
          EntityType.PIG to "ブタ",
          EntityType.COW to "ウシ",
          EntityType.SHEEP to "ヒツジ",
          EntityType.CHICKEN to "ニワトリ",
          EntityType.GOAT to "ヤギ",
          EntityType.CAMEL to "ラクダ",
          EntityType.SNIFFER to "スニッファー",
          EntityType.ARMADILLO to "アルマジロ",
          EntityType.DOLPHIN to "イルカ",
          EntityType.TURTLE to "カメ",
          EntityType.AXOLOTL to "ウーパールーパー",
          EntityType.FROG to "カエル",
          EntityType.TADPOLE to "オタマジャクシ",
          EntityType.TROPICAL_FISH to "熱帯魚",
          EntityType.PUFFERFISH to "フグ",
          EntityType.COD to "タラ",
          EntityType.SALMON to "サケ",
          EntityType.PARROT to "オウム",
          EntityType.BAT to "コウモリ",
          EntityType.BEE to "ミツバチ",
          EntityType.ALLAY to "アレイ",
          EntityType.IRON_GOLEM to "鉄のゴーレム",
          EntityType.SNOW_GOLEM to "雪のゴーレム",
          EntityType.STRIDER to "ストライダー",
          EntityType.SKELETON_HORSE to "スケルトンホース",
          EntityType.ZOMBIE_HORSE to "ゾンビホース",
          EntityType.VILLAGER to "村人",
          EntityType.WANDERING_TRADER to "行商人",
          EntityType.MOOSHROOM to "ムーシュルーム")

  /**
   * EntityTypeを日本語に変換
   *
   * @param type EntityType
   * @return 日本語名（マッピングがない場合は英語名）
   */
  fun toJapanese(type: EntityType): String {
    return translations[type] ?: type.name
  }

  /** バリアント名の日本語翻訳 */
  private val variantTranslations =
      mapOf(
          // オオカミのバリアント
          "pale" to "白色",
          "spotted" to "斑点",
          "snowy" to "雪原",
          "black" to "黒色",
          "ashen" to "灰色",
          "rusty" to "赤茶色",
          "woods" to "森林",
          "chestnut" to "栗色",
          "striped" to "縞模様",

          // ネコのバリアント
          "tabby" to "トラネコ",
          "tuxedo" to "タキシード",
          "red" to "茶トラ",
          "siamese" to "シャム",
          "british_shorthair" to "ブリティッシュショートヘア",
          "calico" to "三毛",
          "persian" to "ペルシャ",
          "ragdoll" to "ラグドール",
          "white" to "白",
          "jellie" to "ジェリー",
          "all_black" to "黒",

          // キツネのバリアント
          "red_fox" to "アカギツネ",
          "snow_fox" to "ホッキョクギツネ",

          // ウサギのバリアント
          "brown" to "茶色",
          "white_splotched" to "白斑",
          "gold" to "金色",
          "salt" to "塩コショウ",
          "toast" to "トースト",

          // ウーパールーパーのバリアント
          "lucy" to "ピンク",
          "wild" to "茶色",
          "gold_axolotl" to "金色",
          "cyan" to "水色",
          "blue" to "青色",

          // カエルのバリアント
          "temperate" to "温帯",
          "warm" to "暖かい",
          "cold" to "寒い",

          // ウマのバリアント
          "white_horse" to "白馬",
          "creamy" to "クリーム色",
          "chestnut_horse" to "栗毛",
          "brown_horse" to "鹿毛",
          "black_horse" to "黒馬",
          "gray" to "芦毛",
          "dark_brown" to "黒鹿毛",

          // ラマのバリアント
          "creamy_llama" to "クリーム色",
          "white_llama" to "白色",
          "brown_llama" to "茶色",
          "gray_llama" to "灰色",

          // パンダのバリアント
          "normal" to "通常",
          "lazy" to "怠惰",
          "worried" to "心配",
          "playful" to "陽気",
          "brown_panda" to "茶色",
          "weak" to "虚弱",
          "aggressive" to "攻撃的",

          // ムーシュルームのバリアント
          "red_mooshroom" to "赤",
          "brown_mooshroom" to "茶色",

          // オウムのバリアント
          "red_blue" to "赤青",
          "blue" to "青",
          "green" to "緑",
          "yellow_blue" to "黄青",
          "gray_parrot" to "灰色",

          // 熱帯魚のバリアント
          "kob" to "コブ",
          "sunstreak" to "サンストリーク",
          "snooper" to "スヌーパー",
          "dasher" to "ダッシャー",
          "brinely" to "ブラインリー",
          "spotty" to "スポッティ",
          "flopper" to "フロッパー",
          "stripey" to "ストライピー",
          "glitter" to "グリッター",
          "blockfish" to "ブロックフィッシュ",
          "betty" to "ベティ",
          "clayfish" to "クレイフィッシュ")

  /**
   * バリアント名を日本語に変換
   *
   * @param variant バリアント名（英語）
   * @return 日本語名（マッピングがない場合は元の文字列）
   */
  fun translateVariant(variant: String?): String {
    if (variant == null) return "デフォルト"
    return variantTranslations[variant.lowercase()] ?: variant
  }
}

// ===== File: items/PetItemFactory.kt =====
/** ペット関連アイテムの生成と判定を担当するファクトリークラス */
object PetItemFactory {

  // パーティクルタイプの定義
  // デフォルト: 0=なし, 1=電気, 2=炎, 3=青炎, 4=ハート
  // アンロック可能: 5=星, 6=音符, 7=雪, 8=桜, 9=エンド, 10=スライム
  val particleTypes =
      listOf(
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
          10 to ("スライム" to Material.SLIME_BALL))

  // ==========================================
  // ペットフード
  // ==========================================

  /** ペットフードアイテムを生成 */
  fun createPetFoodItem(): ItemStack =
      ItemStack(Material.COOKED_BEEF).apply {
        itemMeta =
            itemMeta.apply {
              displayName(Component.text("★ 魔法のペットフード", GOLD))
              lore(listOf(Component.text("右クリックで与える", YELLOW)))
              addEnchant(Enchantment.UNBREAKING, 1, true)
              addItemFlags(ItemFlag.HIDE_ENCHANTS)
            }
      }

  /** アイテムがペットフードかどうか判定 */
  fun isPetFood(item: ItemStack): Boolean =
      item.type == Material.COOKED_BEEF &&
          PLAIN_TEXT.serialize(item.itemMeta?.displayName() ?: Component.empty())
              .contains("魔法のペットフード")

  // ==========================================
  // ペットブラシ
  // ==========================================

  /** ペットブラシアイテムを生成 */
  fun createPetBrushItem(): ItemStack =
      ItemStack(Material.BRUSH).apply {
        itemMeta =
            itemMeta.apply {
              displayName(Component.text("★ ペットブラシ", GOLD))
              lore(listOf(Component.text("右クリックでなでる", YELLOW)))
              addEnchant(Enchantment.UNBREAKING, 1, true)
              addItemFlags(ItemFlag.HIDE_ENCHANTS)
            }
      }

  /** アイテムがペットブラシかどうか判定 */
  fun isPetBrush(item: ItemStack): Boolean =
      item.type == Material.BRUSH &&
          PLAIN_TEXT.serialize(item.itemMeta?.displayName() ?: Component.empty()).contains("ペットブラシ")

  // ==========================================
  // ペットのおやつ
  // ==========================================

  /** ペットのおやつアイテムを生成 */
  fun createPetTreatItem(): ItemStack =
      ItemStack(Material.COOKIE).apply {
        itemMeta =
            itemMeta.apply {
              displayName(Component.text("★ ペットのおやつ", GOLD))
              lore(listOf(Component.text("右クリックで与える", YELLOW)))
              addEnchant(Enchantment.UNBREAKING, 1, true)
              addItemFlags(ItemFlag.HIDE_ENCHANTS)
            }
      }

  /** アイテムがペットのおやつかどうか判定 */
  fun isPetTreat(item: ItemStack): Boolean =
      item.type == Material.COOKIE &&
          PLAIN_TEXT.serialize(item.itemMeta?.displayName() ?: Component.empty()).contains("おやつ")

  // ==========================================
  // ヒールポーション
  // ==========================================

  /** ヒールポーションアイテムを生成 */
  fun createPetHealItem(): ItemStack =
      ItemStack(Material.GOLDEN_APPLE).apply {
        val healAmount = BigWolfConfig.healItemAmount
        itemMeta =
            itemMeta.apply {
              displayName(Component.text("ヒールポーション", AQUA))
              lore(
                  listOf(
                      Component.text("ペットに右クリックで使用", GRAY),
                      Component.text("体力を${healAmount}回復させます", YELLOW)))
              addEnchant(Enchantment.UNBREAKING, 1, true)
              addItemFlags(ItemFlag.HIDE_ENCHANTS)
            }
      }

  /** アイテムがヒールポーションかどうか判定 */
  fun isPetHeal(item: ItemStack): Boolean =
      item.type == Material.GOLDEN_APPLE &&
          PLAIN_TEXT.serialize(item.itemMeta?.displayName() ?: Component.empty())
              .contains("ヒールポーション")

  // ==========================================
  // スキルブック
  // ==========================================

  /**
   * スキルアンロックアイテム（スキルブック）を生成
   *
   * @param level スキルレベル（1=咆哮、2=突進、3=極意）
   */
  fun createSkillUnlockItem(level: Int): ItemStack =
      ItemStack(Material.BOOK).apply {
        val (name, color) =
            when (level) {
              1 -> "咆哮の書" to GOLD
              2 -> "突進の書" to AQUA
              3 -> "極意の書" to LIGHT_PURPLE
              else -> "未知の書" to WHITE
            }
        val cost = BigWolfConfig.getSkillBookUseCost(level)
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

  /**
   * スキルアンロックアイテムからレベルを取得
   *
   * @return スキルレベル（1-3）、対応するアイテムでなければ0
   */
  fun getUnlockItemLevel(item: ItemStack): Int {
    if (item.type != Material.BOOK || !item.hasItemMeta()) return 0
    val name = PLAIN_TEXT.serialize(item.itemMeta.displayName() ?: Component.empty())
    return when {
      name.contains("咆哮の書") -> 1
      name.contains("突進の書") -> 2
      name.contains("極意の書") -> 3
      else -> 0
    }
  }

  // ==========================================
  // パーティクルアンロックアイテム
  // ==========================================

  /**
   * パーティクルアンロックアイテムを生成
   *
   * @param particleId パーティクルID（5-10がアンロック可能）
   */
  fun createParticleUnlockItem(particleId: Int): ItemStack {
    val (name, material) =
        particleTypes.find { it.first == particleId }?.second ?: ("不明" to Material.PAPER)
    return ItemStack(material).apply {
      itemMeta =
          itemMeta.apply {
            displayName(Component.text("★ パーティクルの結晶【$name】", LIGHT_PURPLE))
            lore(
                listOf(
                    Component.text("ペットに右クリックで使用", GRAY),
                    Component.text("パーティクル「$name」をアンロック！", YELLOW)))
            persistentDataContainer.set(
                BigWolfKeys.PARTICLE, PersistentDataType.INTEGER, particleId)
            addEnchant(Enchantment.UNBREAKING, 1, true)
            addItemFlags(ItemFlag.HIDE_ENCHANTS)
          }
    }
  }

  /** アイテムがパーティクルアンロックアイテムかどうか判定 */
  fun isParticleUnlockItem(item: ItemStack): Boolean {
    if (!item.hasItemMeta()) return false
    val meta = item.itemMeta
    val name = PLAIN_TEXT.serialize(meta.displayName() ?: Component.empty())
    return name.contains("パーティクルの結晶") &&
        meta.persistentDataContainer.has(BigWolfKeys.PARTICLE, PersistentDataType.INTEGER)
  }

  /**
   * パーティクルアンロックアイテムからパーティクルIDを取得
   *
   * @return パーティクルID、対応するアイテムでなければ-1
   */
  fun getParticleUnlockId(item: ItemStack): Int {
    if (!item.hasItemMeta()) return -1
    return item.itemMeta.persistentDataContainer.get(
        BigWolfKeys.PARTICLE, PersistentDataType.INTEGER) ?: -1
  }

  /** パーティクルIDから名前を取得 */
  fun getParticleName(particleId: Int): String {
    return particleTypes.find { it.first == particleId }?.second?.first ?: "不明"
  }
}

// ===== File: listeners/BreedGuiListener.kt =====
/** 交配GUIのクリックイベントを処理するリスナー（シンプル版） */
class BreedGuiListener(
    private val petCommandService: PetCommandService,
    private val executeBreeding: (Player, LivingEntity, LivingEntity) -> Unit,
    private val openMainMenuFn: (Player) -> Unit
) : Listener {

  // 交配GUI内のペットエンティティを追跡 (Inventory -> List<LivingEntity>)
  private val guiPets = mutableMapOf<UUID, List<LivingEntity>>()

  /** 交配GUIのクリックイベント */
  @EventHandler
  fun onInventoryClick(event: InventoryClickEvent) {
    val player = event.whoClicked as? Player ?: return
    val title = event.view.title()
    val titlePlain = PLAIN_TEXT.serialize(title)

    if (titlePlain != "★ 交配するペットを選択") return

    event.isCancelled = true

    val clickedItem = event.currentItem ?: return
    if (clickedItem.type == Material.AIR) return

    val slot = event.slot
    val pets = guiPets[player.uniqueId] ?: emptyList()

    when {
      slot < 18 && clickedItem.type.name.endsWith("_SPAWN_EGG") -> {
        // ペットエッグをクリック → 親選択
        if (slot < pets.size) {
          handlePetSelection(player, pets[slot], event.view.topInventory)
        }
      }
      slot == 26 -> {
        // 決定ボタン
        handleConfirmBreed(player)
      }
      slot == 24 -> {
        // メインメニューへ戻る
        petCommandService.clearSelection(player)
        player.closeInventory()
        openMainMenuFn(player)
      }
      slot == 22 -> {
        // 説明（何もしない）
        return
      }
    }
  }

  /** ペット選択処理 */
  private fun handlePetSelection(player: Player, pet: LivingEntity, inv: Inventory) {
    val selection =
        petCommandService.breedSelections.getOrPut(player.uniqueId) {
          PetCommandService.BreedSelection()
        }

    if (selection.parent1 == null) {
      // 親1に選択
      selection.parent1 = pet
      player.sendMessage(Component.text("親1に選択しました", GREEN))
      updateGuiSelection(inv, selection)
    } else if (selection.parent2 == null) {
      // 親2に選択
      if (pet.petId == selection.parent1?.petId) {
        player.sendMessage(Component.text("同じペットは選択できません", RED))
        return
      }
      selection.parent2 = pet
      player.sendMessage(Component.text("親2に選択しました", GREEN))
      updateGuiSelection(inv, selection)
    } else {
      // 既に2匹選択済み → リセット
      selection.parent1 = pet
      selection.parent2 = null
      player.sendMessage(Component.text("親1に再選択しました", YELLOW))
      updateGuiSelection(inv, selection)
    }
  }

  /** GUIの選択状態を更新 */
  private fun updateGuiSelection(inv: Inventory, selection: PetCommandService.BreedSelection) {
    // スロット18: 親1表示
    val parent1 = selection.parent1
    if (parent1 != null && parent1.isValid) {
      val eggMat = Material.getMaterial("${parent1.type.name}_SPAWN_EGG") ?: Material.PIG_SPAWN_EGG
      val nameComp =
          parent1.customName()?.let { PLAIN_TEXT.serialize(it) }
              ?: MobTranslator.toJapanese(parent1.type)

      inv.setItem(
          18,
          ItemStack(eggMat).apply {
            itemMeta =
                itemMeta.apply {
                  displayName(Component.text("親1: $nameComp", AQUA))
                  lore(
                      listOf(
                          Component.text("レベル: ${parent1.foodLevel}", GREEN),
                          Component.text("世代: 第${parent1.generation}世代", GOLD),
                          Component.text("交配回数: ${parent1.breedCount}回", GRAY)))
                }
          })
    } else {
      inv.setItem(
          18,
          ItemStack(Material.LIGHT_BLUE_STAINED_GLASS_PANE).apply {
            itemMeta =
                itemMeta.apply {
                  displayName(Component.text("親1: 未選択", AQUA))
                  lore(listOf(Component.text("上のペットをクリックして選択", GRAY)))
                }
          })
    }

    // スロット20: 親2表示
    val parent2 = selection.parent2
    if (parent2 != null && parent2.isValid) {
      val eggMat = Material.getMaterial("${parent2.type.name}_SPAWN_EGG") ?: Material.PIG_SPAWN_EGG
      val nameComp =
          parent2.customName()?.let { PLAIN_TEXT.serialize(it) }
              ?: MobTranslator.toJapanese(parent2.type)

      inv.setItem(
          20,
          ItemStack(eggMat).apply {
            itemMeta =
                itemMeta.apply {
                  displayName(Component.text("親2: $nameComp", LIGHT_PURPLE))
                  lore(
                      listOf(
                          Component.text("レベル: ${parent2.foodLevel}", GREEN),
                          Component.text("世代: 第${parent2.generation}世代", GOLD),
                          Component.text("交配回数: ${parent2.breedCount}回", GRAY)))
                }
          })
    } else {
      inv.setItem(
          20,
          ItemStack(Material.PINK_STAINED_GLASS_PANE).apply {
            itemMeta =
                itemMeta.apply {
                  displayName(Component.text("親2: 未選択", LIGHT_PURPLE))
                  lore(listOf(Component.text("上のペットをクリックして選択", GRAY)))
                }
          })
    }
  }

  /** 交配を実行 */
  private fun handleConfirmBreed(player: Player) {
    val (parent1, parent2) = petCommandService.getSelectedParents(player)

    if (parent1 == null || parent2 == null) {
      player.sendMessage(Component.text("親を2匹選択してください", RED))
      return
    }

    // 両方のペットがまだ有効か確認
    if (!parent1.isValid || parent1.isDead) {
      player.sendMessage(Component.text("親1が無効です。もう一度選択してください", RED))
      petCommandService.clearSelection(player)
      return
    }

    if (!parent2.isValid || parent2.isDead) {
      player.sendMessage(Component.text("親2が無効です。もう一度選択してください", RED))
      petCommandService.clearSelection(player)
      return
    }

    // オーナー確認
    if (parent1.ownerId != player.uniqueId.toString() ||
        parent2.ownerId != player.uniqueId.toString()) {
      player.sendMessage(Component.text("自分のペットのみ交配できます", RED))
      petCommandService.clearSelection(player)
      return
    }

    // 交配条件確認
    if (parent1.foodLevel < BigWolfConfig.breedMinLevel) {
      player.sendMessage(
          Component.text("親1のレベルが足りません (必要: Lv.${BigWolfConfig.breedMinLevel})", RED))
      return
    }

    if (parent2.foodLevel < BigWolfConfig.breedMinLevel) {
      player.sendMessage(
          Component.text("親2のレベルが足りません (必要: Lv.${BigWolfConfig.breedMinLevel})", RED))
      return
    }

    player.closeInventory()

    // 交配実行
    executeBreeding(player, parent1, parent2)

    // 選択をクリア
    petCommandService.clearSelection(player)
    guiPets.remove(player.uniqueId)
  }

  /** 交配GUIが閉じられた時 */
  @EventHandler
  fun onInventoryClose(event: InventoryCloseEvent) {
    val player = event.player as? Player ?: return
    guiPets.remove(player.uniqueId)
  }

  /** 交配GUIが開かれた時（外部から呼ばれる） */
  fun registerBreedGuiOpened(player: Player, pets: List<LivingEntity>) {
    guiPets[player.uniqueId] = pets
    // 選択状態をリセット
    petCommandService.breedSelections[player.uniqueId] = PetCommandService.BreedSelection()
  }
}

// ===== File: listeners/PetEventListener.kt =====
/**
 * PetEventListener handles basic pet-related events:
 * - PlayerDropItem: Tracks drop cooldowns
 * - EntityTeleport: Prevents teleporting during fetch tasks
 * - EntityDismount: Handles flying pet descent after dismount
 */
class PetEventListener(
    private val dropCooldowns: MutableMap<UUID, Long>,
    private val activeFetchTasks: MutableMap<UUID, BukkitTask>
) : Listener {

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
}

// ===== File: listeners/PetInteractionListener.kt =====
/**
 * PetInteractionListener handles player interactions with pet entities:
 * - Right-clicking on pets (onEntityInteract)
 * - Opening pet GUI
 * - Feeding pets
 * - Using pet brush and treats
 * - Skill unlocking
 * - Particle unlocking
 * - Mounting pets
 */
class PetInteractionListener(
    private val guiManager: GuiManager,
    private val fetchSystem: FetchSystem,
    private val petControlSystem: PetControlSystem,
    private val mountCooldowns: MutableMap<UUID, Long>,
    // Helper method references - these need to be exposed from BigWolfPlugin
    private val checkAndMigrateOwnerFn: (LivingEntity, Player) -> Unit,
    private val isOwnerFn: (LivingEntity, Player) -> Boolean,
    private val isPetFoodFn: (ItemStack) -> Boolean,
    private val giveFoodFn: (Player, LivingEntity) -> Unit,
    private val isPetBrushFn: (ItemStack) -> Boolean,
    private val useBrushFn: (Player, LivingEntity) -> Unit,
    private val isPetTreatFn: (ItemStack) -> Boolean,
    private val giveTreatFn: (Player, LivingEntity) -> Unit,
    private val isPetHealFn: (ItemStack) -> Boolean,
    private val healPetFn: (Player, LivingEntity) -> Unit,
    private val getUnlockItemLevelFn: (ItemStack) -> Int,
    private val handleSkillUnlockFn: (Player, LivingEntity, ItemStack, Int) -> Unit,
    private val isParticleUnlockItemFn: (ItemStack) -> Boolean,
    private val handleParticleUnlockFn: (Player, LivingEntity, ItemStack) -> Unit
) : Listener {

  @EventHandler
  fun onEntityInteract(event: PlayerInteractEntityEvent) {
    // OFF_HANDのイベントはスキップ
    if (event.hand != EquipmentSlot.HAND) return

    val player = event.player
    val entity = event.rightClicked as? LivingEntity ?: return

    checkAndMigrateOwnerFn(entity, player)
    val isOwner = isOwnerFn(entity, player)

    val plainName = entity.customName()?.let { PLAIN_TEXT.serialize(it) } ?: ""
    if (entity.ownerId == null && !plainName.containsDefaultPetMarker()) return

    event.isCancelled = true

    if (isOwner && isPetFoodFn(player.inventory.itemInMainHand)) {
      giveFoodFn(player, entity)
      return
    }

    // ブラシ
    if (isOwner && isPetBrushFn(player.inventory.itemInMainHand)) {
      useBrushFn(player, entity)
      return
    }

    val mainHand = player.inventory.itemInMainHand

    // おやつ
    if (isOwner && isPetTreatFn(mainHand)) {
      giveTreatFn(player, entity)
      return
    }

    // ヒールアイテム
    if (isOwner && isPetHealFn(mainHand)) {
      healPetFn(player, entity)
      return
    }

    // スキル強化アイテム
    if (isOwner) {
      val unlockLevel = getUnlockItemLevelFn(mainHand)
      if (unlockLevel > 0) {
        handleSkillUnlockFn(player, entity, mainHand, unlockLevel)
        event.isCancelled = true
        return
      }

      // パーティクルアンロックアイテム
      if (isParticleUnlockItemFn(mainHand)) {
        handleParticleUnlockFn(player, entity, mainHand)
        event.isCancelled = true
        return
      }

      // 騎乗またはGUI表示
      if (player.isSneaking) {
        guiManager.openPetInfoGui(player, entity)
      } else {
        if (player !in entity.passengers) {
          fetchSystem.stopFetchTask(entity)
          // Set sitting to false if supported
          try {
            val sittable = entity as? Sittable
            sittable?.isSitting = false
          } catch (_: Exception) {
            // Ignore if Sittable is not available
          }
          entity.addPassenger(player)
          mountCooldowns[player.uniqueId] = System.currentTimeMillis()
          player.sendMessage(Component.text("運転席に乗りました！(左クリックでスキル)", GREEN))
          petControlSystem.startControlTask(player, entity)
        }
      }
    } else {
      player.sendMessage(Component.text("このペットには飼い主しか乗れません。", RED))
    }
  }
}

// ===== File: listeners/PetInventoryListener.kt =====
/**
 * PetInventoryListener handles all inventory GUI interactions:
 * - onInventoryClick: Main GUI handler for pet info, shop, main menu, particle selection
 * - onBreedGuiClick: Breeding selection GUI
 * - onInventoryClose: Cleanup when inventories are closed
 */
class PetInventoryListener(
    private val logger: Logger,
    private val guiManager: GuiManager,
    private val petSpawnSystem: PetSpawnSystem,
    // GUI state maps
    private val openedGuis: MutableMap<Inventory, LivingEntity>,
    private val openedShopGuis: MutableMap<Inventory, ShopContext>,
    private val openedMainMenus: MutableSet<Inventory>,
    // GUI titles
    private val guiTitle: Component,
    private val shopGuiTitle: Component,
    private val mainMenuTitle: Component,
    private val breedGuiTitle: Component,
    // Helper method references
    private val consumeTokensFn: (Player, Int) -> Boolean,
    private val refundTokensFn: (Player, Int) -> Unit,
    private val giveFoodFn: (Player, LivingEntity) -> Unit,
    private val storePetToItemFn: (Player, LivingEntity) -> Unit,
    private val storeAllPetsFn: (Player) -> Unit,
    private val handleBreedCommandFn: (Player) -> Unit,
    private val openShopFn: (Player) -> Unit
) : Listener {

  @EventHandler
  fun onInventoryClick(event: InventoryClickEvent) {
    val player = event.whoClicked as? Player ?: return
    val item = event.currentItem ?: return

    // パーティクル選択GUI
    if (event.view.title() == Component.text("パーティクル選択", GOLD)) {
      event.isCancelled = true
      val entity = openedGuis[event.view.topInventory] ?: return

      when (item.type) {
        Material.BARRIER,
        Material.LIGHTNING_ROD,
        Material.BLAZE_POWDER,
        Material.SOUL_CAMPFIRE,
        Material.RED_DYE,
        Material.NETHER_STAR,
        Material.NOTE_BLOCK,
        Material.SNOWBALL,
        Material.CHERRY_LEAVES,
        Material.ENDER_PEARL,
        Material.SLIME_BALL -> {
          // パーティクルを選択
          val particleId =
              when (event.slot) {
                0 -> 0 // なし
                1 -> 1 // 電気
                2 -> 2 // 炎
                3 -> 3 // 青炎
                4 -> 4 // ハート
                9 -> 5 // 星
                10 -> 6 // 音符
                11 -> 7 // 雪
                12 -> 8 // 桜
                13 -> 9 // エンド
                14 -> 10 // スライム
                else -> -1
              }

          if (particleId >= 0) {
            // デフォルトパーティクル(0-4)は常に選択可能
            // アンロック可能パーティクル(5-10)は解放済みかチェック
            if (particleId <= 4 || entity.isParticleUnlocked(particleId)) {
              entity.particleType = particleId
              player.playSound(player.location, Sound.BLOCK_AMETHYST_BLOCK_CHIME, 1f, 1f)
              guiManager.openParticleSelectGui(player, entity) // GUI再描画
            } else {
              player.sendMessage(Component.text("このパーティクルは未解放です！", RED))
              player.playSound(player.location, Sound.ENTITY_VILLAGER_NO, 1f, 1f)
            }
          }
        }
        Material.ARROW -> {
          // 戻る
          player.closeInventory()
          guiManager.openPetInfoGui(player, entity)
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

    // メインメニューGUI
    if (event.view.title() == mainMenuTitle) {
      event.isCancelled = true
      if (!openedMainMenus.contains(event.view.topInventory)) return

      when (item.type) {
        Material.WRITTEN_BOOK -> {
          // ペット一覧
          player.closeInventory()
          guiManager.openPetListGui(player, player.uniqueId)
        }
        Material.CHEST -> {
          // 全ペット収納
          player.closeInventory()
          storeAllPetsFn(player)
        }
        Material.HEART_OF_THE_SEA -> {
          // 交配
          player.closeInventory()
          handleBreedCommandFn(player)
        }
        Material.EMERALD -> {
          // ショップ
          player.closeInventory()
          openShopFn(player)
        }
        Material.BARRIER -> {
          // 閉じる
          player.closeInventory()
        }
        else -> {}
      }
      return
    }

    // 購入GUI
    if (event.view.title() == shopGuiTitle) {
      event.isCancelled = true
      val ctx = openedShopGuis[event.view.topInventory] ?: return player.closeInventory()

      when (item.type) {
        Material.EMERALD_BLOCK -> {
          // ペット数制限チェック
          if (petSpawnSystem.countActivePets(player) >= BigWolfConfig.MAX_PET_COUNT) {
            player.closeInventory()
            player.sendMessage(
                Component.text("ペットは同時に${BigWolfConfig.MAX_PET_COUNT}匹までしか召喚できません！", RED))
            player.playSound(player.location, Sound.ENTITY_VILLAGER_NO, 1f, 1f)
            return
          }

          // ポイント残高チェックと消費
          if (!consumeTokensFn(player, ctx.cost)) {
            player.closeInventory()
            player.playSound(player.location, Sound.ENTITY_VILLAGER_NO, 1f, 1f)
            return
          }

          player.closeInventory()

          // 直接ペットをスポーン（購入券システム廃止）
          val petId = petSpawnSystem.spawnAndMountEntity(player, ctx.type, ctx.variant)

          if (petId == null) {
            // スポーン失敗 → 返金
            refundTokensFn(player, ctx.cost)
            player.sendMessage(Component.text("召喚に失敗したためポイントを返金しました。(+${ctx.cost}pt)", YELLOW))
            player.playSound(player.location, Sound.ENTITY_VILLAGER_NO, 1f, 1f)
            return
          }

          // 購入履歴を記録
          val petData =
              PetDataManager.recordPurchase(
                  ownerUuid = player.uniqueId,
                  petId = petId,
                  type = ctx.type,
                  variant = ctx.variant,
                  customName = null)

          // エンティティの表示名をJSON保存名（連番ベース）で上書き
          petData.customName?.let {
            ActivePetRegistry.findByPetId(petId)?.customName(Component.text(it))
          }

          player.playSound(player.location, Sound.ENTITY_PLAYER_LEVELUP, 1f, 1.2f)
          val label =
              if (ctx.variant != null) "${ctx.type.name} (${ctx.variant})" else ctx.type.name
          player.sendMessage(Component.text("購入しました: $label (-${ctx.cost}pt)", GREEN))
        }

        Material.ARROW -> {
          // ← ショップへ戻る
          player.closeInventory()
          openShopFn(player)
        }

        Material.BARRIER -> {
          player.closeInventory()
        }

        else -> {}
      }
      return
    }

    // 既存のペット情報GUI
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
            logger.warning("Pet data not found: ownerUuid=$ownerUuid, petId=$petId")
            return
          }
          player.sendMessage(Component.text("=== ペット名前変更 ===", GOLD))
          player.sendMessage(Component.text("下のメッセージをクリックすると、チャット欄に自動入力されます。", YELLOW))
          player.sendMessage(Component.text("名前を入力してEnterキーで確定してください。", YELLOW))
          player.sendMessage(Component.empty())
          player.sendMessage(
              Component.text("▶ /bigwolf rename ${petData.petNumber} <新しい名前>", GREEN)
                  .clickEvent(
                      net.kyori.adventure.text.event.ClickEvent.suggestCommand(
                          "/bigwolf rename ${petData.petNumber} "))
                  .hoverEvent(Component.text("クリックでコマンドを入力欄に挿入")))
        } catch (e: Exception) {
          player.sendMessage(Component.text("ペット情報の取得に失敗しました。", RED))
          logger.warning("Failed to get pet data: ${e.message}")
        }
      }

      Material.IRON_SWORD -> {
        val unlocked = entity.skillUnlockedLevel
        if (unlocked == 0) {
          player.sendMessage(Component.text("スキルが一つも解放されていません。強化アイテムを与えてください。", RED))
          return
        }
        val currentSkill = entity.skillType
        val nextSkill = if (event.isRightClick) {
          if (currentSkill > 1) currentSkill - 1 else unlocked
        } else {
          if (currentSkill < unlocked) currentSkill + 1 else 1
        }

        entity.skillType = nextSkill
        player.playSound(player.location, Sound.UI_BUTTON_CLICK, 1f, 1f)
        guiManager.openPetInfoGui(player, entity)
      }

      Material.BARRIER -> {
        if (event.slot == 3) {
          player.sendMessage(Component.text("スキルが未解放です。スキル強化の本を与えてください。", RED))
        } else if (event.slot == 7) { // 閉じるボタン
          player.closeInventory()
        }
      }

      Material.BLAZE_POWDER -> {
        // パーティクル選択GUIを開く
        player.closeInventory()
        guiManager.openParticleSelectGui(player, entity)
      }

      Material.CHEST -> {
        player.closeInventory()
        storePetToItemFn(player, entity)
      }

      // 譲渡ボタン
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
                  .clickEvent(
                      net.kyori.adventure.text.event.ClickEvent.suggestCommand(
                          "/bigwolf transfer ${petData.petNumber} "))
                  .hoverEvent(Component.text("クリックでコマンドを入力欄に挿入")))
        } catch (e: Exception) {
          player.sendMessage(Component.text("譲渡処理中にエラーが発生しました: ${e.message}", RED))
          logger.warning("Transfer error: ${e.message}")
        }
      }

      // フード
      Material.COOKED_BEEF -> {
        giveFoodFn(player, entity)
        guiManager.openPetInfoGui(player, entity) // 更新
      }

      else -> {}
    }
  }

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
    val selectedPet: LivingEntity? = ActivePetRegistry.findByPetId(petId)

    if (selectedPet == null) {
      player.sendMessage(Component.text("ペットが見つかりません。", RED))
      return
    }

    // 新しい交配システムでは、このGUIは使用されない
    // BreedGuiListenerで処理される
    player.closeInventory()
    player.sendMessage(Component.text("交配システムが更新されました。/bigwolf breed を使用してください。", YELLOW))
  }

  @EventHandler
  fun onInventoryClose(event: InventoryCloseEvent) {
    openedGuis.remove(event.inventory)
    openedShopGuis.remove(event.inventory)
    openedMainMenus.remove(event.inventory)
  }
}

// ===== File: listeners/PetLifecycleListener.kt =====
/**
 * ペットライフサイクル関連のイベントリスナー
 * - ペットの死亡
 * - プレイヤー切断時のペット位置記録
 * - ペット降車時の処理
 */
class PetLifecycleListener(
    private val plugin: JavaPlugin,
    private val logger: Logger,
    private val onPlayerQuitCallback: (Player) -> Unit
) : Listener {

  private val activeFlyDescentTasks = ConcurrentHashMap<UUID, BukkitTask>()

  /** ペット死亡時の処理 */
  @EventHandler
  fun onPetDeath(event: EntityDeathEvent) {
    val entity = event.entity
    val petId = entity.petId ?: return
    val ownerId = entity.ownerId ?: return

    val ownerUuid = runCatching { UUID.fromString(ownerId) }.getOrNull() ?: return

    // レジストリから登録解除
    ActivePetRegistry.unregister(entity.uniqueId)

    // 死亡データを記録
    PetDataManager.recordDeath(ownerUuid, entity)

    // オーナーにメッセージを送信
    val owner = Bukkit.getPlayer(ownerUuid)
    if (owner != null) {
      val petName = entity.customName()?.let { PLAIN_TEXT.serialize(it) } ?: entity.type.name
      owner.sendMessage(Component.text("あなたのペット「$petName」が死亡しました...", RED))
      owner.sendMessage(Component.text("/bigwolf dead で死亡したペットを確認できます。", GRAY))
      owner.sendMessage(
          Component.text("/bigwolf revive <番号> で ${BigWolfConfig.reviveCost}pt で復活できます。", GRAY))
    }

    logger.info("Pet died: Owner=$ownerId, PetId=$petId")
  }

  /** プレイヤー切断時の処理 */
  @EventHandler
  fun onPlayerQuit(event: PlayerQuitEvent) {
    val player = event.player

    // 位置更新を先に行う（storeAllPetsがunregisterするため、順序が重要）
    val vehicle = player.vehicle as? LivingEntity
    val vehiclePetId = vehicle?.petId
    val vehicleOwnerId = vehicle?.ownerId
    if (vehicle != null && vehiclePetId != null && vehicleOwnerId != null) {
      runCatching { UUID.fromString(vehicleOwnerId) }.getOrNull()
          ?.let { PetDataManager.updateLastLocation(it, vehiclePetId, vehicle.location) }
    }

    // 所有する全ペットの位置も更新
    val playerUuidStr = player.uniqueId.toString()
    for (entity in ActivePetRegistry.getByOwner(playerUuidStr)) {
      val petId = entity.petId ?: continue
      PetDataManager.updateLastLocation(player.uniqueId, petId, entity.location)
    }

    // コールバックでプラグイン側のクリーンアップを実行（storeAllPets含む）
    onPlayerQuitCallback(player)
  }

  /** ペット降車時の処理 */
  @EventHandler
  fun onPetDismount(event: EntityDismountEvent) {
    if (event.entity !is Player) return
    val entity = event.dismounted as? LivingEntity ?: return
    if (entity.ownerId == null) return
    // 降車中の降下タスクが残っていればキャンセル
    activeFlyDescentTasks.remove(entity.uniqueId)?.cancel()

    if (entity is Parrot) {
      // 肩乗り防止: 降車直後に座り状態へ
      entity.isSitting = true
      // 空中降車: テレポートで強制降下 + エフェクト
      if (!entity.isOnGround) {
        // 地面Y座標を走査（最大128ブロック下）
        val startLoc = entity.location
        var targetY = startLoc.y
        for (dy in 1..128) {
          val check = startLoc.clone().subtract(0.0, dy.toDouble(), 0.0)
          if (check.block.type.isSolid) {
            targetY = check.block.y.toDouble() + 1.0
            break
          }
        }
        val finalTargetY = targetY
        var currentY = startLoc.y
        var ticks = 0
        val task =
            object : BukkitRunnable() {
              override fun run() {
                if (!entity.isValid || entity.isDead || ticks++ > 1000) {
                  activeFlyDescentTasks.remove(entity.uniqueId)
                  cancel()
                  return
                }
                // Nブロック/tick でテレポート降下
                currentY = (currentY - 0.3).coerceAtLeast(finalTargetY)
                val nextLoc = entity.location.clone()
                nextLoc.y = currentY
                entity.teleport(nextLoc)
                // 着地完了 — isOnGroundはテレポート後に不正確なためY座標のみで判定
                if (currentY <= finalTargetY) {
                  activeFlyDescentTasks.remove(entity.uniqueId)
                  cancel()
                }
              }
            }
        activeFlyDescentTasks[entity.uniqueId] = task.runTaskTimer(plugin, 1L, 1L)
        // 降下中も魔法浮遊エフェクトを起動（タイムアウト1000秒）
        ParrotFloatEffectRegistry.start(plugin, entity, 20000)
      }
    }
  }

  /** オウムへの乗車時: AI復帰 + 座り解除 */
  @EventHandler
  fun onPetMount(event: EntityMountEvent) {
    if (event.entity !is Player) return
    val entity = event.mount as? Parrot ?: return
    if (entity.ownerId == null) return
    entity.isSitting = false
    ParrotFloatEffectRegistry.stop(entity.uniqueId)
  }
}

// ===== File: listeners/PetShopGuiListener.kt =====
/** 購入GUIのクリックイベントを処理するリスナー */
class PetShopGuiListener(
    private val petShopGuiService: PetShopGuiService,
    private val openMainMenuFn: (Player) -> Unit,
    private val consumeTokensFn: (Player, Int) -> Boolean
) : Listener {

  // 開いているバリアント選択GUIを追跡 (プレイヤーUUID -> EntityType)
  private val openedVariantGuis = mutableMapOf<UUID, EntityType>()

  @EventHandler
  fun onInventoryClick(event: InventoryClickEvent) {
    val player = event.whoClicked as? Player ?: return
    val title = event.view.title()
    val titlePlain = PLAIN_TEXT.serialize(title)

    // メイン購入GUI
    if (titlePlain == "★ ペットショップ") {
      event.isCancelled = true

      val clickedItem = event.currentItem ?: return
      if (clickedItem.type == Material.AIR || clickedItem.type == Material.EMERALD) return

      // メインメニューへ戻るボタン
      if (clickedItem.type == Material.ARROW) {
        player.closeInventory()
        openMainMenuFn(player)
        return
      }

      // アイテムショップボタン
      if (clickedItem.type == Material.CHEST) {
        player.closeInventory()
        petShopGuiService.openItemShopGui(player)
        return
      }

      // スポーンエッグのマテリアル名からEntityTypeを取得
      val materialName = clickedItem.type.name
      if (!materialName.endsWith("_SPAWN_EGG")) return

      val typeName = materialName.removeSuffix("_SPAWN_EGG")
      val type = runCatching { EntityType.valueOf(typeName) }.getOrNull() ?: return

      if (!PetRegistry.isOfficial(type)) return

      // バリアントがあるかチェック
      val variants = VariantHandler.getVariantNames(type)

      player.closeInventory()

      if (variants.isNotEmpty()) {
        // バリアント選択GUIを開く
        openedVariantGuis[player.uniqueId] = type
        petShopGuiService.openVariantSelectionGui(player, type)
      } else {
        // バリアントがない場合は直接購入画面へ
        petShopGuiService.openVariantSelectionGui(player, type)
      }

      return
    }

    // アイテムショップ カテゴリ選択GUI
    if (title == petShopGuiService.itemShopTitle) {
      event.isCancelled = true
      val clickedItem = event.currentItem ?: return
      when (clickedItem.type) {
        Material.ARROW -> {
          player.closeInventory()
          petShopGuiService.openMainShopGui(player)
        }
        Material.GOLDEN_APPLE -> {
          player.closeInventory()
          petShopGuiService.openCareShopGui(player)
        }
        Material.ENCHANTED_BOOK -> {
          player.closeInventory()
          petShopGuiService.openSkillShopGui(player)
        }
        Material.NETHER_STAR -> {
          player.closeInventory()
          petShopGuiService.openParticleShopGui(player)
        }
        Material.STICK -> {
          player.closeInventory()
          petShopGuiService.openToyShopGui(player)
        }
        else -> {}
      }
      return
    }

    // ケア用品ショップ
    if (title == petShopGuiService.careShopTitle) {
      event.isCancelled = true
      val clickedItem = event.currentItem ?: return
      if (clickedItem.type == Material.ARROW) {
        player.closeInventory()
        petShopGuiService.openItemShopGui(player)
        return
      }
      val cost =
          when {
            PetItemFactory.isPetFood(clickedItem) -> BigWolfConfig.itemShopPetFoodCost
            PetItemFactory.isPetBrush(clickedItem) -> BigWolfConfig.itemShopPetBrushCost
            PetItemFactory.isPetTreat(clickedItem) -> BigWolfConfig.itemShopPetTreatCost
            PetItemFactory.isPetHeal(clickedItem) -> BigWolfConfig.itemShopHealPotionCost
            else -> return
          }
      if (!consumeTokensFn(player, cost)) {
        player.playSound(player.location, Sound.ENTITY_VILLAGER_NO, 1f, 1f)
        return
      }
      val buyItem = clickedItem.clone().apply { amount = 1 }
      // loreから価格行を除いた元アイテムを渡すため、単純にcloneして支給
      player.inventory.addItem(buyItem)
      player.playSound(player.location, Sound.ENTITY_PLAYER_LEVELUP, 1f, 1.2f)
      player.sendMessage(Component.text("購入しました！ (-${cost}pt)", GREEN))
      return
    }

    // スキルブックショップ
    if (title == petShopGuiService.skillShopTitle) {
      event.isCancelled = true
      val clickedItem = event.currentItem ?: return
      if (clickedItem.type == Material.ARROW) {
        player.closeInventory()
        petShopGuiService.openItemShopGui(player)
        return
      }
      val level = PetItemFactory.getUnlockItemLevel(clickedItem)
      if (level == 0) return
      val cost = BigWolfConfig.getSkillBookShopCost(level)
      if (!consumeTokensFn(player, cost)) {
        player.playSound(player.location, Sound.ENTITY_VILLAGER_NO, 1f, 1f)
        return
      }
      player.inventory.addItem(PetItemFactory.createSkillUnlockItem(level))
      player.playSound(player.location, Sound.ENTITY_PLAYER_LEVELUP, 1f, 1.2f)
      player.sendMessage(Component.text("購入しました！ (-${cost}pt)", GREEN))
      return
    }

    // パーティクルショップ
    if (title == petShopGuiService.particleShopTitle) {
      event.isCancelled = true
      val clickedItem = event.currentItem ?: return
      if (clickedItem.type == Material.ARROW) {
        player.closeInventory()
        petShopGuiService.openItemShopGui(player)
        return
      }
      val particleId = PetItemFactory.getParticleUnlockId(clickedItem)
      if (particleId !in 5..10) return
      val cost = BigWolfConfig.itemShopParticleCost
      if (!consumeTokensFn(player, cost)) {
        player.playSound(player.location, Sound.ENTITY_VILLAGER_NO, 1f, 1f)
        return
      }
      player.inventory.addItem(PetItemFactory.createParticleUnlockItem(particleId))
      player.playSound(player.location, Sound.ENTITY_PLAYER_LEVELUP, 1f, 1.2f)
      player.sendMessage(Component.text("購入しました！ (-${cost}pt)", GREEN))
      return
    }

    // おもちゃショップ
    if (title == petShopGuiService.toyShopTitle) {
      event.isCancelled = true
      val clickedItem = event.currentItem ?: return
      if (clickedItem.type == Material.ARROW) {
        player.closeInventory()
        petShopGuiService.openItemShopGui(player)
        return
      }
      val spec = PetRegistry.findSpecByToy(clickedItem) ?: return
      val cost = BigWolfConfig.itemShopToyCost
      if (!consumeTokensFn(player, cost)) {
        player.playSound(player.location, Sound.ENTITY_VILLAGER_NO, 1f, 1f)
        return
      }
      player.inventory.addItem(spec.createToyItem())
      player.playSound(player.location, Sound.ENTITY_PLAYER_LEVELUP, 1f, 1.2f)
      player.sendMessage(Component.text("購入しました！ (-${cost}pt)", GREEN))
      return
    }

    // バリアント選択GUI
    if (titlePlain.endsWith("のバリアント選択")) {
      event.isCancelled = true

      val type = openedVariantGuis[player.uniqueId] ?: return
      val clickedItem = event.currentItem ?: return

      when (clickedItem.type) {
        Material.AIR, Material.EMERALD -> return
        Material.ARROW -> {
          // 戻るボタン
          player.closeInventory()
          petShopGuiService.openMainShopGui(player)
          return
        }
        else -> {
          // スポーンエッグがクリックされた
          if (!clickedItem.type.name.endsWith("_SPAWN_EGG")) return

          val itemMeta = clickedItem.itemMeta ?: return
          val itemLore = itemMeta.lore() ?: return

          // LOREから「バリアント: xxx」行を探してバリアント名を取得
          var variant: String? = null
          for (loreLine in itemLore) {
            val lorePlain = PLAIN_TEXT.serialize(loreLine)
            if (lorePlain.startsWith("バリアント: ")) {
              variant = lorePlain.removePrefix("バリアント: ")
              break
            }
          }

          // タイトルから「デフォルト」かどうか判定
          val itemName = itemMeta.displayName() ?: return
          val itemNamePlain = PLAIN_TEXT.serialize(itemName)
          if (itemNamePlain.contains("デフォルト")) {
            variant = null
          }

          player.closeInventory()

          // 購入確認画面を開く
          petShopGuiService.openPurchaseConfirmation(player, type, variant)
        }
      }

      return
    }
  }

  @EventHandler
  fun onPlayerQuit(event: PlayerQuitEvent) {
    openedVariantGuis.remove(event.player.uniqueId)
  }
}

// ===== File: listeners/PlayerActionListener.kt =====
/**
 * PlayerActionListener handles player actions:
 * - onPlayerInteract: Right-click with items (toys, stored pets)
 * - onPlayerFish: Fishing rod toy interactions
 * - onPlayerSkillTrigger: Left-click to activate pet skills
 */
class PlayerActionListener(
    @Suppress("unused") private val plugin: BigWolfPlugin,
    private val fetchSystem: FetchSystem,
    @Suppress("unused") private val petSpawnSystem: PetSpawnSystem,
    private val skillSystem: SkillSystem,
    private val dropCooldowns: MutableMap<UUID, Long>,
    private val mountCooldowns: MutableMap<UUID, Long>,
    // Helper method references
    private val isOwnerFn: (LivingEntity, Player) -> Boolean,
    private val restorePetFromItemFn: (Player, ItemStack, Location) -> Unit
) : Listener {

  @EventHandler
  fun onPlayerInteract(event: PlayerInteractEvent) {
    val item = event.item ?: return
    val player = event.player

    if (event.action == Action.RIGHT_CLICK_AIR || event.action == Action.RIGHT_CLICK_BLOCK) {
      val toySpec = PetRegistry.findSpecByToy(item)

      if (toySpec != null && toySpec.toyType == ToyType.THROW_FETCH) {
        event.isCancelled = true
        fetchSystem.handleThrowToy(player, item, toySpec)
        return
      }

      if (toySpec != null && toySpec.toyType == ToyType.BALLOON_JUMP) {
        event.isCancelled = true
        fetchSystem.handleBalloonJump(player, item, toySpec)
        return
      }
    }

    if ((event.action == Action.RIGHT_CLICK_BLOCK || event.action == Action.RIGHT_CLICK_AIR) &&
        event.hand == EquipmentSlot.HAND) {
      val meta = item.itemMeta ?: return
      if (meta.persistentDataContainer.has(BigWolfKeys.STORED_FLAG, PersistentDataType.BYTE)) {
        event.isCancelled = true

        // 放棄・削除済みのエッグ（複製品含む）を無効化
        val pdc = meta.persistentDataContainer
        val storedPetId = pdc.get(BigWolfKeys.STORED_ID, PersistentDataType.STRING)
        val storedOwnerStr = pdc.get(BigWolfKeys.STORED_OWNER, PersistentDataType.STRING)
        if (storedPetId != null && storedOwnerStr != null) {
          val ownerUuid = runCatching { UUID.fromString(storedOwnerStr) }.getOrNull()
          if (ownerUuid != null && PetDataManager.getPetData(ownerUuid, storedPetId) == null) {
            player.sendMessage(Component.text("このペットエッグは無効です。（放棄または削除済み）", RED))
            item.amount -= 1
            return
          }
        }

        val clicked = event.clickedBlock
        val spawnLoc =
            if (clicked != null) {
              when (event.blockFace) {
                BlockFace.UP -> clicked.location.add(0.5, 1.0, 0.5)
                BlockFace.DOWN -> clicked.location.add(0.5, -1.0, 0.5)
                else -> clicked.getRelative(event.blockFace).location.add(0.5, 0.0, 0.5)
              }
            } else {
              val eye = player.eyeLocation
              val dir = eye.direction.clone().normalize().multiply(1.5)
              eye.add(dir)
              eye
            }
        restorePetFromItemFn(player, item, spawnLoc)
      }
    }
  }

  @EventHandler
  fun onPlayerFish(event: PlayerFishEvent) {
    val player = event.player
    val item = player.inventory.itemInMainHand

    val toySpec = PetRegistry.findSpecByToy(item) ?: return
    if (toySpec.toyType != ToyType.FISHING_ROD) return

    if (event.state == PlayerFishEvent.State.FISHING) {
      fetchSystem.handleFishingToy(player, toySpec)
    }
  }

  @EventHandler
  fun onPlayerSkillTrigger(event: PlayerInteractEvent) {
    if (event.action != Action.LEFT_CLICK_AIR && event.action != Action.LEFT_CLICK_BLOCK) return
    if (event.hand != EquipmentSlot.HAND) return

    val player = event.player
    val vehicle = player.vehicle as? LivingEntity ?: return

    if (!isOwnerFn(vehicle, player)) return

    val now = System.currentTimeMillis()
    if (now - dropCooldowns.getOrDefault(player.uniqueId, 0L) < 500) return
    if (now - mountCooldowns.getOrDefault(player.uniqueId, 0L) < 1000) return

    // SkillSystemに委譲
    skillSystem.tryActivateSkill(player, vehicle)
  }
}

// ===== File: listeners/ShopListener.kt =====
/** ショップMOB関連のイベントリスナー */
class ShopListener(
    private val shopSystem: ShopSystem,
    private val onShopInteract: (Player, ShopContext) -> Unit
) : Listener {

  /** ショップMOBへのインタラクト */
  @EventHandler
  fun onShopMobInteract(event: PlayerInteractEntityEvent) {
    val entity = event.rightClicked as? LivingEntity ?: return
    val ctx = shopSystem.getShopContext(entity) ?: return

    event.isCancelled = true

    val player = event.player
    onShopInteract(player, ctx)
  }

  /** ショップMOBへのダメージをキャンセル */
  @EventHandler
  fun onShopMobDamage(event: EntityDamageEvent) {
    val entity = event.entity as? LivingEntity ?: return
    if (shopSystem.isShopMob(entity)) {
      event.isCancelled = true
    }
  }
}

// ===== File: services/PetCommandService.kt =====
/**
 * ペット関連のコマンド処理を担当するサービス
 * - 名前変更
 * - 交配コマンド
 */
class PetCommandService(private val breedingSystem: BreedingSystem, private val logger: Logger) {
  val breedGuiTitle = Component.text("★ 交配するペットを選択", DARK_PURPLE)

  // 交配の親選択状態 (プレイヤーUUID -> (親1, 親2))
  data class BreedSelection(var parent1: LivingEntity? = null, var parent2: LivingEntity? = null)

  val breedSelections = ConcurrentHashMap<UUID, BreedSelection>()

  // BreedGuiListenerへの参照（後で設定）
  var breedGuiListener: BreedGuiListener? = null

  /** 交配コマンドを処理 */
  fun handleBreedCommand(player: Player) {
    val breedablePets = breedingSystem.getBreedablePets(player)
    if (breedablePets.size < 2) {
      player.sendMessage(Component.text("交配にはLv.${BigWolfConfig.breedMinLevel}以上のペットが2匹必要です", RED))
      return
    }

    // 交配選択状態を初期化
    breedSelections[player.uniqueId] = BreedSelection()

    val inv = breedingSystem.openBreedGui(player, breedablePets, breedGuiTitle)
    player.openInventory(inv)

    // BreedGuiListenerにpetsを通知
    breedGuiListener?.registerBreedGuiOpened(player, breedablePets)
  }

  /** 選択された親を取得 */
  fun getSelectedParents(player: Player): Pair<LivingEntity?, LivingEntity?> {
    val selection = breedSelections[player.uniqueId] ?: return Pair(null, null)
    return Pair(selection.parent1, selection.parent2)
  }

  /** 選択をクリア */
  fun clearSelection(player: Player) {
    breedSelections.remove(player.uniqueId)
  }

  /** 名前変更コマンドを処理 */
  fun handleRenameCommand(player: Player, args: Array<out String>) {
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
    val playerUuidStr = player.uniqueId.toString()
    val targetEntity: LivingEntity? =
        ActivePetRegistry.getByOwner(playerUuidStr).firstOrNull { entity ->
          entity.petId?.let { PetDataManager.getPetData(player.uniqueId, it) }?.petNumber ==
              petNumber
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
    targetEntity.world.spawnParticle(
        Particle.HEART, targetEntity.location.add(0.0, 1.0, 0.0), 10, 0.5, 0.5, 0.5)
  }
}

// ===== File: services/PetInteractionService.kt =====
/** ペットとプレイヤーの相互作用を管理するサービス スキル、パーティクル、餌やり、ブラシ、おやつなど */
class PetInteractionService(@Suppress("unused") private val plugin: JavaPlugin) {

  private val brushCooldowns = mutableMapOf<java.util.UUID, Long>()

  /** スキルアンロック処理 */
  fun handleSkillUnlock(
      player: Player,
      entity: LivingEntity,
      item: ItemStack,
      itemLevel: Int,
      consumeTokens: (Player, Int) -> Boolean
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
    val cost = BigWolfConfig.getSkillBookUseCost(itemLevel)

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
    sync(entity)

    entity.world.playSound(entity.location, Sound.UI_TOAST_CHALLENGE_COMPLETE, 1f, 1.2f)
    entity.world.spawnParticle(Particle.EXPLOSION_EMITTER, entity.location.add(0.0, 1.0, 0.0), 1)
    player.sendMessage(Component.text("おめでとうございます！新しいスキルがアンロックされました！ (-${cost}pt)", GREEN))
  }

  /** パーティクルアンロック処理 */
  fun handleParticleUnlock(player: Player, entity: LivingEntity, item: ItemStack) {
    val particleId = PetItemFactory.getParticleUnlockId(item)
    if (particleId !in 5..10) {
      player.sendMessage(Component.text("無効なパーティクルアイテムです。", RED))
      return
    }

    if (entity.isParticleUnlocked(particleId)) {
      player.sendMessage(Component.text("このパーティクルは既にアンロック済みです！", RED))
      return
    }

    entity.unlockParticle(particleId)
    item.amount -= 1

    val particleName = PetItemFactory.getParticleName(particleId)
    entity.world.playSound(entity.location, Sound.BLOCK_AMETHYST_BLOCK_CHIME, 1f, 1.5f)
    entity.world.spawnParticle(
        Particle.END_ROD, entity.location.add(0.0, 1.0, 0.0), 20, 0.5, 0.5, 0.5, 0.1)
    player.sendMessage(Component.text("パーティクル「$particleName」をアンロックしました！", LIGHT_PURPLE))
    sync(entity)
  }

  /** パーティクルをスポーンさせる */
  fun spawnParticles(entity: LivingEntity, particleType: Int) {
    if (particleType == 0) return // 0 = なし

    val particle =
        when (particleType) {
          1 -> Particle.ELECTRIC_SPARK // 電気
          2 -> Particle.FLAME // 炎
          3 -> Particle.SOUL_FIRE_FLAME // 青炎
          4 -> Particle.HEART // ハート
          5 -> Particle.END_ROD // 星
          6 -> Particle.NOTE // 音符
          7 -> Particle.SNOWFLAKE // 雪
          8 -> Particle.CHERRY_LEAVES // 桜
          9 -> Particle.PORTAL // エンド
          10 -> Particle.ITEM_SLIME // スライム
          else -> return
        }
    entity.world.spawnParticle(particle, entity.location, 5, 0.5, 0.2, 0.5, 0.0)
  }

  /** ペットに餌を与える（レベルアップ） */
  fun giveFood(player: Player, entity: LivingEntity, consumeTokens: (Player, Int) -> Boolean) {
    val level = entity.foodLevel
    if (level >= BigWolfConfig.maxFoodLevel) {
      return player.sendMessage(Component.text("既に最大レベルです！", RED))
    }

    // ポイント残高チェックと消費
    if (!consumeTokens(player, BigWolfConfig.foodPointCost)) {
      player.playSound(player.location, Sound.ENTITY_VILLAGER_NO, 1f, 1f)
      return
    }

    val newLevel = level + 1
    entity.foodLevel = newLevel

    val spec = PetRegistry.get(entity.type)
    updateStats(entity, newLevel, spec)

    // フードアイテムは消費しない（減らさない）
    entity.world.playSound(entity.location, Sound.ENTITY_GENERIC_EAT, 1f, 1f)
    entity.world.spawnParticle(Particle.HEART, entity.location.add(0.0, 1.0, 0.0), 5, 0.5, 0.5, 0.5)
    player.sendMessage(Component.text("成長しました！ (-${BigWolfConfig.foodPointCost}pt)", GOLD))
    sync(entity)
  }

  /** ペットのステータスを更新（スケールなど） */
  fun updateStats(entity: LivingEntity, level: Int, spec: PetSpec) {
    val progress = level.toDouble() / BigWolfConfig.maxFoodLevel
    val scale =
        spec.scaleRange.start + (spec.scaleRange.endInclusive - spec.scaleRange.start) * progress
    entity.getAttribute(Attribute.SCALE)?.baseValue = scale
  }

  /** オーナーの移行チェック（古いペットの互換性） */
  fun checkAndMigrateOwner(entity: LivingEntity, player: Player) {
    val plainName = entity.customName()?.let { PLAIN_TEXT.serialize(it) } ?: ""
    if (entity.ownerId == null && plainName.startsWithDefaultPetName(player.name)) {
      entity.ownerId = player.uniqueId.toString()
    }
  }

  /** プレイヤーがペットのオーナーかどうか */
  fun isOwner(entity: LivingEntity, player: Player) = entity.ownerId == player.uniqueId.toString()

  /** ブラシを使う（なでる） */
  fun useBrush(player: Player, entity: LivingEntity) {
    val now = System.currentTimeMillis()
    val lastBrush = brushCooldowns.getOrDefault(player.uniqueId, 0L)
    val cooldownMillis = 5000L // 5秒

    if (now - lastBrush < cooldownMillis) {
      player.sendActionBar(Component.text("撫ですぎです。", RED))
      player.playSound(player.location, Sound.BLOCK_NOTE_BLOCK_PLING, 0.5f, 0.8f)
      return
    }

    brushCooldowns[player.uniqueId] = now

    entity.statBrushes += 1
    entity.world.spawnParticle(Particle.HEART, entity.location.add(0.0, 1.0, 0.0), 6, 0.4, 0.4, 0.4)
    // 代替音を使用（ITEM_BRUSH_BRUSHING_GENERICは1.21.8では非推奨の可能性）
    entity.world.playSound(entity.location, Sound.ENTITY_CAT_PURR, 1f, 1.2f)
    player.sendMessage(Component.text("なでなで...", AQUA))

    // 遊びでレベルアップ
    tryPlayLevelUp(player, entity)
    sync(entity)
  }

  /** おやつを与える */
  fun giveTreat(player: Player, entity: LivingEntity) {
    val item = player.inventory.itemInMainHand
    if (item.amount > 0) {
      item.amount -= 1
    }
    entity.statTreats += 1
    // Heal the pet slightly, up to max
    val maxHealth = entity.getAttribute(Attribute.MAX_HEALTH)?.value ?: entity.health
    entity.health = (entity.health + 2.0).coerceAtMost(maxHealth)
    entity.world.spawnParticle(Particle.HEART, entity.location.add(0.0, 1.0, 0.0), 8, 0.5, 0.5, 0.5)
    entity.world.playSound(entity.location, Sound.ENTITY_GENERIC_EAT, 1f, 1.1f)
    player.sendMessage(Component.text("おやつをあげた！", GOLD))

    // 遊びでレベルアップ
    tryPlayLevelUp(player, entity)
    sync(entity)
  }

  fun healPet(player: Player, entity: LivingEntity) {
    val item = player.inventory.itemInMainHand
    if (item.amount > 0) {
      item.amount -= 1
    }
    val maxHealth = entity.getAttribute(Attribute.MAX_HEALTH)?.value ?: entity.health
    if (entity.health >= maxHealth) {
      player.sendMessage(Component.text("ペットの体力はすでに満タンです。", GRAY))
      return
    }
    entity.health =
        (entity.health + BigWolfConfig.healItemAmount.toDouble()).coerceAtMost(maxHealth)
    entity.world.spawnParticle(
        Particle.END_ROD, entity.location.add(0.0, 1.0, 0.0), 10, 0.5, 0.5, 0.5, 0.0)
    entity.world.playSound(entity.location, Sound.BLOCK_BREWING_STAND_BREW, 1f, 1.1f)
    player.sendMessage(Component.text("ペットの体力を回復しました！", AQUA))
    sync(entity)
  }

  /** 遊びでレベルアップ（確率判定） */
  fun tryPlayLevelUp(player: Player, entity: LivingEntity) {
    val currentLevel = entity.foodLevel
    val maxPlayLevel = BigWolfConfig.playLevelUpMaxLevel

    // 基本確率 + 非定型ボーナス
    val baseChance = BigWolfConfig.playLevelUpChance
    val multiplier = TemperamentHelper.getLevelUpMultiplier(entity.temperament)
    val chance = baseChance * multiplier

    // すでに遊びでの上限に達している場合はスキップ
    if (currentLevel >= maxPlayLevel) return

    // 確率判定
    if (Math.random() < chance) {
      entity.foodLevel = currentLevel + 1
      val spec = PetRegistry.get(entity.type)
      updateStats(entity, entity.foodLevel, spec)

      // 非定型の場合は特別なメッセージ
      val msg =
          if (entity.isAtypical()) {
            "★★ ペットのレベルが上がった！ (Lv.${entity.foodLevel}) [非定型ボーナス]"
          } else {
            "★ ペットのレベルが上がった！ (Lv.${entity.foodLevel})"
          }
      player.sendMessage(Component.text(msg, GREEN))
      player.playSound(player.location, Sound.ENTITY_PLAYER_LEVELUP, 1f, 1.5f)
      entity.world.spawnParticle(
          Particle.TOTEM_OF_UNDYING, entity.location.add(0.0, 1.0, 0.0), 20, 0.5, 0.5, 0.5, 0.1)
      sync(entity)
    }
  }

  /** プレイヤーのクールダウンデータを削除（ログアウト時） */
  fun cleanupPlayer(playerUuid: UUID) {
    brushCooldowns.remove(playerUuid)
  }

  private fun sync(entity: LivingEntity) {
    PetSynchronizer.syncEntityToJson(entity)
  }
}

// ===== File: services/PetQueryService.kt =====
/**
 * ペット情報のクエリ・表示を担当するサービス
 * - 死亡ペット一覧
 * - ペット履歴（ページネーション付き）
 * - ペット位置確認
 * - スポーンエッグ再取得
 */
class PetQueryService(
    private val economySystem: EconomySystem,
    private val storageService: PetStorageService
) {

  /** 死亡したペット一覧を表示 */
  fun handleDeadPetsList(player: Player) {
    val deadPets = PetDataManager.getDeadPets(player.uniqueId)

    if (deadPets.isEmpty()) {
      player.sendMessage(Component.text("死亡したペットはいません。", GRAY))
      return
    }

    player.sendMessage(Component.text("=== 死亡したペット一覧 ===", GOLD))
    player.sendMessage(Component.text("復活コスト: ${BigWolfConfig.reviveCost}pt", YELLOW))

    for (pet in deadPets.sortedBy { it.petNumber }) {
      val variantStr = pet.variant?.let { " ($it)" } ?: ""
      val plainName =
          pet.customName?.let {
            val component = LEGACY_AMP.deserialize(it)
            PLAIN_TEXT.serialize(component)
          }
      val nameStr = plainName?.let { " 「$it」" } ?: ""
      val deathTime = pet.deathData?.deathTime?.take(10) ?: "不明"
      val typeName =
          runCatching { EntityType.valueOf(pet.type) }
              .getOrNull()
              ?.let { MobTranslator.toJapanese(it) } ?: pet.type
      player.sendMessage(
          Component.text("#${pet.petNumber} ${typeName}$variantStr$nameStr - $deathTime 死亡", RED))
    }

    player.sendMessage(Component.text("/bigwolf revive <番号> で復活", GRAY))
  }

  /** ペット履歴をページネーション付きで表示 */
  fun handlePetHistory(player: Player, args: Array<out String>) {
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
      val typeName =
          runCatching { EntityType.valueOf(pet.type) }
              .getOrNull()
              ?.let { MobTranslator.toJapanese(it) } ?: pet.type
      player.sendMessage(
          Component.text("#${pet.petNumber} ${typeName}$variantStr$nameStr ", WHITE)
              .append(Component.text("[$statusStr]", statusColor))
              .hoverEvent(Component.text("クリックで詳細を表示"))
              .clickEvent(ClickEvent.runCommand("/bigwolf detail ${pet.petNumber}")))
    }

    // フッター（ページナビゲーション）
    if (totalPages > 1) {
      val navComponents = mutableListOf<Component>()

      if (page > 1) {
        val prevCommand =
            if (player.isOp && targetUuid != player.uniqueId) {
              "/bigwolf history $targetName ${page - 1}"
            } else {
              "/bigwolf history ${page - 1}"
            }
        navComponents.add(
            Component.text("« 前", GREEN)
                .hoverEvent(Component.text("ページ ${page - 1} へ"))
                .clickEvent(ClickEvent.runCommand(prevCommand)))
        navComponents.add(Component.text(" | ", GRAY))
      }

      navComponents.add(Component.text("$page/$totalPages", YELLOW))

      if (page < totalPages) {
        navComponents.add(Component.text(" | ", GRAY))
        val nextCommand =
            if (player.isOp && targetUuid != player.uniqueId) {
              "/bigwolf history $targetName ${page + 1}"
            } else {
              "/bigwolf history ${page + 1}"
            }
        navComponents.add(
            Component.text("次 »", GREEN)
                .hoverEvent(Component.text("ページ ${page + 1} へ"))
                .clickEvent(ClickEvent.runCommand(nextCommand)))
      }

      var navigation = Component.text("")
      for (comp in navComponents) {
        navigation = navigation.append(comp)
      }
      player.sendMessage(navigation)
    }
  }

  /** ペットの最終位置を確認 */
  fun handleLocatePet(player: Player, args: Array<out String>) {
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

    val variantStr = pet.variant?.let { " ($it)" } ?: ""
    val nameStr = pet.customName?.let { " 「$it」" } ?: ""
    val typeName =
        runCatching { EntityType.valueOf(pet.type) }
            .getOrNull()
            ?.let { MobTranslator.toJapanese(it) } ?: pet.type
    player.sendMessage(
        Component.text("=== ペット #${petNumber} ${typeName}$variantStr$nameStr ===", GOLD))

    // 召喚中のエンティティがあればリアルタイム位置を表示
    val liveEntity = ActivePetRegistry.findByPetId(pet.petId)
    if (liveEntity != null && liveEntity.isValid) {
      val eloc = liveEntity.location
      val worldName = eloc.world?.name ?: "?"
      player.sendMessage(
          Component.text(
              "現在位置: $worldName (${eloc.blockX}, ${eloc.blockY}, ${eloc.blockZ}) [召喚中]", GREEN))
      player.sendMessage(Component.text("ステータス: ${pet.status}", GRAY))
      return
    }

    val loc = pet.lastLocation
    if (loc == null) {
      player.sendMessage(Component.text("ペット #${petNumber} の位置情報がありません。", RED))
      return
    }
    player.sendMessage(
        Component.text(
            "最終位置: ${loc.world} (${loc.x.toInt()}, ${loc.y.toInt()}, ${loc.z.toInt()})", YELLOW))
    player.sendMessage(Component.text("ステータス: ${pet.status}", GRAY))
  }

  /** スポーンエッグ再取得コマンド */
  fun handleRecoverEgg(player: Player, args: Array<out String>) {
    if (args.size < 2) {
      player.sendMessage(Component.text("使い方: /bigwolf recover <ペット番号>", RED))
      player.sendMessage(
          Component.text("収納中のペットのスポーンエッグを再取得します (${BigWolfConfig.recoverCost}pt)", GRAY))
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
    val item =
        storageService.createRecoveredStoredPetItem(petData, type, player.uniqueId.toString())

    val leftovers = player.inventory.addItem(item)
    if (leftovers.isNotEmpty()) {
      leftovers.values.forEach { player.world.dropItem(player.location, it) }
      player.sendMessage(Component.text("インベントリがいっぱいのため足元にドロップしました。", YELLOW))
    }

    player.playSound(player.location, Sound.ENTITY_ITEM_PICKUP, 1f, 1f)
    player.sendMessage(Component.text("ペット #${petNumber} のスポーンエッグを再取得しました！ (-${cost}pt)", GREEN))
  }

  /** ペット詳細情報を表示 */
  fun handlePetDetail(player: Player, args: Array<out String>) {
    if (args.size < 2) {
      player.sendMessage(Component.text("使い方: /bigwolf detail <ペット番号>", RED))
      return
    }
    val petNumber = args[1].toIntOrNull()
    if (petNumber == null) {
      player.sendMessage(Component.text("ペット番号は数字で指定してください。", RED))
      return
    }

    // OPの場合はプレイヤー名でターゲット指定可能（/bigwolf detail <番号> <プレイヤー名>）
    val targetUuid =
        if (player.isOp && args.size >= 3) {
          Bukkit.getOfflinePlayer(args[2]).uniqueId
        } else {
          player.uniqueId
        }

    val pet = PetDataManager.getAllPets(targetUuid).find { it.petNumber == petNumber }
    if (pet == null) {
      player.sendMessage(Component.text("ペット番号 $petNumber が見つかりません。", RED))
      return
    }

    val typeName =
        runCatching { EntityType.valueOf(pet.type) }
            .getOrNull()
            ?.let { MobTranslator.toJapanese(it) } ?: pet.type
    val variantStr = pet.variant?.let { " ($it)" } ?: ""
    val plainName = pet.customName?.let { PLAIN_TEXT.serialize(LEGACY_AMP.deserialize(it)) }

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

    // ヘッダー
    player.sendMessage(
        Component.text("=== ペット詳細 #${pet.petNumber} $typeName$variantStr ===", GOLD))

    // 基本情報
    if (plainName != null) {
      player.sendMessage(Component.text("名前: 「$plainName」", WHITE))
    }
    player.sendMessage(Component.text("状態: ", GRAY).append(Component.text("[$statusStr]", statusColor)))
    player.sendMessage(Component.text("種族: $typeName$variantStr", WHITE))
    player.sendMessage(Component.text("レベル: ${pet.foodLevel} / ${BigWolfConfig.maxFoodLevel}", GREEN))
    player.sendMessage(
        Component.text("スキル: Lv.${pet.skillType} (解放済み: Lv.${pet.skillUnlockedLevel})", AQUA))
    player.sendMessage(Component.text("購入日: ${pet.purchasedAt.take(10)}", GRAY))

    // 記録
    player.sendMessage(Component.text("--- 記録 ---", DARK_AQUA))
    player.sendMessage(Component.text("  移動距離: ${"%.1f".format(pet.stats.distance)} m", GRAY))
    player.sendMessage(Component.text("  ジャンプ: ${pet.stats.jumps} 回", GRAY))
    player.sendMessage(Component.text("  おもちゃ: ${pet.stats.toys} 回", GRAY))
    player.sendMessage(Component.text("  なでた: ${pet.stats.brushes} 回", GRAY))
    player.sendMessage(Component.text("  おやつ: ${pet.stats.treats} 回", GRAY))

    // 交配情報
    val breedInfo = pet.breedInfo
    if (breedInfo != null || pet.breedCount > 0) {
      player.sendMessage(Component.text("--- 交配 ---", DARK_AQUA))
      if (breedInfo != null) {
        player.sendMessage(Component.text("  世代: 第${breedInfo.generation}世代", AQUA))
        val allPets = PetDataManager.getAllPets(targetUuid)
        val p1Str =
            allPets.find { it.petId == breedInfo.parent1Id }?.let { "#${it.petNumber}" }
                ?: breedInfo.parent1Id.take(8)
        val p2Str =
            allPets.find { it.petId == breedInfo.parent2Id }?.let { "#${it.petNumber}" }
                ?: breedInfo.parent2Id.take(8)
        player.sendMessage(Component.text("  親: $p1Str × $p2Str", GRAY))
      }
      if (pet.breedCount > 0) {
        player.sendMessage(Component.text("  交配回数: ${pet.breedCount} 回", GRAY))
      }
    }

    // 譲渡履歴
    if (pet.transferHistory.isNotEmpty()) {
      player.sendMessage(Component.text("--- 譲渡履歴 ---", DARK_AQUA))
      for (record in pet.transferHistory) {
        val fromName =
            runCatching { Bukkit.getOfflinePlayer(UUID.fromString(record.fromOwner)).name }
                .getOrNull() ?: record.fromOwner.take(8)
        val toName =
            runCatching { Bukkit.getOfflinePlayer(UUID.fromString(record.toOwner)).name }
                .getOrNull() ?: record.toOwner.take(8)
        player.sendMessage(
            Component.text("  ${record.timestamp.take(10)}: $fromName → $toName", GRAY))
      }
    }

    // 死亡情報
    val deathData = pet.deathData
    if (deathData != null) {
      player.sendMessage(Component.text("--- 死亡情報 ---", DARK_AQUA))
      player.sendMessage(Component.text("  死亡日時: ${deathData.deathTime.take(16)}", GRAY))
      val loc = deathData.location
      player.sendMessage(
          Component.text(
              "  場所: ${loc.world} (${loc.x.toInt()}, ${loc.y.toInt()}, ${loc.z.toInt()})",
              GRAY))
    }

    // 最終位置（生存・収納中のみ）
    val lastLoc = pet.lastLocation
    if (pet.status != PetStatus.DEAD && lastLoc != null) {
      player.sendMessage(Component.text("--- 最終位置 ---", DARK_AQUA))
      player.sendMessage(
          Component.text(
              "  ${lastLoc.world} (${lastLoc.x.toInt()}, ${lastLoc.y.toInt()}, ${lastLoc.z.toInt()})",
              GRAY))
    }

    // アクションボタン
    player.sendMessage(Component.empty())
    when (pet.status) {
      PetStatus.DEAD ->
          player.sendMessage(
              Component.text("[▶ 復活する (${BigWolfConfig.reviveCost}pt)]", GREEN)
                  .hoverEvent(
                      Component.text("/bigwolf revive ${pet.petNumber} を実行します"))
                  .clickEvent(ClickEvent.runCommand("/bigwolf revive ${pet.petNumber}")))
      PetStatus.ALIVE, PetStatus.STORED ->
          player.sendMessage(
              Component.text("[▶ 放棄する]", RED)
                  .hoverEvent(
                      Component.text("/bigwolf abandon ${pet.petNumber} を入力欄に挿入します"))
                  .clickEvent(ClickEvent.suggestCommand("/bigwolf abandon ${pet.petNumber}")))
    }
  }
}

// ===== File: services/PetReviveService.kt =====
/**
 * ペット復活を担当するサービス
 * - 死亡ペットの復活処理
 * - 降臨演出
 */
class PetReviveService(
    private val plugin: JavaPlugin,
    private val economySystem: EconomySystem,
    private val countActivePets: (Player) -> Int,
    private val setupPetEntity: (LivingEntity, PetSpec, Player) -> Unit,
    private val interactionService: PetInteractionService,
    private val onPetSpawned: (LivingEntity) -> Unit = {}
) {

  /** ペットを復活させる */
  fun handleRevivePet(player: Player, args: Array<out String>) {
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
    if (!economySystem.consumeTokens(player, cost)) {
      return
    }

    // ペットを復活（上空からの降臨演出）
    val type = runCatching { EntityType.valueOf(petData.type) }.getOrNull() ?: EntityType.WOLF
    val spec = PetRegistry.get(type)

    val safeGround = SpawnUtils.findSafeGroundLocation(player.location.clone())
    if (safeGround == null) {
      player.sendMessage(Component.text("この場所ではペットを復活できません（足場と空間が必要です）。", RED))
      return
    }

    // 上空10ブロックからスタート
    val spawnLoc = safeGround.clone().add(0.0, 10.0, 0.0)

    val entity = player.world.spawnEntity(spawnLoc, type) as? LivingEntity
    if (entity == null) {
      player.sendMessage(Component.text("この場所ではペットを復活できません。", RED))
      return
    }

    // petIdとownerIdを先に設定（ActivePetRegistry登録・名前生成に必要）
    entity.ownerId = player.uniqueId.toString()
    entity.petId = petData.petId

    // バリアントを先に適用（setupPetEntityでバリアント名取得に必要）
    petData.variant?.let { VariantHandler.applyVariant(entity, it) }

    setupPetEntity(entity, spec, player)

    // ChildAISystemに登録（petId/ownerId設定後に実行）
    onPetSpawned(entity)

    // データ復元
    if (petData.customName != null) {
      // デフォルト名に古い番号が埋め込まれている場合、正しいpetNumberで修正して保存
      val rawName = petData.customName!!
      val corrected = rawName.replace(Regex(""" #\d+$"""), " #${petData.petNumber}")
      if (corrected != rawName) {
        petData.customName = corrected
        PetDataManager.savePet(player.uniqueId, petData)
      }
      entity.customName(LEGACY_AMP.deserialize(corrected))
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
    entity.particleUnlocked = petData.particleUnlocked
    entity.speedMultiplier = petData.speedMultiplier
    entity.jumpMultiplier = petData.jumpMultiplier
    entity.particleType = petData.particleType
    entity.isHovering = petData.isHovering
    entity.temperament = petData.temperament
    entity.generation = petData.breedInfo?.generation ?: 1
    entity.parent1Id = petData.breedInfo?.parent1Id
    entity.parent2Id = petData.breedInfo?.parent2Id
    entity.breedCount = petData.breedCount
    entity.transferCount = petData.transferHistory.size
    entity.originalOwnerId = petData.originalOwner

    interactionService.updateStats(entity, petData.foodLevel, spec)

    // ステータス更新
    PetDataManager.markAsRevived(player.uniqueId, petData.petId)

    // ★ 上空から降りてくる演出
    player.playSound(player.location, Sound.ENTITY_PLAYER_LEVELUP, 1f, 1.2f)
    player.sendMessage(Component.text("ペット #${petNumber} を復活させました！ (-${cost}pt)", GREEN))

    // 降臨演出タスク
    startDescentAnimation(entity, safeGround)
  }

  /** 降臨演出タスク（テレポートで段階的に降下） */
  private fun startDescentAnimation(entity: LivingEntity, safeGround: Location) {
    val targetY = safeGround.y + 0.5 // 着地点
    val spawnY = entity.location.y

    object : BukkitRunnable() {
          var currentY = spawnY

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

              val newLoc = safeGround.clone()
              newLoc.y = currentY
              newLoc.yaw = entity.location.yaw
              newLoc.pitch = entity.location.pitch
              entity.teleport(newLoc)
              entity.fallDistance = 0f // 落下ダメージ防止
            } else {
              // 着地完了
              val finalLoc = safeGround.clone()
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
        .runTaskTimer(plugin, 0L, 1L)
  }
}

// ===== File: services/PetShopGuiService.kt =====
/** ペット購入GUIを管理するサービス */
class PetShopGuiService(
    private val openShopGui: (Player, ShopContext, (Player) -> Long) -> Unit,
    private val getPlayerTokens: (Player) -> Long
) {

  /** メイン購入GUI（全ペット種類一覧）を開く */
  fun openMainShopGui(player: Player) {
    val officialPets = PetRegistry.officialPets.sortedBy { it.name }

    // ペット数に応じて必要な行数を計算（+1行: コントロール行）
    val petRows = (officialPets.size + 8) / 9
    val invSize = minOf(54, (petRows + 1) * 9)
    val controlRowStart = invSize - 9

    val inv = Bukkit.createInventory(null, invSize, Component.text("★ ペットショップ", DARK_PURPLE))

    val maxPetSlots = invSize - 9
    officialPets.forEachIndexed { index, type ->
      if (index >= maxPetSlots) return@forEachIndexed

      val eggMat = Material.getMaterial("${type.name}_SPAWN_EGG") ?: Material.PIG_SPAWN_EGG
      val japName = MobTranslator.toJapanese(type)

      // バリアントがあるか確認
      val variants = VariantHandler.getVariantNames(type)

      val item =
          ItemStack(eggMat).apply {
            itemMeta =
                itemMeta?.apply {
                  displayName(Component.text(japName, YELLOW))

                  val loreList = mutableListOf<Component>()
                  loreList.add(Component.text("価格: ${BigWolfConfig.defaultShopCost}pt", GOLD))

                  if (variants.isNotEmpty()) {
                    loreList.add(Component.text("バリアント: ${variants.size}種類", AQUA))
                    loreList.add(Component.text("クリックでバリアント選択", GREEN))
                  } else {
                    loreList.add(Component.text("クリックで購入", GREEN))
                  }

                  lore(loreList)
                }
          }

      inv.setItem(index, item)
    }

    // コントロール行: 戻るボタン + アイテムショップ + 情報
    val backItem =
        ItemStack(Material.ARROW).apply {
          itemMeta =
              itemMeta?.apply {
                displayName(Component.text("← メインメニューへ", WHITE))
                lore(listOf(Component.text("メインメニューに戻る", GRAY)))
              }
        }
    inv.setItem(controlRowStart, backItem)

    val itemShopButton =
        ItemStack(Material.CHEST).apply {
          itemMeta =
              itemMeta?.apply {
                displayName(Component.text("★ アイテムショップ", GOLD))
                lore(
                    listOf(
                        Component.text("ケア用品・スキルブック", GRAY),
                        Component.text("パーティクル・おもちゃを購入", GRAY),
                        Component.text("クリックで開く", GREEN)))
              }
        }
    inv.setItem(controlRowStart + 2, itemShopButton)

    val infoItem =
        ItemStack(Material.EMERALD).apply {
          itemMeta =
              itemMeta?.apply {
                displayName(Component.text("あなたの所持ポイント", GOLD))
                lore(
                    listOf(
                        Component.text("${getPlayerTokens(player)}pt", GREEN),
                        Component.text("", GRAY),
                        Component.text("ペットをクリックして購入！", YELLOW)))
              }
        }
    inv.setItem(controlRowStart + 4, infoItem)

    player.openInventory(inv)
  }

  /** バリアント選択GUI（特定ペットのバリアント一覧）を開く */
  fun openVariantSelectionGui(player: Player, type: EntityType) {
    val variants = VariantHandler.getVariantNames(type)

    if (variants.isEmpty()) {
      // バリアントがない場合は直接購入画面へ
      openShopGui(player, ShopContext(type, null, BigWolfConfig.defaultShopCost), getPlayerTokens)
      return
    }

    val size = ((variants.size + 8) / 9) * 9 // 9の倍数に切り上げ
    val invSize = minOf(54, maxOf(27, size + 9)) // 最小27、最大54
    val japName = MobTranslator.toJapanese(type)
    val inv =
        Bukkit.createInventory(null, invSize, Component.text("$japName のバリアント選択", DARK_PURPLE))

    val eggMat = Material.getMaterial("${type.name}_SPAWN_EGG") ?: Material.PIG_SPAWN_EGG

    variants.forEachIndexed { index: Int, variant: String ->
      if (index >= 45) return@forEachIndexed

      val variantJap = MobTranslator.translateVariant(variant)
      val item =
          ItemStack(eggMat).apply {
            itemMeta =
                itemMeta?.apply {
                  displayName(Component.text("$japName ($variantJap)", YELLOW))
                  lore(
                      listOf(
                          Component.text("バリアント: $variant", GRAY),
                          Component.text("価格: ${BigWolfConfig.defaultShopCost}pt", GOLD),
                          Component.text("", GRAY),
                          Component.text("クリックで購入", GREEN)))
                }
          }

      inv.setItem(index, item)
    }

    // デフォルト（バリアントなし）オプション
    val defaultItem =
        ItemStack(eggMat).apply {
          itemMeta =
              itemMeta?.apply {
                displayName(Component.text("$japName (デフォルト)", YELLOW))
                lore(
                    listOf(
                        Component.text("価格: ${BigWolfConfig.defaultShopCost}pt", GOLD),
                        Component.text("", GRAY),
                        Component.text("クリックで購入", GREEN)))
              }
        }
    inv.setItem(invSize - 3, defaultItem)

    // 戻るボタン（左端）
    val backItem =
        ItemStack(Material.ARROW).apply {
          itemMeta = itemMeta?.apply { displayName(Component.text("戻る", RED)) }
        }
    inv.setItem(invSize - 9, backItem)

    // 所持ポイント表示（中央下）
    val pointsItem =
        ItemStack(Material.EMERALD).apply {
          itemMeta =
              itemMeta?.apply {
                displayName(Component.text("所持ポイント: ${getPlayerTokens(player)}pt", GOLD))
              }
        }
    inv.setItem(invSize - 5, pointsItem)

    player.openInventory(inv)
  }

  /** 直接購入確認画面を開く（コマンドから直接呼び出し用） */
  fun openPurchaseConfirmation(player: Player, type: EntityType, variant: String?) {
    openShopGui(player, ShopContext(type, variant, BigWolfConfig.defaultShopCost), getPlayerTokens)
  }

  // ===== アイテムショップ =====

  val itemShopTitle = Component.text("★ アイテムショップ", DARK_PURPLE)
  val careShopTitle = Component.text("ケア用品ショップ", DARK_GREEN)
  val skillShopTitle = Component.text("スキルブックショップ", DARK_AQUA)
  val particleShopTitle = Component.text("パーティクルショップ", LIGHT_PURPLE)
  val toyShopTitle = Component.text("おもちゃショップ", GOLD)

  /** アイテムショップ カテゴリ選択GUI */
  fun openItemShopGui(player: Player) {
    val inv = Bukkit.createInventory(null, 27, itemShopTitle)

    // スロット10: ケア用品
    inv.setItem(
        10,
        ItemStack(Material.GOLDEN_APPLE).apply {
          itemMeta =
              itemMeta?.apply {
                displayName(Component.text("ケア用品", GREEN))
                lore(
                    listOf(
                        Component.text("ペットフード / ブラシ", GRAY),
                        Component.text("おやつ / ヒールポーション", GRAY),
                        Component.text("クリックで開く", GREEN)))
              }
        })

    // スロット12: スキルブック
    inv.setItem(
        12,
        ItemStack(Material.ENCHANTED_BOOK).apply {
          itemMeta =
              itemMeta?.apply {
                displayName(Component.text("スキルブック", AQUA))
                lore(
                    listOf(
                        Component.text("咆哮の書 / 突進の書 / 極意の書", GRAY),
                        Component.text("クリックで開く", GREEN)))
              }
        })

    // スロット14: パーティクル
    inv.setItem(
        14,
        ItemStack(Material.NETHER_STAR).apply {
          itemMeta =
              itemMeta?.apply {
                displayName(Component.text("パーティクル結晶", LIGHT_PURPLE))
                lore(
                    listOf(
                        Component.text("特殊エフェクトをアンロック", GRAY),
                        Component.text("クリックで開く", GREEN)))
              }
        })

    // スロット16: おもちゃ
    inv.setItem(
        16,
        ItemStack(Material.STICK).apply {
          itemMeta =
              itemMeta?.apply {
                displayName(Component.text("おもちゃ", YELLOW))
                lore(
                    listOf(
                        Component.text("各種ペット用おもちゃ", GRAY),
                        Component.text("クリックで開く", GREEN)))
              }
        })

    // スロット18: ペットショップへ戻る
    inv.setItem(
        18,
        ItemStack(Material.ARROW).apply {
          itemMeta =
              itemMeta?.apply {
                displayName(Component.text("← ペットショップへ戻る", WHITE))
                lore(listOf(Component.text("クリックで戻る", GRAY)))
              }
        })

    // スロット22: 所持ポイント
    inv.setItem(
        22,
        ItemStack(Material.EMERALD).apply {
          itemMeta =
              itemMeta?.apply {
                displayName(Component.text("所持ポイント: ${getPlayerTokens(player)}pt", GOLD))
              }
        })

    player.openInventory(inv)
  }

  /** ケア用品ショップ (18-slot) */
  fun openCareShopGui(player: Player) {
    val inv = Bukkit.createInventory(null, 18, careShopTitle)

    data class CareItem(val slot: Int, val item: ItemStack, val cost: Int)
    listOf(
            CareItem(1, PetItemFactory.createPetFoodItem(), BigWolfConfig.itemShopPetFoodCost),
            CareItem(3, PetItemFactory.createPetBrushItem(), BigWolfConfig.itemShopPetBrushCost),
            CareItem(5, PetItemFactory.createPetTreatItem(), BigWolfConfig.itemShopPetTreatCost),
            CareItem(7, PetItemFactory.createPetHealItem(), BigWolfConfig.itemShopHealPotionCost))
        .forEach { ci ->
          val meta = ci.item.itemMeta ?: return@forEach
          val currentLore = meta.lore() ?: mutableListOf()
          meta.lore(
              currentLore +
                  listOf(
                      Component.text("価格: ${ci.cost}pt", GOLD),
                      Component.text("クリックで購入", GREEN)))
          ci.item.itemMeta = meta
          inv.setItem(ci.slot, ci.item)
        }

    inv.setItem(
        9,
        ItemStack(Material.ARROW).apply {
          itemMeta =
              itemMeta?.apply {
                displayName(Component.text("← アイテムショップへ戻る", WHITE))
              }
        })
    inv.setItem(
        13,
        ItemStack(Material.EMERALD).apply {
          itemMeta =
              itemMeta?.apply {
                displayName(Component.text("所持ポイント: ${getPlayerTokens(player)}pt", GOLD))
              }
        })

    player.openInventory(inv)
  }

  /** スキルブックショップ (18-slot) */
  fun openSkillShopGui(player: Player) {
    val inv = Bukkit.createInventory(null, 18, skillShopTitle)

    listOf(1, 2, 3).forEach { level ->
      val item = PetItemFactory.createSkillUnlockItem(level)
      val cost = BigWolfConfig.getSkillBookShopCost(level)
      val meta = item.itemMeta ?: return@forEach
      val currentLore = meta.lore() ?: mutableListOf()
      meta.lore(
          currentLore + listOf(Component.text("価格: ${cost}pt", GOLD), Component.text("クリックで購入", GREEN)))
      item.itemMeta = meta
      val slot = (level - 1) * 2 + 2  // 2, 4, 6
      inv.setItem(slot, item)
    }

    inv.setItem(
        9,
        ItemStack(Material.ARROW).apply {
          itemMeta =
              itemMeta?.apply {
                displayName(Component.text("← アイテムショップへ戻る", WHITE))
              }
        })
    inv.setItem(
        13,
        ItemStack(Material.EMERALD).apply {
          itemMeta =
              itemMeta?.apply {
                displayName(Component.text("所持ポイント: ${getPlayerTokens(player)}pt", GOLD))
              }
        })

    player.openInventory(inv)
  }

  /** パーティクルショップ (18-slot, ID 5-10) */
  fun openParticleShopGui(player: Player) {
    val inv = Bukkit.createInventory(null, 18, particleShopTitle)
    val cost = BigWolfConfig.itemShopParticleCost

    (5..10).forEachIndexed { idx, particleId ->
      val item = PetItemFactory.createParticleUnlockItem(particleId)
      val meta = item.itemMeta ?: return@forEachIndexed
      val currentLore = meta.lore() ?: mutableListOf()
      meta.lore(
          currentLore +
              listOf(Component.text("価格: ${cost}pt", GOLD), Component.text("クリックで購入", GREEN)))
      item.itemMeta = meta
      inv.setItem(idx + 1, item)
    }

    inv.setItem(
        9,
        ItemStack(Material.ARROW).apply {
          itemMeta =
              itemMeta?.apply {
                displayName(Component.text("← アイテムショップへ戻る", WHITE))
              }
        })
    inv.setItem(
        13,
        ItemStack(Material.EMERALD).apply {
          itemMeta =
              itemMeta?.apply {
                displayName(Component.text("所持ポイント: ${getPlayerTokens(player)}pt", GOLD))
              }
        })

    player.openInventory(inv)
  }

  /** おもちゃショップ (動的サイズ) */
  fun openToyShopGui(player: Player) {
    val toyItems = PetRegistry.getAllToyItems()
    val cost = BigWolfConfig.itemShopToyCost

    val rows = maxOf(2, (toyItems.size + 8) / 9 + 1)
    val invSize = minOf(54, rows * 9)
    val controlRowStart = invSize - 9

    val inv = Bukkit.createInventory(null, invSize, toyShopTitle)

    toyItems.forEachIndexed { idx, item ->
      if (idx >= controlRowStart) return@forEachIndexed
      val meta = item.itemMeta ?: return@forEachIndexed
      val currentLore = meta.lore() ?: mutableListOf()
      meta.lore(
          currentLore +
              listOf(Component.text("価格: ${cost}pt", GOLD), Component.text("クリックで購入", GREEN)))
      item.itemMeta = meta
      inv.setItem(idx, item)
    }

    inv.setItem(
        controlRowStart,
        ItemStack(Material.ARROW).apply {
          itemMeta =
              itemMeta?.apply {
                displayName(Component.text("← アイテムショップへ戻る", WHITE))
              }
        })
    inv.setItem(
        controlRowStart + 4,
        ItemStack(Material.EMERALD).apply {
          itemMeta =
              itemMeta?.apply {
                displayName(Component.text("所持ポイント: ${getPlayerTokens(player)}pt", GOLD))
              }
        })

    player.openInventory(inv)
  }
}

// ===== File: services/PetStorageService.kt =====
/** ペットの収納と復元を管理するサービス ペットをアイテムに変換して保存、復元する機能を提供 */
class PetStorageService(@Suppress("unused") private val plugin: JavaPlugin) {

  private val KEY_STORED_STAT_BRUSHES = NamespacedKey(plugin, "stored_stat_brushes")
  private val KEY_STORED_STAT_TREATS = NamespacedKey(plugin, "stored_stat_treats")

  /** エンティティから収納アイテムを作成 */
  fun createStoredPetItem(entity: LivingEntity): ItemStack {
    val matName = "${entity.type.name}_SPAWN_EGG"
    val mat = Material.getMaterial(matName) ?: Material.PIG_SPAWN_EGG
    val item = ItemStack(mat)
    val meta = item.itemMeta

    val pdc = meta.persistentDataContainer
    pdc.set(BigWolfKeys.STORED_FLAG, PersistentDataType.BYTE, 1)
    pdc.set(BigWolfKeys.STORED_TYPE, PersistentDataType.STRING, entity.type.name)

    val pid = entity.petId ?: UUID.randomUUID().toString()
    pdc.set(BigWolfKeys.STORED_ID, PersistentDataType.STRING, pid)

    // オーナーUUIDを保存（譲渡防止）
    val ownerId = entity.ownerId
    if (ownerId != null) {
      pdc.set(BigWolfKeys.STORED_OWNER, PersistentDataType.STRING, ownerId)
    }

    val currentName = entity.customName() ?: Component.text(entity.type.name)
    val nameStr = LEGACY_AMP.serialize(currentName)
    pdc.set(BigWolfKeys.STORED_NAME, PersistentDataType.STRING, nameStr)

    pdc.set(BigWolfKeys.FOOD, PersistentDataType.INTEGER, entity.foodLevel)
    pdc.set(BigWolfKeys.PARTICLE, PersistentDataType.INTEGER, entity.particleType)
    pdc.set(BigWolfKeys.STORED_SKILL, PersistentDataType.INTEGER, entity.skillType)
    pdc.set(BigWolfKeys.STORED_UNLOCKED, PersistentDataType.INTEGER, entity.skillUnlockedLevel)
    pdc.set(BigWolfKeys.STORED_HOVER, PersistentDataType.BYTE, if (entity.isHovering) 1 else 0)

    // 遊んだ記録を収納アイテムに保存
    pdc.set(BigWolfKeys.STORED_STAT_DISTANCE, PersistentDataType.DOUBLE, entity.statDistance)
    pdc.set(BigWolfKeys.STORED_STAT_JUMPS, PersistentDataType.INTEGER, entity.statJumps)
    pdc.set(BigWolfKeys.STORED_STAT_TOYS, PersistentDataType.INTEGER, entity.statToys)
    pdc.set(KEY_STORED_STAT_BRUSHES, PersistentDataType.INTEGER, entity.statBrushes)
    pdc.set(KEY_STORED_STAT_TREATS, PersistentDataType.INTEGER, entity.statTreats)

    // v2データを保存（交配、譲渡、パーティクル）
    pdc.set(BigWolfKeys.STORED_PCD_VERSION, PersistentDataType.INTEGER, entity.pcdVersion)
    entity.originalOwnerId?.let {
      pdc.set(BigWolfKeys.STORED_ORIGINAL_OWNER, PersistentDataType.STRING, it)
    }
    pdc.set(BigWolfKeys.STORED_TRANSFER_COUNT, PersistentDataType.INTEGER, entity.transferCount)
    pdc.set(BigWolfKeys.STORED_BREED_COUNT, PersistentDataType.INTEGER, entity.breedCount)
    pdc.set(BigWolfKeys.STORED_GENERATION, PersistentDataType.INTEGER, entity.generation)
    entity.parent1Id?.let { pdc.set(BigWolfKeys.STORED_PARENT_1, PersistentDataType.STRING, it) }
    entity.parent2Id?.let { pdc.set(BigWolfKeys.STORED_PARENT_2, PersistentDataType.STRING, it) }
    pdc.set(
        BigWolfKeys.STORED_PARTICLE_UNLOCKED, PersistentDataType.STRING, entity.particleUnlocked)
    pdc.set(BigWolfKeys.STORED_SPEED_MULTIPLIER, PersistentDataType.DOUBLE, entity.speedMultiplier)
    pdc.set(BigWolfKeys.STORED_JUMP_MULTIPLIER, PersistentDataType.DOUBLE, entity.jumpMultiplier)

    // v3: 性質を保存
    pdc.set(BigWolfKeys.STORED_TEMPERAMENT, PersistentDataType.STRING, entity.temperament)

    val variantName = VariantHandler.getVariantNameFromEntity(entity)
    if (variantName != null) {
      pdc.set(BigWolfKeys.STORED_VARIANT, PersistentDataType.STRING, variantName)
    }

    // オーナー名を取得してLoreに表示
    val ownerName = ownerId?.let { Bukkit.getOfflinePlayer(UUID.fromString(it)).name } ?: "Unknown"

    // 性質の表示名を取得
    val temperamentDisplay = TemperamentHelper.getDisplayName(entity.temperament)

    meta.displayName(Component.text("収納された: ", GOLD).append(currentName))
    meta.lore(
        listOf(
            Component.text("右クリックで解放", GRAY),
            Component.text("オーナー: $ownerName", AQUA),
            Component.text(
                "性質: $temperamentDisplay", if (entity.isAtypical()) LIGHT_PURPLE else GRAY),
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

    // PetDataManagerに収納状態を記録
    ownerId?.let { runCatching { UUID.fromString(it) }.getOrNull() }
        ?.let { PetDataManager.markAsStored(it, pid, entity) }

    return item
  }

  /** ペットをアイテムに収納 */
  fun storePetToItem(player: Player, entity: LivingEntity) {
    if (player.inventory.firstEmpty() == -1) {
      return player.sendMessage(Component.text("インベントリがいっぱいです！", RED))
    }

    val item = createStoredPetItem(entity)

    player.inventory.addItem(item)
    ActivePetRegistry.unregister(entity.uniqueId)
    entity.remove()
    player.playSound(player.location, Sound.ENTITY_ENDERMAN_TELEPORT, 1f, 1f)
    player.sendMessage(Component.text("ペットをアイテムに収納しました！", GREEN))
  }

  /** すべてのペットを収納 */
  fun storeAllPets(player: Player) {
    val targetId = player.uniqueId.toString()
    var count = 0
    val itemsToGive = mutableListOf<ItemStack>()

    for (entity in ActivePetRegistry.getByOwner(targetId)) {
      val item = createStoredPetItem(entity)
      itemsToGive.add(item)
      entity.world.spawnParticle(Particle.POOF, entity.location, 10, 0.5, 0.5, 0.5, 0.0)
      ActivePetRegistry.unregister(entity.uniqueId)
      entity.remove()
      count++
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

  /** アイテムからペットを復元 */
  fun restorePetFromItem(
      player: Player,
      item: ItemStack,
      loc: Location,
      countActivePets: (Player) -> Int,
      setupPetEntity: (LivingEntity, PetSpec, Player) -> Unit,
      updateStats: (LivingEntity, Int, PetSpec) -> Unit,
      onPetSpawned: (LivingEntity) -> Unit = {}
  ) {
    if (countActivePets(player) >= BigWolfConfig.MAX_PET_COUNT) {
      player.sendMessage(Component.text("ペットは同時に${BigWolfConfig.MAX_PET_COUNT}匹までしか召喚できません！", RED))
      return
    }

    val meta = item.itemMeta
    val pdc = meta.persistentDataContainer

    // オーナーチェック（譲渡防止）
    val storedOwner = pdc.get(BigWolfKeys.STORED_OWNER, PersistentDataType.STRING)
    if (storedOwner != null && storedOwner != player.uniqueId.toString()) {
      val ownerName =
          runCatching { Bukkit.getOfflinePlayer(UUID.fromString(storedOwner)).name }.getOrNull()
              ?: "Unknown"
      player.sendMessage(Component.text("このペットはあなたのものではありません！(オーナー: $ownerName)", RED))
      return
    }

    val storedId = pdc.get(BigWolfKeys.STORED_ID, PersistentDataType.STRING)
    if (storedId != null && ActivePetRegistry.findByPetId(storedId) != null) {
      player.sendMessage(Component.text("このペットは既に召喚されています！(コピー禁止)", RED))
      return
    }

    val typeStr = pdc.get(BigWolfKeys.STORED_TYPE, PersistentDataType.STRING) ?: "WOLF"
    val type = runCatching { EntityType.valueOf(typeStr) }.getOrNull() ?: EntityType.WOLF
    val spec = PetRegistry.get(type)

    // 通常のスポーンエッグと同じ挙動: クリック位置にそのままスポーン
    val spawnLoc = SpawnUtils.findSafeSpawnLocation(loc)

    val entity = player.world.spawnEntity(spawnLoc, type) as? LivingEntity

    if (entity == null || !entity.isValid) {
      player.sendMessage(Component.text("この場所ではペットを解放できません（保護されています）。", RED))
      return
    }

    // petIdとownerIdを先に設定（ActivePetRegistry登録・名前生成に必要）
    entity.petId = storedId ?: UUID.randomUUID().toString()
    entity.ownerId = player.uniqueId.toString()

    // バリアントを先に適用（setupPetEntityでバリアント名取得に必要）
    val variantStr = pdc.get(BigWolfKeys.STORED_VARIANT, PersistentDataType.STRING)
    if (variantStr != null) {
      VariantHandler.applyVariant(entity, variantStr)
    }

    setupPetEntity(entity, spec, player)

    // ChildAISystemに登録（petId/ownerId設定後に実行）
    onPetSpawned(entity)

    // カスタム名が保存されている場合のみ上書き（ユーザーが名前変更していた場合）
    val nameStr = pdc.get(BigWolfKeys.STORED_NAME, PersistentDataType.STRING)
    if (nameStr != null && !nameStr.contains("の大")) {
      // 旧デフォルト名「プレイヤー名の大WOLF」でない場合のみ復元
      entity.customName(LEGACY_AMP.deserialize(nameStr))
      entity.isCustomNameVisible = true
    }

    val food = pdc.get(BigWolfKeys.FOOD, PersistentDataType.INTEGER) ?: 0
    entity.foodLevel = food
    entity.particleType = pdc.get(BigWolfKeys.PARTICLE, PersistentDataType.INTEGER) ?: 0
    entity.skillUnlockedLevel =
        pdc.get(BigWolfKeys.STORED_UNLOCKED, PersistentDataType.INTEGER) ?: 0
    entity.skillType = pdc.get(BigWolfKeys.STORED_SKILL, PersistentDataType.INTEGER) ?: 0
    entity.isHovering =
        (pdc.get(BigWolfKeys.STORED_HOVER, PersistentDataType.BYTE) ?: 0).toInt() == 1
    pdc.get(BigWolfKeys.STORED_SPEED_MULTIPLIER, PersistentDataType.DOUBLE)?.let {
      entity.speedMultiplier = it
    }
    pdc.get(BigWolfKeys.STORED_JUMP_MULTIPLIER, PersistentDataType.DOUBLE)?.let {
      entity.jumpMultiplier = it
    }

    // v3: 性質を復元
    entity.temperament =
        pdc.get(BigWolfKeys.STORED_TEMPERAMENT, PersistentDataType.STRING) ?: "typical"

    // 遊んだ記録を復元
    entity.statDistance =
        pdc.get(BigWolfKeys.STORED_STAT_DISTANCE, PersistentDataType.DOUBLE) ?: 0.0
    entity.statJumps = pdc.get(BigWolfKeys.STORED_STAT_JUMPS, PersistentDataType.INTEGER) ?: 0
    entity.statToys = pdc.get(BigWolfKeys.STORED_STAT_TOYS, PersistentDataType.INTEGER) ?: 0
    entity.statBrushes = pdc.get(KEY_STORED_STAT_BRUSHES, PersistentDataType.INTEGER) ?: 0
    entity.statTreats = pdc.get(KEY_STORED_STAT_TREATS, PersistentDataType.INTEGER) ?: 0

    // v2データを復元（交配、譲渡、パーティクル）
    entity.pcdVersion =
        pdc.get(BigWolfKeys.STORED_PCD_VERSION, PersistentDataType.INTEGER)
            ?: BigWolfKeys.CURRENT_PCD_VERSION
    entity.originalOwnerId = pdc.get(BigWolfKeys.STORED_ORIGINAL_OWNER, PersistentDataType.STRING)
    entity.transferCount =
        pdc.get(BigWolfKeys.STORED_TRANSFER_COUNT, PersistentDataType.INTEGER) ?: 0
    entity.breedCount = pdc.get(BigWolfKeys.STORED_BREED_COUNT, PersistentDataType.INTEGER) ?: 0
    entity.generation = pdc.get(BigWolfKeys.STORED_GENERATION, PersistentDataType.INTEGER) ?: 1
    entity.parent1Id = pdc.get(BigWolfKeys.STORED_PARENT_1, PersistentDataType.STRING)
    entity.parent2Id = pdc.get(BigWolfKeys.STORED_PARENT_2, PersistentDataType.STRING)

    // パーティクルアンロック状態を復元（互換性処理）
    val unlockedStr =
        pdc.get(BigWolfKeys.STORED_PARTICLE_UNLOCKED, PersistentDataType.STRING) ?: "0"
    // 古いペットの場合、デフォルトパーティクル(0-4)を自動的にアンロック
    val currentUnlocked =
        unlockedStr.split(",").mapNotNull { it.trim().toIntOrNull() }.toMutableSet()
    currentUnlocked.addAll(listOf(0, 1, 2, 3, 4))
    entity.particleUnlocked = currentUnlocked.sorted().joinToString(",")

    updateStats(entity, food, spec)

    // PetDataManagerに解放状態を記録
    PetDataManager.markAsAlive(player.uniqueId, entity.petId!!)

    // 解放位置を記録（見失い対策）
    PetDataManager.updateLastLocation(player.uniqueId, entity.petId!!, spawnLoc)

    item.amount -= 1
    player.sendMessage(Component.text("ペットを解放しました！", GREEN))
    player.playSound(spawnLoc, Sound.ENTITY_ITEM_PICKUP, 1f, 1f)
  }

  /** 死亡ペットから回復用の収納アイテムを作成 */
  fun createRecoveredStoredPetItem(
      petData: PetData,
      type: EntityType,
      ownerUuid: String
  ): ItemStack {
    val eggMat = Material.getMaterial("${type.name}_SPAWN_EGG") ?: Material.PIG_SPAWN_EGG
    val item = ItemStack(eggMat)
    val meta = item.itemMeta
    val pdc = meta.persistentDataContainer

    val variantJap = MobTranslator.translateVariant(petData.variant)
    val mobJap = MobTranslator.toJapanese(type)
    val typeDisplayName = if (petData.variant != null) "$mobJap ($variantJap)" else mobJap
    val nameStr = petData.customName ?: "名前なし"

    meta.displayName(Component.text("【収納】$typeDisplayName - $nameStr", AQUA))

    val ownerName =
        runCatching { Bukkit.getOfflinePlayer(UUID.fromString(ownerUuid)).name }.getOrNull()
            ?: "Unknown"
    val loreLi = mutableListOf<Component>()
    loreLi.add(Component.text("右クリックでペットを解放", GRAY))
    loreLi.add(Component.text("種類: $typeDisplayName", YELLOW))
    if (petData.variant != null) {
      loreLi.add(Component.text("バリアント: ${petData.variant}", DARK_GRAY))
    }
    loreLi.add(Component.text("Lv: ${petData.foodLevel}", YELLOW))
    loreLi.add(Component.text("オーナー: $ownerName", DARK_GRAY))

    meta.lore(loreLi)

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
    pdc.set(
        BigWolfKeys.STORED_PCD_VERSION, PersistentDataType.INTEGER, BigWolfKeys.CURRENT_PCD_VERSION)
    petData.originalOwner?.let {
      pdc.set(BigWolfKeys.STORED_ORIGINAL_OWNER, PersistentDataType.STRING, it)
    }
    pdc.set(
        BigWolfKeys.STORED_TRANSFER_COUNT, PersistentDataType.INTEGER, petData.transferHistory.size)

    petData.breedInfo?.let { breedInfo ->
      pdc.set(BigWolfKeys.STORED_PARENT_1, PersistentDataType.STRING, breedInfo.parent1Id)
      pdc.set(BigWolfKeys.STORED_PARENT_2, PersistentDataType.STRING, breedInfo.parent2Id)
      pdc.set(BigWolfKeys.STORED_GENERATION, PersistentDataType.INTEGER, breedInfo.generation)
    }
    pdc.set(BigWolfKeys.STORED_BREED_COUNT, PersistentDataType.INTEGER, petData.breedCount)
    pdc.set(
        BigWolfKeys.STORED_PARTICLE_UNLOCKED, PersistentDataType.STRING, petData.particleUnlocked)

    meta.addEnchant(Enchantment.UNBREAKING, 1, true)
    meta.addItemFlags(ItemFlag.HIDE_ENCHANTS)
    item.itemMeta = meta
    return item
  }

  /** ペットデータのファイル名を生成するヘルパー関数 */
  fun getPetFileName(petData: PetData): String {
    val number = petData.petNumber.toString().padStart(3, '0')
    val variant = petData.variant?.let { "_$it" } ?: ""
    return "${number}_${petData.type}${variant}.json"
  }

  /** ペットエンティティを初期設定（PetSpawnSystemから呼び出される） */
  fun setupPetEntity(entity: LivingEntity, spec: PetSpec, player: Player) {
    entity.apply {
      // バリアント名とMOB名を日本語で取得
      val variantName = VariantHandler.getVariantNameFromEntity(entity)
      val variantJap = MobTranslator.translateVariant(variantName)
      val mobJap = MobTranslator.toJapanese(type)

      // ID番号を取得（petIdの最初の8文字をハッシュ値として使用）
      val petId = entity.petId ?: UUID.randomUUID().toString().also { entity.petId = it }
      val idNum = petId.hashCode().let { if (it < 0) -it else it } % 10000

      // デフォルト名: 「プレイヤー名の<バリアント><MOB名> #<ID>」
      val defaultName =
          if (variantName != null) {
            "${player.name}の$variantJap$mobJap #$idNum"
          } else {
            "${player.name}の$mobJap #$idNum"
          }

      customName(Component.text(defaultName))
      isCustomNameVisible = true
      setRemoveWhenFarAway(false)
      isInvulnerable = true
      setAI(BigWolfConfig.spawnAiEnabled)

      // スケールを適用（速度はスケールに関係なくデフォルト値）
      getAttribute(Attribute.SCALE)?.baseValue = spec.scaleRange.start

      // 自由移動時の速度設定
      // 水棲・飛行MOBはデフォルト速度のまま（水中/空中で自然に動くため）
      // 陸上MOBのみ速度倍率を適用（大きすぎると速すぎるため）
      val speedMultiplier =
          when (spec.category) {
            PetCategory.WATER -> 1.0
            PetCategory.FLYING -> BigWolfConfig.freeRoamFlyingSpeedMultiplier
            else -> BigWolfConfig.freeRoamSpeedMultiplier
          }
      getAttribute(Attribute.MOVEMENT_SPEED)?.let {
        it.baseValue = it.defaultValue * speedMultiplier
      }
      getAttribute(Attribute.FLYING_SPEED)?.let {
        // 飛行MOBのみ倍率を適用（それ以外はデフォルト値）
        val flyMul =
            if (spec.category == PetCategory.FLYING) BigWolfConfig.freeRoamFlyingSpeedMultiplier
            else 1.0
        it.baseValue = it.defaultValue * flyMul
      }
      getAttribute(Attribute.STEP_HEIGHT)?.baseValue = 1.1

      if (this is Tameable) {
        isTamed = true
        owner = player
      }
      if (this is Sittable) isSitting = false
      // オウムは座り状態を維持して肩乗りを防止
      if (this is Parrot) isSitting = true
      if (this is Ageable) setAdult()
      if (this is Armadillo && state != Armadillo.State.IDLE) {
        rollOut()
      }

      // maxHealthが設定されている場合は適用（-1.0 = MOBデフォルトを使用）
      if (spec.maxHealth > 0) {
        getAttribute(Attribute.MAX_HEALTH)?.baseValue = spec.maxHealth
        health = spec.maxHealth
      }
    }
  }
}

// ===== File: services/TransferService.kt =====
/**
 * ペット譲渡を担当するサービス
 * - 譲渡コマンド処理
 * - 2段階確認フロー
 * - 譲渡処理の実行
 */
class TransferService(
    private val plugin: JavaPlugin,
    private val storageService: PetStorageService,
    private val logger: Logger
) {
  private val pendingTransfers = ConcurrentHashMap<UUID, TransferRequest>()

  data class TransferRequest(val petId: String, val targetPlayer: UUID, val expireTime: Long)

  /** 譲渡コマンドを処理 */
  fun handleTransferCommand(player: Player, args: Array<out String>) {
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
    val playerUuidStr = player.uniqueId.toString()
    val targetEntity: LivingEntity? =
        ActivePetRegistry.getByOwner(playerUuidStr).firstOrNull { entity ->
          entity.petId?.let { PetDataManager.getPetData(player.uniqueId, it) }?.petNumber ==
              petNumber
        }

    if (targetEntity == null) {
      player.sendMessage(Component.text("番号 $petNumber の召喚中ペットが見つかりません。", RED))
      player.sendMessage(Component.text("譲渡するにはペットを召喚している必要があります。", GRAY))
      return
    }

    val petId = targetEntity.petId!!
    val petName =
        targetEntity.customName()?.let { PLAIN_TEXT.serialize(it) } ?: targetEntity.type.name

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
    pendingTransfers[player.uniqueId] =
        TransferRequest(
            petId = petId,
            targetPlayer = targetPlayer.uniqueId,
            expireTime = System.currentTimeMillis() + 30_000 // 30秒
            )

    player.sendMessage(Component.text("=== 譲渡確認 ===", GOLD))
    player.sendMessage(Component.text("ペット「$petName」を ${targetPlayer.name} に譲渡しますか？", YELLOW))
    player.sendMessage(Component.text("確定するには30秒以内にもう一度同じコマンドを実行してください。", GRAY))
    player.sendMessage(Component.text("※譲渡後は取り消せません", RED))
  }

  /** 実際の譲渡処理を実行 */
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
      var petData = PetDataManager.getPetData(senderUuid, petId)
      if (petData == null) {
        sender.sendMessage(Component.text("ペットデータが見つかりません。", RED))
        return
      }

      // originalOwner / transfer回数を最新化してから収納
      if (petEntity.originalOwnerId == null) {
        petEntity.originalOwnerId = senderUuid.toString()
      }
      petEntity.transferCount += 1

      // 2. ペットを収納してスポーンエッグを取得
      val egg = storageService.createStoredPetItem(petEntity)

      // createStoredPetItem -> markAsStored により JSON が更新されるため再読込
      petData = PetDataManager.getPetData(senderUuid, petId) ?: petData

      // 3. エンティティを削除
      petEntity.remove()

      // 4. 元のデータファイルを削除
      val senderFolder = File(File(plugin.dataFolder, "players"), senderUuid.toString())
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
      val transferRecord =
          TransferRecord(
              fromOwner = senderUuid.toString(),
              toOwner = targetUuid.toString(),
              timestamp = java.time.LocalDateTime.now().toString())
      val updatedHistory = petData.transferHistory.toMutableList()
      updatedHistory.add(transferRecord)

      // 7. originalOwnerが未設定の場合は現在の送信者をセット
      val originalOwner = petData.originalOwner ?: senderUuid.toString()

      // 8. 新しいペット番号でデータを作成
      val newPetData =
          petData.copy(
              petNumber = nextNumber,
              originalOwner = originalOwner,
              transferHistory = updatedHistory,
              breedInfo = petData.breedInfo?.copy(),
              stats = petData.stats.copy(),
              particleUnlocked = petData.particleUnlocked)

      // 9. 新しいオーナーでデータを保存
      val targetFolder = File(File(plugin.dataFolder, "players"), targetUuid.toString())
      if (!targetFolder.exists()) {
        targetFolder.mkdirs()
      }
      val newFileName = storageService.getPetFileName(newPetData)
      val newFile = File(targetFolder, newFileName)
      newFile.writeText(GsonBuilder().setPrettyPrinting().create().toJson(newPetData))

      // ★ PetDataManagerのキャッシュを更新
      PetDataManager.savePet(targetUuid, newPetData)

      // 10. スポーンエッグのオーナーUUIDを更新
      egg.itemMeta =
          egg.itemMeta?.apply {
            persistentDataContainer.set(
                BigWolfKeys.STORED_OWNER, PersistentDataType.STRING, targetUuid.toString())
          }

      // 11. 譲渡先プレイヤーにスポーンエッグを渡す
      val leftover = targetPlayer.inventory.addItem(egg)
      if (leftover.isNotEmpty()) {
        targetPlayer.world.dropItem(targetPlayer.location, egg)
        targetPlayer.sendMessage(Component.text("インベントリがいっぱいだったため、足元にドロップしました。", YELLOW))
      }

      // 12. 成功メッセージ（譲渡回数を表示）
      val transferCount = updatedHistory.size
      sender.sendMessage(
          Component.text(
              "ペット「$petName」(#${petData.petNumber})を ${targetPlayer.name} に譲渡しました！(譲渡回数: $transferCount)",
              GREEN))
      targetPlayer.sendMessage(
          Component.text("${sender.name} からペット「$petName」(あなたの#$nextNumber)を譲渡されました！", GREEN))

      logger.info(
          "Pet transfer: $petName (ID: $petId) #${petData.petNumber} from ${sender.name} to ${targetPlayer.name} #$nextNumber")
    } catch (e: Exception) {
      sender.sendMessage(Component.text("譲渡処理中にエラーが発生しました: ${e.message}", RED))
      logger.warning("Pet transfer error: ${e.message}")
      e.printStackTrace()
    }
  }
}

// ===== File: systems/BreedingSystem.kt =====
/** ペット交配システム ペット同士の交配、世代管理、能力値継承を管理 */
class BreedingSystem(
    private val plugin: JavaPlugin,
    private val countActivePets: (Player) -> Int,
    private val setupPetEntity: (LivingEntity, PetSpec, Player) -> Unit,
    private val updateStats: (LivingEntity, Int, PetSpec) -> Unit,
    private val consumeTokens: (Player, Int) -> Boolean,
    private val onPetSpawned: (LivingEntity) -> Unit = {}
) {

  private val activeDescentTasks = ConcurrentHashMap<UUID, BukkitTask>()

  /** 交配可能な条件を満たすペットのリストを取得 */
  fun getBreedablePets(player: Player): List<LivingEntity> {
    val playerUuidStr = player.uniqueId.toString()
    return ActivePetRegistry.getByOwner(playerUuidStr).filter {
      it.foodLevel >= BigWolfConfig.breedMinLevel
    }
  }

  /** 交配GUI を開く（27枠・ペット直接選択式） */
  @Suppress("UNUSED_PARAMETER")
  fun openBreedGui(player: Player, pets: List<LivingEntity>, title: Component): Inventory {
    val inv = Bukkit.createInventory(null, 27, title)

    // 交配可能なペットを上部2行に表示（最大18匹）
    pets.take(18).forEachIndexed { index, entity ->
      val eggMat = Material.getMaterial("${entity.type.name}_SPAWN_EGG") ?: Material.PIG_SPAWN_EGG
      val nameComp = entity.customName() ?: Component.text(MobTranslator.toJapanese(entity.type))
      val gen = entity.generation
      val breedCount = entity.breedCount
      val temperamentDisplay = TemperamentHelper.getDisplayName(entity.temperament)

      val item =
          ItemStack(eggMat).apply {
            itemMeta =
                itemMeta.apply {
                  displayName(
                      Component.text("${MobTranslator.toJapanese(entity.type)} ", YELLOW)
                          .append(nameComp))
                  lore(
                      listOf(
                          Component.text("レベル: ${entity.foodLevel}", GREEN),
                          Component.text("世代: 第${gen}世代", AQUA),
                          Component.text(
                              "性質: $temperamentDisplay",
                              if (entity.isAtypical()) LIGHT_PURPLE else GRAY),
                          Component.text("交配回数: ${breedCount}回", GRAY),
                          Component.text("", GRAY),
                          Component.text("クリックで親に選択", GREEN)))
                }
          }
      inv.setItem(index, item)
    }

    // 3行目: 選択状態と操作ボタン
    // スロット18: 親1選択状態
    val parent1Item =
        ItemStack(Material.LIGHT_BLUE_STAINED_GLASS_PANE).apply {
          itemMeta =
              itemMeta.apply {
                displayName(Component.text("親1: 未選択", AQUA))
                lore(listOf(Component.text("上のペットをクリックして選択", GRAY)))
              }
        }
    inv.setItem(18, parent1Item)

    // スロット20: 親2選択状態
    val parent2Item =
        ItemStack(Material.PINK_STAINED_GLASS_PANE).apply {
          itemMeta =
              itemMeta.apply {
                displayName(Component.text("親2: 未選択", LIGHT_PURPLE))
                lore(listOf(Component.text("上のペットをクリックして選択", GRAY)))
              }
        }
    inv.setItem(20, parent2Item)

    // スロット22: 説明
    val infoItem =
        ItemStack(Material.BOOK).apply {
          itemMeta =
              itemMeta.apply {
                displayName(Component.text("交配の手順", GOLD))
                lore(
                    listOf(
                        Component.text("1. 上段のペットから親1を選択", GRAY),
                        Component.text("2. 上段のペットから親2を選択", GRAY),
                        Component.text("3. 緑ボタンで交配実行", GRAY),
                        Component.text("", GRAY),
                        Component.text("必要条件:", YELLOW),
                        Component.text("- レベル${BigWolfConfig.breedMinLevel}以上", GRAY),
                        Component.text("コスト: ${BigWolfConfig.breedCost}pt", RED)))
              }
        }
    inv.setItem(22, infoItem)

    // スロット24: メインメニューへ戻る
    val backItem =
        ItemStack(Material.ARROW).apply {
          itemMeta =
              itemMeta.apply {
                displayName(Component.text("← メインメニューへ", WHITE))
                lore(listOf(Component.text("メインメニューに戻る", GRAY)))
              }
        }
    inv.setItem(24, backItem)

    // スロット26: 決定ボタン
    val confirmItem =
        ItemStack(Material.GREEN_WOOL).apply {
          itemMeta =
              itemMeta.apply {
                displayName(Component.text("交配を実行", GREEN))
                lore(
                    listOf(
                        Component.text("親を2匹選択してください", GRAY),
                        Component.text("コスト: ${BigWolfConfig.breedCost}pt", RED)))
              }
        }
    inv.setItem(26, confirmItem)

    return inv
  }

  /** 交配を実行 */
  fun executeBreeding(player: Player, parent1: LivingEntity, parent2: LivingEntity) {
    // ペット数制限チェック
    if (countActivePets(player) >= BigWolfConfig.MAX_PET_COUNT) {
      player.sendMessage(Component.text("ペットは同時に${BigWolfConfig.MAX_PET_COUNT}匹までしか召喚できません！", RED))
      player.sendMessage(Component.text("他のペットを収納してから交配してください。", GRAY))
      return
    }

    // コスト消費前に生成場所を確認
    val safeGround =
        SpawnUtils.findSafeGroundLocation(player.location.clone())
            ?: run {
              player.sendMessage(Component.text("この場所ではペットを生成できません。", RED))
              return
            }

    // コスト確認
    val cost = BigWolfConfig.breedCost
    if (!consumeTokens(player, cost)) {
      return
    }

    // 新しいペットを生成
    val newPetId = UUID.randomUUID().toString()
    val type = parent1.type

    // バリアントをランダムに選択
    val variant = selectRandomVariant(parent1, parent2)

    // 世代計算
    val gen1 = parent1.generation
    val gen2 = parent2.generation
    val newGeneration = maxOf(gen1, gen2) + 1

    // 能力値の遺伝計算
    val parentSpeedAvg = (parent1.speedMultiplier + parent2.speedMultiplier) / 2.0
    val parentJumpAvg = (parent1.jumpMultiplier + parent2.jumpMultiplier) / 2.0

    // ランダム要素
    val randomRange = BigWolfConfig.breedRandomMax - BigWolfConfig.breedRandomMin
    val randomFactor = BigWolfConfig.breedRandomMin + (Math.random() * randomRange)

    // 世代ボーナス
    val genBonus =
        (newGeneration * BigWolfConfig.breedGenBonusPerGen).coerceAtMost(
            BigWolfConfig.breedGenBonusMax)

    // 突然変異
    val mutation =
        if (Math.random() < BigWolfConfig.breedMutationChance) {
          1.0 + BigWolfConfig.breedMutationBoost
        } else {
          1.0
        }

    var newSpeed = parentSpeedAvg * randomFactor * mutation + genBonus
    var newJump = parentJumpAvg * randomFactor * mutation + genBonus

    // 上限設定
    newSpeed = newSpeed.coerceAtMost(BigWolfConfig.breedStatCap)
    newJump = newJump.coerceAtMost(BigWolfConfig.breedStatCap)

    val spawnLoc = safeGround.clone().add(0.0, 10.0, 0.0)

    val spec = PetRegistry.get(type)
    val newEntity = player.world.spawnEntity(spawnLoc, type) as? LivingEntity

    if (newEntity == null) {
      player.sendMessage(Component.text("この場所ではペットを生成できません。", RED))
      // ポイント返却
      @Suppress("DEPRECATION") TMAPI.addTokens(player.uniqueId, cost)
      return
    }

    // petIdとバリアントを先に設定（setupPetEntityでデフォルト名生成に必要）
    newEntity.petId = newPetId
    newEntity.ownerId = player.uniqueId.toString()
    newEntity.originalOwnerId = player.uniqueId.toString()

    // バリアント適用（setupPetEntityでバリアント名取得に必要）
    if (variant != null) {
      VariantHandler.applyVariant(newEntity, variant)
    }

    // エンティティ設定
    setupPetEntity(newEntity, spec, player)

    newEntity.generation = newGeneration
    newEntity.parent1Id = parent1.petId
    newEntity.parent2Id = parent2.petId
    newEntity.pcdVersion = BigWolfKeys.CURRENT_PCD_VERSION
    newEntity.speedMultiplier = newSpeed
    newEntity.jumpMultiplier = newJump
    newEntity.particleUnlocked = "0,1,2,3,4"

    // v3: 性質を決定（親の性質に基づく確率）
    newEntity.temperament =
        TemperamentHelper.determineForBreeding(parent1.temperament, parent2.temperament)

    // 世代ボーナスで初期レベル
    val bonusLevel =
        ((newGeneration - 1) * BigWolfConfig.breedBonusLevelPerGen).coerceAtMost(
            BigWolfConfig.breedBonusLevelMax)
    if (bonusLevel > 0) {
      newEntity.foodLevel = bonusLevel
      updateStats(newEntity, bonusLevel, spec)
    }

    // 親の交配回数更新
    updateParentBreedCount(player, parent1, parent2)

    // PetDataManagerに記録（ActivePetRegistry登録前にJSONを確保）
    val petData =
        PetDataManager.recordBreeding(
            ownerUuid = player.uniqueId,
            petId = newPetId,
            type = type,
            variant = variant,
            customName = null,
            parent1Id = parent1.petId ?: "",
            parent2Id = parent2.petId ?: "",
            generation = newGeneration)

    // エンティティの表示名をJSON保存名（連番ベース）で上書き
    petData.customName?.let { newEntity.customName(Component.text(it)) }

    // 着地時に表示するボーナス情報をクロージャとして準備
    val hasMutation = mutation != 1.0
    val isCapped = newSpeed >= BigWolfConfig.breedStatCap || newJump >= BigWolfConfig.breedStatCap
    val onLand: () -> Unit = {
      val temperamentDisplay = TemperamentHelper.getDisplayName(newEntity.temperament)
      if (newEntity.isAtypical()) {
        player.sendMessage(
            Component.text(
                "★★ 新しいペットが誕生しました！ (第${newGeneration}世代) [$temperamentDisplay]",
                LIGHT_PURPLE))
      } else {
        player.sendMessage(
            Component.text("★ 新しいペットが誕生しました！ (第${newGeneration}世代)", GREEN))
      }
      player.sendMessage(
          Component.text("  ${petData.customName ?: ""}", GRAY))
      player.sendMessage(
          Component.text("  速度: ", GRAY)
              .append(
                  Component.text(String.format("%.3f", newSpeed), if (isCapped) RED else GREEN))
              .append(Component.text("  ジャンプ: ", GRAY))
              .append(
                  Component.text(String.format("%.3f", newJump), if (isCapped) RED else GREEN)))
      val bonuses = buildList {
        add(
            Component.text(
                "ランダム${(randomFactor * 100).toInt()}%",
                if (randomFactor >= 1.0) GREEN else YELLOW))
        if (genBonus > 0)
            add(Component.text("世代補正+${String.format("%.2f", genBonus)}", AQUA))
        if (hasMutation) add(Component.text("突然変異★", LIGHT_PURPLE))
        if (bonusLevel > 0) add(Component.text("初期Lv+$bonusLevel", GREEN))
        if (isCapped) add(Component.text("上限到達", RED))
      }
      if (bonuses.isNotEmpty()) {
        val line =
            bonuses.drop(1).fold(
                Component.text("  ボーナス: ", GRAY).append(bonuses[0])) { acc, c ->
                  acc.append(Component.text(" / ", DARK_GRAY)).append(c)
                }
        player.sendMessage(line)
      }
    }

    // 降臨演出（着地時にonLandが呼ばれる）
    spawnDescentEffect(newEntity, safeGround.y + 0.5, onLand)

    // ActivePetRegistryに登録
    onPetSpawned(newEntity)

    player.playSound(player.location, Sound.ENTITY_PLAYER_LEVELUP, 1f, 1.5f)
  }

  private fun spawnDescentEffect(
      entity: LivingEntity,
      targetY: Double,
      onLand: (() -> Unit)? = null
  ) {
    activeDescentTasks[entity.uniqueId]?.cancel()
    var currentY = entity.location.y
    val task =
        object : BukkitRunnable() {
          override fun run() {
            if (!entity.isValid || entity.isDead) {
              activeDescentTasks.remove(entity.uniqueId)
              cancel()
              return
            }

            val world = entity.world
            val loc = entity.location
            world.spawnParticle(
                Particle.HEART, loc.clone().add(0.0, 1.0, 0.0), 5, 0.3, 0.5, 0.3, 0.02)
            world.spawnParticle(
                Particle.TOTEM_OF_UNDYING, loc.clone().add(0.0, 2.0, 0.0), 3, 0.2, 0.2, 0.2, 0.01)
            world.spawnParticle(
                Particle.FIREWORK, loc.clone().add(0.0, 0.5, 0.0), 2, 0.4, 0.3, 0.4, 0.0)

            currentY = (currentY - 0.3).coerceAtLeast(targetY)
            val nextLoc = loc.clone()
            nextLoc.y = currentY
            entity.teleport(nextLoc)

            if (currentY <= targetY) {
              world.spawnParticle(
                  Particle.EXPLOSION_EMITTER, entity.location.clone().add(0.0, 0.5, 0.0), 1)
              world.playSound(entity.location, Sound.ENTITY_GENERIC_EXPLODE, 0.8f, 1.5f)

              // 非定型の特別エフェクト
              if (entity.isAtypical()) {
                world.spawnParticle(
                    Particle.HEART, entity.location.add(0.0, 1.5, 0.0), 15, 0.5, 0.5, 0.5, 0.1)
              }
              // ボーナス表示コールバック（交配時に渡される）
              onLand?.invoke()
              activeDescentTasks.remove(entity.uniqueId)
              cancel()
            }
          }
        }
    activeDescentTasks[entity.uniqueId] = task.runTaskTimer(plugin, 0L, 2L)
  }

  private fun updateParentBreedCount(player: Player, parent1: LivingEntity, parent2: LivingEntity) {
    parent1.breedCount++
    parent2.breedCount++

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
  }

  /**
   * 交配時にバリアントをランダムに選択
   *
   * ロジック:
   * 1. 親1と親2のバリアントを取得
   * 2. そのMOBタイプで利用可能な全バリアントを取得
   * 3. 親のバリアントを優先的に（70%）、その他のバリアントも候補に（30%）
   */
  private fun selectRandomVariant(parent1: LivingEntity, parent2: LivingEntity): String? {
    val type = parent1.type

    // 利用可能なバリアント一覧を取得
    val availableVariants = VariantHandler.getVariantNames(type)
    if (availableVariants.isEmpty()) return null

    val parent1Variant = VariantHandler.getVariantNameFromEntity(parent1)
    val parent2Variant = VariantHandler.getVariantNameFromEntity(parent2)
    val parentVariants = setOfNotNull(parent1Variant, parent2Variant)

    // 各バリアントの重みを集計（同じ親バリアントが両親に一致する場合は2倍）
    // 重みはconfig.ymlの breed.variantWeights で設定可能
    val weights = LinkedHashMap<String, Int>()
    parent1Variant?.let { weights[it] = (weights[it] ?: 0) + BigWolfConfig.breedParentVariantWeight }
    parent2Variant?.let { weights[it] = (weights[it] ?: 0) + BigWolfConfig.breedParentVariantWeight }
    for (variant in availableVariants) {
      if (variant !in parentVariants) {
        weights[variant] = BigWolfConfig.breedOtherVariantWeight
      }
    }

    if (weights.isEmpty()) return availableVariants.randomOrNull()

    // 重み付きランダム選択（リストを生成せず1パスで決定）
    var remaining = (0 until weights.values.sum()).random()
    for ((variant, weight) in weights) {
      remaining -= weight
      if (remaining < 0) return variant
    }
    return weights.keys.last()
  }
}

// ===== File: systems/ChildAISystem.kt =====
/** 非定型ペットの子供AI システム 非定型ペットに子供っぽい活発な挙動を追加 */
class ChildAISystem(private val plugin: JavaPlugin) {

  // クールダウン管理（各ペットごと）
  private val lastActionTime = ConcurrentHashMap<UUID, Long>()

  // アクション間隔（ミリ秒）
  private val minActionInterval = 5000L // 5秒
  private val maxActionInterval = 15000L // 15秒

  /** 全ワールドの非定型ペットに対してAIを開始 ActivePetRegistry を使用し、全ワールドスキャンを行わない */
  fun startGlobalAITask() {
    if (!BigWolfConfig.childAiEnabled) return

    object : BukkitRunnable() {
          override fun run() {
            if (!BigWolfConfig.childAiEnabled) return

            val aiStartNs = if (PetDebugger.hasAnyEnabled()) System.nanoTime() else 0L

            val activePets = ActivePetRegistry.getAll()
            var atypicalCount = 0
            var actedCount = 0

            // 不要になった lastActionTime エントリをクリーンアップ
            val activeUuids = activePets.mapTo(HashSet()) { it.uniqueId }
            lastActionTime.keys.retainAll(activeUuids)

            for (entity in activePets) {
              if (!ActivePetRegistry.isAtypical(entity.uniqueId)) continue
              atypicalCount++

              // 騎乗中はスキップ
              if (entity.passengers.isNotEmpty()) continue

              // オーナーが近くにいるか確認
              val ownerId = ActivePetRegistry.getOwnerId(entity.uniqueId) ?: continue
              val ownerUuid = runCatching { UUID.fromString(ownerId) }.getOrNull() ?: continue
              val owner = Bukkit.getPlayer(ownerUuid) ?: continue

              if (owner.isInsideVehicle) continue
              if (entity.location.distance(owner.location) > 30) continue

              // クールダウンチェック
              val uuid = entity.uniqueId
              val now = System.currentTimeMillis()
              val lastAction = lastActionTime[uuid] ?: 0L
              val interval = Random.nextLong(minActionInterval, maxActionInterval)
              if (now - lastAction < interval) continue

              // ランダムアクション実行
              performRandomAction(entity, owner)
              lastActionTime[uuid] = now
              actedCount++
            }

            if (PetDebugger.hasAnyEnabled()) {
              val elapsedMs = (System.nanoTime() - aiStartNs) / 1_000_000.0
              PetDebugger.sendAiTaskResult(activePets.size, atypicalCount, actedCount, elapsedMs)
            }
          }
        }
        .runTaskTimer(plugin, 20L, 20L) // 1秒ごとにチェック
  }

  /** ランダムなアクションを実行 */
  private fun performRandomAction(entity: LivingEntity, owner: Player) {
    val action = Random.nextInt(100)

    when {
      action < 30 -> performJump(entity) // 30%: ジャンプ
      action < 50 -> performApproachOwner(entity, owner) // 20%: 飼い主に近づく
      action < 70 -> performWander(entity) // 20%: 周囲を探索
      action < 85 -> performPlaySound(entity) // 15%: 鳴き声
      else -> performSpin(entity) // 15%: くるくる回る
    }
  }

  /** ジャンプアクション */
  private fun performJump(entity: LivingEntity) {
    if (entity.isOnGround || entity.isInWater) {
      val currentVel = entity.velocity
      entity.velocity = Vector(currentVel.x * 0.5, 0.5, currentVel.z * 0.5)
      entity.world.spawnParticle(
          Particle.HAPPY_VILLAGER, entity.location.add(0.0, 0.5, 0.0), 5, 0.3, 0.3, 0.3, 0.0)
    }
  }

  /** 飼い主に近づくアクション */
  private fun performApproachOwner(entity: LivingEntity, owner: Player) {
    val direction = owner.location.toVector().subtract(entity.location.toVector())
    val distance = direction.length()

    if (distance > 3.0 && distance < 15.0) {
      val moveVec = direction.normalize().multiply(0.3)
      val spec = PetRegistry.get(entity.type)

      // 水中か飛行系の場合はY成分も考慮
      if (spec.category == PetCategory.FLYING ||
          (spec.category == PetCategory.WATER && entity.isInWater)) {
        entity.velocity = moveVec
      } else {
        moveVec.y = entity.velocity.y
        entity.velocity = moveVec
      }

      // ペットの向きをプレイヤーの方向に設定
      val yaw = Math.toDegrees(kotlin.math.atan2(-direction.x, direction.z)).toFloat()
      entity.setRotation(yaw, 0f)

      entity.world.spawnParticle(
          Particle.HEART, entity.location.add(0.0, 1.0, 0.0), 2, 0.2, 0.2, 0.2, 0.0)
    }
  }

  /** 周囲を探索するアクション */
  private fun performWander(entity: LivingEntity) {
    val randomAngle = Random.nextDouble() * 2 * Math.PI
    val wanderVec = Vector(Math.cos(randomAngle) * 0.25, 0.0, Math.sin(randomAngle) * 0.25)

    val spec = PetRegistry.get(entity.type)
    if (spec.category == PetCategory.FLYING ||
        (spec.category == PetCategory.WATER && entity.isInWater)) {
      wanderVec.y = (Random.nextDouble() - 0.5) * 0.2
      entity.velocity = wanderVec
    } else {
      wanderVec.y = entity.velocity.y
      entity.velocity = wanderVec
    }

    // ペットの向きを移動方向に設定
    val yaw = Math.toDegrees(kotlin.math.atan2(-wanderVec.x, wanderVec.z)).toFloat()
    entity.setRotation(yaw, 0f)

    // 好奇心エフェクト
    entity.world.spawnParticle(
        Particle.END_ROD, entity.location.add(0.0, 1.2, 0.0), 3, 0.2, 0.2, 0.2, 0.01)
  }

  /** 鳴き声アクション */
  private fun performPlaySound(entity: LivingEntity) {
    val sound =
        when (entity.type) {
          EntityType.WOLF -> Sound.ENTITY_WOLF_WHINE
          EntityType.CAT -> Sound.ENTITY_CAT_AMBIENT
          EntityType.PARROT -> Sound.ENTITY_PARROT_AMBIENT
          EntityType.FOX -> Sound.ENTITY_FOX_AMBIENT
          EntityType.DOLPHIN -> Sound.ENTITY_DOLPHIN_AMBIENT
          EntityType.BEE -> Sound.ENTITY_BEE_LOOP
          EntityType.FROG -> Sound.ENTITY_FROG_AMBIENT
          EntityType.RABBIT -> Sound.ENTITY_RABBIT_AMBIENT
          EntityType.PANDA -> Sound.ENTITY_PANDA_AMBIENT
          EntityType.ALLAY -> Sound.ENTITY_ALLAY_AMBIENT_WITHOUT_ITEM
          EntityType.AXOLOTL -> Sound.ENTITY_AXOLOTL_IDLE_AIR
          else -> Sound.ENTITY_PLAYER_BREATH
        }
    entity.world.playSound(entity.location, sound, 0.6f, 1.2f)
  }

  /** くるくる回るアクション */
  private fun performSpin(entity: LivingEntity) {
    val startYaw = entity.location.yaw

    object : BukkitRunnable() {
          var ticks = 0

          override fun run() {
            if (!entity.isValid || entity.isDead || ticks >= 10) {
              cancel()
              return
            }

            val newYaw = startYaw + (ticks * 36f) // 10tickで1回転
            entity.setRotation(newYaw, entity.location.pitch)
            entity.world.spawnParticle(
                Particle.FIREWORK, entity.location.add(0.0, 0.5, 0.0), 1, 0.2, 0.2, 0.2, 0.0)
            ticks++
          }
        }
        .runTaskTimer(plugin, 0L, 2L)
  }

  /** クリーンアップ */
  fun cleanup() {
    lastActionTime.clear()
  }
}

// ===== File: systems/EconomySystem.kt =====
/**
 * 経済システム
 *
 * TokenManager (TMAPI) との連携を通じて、プレイヤーのポイント残高の取得、 ポイントの消費を管理します。
 */
class EconomySystem(private val logger: Logger) {

  /**
   * プレイヤーの現在のポイント残高を取得
   *
   * @param player 対象プレイヤー
   * @return ポイント残高 (取得失敗時は 0)
   */
  fun getPlayerTokens(player: Player): Long {
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
   * @param player 対象プレイヤー
   * @param amount 消費するポイント数
   * @return 成功したかどうか
   */
  @Suppress("DEPRECATION")
  fun refundTokens(player: Player, amount: Int) {
    if (amount <= 0) return
    try {
      TMAPI.addTokens(player.uniqueId, amount)
    } catch (e: Exception) {
      logger.warning("Failed to refund tokens to ${player.name}: ${e.message}")
    }
  }

  @Suppress("DEPRECATION")
  fun consumeTokens(player: Player, amount: Int): Boolean {
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
}

// ===== File: systems/FetchSystem.kt =====
/** おもちゃフェッチシステム ペットがおもちゃを拾って持ってくる動作を管理 */
class FetchSystem(
    private val plugin: JavaPlugin,
    private val activeFetchTasks: MutableMap<UUID, BukkitTask>
) {

  /** プレイヤーがオーナーかチェック */
  private fun isOwner(entity: LivingEntity, player: Player): Boolean =
      entity.ownerId == player.uniqueId.toString()

  /** プレイヤーの近くにいる所有ペットを検索（おもちゃ系処理共通） */
  private fun findNearbyOwnedPet(player: Player, type: EntityType): LivingEntity? =
      player.getNearbyEntities(15.0, 10.0, 15.0).filterIsInstance<LivingEntity>().firstOrNull {
        it.type == type && isOwner(it, player) && it.passengers.isEmpty()
      }

  /** エンティティを目標地点に向かって移動させる（元のBigWolf.ktのmoveTo関数を復元） */
  private fun moveTo(entity: LivingEntity, targetLoc: Location) {
    val spec = PetRegistry.get(entity.type)
    val targetVec =
        targetLoc.toVector().subtract(entity.location.toVector()).normalize().multiply(0.35)

    if (spec.category == PetCategory.FLYING ||
        (spec.category == PetCategory.WATER && entity.isInWater)) {
      entity.velocity = targetVec
    } else {
      targetVec.y = entity.velocity.y
      entity.velocity = targetVec
    }

    entity.lookAt(targetLoc, LookAnchor.EYES)
  }

  /** 投げるタイプのおもちゃを処理 */
  fun handleThrowToy(player: Player, item: ItemStack, toySpec: PetSpec) {
    val pet = findNearbyOwnedPet(player, toySpec.entityType)

    if (pet != null) {
      // ウーパールーパーは水中限定
      if (toySpec.entityType == EntityType.AXOLOTL && !pet.isInWater) {
        player.sendMessage(Component.text("ウーパールーパーは水中でしか遊べません！", RED))
        return
      }

      // おもちゃで遊んだ回数（投げたタイミングでカウント）
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

  /** 釣竿タイプのおもちゃを処理 */
  fun handleFishingToy(player: Player, toySpec: PetSpec) {
    val pet = findNearbyOwnedPet(player, toySpec.entityType)

    if (pet != null) {
      // おもちゃで遊んだ回数
      pet.statToys = pet.statToys + 1

      val targetLoc = player.eyeLocation.add(player.location.direction.normalize().multiply(6.0))
      val vec = targetLoc.toVector().subtract(pet.location.toVector())
      val dist = vec.clone().setY(0).length()

      if (dist > 1.0) {
        val strength = (dist * 0.25).coerceIn(0.5, 1.8)
        val velocity = vec.clone().setY(0).normalize().multiply(strength).setY(0.6)

        pet.velocity = velocity
        pet.lookAt(targetLoc, LookAnchor.EYES)

        player.sendMessage(Component.text("とびかかれ！", LIGHT_PURPLE))
        pet.world.playSound(pet.location, Sound.ENTITY_CAT_HISS, 1f, 1f)
      }
    }
  }

  /** フェッチタスクを開始 */
  private fun startFetchTask(player: Player, entity: LivingEntity, toyItem: Item, spec: PetSpec) {
    activeFetchTasks[entity.uniqueId]?.cancel()

    // 投げたアイテムのItemStackを保存（増殖防止）
    val originalItemStack = toyItem.itemStack.clone()

    val task =
        object : BukkitRunnable() {
          var phase = 0
          var ticks = 0
          val timeoutTicks = 200 // 10秒（200tick）でタイムアウト

          override fun run() {
            if (!entity.isValid || entity.isDead || !player.isOnline) {
              cleanup(true)
              return
            }
            if (!entity.passengers.isEmpty()) {
              cleanup(true)
              return
            }

            ticks++

            // タイムアウトチェック
            if (ticks > timeoutTicks) {
              player.sendMessage(Component.text("たどり着けなかった...", YELLOW))
              if (toyItem.isValid) toyItem.remove()
              cleanup(true)
              return
            }

            if (phase == 0) {
              // フェーズ0: おもちゃに向かって走る
              if (!toyItem.isValid) {
                cleanup(false)
                return
              }
              val targetLoc = toyItem.location
              val dist = entity.location.distance(targetLoc)
              if (dist < 1.5) {
                toyItem.remove()
                entity.equipment?.setItemInMainHand(originalItemStack)
                entity.world.playSound(entity.location, Sound.ENTITY_ITEM_PICKUP, 1f, 1f)
                phase = 1
                ticks = 0 // フェーズ1に入ったらタイマーリセット
              } else {
                moveTo(entity, targetLoc)
              }
            } else {
              // フェーズ1: プレイヤーに向かって戻る
              if (!player.isOnline) {
                cleanup(true)
                return
              }
              val playerLoc = player.location
              val dist = entity.location.distance(playerLoc)
              if (dist < 2.5) {
                entity.equipment?.setItemInMainHand(null)
                val drop = entity.world.dropItem(entity.location, originalItemStack)
                drop.setGravity(spec.toyGravity)
                if (!spec.toyGravity) drop.velocity = Vector(0, 0, 0)
                player.playSound(player.location, Sound.ENTITY_PLAYER_LEVELUP, 1f, 1.5f)
                player.sendMessage(Component.text("持ってきた！", GREEN))
                cleanup(false)
              } else {
                moveTo(entity, playerLoc)
              }
            }
          }

          fun cleanup(dropItem: Boolean) {
            if (dropItem) {
              entity.equipment?.setItemInMainHand(null)
              val drop = entity.world.dropItem(entity.location, originalItemStack)
              drop.setGravity(spec.toyGravity)
              if (!spec.toyGravity) drop.velocity = Vector(0, 0, 0)
            }
            this.cancel()
            activeFetchTasks.remove(entity.uniqueId)
          }
        }
    activeFetchTasks[entity.uniqueId] = task.runTaskTimer(plugin, 0L, 1L)
  }

  /** フェッチタスクを停止 */
  fun stopFetchTask(entity: LivingEntity) {
    if (activeFetchTasks.containsKey(entity.uniqueId)) {
      activeFetchTasks[entity.uniqueId]?.cancel()
      activeFetchTasks.remove(entity.uniqueId)
      if (entity.equipment?.itemInMainHand?.type != Material.AIR) {
        entity.equipment?.setItemInMainHand(null)
      }
    }
  }

  /** 風船ジャンプを処理（イルカ用） フグ風船をプレイヤーの目線方向に浮遊させ、イルカがAIで追いかけてジャンプ */
  fun handleBalloonJump(player: Player, item: ItemStack, toySpec: PetSpec) {
    val pet = findNearbyOwnedPet(player, toySpec.entityType)

    if (pet == null) {
      player.sendMessage(Component.text("遊んでくれるイルカが近くにいません。", RED))
      return
    }

    // 既に遊び中（フェッチタスクがある）なら新しい風船を出さない
    if (activeFetchTasks.containsKey(pet.uniqueId)) {
      player.sendMessage(Component.text("イルカはまだ遊んでいます！", YELLOW))
      return
    }

    // おもちゃで遊んだ回数をカウント
    pet.statToys = pet.statToys + 1

    // フグ風船をプレイヤーの目線方向に投げる
    val balloon = player.world.dropItem(player.eyeLocation, item.asOne())
    balloon.setGravity(false)

    // プレイヤーの目線方向（水平成分）＋上昇成分で斜め上に浮かせる
    val lookDir = player.location.direction.clone()
    lookDir.y = 0.0 // 水平成分のみ
    lookDir.normalize()

    // 斜め上方向に浮いていく（水平0.2 + 上昇0.15）
    val floatVelocity = lookDir.multiply(0.2).setY(0.15)
    balloon.velocity = floatVelocity

    balloon.pickupDelay = Int.MAX_VALUE // プレイヤーが拾えないように
    balloon.isGlowing = true // 光らせる

    item.amount -= 1

    player.sendMessage(Component.text("フグ風船を放った！", AQUA))
    player.playSound(player.location, Sound.ENTITY_PUFFER_FISH_BLOW_UP, 1f, 1.2f)

    // 風船ジャンプタスクを開始
    startBalloonJumpTask(player, pet, balloon, item.asOne())
  }

  /** 風船ジャンプタスク イルカがAIで風船を追いかけ、水面から山型にジャンプ */
  private fun startBalloonJumpTask(
      player: Player,
      entity: LivingEntity,
      balloon: Item,
      originalItem: ItemStack
  ) {
    activeFetchTasks[entity.uniqueId]?.cancel()

    // 元の移動速度を保存し、一時的にAI移動を有効化
    val originalSpeed =
        entity.getAttribute(Attribute.MOVEMENT_SPEED)?.baseValue ?: 0.0
    entity.getAttribute(Attribute.MOVEMENT_SPEED)?.baseValue =
        0.3 // イルカのデフォルト速度

    val task =
        object : BukkitRunnable() {
          var phase = 0 // 0: 風船が浮いていく＆イルカが追いかける, 1: ジャンプ中
          var ticks = 0
          var jumpTicks = 0
          var hasJumped = false
          var wasInAir = false // 空中にいたかどうか（入水検出用）

          override fun run() {
            if (!entity.isValid || entity.isDead || !player.isOnline) {
              cleanup(true)
              return
            }
            if (!entity.passengers.isEmpty()) {
              cleanup(true)
              return
            }
            if (!balloon.isValid) {
              cleanup(true)
              return
            }

            ticks++

            // 風船のパーティクル演出
            balloon.world.spawnParticle(
                Particle.BUBBLE_POP, balloon.location, 3, 0.2, 0.2, 0.2, 0.01)

            // 風船の上昇速度を徐々に減速（最初は速く、だんだんゆっくり）
            if (ticks < 60) {
              val slowdown = 1.0 - (ticks / 80.0)
              val currentVel = balloon.velocity.clone()
              currentVel.y = 0.12 * slowdown.coerceAtLeast(0.1)
              balloon.velocity = currentVel
            } else {
              // 60tick後はほぼ静止
              balloon.velocity = Vector(0.0, 0.02, 0.0)
            }

            when (phase) {
              0 -> {
                // フェーズ0: イルカが風船に向かって泳ぐ（AI有効）
                val balloonLoc = balloon.location
                val entityLoc = entity.location
                val dirToBalloon = balloonLoc.toVector().subtract(entityLoc.toVector())

                // イルカを風船の方向に向かせる（AIが自然に追いかける）
                entity.lookAt(balloonLoc, LookAnchor.EYES)

                // 水中にいる場合は風船に向かって泳ぐ（AIの補助）
                if (entity.isInWater) {
                  val swimDir = dirToBalloon.clone().normalize().multiply(0.4)
                  entity.velocity = entity.velocity.add(swimDir.multiply(0.3))
                }

                // 風船の真下付近に到達し、水面近くならジャンプ開始
                val horizontalDist = dirToBalloon.clone().setY(0.0).length()
                val isNearSurface =
                    !entity.location.clone().add(0.0, 1.5, 0.0).block.type.name.contains("WATER")

                if (horizontalDist < 3.0 && isNearSurface && !hasJumped) {
                  // ジャンプ！山型の軌道（デフォルトのイルカジャンプに近い）
                  phase = 1
                  jumpTicks = 0
                  hasJumped = true
                  wasInAir = true

                  // ジャンプ中はAIの向き制御を止める（pitch上書き防止）
                  // noAIは使わず自由に動けるようにする

                  // 風船への方向ベクトル（山型ジャンプ用）
                  val jumpDir = dirToBalloon.clone().normalize()

                  // 水平成分と垂直成分を分けて設定（山型軌道）
                  // デフォルトのイルカジャンプのように、前方に飛びながら上昇
                  val horizontalStrength = 1.0 // 水平方向の強さ（前に飛ぶ）
                  val verticalStrength = 0.9 // 上方向の強さ

                  val jumpVelocity =
                      Vector(
                          jumpDir.x * horizontalStrength,
                          verticalStrength,
                          jumpDir.z * horizontalStrength)
                  entity.velocity = jumpVelocity

                  entity.world.playSound(entity.location, Sound.ENTITY_DOLPHIN_JUMP, 1f, 1f)
                  entity.world.spawnParticle(
                      Particle.SPLASH, entity.location, 30, 1.0, 0.2, 1.0, 0.1)
                }

                // タイムアウト（200tick = 10秒）
                if (ticks > 200) {
                  player.sendMessage(Component.text("イルカが風船に届かなかった...", YELLOW))
                  cleanup(true)
                }
              }
              1 -> {
                // フェーズ1: ジャンプ中、風船に当たるか確認
                jumpTicks++

                // 空中にいるかチェック（水中でない = 空中）
                val isCurrentlyInAir = !entity.isInWater

                // 放物線の傾斜角に合わせてイルカの向きを変える
                // 速度ベクトルからyawとpitchを直接計算
                val velocity = entity.velocity
                if (velocity.lengthSquared() > 0.01 && isCurrentlyInAir) {
                  val horizontalLength =
                      kotlin.math.sqrt(velocity.x * velocity.x + velocity.z * velocity.z)

                  // yaw: 水平方向の向き（-180〜180度）
                  val yaw = Math.toDegrees(kotlin.math.atan2(-velocity.x, velocity.z)).toFloat()

                  // pitch: 垂直方向の向き（-90〜90度）
                  // 上向きはマイナス、下向きはプラス（Minecraftの仕様）
                  val pitch =
                      Math.toDegrees(-kotlin.math.atan2(velocity.y, horizontalLength)).toFloat()

                  // teleportは速度が不安定になりやすいので、AI停止中はsetRotationを使用
                  entity.setRotation(yaw, pitch)
                }

                val distToBalloon = entity.location.distance(balloon.location)

                if (distToBalloon < 2.5) {
                  // 風船にヒット！
                  balloon.world.spawnParticle(
                      Particle.HEART, balloon.location, 10, 0.5, 0.5, 0.5, 0.1)
                  balloon.world.spawnParticle(
                      Particle.BUBBLE_POP, balloon.location, 20, 0.5, 0.5, 0.5, 0.1)
                  balloon.world.playSound(
                      balloon.location, Sound.ENTITY_PUFFER_FISH_BLOW_OUT, 1f, 1.5f)
                  balloon.world.playSound(balloon.location, Sound.ENTITY_PLAYER_LEVELUP, 0.8f, 1.5f)

                  balloon.remove()
                  player.sendMessage(Component.text("ナイスジャンプ！", GREEN))

                  // アイテムを返却
                  val drop = player.world.dropItem(player.location.add(0.0, 1.0, 0.0), originalItem)
                  drop.velocity = Vector(0, 0, 0)

                  cleanup(false)
                  return
                }

                // ジャンプ後、水に戻ったら再度追いかけモードに
                if (jumpTicks > 20 && entity.isInWater) {
                  // 入水時のスプラッシュエフェクト
                  if (wasInAir) {
                    entity.world.spawnParticle(
                        Particle.SPLASH,
                        entity.location.add(0.0, 0.3, 0.0),
                        25,
                        0.5,
                        0.2,
                        0.5,
                        0.15)
                    entity.world.playSound(entity.location, Sound.ENTITY_GENERIC_SPLASH, 1.0f, 1.0f)
                    wasInAir = false
                  }
                  // 着水したらAIを戻す
                  phase = 0
                  hasJumped = false
                }

                // ジャンプタイムアウト（60tick = 3秒）
                if (jumpTicks > 60) {
                  // 返却して終了
                  cleanup(true)
                }
              }
            }
          }

          fun cleanup(returnItem: Boolean) {
            // 移動速度を元に戻す
            entity.getAttribute(Attribute.MOVEMENT_SPEED)?.baseValue =
                originalSpeed

            // 風船が残っていれば必ず削除
            if (balloon.isValid) {
              balloon.remove()
            }

            // アイテムを返却（成功時以外）
            if (returnItem) {
              val drop = player.world.dropItem(player.location.add(0.0, 1.0, 0.0), originalItem)
              drop.velocity = Vector(0, 0, 0)
            }

            this.cancel()
            activeFetchTasks.remove(entity.uniqueId)
          }
        }
    activeFetchTasks[entity.uniqueId] = task.runTaskTimer(plugin, 0L, 1L)
  }
}

// ===== File: systems/PetControlSystem.kt =====
/** プレイヤーの入力に合わせてペットの移動・ジャンプを制御する */
class PetControlSystem(
    private val plugin: JavaPlugin,
    private val particleCallback: (LivingEntity, Int) -> Unit
) : Listener {

  private val activeControlTasks = ConcurrentHashMap<UUID, BukkitRunnable>()
  private val dashEndTimes = ConcurrentHashMap<UUID, Long>()
  // 飛行MOBのイナーシャ用XZ速度キャッシュ（entity UUID → 前ティックのXZベクトル）
  private val flyingVelocities = ConcurrentHashMap<UUID, Vector>()

  @EventHandler
  fun onPlayerQuit(event: PlayerQuitEvent) {
    cleanup(event.player.uniqueId)
  }

  fun cleanup(playerId: UUID) {
    dashEndTimes.remove(playerId)
  }

  /** サーバー停止時に全タスクをキャンセルしてクリア */
  fun clearAllTasks() {
    activeControlTasks.values.forEach { it.cancel() }
    activeControlTasks.clear()
    dashEndTimes.clear()
    flyingVelocities.clear()
  }

  fun startControlTask(player: Player, entity: LivingEntity) {
    activeControlTasks[entity.uniqueId]?.cancel()
    val spec = PetRegistry.get(entity.type)

    // 騎乗開始時にAIの移動速度を0にする（勝手に動かないように）
    // ※ setAI(false) は velocity が無視されるため使用不可。属性ゼロで AI 駆動移動を抑制する
    val originalSpeed = entity.getAttribute(Attribute.MOVEMENT_SPEED)?.baseValue ?: 0.0
    val originalFlyingSpeed = entity.getAttribute(Attribute.FLYING_SPEED)?.baseValue
    entity.getAttribute(Attribute.MOVEMENT_SPEED)?.baseValue = 0.0
    entity.getAttribute(Attribute.FLYING_SPEED)?.baseValue = 0.0

    val task =
        object : BukkitRunnable() {
          var lastPos = entity.location.toVector()
          var rideDistance = 0.0
          var ticks = 0
          var lastJumpPressed = false
          var cachedParticleType = entity.particleType
          // PDC キャッシュ（毎tick読み取りを回避）
          var cachedFood = entity.foodLevel
          var cachedSpeed = entity.speedMultiplier
          var cachedSkillType = entity.skillType
          var cachedIsHovering = entity.isHovering
          var cachedJumpMul = entity.jumpMultiplier
          var localJumps = 0
          var hoverTick = -1 // -1: ホバー外、0+: 固定サイクル進行中
          var internalYVel = 0.0 // サーバー重力干渉を排除した内部管理Y速度

          override fun run() {
            val debugEnabled = PetDebugger.isEnabled(player.uniqueId)
            val tickStartNs = if (debugEnabled) System.nanoTime() else 0L

            if (!entity.isValid || !player.isOnline || player !in entity.passengers) {
              if (entity.isValid) {
                entity.isSilent = false
                // 降車時に速度属性を復元
                entity.getAttribute(Attribute.MOVEMENT_SPEED)?.baseValue = originalSpeed
                originalFlyingSpeed?.let {
                  entity.getAttribute(Attribute.FLYING_SPEED)?.baseValue = it
                }
                // LAND/WATER はAIを無効化していないので何もしない
                flyingVelocities.remove(entity.uniqueId)
              }
              if (rideDistance > 0.0 && entity.isValid) {
                entity.statDistance += rideDistance
              }
              if (localJumps > 0 && entity.isValid) {
                entity.statJumps += localJumps
              }
              cancel()
              activeControlTasks.remove(entity.uniqueId)
              return
            }
            if (entity is Sittable) entity.isSitting = false
            // アルマジロが丸まっている場合は解除
            if (entity is Armadillo && entity.state != Armadillo.State.IDLE) {
              entity.rollOut()
            }

            // 20tickごとにPDCキャッシュを更新
            if (ticks % 20 == 0) {
              cachedFood = entity.foodLevel
              cachedSpeed = entity.speedMultiplier
              cachedSkillType = entity.skillType
              cachedIsHovering = entity.isHovering
              cachedJumpMul = entity.jumpMultiplier
            }

            val progress = cachedFood.toDouble() / BigWolfConfig.maxFoodLevel
            var speed = spec.baseSpeed + (spec.maxSpeed - spec.baseSpeed) * progress
            speed *= cachedSpeed

            val inWater = entity.isInWater

            when (spec.category) {
              PetCategory.LAND -> if (inWater && cachedSkillType != 3) speed *= 0.3
              PetCategory.WATER -> {
                speed *= if (inWater) 1.2 else if (entity.type == EntityType.TURTLE) 0.3 else 0.6
              }
              PetCategory.FLYING -> if (inWater) speed *= 0.3
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

            if (spec.category == PetCategory.WATER && inWater) {
              if (cachedSkillType == 3 && cachedIsHovering) {
                val loc = entity.location
                val isSurface =
                    loc.block.type == Material.WATER ||
                        loc.clone().subtract(0.0, 0.5, 0.0).block.type == Material.WATER
                if (isSurface) {
                  speed *= 2.5
                  if (velocity.lengthSquared() > 0) {
                    velocity.normalize().multiply(speed)
                    velocity.y = 0.05
                    entity.world.spawnParticle(
                        Particle.SPLASH, entity.location, 5, 0.5, 0.0, 0.5, 0.0)
                  }
                } else if (input.isForward || input.isBackward) {
                  velocity.normalize().multiply(speed * 1.5)
                  velocity.y = 0.2
                }
              } else if (input.isForward || input.isBackward) {
                velocity.y = player.location.direction.y * speed
              }
            }

            // 20tickごとにparticleTypeキャッシュを更新（PDC読み取りを毎tick→毎秒に削減）
            if (ticks % 20 == 0) cachedParticleType = entity.particleType

            val jumpPressedNow = input.isJump

            if (spec.category == PetCategory.FLYING) {
              // ===== 飛行MOB専用速度制御（イナーシャ付き）=====
              // XZ: Lerpで加速・ドラッグで減速（慣性）
              // Y:  entity.velocity.y（重力適用済み）を基に加工（自然な重力加速）

              val prevXZ = flyingVelocities.getOrDefault(entity.uniqueId, Vector(0.0, 0.0, 0.0))

              // --- Y速度（内部管理: サーバー重力干渉を排除） ---
              // entity.velocity.y はサーバーが鶏等に重力を加算した後の値のため読まない
              // ホバー固定サイクル定数
              val hoverPeriod = 60 // 1サイクル tick数（3秒）
              val hoverHeight = 0.2 // 最大高さ（ブロック）
              // spec.jumpPower で上昇加速量・上限を MOB ごとに制御
              val jumpAccel = 0.06 * spec.jumpPower * cachedJumpMul
              val jumpCap = 0.4 * spec.jumpPower * cachedJumpMul
              // (1) XZ入力があればホバーサイクルを即キャンセル
              if (hoverTick >= 0 &&
                  (input.isForward || input.isBackward || input.isLeft || input.isRight)) {
                hoverTick = -1
              }
              val yVel =
                  when {
                    input.isJump -> {
                      if (!lastJumpPressed) localJumps++
                      hoverTick = -1 // ホバー中断
                      // 毎tick上昇推力を加算し、上限でキャップ
                      minOf(internalYVel + jumpAccel, jumpCap)
                    }
                    cachedSkillType == 3 && cachedIsHovering -> {
                      hoverTick = -1 // ホバー中断
                      // ホバースキル: Y速度を減衰して空中静止
                      if (entity.ticksLived % 10 == 0) {
                        entity.world.spawnParticle(
                            Particle.END_ROD, entity.location, 1, 0.1, 0.0, 0.1, 0.0)
                      }
                      internalYVel * 0.75
                    }
                    hoverTick >= 0 -> {
                      // (2) テレポート後などで地面から離れていたらホバーキャンセル
                      val nearGround =
                          entity.isOnGround ||
                              entity.location.clone().subtract(0.0, 0.6, 0.0).block.type.isSolid
                      if (!nearGround) {
                        hoverTick = -1
                        maxOf(internalYVel - 0.04, -0.5)
                      } else {
                        // 固定サイクルホバー: 正弦波 h(t)=H*sin(π*t/T) の速度成分
                        // v(t) = H*π/T * cos(π*t/T)
                        val phase = Math.PI * hoverTick.toDouble() / hoverPeriod
                        val vel = hoverHeight * Math.PI / hoverPeriod * Math.cos(phase)
                        hoverTick++
                        if (hoverTick >= hoverPeriod) hoverTick = -1 // サイクル終了、次の接地で再開
                        vel
                      }
                    }
                    entity.isOnGround -> {
                      // 接地: サイクル開始（cos(0)=1 なので初速 H*π/T）
                      hoverTick = 0
                      hoverHeight * Math.PI / hoverPeriod
                    }
                    // 自前重力シミュレート（全飛行MOB統一: サーバー重力に依存しない）
                    else -> maxOf(internalYVel - 0.04, -0.5)
                  }
              internalYVel = yVel

              // --- XZ速度 ---
              if (isDashing) {
                // ダッシュ中: エンティティの現在XZを慣性マップに保存してYのみ制御
                val ev = entity.velocity
                flyingVelocities[entity.uniqueId] = Vector(ev.x, 0.0, ev.z)
                ev.y = yVel
                entity.velocity = ev
                particleCallback(entity, cachedParticleType)
              } else {
                val inputVec = Vector(0.0, 0.0, 0.0)
                if (input.isForward) inputVec.add(dir)
                if (input.isBackward) inputVec.subtract(dir)
                if (input.isLeft) inputVec.subtract(right)
                if (input.isRight) inputVec.add(right)

                val targetXZ =
                    if (inputVec.lengthSquared() > 0) inputVec.normalize().multiply(speed)
                    else Vector(0.0, 0.0, 0.0)

                val newXZ =
                    if (targetXZ.lengthSquared() > 0) {
                      // 加速: 現在速度をターゲットへLerp（~3tickでフル速度）
                      prevXZ.clone().multiply(0.70).add(targetXZ.clone().multiply(0.30))
                    } else {
                      // 減速: ドラッグ係数で自然に収束（~6tickで停止）
                      prevXZ.clone().multiply(0.82)
                    }

                flyingVelocities[entity.uniqueId] = newXZ.clone()

                entity.velocity = Vector(newXZ.x, yVel, newXZ.z)
                if (targetXZ.lengthSquared() > 0) particleCallback(entity, cachedParticleType)
              }
            } else {
              // ===== LAND / WATER カテゴリ =====
              if (isDashing) {
                particleCallback(entity, cachedParticleType)
              } else {
                if (velocity.lengthSquared() > 0) {
                  val isWaterSkillActive =
                      (spec.category == PetCategory.WATER &&
                          inWater &&
                          cachedSkillType == 3 &&
                          cachedIsHovering)

                  if (!isWaterSkillActive) {
                    velocity.normalize().multiply(speed)
                    if (spec.category != PetCategory.WATER || !inWater) {
                      velocity.y = entity.velocity.y
                    }
                  }

                  if (inWater && input.isJump && spec.category != PetCategory.WATER) {
                    velocity.y = 0.4
                    if (!lastJumpPressed) {
                      localJumps++
                    }
                  }
                  entity.velocity = velocity
                  particleCallback(entity, cachedParticleType)
                }
              }

              if (input.isJump && entity.isOnGround && !inWater) {
                entity.velocity = entity.velocity.setY(spec.jumpPower * cachedJumpMul)
                if (!lastJumpPressed) {
                  localJumps++
                }
              }

              if (entity.type == EntityType.RABBIT && entity.isOnGround && !inWater) {
                if (velocity.length() > 0.1 && entity.ticksLived % 8 == 0) {
                  try {
                    entity.playEffect(EntityEffect.RABBIT_JUMP)
                  } catch (_: Exception) {
                    val vel = entity.velocity
                    vel.y = 0.4
                    entity.velocity = vel
                  }
                }
              }
            }

            lastJumpPressed = jumpPressedNow
            entity.setRotation(player.location.yaw, 0f)

            val curr = entity.location.toVector()
            val delta = curr.distance(lastPos)
            if (delta.isFinite()) {
              if (delta < 100.0) {
                rideDistance += delta.coerceAtMost(8.0)
              }
            }
            lastPos = curr

            ticks++
            val statWriteThisTick = ticks % 200 == 0
            if (statWriteThisTick) {
              if (rideDistance > 0.0) {
                entity.statDistance += rideDistance
                rideDistance = 0.0
              }
              if (localJumps > 0) {
                entity.statJumps += localJumps
                localJumps = 0
              }
            }

            if (debugEnabled) {
              val tickNs = System.nanoTime() - tickStartNs
              val jumpThisTick = input.isJump && !lastJumpPressed
              PetDebugger.recordControlTick(
                  player.uniqueId, tickNs, jumpThisTick, statWriteThisTick)
              val progress = cachedFood.toDouble() / BigWolfConfig.maxFoodLevel
              val curSpeed =
                  spec.baseSpeed + (spec.maxSpeed - spec.baseSpeed) * progress * cachedSpeed
              PetDebugger.updateActionBar(
                  player,
                  ticks,
                  cachedFood,
                  curSpeed,
                  cachedSkillType,
                  jumpThisTick,
                  tickNs)
              if (ticks % 20 == 0) {
                PetDebugger.flushControlSummary(player, cachedFood, curSpeed)
              }
            }
          }
        }

    task.runTaskTimer(plugin, 0L, 1L)
    activeControlTasks[entity.uniqueId] = task
  }

  fun setDashEndTime(player: Player, endTime: Long) {
    dashEndTimes[player.uniqueId] = endTime
  }
}

// ===== File: systems/PetSpawnSystem.kt =====
/** ペットのスポーン・初期化システム ペットの生成、セットアップ、マウント処理を管理 */
class PetSpawnSystem(
    private val plugin: JavaPlugin,
    private val mountCooldowns: MutableMap<UUID, Long>,
    private val startControlTask: (Player, LivingEntity) -> Unit,
    private val updateStats: (LivingEntity, Int, PetSpec) -> Unit,
    private val setupPetEntity: (LivingEntity, PetSpec, Player) -> Unit,
    private val onPetSpawned: (LivingEntity) -> Unit = {}
) {

  /** アクティブなペット数をカウント */
  fun countActivePets(player: Player): Int {
    return ActivePetRegistry.countByOwner(player.uniqueId.toString())
  }

  /**
   * ペットをスポーンしてプレイヤーをマウント
   *
   * @return 生成されたペットのID（失敗時はnull）
   */
  fun spawnAndMountEntity(player: Player, type: EntityType, variantName: String?): String? {
    if (countActivePets(player) >= BigWolfConfig.MAX_PET_COUNT) {
      player.sendMessage(Component.text("ペットは同時に${BigWolfConfig.MAX_PET_COUNT}匹までしか召喚できません！", RED))
      return null
    }

    val spec = PetRegistry.get(type)
    val baseLoc = player.location.clone().add(0.0, 1.0, 0.0)
    // 通常のスポーンエッグと同じ挙動: プレイヤー位置にそのままスポーン
    val safeLoc = SpawnUtils.findSafeSpawnLocation(baseLoc)
    val entity = player.world.spawnEntity(safeLoc, type) as? LivingEntity

    if (entity == null || !entity.isValid) {
      player.sendMessage(Component.text("この場所では召喚できません（保護されています）。", RED))
      return null
    }

    // petIdを先に設定（setupPetEntityでデフォルト名生成に必要）
    val petId = UUID.randomUUID().toString()
    entity.petId = petId
    entity.ownerId = player.uniqueId.toString()

    // バリアントを先に適用（setupPetEntityでバリアント名取得に必要）
    if (variantName != null) {
      VariantHandler.applyVariant(entity, variantName)
    }

    setupPetEntity(entity, spec, player)

    entity.foodLevel = 0
    entity.particleType = 0
    entity.skillUnlockedLevel = 0
    entity.skillType = 0
    entity.isHovering = false

    // v3: 性質を決定
    entity.temperament = TemperamentHelper.determineForPurchase()

    // 遊んだ記録：新規召喚はゼロ初期化
    entity.statDistance = 0.0
    entity.statJumps = 0
    entity.statToys = 0

    updateStats(entity, 0, spec)

    // ChildAISystemに登録
    onPetSpawned(entity)

    // 2tick後にマウント
    Bukkit.getScheduler()
        .runTaskLater(
            plugin,
            Runnable {
              if (entity.isValid) {
                entity.addPassenger(player)
                mountCooldowns[player.uniqueId] = System.currentTimeMillis()
                startControlTask(player, entity)
              }
            },
            2L)

    // 性質に応じたメッセージ
    val mobName = MobTranslator.toJapanese(type)
    if (entity.isAtypical()) {
      val temperamentDisplay = TemperamentHelper.getDisplayName(entity.temperament)
      player.sendMessage(Component.text("★★ $mobName を召喚しました！ [$temperamentDisplay]", LIGHT_PURPLE))
    } else {
      player.sendMessage(Component.text("$mobName を召喚しました！", AQUA))
    }
    return petId
  }
}

// ===== File: systems/ShopSystem.kt =====
/** ショップシステム ショップMOBの生成・管理、削除 */
class ShopSystem {

  /** ショップMOBを生成 */
  @Suppress("unused")
  fun spawnShopMob(admin: Player, type: EntityType, variant: String?, cost: Int, yawDeg: Float?) {
    val loc = admin.location.block.location.add(0.5, 0.0, 0.5)
    val safeLoc =
        SpawnUtils.findSafeGroundLocation(loc)
            ?: run {
              admin.sendMessage(Component.text("ここにはショップMOBを設置できません（足場と空間が必要です）。", RED))
              return
            }

    val ent = admin.world.spawnEntity(safeLoc, type) as? LivingEntity ?: return
    ent.setAI(false)
    ent.isInvulnerable = true
    ent.isSilent = true
    ent.setRemoveWhenFarAway(false)

    // 向きを設定（45度単位）
    val yaw = yawDeg ?: admin.location.yaw
    val newLoc = safeLoc.clone()
    newLoc.yaw = yaw
    ent.teleport(newLoc)

    // PDCにショップ情報を設定
    val pdc = ent.persistentDataContainer
    pdc.set(BigWolfKeys.SHOP_FLAG, PersistentDataType.BYTE, 1)
    pdc.set(BigWolfKeys.SHOP_TYPE, PersistentDataType.STRING, type.name)
    if (variant != null) {
      pdc.set(BigWolfKeys.SHOP_VARIANT, PersistentDataType.STRING, variant)
    }
    pdc.set(BigWolfKeys.SHOP_COST, PersistentDataType.INTEGER, cost)

    // バリアント適用
    if (variant != null) {
      VariantHandler.applyVariant(ent, variant)
    }

    // カスタム名
    val label = if (variant != null) "${type.name} ($variant)" else type.name
    ent.customName(Component.text("★ $label - ${cost}pt", GOLD))
    ent.isCustomNameVisible = true

    admin.sendMessage(Component.text("ショップMOBを設置しました: $label (${cost}pt)", GREEN))
  }

  /** 最も近いショップMOBを削除 */
  @Suppress("unused")
  fun removeNearestShopMob(admin: Player): Boolean {
    val nearbyEntities = admin.getNearbyEntities(10.0, 10.0, 10.0)
    val shopMob =
        nearbyEntities.filterIsInstance<LivingEntity>().firstOrNull {
          val pdc = it.persistentDataContainer
          (pdc.get(BigWolfKeys.SHOP_FLAG, PersistentDataType.BYTE) ?: 0).toInt() == 1
        }

    if (shopMob != null) {
      val typeStr =
          shopMob.persistentDataContainer.get(BigWolfKeys.SHOP_TYPE, PersistentDataType.STRING)
              ?: "UNKNOWN"
      shopMob.remove()
      admin.sendMessage(Component.text("ショップMOBを削除しました: $typeStr", YELLOW))
      return true
    } else {
      admin.sendMessage(Component.text("近くにショップMOBが見つかりません。", RED))
      return false
    }
  }

  /** ワールド内のすべてのショップMOBを削除 */
  @Suppress("unused")
  fun removeAllShopMobs(admin: Player): Int {
    var count = 0
    for (world in Bukkit.getWorlds()) {
      for (entity in world.livingEntities) {
        val pdc = entity.persistentDataContainer
        if ((pdc.get(BigWolfKeys.SHOP_FLAG, PersistentDataType.BYTE) ?: 0).toInt() == 1) {
          entity.remove()
          count++
        }
      }
    }
    admin.sendMessage(Component.text("すべてのショップMOBを削除しました (${count}体)", GREEN))
    return count
  }

  /** エンティティがショップMOBかチェック */
  fun isShopMob(entity: LivingEntity): Boolean {
    val pdc = entity.persistentDataContainer
    return (pdc.get(BigWolfKeys.SHOP_FLAG, PersistentDataType.BYTE) ?: 0).toInt() == 1
  }

  /** ショップMOBからShopContextを取得 */
  fun getShopContext(entity: LivingEntity): ShopContext? {
    if (!isShopMob(entity)) return null

    val pdc = entity.persistentDataContainer
    val typeStr = pdc.get(BigWolfKeys.SHOP_TYPE, PersistentDataType.STRING) ?: return null
    val type = runCatching { EntityType.valueOf(typeStr) }.getOrNull() ?: return null
    val variant = pdc.get(BigWolfKeys.SHOP_VARIANT, PersistentDataType.STRING)
    val cost =
        pdc.get(BigWolfKeys.SHOP_COST, PersistentDataType.INTEGER) ?: BigWolfConfig.defaultShopCost

    return ShopContext(type, variant, cost)
  }
}

// ===== File: systems/SkillSystem.kt =====
/** ペットのスキルシステムを管理 咆哮、突進、ホバリング/水面走行などのスキル発動ロジック */
class SkillSystem {

  // スキルクールダウン管理
  private val skillCooldowns = mutableMapOf<UUID, Long>()

  private var dashCallback: ((Player, Long) -> Unit)? = null

  fun setDashCallback(callback: (Player, Long) -> Unit) {
    dashCallback = callback
  }

  /**
   * スキル発動を試みる
   *
   * @return スキルが発動された場合true
   */
  fun tryActivateSkill(player: Player, entity: LivingEntity): Boolean {
    val skill = entity.skillType
    if (skill == 0) return false

    // スキル3（特殊）はトグル式なので別処理
    if (skill == 3) {
      return handleSpecialSkill(player, entity)
    }

    // クールダウンチェック
    val now = System.currentTimeMillis()
    val lastUsed = skillCooldowns[player.uniqueId] ?: 0L
    if (now - lastUsed < BigWolfConfig.SKILL_COOLDOWN_MS) {
      val remain = "%.1f".format((BigWolfConfig.SKILL_COOLDOWN_MS - (now - lastUsed)) / 1000.0)
      player.sendActionBar(Component.text("スキル準備中... 残り $remain 秒", RED))
      return false
    }

    skillCooldowns[player.uniqueId] = now

    when (skill) {
      1 -> activateRoarSkill(player, entity)
      2 -> activateDashSkill(player, entity)
    }
    return true
  }

  /** 特殊スキル（ホバリング/水面走行）のトグル処理 */
  private fun handleSpecialSkill(player: Player, entity: LivingEntity): Boolean {
    val spec = PetRegistry.get(entity.type)

    // 飛行または水生ならトグル式
    if (spec.category == PetCategory.FLYING || spec.category == PetCategory.WATER) {
      val newState = !entity.isHovering
      entity.isHovering = newState
      val status = if (newState) "ON" else "OFF"
      val color = if (newState) GREEN else RED

      val skillName = if (spec.category == PetCategory.FLYING) "ホバリング" else "水面走行"
      player.sendActionBar(Component.text("$skillName: $status", color))
      entity.world.playSound(entity.location, Sound.UI_BUTTON_CLICK, 1f, 2f)
      return true
    }
    return false
  }

  /** 咆哮スキルを発動 */
  private fun activateRoarSkill(player: Player, entity: LivingEntity) {
    // 音量を半分に
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
    player.sendActionBar(Component.text(">>> 咆哮スキル発動！! <<<", GOLD))
  }

  /** 突進スキルを発動 */
  private fun activateDashSkill(player: Player, entity: LivingEntity) {
    val direction = player.location.direction.clone().normalize()
    direction.multiply(4.0).setY(0.6)
    entity.velocity = direction
    val endTime = System.currentTimeMillis() + 800
    dashCallback?.invoke(player, endTime)
    entity.world.playSound(entity.location, Sound.ENTITY_HORSE_JUMP, 2.0f, 0.5f)
    entity.world.playSound(entity.location, Sound.ENTITY_GENERIC_EXPLODE, 1.0f, 2.0f)
    entity.world.spawnParticle(Particle.CLOUD, entity.location, 30, 0.5, 0.5, 0.5, 0.2)
    player.sendActionBar(Component.text(">>> 突進！ <<<", AQUA))
  }

  /** プレイヤー切断時のクリーンアップ */
  fun cleanup(playerId: UUID) {
    skillCooldowns.remove(playerId)
  }
}
