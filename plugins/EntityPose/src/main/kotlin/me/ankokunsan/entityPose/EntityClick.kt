package me.ankokunsan.entityPose

import java.util.UUID
import kotlin.collections.filter
import me.ankokunsan.entityPose.EntityCopyClick.Companion.activeselection
import me.ankokunsan.entityPose.EntityCopyClick.Companion.selection
import me.ankokunsan.entityPose.EntityPose.Companion.CAT_KEY
import me.ankokunsan.entityPose.EntityPose.Companion.GUI_KEY
import me.ankokunsan.entityPose.EntityPose.Companion.PARROT_KEY
import me.ankokunsan.entityPose.EntityPose.Companion.RABBIT_KEY
import me.ankokunsan.entityPose.EntityPose.Companion.SIZE_KEY
import me.ankokunsan.entityPose.EntityPose.Companion.WOLF_KEY
import net.md_5.bungee.api.ChatMessageType
import net.md_5.bungee.api.chat.TextComponent
import org.bukkit.Bukkit
import org.bukkit.ChatColor
import org.bukkit.Material
import org.bukkit.Sound
import org.bukkit.entity.ArmorStand
import org.bukkit.entity.EntityType
import org.bukkit.entity.LivingEntity
import org.bukkit.entity.Player
import org.bukkit.entity.Sittable
import org.bukkit.event.EventHandler
import org.bukkit.event.Listener
import org.bukkit.event.block.Action
import org.bukkit.event.entity.EntityDamageByEntityEvent
import org.bukkit.event.inventory.InventoryClickEvent
import org.bukkit.event.player.PlayerArmorStandManipulateEvent
import org.bukkit.event.player.PlayerDropItemEvent
import org.bukkit.event.player.PlayerInteractAtEntityEvent
import org.bukkit.event.player.PlayerInteractEvent
import org.bukkit.event.player.PlayerItemHeldEvent
import org.bukkit.event.player.PlayerQuitEvent
import org.bukkit.event.player.PlayerSwapHandItemsEvent
import org.bukkit.inventory.EquipmentSlot
import org.bukkit.inventory.ItemStack
import org.bukkit.persistence.PersistentDataType

class EntityClick : Listener {

  private val selectedPart = mutableMapOf<Pair<UUID, EntityType>, StandPart>()
  private val selectPart = mutableMapOf<Pair<UUID, EntityType>, EntiPart>()

  companion object {
    val currentStep = mutableMapOf<UUID, Double>()
    val currentZah = mutableMapOf<UUID, Double>()
  }

  private fun actionBar(player: Player, text: String) {
    player.spigot().sendMessage(ChatMessageType.ACTION_BAR, TextComponent(text))
  }

  @EventHandler
  fun onHeldstick(event: PlayerItemHeldEvent) {
    val player = event.player
    val item = player.inventory.getItem(event.newSlot)
    val isTargetItem = isEntiStick(item) || isCopyWand(item)
    if (isTargetItem && player.hasPermission("entitypose_arrange")) {
      AirBlock.startglowing(player)
    }
  }

  @EventHandler
  fun onManipulate(event: PlayerArmorStandManipulateEvent) {
    val hand = event.player.inventory.itemInMainHand
    val armor = event.rightClicked
    if (isEntiStick(hand) ||
        armor.persistentDataContainer.has(EntityPose.ITEMLOCK, PersistentDataType.BYTE)) {
      event.isCancelled = true
    }
  }

  @EventHandler
  fun onLeftClick(event: EntityDamageByEntityEvent) {
    val player = event.damager as? Player ?: return

    val hand = player.inventory.itemInMainHand
    if (!isEntiStick(hand)) return
    if (!player.hasPermission("entitypose_arrange")) return //
    val target = event.entity
    if (target.persistentDataContainer.has(EntityPose.ARRANGELOCK, PersistentDataType.BYTE)) {
      actionBar(player, "§6[EntityPose] §cこのエンティティはロックされています")
      return
    }
    AirBlock.airblockplace(player)
    event.isCancelled = true

    val key = player.uniqueId to target.type

    if (target is ArmorStand) {
      val current = selectedPart[key] ?: StandPart.Z
      val next = if (player.isSneaking) current.prev() else current.next()

      selectedPart[key] = next
      actionBar(player, "現在の選択部位→ ${next.display}")
    } else if (target is LivingEntity) {
      if (target.hasAI()) {
        player.sendMessage("§6[EntityPose] §cこのエンティティはAIが有効です")
        return
      }
      val current = selectPart[key] ?: EntiPart.HAN
      val next1 = if (player.isSneaking) current.prev() else current.next()

      selectPart[key] = next1
      actionBar(player, "現在の選択→ ${next1.display}")
    }
  }

  @EventHandler
  fun onSwapEvent(event: PlayerSwapHandItemsEvent) {
    val player = event.player
    val hand = event.offHandItem
    if (!isEntiStick(hand)) return
    if (!player.hasPermission("entitypose_arrange")) return
    event.isCancelled = true
    if (player.isSneaking) {
      ChooseGUi.openZahyoGUI(player)
      player.playSound(player.location, Sound.BLOCK_CHEST_OPEN, 1.0f, 2.0f)
    } else {
      ChooseGUi.openKakudoGUI(player)
      player.playSound(player.location, Sound.BLOCK_CHEST_OPEN, 1.0f, 2.0f)
    }
  }

    @EventHandler
    fun onDropEvent(event : PlayerDropItemEvent) {
        val player = event.player
        val item = event.itemDrop.itemStack
        if(!isEntiStick(item)) return
        if(!player.hasPermission("entitypose_arrange")) return
        if(!player.isSneaking) return
        event.isCancelled = true
        val result =
            player.world.rayTraceEntities(player.eyeLocation, player.location.direction, 3.0, 0.1) { it != player }
        val target = result?.hitEntity ?: return
        if (target is Player) {
            player.sendMessage("§6[EntityPose] §cプレイヤーの情報を見たり、いじろうとしないでね")
            return
        }
        if (target is LivingEntity && target.hasAI()) {
            player.sendMessage("§6[EntityPose] §cこのモブはAIが有効です")
            return
        }
        val selected = activeselection[player.uniqueId]
        if (selected != null && selected.contains(target)) {
            val targets = selected.filter { it.isValid }
            ChooseGUi.openAllSettingGUI(player, targets)
        } else {
            ChooseGUi.openSettingGUI(player, target)
            return
        }
    }

    @EventHandler
    fun onLeftClickBlock(event: PlayerInteractEvent) {
        val player = event.player
        val hand = player.inventory.itemInMainHand
        if (!isEntiStick(hand)) return
        if (!player.hasPermission("entitypose_arrange")) return //
        if (event.action != Action.LEFT_CLICK_BLOCK) return
        if (event.clickedBlock == null) return

    event.isCancelled = true
    player.playSound(player.location, Sound.BLOCK_CHEST_OPEN, 1.0f, 2.0f)
    ChooseGUi.openSpawnGUI(player)
  }

  @EventHandler
  fun onGuiClick(event: InventoryClickEvent) {
    val player = event.whoClicked as? Player ?: return
    if (event.view.title != "§3エンティティスポーン") return

    event.isCancelled = true
    val item = event.currentItem ?: return
    if (!item.hasItemMeta()) return
    player.playSound(player, Sound.UI_BUTTON_CLICK, 1.0f, 1.5f)

    val meta = item.itemMeta!!
    val action = meta.persistentDataContainer.get(GUI_KEY, PersistentDataType.STRING) ?: return

    when (action) {
      "SARMOR_STAND" -> {
        FollowEntity.start<ArmorStand>(player, EntityType.ARMOR_STAND) { entity ->
          entity.setArms(true)
        }
        player.closeInventory()
      }
      "ARMOR_STAND" -> {
        FollowEntity.start<ArmorStand>(player, EntityType.ARMOR_STAND) {}
        player.closeInventory()
      }
      "MINI_SARMOR_STAND" -> {
        FollowEntity.start<ArmorStand>(player, EntityType.ARMOR_STAND) { entity ->
          entity.setArms(true)
          entity.isSmall = true
        }
        player.closeInventory()
      }
      "MINI_ARMOR_STAND" -> {
        FollowEntity.start<ArmorStand>(player, EntityType.ARMOR_STAND) { entity ->
          entity.isSmall = true
        }
        player.closeInventory()
      }
      "WOLF" -> {
        val isMini =
            item.itemMeta?.persistentDataContainer?.get(SIZE_KEY, PersistentDataType.STRING) ==
                "MINI"
        val title = if (isMini) "§3子オオカミ選択" else "§3オオカミ選択"
        val inv1 =
            Bukkit.createInventory(
                player, // holder（nullでもOK）
                9,
                title)

        val ligbrwItem =
            CustomHead.get("10673a3e975e95385683734de0aaae2fc14491c89c448fc77c954329312c558b")
                .apply {
                  itemMeta =
                      itemMeta!!.apply {
                        setDisplayName("${ChatColor.GREEN}栗色")
                        persistentDataContainer.set(
                            WOLF_KEY, PersistentDataType.STRING, "LIGHT_BROWN")
                        if (isMini)
                            persistentDataContainer.set(SIZE_KEY, PersistentDataType.STRING, "MINI")
                      }
                }
        val grawItem =
            CustomHead.get("18b7d365417593267352816b1da57383c996a24ce4ac6323725c51b139bbcfac")
                .apply {
                  itemMeta =
                      itemMeta!!.apply {
                        setDisplayName("${ChatColor.GREEN}灰色")
                        persistentDataContainer.set(WOLF_KEY, PersistentDataType.STRING, "GRAY")
                        if (isMini)
                            persistentDataContainer.set(SIZE_KEY, PersistentDataType.STRING, "MINI")
                      }
                }
        val strwItem =
            CustomHead.get("c7da319bc006a570c550846c0e8cf6ad88d326ec9f447d5c168228c4d2dd6e27")
                .apply {
                  itemMeta =
                      itemMeta!!.apply {
                        setDisplayName("${ChatColor.GREEN}しま模様")
                        persistentDataContainer.set(WOLF_KEY, PersistentDataType.STRING, "STRIPED")
                        if (isMini)
                            persistentDataContainer.set(SIZE_KEY, PersistentDataType.STRING, "MINI")
                      }
                }
        val spowItem =
            CustomHead.get("a1a3c46ecc14787c41d7cf61c30415dd6cf9d0db4020b89532eefde81bc6d061")
                .apply {
                  itemMeta =
                      itemMeta!!.apply {
                        setDisplayName("${ChatColor.GREEN}まだら模様")
                        persistentDataContainer.set(WOLF_KEY, PersistentDataType.STRING, "SPOTTED")
                        if (isMini)
                            persistentDataContainer.set(SIZE_KEY, PersistentDataType.STRING, "MINI")
                      }
                }
        val browItem =
            CustomHead.get("f38b37576d4b2f972590f94ae839f221cfc04ca131f6e1bf93f1160a87f91722")
                .apply {
                  itemMeta =
                      itemMeta!!.apply {
                        setDisplayName("${ChatColor.GREEN}赤茶色")
                        persistentDataContainer.set(WOLF_KEY, PersistentDataType.STRING, "BROWN")
                        if (isMini)
                            persistentDataContainer.set(SIZE_KEY, PersistentDataType.STRING, "MINI")
                      }
                }
        val whitewItem =
            CustomHead.get("26c67affae90af1c69085a66487e16f591a45bef6665d03e0aef0f92b28f1f3d")
                .apply {
                  itemMeta =
                      itemMeta!!.apply {
                        setDisplayName("${ChatColor.GREEN}雪")
                        persistentDataContainer.set(WOLF_KEY, PersistentDataType.STRING, "WHITE")
                        if (isMini)
                            persistentDataContainer.set(SIZE_KEY, PersistentDataType.STRING, "MINI")
                      }
                }
        val blawItem =
            CustomHead.get("62fa964dc6849129428abee17d50bfdd69172f441b6f537b00536da2dd365e24")
                .apply {
                  itemMeta =
                      itemMeta!!.apply {
                        setDisplayName("${ChatColor.GREEN}黒色")
                        persistentDataContainer.set(WOLF_KEY, PersistentDataType.STRING, "BLACK")
                        if (isMini)
                            persistentDataContainer.set(SIZE_KEY, PersistentDataType.STRING, "MINI")
                      }
                }
        val woowItem =
            CustomHead.get("f7b424dd4463dfe1b6931efe536d3e1830df2c9c709b9abee3afaec5e3eb2ff6")
                .apply {
                  itemMeta =
                      itemMeta!!.apply {
                        setDisplayName("${ChatColor.GREEN}森(ウッド柄)")
                        persistentDataContainer.set(WOLF_KEY, PersistentDataType.STRING, "WOOD")
                        if (isMini)
                            persistentDataContainer.set(SIZE_KEY, PersistentDataType.STRING, "MINI")
                      }
                }
        val norwItem =
            CustomHead.get("dc64e0cc93c1e146012672bd0331dc6a444f413b10a8909a863fdf9e7a349a87")
                .apply {
                  itemMeta =
                      itemMeta!!.apply {
                        setDisplayName("${ChatColor.GREEN}ノーマル")
                        persistentDataContainer.set(WOLF_KEY, PersistentDataType.STRING, "NORMAL")
                        if (isMini)
                            persistentDataContainer.set(SIZE_KEY, PersistentDataType.STRING, "MINI")
                      }
                }
        inv1.setItem(0, ligbrwItem)
        inv1.setItem(1, grawItem)
        inv1.setItem(2, strwItem)
        inv1.setItem(3, spowItem)
        inv1.setItem(4, browItem)
        inv1.setItem(5, whitewItem)
        inv1.setItem(6, blawItem)
        inv1.setItem(7, woowItem)
        inv1.setItem(8, norwItem)
        val filler = getFiller()
        (0 until inv1.size).forEach { i -> if (inv1.getItem(i) == null) inv1.setItem(i, filler) }
        player.openInventory(inv1)
      }

      "CAT" -> {
        val isMini =
            item.itemMeta?.persistentDataContainer?.get(SIZE_KEY, PersistentDataType.STRING) ==
                "MINI"
        val title1 = if (isMini) "§3子ネコ選択" else "§3ネコ選択"
        val inv2 =
            Bukkit.createInventory(
                player, // holder（nullでもOK）
                18,
                title1)

        val toracItem =
            CustomHead.get("ed2926a6976f05725fd0ac1079abead49427747a687929efe31e1ccdbcfa741f")
                .apply {
                  itemMeta =
                      itemMeta!!.apply {
                        setDisplayName("${ChatColor.GREEN}トラ柄")
                        persistentDataContainer.set(CAT_KEY, PersistentDataType.STRING, "TORA")
                        if (isMini)
                            persistentDataContainer.set(SIZE_KEY, PersistentDataType.STRING, "MINI")
                      }
                }
        val mikecItem =
            CustomHead.get("9f06cd1914abb82b52f42709b0c25e0affb92fc4b7be1ecfef59fbbe862a3b8b")
                .apply {
                  itemMeta =
                      itemMeta!!.apply {
                        setDisplayName("${ChatColor.GREEN}三毛")
                        persistentDataContainer.set(CAT_KEY, PersistentDataType.STRING, "MIKE")
                        if (isMini)
                            persistentDataContainer.set(SIZE_KEY, PersistentDataType.STRING, "MINI")
                      }
                }
        val takicItem =
            CustomHead.get("22f456e43d847ca8bb89e7a51d47770dd4becc52372a26b0f4a6b6a293e643a3")
                .apply {
                  itemMeta =
                      itemMeta!!.apply {
                        setDisplayName("${ChatColor.GREEN}タキシード")
                        persistentDataContainer.set(CAT_KEY, PersistentDataType.STRING, "TUXEDO")
                        if (isMini)
                            persistentDataContainer.set(SIZE_KEY, PersistentDataType.STRING, "MINI")
                      }
                }
        val orecItem =
            CustomHead.get("8270a64bd2dfdb977f4afb5aaa24c4c3acc621b7f116f63a77b3d27937def78f")
                .apply {
                  itemMeta =
                      itemMeta!!.apply {
                        setDisplayName("${ChatColor.GREEN}赤色(絶対オレンジです)")
                        persistentDataContainer.set(CAT_KEY, PersistentDataType.STRING, "ORANGE")
                        if (isMini)
                            persistentDataContainer.set(SIZE_KEY, PersistentDataType.STRING, "MINI")
                      }
                }
        val shacItem =
            CustomHead.get("136c0c1a548c0e3b47329cb870ceaa14b1a9f382bdadeae3f8b41f6d1367988f")
                .apply {
                  itemMeta =
                      itemMeta!!.apply {
                        setDisplayName("${ChatColor.GREEN}シャム")
                        persistentDataContainer.set(CAT_KEY, PersistentDataType.STRING, "SIAMESE")
                        if (isMini)
                            persistentDataContainer.set(SIZE_KEY, PersistentDataType.STRING, "MINI")
                      }
                }
        val ligrcItem =
            CustomHead.get("6d2fc072b70b920f14274fd65c8659e352bd22c14258ded99c9558ab8dbc3511")
                .apply {
                  itemMeta =
                      itemMeta!!.apply {
                        setDisplayName("${ChatColor.GREEN}ブリティッシュ_ショートヘア")
                        persistentDataContainer.set(
                            CAT_KEY, PersistentDataType.STRING, "LIGHT_GRAY")
                        if (isMini)
                            persistentDataContainer.set(SIZE_KEY, PersistentDataType.STRING, "MINI")
                      }
                }
        val librcItem =
            CustomHead.get("a6cd7cd7508255d0da95190bd5ad16c6541791597a9702ad8769fde9c97b4462")
                .apply {
                  itemMeta =
                      itemMeta!!.apply {
                        setDisplayName("${ChatColor.GREEN}ペルシャ")
                        persistentDataContainer.set(
                            CAT_KEY, PersistentDataType.STRING, "LIGHT_BROWN")
                        if (isMini)
                            persistentDataContainer.set(SIZE_KEY, PersistentDataType.STRING, "MINI")
                      }
                }
        val ragcItem =
            CustomHead.get("22e7d959081dac7ecf3d6c5738a93c8e3121af04e040c84eebab88c0440199e3")
                .apply {
                  itemMeta =
                      itemMeta!!.apply {
                        setDisplayName("${ChatColor.GREEN}ラグドール")
                        persistentDataContainer.set(CAT_KEY, PersistentDataType.STRING, "RAG")
                        if (isMini)
                            persistentDataContainer.set(SIZE_KEY, PersistentDataType.STRING, "MINI")
                      }
                }
        val whicItem =
            CustomHead.get("68cc43cf43eea96b8f7ce953dc4e244c93480acf1344f0f6fbda648504ad0e06")
                .apply {
                  itemMeta =
                      itemMeta!!.apply {
                        setDisplayName("${ChatColor.GREEN}白色")
                        persistentDataContainer.set(CAT_KEY, PersistentDataType.STRING, "WHITE")
                        if (isMini)
                            persistentDataContainer.set(SIZE_KEY, PersistentDataType.STRING, "MINI")
                      }
                }
        val gracItem =
            CustomHead.get("f64e0f82177107d0c44696c1f03d4d34148243ebd9e0c2ebc3b496f1bd3b268")
                .apply {
                  itemMeta =
                      itemMeta!!.apply {
                        setDisplayName("${ChatColor.GREEN}ジェリー")
                        persistentDataContainer.set(CAT_KEY, PersistentDataType.STRING, "GRAY")
                        if (isMini)
                            persistentDataContainer.set(SIZE_KEY, PersistentDataType.STRING, "MINI")
                      }
                }
        val blacItem =
            CustomHead.get("966a68c309578c8bb625ec3931f97a5ac42b4120ccf1fe40a7391e88b0b9e811")
                .apply {
                  itemMeta =
                      itemMeta!!.apply {
                        setDisplayName("${ChatColor.GREEN}黒色")
                        persistentDataContainer.set(CAT_KEY, PersistentDataType.STRING, "BLACK")
                        if (isMini)
                            persistentDataContainer.set(SIZE_KEY, PersistentDataType.STRING, "MINI")
                      }
                }
        inv2.setItem(0, toracItem)
        inv2.setItem(1, mikecItem)
        inv2.setItem(2, takicItem)
        inv2.setItem(3, orecItem)
        inv2.setItem(4, shacItem)
        inv2.setItem(5, ligrcItem)
        inv2.setItem(6, librcItem)
        inv2.setItem(7, ragcItem)
        inv2.setItem(8, whicItem)
        inv2.setItem(9, gracItem)
        inv2.setItem(10, blacItem)
        val filler = getFiller()
        (0 until inv2.size).forEach { i -> if (inv2.getItem(i) == null) inv2.setItem(i, filler) }
        player.openInventory(inv2)
      }

      "RABBIT" -> {
        event.isCancelled = true
        val inv3 =
            Bukkit.createInventory(
                player, // holder（nullでもOK）
                9,
                "§3ウサギ選択")
        val brorItem =
            CustomHead.get("c1db38ef3c1a1d59f779a0cd9f9e616de0cc9acc7734b8facc36fc4ea40d0235")
                .apply {
                  itemMeta =
                      itemMeta!!.apply {
                        setDisplayName("${ChatColor.GREEN}茶色")
                        persistentDataContainer.set(RABBIT_KEY, PersistentDataType.STRING, "BROWN")
                      }
                }
        val whirItem =
            CustomHead.get("a0dcddc236972edcd48e825b6b0054b7b6e1a781e6f12ae04c14a07827ca8dcc")
                .apply {
                  itemMeta =
                      itemMeta!!.apply {
                        setDisplayName("${ChatColor.GREEN}白色")
                        persistentDataContainer.set(RABBIT_KEY, PersistentDataType.STRING, "WHITE")
                      }
                }
        val blarItem =
            CustomHead.get("72c58116a147d1a9a26269224a8be184fe8e5f3f3df9b61751369ad87382ec9")
                .apply {
                  itemMeta =
                      itemMeta!!.apply {
                        setDisplayName("${ChatColor.GREEN}黒色")
                        persistentDataContainer.set(RABBIT_KEY, PersistentDataType.STRING, "BLACK")
                      }
                }
        val whblrItem =
            CustomHead.get("cb8cff4b15b8ca37e25750f345718f289cb22c5b3ad22627a71223faccc").apply {
              itemMeta =
                  itemMeta!!.apply {
                    setDisplayName("${ChatColor.GREEN}白黒")
                    persistentDataContainer.set(
                        RABBIT_KEY, PersistentDataType.STRING, "WHITE_BLACK")
                  }
            }
        val gorItem =
            CustomHead.get("c977a3266bf3b9eaf17e5a02ea5fbb46801159863dd288b93e6c12c9cb").apply {
              itemMeta =
                  itemMeta!!.apply {
                    setDisplayName("${ChatColor.GREEN}金色")
                    persistentDataContainer.set(RABBIT_KEY, PersistentDataType.STRING, "GOLD")
                  }
            }
        val librrItem =
            CustomHead.get("cc4349fe9902dd76c1361f8d6a1f79bff6f433f3b7b18a47058f0aa16b9053f")
                .apply {
                  itemMeta =
                      itemMeta!!.apply {
                        setDisplayName("${ChatColor.GREEN}ソルト＆ペッパー")
                        persistentDataContainer.set(
                            RABBIT_KEY, PersistentDataType.STRING, "LIGHT_BROWN")
                      }
                }
        inv3.setItem(0, brorItem)
        inv3.setItem(1, whirItem)
        inv3.setItem(2, blarItem)
        inv3.setItem(3, whblrItem)
        inv3.setItem(4, gorItem)
        inv3.setItem(5, librrItem)
        val filler = getFiller()
        (0 until inv3.size).forEach { i -> if (inv3.getItem(i) == null) inv3.setItem(i, filler) }

        player.openInventory(inv3)
      }
      "PARROT" -> {
        event.isCancelled
        val inv4 =
            Bukkit.createInventory(
                player, // holder（nullでもOK）
                9,
                "§3オウム選択")
        val redItem =
            CustomHead.get("5d1a168bc72cb314f7c86feef9d9bc7612365244ce67f0a104fce04203430c1d")
                .apply {
                  itemMeta =
                      itemMeta!!.apply {
                        setDisplayName("${ChatColor.GREEN}赤色")
                        persistentDataContainer.set(PARROT_KEY, PersistentDataType.STRING, "RED")
                      }
                }
        val blueItem =
            CustomHead.get("20e03b10c15ee5601423867dfb8bcbcbc919ca96c0eea63073ec8e795eabd05f")
                .apply {
                  itemMeta =
                      itemMeta!!.apply {
                        setDisplayName("${ChatColor.GREEN}青色")
                        persistentDataContainer.set(PARROT_KEY, PersistentDataType.STRING, "BLUE")
                      }
                }
        val greenItem =
            CustomHead.get("5fc9a3b9d5879c2150984dbfe588cc2e61fb1de1e60fd2a469f69dd4b6f6a993")
                .apply {
                  itemMeta =
                      itemMeta!!.apply {
                        setDisplayName("${ChatColor.GREEN}緑色")
                        persistentDataContainer.set(PARROT_KEY, PersistentDataType.STRING, "GREEN")
                      }
                }
        val liblItem =
            CustomHead.get("bc6471f23547b2dbdf60347ea128f8eb2baa6a79b0401724f23bd4e2564a2b61")
                .apply {
                  itemMeta =
                      itemMeta!!.apply {
                        setDisplayName("${ChatColor.GREEN}シアン")
                        persistentDataContainer.set(PARROT_KEY, PersistentDataType.STRING, "CYAN")
                      }
                }
        val grayItem =
            CustomHead.get("a3c34722ac64496c9b84d0c54019daae6185d6094990133ad6810eea3d24067a")
                .apply {
                  itemMeta =
                      itemMeta!!.apply {
                        setDisplayName("${ChatColor.GREEN}灰色")
                        persistentDataContainer.set(PARROT_KEY, PersistentDataType.STRING, "GRAY")
                      }
                }

        inv4.setItem(0, redItem)
        inv4.setItem(1, blueItem)
        inv4.setItem(2, greenItem)
        inv4.setItem(3, liblItem)
        inv4.setItem(4, grayItem)
        val filler = getFiller()
        (0 until inv4.size).forEach { i -> if (inv4.getItem(i) == null) inv4.setItem(i, filler) }
        player.openInventory(inv4)
      }
    }
  }

  @EventHandler
  fun onentityInstall(event: PlayerInteractAtEntityEvent) {
    val player = event.player
    val entity = event.rightClicked

    val currentPreview = FollowEntity.stop(player) ?: return

    // 叩いた対象が、今追従させているものと一致する場合のみ実行
    if (currentPreview != entity) return
    event.isCancelled = true
    entity.setGravity(false)

    player.sendMessage("§6[EntityPose] §aエンティティを固定しました！")
  }

  @EventHandler
  fun onRightClick(event: PlayerInteractAtEntityEvent) {
    if (event.hand == EquipmentSlot.OFF_HAND) return

    val player = event.player
    val hand = player.inventory.itemInMainHand
    if (!isEntiStick(hand)) return
    if (!player.hasPermission("entitypose_arrange")) return //
    val entity = event.rightClicked
    if (entity.persistentDataContainer.has(EntityPose.ARRANGELOCK, PersistentDataType.BYTE)) {
      actionBar(player, "§6[EntityPose] §cこのエンティティはロックされています")
      return
    }
    event.isCancelled = true
    entity.isPersistent = true
    val key = player.uniqueId to entity.type
    val step = currentStep[player.uniqueId] ?: 1.0
    val delta = (if (player.isSneaking) -step else step).toFloat()
    val step2 = currentZah[player.uniqueId] ?: 1.0
    val move1 = if (player.isSneaking) -step2 else step2

    if (entity is ArmorStand) {
      val part = selectedPart[key] ?: return
      val rad = Math.toRadians(delta.toDouble())
      val selected = activeselection[player.uniqueId]
      val ismoveMode =
          part == StandPart.X || part == StandPart.Y || part == StandPart.Z || part == StandPart.ALL
      val targets =
          if (ismoveMode && selected != null && selected.contains(entity)) {
            selected.filter {
              it.isValid &&
                  !it.persistentDataContainer.has(EntityPose.ARRANGELOCK, PersistentDataType.BYTE)
            }
          } else {
            listOf(entity)
          }
      val suffix =
          if (targets.size > 1) {
            "§6(${targets.size}体を同時に操作中)"
          } else {
            ""
          }
      when (part) {
        StandPart.HEAD_X -> {
          entity.headPose = entity.headPose.setX(entity.headPose.x + rad)
          val deg = Math.toDegrees(entity.headPose.x)
          actionBar(player, "§a頭_X軸側: ${formatDeg(deg)}")
        }

        StandPart.HEAD_Y -> {
          entity.headPose = entity.headPose.setY(entity.headPose.y + rad)
          val deg = Math.toDegrees(entity.headPose.y)
          actionBar(player, "§a頭_Y軸側: ${formatDeg(deg)}")
        }

        StandPart.HEAD_Z -> {
          entity.headPose = entity.headPose.setZ(entity.headPose.z + rad)
          val deg = Math.toDegrees(entity.headPose.z)
          actionBar(player, "§a頭_Z軸側: ${formatDeg(deg)}")
        }

        StandPart.BODY_X -> {
          entity.bodyPose = entity.bodyPose.setX(entity.bodyPose.x + rad)
          val deg = Math.toDegrees(entity.bodyPose.x)
          actionBar(player, "§a上半身_X軸側: ${formatDeg(deg)}")
        }

        StandPart.BODY_Y -> {
          entity.bodyPose = entity.bodyPose.setY(entity.bodyPose.y + rad)
          val deg = Math.toDegrees(entity.bodyPose.y)
          actionBar(player, "§a上半身_Y軸側: ${formatDeg(deg)}")
        }

        StandPart.BODY_Z -> {
          entity.bodyPose = entity.bodyPose.setZ(entity.bodyPose.z + rad)
          val deg = Math.toDegrees(entity.bodyPose.z)
          actionBar(player, "§a上半身_Z軸側: ${formatDeg(deg)}")
        }

        StandPart.LEFT_ARM_X -> {
          entity.leftArmPose = entity.leftArmPose.setX(entity.leftArmPose.x + rad)
          val deg = Math.toDegrees(entity.leftArmPose.x)
          actionBar(player, "§a左手_X軸側: ${formatDeg(deg)}")
        }

        StandPart.LEFT_ARM_Y -> {
          entity.leftArmPose = entity.leftArmPose.setY(entity.leftArmPose.y + rad)
          val deg = Math.toDegrees(entity.leftArmPose.y)
          actionBar(player, "§a左手_Y軸側: ${formatDeg(deg)}")
        }

        StandPart.LEFT_ARM_Z -> {
          entity.leftArmPose = entity.leftArmPose.setZ(entity.leftArmPose.z + rad)
          val deg = Math.toDegrees(entity.leftArmPose.z)
          actionBar(player, "§a左手_Z軸側: ${formatDeg(deg)}")
        }

        StandPart.RIGHT_ARM_X -> {
          entity.rightArmPose = entity.rightArmPose.setX(entity.rightArmPose.x + rad)
          val deg = Math.toDegrees(entity.rightArmPose.x)
          actionBar(player, "§a右手_X軸側: ${formatDeg(deg)}")
        }

        StandPart.RIGHT_ARM_Y -> {
          entity.rightArmPose = entity.rightArmPose.setY(entity.rightArmPose.y + rad)
          val deg = Math.toDegrees(entity.rightArmPose.y)
          actionBar(player, "§a右手_Y軸側: ${formatDeg(deg)}")
        }

        StandPart.RIGHT_ARM_Z -> {
          entity.rightArmPose = entity.rightArmPose.setZ(entity.rightArmPose.z + rad)
          val deg = Math.toDegrees(entity.rightArmPose.z)
          actionBar(player, "§a右手_Z軸側: ${formatDeg(deg)}")
        }

        StandPart.LEFT_LEG_X -> {
          entity.leftLegPose = entity.leftLegPose.setX(entity.leftLegPose.x + rad)
          val deg = Math.toDegrees(entity.leftLegPose.x)
          actionBar(player, "§a左足_X軸側: ${formatDeg(deg)}")
        }

        StandPart.LEFT_LEG_Y -> {
          entity.leftLegPose = entity.leftLegPose.setY(entity.leftLegPose.y + rad)
          val deg = Math.toDegrees(entity.leftLegPose.y)
          actionBar(player, "§a左足_Y軸側: ${formatDeg(deg)}")
        }

        StandPart.LEFT_LEG_Z -> {
          entity.leftLegPose = entity.leftLegPose.setZ(entity.leftLegPose.z + rad)
          val deg = Math.toDegrees(entity.leftLegPose.z)
          actionBar(player, "§a左足_Z軸側: ${formatDeg(deg)}")
        }

        StandPart.RIGHT_LEG_X -> {
          entity.rightLegPose = entity.rightLegPose.setX(entity.rightLegPose.x + rad)
          val deg = Math.toDegrees(entity.rightLegPose.x)
          actionBar(player, "§a右足_X軸側: ${formatDeg(deg)}")
        }

        StandPart.RIGHT_LEG_Y -> {
          entity.rightLegPose = entity.rightLegPose.setY(entity.rightLegPose.y + rad)
          val deg = Math.toDegrees(entity.rightLegPose.y)
          actionBar(player, "§a右足_Y軸側: ${formatDeg(deg)}")
        }

        StandPart.RIGHT_LEG_Z -> {
          entity.rightLegPose = entity.rightLegPose.setZ(entity.rightLegPose.z + rad)
          val deg = Math.toDegrees(entity.rightLegPose.z)
          actionBar(player, "§a右足_Z軸側: ${formatDeg(deg)}")
        }

        StandPart.ALL -> {
          targets.forEach { target ->
            val loc = target.location.clone()
            loc.yaw += delta
            target.teleport(loc)
          }
          val deg = entity.location.yaw.toDouble()
          actionBar(player, "§a全体: ${formatDeg(deg)}$suffix")
        }
        StandPart.X -> {
          targets.forEach { target -> target.teleport(target.location.add(move1, 0.0, 0.0)) }
          actionBar(player, "§aX座標: ${formatLoc(entity.location.x)}$suffix")
        }
        StandPart.Y -> {
          targets.forEach { target -> target.teleport(target.location.add(0.0, move1, 0.0)) }
          actionBar(player, "§aY座標: ${formatLoc(entity.location.y)}$suffix")
        }
        StandPart.Z -> {
          targets.forEach { target -> target.teleport(target.location.add(0.0, 0.0, move1)) }
          actionBar(player, "§aZ座標: ${formatLoc(entity.location.z)}$suffix")
        }
      }
      return
    }

    if (entity is LivingEntity) {
      val part1 = selectPart[key] ?: return
      val selected1 = activeselection[player.uniqueId]
      val ismoveMode1 =
          part1 == EntiPart.X || part1 == EntiPart.Y || part1 == EntiPart.Z || part1 == EntiPart.ALL
      val targets =
          if (ismoveMode1 && selected1 != null && selected1.contains(entity)) {
            selected1.filter {
              it.isValid &&
                  !it.persistentDataContainer.has(EntityPose.ARRANGELOCK, PersistentDataType.BYTE)
            }
          } else {
            listOf(entity)
          }
      val deltaF = (if (player.isSneaking) -step else step).toFloat()
      val suffix =
          if (targets.size > 1) {
            "§6(${targets.size}体を同時に操作中)"
          } else {
            ""
          }

      when (part1) {
        EntiPart.HEAD -> {
          val loc = entity.location.clone()
          loc.pitch = (loc.pitch + deltaF).coerceIn(-90f, 90f)
          entity.teleport(loc)

          val displayDeg = -loc.pitch
          actionBar(player, "§a頭: ${String.format("%.1f", displayDeg)}°")
        }

        EntiPart.ALL -> {
          targets.forEach { target ->
            val loc = target.location.clone()
            loc.yaw += deltaF
            target.teleport(loc)
          }
          val deg = entity.location.yaw.toDouble()
          actionBar(player, "§a全体: ${formatDeg(deg)}$suffix")
        }

        EntiPart.SITTING -> {
          when (entity) {
            is Sittable -> {
              entity.isSitting = !entity.isSitting
              actionBar(player, "§a座る: ${if (entity.isSitting) "ON" else "OFF"}")
            }
            else -> actionBar(player, "§6[EntityPose] §cこのモブは座れません。残念;;")
          }
        }
        EntiPart.X -> {
          targets.forEach { target -> target.teleport(target.location.add(move1, 0.0, 0.0)) }
          actionBar(player, "§aX座標: ${formatLoc(entity.location.x)}$suffix")
        }
        EntiPart.Y -> {
          targets.forEach { target -> target.teleport(target.location.add(0.0, move1, 0.0)) }
          actionBar(player, "§aY座標: ${formatLoc(entity.location.y)}$suffix")
        }
        EntiPart.Z -> {
          targets.forEach { target -> target.teleport(target.location.add(0.0, 0.0, move1)) }
          actionBar(player, "§aZ座標: ${formatLoc(entity.location.z)}$suffix")
        }
        EntiPart.HAN -> {
          val board = Bukkit.getScoreboardManager()!!.mainScoreboard
          val team = board.getTeam("animal_things_hide_name") ?: return
          if (entity.customName == "Dinnerbone") {
            entity.customName = null
            team.removeEntry(entity.uniqueId.toString())
          } else {
            entity.customName = "Dinnerbone"
            team.addEntry(entity.uniqueId.toString())
          }

          entity.isCustomNameVisible = false
        }
      }
    }
  }

  @EventHandler
  fun onQuit(event: PlayerQuitEvent) {
    val uuid = event.player.uniqueId
    currentStep.remove(uuid)
    currentZah.remove(uuid)

    if (selection.containsKey(uuid)) {
      stopHighlight(uuid)
      selection.remove(uuid)
      activeselection.remove(uuid)
    }
    selectedPart.keys.removeIf { it.first == uuid }
    selectPart.keys.removeIf { it.first == uuid }
  }

  private fun formatDeg(value: Double): String {
    val normalized = (value % 360 + 360) % 360
    return String.format("%.1f°", normalized)
  }

  private fun getFiller(): ItemStack {
    return ItemStack(Material.LIGHT_GRAY_STAINED_GLASS_PANE).apply {
      itemMeta =
          itemMeta?.apply {
            setDisplayName(" ")
            persistentDataContainer.set(GUI_KEY, PersistentDataType.STRING, "FILLER")
          }
    }
  }

  private fun formatLoc(value: Double): String {
    return String.format("%.3f", value)
  }
}
