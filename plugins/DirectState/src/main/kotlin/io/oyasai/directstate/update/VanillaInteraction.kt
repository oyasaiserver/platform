package io.oyasai.directstate.update

import io.papermc.paper.datacomponent.DataComponentTypes
import io.papermc.paper.entity.Leashable
import org.bukkit.GameMode
import org.bukkit.Material
import org.bukkit.Tag
import org.bukkit.block.data.Ageable
import org.bukkit.block.data.BlockData
import org.bukkit.block.data.Levelled
import org.bukkit.block.data.type.Cake
import org.bukkit.block.data.type.CaveVinesPlant
import org.bukkit.block.data.type.ChiseledBookshelf
import org.bukkit.block.data.type.Door
import org.bukkit.block.data.type.Gate
import org.bukkit.block.data.type.Jukebox
import org.bukkit.block.data.type.RespawnAnchor
import org.bukkit.block.data.type.Shelf
import org.bukkit.block.data.type.TrapDoor
import org.bukkit.block.data.type.Vault
import org.bukkit.entity.LivingEntity
import org.bukkit.event.player.PlayerInteractEvent
import org.bukkit.inventory.CampfireRecipe
import org.bukkit.inventory.EquipmentSlot

/** dsu：更新を抑える。 */
internal object VanillaInteraction {
  fun opensByHand(data: BlockData): Boolean =
      when (data) {
        is Door -> data.material != Material.IRON_DOOR
        is TrapDoor -> data.material != Material.IRON_TRAPDOOR
        is Gate -> true
        else -> false
      }

  /** ブロックアイテムの強制配置より優先する、通常の右クリック操作。 */
  @Suppress("DEPRECATION")
  fun consumesClick(event: PlayerInteractEvent): Boolean {
    val block = event.clickedBlock ?: return false
    val item = event.item ?: return false
    val player = event.player
    if (player.isSneaking) return false
    val material = block.type
    val data = block.blockData
    if (data is Door || data is TrapDoor) return opensByHand(data)
    if (Tag.FENCES.isTagged(material)) {
      // フェンス自体は配置を妨げないが、プレイヤーが引くリードの接続は優先する。
      return block.world
          .getNearbyEntities(block.location.add(0.5, 0.5, 0.5), 16.0, 16.0, 16.0)
          .any {
            when (it) {
              is LivingEntity -> it.isLeashed && it.leashHolder == player
              is Leashable -> it.isLeashed && it.leashHolder == player
              else -> false
            }
          }
    }
    // isInteractableには、特定のアイテムでだけ操作できるブロックも含まれる。
    // この入口のアイテムは配置用なので、着火・採蜜・消火等は配置を妨げない。
    if (
        Tag.CAULDRONS.isTagged(material) ||
            Tag.CANDLES.isTagged(material) ||
            Tag.BEEHIVES.isTagged(material) ||
            material == Material.PUMPKIN ||
            material == Material.TNT ||
            material == Material.REDSTONE_ORE ||
            material == Material.DEEPSLATE_REDSTONE_ORE
    )
        return false
    if (material == Material.REDSTONE_WIRE && item.type == Material.REDSTONE) return false
    if (Tag.CAMPFIRES.isTagged(material))
        return player.server.recipeIterator().asSequence().any {
          it is CampfireRecipe && it.inputChoice.test(item)
        }
    if (material == Material.COMPOSTER && data is Levelled) {
      return data.level == data.maximumLevel ||
          (data.level < data.maximumLevel && item.type.isCompostable)
    }
    if (material == Material.SWEET_BERRY_BUSH && data is Ageable) return data.age > 1
    if (data is CaveVinesPlant) return data.isBerries
    if (data is Jukebox)
        return data.hasRecord() || item.hasData(DataComponentTypes.JUKEBOX_PLAYABLE)
    if (data is RespawnAnchor) return data.charges > 0 || item.type == Material.GLOWSTONE
    if (data is Vault) return data.vaultState == Vault.State.ACTIVE
    if (data is ChiseledBookshelf) return event.blockFace == data.facing
    if (data is Shelf) return event.blockFace == data.facing && event.hand == EquipmentSlot.HAND
    val canEatCake = player.gameMode == GameMode.CREATIVE || player.foodLevel < 20
    if (data is Cake) return canEatCake || (data.bites == 0 && Tag.CANDLES.isTagged(item.type))
    if (Tag.CANDLE_CAKES.isTagged(material)) return canEatCake
    // shortcut: 未分類の操作はバニラへ譲る。API更新時は監査テストで分類を見直す。
    return material.isInteractable
  }
}
