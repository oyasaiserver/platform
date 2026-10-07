package icu.oyasai.games.dice

import net.kyori.adventure.text.Component
import net.kyori.adventure.text.format.NamedTextColor
import net.kyori.adventure.text.format.TextDecoration
import org.bukkit.Bukkit
import org.bukkit.Material
import org.bukkit.enchantments.Enchantment
import org.bukkit.entity.Player
import org.bukkit.inventory.Inventory
import org.bukkit.inventory.InventoryHolder
import org.bukkit.inventory.ItemFlag
import org.bukkit.inventory.ItemStack

class DiceMenuHolder : InventoryHolder {
  private var inv: Inventory? = null

  override fun getInventory(): Inventory {
    return inv ?: error("Inventory is not set")
  }

  fun setInventory(inventory: Inventory) {
    this.inv = inventory
  }
}

object DiceMenuGui {
  const val INVENTORY_SIZE = 45

  // 1段目: 多面体ダイス 7種 (D4, D6, D8, D10, D12, D20, D100)
  const val SLOT_D4 = 1
  const val SLOT_1D6 = 2
  const val SLOT_D8 = 3
  const val SLOT_D10 = 4
  const val SLOT_D12 = 5
  const val SLOT_D20 = 6
  const val SLOT_D100 = 7

  // 2段目: コイントス (中央配置)
  const val SLOT_D2 = 13

  // 3段目: 投げる個数 (1〜5個)
  const val SLOT_COUNT_1 = 20
  const val SLOT_COUNT_2 = 21
  const val SLOT_COUNT_3 = 22
  const val SLOT_COUNT_4 = 23
  const val SLOT_COUNT_5 = 24

  // 4段目: 投げる個数 (6〜10個)
  const val SLOT_COUNT_6 = 29
  const val SLOT_COUNT_7 = 30
  const val SLOT_COUNT_8 = 31
  const val SLOT_COUNT_9 = 32
  const val SLOT_COUNT_10 = 33

  // 5段目 (一番下の段): キャンセル (一番左下), チャット通知, 現在の設定情報(本)
  const val SLOT_CLOSE = 36
  const val SLOT_BROADCAST = 38
  const val SLOT_STATUS = 40

  fun open(player: Player, currentMode: DiceMode, isBroadcast: Boolean, diceItem: DiceItem) {
    val holder = DiceMenuHolder()
    val title = Component.text("🎲 ダイス設定・モード変更", NamedTextColor.DARK_AQUA, TextDecoration.BOLD)
    val inv = Bukkit.createInventory(holder, INVENTORY_SIZE, title)
    holder.setInventory(inv)

    // 背景ガラス
    val filler = ItemStack(Material.GRAY_STAINED_GLASS_PANE)
    val fillerMeta = filler.itemMeta
    if (fillerMeta != null) {
      fillerMeta.displayName(Component.empty())
      filler.setItemMeta(fillerMeta)
    }
    for (i in 0 until INVENTORY_SIZE) {
      inv.setItem(i, filler)
    }

    // 1段目: 7種の多面体ダイス (D4, D6, D8, D10, D12, D20, D100)
    inv.setItem(
        SLOT_D4,
        createOptionItem(DiceMode.D4, currentMode.maxEyes == 4, DiceMode.D4.material),
    )
    inv.setItem(
        SLOT_1D6,
        createOptionItem(
            DiceMode.ONE_D6,
            currentMode.maxEyes == 6,
            DiceMode.ONE_D6.material,
        ),
    )
    inv.setItem(
        SLOT_D8,
        createOptionItem(DiceMode.D8, currentMode.maxEyes == 8, DiceMode.D8.material),
    )
    inv.setItem(
        SLOT_D10,
        createOptionItem(DiceMode.D10, currentMode.maxEyes == 10, DiceMode.D10.material),
    )
    inv.setItem(
        SLOT_D12,
        createOptionItem(DiceMode.D12, currentMode.maxEyes == 12, DiceMode.D12.material),
    )
    inv.setItem(
        SLOT_D20,
        createOptionItem(DiceMode.D20, currentMode.maxEyes == 20, DiceMode.D20.material),
    )
    inv.setItem(
        SLOT_D100,
        createOptionItem(DiceMode.D100, currentMode.maxEyes == 100, DiceMode.D100.material),
    )

    // 2段目: コイントス (中央配置)
    inv.setItem(
        SLOT_D2,
        createOptionItem(DiceMode.D2, currentMode.maxEyes == 2, DiceMode.D2.material),
    )

    // 3段目: 投げる個数選択 (1〜5個)
    inv.setItem(SLOT_COUNT_1, createCountItem(1, currentMode.diceCount == 1))
    inv.setItem(SLOT_COUNT_2, createCountItem(2, currentMode.diceCount == 2))
    inv.setItem(SLOT_COUNT_3, createCountItem(3, currentMode.diceCount == 3))
    inv.setItem(SLOT_COUNT_4, createCountItem(4, currentMode.diceCount == 4))
    inv.setItem(SLOT_COUNT_5, createCountItem(5, currentMode.diceCount == 5))

    // 4段目: 投げる個数選択 (6〜10個)
    inv.setItem(SLOT_COUNT_6, createCountItem(6, currentMode.diceCount == 6))
    inv.setItem(SLOT_COUNT_7, createCountItem(7, currentMode.diceCount == 7))
    inv.setItem(SLOT_COUNT_8, createCountItem(8, currentMode.diceCount == 8))
    inv.setItem(SLOT_COUNT_9, createCountItem(9, currentMode.diceCount == 9))
    inv.setItem(SLOT_COUNT_10, createCountItem(10, currentMode.diceCount == 10))

    // 5段目 (一番下の段): キャンセル (一番左下), チャット通知設定 (エンダーアイ), 現在の設定情報 (本)
    inv.setItem(SLOT_CLOSE, createCancelButton())
    inv.setItem(SLOT_BROADCAST, createBroadcastItem(isBroadcast))
    inv.setItem(SLOT_STATUS, createStatusItem(player, currentMode, isBroadcast))

    player.openInventory(inv)
  }

  private fun createCancelButton(): ItemStack {
    val item = ItemStack(Material.BARRIER)
    val meta = item.itemMeta ?: return item
    meta.displayName(
        Component.text("× キャンセル", NamedTextColor.RED, TextDecoration.BOLD)
            .decoration(TextDecoration.ITALIC, false)
    )
    meta.lore(
        listOf(
            Component.text("ダイス設定を終了して画面を閉じます。", NamedTextColor.GRAY)
                .decoration(TextDecoration.ITALIC, false)
        )
    )
    meta.addItemFlags(ItemFlag.HIDE_ATTRIBUTES)
    item.itemMeta = meta
    return item
  }

  private fun createOptionItem(
      mode: DiceMode,
      isSelected: Boolean,
      iconMat: Material,
  ): ItemStack {
    val item = ItemStack(iconMat)
    val meta = item.itemMeta ?: return item

    val statusText = if (isSelected) "【選択中】" else "▶ クリックして選択"
    val statusColor = if (isSelected) NamedTextColor.GREEN else NamedTextColor.AQUA

    val name =
        Component.text("🎲 ${mode.displayName}", NamedTextColor.GOLD, TextDecoration.BOLD)
            .decoration(TextDecoration.ITALIC, false)

    meta.customName(name)
    meta.displayName(name)

    val lore =
        listOf(
            Component.text(mode.description, NamedTextColor.YELLOW)
                .decoration(TextDecoration.ITALIC, false),
            Component.empty(),
            Component.text(statusText, statusColor, TextDecoration.BOLD)
                .decoration(TextDecoration.ITALIC, false),
        )

    meta.lore(lore)

    if (isSelected) {
      meta.setEnchantmentGlintOverride(true)
      meta.addEnchant(Enchantment.UNBREAKING, 1, true)
      meta.addItemFlags(ItemFlag.HIDE_ENCHANTS)
    }
    meta.addItemFlags(ItemFlag.HIDE_ATTRIBUTES)

    item.itemMeta = meta
    return item
  }

  private fun createCountItem(count: Int, isSelected: Boolean): ItemStack {
    val item = ItemStack(Material.RABBIT_FOOT, count)
    val meta = item.itemMeta ?: return item

    val countName = "${count}個投げる (${count}D)"
    val statusText = if (isSelected) "【選択中】" else "▶ クリックして選択"
    val statusColor = if (isSelected) NamedTextColor.GREEN else NamedTextColor.AQUA

    val name =
        Component.text("🎲 $countName", NamedTextColor.GOLD, TextDecoration.BOLD)
            .decoration(TextDecoration.ITALIC, false)

    meta.customName(name)
    meta.displayName(name)

    val descText =
        if (count == 1) {
          "ダイスを1個投げて出目を判定します。"
        } else {
          "ダイスを${count}個同時に投げて合計値を算出します。"
        }

    val lore =
        listOf(
            Component.text(descText, NamedTextColor.YELLOW)
                .decoration(TextDecoration.ITALIC, false),
            Component.empty(),
            Component.text(statusText, statusColor, TextDecoration.BOLD)
                .decoration(TextDecoration.ITALIC, false),
        )

    meta.lore(lore)

    if (isSelected) {
      meta.setEnchantmentGlintOverride(true)
      meta.addEnchant(Enchantment.UNBREAKING, 1, true)
      meta.addItemFlags(ItemFlag.HIDE_ENCHANTS)
    }
    meta.addItemFlags(ItemFlag.HIDE_ATTRIBUTES)

    item.itemMeta = meta
    return item
  }

  private fun createBroadcastItem(isBroadcast: Boolean): ItemStack {
    val item = ItemStack(Material.ENDER_EYE)
    val meta = item.itemMeta ?: return item

    if (isBroadcast) {
      val name =
          Component.text("📢 チャット通知: 全体公開 【ON】", NamedTextColor.GREEN, TextDecoration.BOLD)
              .decoration(TextDecoration.ITALIC, false)
      meta.customName(name)
      meta.displayName(name)
      meta.lore(
          listOf(
              Component.text("サイコロを振った結果を周囲のプレイヤーに通知します。", NamedTextColor.GRAY)
                  .decoration(TextDecoration.ITALIC, false),
              Component.empty(),
              Component.text("▶ クリックして「自分のみ（非公開）」に切り替え", NamedTextColor.YELLOW)
                  .decoration(TextDecoration.ITALIC, false),
          )
      )
      meta.setEnchantmentGlintOverride(true)
      meta.addEnchant(Enchantment.UNBREAKING, 1, true)
      meta.addItemFlags(ItemFlag.HIDE_ENCHANTS)
    } else {
      val name =
          Component.text("🔒 チャット通知: 自分のみ 【OFF】", NamedTextColor.RED, TextDecoration.BOLD)
              .decoration(TextDecoration.ITALIC, false)
      meta.customName(name)
      meta.displayName(name)
      meta.lore(
          listOf(
              Component.text("結果通知はあなたのチャットにのみ届きます（周囲に通知しません）。", NamedTextColor.GRAY)
                  .decoration(TextDecoration.ITALIC, false),
              Component.empty(),
              Component.text("▶ クリックして「全体公開」に切り替え", NamedTextColor.YELLOW)
                  .decoration(TextDecoration.ITALIC, false),
          )
      )
    }
    meta.addItemFlags(ItemFlag.HIDE_ATTRIBUTES)

    item.itemMeta = meta
    return item
  }

  private fun createStatusItem(
      player: Player,
      mode: DiceMode,
      isBroadcast: Boolean,
  ): ItemStack {
    val item = ItemStack(Material.BOOK)
    val meta = item.itemMeta ?: return item

    val name =
        Component.text("📖 現在の設定内容", NamedTextColor.GOLD, TextDecoration.BOLD)
            .decoration(TextDecoration.ITALIC, false)

    meta.customName(name)
    meta.displayName(name)

    val broadcastText =
        if (isBroadcast) {
          Component.text("全体公開", NamedTextColor.GREEN, TextDecoration.BOLD)
        } else {
          Component.text("自分のみ（非公開）", NamedTextColor.AQUA, TextDecoration.BOLD)
        }

    val eyesRange =
        if (mode.diceCount > 1) {
          "${mode.diceCount} 〜 ${mode.maxEyes * mode.diceCount} (${mode.diceCount}個合計)"
        } else {
          "1 〜 ${mode.maxEyes}"
        }

    val lore =
        listOf(
            Component.text("・プレイヤー名：", NamedTextColor.GRAY)
                .append(Component.text(player.name, NamedTextColor.WHITE, TextDecoration.BOLD))
                .decoration(TextDecoration.ITALIC, false),
            Component.text("・選択中ダイス：", NamedTextColor.GRAY)
                .append(
                    Component.text(mode.displayName, NamedTextColor.YELLOW, TextDecoration.BOLD)
                )
                .decoration(TextDecoration.ITALIC, false),
            Component.text("・投げる個数　：", NamedTextColor.GRAY)
                .append(
                    Component.text(
                        "${mode.diceCount} 個 (${mode.diceCount}D)",
                        NamedTextColor.AQUA,
                        TextDecoration.BOLD,
                    )
                )
                .decoration(TextDecoration.ITALIC, false),
            Component.text("・出目範囲　　：", NamedTextColor.GRAY)
                .append(Component.text(eyesRange, NamedTextColor.AQUA, TextDecoration.BOLD))
                .decoration(TextDecoration.ITALIC, false),
            Component.text("・公開設定　　：", NamedTextColor.GRAY)
                .append(broadcastText)
                .decoration(TextDecoration.ITALIC, false),
            Component.text("・クールタイム：", NamedTextColor.GRAY)
                .append(Component.text("2 秒", NamedTextColor.WHITE, TextDecoration.BOLD))
                .decoration(TextDecoration.ITALIC, false),
            Component.text("・自動回収　　：", NamedTextColor.GRAY)
                .append(Component.text("15 秒 (または右クリック手動回収)", NamedTextColor.WHITE))
                .decoration(TextDecoration.ITALIC, false),
            Component.empty(),
            Component.text("右クリック長押しでチャージして投擲できます！", NamedTextColor.YELLOW)
                .decoration(TextDecoration.ITALIC, false),
        )

    meta.lore(lore)
    meta.addItemFlags(ItemFlag.HIDE_ATTRIBUTES)
    item.itemMeta = meta
    return item
  }
}
