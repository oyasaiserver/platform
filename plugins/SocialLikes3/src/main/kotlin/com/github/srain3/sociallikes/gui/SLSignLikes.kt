package com.github.srain3.sociallikes.gui

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
import net.md_5.bungee.api.chat.ClickEvent
import net.md_5.bungee.api.chat.HoverEvent
import net.md_5.bungee.api.chat.TextComponent
import net.md_5.bungee.api.chat.hover.content.Text
import net.wesjd.anvilgui.AnvilGUI
import org.bukkit.Bukkit
import org.bukkit.Material
import org.bukkit.Sound
import org.bukkit.block.Sign
import org.bukkit.entity.Player
import org.bukkit.event.inventory.InventoryClickEvent
import org.bukkit.inventory.ItemStack
import org.bukkit.inventory.meta.SkullMeta
import java.time.format.DateTimeFormatter

object SLSignLikes {
    fun createGUI(sign: Sign, slData: SLData, owner: Boolean, isOP: Boolean): ChestGui {
        val gui = ChestGui(6,Tools.socialLikesLOGOShort + "&0ID:${slData.id}「&a${slData.title}&0」p1".color())
        gui.setOnTopClick {
            it.isCancelled = true
            if (it.currentItem != null) {
                val player = it.whoClicked as Player
                player.playSound(player, Sound.UI_BUTTON_CLICK, 1F, 1F)
            }
        }
        gui.setOnTopDrag {
            it.isCancelled = true
        }

        val pagePane = PaginatedPane(0,0,9,5)
        val headItemList = mutableListOf<ItemStack>()
        slData.likes.forEach {
            val item = ItemStack(Material.PLAYER_HEAD)
            val meta = item.itemMeta as SkullMeta
            meta.setOwningPlayer(Bukkit.getOfflinePlayer(it))
            item.itemMeta = meta
            headItemList.add(item)
        }
        pagePane.populateWithItemStacks(headItemList)
        gui.addPane(pagePane)

        val navigation = StaticPane(0, 5, 9, 1)
        navigation.addItem(GuiItem(
            ItemStack(Material.RED_WOOL).apply {
                allFlag()
                addText("&f前のページへ", mutableListOf())
            }
        ) { _: InventoryClickEvent? ->
            if (pagePane.page > 0) {
                pagePane.setPage(pagePane.page - 1)
                gui.title = Tools.socialLikesLOGOShort + "&0ID:${slData.id}「&a${slData.title}&0」p${pagePane.page+1}".color()
                gui.update()
            }
        }, 0, 0
        )
        navigation.addItem(GuiItem(
            ItemStack(Material.GREEN_WOOL).apply {
                allFlag()
                addText("&f次のページへ", mutableListOf())
            }
        ) { _: InventoryClickEvent? ->
            if (pagePane.page < pagePane.pages - 1) {
                pagePane.setPage(pagePane.page + 1)
                gui.title = Tools.socialLikesLOGOShort + "&0ID:${slData.id}「&a${slData.title}&0」p${pagePane.page+1}".color()
                gui.update()
            }
        }, 8, 0
        )
        navigation.addItem(GuiItem(
            ItemStack(Material.BARRIER).apply {
                allFlag()
                addText("&c閉じる", mutableListOf())
            }
        ) { event: InventoryClickEvent ->
            event.whoClicked.closeInventory()
        }, 4, 0
        )
        if (owner || isOP) {
            navigation.addItem(
                GuiItem(
                    ItemStack(Material.ENDER_CHEST).allFlag().addText(
                        "&a詳細設定", mutableListOf("&7Like看板の設定を開きます")
                    )
                ) {
                    it.whoClicked.closeInventory()
                    SLSignSetting.createGUI(sign, slData).show(it.whoClicked)
                },
                6, 0
            )
        }
        navigation.addItem(
            GuiItem(
                ItemStack(Material.PAPER).allFlag().addText(
                    "&f>>&a${slData.title} &rID:${slData.id}", mutableListOf(
                        "&3制作者:&f ${Bukkit.getOfflinePlayer(slData.owner).name}",
                        "&3イイね:&f ${slData.likes.count()}",
                        "&3作成日:&f "+slData.time.format(DateTimeFormatter.ofPattern("yyyy/MM/dd HH:mm"))
                    )
                )
            ) {
            },
            7, 0
        )
        if (owner) {
            val lore = slData.comment.split(',')
            navigation.addItem(
                GuiItem(
                    ItemStack(Material.WRITABLE_BOOK).allFlag().addText(
                        "&fコメントを編集する", mutableListOf("&7現在の状態:").apply { addAll(lore) }
                    )
                ) {
                    it.whoClicked.closeInventory()
                    commentEdit((it.whoClicked as Player), slData)
                },
                1,0
            )
        } else {
            val lore = slData.comment.split(',')
            navigation.addItem(
                GuiItem(
                    ItemStack(Material.WRITTEN_BOOK).allFlag().addText(
                        "&7コメント", lore.toMutableList()
                    )
                ),
                1,0
            )
        }
        val ownerHeadItem = ItemStack(Material.PLAYER_HEAD)
        val meta = ownerHeadItem.itemMeta as SkullMeta
        val offlineOwnerPlayer = Bukkit.getOfflinePlayer(slData.owner)
        meta.setOwningPlayer(offlineOwnerPlayer)
        ownerHeadItem.itemMeta = meta
        navigation.addItem(
            GuiItem(
                ownerHeadItem.allFlag().addText(
                    "&f${offlineOwnerPlayer.name}さんの建築一覧を見る", mutableListOf("&7この方が建てた他の建築を見れます")
                )
            ) {
                it.whoClicked.closeInventory()
                UserBuild.createGUI(offlineOwnerPlayer,(it.whoClicked as Player)).show(it.whoClicked)
            },
            3,0
        )
        navigation.addItem(GuiItem(
            ItemStack(Material.ACACIA_SIGN).apply {
                allFlag()
                addText("&fリポスト(宣伝)", mutableListOf("&310&fP&7を消費してオンラインプレイヤーへ宣伝します"))
            }
        ) { event: InventoryClickEvent ->
            event.whoClicked.closeInventory()
            val tm = Tools.getTokenManager() ?: run {
                Tools.plugin.logger.warning("TokenManager null!!!!")
                event.whoClicked.sendMessage(Tools.socialLikesLOGO+"&c内部エラーが発生しました、申し訳ございません。".color())
                event.whoClicked.sendMessage(Tools.socialLikesLOGO+"&cError: TM null.".color())
                return@GuiItem
            }
            val player = event.whoClicked as Player
            val bal = tm.getTokens(player)
            if (bal.isEmpty) {
                return@GuiItem
            } else {
                if (bal.asLong < 10) {
                    player.sendMessage(Tools.socialLikesLOGO+"&eポイント不足です!".color())
                    return@GuiItem
                } else {
                    tm.removeTokens(player, 10)
                    player.sendMessage(Tools.socialLikesLOGO+"&e10p消費しました!".color())
                }
            }

            //通知
            Bukkit.spigot().broadcast(TextComponent("&d[${event.whoClicked.name}さんからの宣伝]".color()))
            Bukkit.spigot().broadcast(TextComponent(Tools.socialLikesLOGO + "&f${offlineOwnerPlayer.name}さん&rの「&a${slData.title}&r」を見に行きましょう！".color()).apply {
                this.clickEvent = ClickEvent(ClickEvent.Action.RUN_COMMAND, "/sociallikes3:sltp ${slData.id}")
                this.hoverEvent = HoverEvent(HoverEvent.Action.SHOW_TEXT, Text("&nクリックでテレポート&rします".color()))
            })
            Bukkit.spigot().broadcast(TextComponent("&l&n/sltp ${slData.id}&r".color()).apply {
                this.clickEvent = ClickEvent(ClickEvent.Action.RUN_COMMAND, "/sociallikes3:sltp ${slData.id}")
                this.hoverEvent = HoverEvent(HoverEvent.Action.SHOW_TEXT, Text("&nクリックでテレポート&rします".color()))
            })
            Bukkit.spigot().broadcast(TextComponent(" "))

            PublicityHistory.addData(event.whoClicked.uniqueId, slData.id)

            //通知音
            Bukkit.getOnlinePlayers().forEach {
                it.playSound(it, Sound.ENTITY_FIREWORK_ROCKET_LAUNCH, 2F, 1.15F)
            }
        }, 2, 0
        )
        gui.addPane(navigation)

        gui.update()
        return gui
    }

    private fun commentEdit(player: Player, slData: SLData) {
        AnvilGUI.Builder().apply {
            itemLeft(ItemStack(Material.WRITABLE_BOOK).allFlag().addText(
                slData.comment, mutableListOf("&7出力先(右側)にあるこの本をクリックで確定します","&7普通に閉じた場合はキャンセルです","&7カンマ(,)で改行扱いします")
            ))
            onClick { slot, e ->
                if(slot != AnvilGUI.Slot.OUTPUT) {
                    return@onClick listOf()
                }

                if(e.text.isNotBlank()) {
                    slData.comment = e.text
                    Data.save(slData)
                    e.player.playSound(player, Sound.UI_BUTTON_CLICK, 1F, 1F)
                    return@onClick listOf(AnvilGUI.ResponseAction.close())
                } else {
                    return@onClick listOf(AnvilGUI.ResponseAction.replaceInputText(""))
                }
            }
            title(Tools.socialLikesLOGOShort+"&0コメント編集".color())
            plugin(Tools.plugin)
            open(player)
        }
    }
}