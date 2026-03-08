package me.ankokunsan.entityPose

import me.ankokunsan.entityPose.EntityPose.Companion.GUI_KEY
import me.ankokunsan.entityPose.EntityPose.Companion.KAKUDO_KEY
import me.ankokunsan.entityPose.EntityPose.Companion.SIZE_KEY
import me.ankokunsan.entityPose.EntityPose.Companion.ZAHYO_KEY
import org.bukkit.Bukkit
import org.bukkit.ChatColor
import org.bukkit.Material
import org.bukkit.Sound
import org.bukkit.entity.Player
import org.bukkit.inventory.ItemStack
import org.bukkit.persistence.PersistentDataType

object ChooseGUi {
    fun openSpawnGUI(player: Player) {
        val inv = Bukkit.createInventory(
            player, // holder（nullでもOK）
            9,      // サイズ（9の倍数）
            "§3エンティティスポーン"
        )
        val sarmorStandItem = ItemStack(Material.ARMOR_STAND)
        sarmorStandItem.itemMeta = sarmorStandItem.itemMeta!!.apply {
            setDisplayName("${ChatColor.GREEN}アーマースタンド(腕あり)")
            persistentDataContainer.set(GUI_KEY, PersistentDataType.STRING, "SARMOR_STAND")
        }
        val armorStandItem = ItemStack(Material.ARMOR_STAND)
        armorStandItem.itemMeta = armorStandItem.itemMeta!!.apply {
            setDisplayName("${ChatColor.GREEN}アーマースタンド(腕なし)")
            persistentDataContainer.set(GUI_KEY, PersistentDataType.STRING, "ARMOR_STAND")
        }
        val sminiStandItem = ItemStack(Material.ARMOR_STAND)
        sminiStandItem.itemMeta = sminiStandItem.itemMeta!!.apply {
            setDisplayName("${ChatColor.GREEN}ミニアーマースタンド(腕あり)")
            persistentDataContainer.set(GUI_KEY, PersistentDataType.STRING, "MINI_SARMOR_STAND")
        }
        val miniStandItem = ItemStack(Material.ARMOR_STAND)
        miniStandItem.itemMeta = miniStandItem.itemMeta!!.apply {
            setDisplayName("${ChatColor.GREEN}ミニアーマースタンド(腕なし)")
            persistentDataContainer.set(GUI_KEY, PersistentDataType.STRING, "MINI_ARMOR_STAND")
        }
        val woItem = ItemStack(Material.WOLF_SPAWN_EGG)
        woItem.itemMeta = woItem.itemMeta!!.apply {
            setDisplayName("${ChatColor.GREEN}オオカミ")
            persistentDataContainer.set(GUI_KEY, PersistentDataType.STRING, "WOLF")
        }
        val miniwoItem = ItemStack(Material.WOLF_SPAWN_EGG)
        miniwoItem.itemMeta = miniwoItem.itemMeta!!.apply {
            setDisplayName("${ChatColor.GREEN}子オオカミ")
            persistentDataContainer.set(GUI_KEY, PersistentDataType.STRING, "WOLF")
            persistentDataContainer.set(SIZE_KEY, PersistentDataType.STRING, "MINI")
        }
        val caItem = ItemStack(Material.CAT_SPAWN_EGG)
        caItem.itemMeta = caItem.itemMeta!!.apply {
            setDisplayName("${ChatColor.GREEN}ネコ")
            persistentDataContainer.set(GUI_KEY, PersistentDataType.STRING, "CAT")
        }
        val minicaItem = ItemStack(Material.CAT_SPAWN_EGG)
        minicaItem.itemMeta = minicaItem.itemMeta!!.apply {
            setDisplayName("${ChatColor.GREEN}子ネコ")
            persistentDataContainer.set(GUI_KEY, PersistentDataType.STRING, "CAT")
            persistentDataContainer.set(SIZE_KEY, PersistentDataType.STRING, "MINI")
        }
        val rabItem = ItemStack(Material.RABBIT_SPAWN_EGG)
        rabItem.itemMeta = rabItem.itemMeta!!.apply {
            setDisplayName("${ChatColor.GREEN}ウサギ")
            persistentDataContainer.set(GUI_KEY, PersistentDataType.STRING, "RABBIT")
        }
        inv.setItem(0, sarmorStandItem)
        inv.setItem(1, armorStandItem)
        inv.setItem(2, sminiStandItem)
        inv.setItem(3, miniStandItem)
        inv.setItem(4, woItem)
        inv.setItem(5, miniwoItem)
        inv.setItem(6, caItem)
        inv.setItem(7,minicaItem)
        inv.setItem(8,rabItem)

        player.openInventory(inv)
    }

    fun openKakudoGUI(player: Player) {
        val inv = Bukkit.createInventory(null, 9, "§3角度選択")
        val kakudos = listOf(
            "§b1度ずつ" to 1.0,
            "§b5度ずつ" to 5.0,
            "§b8度ずつ" to 8.0,
            "§b12度ずつ" to 12.0,
            "§b15度ずつ" to 15.0,
            "§b22.5度ずつ" to 22.5,
            "§b40度ずつ" to 40.0,
            "§b45度ずつ" to 45.0
        )
        kakudos.forEachIndexed { index, (name, value) ->
            val item = ItemStack(Material.COMPASS).apply {
                val meta = itemMeta ?: return@apply
                meta.setDisplayName(name)
                meta.persistentDataContainer.set(KAKUDO_KEY, PersistentDataType.DOUBLE, value)
                itemMeta = meta
            }
            inv.setItem(index, item)
            val filler = getFiller1()
            (0 until inv.size).forEach { i ->
                if (inv.getItem(i) == null) inv.setItem(i, filler)
            }
        }

        player.openInventory(inv)
        player.playSound(player, Sound.BLOCK_CHEST_OPEN, 1.0f, 2.0f)
    }
    fun openZahyoGUI(player: Player) {
        val inv = Bukkit.createInventory(null, 9, "§3座標の動く量選択")
        val zahyos = listOf(
            "§b0.1マスずつ" to 0.1,  // Double型にする
            "§b0.25マスずつ" to 0.25,
            "§b0.5マスずつ" to 0.5,
            "§b1.0マスずつ" to 1.0,
        )

        zahyos.forEachIndexed { index, (name, value) ->
            val item = ItemStack(Material.SPECTRAL_ARROW).apply {
                val meta = itemMeta ?: return@apply
                meta.setDisplayName(name)
                // INTEGER を DOUBLE に変更（小数を保存できるようにする）
                meta.persistentDataContainer.set(ZAHYO_KEY, PersistentDataType.DOUBLE, value)
                itemMeta = meta
            }
            inv.setItem(index, item)
        }

// 隙間を埋める処理はループの外に出すと効率的です
        val filler = getFiller1()
        (0 until inv.size).forEach { i ->
            if (inv.getItem(i) == null) inv.setItem(i, filler)
        }

        player.openInventory(inv)
        player.playSound(player,Sound.BLOCK_CHEST_OPEN, 1.0f, 2.0f)
    }
    private fun getFiller1(): ItemStack {
        return ItemStack(Material.LIGHT_GRAY_STAINED_GLASS_PANE).apply {
            itemMeta = itemMeta?.apply {
                setDisplayName(" ")
                persistentDataContainer.set(GUI_KEY, PersistentDataType.STRING, "FILLER")
            }
        }
    }
}