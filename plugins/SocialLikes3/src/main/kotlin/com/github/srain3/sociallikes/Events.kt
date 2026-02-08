package com.github.srain3.sociallikes

import com.fren_gor.ultimateAdvancementAPI.advancement.display.AdvancementFrameType
import com.github.srain3.sociallikes.Tools.color
import com.github.srain3.sociallikes.Tools.plugin
import com.github.srain3.sociallikes.Tools.unColor
import com.github.srain3.sociallikes.api.LikeEvent
import com.github.srain3.sociallikes.command.SLUpdate
import com.github.srain3.sociallikes.datas.Data
import com.github.srain3.sociallikes.datas.SLData
import com.github.srain3.sociallikes.discord.SLDiscord
import com.github.srain3.sociallikes.gui.AllBuild
import com.github.srain3.sociallikes.gui.SLSignLikes
import com.github.srain3.sociallikes.gui.SLSignSetting
import com.github.srain3.sociallikes.gui.UserBuild
import java.time.LocalDateTime
import java.util.*
import net.md_5.bungee.api.ChatMessageType
import net.md_5.bungee.api.chat.ClickEvent
import net.md_5.bungee.api.chat.HoverEvent
import net.md_5.bungee.api.chat.TextComponent
import net.md_5.bungee.api.chat.hover.content.Text
import org.bukkit.Bukkit
import org.bukkit.Material
import org.bukkit.NamespacedKey
import org.bukkit.Sound
import org.bukkit.block.BlockFace
import org.bukkit.block.HangingSign
import org.bukkit.block.Sign
import org.bukkit.block.data.type.WallSign
import org.bukkit.block.sign.Side
import org.bukkit.event.EventHandler
import org.bukkit.event.EventPriority
import org.bukkit.event.Listener
import org.bukkit.event.block.Action
import org.bukkit.event.block.BlockBreakEvent
import org.bukkit.event.block.BlockPlaceEvent
import org.bukkit.event.block.SignChangeEvent
import org.bukkit.event.player.PlayerInteractEvent
import org.bukkit.event.player.PlayerJoinEvent
import org.bukkit.inventory.ItemStack
import org.bukkit.inventory.meta.BlockStateMeta
import org.bukkit.persistence.PersistentDataType
import org.bukkit.scheduler.BukkitRunnable

object Events : Listener {
  /** 看板の内容変更をした時 */
  @EventHandler
  fun signEditEvent(e: SignChangeEvent) {
    // 1行目がlikesであれば進む
    // if (e.getLine(0)?.trim()?.lowercase() != "likes") return

    // 1行目がlikesであれば進み、likeであればメッセージを出す
    val line0 = e.getLine(0)?.trim()?.lowercase()
    if (line0 != "likes") {
      if (line0 == "like") {
        e.player.sendMessage(Tools.socialLikesLOGO + " &e現在は\"likes\"と書いたらLike看板を作れます。".color())
      }
      return
    }

    // 表面だけ反応するように、裏面に書いたらメッセージを出す
    if (e.side != Side.FRONT) {
      e.player.sendMessage(Tools.socialLikesLOGO + " &e看板の表面以外には書き込めません!".color())
      return
    }

    // 2行目が書かれているかチェック
    val title = e.getLine(1) ?: return
    if (title.isBlank()) {
      e.player.sendMessage(Tools.socialLikesLOGO + " &c2行目にタイトルを書いてください！".color())
      return
    }

    if (!Data.loading) {
      // ファイルのロードが終わっていない場合の処理
      e.player.sendMessage(Tools.socialLikesLOGO + " &e現在ロード作業中です、しばらくお待ち下さい。".color())
      return
    }

    // 新規IDを取得
    // val id = Data.lastID+1
    // Data.lastID++
    val id =
        if (Data.emptyIDList.isEmpty()) {
          Data.lastID += 1
          Data.lastID
        } else {
          Data.emptyIDList.sort()
          Data.emptyIDList.removeFirst()
        }

    // 看板の装飾
    e.setLine(0, Tools.socialLikesLOGO)
    e.setLine(1, "&a".color() + title)
    e.setLine(2, "&f${e.player.name}".color())
    e.setLine(3, "&7Likes&8: &60".color())

    // 看板ブロックへハニカム(編集ロック)とID埋め込みして更新
    val block = e.block.state
    if (block is Sign) {
      block.isWaxed = true
      block.persistentDataContainer.set(idKey, PersistentDataType.INTEGER, id)
      block.update()
    }

    // SLDataを作成&保存
    val data =
        SLData(
            id,
            e.block.location,
            LocalDateTime.now(),
            e.player.uniqueId,
            title,
            mutableListOf(),
            mutableMapOf(),
            false,
            "No comment",
            e.block.world.name,
            0,
        )

    Data.save(data)

    // GUIへ反映
    AllBuild.updateSLSignData(data)
    UserBuild.updateSLSignData(data)

    // 通知
    Bukkit.spigot().broadcast(TextComponent(" "))
    Bukkit.spigot()
        .broadcast(
            TextComponent(
                    Tools.socialLikesLOGO + "&f${e.player.name}さん&rが「&a${title}&r」を建てました！".color())
                .apply {
                  this.clickEvent =
                      ClickEvent(ClickEvent.Action.RUN_COMMAND, "/sociallikes3:sltp $id")
                  this.hoverEvent =
                      HoverEvent(HoverEvent.Action.SHOW_TEXT, Text("&nクリックでテレポート&rします".color()))
                })
    Bukkit.spigot()
        .broadcast(
            TextComponent("&l&n/sltp ${id}&rで見に行きましょう！".color()).apply {
              this.clickEvent = ClickEvent(ClickEvent.Action.RUN_COMMAND, "/sociallikes3:sltp $id")
              this.hoverEvent =
                  HoverEvent(HoverEvent.Action.SHOW_TEXT, Text("&nクリックでテレポート&rします".color()))
            })
    Bukkit.spigot().broadcast(TextComponent(" "))

    // 通知音
    Bukkit.getOnlinePlayers().forEach {
      it.playSound(it, Sound.ENTITY_FIREWORK_ROCKET_LAUNCH, 2F, 1.15F)
    }

    Thread {
          // Discordへ通知
          val textID = SLDiscord.sendSLEmbedMsg(data)
          data.discordTextID = textID
          Data.delID(data, true)
          Data.save(data)
        }
        .start()
  }

  /** このPluginの看板内部データKey */
  val idKey = NamespacedKey(plugin, "SocialLikes_ID")

  /** (SocialLikes)←これの判定用 */
  private val slSignRegex = Regex("""\(SocialLikes\)""")

  /** \[SocialLikes]←これの判定用(エルちゃん(カイザー)製SL看板用) */
  private val oldSlSignRegex = Regex("""\[SocialLikes]""")

  /** 運営チェックマーク */
  val checkMarkRegex = Regex("""✓""")

  /** プレイヤーの右クリックイベント(看板以外が対象の場合何もせずreturn) */
  @EventHandler(priority = EventPriority.HIGHEST, ignoreCancelled = false)
  fun clickSignEvent(e: PlayerInteractEvent) {
    // 右クリックかつブロックが対象で、そのブロックが看板のときのみ進む
    if (e.action != Action.RIGHT_CLICK_BLOCK) return
    val block = e.clickedBlock?.state
    if (block !is Sign) return

    // 表面の1行目をカラーコードを外して取得、SL3の看板のみ中へ進む
    val unColorFrontL0 = block.getSide(Side.FRONT).getLine(0).unColor()
    if (slSignRegex.containsMatchIn(unColorFrontL0)) {
      // クリックイベントをキャンセルし、埋め込まれたIDからSLDataを取得する。取得できない場合何もしない
      e.isCancelled = true
      if (!Data.loading) {
        // ファイルのロードが終わっていない場合の処理
        e.player.sendMessage(Tools.socialLikesLOGO + " &e現在ロード作業中です、しばらくお待ち下さい。".color())
        return
      }
      val id = block.persistentDataContainer.get(idKey, PersistentDataType.INTEGER) ?: return
      val data = Data.getSLData(id) ?: return

      // クリックされた看板の持っているIDのlocデータと一致しない場合
      // SLUpdateモードなら処理を行う、それ以外はreturn
      if (data.loc != block.location) {
        if (SLUpdate.switch[e.player.uniqueId] == true) {
          val newData =
              SLData(
                  data.id,
                  block.location,
                  data.time,
                  data.owner,
                  data.title,
                  data.likes,
                  data.likesWithTimestamp,
                  data.check,
                  data.comment,
                  block.world.name,
                  data.discordTextID,
              )
          Data.delID(data, true)
          Data.save(newData)
          if (data.loc.world != null) {
            val state = data.loc.block.state
            if (state is Sign) {
              state.block.blockData = Material.AIR.createBlockData()
              state.update()
            }
          }
          e.player.sendMessage(Tools.socialLikesLOGO + "&fアップデートしました！".color())
          SLUpdate.switch[e.player.uniqueId] = false
          // Discordへ反映
          SLDiscord.changeSLDataToMsg(newData)
        }
        return
      }

      // Dataの検証用残骸
      // e.player.sendMessage("id:${data.id}")
      // e.player.sendMessage("loc:${data.loc}")
      // e.player.sendMessage("time:${data.time}")
      // e.player.sendMessage("owner:${data.owner}")
      // e.player.sendMessage("title:${data.title}")
      // e.player.sendMessage("likes:${data.likes}")

      if (e.player.isSneaking) {
        SLSignLikes.createGUI(block, data, (e.player.uniqueId == data.owner), e.player.isOp)
            .show(e.player)
        return
      }

      // いいねを行っているか判断
      if (data.likes.none { it == e.player.uniqueId }) {
        // いいねを行う
        // データに記録・保存する
        data.likes.add(e.player.uniqueId)
        data.likesWithTimestamp[e.player.uniqueId] = System.currentTimeMillis()
        Data.save(data)
        Data.changeUserLikesInt(data.owner, 1)
        AllBuild.updateSLSignData(data)
        UserBuild.updateSLSignData(data)

        block.location.world?.playSound(block.location, Sound.BLOCK_NOTE_BLOCK_CHIME, 2F, 1.225F)
        val text = TextComponent("イイねしました！")
        e.player.spigot().sendMessage(ChatMessageType.ACTION_BAR, text)

        val likeEvent = LikeEvent(e.player.uniqueId, data.owner)
        Bukkit.getPluginManager().callEvent(likeEvent)

        if (e.player.uniqueId != data.owner) {
          Bukkit.dispatchCommand(Bukkit.getConsoleSender(), "eco give ${e.player.name} 1000")
        }

        // 制作者がオンラインの場合通知
        val ownerPlayer = Bukkit.getPlayer(data.owner)
        if (ownerPlayer?.isOnline == true) {
          /*ownerPlayer.spigot().sendMessage(TextComponent(Tools.socialLikesLOGO + "&r「&a${data.title}&7(ID:${id})&r」が ${e.player.name}さんからイイねされました！".color()).apply {
              this.clickEvent = ClickEvent(ClickEvent.Action.RUN_COMMAND, "/sociallikes3:sltp $id")
              this.hoverEvent = HoverEvent(HoverEvent.Action.SHOW_TEXT, Text("&nクリックでその建築へテレポート&rします".color()))
          })*/
          Tools.advAPI.displayCustomToast(
              ownerPlayer,
              ItemStack(Material.OAK_SIGN),
              Tools.socialLikesLOGOShort +
                  "&a${data.title}&7ID:${id}&r\n${e.player.name}&7<&rイイね!".color(),
              AdvancementFrameType.TASK,
          )
          ownerPlayer.playSound(ownerPlayer, Sound.ENTITY_PLAYER_LEVELUP, 1F, 1F)
          if (e.player.uniqueId != data.owner) {
            Bukkit.dispatchCommand(
                Bukkit.getConsoleSender(),
                "tokenmanager:tm add ${ownerPlayer.name} 2",
            )
          }
        } else {
          offlineLikesPoint[data.owner] = (offlineLikesPoint[data.owner] ?: 0) + 2
        }
      } else {
        // すでにいいねをしている
        val text = TextComponent("既にイイねしています！")
        e.player.spigot().sendMessage(ChatMessageType.ACTION_BAR, text)
      }
      // 看板ブロックへlike数を反映させる
      if (checkMarkRegex.containsMatchIn(block.getSide(Side.FRONT).getLine(3))) {
        block.getSide(Side.FRONT).setLine(3, "&7Likes&8: &6${data.likes.count()} &e✓".color())
        if (e.player.isOp) {
          if (!data.check) {
            data.check = true
            Data.save(data)
          }
        }
      } else {
        if (e.player.isOp) {
          block.getSide(Side.FRONT).setLine(3, "&7Likes&8: &6${data.likes.count()} &e✓".color())
          if (!data.check) {
            data.check = true
            Data.save(data)
          }
        } else {
          block.getSide(Side.FRONT).setLine(3, "&7Likes&8: &6${data.likes.count()}".color())
        }
      }
      block.update()
    } else if (oldSlSignRegex.containsMatchIn(unColorFrontL0)) {
      // 旧Like看板の場合
      // クリックイベントをキャンセルし、埋め込まれたIDからSLDataを取得する。取得できない場合何もしない
      e.isCancelled = true

      if (!Data.loading) {
        // ファイルのロードが終わっていない場合の処理
        e.player.sendMessage(Tools.socialLikesLOGO + " &e現在ロード作業中です、しばらくお待ち下さい。".color())
        return
      }
      var id =
          block
              .getSide(Side.FRONT)
              .line(0)
              .style()
              .color()
              ?.asHexString()
              ?.substring(1)
              ?.toIntOrNull(16) ?: return
      id = -id
      val data = Data.getSLData(id) ?: return

      // クリックされた看板の持っているIDのlocデータと一致しない場合
      // SLUpdateモードなら処理を行う、それ以外はreturn
      if (data.loc != block.location) {
        if (SLUpdate.switch[e.player.uniqueId] == true) {
          val newData =
              SLData(
                  data.id,
                  block.location,
                  data.time,
                  data.owner,
                  data.title,
                  data.likes,
                  data.likesWithTimestamp,
                  data.check,
                  data.comment,
                  block.world.name,
                  data.discordTextID,
              )
          Data.delID(data, true)
          Data.save(newData)
          // 看板の装飾
          block.setLine(0, Tools.socialLikesLOGO)
          block.setLine(1, "&a".color() + data.title)
          block.setLine(2, "&f${Bukkit.getOfflinePlayer(data.owner).name}".color())
          block.setLine(
              3,
              "&7Likes&8: &6${data.likes.count()}${if(data.check){" &e✓"}else{""}}".color(),
          )

          block.isWaxed = true
          block.persistentDataContainer.set(idKey, PersistentDataType.INTEGER, id)
          block.update()

          e.player.sendMessage(Tools.socialLikesLOGO + "&fアップデートしました！".color())
          SLUpdate.switch[e.player.uniqueId] = false
        } else {
          e.player.sendMessage(
              Tools.socialLikesLOGO + "&f旧Like看板です。登録データの座標と違います。 運営に報告お願いします".color())
          Bukkit.getLogger().warning("[SocialLikes3] 旧Like看板の座標違いがクリックされました")
          Bukkit.getLogger()
              .warning(
                  "[SocialLikes3] world:${block.location.world.name},x${block.location.x},y${block.location.y},z${block.location.z}")
        }
        return
      }
      // 看板の装飾
      block.setLine(0, Tools.socialLikesLOGO)
      block.setLine(1, "&a".color() + data.title)
      block.setLine(2, "&f${Bukkit.getOfflinePlayer(data.owner).name}".color())
      block.setLine(
          3,
          "&7Likes&8: &6${data.likes.count()}${if(data.check){" &e✓"}else{""}}".color(),
      )

      block.isWaxed = true
      block.persistentDataContainer.set(idKey, PersistentDataType.INTEGER, id)
      block.update()

      e.player.sendMessage(Tools.socialLikesLOGO + "&fアップデートしました！".color())
    }
  }

  /** オフラインの時イイねされたPointを貯めておく */
  val offlineLikesPoint = mutableMapOf<UUID, Int>()

  /** オフライン時のいいねPointをプラグイン無効化時ファイルへ保存 */
  fun offlineLikePointSave() {
    val oldYml = CustomYaml("offlineLikePoint.yml")
    oldYml.delete()
    val yml = CustomYaml("offlineLikePoint.yml")
    offlineLikesPoint.forEach { (uuid, int) -> yml.set(uuid.toString(), int) }
    yml.save()
  }

  /** オフライン時のいいねPointをロード */
  fun offlineLikePointLoad() {
    val yml = CustomYaml("offlineLikePoint.yml")
    yml.getKeys(false).forEach { uuidStr ->
      val pointInt = yml.getInt(uuidStr, 0)
      val uuid = UUID.fromString(uuidStr)
      offlineLikesPoint[uuid] = pointInt
    }
  }

  @EventHandler
  fun joinEvent(e: PlayerJoinEvent) {
    val pointInt = offlineLikesPoint[e.player.uniqueId] ?: return
    Bukkit.dispatchCommand(
        Bukkit.getConsoleSender(),
        "tokenmanager:tm add ${e.player.name} $pointInt",
    )
    offlineLikesPoint.remove(e.player.uniqueId)
  }

  /** SocialLikesの看板が壊れないようにする */
  @EventHandler
  fun brakeSign(e: BlockBreakEvent) {
    val block = e.block.state
    if (block is Sign) {
      // 直接看板を破壊した場合
      checkSLSign(block, e)
      return
    } else {
      // 看板以外を破壊した場合
      val upBlock = block.block.getRelative(BlockFace.UP).state
      val downBlock = block.block.getRelative(BlockFace.DOWN).state
      if (upBlock is Sign && upBlock.blockData !is WallSign) {
        checkSLSign(upBlock, e)
      } else if (downBlock is HangingSign) {
        checkSLSign(downBlock as Sign, e)
      } else {
        for (face in listOf(BlockFace.NORTH, BlockFace.SOUTH, BlockFace.WEST, BlockFace.EAST)) {
          val block2 = block.block.getRelative(face).state
          val blockData = block2.blockData
          if (blockData is WallSign) {
            if (blockData.facing.name == face.name) {
              checkSLSign(block2 as Sign, e)
            }
          }
        }
      }
    }
  }

  /** SL看板の場合イベントキャンセルする */
  private fun checkSLSign(block: Sign, e: BlockBreakEvent) {
    // 表面の1行目をカラーコードを外して取得、SL3の看板のみ中へ進む
    val unColorFrontL0 = block.getSide(Side.FRONT).getLine(0).unColor()
    if (slSignRegex.containsMatchIn(unColorFrontL0)) {
      if (!Data.loading) {
        // ファイルのロードが終わっていない場合の処理
        e.isCancelled = true
        return
      }
      val id = block.persistentDataContainer.get(idKey, PersistentDataType.INTEGER) ?: return
      val data = Data.getSLData(id) ?: return

      // クリックされた看板の持っているIDのlocデータと一致しない場合return
      if (data.loc != block.location) return
      e.isCancelled = true
    } else if (oldSlSignRegex.containsMatchIn(unColorFrontL0)) {
      // 旧Like看板の場合イベントキャンセルのみ行う
      e.isCancelled = true
    }
    if (block.persistentDataContainer.has(SLSignSetting.sltpSignKey)) e.isCancelled = true
  }

  private val sl3Regex = Regex(""""sociallikes3:sociallikes_id":[0-9]+""")
  private val signRegex = Regex("""SIGN""")

  @EventHandler(priority = EventPriority.HIGHEST, ignoreCancelled = false)
  fun slSignPlaceEvent(e: BlockPlaceEvent) {
    // if (!e.player.server.pluginManager.isPluginEnabled("Geyser-Spigot")) return
    // if (!Geyser.api().isBedrockPlayer(e.player.uniqueId)) return
    if (!signRegex.containsMatchIn(e.itemInHand.type.name.uppercase())) return
    val meta = e.itemInHand.itemMeta ?: return
    if (!sl3Regex.containsMatchIn(meta.asString)) return

    val slIDStr = sl3Regex.find(meta.asString)?.value ?: return
    val id = slIDStr.replace("\"sociallikes3:sociallikes_id\":", "").toIntOrNull() ?: return
    val slData = Data.getSLData(id) ?: return

    val sign = e.blockPlaced.state
    if (sign !is Sign) return
    object : BukkitRunnable() {
          override fun run() {
            beSignTask(sign, slData)
          }
        }
        .runTaskLater(plugin, 1)
    // e.isCancelled = true
  }

  private fun beSignTask(sign: Sign, slData: SLData) {
    /*val signData = sign.blockData
    val rotation = if (signData is Rotatable) {
        signData.rotation.name
    } else {
        null
    }
    val face = if (signData is Directional) {
        signData.facing
    } else {
        null
    }*/

    // sign.type = newMaterial
    // sign.update(true,false)

    /*val data = sign.blockData
    if (data is Rotatable) {
        data.rotation = BlockFace.valueOf(rotation!!)
    }
    if (data is Directional) {
        data.facing = face!!
    }
    sign.blockData = data*/
    // sign.update(true,false)

    sign.getSide(Side.FRONT).apply {
      setLine(0, Tools.socialLikesLOGO)
      setLine(1, "&a".color() + slData.title)
      setLine(2, "&f${Bukkit.getOfflinePlayer(slData.owner).name}".color())
      setLine(3, "&7Likes&8: &6${slData.likes.count()}${if (slData.check){" &e✓"}else{""}}".color())
    }
    // sign.update(true,false)

    sign.isWaxed = true
    sign.persistentDataContainer.set(idKey, PersistentDataType.INTEGER, slData.id)
    sign.update(true)
  }

  @EventHandler(priority = EventPriority.MONITOR, ignoreCancelled = true)
  fun handleTeleportSignPlace(e: BlockPlaceEvent) {
    val itemMeta = e.itemInHand.itemMeta as? BlockStateMeta ?: return
    val sourceSign = itemMeta.blockState as? Sign ?: return
    val teleportId =
        sourceSign.persistentDataContainer.get(
            SLSignSetting.sltpSignKey, PersistentDataType.INTEGER) ?: return
    val ownerId =
        sourceSign.persistentDataContainer.get(
            SLSignSetting.sltpSignUUIDKey,
            PersistentDataType.STRING,
        )

    val frontLines = (0 until 4).map { sourceSign.getSide(Side.FRONT).line(it) }
    val backLines = (0 until 4).map { sourceSign.getSide(Side.BACK).line(it) }
    val waxed = sourceSign.isWaxed
    val placedBlock = e.blockPlaced

    val placedState = placedBlock.state
    if (placedState !is Sign) return

    val front = placedState.getSide(Side.FRONT)
    frontLines.forEachIndexed { index, component -> front.line(index, component) }
    val back = placedState.getSide(Side.BACK)
    backLines.forEachIndexed { index, component -> back.line(index, component) }

    placedState.isWaxed = waxed
    placedState.persistentDataContainer.set(
        SLSignSetting.sltpSignKey,
        PersistentDataType.INTEGER,
        teleportId,
    )
    if (ownerId != null) {
      placedState.persistentDataContainer.set(
          SLSignSetting.sltpSignUUIDKey,
          PersistentDataType.STRING,
          ownerId,
      )
    }
    placedState.update(true)

    e.player.sendMessage(Tools.socialLikesLOGO + "&eSLTP看板を設置しました！".color())
    e.player.sendMessage(Tools.socialLikesLOGO + "&e看板を見ながら /slsignbreak で破壊＆再取得できます。".color())
  }
}
