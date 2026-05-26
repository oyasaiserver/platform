package com.github.sahyuya.oyasaiMenu.guimaker

import java.util.Locale
import net.luckperms.api.LuckPermsProvider
import org.bukkit.Material

data class PermissionGroupChoice(
    val name: String,
    val displayName: String,
    val category: String,
    val weight: Int,
) {
  val value: String = "lpgroup:$name"
}

object GuiPermissionCatalog {
  fun collectGroups(): List<PermissionGroupChoice> =
      runCatching {
            LuckPermsProvider.get().groupManager.loadedGroups.map { group ->
              val name = group.name.lowercase(Locale.ROOT)
              PermissionGroupChoice(
                  name = name,
                  displayName = displayName(name, group.displayName),
                  category = category(name),
                  weight = group.weight.orElse(0),
              )
            }
          }
          .getOrElse { emptyList() }
          .distinctBy { it.name }
          .sortedWith(
              compareBy<PermissionGroupChoice> {
                    categoryOrder().indexOf(it.category).takeIf { index -> index >= 0 } ?: 999
                  }
                  .thenByDescending { it.weight }
                  .thenBy { it.name }
          )

  fun categoryMaterial(category: String): Material =
      when (category) {
        "プレイヤーランク" -> Material.EMERALD
        "建築ランク" -> Material.BRICKS
        "特別ロール" -> Material.FEATHER
        "スタッフ" -> Material.NETHER_STAR
        else -> Material.PAPER
      }

  fun groupMaterial(group: PermissionGroupChoice): Material =
      when (group.category) {
        "プレイヤーランク" -> Material.EMERALD
        "建築ランク" -> if (group.name == "takumi") Material.DIAMOND_PICKAXE else Material.BRICKS
        "特別ロール" -> if (group.name == "fly") Material.FEATHER else Material.LAPIS_LAZULI
        "スタッフ" -> Material.NETHER_STAR
        else -> Material.PAPER
      }

  private fun categoryOrder(): List<String> = listOf("プレイヤーランク", "建築ランク", "特別ロール", "スタッフ", "その他")

  private fun category(name: String): String =
      when (name.lowercase(Locale.ROOT)) {
        "default",
        "shokyu",
        "beginner",
        "member",
        "chukyu",
        "jokyu" -> "プレイヤーランク"
        "builder",
        "takumi" -> "建築ランク"
        "fly",
        "white",
        "blue" -> "特別ロール"
        "admin",
        "owner",
        "staff",
        "mod",
        "moderator" -> "スタッフ"
        else -> "その他"
      }

  private fun displayName(name: String, lpDisplayName: String?): String =
      when (name.lowercase(Locale.ROOT)) {
        "default" -> "初期"
        "shokyu",
        "beginner" -> "初級者"
        "chukyu" -> "中級者"
        "jokyu" -> "上級者"
        "builder" -> "建築士"
        "takumi" -> "たくみ"
        "fly" -> "Fly"
        "white" -> "White"
        "blue" -> "Blue"
        "mod",
        "moderator" -> "Moderator"
        "admin" -> "Admin"
        else -> lpDisplayName?.takeIf { it.isNotBlank() } ?: name
      }
}
