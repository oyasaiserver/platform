package com.github.srain3.sociallikes

import com.github.srain3.sociallikes.Tools.color
import com.github.srain3.sociallikes.Tools.isLegacySLSign
import com.github.srain3.sociallikes.Tools.isSLSign
import com.github.srain3.sociallikes.Tools.oldSlSignRegex
import com.github.srain3.sociallikes.Tools.plugin
import com.github.srain3.sociallikes.Tools.slSignRegex
import com.github.srain3.sociallikes.Tools.unColor
import com.github.srain3.sociallikes.Tools.updateLegacySLSign
import com.github.srain3.sociallikes.Tools.updateSLSign
import com.github.srain3.sociallikes.api.LikeEvent
import com.github.srain3.sociallikes.command.SLUpdate
import com.github.srain3.sociallikes.datas.Data
import com.github.srain3.sociallikes.datas.SLData
import com.github.srain3.sociallikes.datas.SLDatabase
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
import org.bukkit.entity.Player
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

    // 新規IDを取得 (ID再利用なし、常に最大ID+1)
    val id = Data.getNextID()

    val signMaterial = e.block.type.name

    // SLDataを作成&保存
    val data =
        SLData(
            id = id,
            loc = e.block.location,
            time = LocalDateTime.now(),
            owner = e.player.uniqueId,
            title = title,
            likes = mutableListOf(),
            likesWithTimestamp = mutableMapOf(),
            check = false,
            comment = "No comment",
            worldName = e.block.world.name,
            discordTextID = 0,
            signMaterial = signMaterial,
        )

    Data.save(data, e.player.uniqueId)

    // 看板の装飾
    e.setLine(0, Tools.socialLikesLOGO)
    e.setLine(1, "&a".color() + title)
    e.setLine(2, "&f${e.player.name}".color())
    e.setLine(3, "&7Likes&8: &60".color())

    // 看板ブロックへハニカム(編集ロック)とID埋め込みして更新
    val block = e.block.state
    if (block is Sign) {
      block.isWaxed = true
      markSignIdGeneration2(block, id)
    }

    SLDatabase.upsertPlayer(e.player.uniqueId, e.player.name)

    // イベントログを記録
    val afterJson =
        com.google.gson
            .Gson()
            .toJson(
                mapOf(
                    "id" to id,
                    "title" to title,
                    "world" to e.block.world.name,
                    "x" to e.block.location.x,
                    "y" to e.block.location.y,
                    "z" to e.block.location.z,
                    "sign_material" to signMaterial,
                )
            )
    SLDatabase.recordEvent(id, "created", e.player.uniqueId, null, afterJson)

    // GUIへ反映
    AllBuild.updateSLSignData(data)
    UserBuild.updateSLSignData(data)

    // 通知
    Bukkit.spigot().broadcast(TextComponent(" "))
    Bukkit.spigot()
        .broadcast(
            TextComponent(
                    Tools.socialLikesLOGO + "&f${e.player.name}さん&rが「&a${title}&r」を建てました！".color()
                )
                .apply {
                  this.clickEvent =
                      ClickEvent(ClickEvent.Action.RUN_COMMAND, "/sociallikes3:sltp $id")
                  this.hoverEvent =
                      HoverEvent(HoverEvent.Action.SHOW_TEXT, Text("&nクリックでテレポート&rします".color()))
                }
        )
    Bukkit.spigot()
        .broadcast(
            TextComponent("&l&n/sltp ${id}&rで見に行きましょう！".color()).apply {
              this.clickEvent = ClickEvent(ClickEvent.Action.RUN_COMMAND, "/sociallikes3:sltp $id")
              this.hoverEvent =
                  HoverEvent(HoverEvent.Action.SHOW_TEXT, Text("&nクリックでテレポート&rします".color()))
            }
        )
    Bukkit.spigot().broadcast(TextComponent(" "))

    // 通知音
    Bukkit.getOnlinePlayers().forEach {
      it.playSound(it, Sound.ENTITY_FIREWORK_ROCKET_LAUNCH, 2F, 1.15F)
    }

    Thread {
          // Discordへ通知
          val textID = SLDiscord.sendSLEmbedMsg(data)
          data.discordTextID = textID
          Data.save(data)
        }
        .start()
  }

  /** このPluginの看板内部データKey */
  val idKey = NamespacedKey(plugin, "SocialLikes_ID")

  /** 再取得したSL看板アイテムの復元用データKey */
  val slSignItemIdKey = NamespacedKey(plugin, "sociallikes_id")

  /** ID移行後に新IDを持つことを明示する世代マーカー。 */
  val idGenerationKey = NamespacedKey(plugin, "id_generation")
  const val CURRENT_ID_GENERATION = 2

  /** 世代2ならIDをそのまま返し、旧世代だけを移行表で一度だけ解決する。 */
  fun readSignId(sign: Sign): Int? {
    val rawId = sign.persistentDataContainer.get(idKey, PersistentDataType.INTEGER) ?: return null
    val generation = sign.persistentDataContainer.get(idGenerationKey, PersistentDataType.INTEGER)
    return if (generation == CURRENT_ID_GENERATION) rawId else SLDatabase.resolveMigratedId(rawId)
  }

  /** 看板のIDと世代マーカーを同時に更新する。 */
  fun markSignIdGeneration2(sign: Sign, id: Int) {
    sign.persistentDataContainer.set(idKey, PersistentDataType.INTEGER, id)
    sign.persistentDataContainer.set(
        idGenerationKey,
        PersistentDataType.INTEGER,
        CURRENT_ID_GENERATION,
    )
    sign.update(true)
  }

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
    if (isSLSign(block)) {
      // クリックイベントをキャンセルし、埋め込まれたIDからSLDataを取得する。取得できない場合何もしない
      e.isCancelled = true
      if (!Data.loading) {
        // ファイルのロードが終わっていない場合の処理
        e.player.sendMessage(Tools.socialLikesLOGO + " &e現在ロード作業中です、しばらくお待ち下さい。".color())
        return
      }
      val rawId = block.persistentDataContainer.get(idKey, PersistentDataType.INTEGER) ?: return
      val id = readSignId(block) ?: return
      if (
          id != rawId ||
              block.persistentDataContainer.get(idGenerationKey, PersistentDataType.INTEGER) !=
                  CURRENT_ID_GENERATION
      )
          markSignIdGeneration2(block, id)
      val data = Data.getSLData(id) ?: return

      // クリックされた看板の持っているIDのlocデータと一致しない場合
      // SLUpdateモードなら処理を行う、それ以外はreturn
      if (data.loc != block.location) {
        if (SLUpdate.switch[e.player.uniqueId] == true) {
          updateSLSign(data, block, e.player.uniqueId)
          e.player.sendMessage(Tools.socialLikesLOGO + "&fアップデートしました！".color())
          SLUpdate.switch[e.player.uniqueId] = false
        }
        return
      }

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
        Data.save(data, e.player.uniqueId)
        SLDatabase.upsertPlayer(e.player.uniqueId, e.player.name)
        Data.changeUserLikesInt(data.owner, 1)

        // イベントログを記録
        SLDatabase.recordEvent(
            data.id,
            "liked",
            e.player.uniqueId,
            null,
            com.google.gson.Gson().toJson(mapOf("player" to e.player.uniqueId.toString())),
        )

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
          Tools.displaySocialLikeToast(
              ownerPlayer,
              ItemStack(Material.OAK_SIGN),
              Tools.socialLikesLOGOShort +
                  "&a${data.title} &7ID:${id}&r\n${e.player.name}&7 > &rイイね!".color(),
          )
          ownerPlayer.playSound(ownerPlayer, Sound.ENTITY_PLAYER_LEVELUP, 1F, 1F)
          if (e.player.uniqueId != data.owner) {
            if (Tools.addTokens(ownerPlayer, 2)) {
              sendLikeRewardMessage(ownerPlayer, 2)
            }
          }
        } else {
          addOfflineLikePoints(data.owner, 2)
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
            val beforeCheck = data.check
            data.check = true
            Data.save(data, e.player.uniqueId)
            SLDatabase.recordEvent(
                data.id,
                "checked_changed",
                e.player.uniqueId,
                com.google.gson.Gson().toJson(mapOf("checked" to beforeCheck)),
                com.google.gson.Gson().toJson(mapOf("checked" to true)),
            )
          }
        }
      } else {
        if (e.player.isOp) {
          block.getSide(Side.FRONT).setLine(3, "&7Likes&8: &6${data.likes.count()} &e✓".color())
          if (!data.check) {
            val beforeCheck = data.check
            data.check = true
            Data.save(data, e.player.uniqueId)
            SLDatabase.recordEvent(
                data.id,
                "checked_changed",
                e.player.uniqueId,
                com.google.gson.Gson().toJson(mapOf("checked" to beforeCheck)),
                com.google.gson.Gson().toJson(mapOf("checked" to true)),
            )
          }
        } else {
          block.getSide(Side.FRONT).setLine(3, "&7Likes&8: &6${data.likes.count()}".color())
        }
      }
      block.update()
    } else if (isLegacySLSign(block)) {
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
      val resolvedId = SLDatabase.resolveMigratedId(id)
      val data = Data.getSLData(resolvedId) ?: return

      // クリックされた看板の持っているIDのlocデータと一致しない場合
      // SLUpdateモードなら処理を行う、それ以外はreturn
      if (data.loc != block.location) {
        if (SLUpdate.switch[e.player.uniqueId] == true) {
          updateLegacySLSign(data, block, e.player.uniqueId)
          e.player.sendMessage(Tools.socialLikesLOGO + "&fアップデートしました！".color())
          SLUpdate.switch[e.player.uniqueId] = false
        } else {
          e.player.sendMessage(
              Tools.socialLikesLOGO + "&f旧Like看板です。登録データの座標と違います。 運営に報告お願いします".color()
          )
          Bukkit.getLogger().warning("[SocialLikes3] 旧Like看板の座標違いがクリックされました")
          Bukkit.getLogger()
              .warning(
                  "[SocialLikes3] world:${block.location.world.name},x${block.location.x},y${block.location.y},z${block.location.z}"
              )
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
      markSignIdGeneration2(block, resolvedId)

      e.player.sendMessage(Tools.socialLikesLOGO + "&fアップデートしました！".color())
    }
  }

  /** オフラインの時イイねされたPointを貯めておく */
  private val offlineLikesPoint = mutableMapOf<UUID, Int>()

  private fun sendLikeRewardMessage(player: Player, amount: Long, offline: Boolean = false) {
    val message =
        if (offline) {
          "&aオフライン中のいいね報酬として投票ポイントを${amount}pt獲得しました！"
        } else {
          "&aいいね報酬として投票ポイントを2pt獲得しました！"
        }
    player.sendMessage(Tools.socialLikesLOGO + " " + message.color())
  }

  private fun addOfflineLikePoints(uuid: UUID, points: Int) {
    offlineLikesPoint[uuid] = (offlineLikesPoint[uuid] ?: 0) + points
    persistOfflineLikePoints()
  }

  private fun removeOfflineLikePoints(uuid: UUID) {
    offlineLikesPoint.remove(uuid)
    persistOfflineLikePoints()
  }

  private fun persistOfflineLikePoints() {
    runCatching { OfflineLikePointStore(plugin.dataFolder.toPath()).save(offlineLikesPoint) }
        .onFailure { exception ->
          plugin.logger.severe(
              "Failed to atomically save pending offline-like rewards: ${exception.message}"
          )
        }
  }

  /** オフライン時のいいねPointをプラグイン無効化時ファイルへ保存 */
  fun offlineLikePointSave() {
    persistOfflineLikePoints()
  }

  /** オフライン時のいいねPointをロード */
  fun offlineLikePointLoad() {
    offlineLikesPoint.clear()
    offlineLikesPoint.putAll(OfflineLikePointStore(plugin.dataFolder.toPath()).load())
  }

  @EventHandler
  fun joinEvent(e: PlayerJoinEvent) {
    SLDatabase.upsertPlayer(e.player.uniqueId, e.player.name)
    val pointInt = offlineLikesPoint[e.player.uniqueId] ?: return
    val player = e.player
    object : BukkitRunnable() {
          override fun run() {
            if (!player.isOnline) return
            if (Tools.addTokens(player, pointInt.toLong())) {
              removeOfflineLikePoints(player.uniqueId)
              sendLikeRewardMessage(player, pointInt.toLong(), offline = true)
            }
          }
        }
        .runTaskLater(plugin, 20L)
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
      val id = readSignId(block) ?: return
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
    val sourceSign = (meta as? BlockStateMeta)?.blockState as? Sign
    val sourceSignId =
        sourceSign?.persistentDataContainer?.get(slSignItemIdKey, PersistentDataType.INTEGER)
            ?: sourceSign?.persistentDataContainer?.get(idKey, PersistentDataType.INTEGER)
    val rawId =
        sourceSignId
            ?: meta.persistentDataContainer.get(slSignItemIdKey, PersistentDataType.INTEGER)
            ?: legacySLSignItemId(meta.asString)
            ?: return
    val itemGeneration =
        sourceSign?.persistentDataContainer?.get(idGenerationKey, PersistentDataType.INTEGER)
            ?: meta.persistentDataContainer.get(idGenerationKey, PersistentDataType.INTEGER)
    val id =
        if (itemGeneration == CURRENT_ID_GENERATION) rawId else SLDatabase.resolveMigratedId(rawId)
    val slData = Data.getSLData(id) ?: return
    val sourceSignForRestore = sourceSign.takeIf { sourceSignId != null }

    if (e.blockPlaced.state !is Sign) return
    object : BukkitRunnable() {
          override fun run() {
            val sign = e.blockPlaced.state as? Sign ?: return
            beSignTask(sign, slData, sourceSignForRestore)
          }
        }
        .runTaskLater(plugin, 1)
    // e.isCancelled = true
  }

  private fun legacySLSignItemId(metaAsString: String): Int? {
    val slIDStr = sl3Regex.find(metaAsString)?.value ?: return null
    return slIDStr.replace("\"sociallikes3:sociallikes_id\":", "").toIntOrNull()
  }

  private fun beSignTask(sign: Sign, slData: SLData, sourceSign: Sign?) {
    if (sourceSign != null) {
      copySignSide(sourceSign, sign, Side.FRONT)
      copySignSide(sourceSign, sign, Side.BACK)
      sign.isWaxed = sourceSign.isWaxed
    } else {
      sign.getSide(Side.FRONT).apply {
        setLine(0, Tools.socialLikesLOGO)
        setLine(1, "&a".color() + slData.title)
        setLine(2, "&f${Bukkit.getOfflinePlayer(slData.owner).name}".color())
        setLine(
            3,
            "&7Likes&8: &6${slData.likes.count()}${if (slData.check){" &e✓"}else{""}}".color(),
        )
      }
      sign.isWaxed = true
    }

    val id = slData.id
    sign.persistentDataContainer.set(slSignItemIdKey, PersistentDataType.INTEGER, id)
    markSignIdGeneration2(sign, id)
  }

  private fun copySignSide(sourceSign: Sign, targetSign: Sign, side: Side) {
    val sourceSide = sourceSign.getSide(side)
    val targetSide = targetSign.getSide(side)
    (0 until 4).forEach { index -> targetSide.line(index, sourceSide.line(index)) }
    targetSide.isGlowingText = sourceSide.isGlowingText
    targetSide.color = sourceSide.color
  }

  @EventHandler(priority = EventPriority.MONITOR, ignoreCancelled = true)
  fun handleTeleportSignPlace(e: BlockPlaceEvent) {
    val itemMeta = e.itemInHand.itemMeta as? BlockStateMeta ?: return
    val sourceSign = itemMeta.blockState as? Sign ?: return
    val teleportId =
        sourceSign.persistentDataContainer.get(
            SLSignSetting.sltpSignKey,
            PersistentDataType.INTEGER,
        ) ?: return
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
