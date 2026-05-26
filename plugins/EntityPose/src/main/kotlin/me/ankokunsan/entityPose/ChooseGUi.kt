package me.ankokunsan.entityPose

import me.ankokunsan.entityPose.EntityPose.Companion.GUI_KEY
import me.ankokunsan.entityPose.EntityPose.Companion.KAKUDO_KEY
import me.ankokunsan.entityPose.EntityPose.Companion.SIZE_KEY
import me.ankokunsan.entityPose.EntityPose.Companion.ZAHYO_KEY
import org.bukkit.Bukkit
import org.bukkit.ChatColor
import org.bukkit.Color
import org.bukkit.Material
import org.bukkit.Sound
import org.bukkit.attribute.Attribute
import org.bukkit.entity.ArmorStand
import org.bukkit.entity.Entity
import org.bukkit.entity.LivingEntity
import org.bukkit.entity.Player
import org.bukkit.entity.Tameable
import org.bukkit.inventory.ItemStack
import org.bukkit.inventory.meta.PotionMeta
import org.bukkit.persistence.PersistentDataType

object ChooseGUi {
  fun openSpawnGUI(player: Player) {
    val inv =
        Bukkit.createInventory(
            player, // holder（nullでもOK）
            18, // サイズ（9の倍数）
            "§3エンティティスポーン",
        )
    val sarmorStandItem = ItemStack(Material.ARMOR_STAND)
    sarmorStandItem.itemMeta =
        sarmorStandItem.itemMeta!!.apply {
          setDisplayName("${ChatColor.GREEN}アーマースタンド(腕あり)")
          persistentDataContainer.set(GUI_KEY, PersistentDataType.STRING, "SARMOR_STAND")
        }
    val armorStandItem = ItemStack(Material.ARMOR_STAND)
    armorStandItem.itemMeta =
        armorStandItem.itemMeta!!.apply {
          setDisplayName("${ChatColor.GREEN}アーマースタンド(腕なし)")
          persistentDataContainer.set(GUI_KEY, PersistentDataType.STRING, "ARMOR_STAND")
        }
    val sminiStandItem = ItemStack(Material.ARMOR_STAND)
    sminiStandItem.itemMeta =
        sminiStandItem.itemMeta!!.apply {
          setDisplayName("${ChatColor.GREEN}ミニアーマースタンド(腕あり)")
          persistentDataContainer.set(GUI_KEY, PersistentDataType.STRING, "MINI_SARMOR_STAND")
        }
    val miniStandItem = ItemStack(Material.ARMOR_STAND)
    miniStandItem.itemMeta =
        miniStandItem.itemMeta!!.apply {
          setDisplayName("${ChatColor.GREEN}ミニアーマースタンド(腕なし)")
          persistentDataContainer.set(GUI_KEY, PersistentDataType.STRING, "MINI_ARMOR_STAND")
        }
    val woItem = ItemStack(Material.WOLF_SPAWN_EGG)
    woItem.itemMeta =
        woItem.itemMeta!!.apply {
          setDisplayName("${ChatColor.GREEN}オオカミ")
          persistentDataContainer.set(GUI_KEY, PersistentDataType.STRING, "WOLF")
        }
    val miniwoItem = ItemStack(Material.WOLF_SPAWN_EGG)
    miniwoItem.itemMeta =
        miniwoItem.itemMeta!!.apply {
          setDisplayName("${ChatColor.GREEN}子オオカミ")
          persistentDataContainer.set(GUI_KEY, PersistentDataType.STRING, "WOLF")
          persistentDataContainer.set(SIZE_KEY, PersistentDataType.STRING, "MINI")
        }
    val caItem = ItemStack(Material.CAT_SPAWN_EGG)
    caItem.itemMeta =
        caItem.itemMeta!!.apply {
          setDisplayName("${ChatColor.GREEN}ネコ")
          persistentDataContainer.set(GUI_KEY, PersistentDataType.STRING, "CAT")
        }
    val minicaItem = ItemStack(Material.CAT_SPAWN_EGG)
    minicaItem.itemMeta =
        minicaItem.itemMeta!!.apply {
          setDisplayName("${ChatColor.GREEN}子ネコ")
          persistentDataContainer.set(GUI_KEY, PersistentDataType.STRING, "CAT")
          persistentDataContainer.set(SIZE_KEY, PersistentDataType.STRING, "MINI")
        }
    val rabItem = ItemStack(Material.RABBIT_SPAWN_EGG)
    rabItem.itemMeta =
        rabItem.itemMeta!!.apply {
          setDisplayName("${ChatColor.GREEN}ウサギ")
          persistentDataContainer.set(GUI_KEY, PersistentDataType.STRING, "RABBIT")
        }
    val parItem = ItemStack(Material.PARROT_SPAWN_EGG)
    parItem.itemMeta =
        rabItem.itemMeta!!.apply {
          setDisplayName("${ChatColor.GREEN}オウム")
          persistentDataContainer.set(GUI_KEY, PersistentDataType.STRING, "PARROT")
        }
    inv.setItem(0, sarmorStandItem)
    inv.setItem(1, armorStandItem)
    inv.setItem(2, sminiStandItem)
    inv.setItem(3, miniStandItem)
    inv.setItem(4, woItem)
    inv.setItem(5, miniwoItem)
    inv.setItem(6, caItem)
    inv.setItem(7, minicaItem)
    inv.setItem(8, rabItem)
    inv.setItem(9, parItem)
    val filler = getFiller1()
    (0 until inv.size).forEach { i -> if (inv.getItem(i) == null) inv.setItem(i, filler) }
    player.openInventory(inv)
  }

  fun openKakudoGUI(player: Player) {
    val inv = Bukkit.createInventory(null, 9, "§3角度の刻みを選択")
    val kakudos =
        listOf(
            "§b1度ずつ" to 1.0,
            "§b5度ずつ" to 5.0,
            "§b8度ずつ" to 8.0,
            "§b12度ずつ" to 12.0,
            "§b15度ずつ" to 15.0,
            "§b22.5度ずつ" to 22.5,
            "§b40度ずつ" to 40.0,
            "§b45度ずつ" to 45.0,
        )
    kakudos.forEachIndexed { index, (name, value) ->
      val item =
          ItemStack(Material.COMPASS).apply {
            val meta = itemMeta ?: return@apply
            meta.setDisplayName(name)
            meta.persistentDataContainer.set(KAKUDO_KEY, PersistentDataType.DOUBLE, value)
            itemMeta = meta
          }
      inv.setItem(index, item)
      val filler = getFiller1()
      (0 until inv.size).forEach { i -> if (inv.getItem(i) == null) inv.setItem(i, filler) }
    }

    player.openInventory(inv)
    player.playSound(player, Sound.BLOCK_CHEST_OPEN, 1.0f, 2.0f)
  }

  fun openZahyoGUI(player: Player) {
    val inv = Bukkit.createInventory(null, 9, "§3一回あたりに動く座標の大きさを選択")
    val zahyos =
        listOf(
            "§b0.1マスずつ" to 0.1, // Double型にする
            "§b0.25マスずつ" to 0.25,
            "§b0.5マスずつ" to 0.5,
            "§b1.0マスずつ" to 1.0,
        )

    zahyos.forEachIndexed { index, (name, value) ->
      val item =
          ItemStack(Material.SPECTRAL_ARROW).apply {
            val meta = itemMeta ?: return@apply
            meta.setDisplayName(name)
            // INTEGER を DOUBLE に変更（小数を保存できるようにする）
            meta.persistentDataContainer.set(ZAHYO_KEY, PersistentDataType.DOUBLE, value)
            itemMeta = meta
          }
      inv.setItem(index, item)
    }
    val filler = getFiller1()
    (0 until inv.size).forEach { i -> if (inv.getItem(i) == null) inv.setItem(i, filler) }

    player.openInventory(inv)
    player.playSound(player, Sound.BLOCK_CHEST_OPEN, 1.0f, 2.0f)
  }

  fun openSettingGUI(player: Player, target: Entity) {
    val invs = Bukkit.createInventory(null, 9, "§3エンティティの設定変更")
    val living = target as? LivingEntity

    val damageItem =
        ItemStack(Material.DIAMOND_SWORD).apply {
          val meta = itemMeta ?: return@apply
          val hasKey =
              target.persistentDataContainer.has(EntityPose.INVINCIBLE, PersistentDataType.BYTE)
          val status = if (hasKey) "§aON" else "§cOFF"
          meta.setDisplayName("§fダメージ無効: $status")
          itemMeta = meta
        }
    val scaleItem1 =
        ItemStack(Material.POTION).apply { // LEGACYを消す
          val meta = itemMeta as? PotionMeta ?: return@apply
          meta.color = Color.YELLOW
          val scale = living?.getAttribute(Attribute.SCALE)?.baseValue ?: 1.0
          meta.setDisplayName("§fスケール設定(大きくするほう): $scale")
          itemMeta = meta
        }
    val scaleItem2 =
        ItemStack(Material.POTION).apply {
          val meta = itemMeta as? PotionMeta ?: return@apply
          meta.color = Color.YELLOW
          val scale = living?.getAttribute(Attribute.SCALE)?.baseValue ?: 1.0
          meta.setDisplayName("§fスケール設定(小さくするほう): $scale")
          itemMeta = meta
        }
    val invisibleItem =
        ItemStack(Material.POTION).apply {
          val meta = itemMeta as? PotionMeta ?: return@apply
          meta.color = Color.fromRGB(127, 131, 146)
          val status = living?.let { if (it.isInvisible) "§aON" else "§cOFF" }
          meta.setDisplayName("§f透明: $status")
          itemMeta = meta
        }
    val lockitem =
        ItemStack(Material.TRIAL_KEY).apply {
          val meta = itemMeta ?: return@apply
          val hasKey =
              target.persistentDataContainer.has(EntityPose.ARRANGELOCK, PersistentDataType.BYTE)
          val lockarrange = if (hasKey) "§aON" else "§cOFF"
          meta.setDisplayName("§fアレンジのロック: $lockarrange")
          itemMeta = meta
        }
    if (target is Tameable) {
      val tameItem =
          ItemStack(Material.BONE).apply {
            val meta = itemMeta ?: return@apply
            val status = if (target.isTamed) "§aON" else "§cOFF"
            meta.setDisplayName("§f懐き状態: $status")
            itemMeta = meta
          }
      invs.setItem(1, tameItem)
    } else if (target is ArmorStand) {
      val baseItem =
          ItemStack(Material.SMOOTH_STONE_SLAB).apply {
            val meta = itemMeta ?: return@apply
            val status = if (target.hasBasePlate()) "§aON" else "§cOFF"
            meta.setDisplayName("§f底のプレート表示: $status")
            itemMeta = meta
          }
      val gravityItem =
          ItemStack(Material.ANVIL).apply {
            val meta = itemMeta ?: return@apply
            val status = if (target.hasGravity()) "§aON" else "§cOFF"
            meta.setDisplayName("§f重力: $status")
            itemMeta = meta
          }
      val itemlockItem =
          ItemStack(Material.OMINOUS_TRIAL_KEY).apply {
            val meta = itemMeta ?: return@apply
            val hasKey =
                target.persistentDataContainer.has(EntityPose.ITEMLOCK, PersistentDataType.BYTE)
            val status = if (hasKey) "§aON" else "§cOFF"
            meta.setDisplayName("§fアイテムのロック: $status")
            itemMeta = meta
          }
      invs.setItem(1, gravityItem)
      invs.setItem(2, baseItem)
      invs.setItem(3, itemlockItem)
    }
    invs.setItem(0, damageItem)
    invs.setItem(5, invisibleItem)
    invs.setItem(6, scaleItem1)
    invs.setItem(7, scaleItem2)
    invs.setItem(8, lockitem)

    val filler = getFiller1()
    for (i in 0 until invs.size) {
      if (invs.getItem(i) == null) invs.setItem(i, filler)
    }
    player.openInventory(invs)
  }

  fun openAllSettingGUI(player: Player, targets: List<Entity>) {
    val invs = Bukkit.createInventory(null, 9, "§3範囲選択済みエンティティの設定変更")

    val damageItem =
        ItemStack(Material.DIAMOND_SWORD).apply {
          val meta = itemMeta ?: return@apply
          val count =
              targets.count {
                it.persistentDataContainer.has(EntityPose.INVINCIBLE, PersistentDataType.BYTE)
              }
          meta.setDisplayName("§fダメージ無効 ${count}/${targets.size}体ON")
          itemMeta = meta
        }
    val scaleItem1 =
        ItemStack(Material.POTION).apply { // LEGACYを消す
          val meta = itemMeta as? PotionMeta ?: return@apply
          meta.color = Color.YELLOW
          meta.setDisplayName("§fスケール設定(大きくするほう)")
          val lorelist = mutableListOf<String>()
          lorelist.add("§7----- 現在のスケール一覧 -----")
          targets.take(10).forEach { target ->
            val scale = (target as? LivingEntity)?.getAttribute(Attribute.SCALE)?.baseValue ?: 1.0
            val typeName = target.type.name
            lorelist.add("§8-$typeName: §b${String.format("%.1f", scale)}")
          }
          if (targets.size > 10) {
            lorelist.add("§8...ほか ${targets.size - 10}体")
          }
          meta.lore = lorelist
          itemMeta = meta
        }
    val scaleItem2 =
        ItemStack(Material.POTION).apply {
          val meta = itemMeta as? PotionMeta ?: return@apply
          meta.color = Color.YELLOW
          meta.setDisplayName("§fスケール設定(小さくするほう)")
          val lorelist = mutableListOf<String>()
          lorelist.add("§7----- 現在のスケール一覧 -----")
          targets.take(10).forEach { target ->
            val scale = (target as? LivingEntity)?.getAttribute(Attribute.SCALE)?.baseValue ?: 1.0
            val typeName = target.type.name
            lorelist.add("§8-$typeName: §b${String.format("%.1f", scale)}")
          }
          if (targets.size > 10) {
            lorelist.add("§8...ほか ${targets.size - 10}体")
          }
          meta.lore = lorelist
          itemMeta = meta
        }
    val invisibleItem =
        ItemStack(Material.POTION).apply {
          val meta = itemMeta as? PotionMeta ?: return@apply
          meta.color = Color.fromRGB(127, 131, 146)
          val count = targets.filterIsInstance<LivingEntity>().count { it.isInvisible }
          meta.setDisplayName("§f透明: ${count}/${targets.size}体ON")
          itemMeta = meta
        }
    val lockitem =
        ItemStack(Material.TRIAL_KEY).apply {
          val meta = itemMeta ?: return@apply
          val count =
              targets.count {
                it.persistentDataContainer.has(EntityPose.ARRANGELOCK, PersistentDataType.BYTE)
              }
          meta.setDisplayName("§fアレンジのロック ${count}/${targets.size}体ON")
          itemMeta = meta
        }

    if (targets.all { it is ArmorStand }) {
      val baseItem =
          ItemStack(Material.SMOOTH_STONE_SLAB).apply {
            val meta = itemMeta ?: return@apply
            val count = targets.filterIsInstance<ArmorStand>().count { it.hasBasePlate() }
            meta.setDisplayName("§f底のプレート表示: ${count}/${targets.size}体ON")
            itemMeta = meta
          }
      val gravityItem =
          ItemStack(Material.ANVIL).apply {
            val meta = itemMeta ?: return@apply
            val count = targets.count { it.hasGravity() }
            meta.setDisplayName("§f重力: ${count}/${targets.size}体ON")
            itemMeta = meta
          }
      val itemlockItem =
          ItemStack(Material.OMINOUS_TRIAL_KEY).apply {
            val meta = itemMeta ?: return@apply
            val count =
                targets.count {
                  it.persistentDataContainer.has(EntityPose.ITEMLOCK, PersistentDataType.BYTE)
                }
            meta.setDisplayName("§fアイテムのロック: ${count}/${targets.size}体ON")
            itemMeta = meta
          }
      invs.setItem(1, gravityItem)
      invs.setItem(2, baseItem)
      invs.setItem(3, itemlockItem)
    }
    invs.setItem(0, damageItem)
    invs.setItem(5, invisibleItem)
    invs.setItem(6, scaleItem1)
    invs.setItem(7, scaleItem2)
    invs.setItem(8, lockitem)
    val filler = getFiller1()
    for (i in 0 until invs.size) {
      if (invs.getItem(i) == null) invs.setItem(i, filler)
    }
    player.openInventory(invs)
  }

  private fun getFiller1(): ItemStack {
    return ItemStack(Material.LIGHT_GRAY_STAINED_GLASS_PANE).apply {
      itemMeta =
          itemMeta?.apply {
            setDisplayName(" ")
            persistentDataContainer.set(GUI_KEY, PersistentDataType.STRING, "FILLER")
          }
    }
  }
}
