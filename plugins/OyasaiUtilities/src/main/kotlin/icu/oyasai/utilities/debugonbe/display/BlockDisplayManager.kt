package icu.oyasai.utilities.debugonbe.display

import icu.oyasai.utilities.debugonbe.data.PlacementDataStore
import icu.oyasai.utilities.debugonbe.data.TogoSettingsStore
import icu.oyasai.utilities.debugonbe.data.TogoUserSettings
import icu.oyasai.utilities.debugonbe.model.ArmorStandPlacement
import icu.oyasai.utilities.debugonbe.model.BlockShape
import icu.oyasai.utilities.debugonbe.model.BlockStateKey
import icu.oyasai.utilities.debugonbe.model.TogoSettings
import icu.oyasai.utilities.debugonbe.model.TogoSettingsLimits
import net.kyori.adventure.text.serializer.legacy.LegacyComponentSerializer
import org.bukkit.Location
import org.bukkit.Material
import org.bukkit.block.Block
import org.bukkit.entity.Player
import org.bukkit.inventory.ItemStack
import org.bukkit.plugin.Plugin

/**
 * ブロック → 防具立て表示の管理クラス。
 * - スポーン済みの防具立てを実行プレイヤーごとに管理する
 * - ブロックの変化に応じて実行プレイヤーの画面だけ防具立てを更新する
 * - /cbm refresh で実行プレイヤー周辺のブロックを一時的(30秒)にフェイク置換する
 */
private data class FakeStandInfo(val id: Int, val footBlock: Block?)

private data class CandidateBlock(
    val block: Block,
    val shape: BlockShape,
    val placements: List<ArmorStandPlacement>,
    val distanceSquared: Double,
)

class BlockDisplayManager(
    val plugin: Plugin,
    private val store: PlacementDataStore,
    private val spawner: ArmorStandSpawner,
    private val hider: PacketBlockHider,
    private val settingsStore: TogoSettingsStore,
) {

  /** プレイヤーごと、ワールドごと、ブロック座標ごとにスポーン済みフェイク防具立てを管理する。 Key: "playerUUID:worldName:x,y,z" */
  private val spawnedStands: MutableMap<String, MutableList<FakeStandInfo>> = mutableMapOf()

  /**
   * sendFakeLightLevel で光データを偽装したブロック位置をプレイヤーごとに管理する。 outer Key: playerUUID, inner Set:
   * "worldName:x,y,z"
   */
  private val fakeLitBlocks: MutableMap<String, MutableSet<String>> = mutableMapOf()

  /** プレイヤーごと自動消去用の進行中タスク。 Key: playerUUID */
  private val activeRefreshTasks: MutableMap<String, org.bukkit.scheduler.BukkitTask> =
      mutableMapOf()

  /** プレイヤーごとの変換設定キャッシュ。永続データは TogoSettingsStore が管理する。 */
  private val playerSettings: MutableMap<String, TogoSettings> = mutableMapOf()

  /** プレイヤーごとのデバッグ棒自動Togo設定キャッシュ。 */
  private val debugStickAutoEnabled: MutableMap<String, Boolean> = mutableMapOf()

  // ────────────────────────────────────────────────────────────────
  // 公開 API
  // ────────────────────────────────────────────────────────────────

  /** プレイヤーの現在の変換設定を取得する。 */
  fun getSettings(player: Player): TogoSettings {
    val playerUuid = player.uniqueId.toString()
    return playerSettings.getOrPut(playerUuid) {
      settingsStore.getUser(player.uniqueId).togoSettings
    }
  }

  /** プレイヤーの変換設定を置き換える。 */
  fun setSettings(player: Player, settings: TogoSettings) {
    playerSettings[player.uniqueId.toString()] = settings
    saveSettings(player, settings)
  }

  /** プレイヤーの制限数を設定する。null はデフォルト値へ戻す。 */
  fun setLimit(player: Player, limit: Int?): Boolean {
    val newLimit = limit ?: TogoSettings().maxBlocks
    if (newLimit !in TogoSettingsLimits.MIN_MAX_BLOCKS..TogoSettingsLimits.MAX_MAX_BLOCKS) {
      return false
    }
    setSettings(player, getSettings(player).copy(maxBlocks = newLimit))
    return true
  }

  /** プレイヤーの制限数を取得する。 */
  fun getLimit(player: Player): Int {
    return getSettings(player).maxBlocks
  }

  /** プレイヤーのフィルタを設定する。null は対応済みの全形状を表す。 */
  fun setFilter(player: Player, shapes: Set<BlockShape>?) {
    setSettings(player, getSettings(player).copy(enabledShapes = shapes?.toSet()))
  }

  /** プレイヤーのフィルタを取得する。 */
  fun getFilter(player: Player): Set<BlockShape>? {
    return getSettings(player).enabledShapes
  }

  /** プレイヤーの走査半径を設定する。 */
  fun setRadius(player: Player, radius: Int): Boolean {
    if (radius !in TogoSettingsLimits.MIN_RADIUS..TogoSettingsLimits.MAX_RADIUS) return false
    setSettings(player, getSettings(player).copy(radius = radius))
    return true
  }

  /** プレイヤーの走査半径を取得する。 */
  fun getRadius(player: Player): Int {
    return getSettings(player).radius
  }

  /** プレイヤーの変換時間を秒単位で設定する。 */
  fun setDurationSeconds(player: Player, durationSeconds: Int): Boolean {
    if (
        durationSeconds !in
            TogoSettingsLimits.MIN_DURATION_SECONDS..TogoSettingsLimits.MAX_DURATION_SECONDS
    ) {
      return false
    }
    setSettings(player, getSettings(player).copy(durationSeconds = durationSeconds))
    return true
  }

  /** プレイヤーの変換時間を秒単位で取得する。 */
  fun getDurationSeconds(player: Player): Int {
    return getSettings(player).durationSeconds
  }

  /** 全プレイヤー共通のフェイクブロック置き換え先を設定する。AIRでデフォルトへ戻す。 */
  fun setReplacementMaterial(material: Material): Boolean {
    if (!material.isBlock) return false
    settingsStore.setGlobal(settingsStore.getGlobal().copy(replacementMaterial = material))
    plugin.server.onlinePlayers.forEach(::syncForPlayer)
    return true
  }

  /** 全プレイヤー共通のフェイクブロック置き換え先を取得する。 */
  fun getReplacementMaterial(): Material = settingsStore.getGlobal().replacementMaterial

  /** ユーザー別のデバッグ棒自動Togo設定を変更する。 */
  fun setDebugStickAutoEnabled(player: Player, enabled: Boolean) {
    val playerUuid = player.uniqueId.toString()
    debugStickAutoEnabled[playerUuid] = enabled
    saveSettings(player, getSettings(player), enabled)
  }

  /** ユーザー別のデバッグ棒自動Togo設定を取得する。 */
  fun isDebugStickAutoEnabled(player: Player): Boolean {
    val playerUuid = player.uniqueId.toString()
    return debugStickAutoEnabled.getOrPut(playerUuid) {
      settingsStore.getUser(player.uniqueId).debugStickAutoEnabled
    }
  }

  /** プレイヤーが現在表示リフレッシュ中（ON）であるか判定 */
  fun isRefreshing(player: Player): Boolean {
    return activeRefreshTasks.containsKey(player.uniqueId.toString())
  }

  /** プレイヤー向けのフェイク防具立て表示が指定ブロックに存在するか判定する。 */
  fun isDisplayed(player: Player, block: Block): Boolean {
    return spawnedStands.containsKey(blockKey(player, block))
  }

  /** プレイヤーのアクティブなリフレッシュ表示をすべて消去し、タスクをキャンセルする */
  fun clearRefresh(player: Player) {
    val playerUuid = player.uniqueId.toString()
    activeRefreshTasks.remove(playerUuid)?.cancel()

    val world = player.world
    val keysToRemove = spawnedStands.keys.filter { it.startsWith("$playerUuid:${world.name}:") }
    keysToRemove.forEach { key ->
      val parts = key.split(":")
      if (parts.size >= 3) {
        val coords = parts[2].split(",")
        if (coords.size == 3) {
          val x = coords[0].toInt()
          val y = coords[1].toInt()
          val z = coords[2].toInt()
          val block = world.getBlockAt(x, y, z)
          removeDisplay(player, block)
        }
      }
    }
  }

  /**
   * ブロックの表示を除去し、防具立てを削除して元のブロックを復元する。
   *
   * @param player 対象プレイヤー
   * @param block 対象ブロック
   */
  fun removeDisplay(player: Player, block: Block) {
    val key = blockKey(player, block)
    val stands = spawnedStands.remove(key) ?: return
    val playerUuid = player.uniqueId.toString()
    val litKeys = fakeLitBlocks.getOrDefault(playerUuid, mutableSetOf())

    // フェイク防具立てを削除
    hider.removeFakeArmorStands(player, stands.map { it.id })

    stands.forEach { info ->
      val footBlock = info.footBlock
      if (footBlock != null) {
        // 光データ偽装を復元する（実際のサーバー側の光レベルを送信）
        val lKey = blockPosKey(footBlock)
        if (litKeys.remove(lKey)) {
          hider.restoreRealLightLevel(player, footBlock)
        }
      }
    }
    hider.restoreBlock(player, block)
  }

  /**
   * プレイヤー周辺の対象ブロックを一括で防具立て表示に変換し、指定秒後に自動的に復元する。
   *
   * @param player 中心プレイヤー (このプレイヤーの画面にのみ反映)
   * @param radius 走査半径 (ブロック数)
   * @param durationSeconds 表示を維持する秒数
   */
  fun refreshAround(player: Player, radius: Int, durationSeconds: Int) {
    val settings =
        getSettings(player)
            .copy(
                radius = radius,
                durationSeconds = durationSeconds,
            )
    refreshAround(player, settings)
  }

  /** プレイヤーに保存された設定で周囲の対象ブロックを一度だけ変換する。 */
  fun refreshAround(player: Player) {
    refreshAround(player, getSettings(player))
  }

  /** 指定された設定で周囲の対象ブロックを一度だけ変換する。 */
  fun refreshAround(
      player: Player,
      settings: TogoSettings,
      showMessageInActionBar: Boolean = false,
  ) {
    val playerUuid = player.uniqueId.toString()
    // 既存の表示があれば解除する
    clearRefresh(player)

    val center = player.location
    val world = center.world ?: return
    var count = 0
    val spawnedBlocks = mutableListOf<Block>()
    val filter = settings.enabledShapes

    val candidateBlocks = mutableListOf<CandidateBlock>()

    for (x in -settings.radius..settings.radius) {
      for (y in -settings.radius..settings.radius) {
        for (z in -settings.radius..settings.radius) {
          val block = world.getBlockAt(center.blockX + x, center.blockY + y, center.blockZ + z)
          val shape = BlockShape.of(block.blockData) ?: continue

          // フィルタが設定されている場合は、含まれていないシェイプをスキップ
          if (filter != null && !filter.contains(shape)) continue

          val stateKey = BlockStateKey.of(block.blockData, shape)
          val placements = store.get(shape).getState(stateKey)
          if (placements.isEmpty()) continue

          candidateBlocks.add(
              CandidateBlock(
                  block = block,
                  shape = shape,
                  placements = placements,
                  distanceSquared = block.location.distanceSquared(center),
              )
          )
        }
      }
    }

    // 距離順（近い順）にソート
    candidateBlocks.sortBy { it.distanceSquared }

    // 制限を適用
    val blocksToProcess = candidateBlocks.take(settings.maxBlocks)

    for (candidate in blocksToProcess) {
      if (displayCandidate(player, candidate)) {
        spawnedBlocks.add(candidate.block)
        count++
      }
    }

    plugin.logger.info(
        "[DOB] Togo started: player=${player.name}, radius=${settings.radius}, blocks=$count"
    )

    val message = "§a[DOB] §f${count} 個のブロックを置き換えました (半径 ${settings.radius})"
    if (showMessageInActionBar) {
      player.sendActionBar(LegacyComponentSerializer.legacySection().deserialize(message))
    } else {
      player.sendMessage(message)
    }

    if (spawnedBlocks.isNotEmpty()) {
      val task =
          plugin.server.scheduler.runTaskLater(
              plugin,
              Runnable { clearRefresh(player) },
              settings.durationSeconds * 20L,
          )
      activeRefreshTasks[playerUuid] = task
    }
  }

  /** 表示中の1ブロックだけをサーバー側の最新状態から再生成する。 */
  fun refreshBlock(player: Player, block: Block) {
    val key = blockKey(player, block)
    if (!spawnedStands.containsKey(key)) return

    removeDisplay(player, block)

    val settings = getSettings(player)
    val shape = BlockShape.of(block.blockData) ?: return
    if (settings.enabledShapes?.contains(shape) == false) return

    val placements = store.get(shape).getState(BlockStateKey.of(block.blockData, shape))
    if (placements.isEmpty()) return

    displayCandidate(
        player,
        CandidateBlock(
            block = block,
            shape = shape,
            placements = placements,
            distanceSquared = 0.0,
        ),
    )

    // デバッグ棒の処理後にサーバーが送る実ブロック更新パケットが遅れて届く場合があるため、
    // 防具立て再生成の後でもう一度ダミーブロックを送る。
    plugin.server.scheduler.runTaskLater(
        plugin,
        Runnable {
          if (isDisplayed(player, block)) {
            hider.hideBlock(player, block, getReplacementMaterial())
          }
        },
        1L,
    )
  }

  private fun displayCandidate(player: Player, candidate: CandidateBlock): Boolean {
    val block = candidate.block
    val shape = candidate.shape
    val placements = candidate.placements
    val key = blockKey(player, block)

    // 表示対象ブロックを置き換え先へ偽装する。
    hider.hideBlock(player, block, getReplacementMaterial())

    if (spawnedStands.containsKey(key)) return false

    val world = block.world
    val stands =
        placements.map { placement ->
          // 板ガラス (GLASS_PANE) & 鉄格子 (IRON_BARS) の特別対応: 軸 (中心) の場合はガラスブロック/なめらかな石、それ以外 (腕)
          // は板ガラス/鉄格子を使用
          val baseMaterial =
              if (shape == BlockShape.GLASS_PANE || shape == BlockShape.IRON_BARS) {
                val postPlacements =
                    store
                        .get(shape)
                        .getState("east=false,north=false,south=false,waterlogged=false,west=false")
                val postXZs = postPlacements.map { it.offsetX to it.offsetZ }.toSet()
                val isPost =
                    postXZs.any { (px, pz) ->
                      Math.abs(placement.offsetX - px) < 0.01 &&
                          Math.abs(placement.offsetZ - pz) < 0.01
                    }
                if (isPost) {
                  if (shape == BlockShape.GLASS_PANE) {
                    MaterialResolver.getGlassBlockMaterial(block.type)
                  } else {
                    Material.SMOOTH_STONE
                  }
                } else {
                  block.type
                }
              } else {
                MaterialResolver.getBaseMaterial(block.type)
              }

          val resolvedPlacement =
              placement.copy(
                  headItem = MaterialResolver.resolveItem(baseMaterial, placement.headItem),
                  chestItem = MaterialResolver.resolveItem(baseMaterial, placement.chestItem),
                  legsItem = MaterialResolver.resolveItem(baseMaterial, placement.legsItem),
                  feetItem = MaterialResolver.resolveItem(baseMaterial, placement.feetItem),
                  // 右手のアイテムが未設定の場合は、ブロックのベース素材を使用
                  mainHandItem =
                      MaterialResolver.resolveItem(baseMaterial, placement.mainHandItem)
                          ?: ItemStack(baseMaterial),
                  offHandItem = MaterialResolver.resolveItem(baseMaterial, placement.offHandItem),
              )

          // ブロックの底辺中心を原点にしてオフセットを適用
          val spawnLoc =
              Location(
                  world,
                  block.x + 0.5 + resolvedPlacement.offsetX,
                  block.y.toDouble() + resolvedPlacement.offsetY,
                  block.z + 0.5 + resolvedPlacement.offsetZ,
                  resolvedPlacement.yaw,
                  0f,
              )

          // パケットでフェイク防具立てをスポーン
          val standId = hider.spawnFakeArmorStand(player, spawnLoc, resolvedPlacement)

          // Bedrock Edition（Geyser 越し）で地中に埋まった防具立ての
          // 装備品が真っ黒になる問題を修正する。
          // ClientboundLightUpdatePacket でブロック種別を変えずに
          // 光データだけを 15 に偽装する。
          // ブロックの見た目は一切変わらないため視覚的な穴は生まれない。
          val footBlock = spawnLoc.block
          var hasFakeLight = false
          if (footBlock.type.isOccluding) {
            hider.sendFakeLightLevel(player, footBlock, block)
            val playerUuid = player.uniqueId.toString()
            fakeLitBlocks.getOrPut(playerUuid) { mutableSetOf() }.add(blockPosKey(footBlock))
            hasFakeLight = true
          }

          FakeStandInfo(standId, if (hasFakeLight) footBlock else null)
        }
    spawnedStands[key] = stands.toMutableList()
    return true
  }

  /** 新たにオンラインになったプレイヤーへ、自分が持っている表示を適用する。 */
  fun syncForPlayer(player: Player) {
    val world = player.world

    // 自分がrefreshしたブロックがあれば非表示にする
    spawnedStands.keys
        .filter { it.startsWith("${player.uniqueId}:${world.name}:") }
        .mapNotNull { key ->
          val parts = key.split(":")
          if (parts.size >= 3) {
            val coords = parts[2].split(",")
            if (coords.size == 3) {
              val x = coords[0].toInt()
              val y = coords[1].toInt()
              val z = coords[2].toInt()
              world.getBlockAt(x, y, z)
            } else null
          } else null
        }
        .forEach { block -> hider.hideBlock(player, block, getReplacementMaterial()) }
  }

  /** すべての管理済み防具立てを除去する (プラグイン無効時など) */
  fun removeAll() {
    spawnedStands.forEach { (key, stands) ->
      val parts = key.split(":")
      if (parts.size >= 2) {
        val ownerUuidStr = parts[0]
        val player = plugin.server.getPlayer(java.util.UUID.fromString(ownerUuidStr))
        if (player != null && player.isOnline) {
          hider.removeFakeArmorStands(player, stands.map { it.id })
        }
      }
    }
    spawnedStands.clear()
    fakeLitBlocks.clear()

    // フェイク FallingBlock をすべて削除して元のブロックに戻す
    hider.clearAll()
  }

  /** プレイヤーがログアウトしたときのクリーンアップ */
  fun clearPlayer(player: Player) {
    val playerUuid = player.uniqueId.toString()
    clearRefresh(player)
    playerSettings.remove(playerUuid)
    debugStickAutoEnabled.remove(playerUuid)

    // 光データ偽装のキー情報をクリア
    fakeLitBlocks.remove(playerUuid)

    // フェイクブロックパケット側の管理データをクリア
    hider.clearPlayer(player)
  }

  // ────────────────────────────────────────────────────────────────
  // 内部ユーティリティ
  // ────────────────────────────────────────────────────────────────

  private fun blockKey(player: Player, block: Block): String =
      "${player.uniqueId}:${block.world.name}:${block.x},${block.y},${block.z}"

  private fun blockPosKey(block: Block): String =
      "${block.world.name}:${block.x},${block.y},${block.z}"

  private fun saveSettings(
      player: Player,
      settings: TogoSettings,
      debugStickAutoEnabled: Boolean = isDebugStickAutoEnabled(player),
  ) {
    settingsStore.setUser(
        player.uniqueId,
        TogoUserSettings(
            togoSettings = settings,
            debugStickAutoEnabled = debugStickAutoEnabled,
        ),
    )
  }
}
