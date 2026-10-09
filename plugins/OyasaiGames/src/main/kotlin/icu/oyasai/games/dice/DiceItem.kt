package icu.oyasai.games.dice

import net.kyori.adventure.text.Component
import net.kyori.adventure.text.format.NamedTextColor
import net.kyori.adventure.text.format.TextDecoration
import net.kyori.adventure.text.serializer.plain.PlainTextComponentSerializer
import org.bukkit.NamespacedKey
import org.bukkit.attribute.Attribute
import org.bukkit.attribute.AttributeModifier
import org.bukkit.enchantments.Enchantment
import org.bukkit.entity.Player
import org.bukkit.inventory.EquipmentSlotGroup
import org.bukkit.inventory.ItemFlag
import org.bukkit.inventory.ItemStack
import org.bukkit.inventory.meta.ItemMeta
import org.bukkit.persistence.PersistentDataType
import org.bukkit.plugin.Plugin

class DiceItem(private val plugin: Plugin) {
  val diceKey = NamespacedKey(plugin, "dice_item")
  val modeKey = NamespacedKey(plugin, "dice_mode")
  val broadcastKey = NamespacedKey(plugin, "dice_broadcast")

  fun isDice(item: ItemStack?): Boolean {
    if (item == null || item.type.isAir) return false
    val meta = item.itemMeta ?: return false

    // 1. PDC (PersistentDataContainer) 判定
    if (meta.persistentDataContainer.has(diceKey, PersistentDataType.BYTE)) return true
    if (meta.persistentDataContainer.has(modeKey, PersistentDataType.STRING)) return true

    // 2. 耐久力エンチャント判定（サイコロ素材かつ耐久力エンチャントが付与されている）
    if (
        meta.hasEnchant(Enchantment.UNBREAKING) && DiceType.entries.any { it.material == item.type }
    )
        return true

    // 3. Lore判定（プレーンテキストで確実にチェック）
    val loreList = meta.lore()
    if (loreList != null && loreList.isNotEmpty()) {
      val plain = PlainTextComponentSerializer.plainText()
      for (line in loreList) {
        val text = plain.serialize(line)
        if (text.contains("投げて遊べる本格サイコロ") || text.contains("サイコロ")) return true
      }
    }

    // 4. 表示名判定（プレーンテキストで確実にチェック）
    val display = meta.displayName()
    if (display != null) {
      val plain = PlainTextComponentSerializer.plainText()
      val text = plain.serialize(display)
      if (text.contains("サイコロ") || text.contains("ダイス") || text.contains("コイントス")) return true
    }

    return false
  }

  fun getDiceMode(item: ItemStack?): DiceMode {
    if (item == null || item.type.isAir) return DiceMode.ONE_D6
    val meta = item.itemMeta ?: return DiceMode.ONE_D6
    val modeId = meta.persistentDataContainer.get(modeKey, PersistentDataType.STRING)
    return DiceMode.fromId(modeId)
  }

  fun isBroadcast(item: ItemStack?): Boolean {
    if (item == null || item.type.isAir) return true
    val meta = item.itemMeta ?: return true
    val value = meta.persistentDataContainer.get(broadcastKey, PersistentDataType.BYTE)
    return value == null || value == 1.toByte()
  }

  fun hasDice(player: Player): Boolean {
    for (item in player.inventory.contents) {
      if (isDice(item)) return true
    }
    return false
  }

  fun sanitizePlayerDice(player: Player) {
    var foundFirst = false
    val contents = player.inventory.contents
    var modified = false

    for (i in contents.indices) {
      val item = contents[i] ?: continue
      if (isDice(item)) {
        if (!foundFirst) {
          foundFirst = true
          updateDiceSettings(item)
          if (item.amount > 1) {
            item.amount = 1
            modified = true
          }
        } else {
          contents[i] = null
          modified = true
        }
      }
    }

    if (modified) {
      player.inventory.contents = contents
      player.sendMessage(
          Component.text("[おやさいサイコロ] 🎲 サイコロは1人1個までのため、余分なサイコロを整理しました。", NamedTextColor.GRAY)
      )
    }
  }

  @JvmOverloads
  fun createDice(mode: DiceMode = DiceMode.ONE_D6, broadcast: Boolean = true): ItemStack {
    val item = ItemStack(mode.material)
    item.editMeta { meta ->
      meta.persistentDataContainer.set(diceKey, PersistentDataType.BYTE, 1)
      meta.persistentDataContainer.set(modeKey, PersistentDataType.STRING, mode.id)
      meta.persistentDataContainer.set(
          broadcastKey,
          PersistentDataType.BYTE,
          if (broadcast) 1.toByte() else 0.toByte(),
      )
      applyMeta(meta, mode, broadcast)
    }
    return item
  }

  @JvmOverloads
  fun updateDiceSettings(
      item: ItemStack,
      newMode: DiceMode? = null,
      newBroadcast: Boolean? = null,
  ): ItemStack {
    val mode = newMode ?: getDiceMode(item)
    val broadcast = newBroadcast ?: isBroadcast(item)

    if (item.type != mode.material) {
      item.type = mode.material
    }

    item.editMeta { meta ->
      meta.persistentDataContainer.set(modeKey, PersistentDataType.STRING, mode.id)
      meta.persistentDataContainer.set(
          broadcastKey,
          PersistentDataType.BYTE,
          if (broadcast) 1.toByte() else 0.toByte(),
      )
      applyMeta(meta, mode, broadcast)
    }
    return item
  }

  fun toggleBroadcast(item: ItemStack): Boolean {
    val current = isBroadcast(item)
    val next = !current
    updateDiceSettings(item, newBroadcast = next)
    return next
  }

  private fun applyMeta(meta: ItemMeta, mode: DiceMode, broadcast: Boolean) {
    val nameTitle = if (mode.type == DiceType.D6) "🎲 おやさいサイコロ" else "🎲 ${mode.displayName}"
    val nameComponent =
        Component.text(nameTitle, NamedTextColor.GOLD, TextDecoration.BOLD)
            .decoration(TextDecoration.ITALIC, false)

    meta.customName(nameComponent)
    meta.displayName(nameComponent)

    val broadcastText =
        if (broadcast) {
          Component.text("全体公開 (ON)", NamedTextColor.GREEN, TextDecoration.BOLD)
        } else {
          Component.text("自分のみ (OFF)", NamedTextColor.RED, TextDecoration.BOLD)
        }

    val lore =
        listOf(
            Component.text("投げて遊べる本格サイコロ！", NamedTextColor.YELLOW)
                .decoration(TextDecoration.ITALIC, false),
            Component.empty(),
            Component.text("▶ 右クリック長押し: ", NamedTextColor.GRAY)
                .decoration(TextDecoration.ITALIC, false)
                .append(
                    Component.text("投げる強さをチャージして投擲", NamedTextColor.WHITE)
                        .decoration(TextDecoration.ITALIC, false)
                ),
            Component.text("▶ スニーク＋右クリック: ", NamedTextColor.GRAY)
                .decoration(TextDecoration.ITALIC, false)
                .append(
                    Component.text("ダイス設定（モード切替・通知設定）", NamedTextColor.AQUA)
                        .decoration(TextDecoration.ITALIC, false)
                ),
            Component.empty(),
            Component.text("現在のモード: ", NamedTextColor.GRAY)
                .decoration(TextDecoration.ITALIC, false)
                .append(
                    Component.text(mode.displayName, NamedTextColor.GREEN, TextDecoration.BOLD)
                        .decoration(TextDecoration.ITALIC, false)
                ),
            Component.text("・${mode.description}", NamedTextColor.DARK_GRAY)
                .decoration(TextDecoration.ITALIC, false),
            Component.text("チャット通知: ", NamedTextColor.GRAY)
                .decoration(TextDecoration.ITALIC, false)
                .append(broadcastText.decoration(TextDecoration.ITALIC, false)),
            Component.empty(),
            Component.text("※止まったサイコロは右クリックまたは自動で回収されます", NamedTextColor.DARK_GRAY)
                .decoration(TextDecoration.ITALIC, false),
        )

    meta.lore(lore)
    meta.addEnchant(Enchantment.UNBREAKING, 1, true)
    meta.addItemFlags(ItemFlag.HIDE_ENCHANTS, ItemFlag.HIDE_ATTRIBUTES)

    // 地面を向いていてもブロック設置が誤爆しないよう、メインハンド所持時のブロック操作範囲（リーチ）を0に短縮
    val reachKey = NamespacedKey(plugin, "dice_reach")
    meta.removeAttributeModifier(Attribute.BLOCK_INTERACTION_RANGE)
    meta.addAttributeModifier(
        Attribute.BLOCK_INTERACTION_RANGE,
        AttributeModifier(
            reachKey,
            -4.5,
            AttributeModifier.Operation.ADD_NUMBER,
            EquipmentSlotGroup.MAINHAND,
        ),
    )
  }
}
