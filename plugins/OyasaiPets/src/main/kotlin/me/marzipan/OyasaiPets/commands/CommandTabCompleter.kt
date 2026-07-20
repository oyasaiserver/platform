@file:Suppress("DEPRECATION")

package me.marzipan.OyasaiPets

import net.kyori.adventure.text.format.NamedTextColor.*
import org.bukkit.*
import org.bukkit.command.*
import org.bukkit.entity.*
import org.bukkit.inventory.*

/** タブ補完を提供 BigWolf.ktのonTabComplete実装を分離したもの */
object CommandTabCompleter {

  /** /bigwolfop コマンドのタブ補完 */
  fun onTabCompleteOp(sender: CommandSender, args: Array<out String>): List<String> {
    if (!sender.isOp) return mutableListOf()

    val a0 = args.getOrNull(0)?.lowercase() ?: ""
    val a1 = args.getOrNull(1)?.lowercase() ?: ""

    // debug_egg の key=value タブ補完ヘルパー
    fun debugEggKv(current: String): List<String> {
      val keys =
          listOf(
              "variant=",
              "level=",
              "skill=",
              "unlocked=",
              "speed=",
              "jump=",
              "gen=",
              "temperament=",
          )
      return if ("=" in current) {
        val key = current.substringBefore("=")
        val vp = current.substringAfter("=")
        when (key) {
          "temperament" ->
              listOf("typical", "atypical").filter { it.startsWith(vp) }.map { "temperament=$it" }
          "skill",
          "unlocked" -> listOf("0", "1", "2", "3").filter { it.startsWith(vp) }.map { "$key=$it" }
          else -> emptyList()
        }
      } else {
        keys.filter { it.startsWith(current) }
      }
    }

    val configGlobalKeys =
        listOf(
            "foodPointCost",
            "maxFoodLevel",
            "defaultShopCost",
            "skillBookShopCostLv1",
            "skillBookShopCostLv2",
            "skillBookShopCostLv3",
            "skillBookUseCostLv1",
            "skillBookUseCostLv2",
            "skillBookUseCostLv3",
            "skillBookCostLv1",
            "skillBookCostLv2",
            "skillBookCostLv3",
            "reviveCost",
            "recoverCost",
            "healItemAmount",
            "breedMinLevel",
            "breedCost",
            "maxBreedCount",
            "breedRandomMin",
            "breedRandomMax",
            "breedGenBonusPerGen",
            "breedGenBonusMax",
            "breedMutationChance",
            "breedMutationBoost",
            "breedStatCap",
            "breedBonusLevelPerGen",
            "breedBonusLevelMax",
            "breedParentVariantWeight",
            "breedOtherVariantWeight",
            "playLevelUpChance",
            "playLevelUpMaxLevel",
            "spawnAiEnabled",
            "freeRoamSpeedMultiplier",
            "freeRoamFlyingSpeedMultiplier",
            "atypicalBaseChance",
            "atypicalOneParentChance",
            "atypicalBothParentChance",
            "atypicalLevelUpBonus",
            "atypicalAffectionBonus",
            "childAiEnabled",
        )
    val configMobKeys = listOf("baseSpeed", "maxSpeed", "jumpPower", "scaleMin", "scaleMax")
    val configMobNames = PetRegistry.allConfigurableTypes().map { it.name.lowercase() }.sorted()

    val result: List<String> =
        when (args.size) {
          1 ->
              listOf(
                      "version",
                      "reload",
                      "item",
                      "force_store",
                      "force_storeall",
                      "history",
                      "debug_egg",
                      "config",
                  )
                  .filter { it.startsWith(a0) }

          2 ->
              when (a0) {
                "item" ->
                    listOf(
                            "food",
                            "brush",
                            "treat",
                            "heal",
                            "toys",
                            "skillbook",
                            "skillbook1",
                            "skillbook2",
                            "skillbook3",
                            "particle",
                            "all",
                        )
                        .filter { it.startsWith(a1) }

                "force_storeall",
                "history" ->
                    Bukkit.getOnlinePlayers()
                        .map { it.name }
                        .filter { it.lowercase().startsWith(a1) }

                "debug_egg" ->
                    EntityType.entries
                        .filter { it.isSpawnable && it.isAlive }
                        .map { it.name.lowercase() }
                        .filter { it.startsWith(a1) }
                "config" -> listOf("list", "get", "set", "mob").filter { it.startsWith(a1) }

                else -> emptyList()
              }

          3 ->
              when (a0) {
                "history" -> {
                  // ページ番号の候補（1-5程度）
                  (1..5).map { it.toString() }.filter { it.startsWith(args[2]) }
                }

                "debug_egg" -> debugEggKv(args[2].lowercase())

                "config" -> {
                  val cur = args[2].lowercase()
                  when (a1) {
                    "get",
                    "set" -> configGlobalKeys.filter { it.lowercase().startsWith(cur) }
                    "mob" -> configMobNames.filter { it.startsWith(cur) }
                    else -> emptyList()
                  }
                }

                else -> emptyList()
              }

          4 ->
              when {
                a0 == "config" && a1 == "mob" -> {
                  val cur = args[3].lowercase()
                  listOf("list", "get", "set").filter { it.startsWith(cur) }
                }
                a0 == "debug_egg" -> debugEggKv(args.last().lowercase())
                else -> emptyList()
              }

          5 ->
              when {
                a0 == "config" && a1 == "mob" -> {
                  val mobSub = args[3].lowercase()
                  val cur = args[4].lowercase()
                  if (mobSub == "get" || mobSub == "set")
                      configMobKeys.filter { it.lowercase().startsWith(cur) }
                  else emptyList()
                }
                a0 == "debug_egg" -> debugEggKv(args.last().lowercase())
                else -> emptyList()
              }

          else -> if (a0 == "debug_egg") debugEggKv(args.last().lowercase()) else emptyList()
        }
    return result.toMutableList()
  }

  /** /bigwolf コマンドのタブ補完 */
  fun onTabCompletePlayer(args: Array<out String>): List<String> {
    val a0 = args.getOrNull(0)?.lowercase() ?: ""
    val a1 = args.getOrNull(1)?.lowercase() ?: ""
    val a2 = args.getOrNull(2)?.lowercase() ?: ""

    val result: List<String> =
        when (args.size) {
          1 -> {
            val base =
                listOf(
                    "buy",
                    "menu",
                    "storeall",
                    "revive",
                    "dead",
                    "history",
                    "locate",
                    "recover",
                    "breed",
                    "transfer",
                    "list",
                    "version",
                    "abandon",
                )
            base.filter { it.startsWith(a0) }
          }

          2 ->
              when (a0) {
                "buy" -> {
                  PetRegistry.officialPets.map { it.name.lowercase() }.filter { it.startsWith(a1) }
                }
                "revive",
                "locate",
                "recover",
                "abandon" -> {
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
                    VariantHandler.getVariantNames(type)
                        .map { it.lowercase() }
                        .filter { it.startsWith(a1) }
                  } else emptyList()
                }
              }

          3 ->
              when (a0) {
                "buy" -> {
                  val type = runCatching { EntityType.valueOf(args[1].uppercase()) }.getOrNull()
                  if (type != null) {
                    VariantHandler.getVariantNames(type)
                        .map { it.lowercase() }
                        .filter { it.startsWith(args[2].lowercase()) }
                  } else emptyList()
                }
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
