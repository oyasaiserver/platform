package me.marzipan.OyasaiPets.commands

import me.marzipan.OyasaiPets.domain.PetRegistry
import net.kyori.adventure.text.Component
import net.kyori.adventure.text.format.NamedTextColor.*
import org.bukkit.entity.EntityType
import org.bukkit.entity.Player

/**
 * 一般プレイヤー向けコマンド処理
 */
class PlayerCommands(
    private val openMainMenuFn: (Player) -> Unit,
    private val openShopGuiFn: (Player) -> Unit,
    private val openPurchaseConfirmationFn: (Player, EntityType, String?) -> Unit,
    private val storeAllPetsFn: (Player) -> Unit,
    private val reviveFn: (Player, Array<out String>) -> Unit,
    private val deadListFn: (Player) -> Unit,
    private val historyFn: (Player, Array<out String>) -> Unit,
    private val locateFn: (Player, Array<out String>) -> Unit,
    private val recoverFn: (Player, Array<out String>) -> Unit,
    private val breedFn: (Player) -> Unit,
    private val renameFn: (Player, Array<out String>) -> Unit,
    private val transferFn: (Player, Array<out String>) -> Unit,
    private val normalSummonFn: (Player, String, Array<out String>) -> Unit,
    private val versionFn: (Player) -> Unit
) {

    fun handleCommand(player: Player, args: Array<out String>): Boolean {
        if (args.isEmpty()) {
            showUsage(player)
            return true
        }

        val sub = args[0].lowercase()
        return when (sub) {
            "menu" -> {
                openMainMenuFn(player); true
            }
            "storeall" -> {
                storeAllPetsFn(player); true
            }
            "revive" -> {
                reviveFn(player, args); true
            }
            "dead" -> {
                deadListFn(player); true
            }
            "history" -> {
                historyFn(player, args); true
            }
            "locate" -> {
                locateFn(player, args); true
            }
            "recover" -> {
                recoverFn(player, args); true
            }
            "breed" -> {
                breedFn(player); true
            }
            "rename" -> {
                renameFn(player, args); true
            }
            "transfer" -> {
                transferFn(player, args); true
            }
            "list" -> {
                handleListCommand(player); true
            }
            "version" -> {
                versionFn(player); true
            }
            "buy" -> {
                // 引数なし: 購入GUIを開く
                if (args.size == 1) {
                    openShopGuiFn(player)
                } else {
                    // 引数あり: /bigwolf buy <MOB> [variant]
                    val mobName = args[1].lowercase()
                    val type = runCatching { EntityType.valueOf(mobName.uppercase()) }.getOrNull()

                    if (type == null || !PetRegistry.isOfficial(type)) {
                        player.sendMessage(Component.text("無効なMOB名です: $mobName", RED))
                        player.sendMessage(Component.text("/bigwolf list で購入可能なペット一覧を確認できます", YELLOW))
                    } else {
                        val variant = args.getOrNull(2)?.lowercase()
                        // 直接購入確認画面を開く
                        openPurchaseConfirmationFn(player, type, variant)
                    }
                }
                true
            }
            else -> {
                val typeCheck = runCatching { PetRegistry.isOfficial(EntityType.valueOf(sub.uppercase())) }.getOrNull() == true
                if (typeCheck) {
                    player.sendMessage(Component.text("ペット購入は /bigwolf buy $sub で行ってください。", YELLOW))
                    normalSummonFn(player, sub, args)
                } else {
                    showUsage(player)
                }
                true
            }
        }
    }

    /**
     * 使用方法を表示
     */
    fun showUsage(player: Player) {
        player.sendMessage(Component.text("=== BigWolf 使用方法 ===", GOLD))
        player.sendMessage(Component.text("/bigwolf buy - ペットショップを開く", YELLOW))
        player.sendMessage(Component.text("/bigwolf list - 購入可能なペット一覧", YELLOW))
        player.sendMessage(Component.text("/bigwolf storeall - 自分の全ペットを収納", YELLOW))
        player.sendMessage(Component.text("/bigwolf dead - 死亡したペット一覧", YELLOW))
        player.sendMessage(Component.text("/bigwolf revive <番号> - ペットを復活", YELLOW))
        player.sendMessage(Component.text("/bigwolf breed - 交配", YELLOW))
        player.sendMessage(Component.text("/bigwolf menu - メインメニューを開く", GOLD))
    }

    /**
     * 購入可能なペット一覧を表示
     */
    fun handleListCommand(player: Player) {
        player.sendMessage(Component.text("=== 購入可能なペット ===", GOLD))
        PetRegistry.officialPets.forEach { type ->
            val spec = PetRegistry.get(type)
            player.sendMessage(
                Component.text("- ${type.name}", YELLOW)
                    .append(Component.text(" (カテゴリ: ${spec.category})", GRAY))
            )
        }
        player.sendMessage(Component.text("購入: /bigwolf buy <mob名> で購入画面を開けます", GREEN))
    }

}
