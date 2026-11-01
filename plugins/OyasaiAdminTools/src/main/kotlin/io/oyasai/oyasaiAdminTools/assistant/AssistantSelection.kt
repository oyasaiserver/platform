package io.oyasai.oyasaiAdminTools.assistant

import com.sk89q.worldedit.IncompleteRegionException
import com.sk89q.worldedit.LocalSession
import com.sk89q.worldedit.WorldEdit
import com.sk89q.worldedit.bukkit.BukkitAdapter
import com.sk89q.worldedit.world.World
import java.util.Locale
import org.bukkit.entity.Player

internal object AssistantSelection {
  fun read(player: Player): String =
      try {
        if (!player.server.pluginManager.isPluginEnabled("FastAsyncWorldEdit"))
            "このサーバーでは選択範囲を取得できません（FAWE が使えません）。"
        else FaweSelection.read(player)
      } catch (_: Throwable) {
        // FAWE is optional; linkage errors must not disable the assistant.
        "このサーバーでは選択範囲を取得できません（FAWE が使えません）。"
      }
}

// Keep optional FAWE types out of AssistantSelection's signatures and initialization.
internal object FaweSelection {
  fun read(player: Player): String =
      read(
          WorldEdit.getInstance().sessionManager.getIfPresent(BukkitAdapter.adapt(player)),
          BukkitAdapter.adapt(player.world),
      )

  fun read(session: LocalSession?, world: World): String {
    val selectionWorld = session?.selectionWorld ?: return "選択範囲がありません。"
    if (selectionWorld != world) return "選択範囲のワールドが現在のワールドと異なります。"
    val region =
        try {
          session.getSelection(world)
        } catch (_: IncompleteRegionException) {
          return "選択範囲がありません（選択が未完了です）。"
        }
    val min = region.minimumPoint
    val max = region.maximumPoint
    val shape = region.javaClass.simpleName.removeSuffix("Region").lowercase(Locale.ROOT)
    return "world=${world.name}; shape=$shape; " +
        "min=(${min.x()},${min.y()},${min.z()}); max=(${max.x()},${max.y()},${max.z()}); " +
        "size=(x=${max.x().toLong() - min.x() + 1},y=${max.y().toLong() - min.y() + 1},z=${max.z().toLong() - min.z() + 1}); " +
        "blocks=${region.volume}"
  }
}
