package icu.oyasai.utilities.debugonbe.display

import icu.oyasai.utilities.debugonbe.data.PlacementDataStore
import icu.oyasai.utilities.debugonbe.model.BlockShape
import icu.oyasai.utilities.debugonbe.model.BlockStateKey
import org.bukkit.Location
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

class BlockDisplayManager(
    val plugin: Plugin,
    private val store: PlacementDataStore,
    private val spawner: ArmorStandSpawner,
    private val hider: PacketBlockHider,
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

  /** プレイヤーごとの表示対象フィルタ (空ならすべて表示) */
  private val playerFilters: MutableMap<String, Set<BlockShape>> = mutableMapOf()

  // ────────────────────────────────────────────────────────────────
  // 公開 API
  // ────────────────────────────────────────────────────────────────

  /** プレイヤーのフィルタを設定する */
  fun setFilter(player: Player, shapes: Set<BlockShape>?) {
    val uuid = player.uniqueId.toString()
    if (shapes == null || shapes.isEmpty()) {
      playerFilters.remove(uuid)
    } else {
      playerFilters[uuid] = shapes
    }
  }

  /** プレイヤーのフィルタを取得する */
  fun getFilter(player: Player): Set<BlockShape>? {
    return playerFilters[player.uniqueId.toString()]
  }

  /** プレイヤーが現在表示リフレッシュ中（ON）であるか判定 */
  fun isRefreshing(player: Player): Boolean {
    return activeRefreshTasks.containsKey(player.uniqueId.toString())
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
    val playerUuid = player.uniqueId.toString()
    // 既存の表示があれば解除する
    clearRefresh(player)

    val center = player.location
    val world = center.world ?: return
    var count = 0
    val spawnedBlocks = mutableListOf<Block>()
    val filter = playerFilters[player.uniqueId.toString()]

    for (x in -radius..radius) {
      for (y in -radius..radius) {
        for (z in -radius..radius) {
          val block = world.getBlockAt(center.blockX + x, center.blockY + y, center.blockZ + z)
          val shape = BlockShape.of(block.blockData) ?: continue

          // フィルタが設定されている場合は、含まれていないシェイプをスキップ
          if (filter != null && !filter.contains(shape)) continue

          val stateKey = BlockStateKey.of(block.blockData, shape)
          val placements = store.get(shape).getState(stateKey)
          if (placements.isEmpty()) continue

          val key = blockKey(player, block)

          // 1. 表示対象ブロックを AIR に偽装する
          hider.hideBlock(player, block)

          if (!spawnedStands.containsKey(key)) {
            val stands =
                placements.map { placement ->
                  // 板ガラス (GLASS_PANE) & 鉄格子 (IRON_BARS) の特別対応: 軸 (中心) の場合はガラスブロック/なめらかな石、それ以外 (腕)
                  // は板ガラス/鉄格子を使用
                  val baseMaterial =
                      if (shape == BlockShape.GLASS_PANE || shape == BlockShape.IRON_BARS) {
                        val postPlacements =
                            store
                                .get(shape)
                                .getState(
                                    "east=false,north=false,south=false,waterlogged=false,west=false"
                                )
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
                            org.bukkit.Material.SMOOTH_STONE
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
                          chestItem =
                              MaterialResolver.resolveItem(baseMaterial, placement.chestItem),
                          legsItem = MaterialResolver.resolveItem(baseMaterial, placement.legsItem),
                          feetItem = MaterialResolver.resolveItem(baseMaterial, placement.feetItem),
                          // 右手のアイテムが未設定の場合は、ブロックのベース素材を使用
                          mainHandItem =
                              MaterialResolver.resolveItem(baseMaterial, placement.mainHandItem)
                                  ?: ItemStack(baseMaterial),
                          offHandItem =
                              MaterialResolver.resolveItem(baseMaterial, placement.offHandItem),
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

                  // 2. Bedrock Edition（Geyser 越し）で地中に埋まった防具立ての
                  //    装備品が真っ黒になる問題を修正する。
                  //    ClientboundLightUpdatePacket でブロック種別を変えずに
                  //    光データだけを 15 に偽装する。
                  //    ブロックの見た目は一切変わらないため視覚的な穴は生まれない。
                  val footBlock = spawnLoc.block
                  var hasFakeLight = false
                  if (footBlock.type.isOccluding) {
                    hider.sendFakeLightLevel(player, footBlock, block)
                    val playerUuid = player.uniqueId.toString()
                    fakeLitBlocks
                        .getOrPut(playerUuid) { mutableSetOf() }
                        .add(blockPosKey(footBlock))
                    hasFakeLight = true
                  }

                  FakeStandInfo(standId, if (hasFakeLight) footBlock else null)
                }
            spawnedStands[key] = stands.toMutableList()
            spawnedBlocks.add(block)
            count++
          }
        }
      }
    }

    player.sendMessage("§a[CBM] §f${count} 個のブロックを置き換えました (半径 ${radius})")

    if (spawnedBlocks.isNotEmpty()) {
      val task =
          plugin.server.scheduler.runTaskLater(
              plugin,
              Runnable { clearRefresh(player) },
              durationSeconds * 20L,
          )
      activeRefreshTasks[playerUuid] = task
    }
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
        .forEach { block -> hider.hideBlock(player, block) }
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
}
