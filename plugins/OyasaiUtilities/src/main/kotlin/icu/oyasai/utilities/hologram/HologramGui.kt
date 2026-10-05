package icu.oyasai.utilities.hologram

import icu.oyasai.utilities.OyasaiUtilities
import io.papermc.paper.event.player.AsyncChatEvent
import java.util.UUID
import java.util.concurrent.ConcurrentHashMap
import net.kyori.adventure.text.serializer.plain.PlainTextComponentSerializer
import org.bukkit.Bukkit
import org.bukkit.Material
import org.bukkit.entity.Player
import org.bukkit.event.EventHandler
import org.bukkit.event.EventPriority
import org.bukkit.event.Listener
import org.bukkit.event.inventory.ClickType
import org.bukkit.event.inventory.InventoryClickEvent
import org.bukkit.event.inventory.InventoryDragEvent
import org.bukkit.event.player.PlayerQuitEvent
import org.bukkit.inventory.Inventory
import org.bukkit.inventory.InventoryHolder
import org.bukkit.inventory.ItemStack
import org.bukkit.scheduler.BukkitTask

private enum class Screen {
  SETTINGS,
  TEXT,
  PALETTE,
  DELETE,
}

private class HologramMenu(
    val hologram: Hologram,
    val screen: Screen,
    val page: Int = 0,
    val line: Int = -1,
    val colors: MutableList<Int> = mutableListOf(),
) : InventoryHolder {
  lateinit var contents: Inventory

  override fun getInventory(): Inventory = contents
}

fun hologramItem(material: Material, name: String, vararg lore: String): ItemStack =
    ItemStack(material).also { item ->
      item.editMeta { meta ->
        meta.displayName(hologramComponent(name))
        meta.lore(lore.map { hologramComponent(it) })
      }
    }

object HologramGui : Listener {
  private var accepting = false

  fun enable() {
    accepting = true
  }

  private val plugin
    get() = OyasaiUtilities.plugin

  private data class Input(val hologram: Hologram, val line: Int, var timeout: BukkitTask? = null)

  private val inputs = ConcurrentHashMap<UUID, Input>()
  private val chatTasks = ConcurrentHashMap.newKeySet<BukkitTask>()

  // パレットの配置・色は既存の Minecraft の色に合わせる。
  private val dyes =
      listOf(
          Material.WHITE_DYE,
          Material.LIGHT_GRAY_DYE,
          Material.GRAY_DYE,
          Material.BLACK_DYE,
          Material.RED_DYE,
          Material.ORANGE_DYE,
          Material.YELLOW_DYE,
          Material.LIME_DYE,
          Material.GREEN_DYE,
          Material.CYAN_DYE,
          Material.LIGHT_BLUE_DYE,
          Material.BLUE_DYE,
          Material.PURPLE_DYE,
          Material.MAGENTA_DYE,
          Material.PINK_DYE,
          Material.GOLD_INGOT,
      )
  private val colors =
      listOf(
          0xffffff,
          0xaaaaaa,
          0x555555,
          0x000000,
          0xff5555,
          0xffaa00,
          0xffff55,
          0x55ff55,
          0x00aa00,
          0x00aaaa,
          0x55ffff,
          0x5555ff,
          0xaa00aa,
          0xff55ff,
          0xffb6c1,
          0xffd700,
      )
  private val colorNames =
      listOf(
          "白色",
          "明灰色",
          "濃灰色",
          "黒色",
          "赤色",
          "橙色",
          "黄色",
          "黄緑色",
          "深緑色",
          "青緑色",
          "空色",
          "青色",
          "紫色",
          "ピンク紫",
          "桜色",
          "ゴールド",
      )

  fun open(player: Player, name: String) {
    if (!HologramFeature.canEdit(player)) return
    val holo = HologramFeature.get(name) ?: return
    show(player, HologramMenu(holo, Screen.SETTINGS))
  }

  private fun show(player: Player, holder: HologramMenu) {
    if (!HologramFeature.canEdit(player)) return
    val holo = holder.hologram
    val title =
        when (holder.screen) {
          Screen.SETTINGS -> "&8ホログラム設定: &f${holo.name}"
          Screen.TEXT -> "&8テキスト行編集 (&f${holo.lines.size}&8行)"
          Screen.PALETTE -> "&8文字色・グラデ選択: &e${holder.line + 1}&8行目"
          Screen.DELETE -> "&4ホログラムを削除しますか？"
        }
    val size =
        when (holder.screen) {
          Screen.PALETTE -> 36
          Screen.DELETE -> 27
          else -> 54
        }
    val inv = Bukkit.createInventory(holder, size, hologramComponent(title))
    holder.contents = inv
    fun button(slot: Int, material: Material, name: String, vararg lore: String) {
      inv.setItem(slot, hologramItem(material, name, *lore))
    }
    when (holder.screen) {
      Screen.SETTINGS -> {
        button(10, Material.BOOK, "&b表示モード: &f${holo.mode.label}")
        button(12, Material.COMPASS, "&d正面追従: &f${if (holo.follow) "ON" else "OFF (角度固定)"}")
        button(
            14,
            Material.WRITABLE_BOOK,
            "&6文字の向き: &f${if (holo.vertical) "縦書き (上から下)" else "横書き"}",
        )
        button(16, Material.REPEATER, "&a自動再生モード: &f${holo.playMode.label}")
        button(22, Material.FEATHER, "&e✍ テキスト内容の編集", "&7${holo.lines.size} 行 / カラーコード・Hex使用可")
        button(
            24,
            Material.LEVER,
            "&e手動再生: &f${if (HologramFeature.isPlaying(holo.name)) "再生中 (クリックで停止)" else "停止中 (クリックで再生)"}",
            "&7手動再生モードのとき有効",
        )
        button(
            28,
            Material.ENDER_PEARL,
            "&3再生・検知範囲: &b${holo.proximityRange} m",
            "&75 → 10 → 15 → 20 → 30 m",
        )
        button(
            30,
            Material.SLIME_BALL,
            "&a文字サイズ: &e${holo.scale}x",
            "&70.5 → 0.75 → 1.0 → 1.5 → 2.0 → 3.0",
        )
        button(
            32,
            Material.ITEM_FRAME,
            "&5エンドロール表示行数: &d${holo.windowLines} 行",
            "&71 → 2 → 3 → 5 → 8 → 10",
        )
        button(
            34,
            Material.CLOCK,
            "&eスクロール速度: &6${holo.scrollSpeed} tick/行",
            "&780 → 60 → 40 → 25 → 15",
        )
        button(38, Material.GLOWSTONE_DUST, "&e文字の影: &f${if (holo.shadow) "ON" else "OFF"}")
        button(40, Material.TINTED_GLASS, "&7背景スタイル: &f${holo.background.label}")
        button(45, Material.BARRIER, "&c設定メニューを閉じる")
        button(53, Material.LAVA_BUCKET, "&4❌ このホログラムを撤去・削除", "&c確認画面を開きます")
      }
      Screen.TEXT -> {
        for (slot in 0..35) {
          val index = holder.page * 36 + slot
          val line = holo.lines.getOrNull(index) ?: continue
          button(
              slot,
              Material.PAPER,
              "&e${index + 1} 行目: &r$line",
              "&e左クリック: チャットで編集",
              "&d右クリック: 色パレット",
              "&cShift+右クリック: この行を削除",
          )
        }
        button(45, Material.ARROW, "&e◀ 設定メニューに戻る")
        if (holder.page > 0) button(46, Material.ARROW, "&e前のページ")
        if ((holder.page + 1) * 36 < holo.lines.size) button(47, Material.ARROW, "&e次のページ")
        button(48, Material.EMERALD, "&a＋ 新しい行を追加")
        button(50, Material.HOPPER, "&c末尾の行を削除")
        button(53, Material.TNT, "&4すべての行をクリア")
      }
      Screen.PALETTE -> {
        colors.forEachIndexed { index, color ->
          button(
              index,
              dyes[index],
              "&#%06x%s".format(color, colorNames[index]),
              "&7左クリック: 単色を適用",
              "&d右クリック: グラデーションの色を追加 (${holder.colors.size}/5)",
          )
        }
        button(16, Material.NETHER_STAR, "&e虹色グラデーション")
        button(17, Material.BLAZE_POWDER, "&e夕焼けグラデーション")
        button(
            27,
            Material.PRISMARINE_CRYSTALS,
            "&aグラデーションを適用 (${holder.colors.size}色)",
            "&7染料を右クリックして2〜5色選択",
            holder.colors.joinToString(" → ") { "&#%06x■".format(it) },
        )
        button(28, Material.BARRIER, "&cグラデーション選択をリセット")
        button(29, Material.ARROW, "&e◀ テキスト行一覧に戻る")
        button(31, Material.ANVIL, "&f&l太字を切り替え")
        button(32, Material.MILK_BUCKET, "&f装飾・色をリセット")
        button(35, Material.WRITABLE_BOOK, "&bチャットで手動入力")
      }
      Screen.DELETE -> {
        button(11, Material.RED_CONCRETE, "&c削除する", "&cこの操作は取り消せません")
        button(15, Material.LIME_CONCRETE, "&aキャンセル")
      }
    }
    player.openInventory(inv)
  }

  @EventHandler
  fun click(event: InventoryClickEvent) {
    val holder = event.view.topInventory.holder as? HologramMenu ?: return
    event.isCancelled = true
    val player = event.whoClicked as? Player ?: return
    if (!HologramFeature.canEdit(player)) {
      player.closeInventory()
      return
    }
    if (event.rawSlot !in 0 until event.view.topInventory.size) return
    if (event.click !in listOf(ClickType.LEFT, ClickType.RIGHT, ClickType.SHIFT_RIGHT)) return
    val holo = HologramFeature.get(holder.hologram.name) ?: return player.closeInventory()
    if (holo !== holder.hologram) {
      open(player, holo.name)
      return
    }
    val slot = event.rawSlot
    when (holder.screen) {
      Screen.SETTINGS -> {
        when (slot) {
          22 -> {
            show(player, HologramMenu(holo, Screen.TEXT))
            return
          }
          24 -> {
            HologramFeature.togglePlaying(holo.name)
            open(player, holo.name)
            return
          }
          45 -> {
            player.closeInventory()
            return
          }
          53 -> {
            show(player, HologramMenu(holo, Screen.DELETE))
            return
          }
        }
        val changed =
            when (slot) {
              10 -> holo.copy(mode = next(holo.mode, DisplayMode.entries))
              12 -> holo.copy(follow = !holo.follow)
              14 -> holo.copy(vertical = !holo.vertical)
              16 -> holo.copy(playMode = next(holo.playMode, PlayMode.entries))
              28 ->
                  holo.copy(
                      proximityRange =
                          next(holo.proximityRange, listOf(5.0, 10.0, 15.0, 20.0, 30.0))
                  )
              30 -> holo.copy(scale = next(holo.scale, listOf(0.5f, 0.75f, 1f, 1.5f, 2f, 3f)))
              32 -> holo.copy(windowLines = next(holo.windowLines, listOf(1, 2, 3, 5, 8, 10)))
              34 -> holo.copy(scrollSpeed = next(holo.scrollSpeed, listOf(80, 60, 40, 25, 15)))
              38 -> holo.copy(shadow = !holo.shadow)
              40 -> holo.copy(background = next(holo.background, BackgroundType.entries))
              else -> return
            }
        HologramFeature.put(changed)
        open(player, holo.name)
      }
      Screen.TEXT -> {
        val lines = holo.lines.toMutableList()
        when (slot) {
          in 0..35 -> {
            val index = holder.page * 36 + slot
            if (index !in lines.indices) return
            when (event.click) {
              ClickType.SHIFT_RIGHT -> lines.removeAt(index)
              ClickType.RIGHT -> {
                show(player, HologramMenu(holo, Screen.PALETTE, line = index))
                return
              }
              ClickType.LEFT -> {
                expect(player, holo, index)
                return
              }
              else -> return
            }
          }
          45 -> {
            open(player, holo.name)
            return
          }
          46 -> {
            text(player, holo, holder.page - 1)
            return
          }
          47 -> {
            text(player, holo, holder.page + 1)
            return
          }
          48 -> {
            expect(player, holo, -1)
            return
          }
          50 -> if (lines.isNotEmpty()) lines.removeAt(lines.lastIndex)
          53 -> lines.clear()
          else -> return
        }
        val changed = holo.copy(lines = lines)
        HologramFeature.put(changed)
        text(player, changed, holder.page)
      }
      Screen.PALETTE -> {
        if (holder.line !in holo.lines.indices) return
        val raw = holo.lines[holder.line]
        val result =
            when (slot) {
              in 0..15 -> {
                if (event.isRightClick) {
                  if (holder.colors.size < 5) holder.colors += colors[slot]
                  show(player, holder)
                  return
                }
                gradientHologramText(raw, listOf(colors[slot]))
              }
              16 ->
                  gradientHologramText(
                      raw,
                      listOf(0xff5555, 0xffaa00, 0xffff55, 0x55ff55, 0x55ffff, 0x5555ff, 0xff55ff),
                  )
              17 -> gradientHologramText(raw, listOf(0xff512f, 0xdd2476))
              27 -> {
                if (holder.colors.size < 2) {
                  player.sendMessage("[oholo] 2色以上選択してください")
                  return
                }
                gradientHologramText(raw, holder.colors)
              }
              28 -> {
                holder.colors.clear()
                show(player, holder)
                return
              }
              29 -> {
                text(player, holo, holder.line / 36)
                return
              }
              31 -> {
                val normalized = normalizeHologramText(raw)
                if (normalized.contains("&l", true)) normalized.replace(Regex("&[lL]"), "")
                else
                    normalized.replace(Regex("(&#[0-9a-fA-F]{6}|&[0-9a-frA-FR])"), "$1&l").let {
                      "&l$it"
                    }
              }
              32 -> plainHologramText(raw)
              35 -> {
                expect(player, holo, holder.line)
                return
              }
              else -> return
            }
        val lines = holo.lines.toMutableList()
        lines[holder.line] = result
        val changed = holo.copy(lines = lines)
        HologramFeature.put(changed)
        text(player, changed, holder.line / 36)
      }
      Screen.DELETE ->
          when (slot) {
            11 -> {
              HologramFeature.delete(holo.name)
              player.closeInventory()
            }
            15 -> open(player, holo.name)
          }
    }
  }

  private fun text(player: Player, holo: Hologram, page: Int) {
    show(
        player,
        HologramMenu(
            holo,
            Screen.TEXT,
            page.coerceIn(0, (holo.lines.size - 1).coerceAtLeast(0) / 36),
        ),
    )
  }

  private fun <T> next(value: T, values: List<T>): T =
      values[(values.indexOf(value) + 1) % values.size]

  @EventHandler
  fun drag(event: InventoryDragEvent) {
    if (event.view.topInventory.holder is HologramMenu) event.isCancelled = true
  }

  private fun expect(player: Player, holo: Hologram, line: Int) {
    if (!HologramFeature.canEdit(player)) return
    inputs.remove(player.uniqueId)?.timeout?.cancel()
    val input = Input(holo, line)
    inputs[player.uniqueId] = input
    player.closeInventory()
    player.sendMessage("[oholo] チャットにテキストを入力してください。カラーコード・Hex使用可。cancel でキャンセル (60秒)")
    input.timeout =
        Bukkit.getScheduler()
            .runTaskLater(
                plugin,
                Runnable {
                  if (inputs.remove(player.uniqueId, input) && player.isOnline)
                      player.sendMessage("[oholo] 入力待ちがタイムアウトしました")
                },
                1200L,
            )
  }

  @EventHandler(priority = EventPriority.HIGHEST)
  fun chat(event: AsyncChatEvent) {
    val player = event.player
    val input = inputs[player.uniqueId] ?: return
    event.isCancelled = true
    val raw = PlainTextComponentSerializer.plainText().serialize(event.message())
    // 非同期側ではチャットを捕捉するだけ。権限・データ・GUIはメインスレッドで扱う。
    synchronized(chatTasks) {
      if (!accepting || !plugin.isEnabled) return
      lateinit var task: BukkitTask
      task =
          Bukkit.getScheduler()
              .runTask(
                  plugin,
                  Runnable {
                    synchronized(chatTasks) { chatTasks.remove(task) }
                    if (!inputs.remove(player.uniqueId, input)) return@Runnable
                    input.timeout?.cancel()
                    if (!player.isOnline || !HologramFeature.canEdit(player)) return@Runnable
                    val holo = HologramFeature.get(input.hologram.name) ?: return@Runnable
                    if (raw.equals("cancel", true)) {
                      text(player, holo, 0)
                      return@Runnable
                    }
                    if (holo !== input.hologram) {
                      player.sendMessage("[oholo] 入力待ち中にホログラムが変更されました。もう一度編集してください")
                      text(player, holo, 0)
                      return@Runnable
                    }
                    val lines = holo.lines.toMutableList()
                    if (input.line == -1) lines += raw
                    else if (input.line in lines.indices) lines[input.line] = raw
                    val changed = holo.copy(lines = lines)
                    HologramFeature.put(changed)
                    text(
                        player,
                        changed,
                        if (input.line < 0) (lines.size - 1) / 36 else input.line / 36,
                    )
                  },
              )
      chatTasks += task
    }
  }

  @EventHandler
  fun quit(event: PlayerQuitEvent) {
    inputs.remove(event.player.uniqueId)?.timeout?.cancel()
  }

  fun close() {
    synchronized(chatTasks) { accepting = false }
    inputs.values.forEach { it.timeout?.cancel() }
    inputs.clear()
    synchronized(chatTasks) {
      chatTasks.forEach { it.cancel() }
      chatTasks.clear()
    }
    Bukkit.getOnlinePlayers()
        .filter { it.openInventory.topInventory.holder is HologramMenu }
        .forEach { it.closeInventory() }
  }
}
