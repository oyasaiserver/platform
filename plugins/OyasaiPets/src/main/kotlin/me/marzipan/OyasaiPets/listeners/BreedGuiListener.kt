package me.marzipan.OyasaiPets.listeners

import me.marzipan.OyasaiPets.BigWolfConfig
import me.marzipan.OyasaiPets.i18n.MobTranslator
import me.marzipan.OyasaiPets.ownerId
import me.marzipan.OyasaiPets.petId
import me.marzipan.OyasaiPets.breedCount
import me.marzipan.OyasaiPets.generation
import me.marzipan.OyasaiPets.foodLevel
import me.marzipan.OyasaiPets.services.PetCommandService
import me.marzipan.OyasaiPets.systems.BreedingSystem
import net.kyori.adventure.text.Component
import net.kyori.adventure.text.format.NamedTextColor.*
import net.kyori.adventure.text.serializer.plain.PlainTextComponentSerializer
import org.bukkit.Bukkit
import org.bukkit.Material
import org.bukkit.entity.LivingEntity
import org.bukkit.entity.Player
import org.bukkit.event.EventHandler
import org.bukkit.event.Listener
import org.bukkit.event.inventory.InventoryClickEvent
import org.bukkit.event.inventory.InventoryCloseEvent
import org.bukkit.inventory.Inventory
import org.bukkit.inventory.ItemStack
import java.util.UUID

/**
 * 交配GUIとペット選択を処理するリスナー
 */
class BreedGuiListener(
    private val petCommandService: PetCommandService,
    private val breedingSystem: BreedingSystem,
    private val executeBreeding: (Player, LivingEntity, LivingEntity) -> Unit
) : Listener {

    // 交配GUI選択中のプレイヤー
    private val breedGuiOpened = mutableSetOf<UUID>()

    /**
     * 交配GUIのクリックイベント
     */
    @EventHandler
    fun onInventoryClick(event: InventoryClickEvent) {
        val player = event.whoClicked as? Player ?: return
        val title = event.view.title()
        val titlePlain = PlainTextComponentSerializer.plainText().serialize(title)

        // 親選択GUI
        if (titlePlain == "このペットを親に選択") {
            event.isCancelled = true

            val clickedItem = event.currentItem ?: return
            if (clickedItem.type == Material.AIR) return

            val entity = me.marzipan.OyasaiPets.listeners.PetInteractionListener.parentSelectionTargets[player.uniqueId]
            if (entity == null) {
                player.closeInventory()
                return
            }

            when (event.slot) {
                3 -> { // 親1に選択
                    petCommandService.selectParent(player, entity, true)
                    player.closeInventory()
                    // 交配GUIを再表示
                    updateBreedGui(player)
                }
                5 -> { // 親2に選択
                    petCommandService.selectParent(player, entity, false)
                    player.closeInventory()
                    // 交配GUIを再表示
                    updateBreedGui(player)
                }
            }

            return
        }

        // 交配GUI
        if (titlePlain != "★ 交配するペットを選択") return

        event.isCancelled = true

        val clickedItem = event.currentItem ?: return
        if (clickedItem.type == Material.AIR) return

        when (event.slot) {
            7 -> { // 決定ボタン
                handleConfirmBreed(player)
            }
            4 -> { // 説明（何もしない）
                return
            }
            else -> {
                // 他のスロットは無視
                return
            }
        }
    }

    /**
     * 交配GUIが閉じられた時
     */
    @EventHandler
    fun onInventoryClose(event: InventoryCloseEvent) {
        val player = event.player as? Player ?: return
        val title = event.view.title()
        val titlePlain = PlainTextComponentSerializer.plainText().serialize(title)

        if (titlePlain == "★ 交配するペットを選択") {
            breedGuiOpened.remove(player.uniqueId)
        }
    }

    /**
     * 交配を実行
     */
    private fun handleConfirmBreed(player: Player) {
        val (parent1, parent2) = petCommandService.getSelectedParents(player)

        if (parent1 == null || parent2 == null) {
            player.sendMessage(Component.text("親を2匹選択してください。", RED))
            player.sendMessage(Component.text("フィールドのペットを右クリックして選択してください。", GRAY))
            return
        }

        // 両方のペットがまだ有効か確認
        if (!parent1.isValid || parent1.isDead) {
            player.sendMessage(Component.text("親1が無効です。もう一度選択してください。", RED))
            petCommandService.clearSelection(player)
            return
        }

        if (!parent2.isValid || parent2.isDead) {
            player.sendMessage(Component.text("親2が無効です。もう一度選択してください。", RED))
            petCommandService.clearSelection(player)
            return
        }

        // オーナー確認
        if (parent1.ownerId != player.uniqueId.toString() || parent2.ownerId != player.uniqueId.toString()) {
            player.sendMessage(Component.text("自分のペットのみ交配できます。", RED))
            petCommandService.clearSelection(player)
            return
        }

        // 交配条件確認
        if (parent1.foodLevel < BigWolfConfig.breedMinLevel) {
            player.sendMessage(Component.text("親1のレベルが足りません。(必要: Lv.${BigWolfConfig.breedMinLevel})", RED))
            return
        }

        if (parent2.foodLevel < BigWolfConfig.breedMinLevel) {
            player.sendMessage(Component.text("親2のレベルが足りません。(必要: Lv.${BigWolfConfig.breedMinLevel})", RED))
            return
        }

        if (parent1.breedCount >= BigWolfConfig.maxBreedCount) {
            player.sendMessage(Component.text("親1は交配回数の上限に達しています。", RED))
            return
        }

        if (parent2.breedCount >= BigWolfConfig.maxBreedCount) {
            player.sendMessage(Component.text("親2は交配回数の上限に達しています。", RED))
            return
        }

        player.closeInventory()

        // 交配実行
        executeBreeding(player, parent1, parent2)

        // 選択をクリア
        petCommandService.clearSelection(player)
    }

    /**
     * 交配GUIが開かれた時（外部から呼ばれる）
     */
    fun registerBreedGuiOpened(player: Player) {
        breedGuiOpened.add(player.uniqueId)
    }

    /**
     * 交配GUIを更新（親選択後）
     */
    private fun updateBreedGui(player: Player) {
        val (parent1, parent2) = petCommandService.getSelectedParents(player)

        // 既存の交配GUIを探す
        val currentView = player.openInventory
        val titlePlain = PlainTextComponentSerializer.plainText().serialize(currentView.title())

        if (titlePlain == "★ 交配するペットを選択") {
            val inv = currentView.topInventory

            // 親1の表示を更新
            if (parent1 != null && parent1.isValid) {
                val eggMat = Material.getMaterial("${parent1.type.name}_SPAWN_EGG") ?: Material.PIG_SPAWN_EGG
                val nameComp = parent1.customName()?.let {
                    PlainTextComponentSerializer.plainText().serialize(it)
                } ?: MobTranslator.toJapanese(parent1.type)

                inv.setItem(1, ItemStack(eggMat).apply {
                    itemMeta = itemMeta.apply {
                        displayName(Component.text("親1: $nameComp", AQUA))
                        lore(listOf(
                            Component.text("レベル: ${parent1.foodLevel}", GREEN),
                            Component.text("世代: 第${parent1.generation}世代", GOLD),
                            Component.text("交配回数: ${parent1.breedCount}/${BigWolfConfig.maxBreedCount}", GRAY)
                        ))
                    }
                })
            }

            // 親2の表示を更新
            if (parent2 != null && parent2.isValid) {
                val eggMat = Material.getMaterial("${parent2.type.name}_SPAWN_EGG") ?: Material.PIG_SPAWN_EGG
                val nameComp = parent2.customName()?.let {
                    PlainTextComponentSerializer.plainText().serialize(it)
                } ?: MobTranslator.toJapanese(parent2.type)

                inv.setItem(3, ItemStack(eggMat).apply {
                    itemMeta = itemMeta.apply {
                        displayName(Component.text("親2: $nameComp", LIGHT_PURPLE))
                        lore(listOf(
                            Component.text("レベル: ${parent2.foodLevel}", GREEN),
                            Component.text("世代: 第${parent2.generation}世代", GOLD),
                            Component.text("交配回数: ${parent2.breedCount}/${BigWolfConfig.maxBreedCount}", GRAY)
                        ))
                    }
                })
            }

            player.updateInventory()
        } else {
            // 交配GUIを開き直す
            val breedablePets = breedingSystem.getBreedablePets(player)
            if (breedablePets.size >= 2) {
                val inv = breedingSystem.openBreedGui(player, breedablePets, petCommandService.breedGuiTitle)
                player.openInventory(inv)
                updateBreedGui(player) // 再帰的に更新
            }
        }
    }
}
