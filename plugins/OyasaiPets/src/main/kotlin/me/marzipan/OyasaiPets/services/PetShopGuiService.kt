package me.marzipan.OyasaiPets.services

import me.marzipan.OyasaiPets.BigWolfConfig
import me.marzipan.OyasaiPets.domain.PetRegistry
import me.marzipan.OyasaiPets.domain.ShopContext
import me.marzipan.OyasaiPets.domain.VariantHandler
import me.marzipan.OyasaiPets.i18n.MobTranslator
import net.kyori.adventure.text.Component
import net.kyori.adventure.text.format.NamedTextColor.*
import org.bukkit.Bukkit
import org.bukkit.Material
import org.bukkit.entity.EntityType
import org.bukkit.entity.Player
import org.bukkit.inventory.Inventory
import org.bukkit.inventory.ItemStack

/**
 * ペット購入GUIを管理するサービス
 */
class PetShopGuiService(
    private val openShopGui: (Player, ShopContext, (Player) -> Long) -> Unit,
    private val getPlayerTokens: (Player) -> Long
) {

    /**
     * メイン購入GUI（全ペット種類一覧）を開く
     */
    fun openMainShopGui(player: Player) {
        val inv = Bukkit.createInventory(null, 54, Component.text("★ ペットショップ", DARK_PURPLE))

        val officialPets = PetRegistry.officialPets.sortedBy { it.name }

        officialPets.forEachIndexed { index, type ->
            if (index >= 45) return@forEachIndexed

            val eggMat = Material.getMaterial("${type.name}_SPAWN_EGG") ?: Material.PIG_SPAWN_EGG
            val japName = MobTranslator.toJapanese(type)

            // バリアントがあるか確認
            val variants = VariantHandler.getVariantNames(type)

            val item = ItemStack(eggMat).apply {
                itemMeta = itemMeta?.apply {
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

        // 情報アイテム
        val infoItem = ItemStack(Material.EMERALD).apply {
            itemMeta = itemMeta?.apply {
                displayName(Component.text("あなたの所持ポイント", GOLD))
                lore(listOf(
                    Component.text("${getPlayerTokens(player)}pt", GREEN),
                    Component.text("", GRAY),
                    Component.text("ペットをクリックして購入！", YELLOW)
                ))
            }
        }
        inv.setItem(49, infoItem)

        player.openInventory(inv)
    }

    /**
     * バリアント選択GUI（特定ペットのバリアント一覧）を開く
     */
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
        val inv = Bukkit.createInventory(null, invSize, Component.text("$japName のバリアント選択", DARK_PURPLE))

        val eggMat = Material.getMaterial("${type.name}_SPAWN_EGG") ?: Material.PIG_SPAWN_EGG

        variants.forEachIndexed { index: Int, variant: String ->
            if (index >= 45) return@forEachIndexed

            val item = ItemStack(eggMat).apply {
                itemMeta = itemMeta?.apply {
                    displayName(Component.text("$japName ($variant)", YELLOW))
                    lore(listOf(
                        Component.text("価格: ${BigWolfConfig.defaultShopCost}pt", GOLD),
                        Component.text("", GRAY),
                        Component.text("クリックで購入", GREEN)
                    ))
                }
            }

            inv.setItem(index, item)
        }

        // デフォルト（バリアントなし）オプション
        val defaultItem = ItemStack(eggMat).apply {
            itemMeta = itemMeta?.apply {
                displayName(Component.text("$japName (デフォルト)", YELLOW))
                lore(listOf(
                    Component.text("価格: ${BigWolfConfig.defaultShopCost}pt", GOLD),
                    Component.text("", GRAY),
                    Component.text("クリックで購入", GREEN)
                ))
            }
        }
        inv.setItem(invSize - 5, defaultItem)

        // 戻るボタン
        val backItem = ItemStack(Material.ARROW).apply {
            itemMeta = itemMeta?.apply {
                displayName(Component.text("戻る", RED))
            }
        }
        inv.setItem(invSize - 1, backItem)

        player.openInventory(inv)
    }
}
