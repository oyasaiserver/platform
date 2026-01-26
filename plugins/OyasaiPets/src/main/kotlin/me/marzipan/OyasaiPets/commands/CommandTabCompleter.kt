package me.marzipan.OyasaiPets.commands

import me.marzipan.OyasaiPets.domain.PetRegistry
import me.marzipan.OyasaiPets.domain.VariantHandler
import org.bukkit.Bukkit
import org.bukkit.command.CommandSender
import org.bukkit.entity.EntityType

/**
 * タブ補完を提供
 * BigWolf.ktのonTabComplete実装を分離したもの
 */
object CommandTabCompleter {

    /**
     * /bigwolfop コマンドのタブ補完
     */
    fun onTabCompleteOp(sender: CommandSender, args: Array<out String>): List<String> {
        if (!sender.isOp) return mutableListOf()

        val a0 = args.getOrNull(0)?.lowercase() ?: ""
        val a1 = args.getOrNull(1)?.lowercase() ?: ""

        val result: List<String> = when (args.size) {
            1 -> listOf(
                "version", "reload", "item", "exp", "shop", "shopremove", "shopremoveall",
                "force_store", "force_storeall", "history"
            ).filter { it.startsWith(a0) }

            2 -> when (a0) {
                "item" -> listOf(
                    "food", "brush", "treat", "toys", "skillbook", "skillbook1",
                    "skillbook2", "skillbook3", "particle", "all"
                ).filter { it.startsWith(a1) }

                "exp", "shop" -> EntityType.entries.filter { it.isSpawnable && it.isAlive }
                    .map { it.name.lowercase() }.filter { it.startsWith(a1) }

                "force_storeall", "history" -> Bukkit.getOnlinePlayers().map { it.name }
                    .filter { it.lowercase().startsWith(a1) }

                else -> emptyList()
            }

            3 -> when (a0) {
                "exp", "shop" -> {
                    val type = runCatching { EntityType.valueOf(args[1].uppercase()) }.getOrNull()
                    if (type != null) {
                        VariantHandler.getVariantNames(type).map { it.lowercase() }
                            .filter { it.startsWith(args[2].lowercase()) }
                    } else emptyList()
                }

                "history" -> {
                    // ページ番号の候補（1-5程度）
                    (1..5).map { it.toString() }.filter { it.startsWith(args[2]) }
                }

                else -> emptyList()
            }

            else -> emptyList()
        }
        return result.toMutableList()
    }

    /**
     * /bigwolf コマンドのタブ補完
     */
    fun onTabCompletePlayer(args: Array<out String>): List<String> {
        val a0 = args.getOrNull(0)?.lowercase() ?: ""
        val a1 = args.getOrNull(1)?.lowercase() ?: ""
        val a2 = args.getOrNull(2)?.lowercase() ?: ""

        val result: List<String> = when (args.size) {
            1 -> {
                val base = PetRegistry.officialPets.map { it.name.lowercase() } +
                    listOf("menu", "storeall", "revive", "dead", "history", "locate", "recover", "breed", "transfer")
                base.filter { it.startsWith(a0) }
            }

            2 -> when (a0) {
                "revive", "locate", "recover" -> {
                    // ペット番号の候補（1-10程度）
                    (1..10).map { it.toString() }.filter { it.startsWith(a1) }
                }

                "transfer" -> {
                    // ペット番号の候補
                    (1..10).map { it.toString() }.filter { it.startsWith(a1) }
                }

                "history" -> {
                    // ページ番号の候補（1-5程度）
                    (1..5).map { it.toString() }.filter { it.startsWith(a1) }
                }

                else -> {
                    // バリアント候補
                    val type = runCatching { EntityType.valueOf(a0.uppercase()) }.getOrNull()
                    if (type != null) {
                        VariantHandler.getVariantNames(type).map { it.lowercase() }
                            .filter { it.startsWith(a1) }
                    } else emptyList()
                }
            }

            3 -> when (a0) {
                "transfer" -> {
                    // プレイヤー名候補
                    Bukkit.getOnlinePlayers().map { it.name }.filter { it.lowercase().startsWith(a2) }
                }

                else -> emptyList()
            }

            else -> emptyList()
        }
        return result.toMutableList()
    }
}
