package com.github.srain3.sociallikes.gui

import com.destroystokyo.paper.profile.ProfileProperty
import com.github.srain3.sociallikes.Tools
import com.github.srain3.sociallikes.Tools.addText
import com.github.srain3.sociallikes.Tools.allFlag
import com.github.srain3.sociallikes.Tools.color
import com.github.srain3.sociallikes.datas.Data
import com.github.srain3.sociallikes.datas.PublicityHistory
import com.github.srain3.sociallikes.datas.SLData
import com.github.stefvanschie.inventoryframework.gui.GuiItem
import com.github.stefvanschie.inventoryframework.gui.type.ChestGui
import com.github.stefvanschie.inventoryframework.pane.PaginatedPane
import com.github.stefvanschie.inventoryframework.pane.StaticPane
import com.github.stefvanschie.inventoryframework.pane.util.Slot
import com.google.gson.JsonParser
import java.net.HttpURLConnection
import java.net.URL
import java.time.format.DateTimeFormatter
import java.util.Base64
import java.util.UUID
import java.util.concurrent.ConcurrentHashMap
import net.md_5.bungee.api.chat.ClickEvent
import net.md_5.bungee.api.chat.HoverEvent
import net.md_5.bungee.api.chat.TextComponent
import net.md_5.bungee.api.chat.hover.content.Text
import org.bukkit.Bukkit
import org.bukkit.Material
import org.bukkit.Sound
import org.bukkit.block.Sign
import org.bukkit.entity.Player
import org.bukkit.event.inventory.InventoryClickEvent
import org.bukkit.inventory.ItemFlag
import org.bukkit.inventory.ItemStack
import org.bukkit.inventory.meta.SkullMeta
import org.bukkit.scheduler.BukkitTask

object SLSignLikes {

  private val profileCache = ConcurrentHashMap<UUID, Pair<String, String?>>()

  private fun createLoadingItem(): ItemStack {
    return ItemStack(Material.PLAYER_HEAD).apply {
      itemMeta =
          itemMeta?.apply {
            setDisplayName("§7読み込み中...")
            lore = mutableListOf("§7プレイヤーデータを取得中...")
            addItemFlags(ItemFlag.HIDE_ADDITIONAL_TOOLTIP)
          }
    }
  }

  private fun createBedrockItem(): ItemStack {
    return ItemStack(Material.PLAYER_HEAD).apply {
      itemMeta =
          itemMeta?.apply {
            setDisplayName("§7Bedrock Player")
            lore = mutableListOf("§7統合版プレイヤー")
            addItemFlags(ItemFlag.HIDE_ADDITIONAL_TOOLTIP)
          }
    }
  }

  private fun createUnknownItem(): ItemStack {
    return ItemStack(Material.PLAYER_HEAD).apply {
      itemMeta =
          itemMeta?.apply {
            setDisplayName("§cUnknown Player")
            addItemFlags(ItemFlag.HIDE_ADDITIONAL_TOOLTIP)
          }
    }
  }

  // 保留中のGUI更新タスク (スレッド安全のためConcurrentHashMapを使用)
  private val pendingUpdates = ConcurrentHashMap<ChestGui, BukkitTask>()

  private fun isFloodgatePseudoUUID(uuid: UUID): Boolean {
    return uuid.toString().startsWith("00000000-0000-0000-0009-")
  }

  private fun fetchFromPlayerDB(uuid: UUID): Pair<String, String?>? {
    return try {
      val cleanUuid = uuid.toString().replace("-", "")
      val url = URL("https://playerdb.co/api/player/minecraft/$cleanUuid")
      val conn = url.openConnection() as HttpURLConnection
      conn.requestMethod = "GET"
      conn.connectTimeout = 3000
      conn.readTimeout = 3000
      conn.setRequestProperty("User-Agent", "Mozilla/5.0 (Minecraft Server / SocialLikes Plugin)")
      conn.setRequestProperty("Accept", "application/json")
      conn.instanceFollowRedirects = true

      if (conn.responseCode != 200) return null

      val response = conn.inputStream.bufferedReader().use { it.readText() }
      val json = JsonParser.parseString(response).asJsonObject

      if (json.get("code")?.asString != "player.found") return null

      val playerObj = json.getAsJsonObject("data").getAsJsonObject("player")
      val username = playerObj.get("username")?.asString ?: return null
      val skinTexture = playerObj.get("skin_texture")?.asString

      Pair(username, skinTexture)
    } catch (e: Exception) {
      null
    }
  }

  private fun createPlayerHead(uuid: UUID, name: String, textureUrl: String?): ItemStack {
    val item = ItemStack(Material.PLAYER_HEAD)
    val meta = item.itemMeta as SkullMeta

    val profile = Bukkit.createProfile(uuid, name)

    if (textureUrl != null) {
      val textureJson = """{"textures":{"SKIN":{"url":"$textureUrl"}}}"""
      val base64 = Base64.getEncoder().encodeToString(textureJson.toByteArray(Charsets.UTF_8))
      profile.properties.add(ProfileProperty("textures", base64))
    }

    meta.ownerProfile = profile
    meta.setDisplayName("§f${name} の頭")
    meta.addItemFlags(ItemFlag.HIDE_ADDITIONAL_TOOLTIP)
    item.itemMeta = meta
    return item
  }

  private fun scheduleUpdate(pagePane: PaginatedPane, headStacks: List<ItemStack>, gui: ChestGui) {
    pendingUpdates[gui]?.cancel()
    val task =
        Bukkit.getScheduler()
            .runTaskLater(
                Tools.plugin,
                Runnable {
                  pendingUpdates.remove(gui)
                  val currentPage = pagePane.page
                  pagePane.populateWithItemStacks(headStacks)
                  if (currentPage < pagePane.pages) {
                    pagePane.setPage(currentPage)
                  } else if (pagePane.pages > 0) {
                    pagePane.setPage(pagePane.pages - 1)
                  }
                  gui.update()
                },
                2L,
            )
    pendingUpdates[gui] = task
  }

  private fun loadHeadsAsync(
      uuids: List<UUID>,
      headStacks: MutableList<ItemStack>,
      pagePane: PaginatedPane,
      gui: ChestGui,
  ) {
    if (uuids.isEmpty()) return

    Bukkit.getScheduler()
        .runTaskAsynchronously(
            Tools.plugin,
            Runnable {
              uuids.forEachIndexed { index, uuid ->
                // 1. キャッシュヒット
                val cached = profileCache[uuid]
                if (cached != null) {
                  Bukkit.getScheduler()
                      .runTask(
                          Tools.plugin,
                          Runnable {
                            headStacks[index] = createPlayerHead(uuid, cached.first, cached.second)
                            scheduleUpdate(pagePane, headStacks, gui)
                          },
                      )
                  return@forEachIndexed
                }

                // 2. Floodgate擬似UUIDはAPI検索を完全スキップ
                if (isFloodgatePseudoUUID(uuid)) {
                  Bukkit.getScheduler()
                      .runTask(
                          Tools.plugin,
                          Runnable {
                            headStacks[index] = createBedrockItem()
                            scheduleUpdate(pagePane, headStacks, gui)
                          },
                      )
                  return@forEachIndexed
                }

                // 3. サーバーキャッシュ（usercache.json）から名前を取得
                val resolvedName: String? =
                    try {
                      Bukkit.getOfflinePlayer(uuid).name
                    } catch (e: Exception) {
                      null
                    }

                // 4. PlayerDB APIで名前とテクスチャを一括取得
                val playerDBResult = fetchFromPlayerDB(uuid)
                if (playerDBResult != null) {
                  profileCache[uuid] = playerDBResult
                  Bukkit.getScheduler()
                      .runTask(
                          Tools.plugin,
                          Runnable {
                            headStacks[index] =
                                createPlayerHead(uuid, playerDBResult.first, playerDBResult.second)
                            scheduleUpdate(pagePane, headStacks, gui)
                          },
                      )
                  Thread.sleep(50)
                  return@forEachIndexed
                }

                // 5. PlayerDB失敗時 → サーバーキャッシュの名前があればそれで仮表示
                if (resolvedName != null) {
                  profileCache[uuid] = Pair(resolvedName, null)
                  Bukkit.getScheduler()
                      .runTask(
                          Tools.plugin,
                          Runnable {
                            headStacks[index] = createPlayerHead(uuid, resolvedName, null)
                            scheduleUpdate(pagePane, headStacks, gui)
                          },
                      )
                  return@forEachIndexed
                }

                // 6. 名前解決できなければ Unknown
                Bukkit.getScheduler()
                    .runTask(
                        Tools.plugin,
                        Runnable {
                          headStacks[index] = createUnknownItem()
                          scheduleUpdate(pagePane, headStacks, gui)
                        },
                    )

                Thread.sleep(50)
              }
            },
        )
  }

  fun createGUI(sign: Sign, slData: SLData, owner: Boolean, isOP: Boolean): ChestGui {
    val gui =
        ChestGui(6, Tools.socialLikesLOGOShort + "&0ID:${slData.id}「&2${slData.title}&0」p1".color())
    gui.setOnTopClick {
      it.isCancelled = true
      if (it.currentItem != null) {
        val player = it.whoClicked as Player
        player.playSound(player, Sound.UI_BUTTON_CLICK, 1F, 1F)
      }
    }
    gui.setOnTopDrag { it.isCancelled = true }

    val pagePane = PaginatedPane(9, 5)
    val headStacks =
        java.util.Collections.synchronizedList(
            MutableList(slData.likes.size) { createLoadingItem() }
        )
    pagePane.populateWithItemStacks(headStacks)
    gui.addPane(Slot.fromXY(0, 0), pagePane)

    loadHeadsAsync(slData.likes, headStacks, pagePane, gui)

    val navigation = StaticPane(9, 1)
    navigation.addItem(
        GuiItem(
            ItemStack(Material.RED_WOOL).apply {
              allFlag()
              addText("&f前のページへ", mutableListOf())
            }
        ) { _: InventoryClickEvent? ->
          if (pagePane.page > 0) {
            pagePane.setPage(pagePane.page - 1)
            gui.title =
                Tools.socialLikesLOGOShort +
                    "&0ID:${slData.id}「&2${slData.title}&0」p${pagePane.page+1}".color()
            pagePane.populateWithItemStacks(headStacks)
            gui.update()
          }
        },
        0,
        0,
    )
    navigation.addItem(
        GuiItem(
            ItemStack(Material.GREEN_WOOL).apply {
              allFlag()
              addText("&f次のページへ", mutableListOf())
            }
        ) { _: InventoryClickEvent? ->
          if (pagePane.page < pagePane.pages - 1) {
            pagePane.setPage(pagePane.page + 1)
            gui.title =
                Tools.socialLikesLOGOShort +
                    "&0ID:${slData.id}「&2${slData.title}&0」p${pagePane.page+1}".color()
            pagePane.populateWithItemStacks(headStacks)
            gui.update()
          }
        },
        8,
        0,
    )
    navigation.addItem(
        GuiItem(
            ItemStack(Material.BARRIER).apply {
              allFlag()
              addText("&c閉じる", mutableListOf())
            }
        ) { event: InventoryClickEvent ->
          event.whoClicked.closeInventory()
        },
        4,
        0,
    )
    if (owner || isOP) {
      navigation.addItem(
          GuiItem(
              ItemStack(Material.ENDER_CHEST)
                  .allFlag()
                  .addText("&a詳細設定", mutableListOf("&7Like看板の設定を開きます"))
          ) {
            it.whoClicked.closeInventory()
            SLSignSetting.createGUI(sign, slData).show(it.whoClicked)
          },
          6,
          0,
      )
    }
    navigation.addItem(
        GuiItem(
            ItemStack(Material.PAPER)
                .allFlag()
                .addText(
                    "&f>>&a${slData.title} &rID:${slData.id}",
                    mutableListOf(
                        "&3制作者:&f ${Bukkit.getOfflinePlayer(slData.owner).name}",
                        "&3イイね:&f ${slData.likes.count()}",
                        "&3作成日:&f " +
                            slData.time.format(DateTimeFormatter.ofPattern("yyyy/MM/dd HH:mm")),
                    ),
                )
        ) {},
        7,
        0,
    )
    if (owner) {
      val lore = slData.comment.split(',')
      navigation.addItem(
          GuiItem(
              ItemStack(Material.WRITABLE_BOOK)
                  .allFlag()
                  .addText("&fコメントを編集する", mutableListOf("&7現在の状態:").apply { addAll(lore) })
          ) {
            it.whoClicked.closeInventory()
            commentEdit((it.whoClicked as Player), slData)
          },
          1,
          0,
      )
    } else {
      val lore = slData.comment.split(',')
      navigation.addItem(
          GuiItem(
              ItemStack(Material.WRITTEN_BOOK).allFlag().addText("&7コメント", lore.toMutableList())
          ),
          1,
          0,
      )
    }

    // --- 所有者ヘッド: createPlayerHead で統一 ---
    val ownerName = Bukkit.getOfflinePlayer(slData.owner).name ?: "Unknown"
    val ownerHeadItem = createPlayerHead(slData.owner, ownerName, null)

    navigation.addItem(
        GuiItem(
            ownerHeadItem
                .allFlag()
                .addText(
                    "&f${ownerName}さんの建築一覧を見る",
                    mutableListOf("&7この方が建てた他の建築を見れます"),
                )
        ) {
          it.whoClicked.closeInventory()
          UserBuild.createGUI(Bukkit.getOfflinePlayer(slData.owner), (it.whoClicked as Player))
              .show(it.whoClicked)
        },
        5,
        0,
    )
    navigation.addItem(
        GuiItem(
            ItemStack(Material.ACACIA_SIGN).apply {
              allFlag()
              addText("&fリポスト(宣伝)", mutableListOf("&310&fP&7を消費してオンラインプレイヤーへ宣伝します"))
            }
        ) { event: InventoryClickEvent ->
          event.whoClicked.closeInventory()
          val tm =
              Tools.getTokenManager()
                  ?: run {
                    Tools.plugin.logger.warning("TokenManager null!!!!")
                    event.whoClicked.sendMessage(
                        Tools.socialLikesLOGO + "&c内部エラーが発生しました、申し訳ございません。".color()
                    )
                    event.whoClicked.sendMessage(
                        Tools.socialLikesLOGO + "&cError: TM null.".color()
                    )
                    return@GuiItem
                  }
          val player = event.whoClicked as Player
          val bal = tm.getTokens(player)
          if (bal.isEmpty) {
            return@GuiItem
          } else {
            if (bal.asLong < 10) {
              player.sendMessage(Tools.socialLikesLOGO + "&eポイント不足です!".color())
              return@GuiItem
            } else {
              tm.removeTokens(player, 10)
              player.sendMessage(Tools.socialLikesLOGO + "&e10p消費しました!".color())
            }
          }

          // 通知
          Bukkit.spigot().broadcast(TextComponent("&d[${event.whoClicked.name}さんからの宣伝]".color()))
          Bukkit.spigot()
              .broadcast(
                  TextComponent(
                          Tools.socialLikesLOGO +
                              "&f${ownerName}さん&rの「&a${slData.title}&r」を見に行きましょう！".color()
                      )
                      .apply {
                        this.clickEvent =
                            ClickEvent(
                                ClickEvent.Action.RUN_COMMAND,
                                "/sociallikes3:sltp ${slData.id}",
                            )
                        this.hoverEvent =
                            HoverEvent(
                                HoverEvent.Action.SHOW_TEXT,
                                Text("&nクリックでテレポート&rします".color()),
                            )
                      }
              )
          Bukkit.spigot()
              .broadcast(
                  TextComponent("&l&n/sltp ${slData.id}&r".color()).apply {
                    this.clickEvent =
                        ClickEvent(ClickEvent.Action.RUN_COMMAND, "/sociallikes3:sltp ${slData.id}")
                    this.hoverEvent =
                        HoverEvent(HoverEvent.Action.SHOW_TEXT, Text("&nクリックでテレポート&rします".color()))
                  }
              )
          Bukkit.spigot().broadcast(TextComponent(" "))

          PublicityHistory.addData(event.whoClicked.uniqueId, slData.id)

          // 通知音
          Bukkit.getOnlinePlayers().forEach {
            it.playSound(it, Sound.ENTITY_FIREWORK_ROCKET_LAUNCH, 2F, 1.15F)
          }
        },
        2,
        0,
    )
    gui.addPane(Slot.fromXY(0, 5), navigation)

    gui.update()
    return gui
  }

  private fun commentEdit(player: Player, slData: SLData) {
    val item =
        ItemStack(Material.WRITABLE_BOOK)
            .allFlag()
            .addText(
                slData.comment,
                mutableListOf(
                    "&7出力先(右側)にあるこの本をクリックで確定します",
                    "&7普通に閉じた場合はキャンセルです",
                    "&7カンマ(,)で改行扱いします",
                ),
            )
    SocialLikesAnvilInput.open(player, Tools.socialLikesLOGOShort + "&0コメント編集".color(), item) {
        p,
        text ->
      slData.comment = text
      Data.save(slData)
      p.playSound(player, Sound.UI_BUTTON_CLICK, 1F, 1F)
    }
  }
}
