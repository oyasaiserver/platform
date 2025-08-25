package com.baakun.dynamicprofile.listener

import com.baakun.dynamicprofile.util.Tools.getStats
import com.baakun.dynamicprofile.profile.MyProfile
import com.baakun.dynamicprofile.util.Tools.plugin
import net.kyori.adventure.text.serializer.legacy.LegacyComponentSerializer
import org.bukkit.event.EventHandler
import org.bukkit.event.Listener
import org.bukkit.event.player.PlayerEditBookEvent

class BookIntroListener : Listener {
    @EventHandler
    fun onBookSign(event: PlayerEditBookEvent) {
        val player = event.player
        val bookMeta = event.newBookMeta

        if (bookMeta.customModelData!=114514) return
        val stats = getStats(player.uniqueId)

        stats.introduction = if (bookMeta.pageCount > 0) bookMeta.getPage(1) else ""
        player.sendMessage("§a自己紹介を更新しました。プロフィール画面で確認できます。")
        //customModelDataが114514の本をインベントリから探す
      player.inventory.forEach {
        if (it == null) return@forEach
        val im = it.itemMeta ?: return@forEach
        if (!im.hasCustomModelData()) return@forEach
        if (im.customModelData != 114514) return@forEach
        it.amount = 0
      }
        MyProfile.display(player)
    }
}
