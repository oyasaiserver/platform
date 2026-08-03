package com.github.sahyuya.oyasaiMusic.gui

import net.kyori.adventure.text.Component
import net.kyori.adventure.text.format.NamedTextColor

/** 楽曲カードで繰り返し使う作者・統計行の配色を統一する。 */
object SongLoreComponents {
  fun author(authorName: String): Component =
      Component.text("作者: ", NamedTextColor.GRAY)
          .append(Component.text(authorName, NamedTextColor.AQUA))

  fun statistics(likes: Long, views: Long): Component =
      Component.text("いいね: ", NamedTextColor.GRAY)
          .append(Component.text(likes.toString(), NamedTextColor.YELLOW))
          .append(Component.text("  再生数: ", NamedTextColor.GRAY))
          .append(Component.text(views.toString(), NamedTextColor.YELLOW))
}
