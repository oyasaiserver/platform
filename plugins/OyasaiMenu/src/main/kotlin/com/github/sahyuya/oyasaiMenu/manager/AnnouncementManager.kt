package com.github.sahyuya.oyasaiMenu.manager

import com.github.sahyuya.oyasaiMenu.OyasaiMenu
import java.io.File
import org.bukkit.configuration.file.YamlConfiguration

class AnnouncementManager(private val plugin: OyasaiMenu) {

  data class Announcement(val title: String, val body: List<String>)

  private var currentTitle: String = "&f✦ ようこそ！"
  private var currentBody: List<String> = emptyList()

  // ============================
  // ロード / リロード
  // ============================

  fun loadAll() {
    val file =
        resolveFile()
            ?: run {
              plugin.logger.warning("announcements.yml が見つからず生成にも失敗しました。")
              return
            }
    runCatching { parseFile(file) }
        .onFailure { e -> plugin.logger.warning("AnnouncementManager: YAML 解析エラー — ${e.message}") }
    plugin.logger.info("お知らせ: ロード完了 title='$currentTitle' / ${currentBody.size}行")
  }

  fun reload() = loadAll()

  fun getAnnouncements(): List<Announcement> =
      listOf(Announcement(currentTitle, currentBody.toList()))

  // ============================
  // ファイル解決
  // ============================

  private fun resolveFile(): File? {
    plugin.dataFolder.also { if (!it.exists()) it.mkdirs() }
    val file = File(plugin.dataFolder, "announcements.yml")
    if (file.exists()) return file
    runCatching { plugin.saveResource("announcements.yml", false) }
        .onFailure { plugin.logger.warning("announcements.yml のリソース展開失敗: ${it.message}") }
    return if (file.exists()) file else null
  }

  @Suppress("UNCHECKED_CAST")
  private fun parseFile(file: File) {
    val yaml = YamlConfiguration.loadConfiguration(file)
    val rawList = yaml.getList("announcements")
    if (rawList.isNullOrEmpty()) {
      plugin.logger.info("announcements.yml: 0 件")
      return
    }
    val first = rawList.firstOrNull() as? Map<*, *> ?: return
    currentTitle = first["title"]?.toString() ?: "&fお知らせ"
    currentBody = (first["body"] as? List<*>)?.mapNotNull { it?.toString() } ?: emptyList()
  }
}
