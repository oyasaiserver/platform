package com.github.sahyuya.socialvotes.gui

import com.github.sahyuya.socialvotes.ChatInput
import com.github.sahyuya.socialvotes.SocialVotes
import com.github.sahyuya.socialvotes.data.SVSign
import com.github.sahyuya.socialvotes.util.SignDisplayUtil
import com.github.sahyuya.socialvotes.util.SignDisplayUtil.SVLOGOSHORT
import com.github.sahyuya.socialvotes.util.TimeUtil
import java.text.SimpleDateFormat
import java.util.*
import org.bukkit.Bukkit
import org.bukkit.Material
import org.bukkit.entity.Player
import org.bukkit.inventory.Inventory
import org.bukkit.inventory.ItemStack

object SimpleGUI {

  // 追加：GUIを開いたプレイヤーごとに signID を保持する
  private val signViewMap: MutableMap<UUID, Int> = mutableMapOf()

  private fun item(material: Material, name: String, lore: List<String> = listOf()): ItemStack {
    val it = ItemStack(material)
    val meta = it.itemMeta!!
    meta.setDisplayName(name)
    meta.lore = lore
    it.itemMeta = meta
    return it
  }

  fun open(p: Player, sign: SVSign) {

    // ここで見ている signID を保存する
    signViewMap[p.uniqueId] = sign.id
    val inv: Inventory = Bukkit.createInventory(null, 27, SVLOGOSHORT + "簡易GUI")

    val dm = SocialVotes.dataManager
    val df = SimpleDateFormat("yyyy/MM/dd HH:mm")

    val creatorLore = mutableListOf<String>()
    creatorLore.add("§f制作者:")
    sign.creators.forEach { uuid ->
      val name = Bukkit.getOfflinePlayer(uuid).name ?: uuid.toString()
      creatorLore.add(" §7- §b$name")
    }

    // 看板情報
    inv.setItem(
      9,
      item(
        Material.OAK_SIGN,
        "§a看板情報",
        listOf("§f名前: §e${sign.name}") +
          creatorLore +
          listOf("§f作成日: §7${df.format(Date(sign.createdAt))}"),
      ),
    )

    // グループ情報
    val group = sign.group?.let { dm.groupByName[it] }
    val groupLore = mutableListOf<String>()

    if (group != null) {
      groupLore.add("§f所属グループ: §a${group.name}")

      val pv = dm.playerVotes[group.name]?.get(p.uniqueId) ?: 0
      val remain = group.maxVotesPerPlayer - pv
      groupLore.add("§fあなたの残り票: §e$remain")

      groupLore.add("§f期間:")
      groupLore.addAll(TimeUtil.formatPeriod(group.startTime, group.endTime))
    } else {
      groupLore.add("§cグループ未所属")
    }
    inv.setItem(10, item(Material.PAPER, "§bグループ情報", groupLore))

    // 看板名変更
    val isCreator = sign.creators.contains(p.uniqueId)
    val canCreatorEdit = isCreator || p.isOp
    inv.setItem(
      11,
      item(
        Material.KNOWLEDGE_BOOK,
        "§e看板名変更",
        if (canCreatorEdit) listOf("§7クリックで名前を変更") else listOf("§c制作者のみ操作可能"),
      ),
    )

    // 制作者名変更
    inv.setItem(
      12,
      item(
        Material.WRITABLE_BOOK,
        "§e制作者表示名変更",
        if (canCreatorEdit) listOf("§7クリックで制作者欄の表示名を変更") else listOf("§c制作者のみ操作可能"),
      ),
    )

    // 制作者追加
    inv.setItem(
      13,
      item(
        Material.NAME_TAG,
        "§a制作者プレイヤー追加",
        if (canCreatorEdit) listOf("§7mcid をチャット入力") else listOf("§c制作者のみ操作可能"),
      ),
    )

    // 制作者削除
    inv.setItem(14, item(Material.STRUCTURE_VOID, "§c制作者削除", listOf("§7mcid をチャット入力")))

    // 自分の個別投票リセット
    inv.setItem(15, item(Material.REDSTONE, "§c個別投票リセット", listOf("§7この看板への自分の投票数を0に戻す")))

    // グループ投票リセット
    inv.setItem(16, item(Material.GUNPOWDER, "§cグループ投票リセット", listOf("§7所属グループの自分の票を0に戻す")))
    // 詳細設定
    inv.setItem(
      17,
      item(
        Material.COMPARATOR,
        "§6詳細設定",
        when {
          group == null -> listOf("§cグループに登録されていません")
          !p.isOp && group.owner != p.uniqueId -> listOf("§c権限がありません")
          else -> listOf("§eクリックで詳細設定へ")
        },
      ),
    )

    // 装飾
    val white = item(Material.WHITE_STAINED_GLASS_PANE, " ")
    for (i in 0..8) {
      inv.setItem(i, white)
    }
    for (i in 18..26) {
      inv.setItem(i, white)
    }

    p.openInventory(inv)
  }

  fun getViewingSign(player: Player): SVSign? {
    val id = signViewMap[player.uniqueId] ?: return null
    return SocialVotes.dataManager.signById[id]
  }

  fun onClick(p: Player, slot: Int) {

    val sign = getViewingSign(p) ?: return
    val dm = SocialVotes.dataManager
    val uuid = p.uniqueId
    val isCreator = sign.creators.contains(uuid)
    val canCreatorEdit = isCreator || p.isOp

    when (slot) {

      // 看板名変更
      11 -> {
        if (!canCreatorEdit) {
          p.sendMessage("§c制作者またはOPのみ操作できます。")
          return
        }
        ChatInput.start(uuid, ChatInput.InputState(ChatInput.Action.RENAME_SIGN, sign.id))
        p.closeInventory()
        p.sendMessage("§e新しい看板名をチャットで入力してください。")
      }

      // 制作者表示名変更
      12 -> {
        if (!canCreatorEdit) {
          p.sendMessage("§c制作者またはOPのみ操作できます。")
          return
        }
        ChatInput.start(uuid, ChatInput.InputState(ChatInput.Action.SET_CREATOR_DISPLAY, sign.id))
        p.closeInventory()
        p.sendMessage("§e新しい制作者表示名を入力してください。")
      }

      // 制作者追加
      13 -> {
        if (!canCreatorEdit) {
          p.sendMessage("§c制作者またはOPのみ操作できます。")
          return
        }
        ChatInput.start(uuid, ChatInput.InputState(ChatInput.Action.ADD_CREATOR, sign.id))
        p.closeInventory()
        p.sendMessage("§e追加するプレイヤーの mcid を入力してください。\n（JEプレイヤーはTabを押すことで候補が出てきます）")
      }

      // 制作者削除
      14 -> {
        if (!canCreatorEdit) {
          p.sendMessage("§c制作者またはOPのみ操作できます。")
          return
        }
        ChatInput.start(uuid, ChatInput.InputState(ChatInput.Action.REMOVE_CREATOR, sign.id))
        p.closeInventory()
        p.sendMessage("§e削除する制作者の mcid を入力してください。\n（JEプレイヤーはTabを押すことで候補が出てきます）")
      }

      // 個別看板リセット
      15 -> {
        if (!TimeUtil.isVotePeriod(sign.group)) {
          p.sendMessage("§c投票期間外のためリセットできません。")
          return
        }
        val map = dm.playerVotesPerSign[sign.id] ?: mutableMapOf()
        val used = map.getOrDefault(uuid, 0)

        if (used > 0) {
          // 看板の合計投票を減らす
          sign.votes = (sign.votes - used).coerceAtLeast(0)
          // 個別票をゼロに
          map[uuid] = 0
          dm.playerVotesPerSign[sign.id] = map
          // グループ所属時 → グループ票も減らす
          sign.group?.let { gName ->
            val gmap = dm.playerVotes[gName] ?: mutableMapOf()
            val usedGroup = gmap.getOrDefault(uuid, 0)
            gmap[uuid] = (usedGroup - used).coerceAtLeast(0)
            dm.playerVotes[gName] = gmap
          }
        }
        dm.save()
        updateSignDisplay(sign)
        open(p, sign)
        p.sendMessage("§a看板 ${sign.id} のあなたの個別投票をリセットしました。")
      }

      // 個別グループリセット
      16 -> {
        if (!TimeUtil.isVotePeriod(sign.group)) {
          p.sendMessage("§c投票期間外のためリセットできません。")
          return
        }
        val gName = sign.group ?: return
        val group = dm.groupByName[gName] ?: return

        val gmap = dm.playerVotes[gName] ?: mutableMapOf()
        val uuid = p.uniqueId

        val usedGroup = gmap.getOrDefault(uuid, 0)
        if (usedGroup <= 0) {
          p.sendMessage("§eグループ $gName のあなたの票はすでに0です。")
          return
        }
        // ▼ グループ内全看板を処理
        for (sid in group.signIds) {
          val s = dm.signById[sid] ?: continue
          val perSignMap = dm.playerVotesPerSign[sid] ?: mutableMapOf()
          val usedSign = perSignMap.getOrDefault(uuid, 0)
          if (usedSign > 0) {
            // ① 票減算
            s.votes = (s.votes - usedSign).coerceAtLeast(0)
            // ② プレイヤー票を0へ
            perSignMap[uuid] = 0
            dm.playerVotesPerSign[sid] = perSignMap
            // ③ 表示更新
            updateSignDisplay(s)
          }
        }
        // ▼ グループ全体票も0に
        gmap[uuid] = 0
        dm.playerVotes[gName] = gmap

        dm.save()
        open(p, sign)
        p.sendMessage("§aグループ $gName のあなたの票をリセットしました。")
      }

      // 詳細設定
      17 -> {
        val group = sign.group?.let { dm.groupByName[it] }
        if (group == null || (!p.isOp && group.owner != uuid)) {
          return
        }
        DetailGUI.open(p, sign)
      }
    }
  }

  private fun updateSignDisplay(sign: SVSign) {
    val world = Bukkit.getWorld(sign.world) ?: return
    val block = world.getBlockAt(sign.x, sign.y, sign.z)

    val state = block.state
    if (state !is org.bukkit.block.Sign) return

    SignDisplayUtil.applyFormat(state, sign)
    state.update(true)
  }
}
