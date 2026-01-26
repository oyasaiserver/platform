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
                normalSummonFn(player, sub, args); true
            }
            else -> {
                val typeCheck = runCatching { me.marzipan.OyasaiPets.domain.PetRegistry.isOfficial(org.bukkit.entity.EntityType.valueOf(sub.uppercase())) }.getOrNull() == true
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
        player.sendMessage(Component.text("/bigwolf buy <mob名> [variant] - ペットを購入して召喚", YELLOW))
        player.sendMessage(Component.text("/bigwolf list - 購入可能なペット一覧", YELLOW))
        player.sendMessage(Component.text("/bigwolf storeall - 自分の全ペットを収納", YELLOW))
        player.sendMessage(Component.text("例: /bigwolf buy wolf, /bigwolf buy cat tabby", GRAY))
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
