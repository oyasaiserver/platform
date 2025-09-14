package com.github.srain3.sociallikes.gui

import com.github.srain3.sociallikes.Events
import com.github.srain3.sociallikes.Tools
import com.github.srain3.sociallikes.Tools.addText
import com.github.srain3.sociallikes.Tools.allFlag
import com.github.srain3.sociallikes.Tools.color
import com.github.srain3.sociallikes.datas.Data
import com.github.srain3.sociallikes.datas.SLData
import com.github.srain3.sociallikes.discord.SLDiscord
import com.github.stefvanschie.inventoryframework.gui.GuiItem
import com.github.stefvanschie.inventoryframework.gui.type.ChestGui
import com.github.stefvanschie.inventoryframework.pane.StaticPane
import net.wesjd.anvilgui.AnvilGUI
import org.bukkit.Material
import org.bukkit.Sound
import org.bukkit.block.BlockFace
import org.bukkit.block.Sign
import org.bukkit.block.data.Directional
import org.bukkit.block.data.Rotatable
import org.bukkit.block.sign.Side
import org.bukkit.entity.Player
import org.bukkit.inventory.ItemStack
import org.bukkit.persistence.PersistentDataType

object SLSignSetting {

    //釣り看板かどうか
    private val hangingRegex = Regex("""HANGING""")
    //壁付きかどうか
    private val wallRegex = Regex("""WALL""")

    fun createGUI(sign: Sign, slData: SLData): ChestGui {
        val gui = ChestGui(3,Tools.socialLikesLOGOShort + "&0ID:${slData.id}「&a${slData.title}&0」Setting".color())
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

        val pane = StaticPane(0,0,9,3)
        pane.apply {
            addItem(
                GuiItem(ItemStack(Material.OAK_SIGN).allFlag().addText(
                    "&aオークの看板へ変更する", mutableListOf("&7材質をオークへ変えます")
                )) {
                    val oldMaterialName = sign.type.name
                    val newMaterial = if (hangingRegex.containsMatchIn(oldMaterialName)) {
                        if (wallRegex.containsMatchIn(oldMaterialName)) {
                            Material.OAK_WALL_HANGING_SIGN
                        } else {
                            Material.OAK_HANGING_SIGN
                        }
                    } else {
                        if (wallRegex.containsMatchIn(oldMaterialName)) {
                            Material.OAK_WALL_SIGN
                        } else {
                            Material.OAK_SIGN
                        }
                    }
                    changeSignType(sign,newMaterial,slData.id)
                    it.whoClicked.closeInventory()
                },
                0,0
            )
            addItem(
                GuiItem(ItemStack(Material.SPRUCE_SIGN).allFlag().addText(
                    "&aトウヒの看板へ変更する", mutableListOf("&7材質をトウヒへ変えます")
                )) {
                    val oldMaterialName = sign.type.name
                    val newMaterial = if (hangingRegex.containsMatchIn(oldMaterialName)) {
                        if (wallRegex.containsMatchIn(oldMaterialName)) {
                            Material.SPRUCE_WALL_HANGING_SIGN
                        } else {
                            Material.SPRUCE_HANGING_SIGN
                        }
                    } else {
                        if (wallRegex.containsMatchIn(oldMaterialName)) {
                            Material.SPRUCE_WALL_SIGN
                        } else {
                            Material.SPRUCE_SIGN
                        }
                    }
                    changeSignType(sign,newMaterial,slData.id)
                    it.whoClicked.closeInventory()
                },
                1,0
            )
            addItem(
                GuiItem(ItemStack(Material.BIRCH_SIGN).allFlag().addText(
                    "&aシラカバの看板へ変更する", mutableListOf("&7材質をシラカバへ変えます")
                )) {
                    val oldMaterialName = sign.type.name
                    val newMaterial = if (hangingRegex.containsMatchIn(oldMaterialName)) {
                        if (wallRegex.containsMatchIn(oldMaterialName)) {
                            Material.BIRCH_WALL_HANGING_SIGN
                        } else {
                            Material.BIRCH_HANGING_SIGN
                        }
                    } else {
                        if (wallRegex.containsMatchIn(oldMaterialName)) {
                            Material.BIRCH_WALL_SIGN
                        } else {
                            Material.BIRCH_SIGN
                        }
                    }
                    changeSignType(sign,newMaterial,slData.id)
                    it.whoClicked.closeInventory()
                },
                2,0
            )
            addItem(
                GuiItem(ItemStack(Material.JUNGLE_SIGN).allFlag().addText(
                    "&aジャングルの看板へ変更する", mutableListOf("&7材質をジャングルへ変えます")
                )) {
                    val oldMaterialName = sign.type.name
                    val newMaterial = if (hangingRegex.containsMatchIn(oldMaterialName)) {
                        if (wallRegex.containsMatchIn(oldMaterialName)) {
                            Material.JUNGLE_WALL_HANGING_SIGN
                        } else {
                            Material.JUNGLE_HANGING_SIGN
                        }
                    } else {
                        if (wallRegex.containsMatchIn(oldMaterialName)) {
                            Material.JUNGLE_WALL_SIGN
                        } else {
                            Material.JUNGLE_SIGN
                        }
                    }
                    changeSignType(sign,newMaterial,slData.id)
                    it.whoClicked.closeInventory()
                },
                3,0
            )
            addItem(
                GuiItem(ItemStack(Material.ACACIA_SIGN).allFlag().addText(
                    "&aアカシアの看板へ変更する", mutableListOf("&7材質をアカシアへ変えます")
                )) {
                    val oldMaterialName = sign.type.name
                    val newMaterial = if (hangingRegex.containsMatchIn(oldMaterialName)) {
                        if (wallRegex.containsMatchIn(oldMaterialName)) {
                            Material.ACACIA_WALL_HANGING_SIGN
                        } else {
                            Material.ACACIA_HANGING_SIGN
                        }
                    } else {
                        if (wallRegex.containsMatchIn(oldMaterialName)) {
                            Material.ACACIA_WALL_SIGN
                        } else {
                            Material.ACACIA_SIGN
                        }
                    }
                    changeSignType(sign,newMaterial,slData.id)
                    it.whoClicked.closeInventory()
                },
                4,0
            )
            addItem(
                GuiItem(ItemStack(Material.DARK_OAK_SIGN).allFlag().addText(
                    "&aダークオークの看板へ変更する", mutableListOf("&7材質をダークオークへ変えます")
                )) {
                    val oldMaterialName = sign.type.name
                    val newMaterial = if (hangingRegex.containsMatchIn(oldMaterialName)) {
                        if (wallRegex.containsMatchIn(oldMaterialName)) {
                            Material.DARK_OAK_WALL_HANGING_SIGN
                        } else {
                            Material.DARK_OAK_HANGING_SIGN
                        }
                    } else {
                        if (wallRegex.containsMatchIn(oldMaterialName)) {
                            Material.DARK_OAK_WALL_SIGN
                        } else {
                            Material.DARK_OAK_SIGN
                        }
                    }
                    changeSignType(sign,newMaterial,slData.id)
                    it.whoClicked.closeInventory()
                },
                5,0
            )
            addItem(
                GuiItem(ItemStack(Material.MANGROVE_SIGN).allFlag().addText(
                    "&aマングローブの看板へ変更する", mutableListOf("&7材質をマングローブへ変えます")
                )) {
                    val oldMaterialName = sign.type.name
                    val newMaterial = if (hangingRegex.containsMatchIn(oldMaterialName)) {
                        if (wallRegex.containsMatchIn(oldMaterialName)) {
                            Material.MANGROVE_WALL_HANGING_SIGN
                        } else {
                            Material.MANGROVE_HANGING_SIGN
                        }
                    } else {
                        if (wallRegex.containsMatchIn(oldMaterialName)) {
                            Material.MANGROVE_WALL_SIGN
                        } else {
                            Material.MANGROVE_SIGN
                        }
                    }
                    changeSignType(sign,newMaterial,slData.id)
                    it.whoClicked.closeInventory()
                },
                0,1
            )
            addItem(
                GuiItem(ItemStack(Material.CHERRY_SIGN).allFlag().addText(
                    "&aサクラの看板へ変更する", mutableListOf("&7材質をサクラへ変えます")
                )) {
                    val oldMaterialName = sign.type.name
                    val newMaterial = if (hangingRegex.containsMatchIn(oldMaterialName)) {
                        if (wallRegex.containsMatchIn(oldMaterialName)) {
                            Material.CHERRY_WALL_HANGING_SIGN
                        } else {
                            Material.CHERRY_HANGING_SIGN
                        }
                    } else {
                        if (wallRegex.containsMatchIn(oldMaterialName)) {
                            Material.CHERRY_WALL_SIGN
                        } else {
                            Material.CHERRY_SIGN
                        }
                    }
                    changeSignType(sign,newMaterial,slData.id)
                    it.whoClicked.closeInventory()
                },
                1,1
            )
            addItem(
                GuiItem(ItemStack(Material.BAMBOO_SIGN).allFlag().addText(
                    "&a竹の看板へ変更する", mutableListOf("&7材質を竹へ変えます")
                )) {
                    val oldMaterialName = sign.type.name
                    val newMaterial = if (hangingRegex.containsMatchIn(oldMaterialName)) {
                        if (wallRegex.containsMatchIn(oldMaterialName)) {
                            Material.BAMBOO_WALL_HANGING_SIGN
                        } else {
                            Material.BAMBOO_HANGING_SIGN
                        }
                    } else {
                        if (wallRegex.containsMatchIn(oldMaterialName)) {
                            Material.BAMBOO_WALL_SIGN
                        } else {
                            Material.BAMBOO_SIGN
                        }
                    }
                    changeSignType(sign,newMaterial,slData.id)
                    it.whoClicked.closeInventory()
                },
                2,1
            )
            addItem(
                GuiItem(ItemStack(Material.CRIMSON_SIGN).allFlag().addText(
                    "&a真紅の看板へ変更する", mutableListOf("&7材質を真紅へ変えます")
                )) {
                    val oldMaterialName = sign.type.name
                    val newMaterial = if (hangingRegex.containsMatchIn(oldMaterialName)) {
                        if (wallRegex.containsMatchIn(oldMaterialName)) {
                            Material.CRIMSON_WALL_HANGING_SIGN
                        } else {
                            Material.CRIMSON_HANGING_SIGN
                        }
                    } else {
                        if (wallRegex.containsMatchIn(oldMaterialName)) {
                            Material.CRIMSON_WALL_SIGN
                        } else {
                            Material.CRIMSON_SIGN
                        }
                    }
                    changeSignType(sign,newMaterial,slData.id)
                    it.whoClicked.closeInventory()
                },
                4,1
            )
            addItem(
                GuiItem(ItemStack(Material.WARPED_SIGN).allFlag().addText(
                    "&a歪んだ看板へ変更する", mutableListOf("&7材質を歪んだ木材へ変えます")
                )) {
                    val oldMaterialName = sign.type.name
                    val newMaterial = if (hangingRegex.containsMatchIn(oldMaterialName)) {
                        if (wallRegex.containsMatchIn(oldMaterialName)) {
                            Material.WARPED_WALL_HANGING_SIGN
                        } else {
                            Material.WARPED_HANGING_SIGN
                        }
                    } else {
                        if (wallRegex.containsMatchIn(oldMaterialName)) {
                            Material.WARPED_WALL_SIGN
                        } else {
                            Material.WARPED_SIGN
                        }
                    }
                    changeSignType(sign,newMaterial,slData.id)
                    it.whoClicked.closeInventory()
                },
                5,1
            )
        }
        pane.apply {
            addItem(
                GuiItem(ItemStack(Material.NAME_TAG).allFlag().addText(
                    "&aタイトルを変更する", mutableListOf("&7看板のタイトルを変えれます")
                )) {
                    it.whoClicked.closeInventory()
                    titleChangeAnvilGUI(sign, slData, (it.whoClicked as Player))
                },
                7,0
            )
            addItem(
                GuiItem(ItemStack(Material.STRUCTURE_VOID).allFlag().addText(
                    "&a看板を再入手する", mutableListOf("&7位置を変更するためのSL看板を入手します","&7Shift押しながらクリックすると吊り看板になります")
                )) {
                    it.whoClicked.closeInventory()
                    (it.whoClicked as Player).performCommand("slsignget ${slData.id} ${if (it.isShiftClick){"hanging"}else{""}}")
                },
                7,1
            )
            addItem(
                GuiItem(ItemStack(Material.TNT).allFlag().addText(
                    "&c看板を消去する", mutableListOf("&7Like看板を消去できます")
                )) {
                    it.whoClicked.closeInventory()
                    SLSignDel.createGUI(sign, slData).show(it.whoClicked)
                },
                7,2
            )
        }
        gui.addPane(pane)

        gui.update()

        return gui
    }

    private fun changeSignType(sign: Sign, newMaterial: Material, id: Int) {
        val fL = sign.getSide(Side.FRONT).lines.toList()
        val bL = sign.getSide(Side.BACK).lines.toList()

        val signData = sign.blockData
        val rotation = if (signData is Rotatable) {
            signData.rotation.name
        } else {
            null
        }
        val face = if (signData is Directional) {
            signData.facing
        } else {
            null
        }

        sign.type = newMaterial
        sign.update(true)

        val data = sign.blockData
        if (data is Rotatable) {
            data.rotation = BlockFace.valueOf(rotation!!)
        }
        if (data is Directional) {
            data.facing = face!!
        }
        sign.blockData = data
        sign.update(true)

        fL.forEachIndexed { i, str ->
            sign.getSide(Side.FRONT).setLine(i, str)
        }
        bL.forEachIndexed { i, str ->
            sign.getSide(Side.BACK).setLine(i, str)
        }
        sign.update(true)

        sign.isWaxed = true
        sign.persistentDataContainer.set(Events.idKey, PersistentDataType.INTEGER, id)
        sign.update(true)
    }

    private fun titleChangeAnvilGUI(sign: Sign,slData: SLData,player: Player) {
        AnvilGUI.Builder().apply {
            itemLeft(ItemStack(Material.OAK_SIGN).allFlag().addText(
                slData.title, mutableListOf("&7出力先(右側)にあるこの看板をクリックで確定します","&7普通に閉じた場合はキャンセルです")
            ))
            onClick { slot, e ->
                if(slot != AnvilGUI.Slot.OUTPUT) {
                    return@onClick listOf()
                }

                if(e.text.isNotBlank()) {
                    sign.getSide(Side.FRONT).setLine(1, "&a${e.text}".color())
                    sign.update()
                    slData.title = e.text
                    Data.save(slData)
                    //GUIへ反映
                    AllBuild.updateSLSignData(slData)
                    UserBuild.updateSLSignData(slData)
                    e.player.sendMessage(Tools.socialLikesLOGO+"&r タイトルを変更しました!".color())
                    e.player.playSound(player, Sound.UI_BUTTON_CLICK, 1F, 1F)
                    //Discordへ反映
                    SLDiscord.changeSLDataToMsg(slData)
                    return@onClick listOf(AnvilGUI.ResponseAction.close())
                } else {
                    return@onClick listOf(AnvilGUI.ResponseAction.replaceInputText(""))
                }
            }
            title(Tools.socialLikesLOGOShort+"&0title change".color())
            plugin(Tools.plugin)
            open(player)
        }
    }
}