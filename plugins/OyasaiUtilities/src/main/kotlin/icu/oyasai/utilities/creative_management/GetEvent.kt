package icu.oyasai.utilities.creative_management

import icu.oyasai.utilities.OyasaiUtilities.plugin
import io.papermc.paper.event.player.PlayerItemFrameChangeEvent
import kotlin.random.Random
import org.bukkit.*
import org.bukkit.block.DoubleChest
import org.bukkit.entity.HumanEntity
import org.bukkit.entity.Player
import org.bukkit.event.Event
import org.bukkit.event.EventHandler
import org.bukkit.event.EventPriority
import org.bukkit.event.Listener
import org.bukkit.event.block.*
import org.bukkit.event.entity.EntityExplodeEvent
import org.bukkit.event.entity.ItemMergeEvent
import org.bukkit.event.inventory.InventoryClickEvent
import org.bukkit.event.player.PlayerArmorStandManipulateEvent
import org.bukkit.event.player.PlayerAttemptPickupItemEvent
import org.bukkit.event.player.PlayerDropItemEvent
import org.bukkit.event.player.PlayerInteractEvent
import org.bukkit.inventory.BlockInventoryHolder
import org.bukkit.inventory.meta.SpawnEggMeta
import org.bukkit.persistence.PersistentDataType
import org.bukkit.util.Vector

object GetEvent : Listener {
  /** クリエ関連用Namespace */
  private val NAMESPACE = NamespacedKey(plugin, "CreativeBlock")

  /** 失敗時の音 */
  private fun Player.missSound() {
    this.playSound(this, Sound.BLOCK_NOTE_BLOCK_BIT, SoundCategory.PLAYERS, 1F, 0.5F)
  }

  private fun HumanEntity.missSound() {
    if (this is Player) this.missSound()
  }

  /** クリエ設置ブロックからアイテムをドロップさせない */
  @EventHandler(priority = EventPriority.HIGHEST)
  fun blockDropEvent(e: BlockDropItemEvent) {
    if (e.isCancelled) return
    if (e.items.isEmpty()) {
      if (e.player.gameMode != GameMode.CREATIVE) return
    }
    if (!CreativeBlockStore.isMarked(e.block)) return
    CreativeBlockStore.remove(e.block)
    e.isCancelled = true
  }

  /** ブロック設置時クリエならタグ付与 */
  @EventHandler(priority = EventPriority.HIGHEST)
  fun blockBuildEvent(e: BlockPlaceEvent) {
    if (e.isCancelled) return
    if (e.blockPlaced.type.isAir) return
    if (e.player.gameMode == GameMode.CREATIVE) {
      CreativeBlockStore.mark(e.blockPlaced)
    } else {
      // 以前に壊れた落下ブロック等の古い印が、この座標に再利用されないようにする。
      CreativeBlockStore.remove(e.blockPlaced)
    }
  }

  @EventHandler(priority = EventPriority.HIGHEST, ignoreCancelled = true)
  fun pistonExtendEvent(e: BlockPistonExtendEvent) {
    CreativeBlockStore.move(e.blocks, e.direction.modX, e.direction.modY, e.direction.modZ)
  }

  @EventHandler(priority = EventPriority.HIGHEST, ignoreCancelled = true)
  fun pistonRetractEvent(e: BlockPistonRetractEvent) {
    CreativeBlockStore.move(e.blocks, e.direction.modX, e.direction.modY, e.direction.modZ)
  }

  @EventHandler(priority = EventPriority.HIGHEST, ignoreCancelled = true)
  fun blockExplodeEvent(e: BlockExplodeEvent) {
    e.blockList().forEach(CreativeBlockStore::remove)
  }

  @EventHandler(priority = EventPriority.HIGHEST, ignoreCancelled = true)
  fun entityExplodeEvent(e: EntityExplodeEvent) {
    e.blockList().forEach(CreativeBlockStore::remove)
  }

  @EventHandler(priority = EventPriority.HIGHEST, ignoreCancelled = true)
  fun blockBurnEvent(e: BlockBurnEvent) {
    CreativeBlockStore.remove(e.block)
  }

  @EventHandler(priority = EventPriority.HIGHEST, ignoreCancelled = true)
  fun blockFadeEvent(e: BlockFadeEvent) {
    CreativeBlockStore.remove(e.block)
  }

  /** ブロックをクリックしたときの制御(色々なブロック) */
  @EventHandler(priority = EventPriority.HIGH)
  fun blockClickEvent(e: PlayerInteractEvent) {
    if (e.isCancelled) return
    if (e.player.hasPermission("cm.bypass")) return
    if (e.item?.itemMeta is SpawnEggMeta) {
      if (e.player.gameMode == GameMode.CREATIVE) {
        if (!e.player.hasPermission("cm.bypass.spawn_egg")) {
          e.isCancelled = true
          e.setUseInteractedBlock(Event.Result.DENY)
          e.setUseItemInHand(Event.Result.DENY)
          return
        }
      }
    }
    val block = e.clickedBlock ?: return
    if (
      block.type == Material.CHISELED_BOOKSHELF ||
      block.type == Material.DECORATED_POT ||
      block.type == Material.CAMPFIRE ||
      block.type == Material.SOUL_CAMPFIRE
    ) {
      if (CreativeBlockStore.isMarked(block)) {
        // クリエブロック
        if (e.player.gameMode != GameMode.CREATIVE) {
          // クリエじゃないので弄れない
          e.isCancelled = true
          e.setUseInteractedBlock(Event.Result.DENY)
          e.setUseItemInHand(Event.Result.DENY)
        }
      } else {
        // サバイバルブロック
        if (e.player.gameMode == GameMode.CREATIVE) {
          // クリエなので弄れない
          e.isCancelled = true
          e.setUseInteractedBlock(Event.Result.DENY)
          e.setUseItemInHand(Event.Result.DENY)
        }
      }
    }
  }

  /** クリエ状態でコンテナを開けたときの制御 */
  @EventHandler(priority = EventPriority.HIGH)
  fun containerEvent(e: InventoryClickEvent) {
    if (e.isCancelled) return
    if (e.whoClicked.hasPermission("cm.bypass")) return
    val loc = e.inventory.location ?: return
    val holder = e.inventory.holder ?: return
    if (holder is Player) return
    val isSurvival = e.whoClicked.gameMode == GameMode.SURVIVAL
    val isBlockHolder = holder is BlockInventoryHolder
    val isDoubleChest = holder is DoubleChest

    if (isBlockHolder || isDoubleChest) {
      // ブロックにあるインベントリの場合
      if (CreativeBlockStore.isMarked(loc.block)) {
        // クリエブロックのインベントリ
        if (isSurvival) {
          // クリエじゃないので弄れない
          e.isCancelled = true
          e.whoClicked.missSound()
        }
      } else {
        // サバイバルブロックのインベントリ
        if (!isSurvival) {
          // サバイバルじゃないのでいじれない
          e.isCancelled = true
          e.whoClicked.missSound()
        }
      }
    } else {
      // ブロック以外のインベントリの場合
      if (!isSurvival) {
        // クリエなので弄れない
        e.isCancelled = true
        e.whoClicked.missSound()
      }
    }
  }

  /** クリエで設置したディスペンサー系の制御 */
  @EventHandler(priority = EventPriority.HIGH)
  fun dispenseEvent(e: BlockDispenseEvent) {
    if (e.isCancelled) return
    if (!CreativeBlockStore.isMarked(e.block)) return
    val item = e.item.clone()
    if (item.itemMeta is SpawnEggMeta) {
      e.isCancelled = true
      return
    }
    item.editMeta { it.persistentDataContainer.set(NAMESPACE, PersistentDataType.BOOLEAN, true) }
    e.item = item
  }

  @EventHandler(priority = EventPriority.HIGH)
  fun dispenseArmorEvent(e: BlockDispenseArmorEvent) {
    if (e.isCancelled) return
    if (!CreativeBlockStore.isMarked(e.block)) return
    val item = e.item.clone()
    item.editMeta { it.persistentDataContainer.set(NAMESPACE, PersistentDataType.BOOLEAN, true) }
    e.item = item
  }

  @EventHandler(priority = EventPriority.HIGH)
  fun cookEvent(e: BlockCookEvent) {
    if (e.isCancelled) return
    if (!CreativeBlockStore.isMarked(e.block)) return
    val item = e.result.clone()
    item.editMeta { it.persistentDataContainer.set(NAMESPACE, PersistentDataType.BOOLEAN, true) }
    e.result = item
  }

  /** アーマースタンドの操作制御 */
  @EventHandler(priority = EventPriority.HIGH)
  fun armorStandEvent(e: PlayerArmorStandManipulateEvent) {
    if (e.isCancelled) return
    if (e.player.hasPermission("cm.bypass")) {
      if (!e.armorStandItem.isEmpty) {
        e.armorStandItem.editMeta { it.persistentDataContainer.remove(NAMESPACE) }
      }
      return
    }
    if (e.armorStandItem.isEmpty) {
      // アーマースタンドの装備が空の場合
      if (e.player.gameMode == GameMode.CREATIVE) {
        e.playerItem.editMeta {
          it.persistentDataContainer.set(NAMESPACE, PersistentDataType.BOOLEAN, true)
        }
      }
    } else {
      // アーマースタンドの装備がある場合
      val item = e.armorStandItem
      if (item.persistentDataContainer.has(NAMESPACE)) {
        // クリエアイテム
        if (e.player.gameMode != GameMode.CREATIVE) {
          // クリエじゃないので弄れない
          e.isCancelled = true
        } else {
          // クリエなので弄れる
          item.editMeta { it.persistentDataContainer.remove(NAMESPACE) }
        }
      } else {
        // サバイバルアイテム
        if (e.player.gameMode == GameMode.CREATIVE) {
          // クリエなので弄れない
          e.isCancelled = true
        }
      }
    }
  }

  /** プレイヤーのアイテム拾う挙動制御 */
  @EventHandler(priority = EventPriority.HIGH)
  fun pickupItemEvent(e: PlayerAttemptPickupItemEvent) {
    if (e.isCancelled) return
    if (e.player.hasPermission("cm.bypass")) {
      e.item.itemStack.editMeta { it.persistentDataContainer.remove(NAMESPACE) }
      return
    }
    if (
      e.item.itemStack.persistentDataContainer.has(NAMESPACE) ||
      e.item.persistentDataContainer.has(NAMESPACE)
    ) {
      if (e.player.gameMode != GameMode.CREATIVE) {
        // クリエじゃないので拾えない
        e.isCancelled = true
      } else {
        // クリエなので拾える
        e.item.itemStack.editMeta { it.persistentDataContainer.remove(NAMESPACE) }
      }
    } else {
      if (e.player.gameMode == GameMode.CREATIVE) {
        // クリエなので拾えない
        e.isCancelled = true
      }
    }
  }

  /** プレイヤーがアイテムをドロップしたときの制御 */
  @EventHandler(priority = EventPriority.HIGH)
  fun dropItemEvent(e: PlayerDropItemEvent) {
    if (e.isCancelled) return
    if (e.player.gameMode != GameMode.CREATIVE) return
    e.itemDrop.persistentDataContainer.set(NAMESPACE, PersistentDataType.BOOLEAN, true)
  }

  /** アイテムマージの修正 */
  @EventHandler(priority = EventPriority.HIGH)
  fun mergeItemEvent(e: ItemMergeEvent) {
    val i1 = e.entity
    val i2 = e.target
    if (i1.persistentDataContainer.has(NAMESPACE) && i2.persistentDataContainer.has(NAMESPACE)) {
      return
    } else if (
      (!i1.persistentDataContainer.has(NAMESPACE) && !i2.persistentDataContainer.has(NAMESPACE))
    ) {
      return
    }
    if (
      i1.itemStack.persistentDataContainer.has(NAMESPACE) &&
      i2.itemStack.persistentDataContainer.has(NAMESPACE)
    ) {
      return
    } else if (
      (!i1.itemStack.persistentDataContainer.has(NAMESPACE) &&
        !i2.itemStack.persistentDataContainer.has(NAMESPACE))
    ) {
      return
    }
    // 片方がクリエアイテム
    e.isCancelled = true

    // 距離を離す仕組み
    val randomYaw = Random.nextDouble(0.0, 180.0)
    val vec1 = Vector(0.0, 0.05, 0.15).rotateAroundY(Math.toRadians(randomYaw))
    val vec2 = Vector(0.0, 0.05, -0.15).rotateAroundY(Math.toRadians(randomYaw))
    e.entity.velocity = e.entity.velocity.add(vec1)
    e.target.velocity = e.target.velocity.add(vec2)
  }

  /** アイテムフレームの制御(PaperAPI依存) */
  @EventHandler(priority = EventPriority.HIGH)
  fun itemFrameEvent(e: PlayerItemFrameChangeEvent) {
    if (e.isCancelled) return
    if (e.action != PlayerItemFrameChangeEvent.ItemFrameChangeAction.PLACE) {
      if (
        e.action == PlayerItemFrameChangeEvent.ItemFrameChangeAction.REMOVE &&
        e.player.gameMode == GameMode.CREATIVE
      ) {
        if (!e.itemStack.persistentDataContainer.has(NAMESPACE)) {
          // サバイバルアイテムを外した場合
          val item = e.itemStack.clone()
          val loc = e.itemFrame.location.clone().add(0.0, 0.125, 0.0)
          val vec =
            Vector(0.0, 0.2, 0.15).rotateAroundY(Math.toRadians(Random.nextDouble(0.0, 360.0)))
          loc.world.dropItemNaturally(loc, item).velocity = vec
        }
      }
      return
    }
    if (e.player.gameMode != GameMode.CREATIVE) return
    e.itemStack.editMeta {
      it.persistentDataContainer.set(NAMESPACE, PersistentDataType.BOOLEAN, true)
    }
  }
}
