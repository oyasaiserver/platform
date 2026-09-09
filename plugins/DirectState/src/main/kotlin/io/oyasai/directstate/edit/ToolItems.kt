package io.oyasai.directstate.edit

import io.papermc.paper.datacomponent.DataComponentTypes
import io.papermc.paper.datacomponent.item.Consumable
import io.papermc.paper.datacomponent.item.FoodProperties
import io.papermc.paper.datacomponent.item.consumable.ItemUseAnimation
import net.kyori.adventure.text.Component
import org.bukkit.Material
import org.bukkit.NamespacedKey
import org.bukkit.inventory.ItemStack
import org.bukkit.persistence.PersistentDataType
import org.bukkit.plugin.java.JavaPlugin

/** コマンドで作る棒と、イベントで見分ける棒が同じ識別方法を使うための窓口。 */
internal class ToolItems(plugin: JavaPlugin) {
  private val toolKey = NamespacedKey(plugin, "hand_tool")

  /** コマンドで指定された種類の編集棒を作る。 */
  fun create(kind: Kind) =
      ItemStack(Material.STICK).apply {
        editMeta {
          it.displayName(Component.text("DirectState ${kind.displayName}"))
          it.lore(listOf(Component.text(kind.description)))
          it.persistentDataContainer.set(toolKey, PersistentDataType.BYTE, kind.id)
        }
        if (kind == Kind.HOLD) {
          setData(
              DataComponentTypes.CONSUMABLE,
              Consumable.consumable()
                  .consumeSeconds(3600f)
                  .animation(ItemUseAnimation.NONE)
                  .hasConsumeParticles(false)
                  .build(),
          )
          setData(
              DataComponentTypes.FOOD,
              FoodProperties.food().nutrition(0).saturation(0f).canAlwaysEat(true).build(),
          )
        }
      }

  /** DirectStateが発行した編集棒かを調べる。 */
  fun isTool(item: ItemStack?) = typeOf(item) != null

  /** 手に持つとHand編集を使える棒だけを判定する。 */
  fun isHandTool(item: ItemStack?) = typeOf(item) == Kind.HAND

  /** DirectStateが発行したホールド棒だけを判定する。 */
  fun isHoldTool(item: ItemStack?) = typeOf(item) == Kind.HOLD

  /** PersistentDataContainerに保存した種類。通常アイテムには値がない。 */
  private fun typeOf(item: ItemStack?): Kind? {
    val id = item?.itemMeta?.persistentDataContainer?.get(toolKey, PersistentDataType.BYTE)
    return Kind.entries.firstOrNull { it.id == id }
  }

  enum class Kind(val id: Byte, val displayName: String, val description: String) {
    SIMPLE(1, "シンプル棒", "左クリック: けす / 右クリック: おく"),
    HOLD(2, "ホールド棒", "右クリック長押し・視点移動"),
    HAND(3, "編集棒", "右クリック: Hand編集"),
  }
}
