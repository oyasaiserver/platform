package me.marzipan.OyasaiPets.listeners

import me.marzipan.OyasaiPets.domain.PetRegistry
import me.marzipan.OyasaiPets.domain.VariantHandler
import me.marzipan.OyasaiPets.services.PetShopGuiService
import net.kyori.adventure.text.serializer.plain.PlainTextComponentSerializer
import org.bukkit.Material
import org.bukkit.entity.EntityType
import org.bukkit.entity.Player
import org.bukkit.event.EventHandler
import org.bukkit.event.Listener
import org.bukkit.event.inventory.InventoryClickEvent
import java.util.UUID

/**
 * 購入GUIのクリックイベントを処理するリスナー
 */
class PetShopGuiListener(
    private val petShopGuiService: PetShopGuiService
) : Listener {

    // 開いている購入GUI（メインショップ）を追跡
    private val openedMainShopGuis = mutableSetOf<UUID>()

    // 開いているバリアント選択GUIを追跡 (プレイヤーUUID -> EntityType)
    private val openedVariantGuis = mutableMapOf<UUID, EntityType>()

    @EventHandler
    fun onInventoryClick(event: InventoryClickEvent) {
        val player = event.whoClicked as? Player ?: return
        val inventory = event.inventory
        val title = event.view.title()
        val titlePlain = PlainTextComponentSerializer.plainText().serialize(title)

        // メイン購入GUI
        if (titlePlain == "★ ペットショップ") {
            event.isCancelled = true

            val clickedItem = event.currentItem ?: return
            if (clickedItem.type == Material.AIR || clickedItem.type == Material.EMERALD) return

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

        // バリアント選択GUI
        if (titlePlain.endsWith("のバリアント選択")) {
            event.isCancelled = true

            val type = openedVariantGuis[player.uniqueId] ?: return
            val clickedItem = event.currentItem ?: return

            when (clickedItem.type) {
                Material.AIR -> return
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
                        val lorePlain = PlainTextComponentSerializer.plainText().serialize(loreLine)
                        if (lorePlain.startsWith("バリアント: ")) {
                            variant = lorePlain.removePrefix("バリアント: ")
                            break
                        }
                    }

                    // タイトルから「デフォルト」かどうか判定
                    val itemName = itemMeta.displayName() ?: return
                    val itemNamePlain = PlainTextComponentSerializer.plainText().serialize(itemName)
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

    /**
     * GUIを開いた時の記録
     */
    fun registerMainShopGui(player: Player) {
        openedMainShopGuis.add(player.uniqueId)
    }

    /**
     * GUIを閉じた時のクリーンアップ
     */
    fun unregisterGuis(player: Player) {
        openedMainShopGuis.remove(player.uniqueId)
        openedVariantGuis.remove(player.uniqueId)
    }
}
