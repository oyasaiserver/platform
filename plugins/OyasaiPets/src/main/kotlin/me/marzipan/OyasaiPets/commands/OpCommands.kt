package me.marzipan.OyasaiPets.commands

import me.marzipan.OyasaiPets.BigWolfConfig
import me.marzipan.OyasaiPets.domain.PetRegistry
import me.marzipan.OyasaiPets.systems.ShopSystem
import me.marzipan.OyasaiPets.systems.ItemManagementSystem
import me.marzipan.OyasaiPets.items.PetItemFactory
import net.kyori.adventure.text.Component
import net.kyori.adventure.text.format.NamedTextColor.*
import org.bukkit.Material
import org.bukkit.entity.EntityType
import org.bukkit.entity.Player
import org.bukkit.plugin.java.JavaPlugin

/**
 * OP専用コマンド処理
 */
class OpCommands(
    private val plugin: JavaPlugin,
    private val shopSystem: ShopSystem,
    private val spawnAndMountEntity: (Player, EntityType, String?) -> String?,
    private val itemManagement: ItemManagementSystem,
    private val showUsageFn: (Player) -> Unit,
    private val shopRemoveAllFn: (Player) -> Unit,
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
                handleItemCommand(player, args); true
            }
            "exp" -> {
                handleExperimentalSummon(player, args); true
            }
            "shop" -> {
                handleShopCommand(player, args); true
            }
            "shopremove" -> {
                handleShopRemove(player); true
            }
            "shopremoveall" -> {
                shopRemoveAllFn(player); true
            }
            "reload" -> {
                handleReload(player); true
            }
            "version" -> {
                handleVersion(player); true
            }
            "force_store" -> {
                forceStoreFn(player); true
            }
            "force_storeall" -> {
                forceStoreAllFn(player, args); true
            }
            "history" -> {
                historyFn(player, args); true
            }
            else -> {
                player.sendMessage(Component.text("不明なサブコマンド: $sub", RED))
                true
            }
        }
    }

    /**
     * アイテム配布コマンド
     */
    fun handleItemCommand(player: Player, args: Array<out String>) {
        if (args.size < 2) {
            player.sendMessage(
                Component.text(
                    "使い方: /bigwolf item <food|brush|treat|heal|toys|skillbook|skillbook1|skillbook2|skillbook3|particle|all>",
                    RED
                )
            )
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
                player.inventory.addItem(itemManagement.createPetHealItem())
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
                player.inventory.addItem(itemManagement.createSkillUnlockItem(1))
                player.inventory.addItem(itemManagement.createSkillUnlockItem(2))
                player.inventory.addItem(itemManagement.createSkillUnlockItem(3))
                player.sendMessage(Component.text("スキル強化用アイテムを入手しました！", LIGHT_PURPLE))
            }
            "skillbook1" -> {
                player.inventory.addItem(itemManagement.createSkillUnlockItem(1))
                player.sendMessage(Component.text("スキルブック(Lv.1)を入手しました！", LIGHT_PURPLE))
            }
            "skillbook2" -> {
                player.inventory.addItem(itemManagement.createSkillUnlockItem(2))
                player.sendMessage(Component.text("スキルブック(Lv.2)を入手しました！", LIGHT_PURPLE))
            }
            "skillbook3" -> {
                player.inventory.addItem(itemManagement.createSkillUnlockItem(3))
                player.sendMessage(Component.text("スキルブック(Lv.3)を入手しました！", LIGHT_PURPLE))
            }
            "particle" -> {
                for (i in 5..10) {
                    player.inventory.addItem(itemManagement.createParticleUnlockItem(i))
                }
                player.sendMessage(Component.text("パーティクルの結晶セットを入手しました！", LIGHT_PURPLE))
            }
            "all" -> {
                player.inventory.addItem(PetItemFactory.createPetFoodItem())
                player.inventory.addItem(PetItemFactory.createPetBrushItem())
                player.inventory.addItem(PetItemFactory.createPetTreatItem())
                player.inventory.addItem(itemManagement.createPetHealItem())
                PetRegistry.getAllToyItems().forEach { player.inventory.addItem(it) }
                player.inventory.addItem(itemManagement.createSkillUnlockItem(1))
                player.inventory.addItem(itemManagement.createSkillUnlockItem(2))
                player.inventory.addItem(itemManagement.createSkillUnlockItem(3))
                for (i in 5..10) {
                    player.inventory.addItem(itemManagement.createParticleUnlockItem(i))
                }
                player.sendMessage(Component.text("全アイテムを入手しました！", GREEN))
            }
            else -> {
                player.sendMessage(Component.text("不明なアイテムタイプ: $key", RED))
            }
        }
    }

    /**
     * 実験的召喚コマンド
     */
    fun handleExperimentalSummon(player: Player, args: Array<out String>) {
        if (args.size < 2) {
            player.sendMessage(Component.text("MOB名を指定してください。例: /bigwolf exp zombie", RED))
            return
        }

        val type = runCatching { EntityType.valueOf(args[1].uppercase()) }.getOrNull()
        if (type == null || !type.isAlive) {
            player.sendMessage(Component.text("無効なMOB名です。", RED))
            return
        }

        val variant = if (args.size >= 3) args[2].lowercase() else null
        spawnAndMountEntity(player, type, variant)
    }

    /**
     * ショップMOB設置コマンド
     */
    fun handleShopCommand(player: Player, args: Array<out String>) {
        if (args.size < 2) {
            player.sendMessage(
                Component.text("使い方: /bigwolf shop <mob> [variant] [cost] [yawDeg]", RED)
            )
            return
        }

        val type = runCatching { EntityType.valueOf(args[1].uppercase()) }.getOrNull()
        if (type == null || !type.isAlive) {
            player.sendMessage(Component.text("無効なMOB名です。", RED))
            return
        }

        val variant = args.getOrNull(2)?.lowercase()
        val cost = args.getOrNull(3)?.toIntOrNull() ?: BigWolfConfig.defaultShopCost
        val yawDeg = args.getOrNull(4)?.toFloatOrNull()

        shopSystem.spawnShopMob(player, type, variant, cost, yawDeg)
    }

    /**
     * ショップMOB削除コマンド
     */
    fun handleShopRemove(player: Player) {
        shopSystem.removeNearestShopMob(player)
    }

    /**
     * 設定リロードコマンド
     */
    fun handleReload(player: Player) {
        plugin.reloadConfig()
        BigWolfConfig.loadFrom(plugin.config)
        PetRegistry.applyConfig(plugin)
        player.sendMessage(Component.text("BigWolf: config reloaded!", GREEN))
    }

    /**
     * バージョン表示コマンド
     */
    fun handleVersion(player: Player) {
        val version = plugin.description.version
        player.sendMessage(Component.text("=== OyasaiPets (BigWolf) ===", GOLD))
        player.sendMessage(Component.text("Version: $version", YELLOW))
    }
}
