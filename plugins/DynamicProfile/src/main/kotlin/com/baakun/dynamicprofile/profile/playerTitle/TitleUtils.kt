package com.baakun.dynamicprofile.profile.playerTitle

import com.baakun.dynamicprofile.DynamicProfile.Companion.allTitles
import com.baakun.dynamicprofile.Tools
import com.google.gson.GsonBuilder
import com.google.gson.reflect.TypeToken
import java.io.File
import java.io.FileWriter
import java.nio.charset.StandardCharsets
import java.util.*
import java.util.stream.Collectors
import org.bukkit.Bukkit
import org.bukkit.entity.Player

object TitleUtils {
  val titleFile = File(Tools.plugin.dataFolder.path + "/Titles.json")
  val gson = GsonBuilder().excludeFieldsWithoutExposeAnnotation().setPrettyPrinting().create()

  fun loadTitles() {
    titleFile.parentFile.mkdirs()
    if (titleFile.createNewFile()) {
      titleFile.writeText("{}", StandardCharsets.UTF_8)
    }
    allTitles =
      gson.fromJson(titleFile.readText(), object : TypeToken<MutableMap<Int, Title>>() {}.type)
  }

  fun saveTitles() {
    titleFile.parentFile.mkdirs()
    titleFile.createNewFile()
    FileWriter(titleFile, StandardCharsets.UTF_8).use { writer -> gson.toJson(allTitles, writer) }
  }

  fun createNewTitle(title: String, rarity: Int): String {
    val newId =
      (0..Int.MAX_VALUE).firstOrNull { it !in allTitles.keys }
        ?: return "新しいIDが作成できませんでした（一応設定したエラーメッセージ）"
    allTitles[newId] = Title(newId, title, mutableListOf(), rarity, System.currentTimeMillis())
    return "称号を作成 名前:$title バリュー:$rarity"
  }

  fun giveTitle(player: UUID, titleId: Int): String {
    val title = allTitles[titleId] ?: return "称号id $titleId は存在しません。"
    if (player !in title.owners) {
      title.owners.add(player)
      return "プレイヤー ${Bukkit.getOfflinePlayer(player).name} に称号id $titleId を与えました。"
    }
    return "プレイヤー ${Bukkit.getOfflinePlayer(player).name} は既に称号 $titleId を所有しています。"
  }

  fun deTitle(player: UUID, titleId: Int): String {
    val title = allTitles[titleId] ?: return "称号 $titleId は存在しません。"
    if (player in title.owners) {
      title.owners.remove(player)
      return "プレイヤー ${Bukkit.getOfflinePlayer(player).name} から称号 $titleId をはく奪しました。"
    }
    return "プレイヤー ${Bukkit.getOfflinePlayer(player).name} は称号 $titleId を所有していません。"
  }

  fun removeTitle(titleId: Int): String {
    if (!allTitles.containsKey(titleId)) return "称号 $titleId は存在しません。"
    allTitles.remove(titleId)
    return "称号 $titleId を削除しました。"
  }

  fun getTitleFromId(id: Int?): Title {
    return allTitles.get(id) ?: Title(-1, "Title id $id は存在しません")
  }

  fun getTitles(player: Player): MutableList<Int> {
    return getTitles(player.uniqueId)
  }

  fun getTitles(uuid: UUID): MutableList<Int> {
    return allTitles.values
      .stream()
      .filter { it: Title -> it.owners.contains(uuid) }
      .map { it.id }
      .collect(Collectors.toList())
  }

  /** 指定した称号の所有者リストをGUIで表示する */
  fun showTitleOwners(player: Player, titleId: Int) {
    TitleGui.showTitleOwnersGui(player, titleId)
  }

  /** 指定したプレイヤーの所有称号リストをGUIで表示する */
  fun showPlayerTitles(player: Player, targetPlayerName: String) {
    TitleGui.showPlayerTitlesGui(player, targetPlayerName)
  }
}
