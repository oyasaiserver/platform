package com.github.srain3.sociallikes.gui

import com.github.srain3.sociallikes.CustomYaml
import com.github.srain3.sociallikes.Events
import com.github.srain3.sociallikes.Tools
import com.github.srain3.sociallikes.Tools.addText
import com.github.srain3.sociallikes.Tools.allFlag
import com.github.srain3.sociallikes.Tools.color
import com.github.srain3.sociallikes.Tools.getTokenManager
import com.github.srain3.sociallikes.Tools.plugin
import com.github.srain3.sociallikes.datas.Data
import com.github.srain3.sociallikes.datas.SLData
import com.github.srain3.sociallikes.discord.SLDiscord
import com.github.stefvanschie.inventoryframework.gui.GuiItem
import com.github.stefvanschie.inventoryframework.gui.type.ChestGui
import com.github.stefvanschie.inventoryframework.pane.StaticPane
import com.github.stefvanschie.inventoryframework.pane.util.Slot
import java.util.UUID
import me.realized.tokenmanager.api.TokenManager
import net.kyori.adventure.text.Component
import net.kyori.adventure.text.event.ClickEvent
import net.kyori.adventure.text.format.TextColor
import org.bukkit.Bukkit
import org.bukkit.Material
import org.bukkit.NamespacedKey
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

  // 吊り看板かどうか
  private val hangingRegex = Regex("""HANGING""")
  // 壁付きかどうか
  private val wallRegex = Regex("""WALL""")

  val sltpSignKey = NamespacedKey(plugin, "SocialLikes_TPsign")
  val sltpSignUUIDKey = NamespacedKey(plugin, "SocialLikes_TPsign_owner")

  private data class SignMaterialOption(
      val itemMaterial: Material,
      val woodName: String,
      val displayName: String,
      val loreName: String,
      val x: Int,
      val y: Int,
  )

  private val signMaterialOptions =
      listOf(
          SignMaterialOption(Material.OAK_SIGN, "OAK", "オーク", "オーク", 0, 0),
          SignMaterialOption(Material.SPRUCE_SIGN, "SPRUCE", "トウヒ", "トウヒ", 1, 0),
          SignMaterialOption(Material.BIRCH_SIGN, "BIRCH", "シラカバ", "シラカバ", 2, 0),
          SignMaterialOption(Material.JUNGLE_SIGN, "JUNGLE", "ジャングル", "ジャングル", 3, 0),
          SignMaterialOption(Material.ACACIA_SIGN, "ACACIA", "アカシア", "アカシア", 4, 0),
          SignMaterialOption(Material.DARK_OAK_SIGN, "DARK_OAK", "ダークオーク", "ダークオーク", 5, 0),
          SignMaterialOption(Material.MANGROVE_SIGN, "MANGROVE", "マングローブ", "マングローブ", 0, 1),
          SignMaterialOption(Material.CHERRY_SIGN, "CHERRY", "サクラ", "サクラ", 1, 1),
          SignMaterialOption(Material.BAMBOO_SIGN, "BAMBOO", "竹", "竹", 2, 1),
          SignMaterialOption(Material.PALE_OAK_SIGN, "PALE_OAK", "ペールオーク", "ペールオーク", 3, 1),
          SignMaterialOption(Material.CRIMSON_SIGN, "CRIMSON", "真紅", "真紅", 4, 1),
          SignMaterialOption(Material.WARPED_SIGN, "WARPED", "歪んだ", "歪んだ木材", 5, 1),
      )

  private fun shapeSuffix(material: Material): String {
    val name = material.name
    val isHanging = hangingRegex.containsMatchIn(name)
    val isWall = wallRegex.containsMatchIn(name)
    return when {
      isHanging && isWall -> "_WALL_HANGING_SIGN"
      isHanging -> "_HANGING_SIGN"
      isWall -> "_WALL_SIGN"
      else -> "_SIGN"
    }
  }

  private fun materialForCurrentShape(currentMaterial: Material, woodName: String): Material =
      Material.valueOf("$woodName${shapeSuffix(currentMaterial)}")

  private fun asItemSignMaterial(material: Material): Material {
    val name = material.name
    return when {
      name.endsWith("_WALL_HANGING_SIGN") ->
          Material.valueOf(name.replace("_WALL_HANGING_SIGN", "_HANGING_SIGN"))
      name.endsWith("_HANGING_SIGN") -> material
      name.endsWith("_WALL_SIGN") -> Material.valueOf(name.replace("_WALL_SIGN", "_SIGN"))
      name.endsWith("_SIGN") -> material
      else -> Material.OAK_SIGN
    }
  }

  fun createCommandSignItem(
      material: Material = Material.OAK_SIGN,
      slData: SLData,
      owner: UUID,
  ): ItemStack {
    val itemMaterial = asItemSignMaterial(material)
    val item = ItemStack(itemMaterial)
    val meta = item.itemMeta as org.bukkit.inventory.meta.BlockStateMeta
    val signState = meta.blockState as Sign

    val front = signState.getSide(Side.FRONT)
    front.line(
        0,
        Component.text("(SocialTeleport)")
            .clickEvent(ClickEvent.runCommand("/sltp ${slData.id}"))
            .color(TextColor.color(0, 170, 0)),
    )
    front.line(1, Component.text("[${slData.title}]").color(TextColor.color(85, 255, 85)))
    front.line(
        2,
        Component.text("${(Bukkit.getOfflinePlayer(slData.owner).name)}")
            .color(TextColor.color(255, 255, 255)),
    )
    front.line(
        3,
        Component.text("SLID: ")
            .color(TextColor.color(170, 170, 170))
            .append(Component.text(slData.id).color(TextColor.color(255, 170, 0))),
    )

    signState.isWaxed = true

    signState.persistentDataContainer.set(sltpSignKey, PersistentDataType.INTEGER, slData.id)
    signState.persistentDataContainer.set(
        sltpSignUUIDKey,
        PersistentDataType.STRING,
        owner.toString(),
    )
    meta.blockState = signState

    meta.itemName(
        (Component.text("SLTP看板 ")
            .color(TextColor.color(85, 255, 85))
            .append(
                Component.text("(${slData.title}, ID: ${slData.id})")
                    .color(TextColor.color(255, 85, 255))
            ))
    )
    item.itemMeta = meta
    return item
  }

  fun createGUI(sign: Sign, slData: SLData): ChestGui {
    val gui =
        ChestGui(
            3,
            Tools.socialLikesLOGOShort + "&0ID:${slData.id}「&a${slData.title}&0」Setting".color(),
        )
    gui.setOnTopClick {
      it.isCancelled = true
      if (it.currentItem != null) {
        val player = it.whoClicked as Player
        player.playSound(player, Sound.UI_BUTTON_CLICK, 1F, 1F)
      }
    }
    gui.setOnTopDrag { it.isCancelled = true }

    val config = CustomYaml("sltpsign.yml")
    val sltpSignCostCreative = config.getLong("priceSltpSignCreative", 100L)
    val sltpSignCost = config.getLong("priceSltpSign", 50L)

    val pane = StaticPane(9, 3)
    pane.apply {
      addItem(
          GuiItem(
              ItemStack(Material.ENDER_EYE)
                  .allFlag()
                  .addText(
                      "&aSLTP看板を入手する",
                      mutableListOf(
                          "※SL看板ではありません。",
                          "※クリエ権限あり: ${sltpSignCostCreative}pt / それ以外: ${sltpSignCost}pt",
                      ),
                  )
          ) {
            val player = it.whoClicked as Player
            val token: TokenManager? = getTokenManager()
            if (token != null && token.getTokens(player) != null) {
              val cost = if (Tools.canUseCreative(player)) sltpSignCostCreative else sltpSignCost
              if (token.getTokens(player).asLong < cost) {
                player.sendMessage("${Tools.socialLikesLOGO} &cSLTP看板の取得には投票ポイントが${cost}pt必要です。")
              } else {
                val sltpSignItem = createCommandSignItem(sign.type, slData, player.uniqueId)
                token.removeTokens(player, cost)
                player.inventory.addItem(sltpSignItem)
                player.sendMessage("${Tools.socialLikesLOGO} &aSLTP看板を付与しました。".color())
                player.playSound(player, Sound.ENTITY_ITEM_PICKUP, 1f, 1f)
              }
            }
          },
          0,
          2,
      )
      signMaterialOptions.forEach { option ->
        addItem(
            GuiItem(
                ItemStack(option.itemMaterial)
                    .allFlag()
                    .addText(
                        "&a${option.displayName}の看板へ変更する",
                        mutableListOf("&7材質を${option.loreName}へ変えます"),
                    )
            ) {
              changeSignType(sign, materialForCurrentShape(sign.type, option.woodName), slData.id)
              it.whoClicked.closeInventory()
            },
            option.x,
            option.y,
        )
      }
    }
    pane.apply {
      addItem(
          GuiItem(
              ItemStack(Material.NAME_TAG)
                  .allFlag()
                  .addText("&aタイトルを変更する", mutableListOf("&7看板のタイトルを変えれます"))
          ) {
            it.whoClicked.closeInventory()
            titleChangeAnvilInput(sign, slData, (it.whoClicked as Player))
          },
          7,
          0,
      )
      addItem(
          GuiItem(
              ItemStack(Material.STRUCTURE_VOID)
                  .allFlag()
                  .addText(
                      "&a看板を再入手する",
                      mutableListOf("&7位置を変更するためのSL看板を入手します", "&7Shift押しながらクリックすると吊り看板になります"),
                  )
          ) {
            it.whoClicked.closeInventory()
            (it.whoClicked as Player).performCommand(
                "slsignget ${slData.id} ${if (it.isShiftClick){"hanging"}else{""}}"
            )
          },
          7,
          1,
      )
      addItem(
          GuiItem(
              ItemStack(Material.TNT)
                  .allFlag()
                  .addText("&c看板を消去する", mutableListOf("&7Like看板を消去できます"))
          ) {
            it.whoClicked.closeInventory()
            SLSignDel.createGUI(sign, slData).show(it.whoClicked)
          },
          7,
          2,
      )
    }
    gui.addPane(Slot.fromXY(0, 0), pane)

    gui.update()

    return gui
  }

  private fun changeSignType(sign: Sign, newMaterial: Material, id: Int) {
    val fL = sign.getSide(Side.FRONT).lines.toList()
    val bL = sign.getSide(Side.BACK).lines.toList()

    val signData = sign.blockData
    val rotation =
        if (signData is Rotatable) {
          signData.rotation.name
        } else {
          null
        }
    val face =
        if (signData is Directional) {
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

    fL.forEachIndexed { i, str -> sign.getSide(Side.FRONT).setLine(i, str) }
    bL.forEachIndexed { i, str -> sign.getSide(Side.BACK).setLine(i, str) }
    sign.update(true)

    sign.isWaxed = true
    sign.persistentDataContainer.set(Events.idKey, PersistentDataType.INTEGER, id)
    sign.update(true)
  }

  private fun titleChangeAnvilInput(sign: Sign, slData: SLData, player: Player) {
    val item =
        ItemStack(Material.OAK_SIGN)
            .allFlag()
            .addText(
                slData.title,
                mutableListOf("&7出力先(右側)にあるこの看板をクリックで確定します", "&7普通に閉じた場合はキャンセルです"),
            )
    SocialLikesAnvilInput.open(
        player,
        Tools.socialLikesLOGOShort + "&0title change".color(),
        item,
    ) { p, text ->
      sign.getSide(Side.FRONT).setLine(1, "&a${text}".color())
      sign.update()
      slData.title = text
      Data.save(slData)
      // GUIへ反映
      AllBuild.updateSLSignData(slData)
      UserBuild.updateSLSignData(slData)
      p.sendMessage(Tools.socialLikesLOGO + "&r タイトルを変更しました!".color())
      p.playSound(player, Sound.UI_BUTTON_CLICK, 1F, 1F)
      // Discordへ反映
      SLDiscord.changeSLDataToMsg(slData)
    }
  }
}
