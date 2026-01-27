package me.marzipan.OyasaiPets.listeners

import me.marzipan.OyasaiPets.BigWolfConfig
import me.marzipan.OyasaiPets.ownerId
import me.marzipan.OyasaiPets.petId
import me.marzipan.OyasaiPets.breedCount
import me.marzipan.OyasaiPets.generation
import me.marzipan.OyasaiPets.foodLevel
import me.marzipan.OyasaiPets.i18n.MobTranslator
import me.marzipan.OyasaiPets.services.PetCommandService
import net.kyori.adventure.text.Component
import net.kyori.adventure.text.format.NamedTextColor.*
import net.kyori.adventure.text.serializer.plain.PlainTextComponentSerializer
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
 * 交配GUIのクリックイベントを処理するリスナー（シンプル版）
 */
class BreedGuiListener(
    private val petCommandService: PetCommandService,
    private val executeBreeding: (Player, LivingEntity, LivingEntity) -> Unit
) : Listener {

    // 交配GUI内のペットエンティティを追跡 (Inventory -> List<LivingEntity>)
    private val guiPets = mutableMapOf<UUID, List<LivingEntity>>()

    /**
     * 交配GUIのクリックイベント
     */
    @EventHandler
    fun onInventoryClick(event: InventoryClickEvent) {
        val player = event.whoClicked as? Player ?: return
        val title = event.view.title()
        val titlePlain = PlainTextComponentSerializer.plainText().serialize(title)

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
            slot == 22 -> {
                // 説明（何もしない）
                return
            }
        }
    }

    /**
     * ペット選択処理
     */
    private fun handlePetSelection(player: Player, pet: LivingEntity, inv: Inventory) {
        val selection = petCommandService.breedSelections.getOrPut(player.uniqueId) {
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

    /**
     * GUIの選択状態を更新
     */
    private fun updateGuiSelection(inv: Inventory, selection: PetCommandService.BreedSelection) {
        // スロット18: 親1表示
        val parent1 = selection.parent1
        if (parent1 != null && parent1.isValid) {
            val eggMat = Material.getMaterial("${parent1.type.name}_SPAWN_EGG") ?: Material.PIG_SPAWN_EGG
            val nameComp = parent1.customName()?.let {
                PlainTextComponentSerializer.plainText().serialize(it)
            } ?: MobTranslator.toJapanese(parent1.type)

            inv.setItem(18, ItemStack(eggMat).apply {
                itemMeta = itemMeta.apply {
                    displayName(Component.text("親1: $nameComp", AQUA))
                    lore(listOf(
                        Component.text("レベル: ${parent1.foodLevel}", GREEN),
                        Component.text("世代: 第${parent1.generation}世代", GOLD),
                        Component.text("交配回数: ${parent1.breedCount}回", GRAY)
                    ))
                }
            })
        } else {
            inv.setItem(18, ItemStack(Material.LIGHT_BLUE_STAINED_GLASS_PANE).apply {
                itemMeta = itemMeta.apply {
                    displayName(Component.text("親1: 未選択", AQUA))
                    lore(listOf(Component.text("上のペットをクリックして選択", GRAY)))
                }
            })
        }

        // スロット20: 親2表示
        val parent2 = selection.parent2
        if (parent2 != null && parent2.isValid) {
            val eggMat = Material.getMaterial("${parent2.type.name}_SPAWN_EGG") ?: Material.PIG_SPAWN_EGG
            val nameComp = parent2.customName()?.let {
                PlainTextComponentSerializer.plainText().serialize(it)
            } ?: MobTranslator.toJapanese(parent2.type)

            inv.setItem(20, ItemStack(eggMat).apply {
                itemMeta = itemMeta.apply {
                    displayName(Component.text("親2: $nameComp", LIGHT_PURPLE))
                    lore(listOf(
                        Component.text("レベル: ${parent2.foodLevel}", GREEN),
                        Component.text("世代: 第${parent2.generation}世代", GOLD),
                        Component.text("交配回数: ${parent2.breedCount}回", GRAY)
                    ))
                }
            })
        } else {
            inv.setItem(20, ItemStack(Material.PINK_STAINED_GLASS_PANE).apply {
                itemMeta = itemMeta.apply {
                    displayName(Component.text("親2: 未選択", LIGHT_PURPLE))
                    lore(listOf(Component.text("上のペットをクリックして選択", GRAY)))
                }
            })
        }
    }

    /**
     * 交配を実行
     */
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
        if (parent1.ownerId != player.uniqueId.toString() || parent2.ownerId != player.uniqueId.toString()) {
            player.sendMessage(Component.text("自分のペットのみ交配できます", RED))
            petCommandService.clearSelection(player)
            return
        }

        // 交配条件確認
        if (parent1.foodLevel < BigWolfConfig.breedMinLevel) {
            player.sendMessage(Component.text("親1のレベルが足りません (必要: Lv.${BigWolfConfig.breedMinLevel})", RED))
            return
        }

        if (parent2.foodLevel < BigWolfConfig.breedMinLevel) {
            player.sendMessage(Component.text("親2のレベルが足りません (必要: Lv.${BigWolfConfig.breedMinLevel})", RED))
            return
        }

        player.closeInventory()

        // 交配実行
        executeBreeding(player, parent1, parent2)

        // 選択をクリア
        petCommandService.clearSelection(player)
        guiPets.remove(player.uniqueId)
    }

    /**
     * 交配GUIが閉じられた時
     */
    @Suppress("UNUSED_PARAMETER")
    @EventHandler
    fun onInventoryClose(event: InventoryCloseEvent) {
        // クリーンアップは不要（次回開く時にリセットされる）
        // このメソッドはイベントリスナーとして必要
    }

    /**
     * 交配GUIが開かれた時（外部から呼ばれる）
     */
    fun registerBreedGuiOpened(player: Player, pets: List<LivingEntity>) {
        guiPets[player.uniqueId] = pets
        // 選択状態をリセット
        petCommandService.breedSelections[player.uniqueId] = PetCommandService.BreedSelection()
    }
}
