package me.ankokunsan.entityPose

import java.util.UUID
import kotlin.collections.filter
import me.ankokunsan.entityPose.EntityCopyClick.Companion.activeselection
import me.ankokunsan.entityPose.EntityCopyClick.Companion.selection
import me.ankokunsan.entityPose.EntityPose.Companion.CAT_KEY
import me.ankokunsan.entityPose.EntityPose.Companion.DEATH_KEY
import me.ankokunsan.entityPose.EntityPose.Companion.ENTITY_STICK_KEY
import me.ankokunsan.entityPose.EntityPose.Companion.GUI_KEY
import me.ankokunsan.entityPose.EntityPose.Companion.HORSE_COLOR_KEY
import me.ankokunsan.entityPose.EntityPose.Companion.PARROT_KEY
import me.ankokunsan.entityPose.EntityPose.Companion.RABBIT_KEY
import me.ankokunsan.entityPose.EntityPose.Companion.SIZE_KEY
import me.ankokunsan.entityPose.EntityPose.Companion.WOLF_KEY
import me.ankokunsan.entityPose.FollowEntity.activePreviews
import net.md_5.bungee.api.ChatMessageType
import net.md_5.bungee.api.chat.TextComponent
import org.bukkit.Bukkit
import org.bukkit.ChatColor
import org.bukkit.Material
import org.bukkit.Sound
import org.bukkit.entity.Allay
import org.bukkit.entity.ArmorStand
import org.bukkit.entity.EntityType
import org.bukkit.entity.LivingEntity
import org.bukkit.entity.Player
import org.bukkit.entity.Sittable
import org.bukkit.event.EventHandler
import org.bukkit.event.Listener
import org.bukkit.event.block.Action
import org.bukkit.event.entity.EntityDamageByEntityEvent
import org.bukkit.event.entity.EntityDeathEvent
import org.bukkit.event.inventory.CraftItemEvent
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

  @EventHandler(ignoreCancelled = true)
  fun offhandItem(event: PlayerInteractAtEntityEvent) {
    if (event.hand == EquipmentSlot.OFF_HAND) return

    val player = event.player
    val armorStand = event.rightClicked as? ArmorStand ?: return
    if (!player.isSneaking) return

    val hand = player.inventory.itemInMainHand
    if (hand.type == Material.AIR || isEntiStick(hand) || isCopyWand(hand)) return
    if (!armorStand.hasArms()) return

    event.isCancelled = true
    if (
        !player.hasPermission("entitypose_arrange") ||
            armorStand.persistentDataContainer.has(EntityPose.ITEMLOCK, PersistentDataType.BYTE)
    )
        return

    val oldItem = armorStand.equipment.itemInOffHand

    val place = hand.clone()
    place.amount = 1

    armorStand.equipment.setItemInOffHand(place)

    if (oldItem.type != Material.AIR) {
      val leftover = player.inventory.addItem(oldItem)
      for (item in leftover.values) {
        player.world.dropItemNaturally(player.location, item)
      }
    }

    if (hand.amount > 1) {
      hand.amount -= 1
      player.inventory.setItemInMainHand(hand)
    } else {
      player.inventory.setItemInMainHand(ItemStack(Material.AIR))
    }
  }

  @EventHandler
  fun onManipulate(event: PlayerArmorStandManipulateEvent) {
    val hand = event.player.inventory.itemInMainHand
    val armor = event.rightClicked
    if (
        isEntiStick(hand) ||
            armor.persistentDataContainer.has(EntityPose.ITEMLOCK, PersistentDataType.BYTE)
    ) {
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
    if (target is Player) {
      actionBar(player, "§6[EntityPose] §cプレイヤーをいじろうとしないでね")
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
  fun onDropEvent(event: PlayerDropItemEvent) {
    val player = event.player
    val item = event.itemDrop.itemStack
    if (!isEntiStick(item)) return
    if (!player.hasPermission("entitypose_arrange")) return
    if (player.isSneaking) return
    event.isCancelled = true
    val result =
        player.world.rayTraceEntities(player.eyeLocation, player.location.direction, 3.0, 0.1) {
            entity ->
          entity !is Player
        }
    val target = result?.hitEntity ?: return
    if (target is LivingEntity && target.hasAI()) {
      player.sendMessage("§6[EntityPose] §cこのエンティティはAIが有効です")
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
                title,
            )

        fillVariantItems(
            inv1,
            WOLF_KEY,
            listOf(
                Triple(
                    "10673a3e975e95385683734de0aaae2fc14491c89c448fc77c954329312c558b",
                    "栗色",
                    "LIGHT_BROWN",
                ),
                Triple(
                    "18b7d365417593267352816b1da57383c996a24ce4ac6323725c51b139bbcfac",
                    "灰色",
                    "GRAY",
                ),
                Triple(
                    "c7da319bc006a570c550846c0e8cf6ad88d326ec9f447d5c168228c4d2dd6e27",
                    "しま模様",
                    "STRIPED",
                ),
                Triple(
                    "a1a3c46ecc14787c41d7cf61c30415dd6cf9d0db4020b89532eefde81bc6d061",
                    "まだら模様",
                    "SPOTTED",
                ),
                Triple(
                    "f38b37576d4b2f972590f94ae839f221cfc04ca131f6e1bf93f1160a87f91722",
                    "赤茶色",
                    "BROWN",
                ),
                Triple(
                    "26c67affae90af1c69085a66487e16f591a45bef6665d03e0aef0f92b28f1f3d",
                    "雪",
                    "WHITE",
                ),
                Triple(
                    "62fa964dc6849129428abee17d50bfdd69172f441b6f537b00536da2dd365e24",
                    "黒色",
                    "BLACK",
                ),
                Triple(
                    "f7b424dd4463dfe1b6931efe536d3e1830df2c9c709b9abee3afaec5e3eb2ff6",
                    "森(ウッド柄)",
                    "WOOD",
                ),
                Triple(
                    "dc64e0cc93c1e146012672bd0331dc6a444f413b10a8909a863fdf9e7a349a87",
                    "ノーマル",
                    "NORMAL",
                ),
            ),
            isMini,
        )
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
                title1,
            )

        fillVariantItems(
            inv2,
            CAT_KEY,
            listOf(
                Triple(
                    "ed2926a6976f05725fd0ac1079abead49427747a687929efe31e1ccdbcfa741f",
                    "トラ柄",
                    "TORA",
                ),
                Triple(
                    "9f06cd1914abb82b52f42709b0c25e0affb92fc4b7be1ecfef59fbbe862a3b8b",
                    "三毛",
                    "MIKE",
                ),
                Triple(
                    "22f456e43d847ca8bb89e7a51d47770dd4becc52372a26b0f4a6b6a293e643a3",
                    "タキシード",
                    "TUXEDO",
                ),
                Triple(
                    "8270a64bd2dfdb977f4afb5aaa24c4c3acc621b7f116f63a77b3d27937def78f",
                    "赤色(絶対オレンジです)",
                    "ORANGE",
                ),
                Triple(
                    "136c0c1a548c0e3b47329cb870ceaa14b1a9f382bdadeae3f8b41f6d1367988f",
                    "シャム",
                    "SIAMESE",
                ),
                Triple(
                    "6d2fc072b70b920f14274fd65c8659e352bd22c14258ded99c9558ab8dbc3511",
                    "ブリティッシュ_ショートヘア",
                    "LIGHT_GRAY",
                ),
                Triple(
                    "a6cd7cd7508255d0da95190bd5ad16c6541791597a9702ad8769fde9c97b4462",
                    "ペルシャ",
                    "LIGHT_BROWN",
                ),
                Triple(
                    "22e7d959081dac7ecf3d6c5738a93c8e3121af04e040c84eebab88c0440199e3",
                    "ラグドール",
                    "RAG",
                ),
                Triple(
                    "68cc43cf43eea96b8f7ce953dc4e244c93480acf1344f0f6fbda648504ad0e06",
                    "白色",
                    "WHITE",
                ),
                Triple(
                    "f64e0f82177107d0c44696c1f03d4d34148243ebd9e0c2ebc3b496f1bd3b268",
                    "ジェリー",
                    "GRAY",
                ),
                Triple(
                    "966a68c309578c8bb625ec3931f97a5ac42b4120ccf1fe40a7391e88b0b9e811",
                    "黒色",
                    "BLACK",
                ),
            ),
            isMini,
        )
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
                "§3ウサギ選択",
            )
        fillVariantItems(
            inv3,
            RABBIT_KEY,
            listOf(
                Triple(
                    "c1db38ef3c1a1d59f779a0cd9f9e616de0cc9acc7734b8facc36fc4ea40d0235",
                    "茶色",
                    "BROWN",
                ),
                Triple(
                    "a0dcddc236972edcd48e825b6b0054b7b6e1a781e6f12ae04c14a07827ca8dcc",
                    "白色",
                    "WHITE",
                ),
                Triple(
                    "72c58116a147d1a9a26269224a8be184fe8e5f3f3df9b61751369ad87382ec9",
                    "黒色",
                    "BLACK",
                ),
                Triple(
                    "cb8cff4b15b8ca37e25750f345718f289cb22c5b3ad22627a71223faccc",
                    "白黒",
                    "WHITE_BLACK",
                ),
                Triple("c977a3266bf3b9eaf17e5a02ea5fbb46801159863dd288b93e6c12c9cb", "金色", "GOLD"),
                Triple(
                    "cc4349fe9902dd76c1361f8d6a1f79bff6f433f3b7b18a47058f0aa16b9053f",
                    "ソルト＆ペッパー",
                    "LIGHT_BROWN",
                ),
            ),
            false,
        )
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
                "§3オウム選択",
            )
        fillVariantItems(
            inv4,
            PARROT_KEY,
            listOf(
                Triple(
                    "5d1a168bc72cb314f7c86feef9d9bc7612365244ce67f0a104fce04203430c1d",
                    "赤色",
                    "RED",
                ),
                Triple(
                    "20e03b10c15ee5601423867dfb8bcbcbc919ca96c0eea63073ec8e795eabd05f",
                    "青色",
                    "BLUE",
                ),
                Triple(
                    "5fc9a3b9d5879c2150984dbfe588cc2e61fb1de1e60fd2a469f69dd4b6f6a993",
                    "緑色",
                    "GREEN",
                ),
                Triple(
                    "bc6471f23547b2dbdf60347ea128f8eb2baa6a79b0401724f23bd4e2564a2b61",
                    "シアン",
                    "CYAN",
                ),
                Triple(
                    "a3c34722ac64496c9b84d0c54019daae6185d6094990133ad6810eea3d24067a",
                    "灰色",
                    "GRAY",
                ),
            ),
            false,
        )
        val filler = getFiller()
        (0 until inv4.size).forEach { i -> if (inv4.getItem(i) == null) inv4.setItem(i, filler) }
        player.openInventory(inv4)
      }
      "HORSE" -> {
        event.isCancelled
        val inv4 =
            Bukkit.createInventory(
                player, // holder（nullでもOK）
                9,
                "§3馬選択",
            )
        fillVariantItems(
            inv4,
            HORSE_COLOR_KEY,
            listOf(
                Triple(
                    "9f4bdd59d4f8f1d5782e0fee4bd64aed100627f188a91489ba37eeadededd827",
                    "白色",
                    "WHITE",
                ),
                Triple(
                    "9717d71025f7a62c90a333c51663ffeb385a9a0d92af68083c5b045c0524b23f",
                    "栗色",
                    "CHESTNUT",
                ),
                Triple(
                    "a6dae0ade0e0dafb6dbc7786ce4241242b6b6df527a0f7af0a42184c93fd646b",
                    "クリーム色",
                    "CREAM",
                ),
                Triple(
                    "25e397def0af06feef22421860088186639732aa0a5eb5756e0aa6b03fd092c8",
                    "茶色",
                    "BROWN",
                ),
                Triple(
                    "3efb0b9857d7c8d295f6df97b605f40b9d07ebe128a6783d1fa3e1bc6e44117",
                    "黒色",
                    "BLACK",
                ),
                Triple(
                    "8f0d955889b0378d4933c956398567e770103ae9eff0f702d0d53d52e7f6a83b",
                    "灰色",
                    "GRAY",
                ),
                Triple(
                    "156b7bc1a4836eb428ea8925eceb5e01dfbd30c7deff6c9482689823203cfd2f",
                    "暗い茶色",
                    "DARKBROWN",
                ),
            ),
            false,
        )
        val filler = getFiller()
        (0 until inv4.size).forEach { i -> if (inv4.getItem(i) == null) inv4.setItem(i, filler) }
        player.openInventory(inv4)
      }
      "ALLAY" -> {
        FollowEntity.start<Allay>(player, EntityType.ALLAY) {}
        player.closeInventory()
      }
    }
  }

  @EventHandler
  fun onRightClick(event: PlayerInteractAtEntityEvent) {
    if (event.hand == EquipmentSlot.OFF_HAND) return

    val player = event.player
    val entity = event.rightClicked
    if (!player.hasPermission("entitypose_arrange")) return //
    val previewData = activePreviews[player.uniqueId]
    if (previewData != null && previewData.first == entity) {
      // 固定する時の処理
      FollowEntity.stop(player)
      event.isCancelled = true
      player.sendMessage("§6[EntityPose] §aエンティティを固定しました！")
    } else {
      val hand = player.inventory.itemInMainHand
      if (!isEntiStick(hand)) return
      if (entity.persistentDataContainer.has(EntityPose.ARRANGELOCK, PersistentDataType.BYTE)) {
        actionBar(player, "§6[EntityPose] §cこのエンティティはロックされています")
        return
      }
      if (entity is Player) {
        actionBar(player, "§6[EntityPose] §cプレイヤーをいじろうとしないでね")
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
            part == StandPart.X ||
                part == StandPart.Y ||
                part == StandPart.Z ||
                part == StandPart.ALL
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
            showPoseRotation(player, entity.headPose.x, "頭_X軸側")
          }

          StandPart.HEAD_Y -> {
            entity.headPose = entity.headPose.setY(entity.headPose.y + rad)
            showPoseRotation(player, entity.headPose.y, "頭_Y軸側")
          }

          StandPart.HEAD_Z -> {
            entity.headPose = entity.headPose.setZ(entity.headPose.z + rad)
            showPoseRotation(player, entity.headPose.z, "頭_Z軸側")
          }

          StandPart.BODY_X -> {
            entity.bodyPose = entity.bodyPose.setX(entity.bodyPose.x + rad)
            showPoseRotation(player, entity.bodyPose.x, "上半身_X軸側")
          }

          StandPart.BODY_Y -> {
            entity.bodyPose = entity.bodyPose.setY(entity.bodyPose.y + rad)
            showPoseRotation(player, entity.bodyPose.y, "上半身_Y軸側")
          }

          StandPart.BODY_Z -> {
            entity.bodyPose = entity.bodyPose.setZ(entity.bodyPose.z + rad)
            showPoseRotation(player, entity.bodyPose.z, "上半身_Z軸側")
          }

          StandPart.LEFT_ARM_X -> {
            entity.leftArmPose = entity.leftArmPose.setX(entity.leftArmPose.x + rad)
            showPoseRotation(player, entity.leftArmPose.x, "左手_X軸側")
          }

          StandPart.LEFT_ARM_Y -> {
            entity.leftArmPose = entity.leftArmPose.setY(entity.leftArmPose.y + rad)
            showPoseRotation(player, entity.leftArmPose.y, "左手_Y軸側")
          }

          StandPart.LEFT_ARM_Z -> {
            entity.leftArmPose = entity.leftArmPose.setZ(entity.leftArmPose.z + rad)
            showPoseRotation(player, entity.leftArmPose.z, "左手_Z軸側")
          }

          StandPart.RIGHT_ARM_X -> {
            entity.rightArmPose = entity.rightArmPose.setX(entity.rightArmPose.x + rad)
            showPoseRotation(player, entity.rightArmPose.x, "右手_X軸側")
          }

          StandPart.RIGHT_ARM_Y -> {
            entity.rightArmPose = entity.rightArmPose.setY(entity.rightArmPose.y + rad)
            showPoseRotation(player, entity.rightArmPose.y, "右手_Y軸側")
          }

          StandPart.RIGHT_ARM_Z -> {
            entity.rightArmPose = entity.rightArmPose.setZ(entity.rightArmPose.z + rad)
            showPoseRotation(player, entity.rightArmPose.z, "右手_Z軸側")
          }

          StandPart.LEFT_LEG_X -> {
            entity.leftLegPose = entity.leftLegPose.setX(entity.leftLegPose.x + rad)
            showPoseRotation(player, entity.leftLegPose.x, "左足_X軸側")
          }

          StandPart.LEFT_LEG_Y -> {
            entity.leftLegPose = entity.leftLegPose.setY(entity.leftLegPose.y + rad)
            showPoseRotation(player, entity.leftLegPose.y, "左足_Y軸側")
          }

          StandPart.LEFT_LEG_Z -> {
            entity.leftLegPose = entity.leftLegPose.setZ(entity.leftLegPose.z + rad)
            showPoseRotation(player, entity.leftLegPose.z, "左足_Z軸側")
          }

          StandPart.RIGHT_LEG_X -> {
            entity.rightLegPose = entity.rightLegPose.setX(entity.rightLegPose.x + rad)
            showPoseRotation(player, entity.rightLegPose.x, "右足_X軸側")
          }

          StandPart.RIGHT_LEG_Y -> {
            entity.rightLegPose = entity.rightLegPose.setY(entity.rightLegPose.y + rad)
            showPoseRotation(player, entity.rightLegPose.y, "右足_Y軸側")
          }

          StandPart.RIGHT_LEG_Z -> {
            entity.rightLegPose = entity.rightLegPose.setZ(entity.rightLegPose.z + rad)
            showPoseRotation(player, entity.rightLegPose.z, "右足_Z軸側")
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
            part1 == EntiPart.X ||
                part1 == EntiPart.Y ||
                part1 == EntiPart.Z ||
                part1 == EntiPart.ALL
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

              else -> actionBar(player, "§6[EntityPose] §cこのエンティティは座れません。残念;;")
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
  }

  @EventHandler
  fun onQuit(event: PlayerQuitEvent) {
    val uuid = event.player.uniqueId
    currentStep.remove(uuid)
    currentZah.remove(uuid)
    FollowEntity.stop(event.player)

    if (selection.containsKey(uuid)) {
      stopHighlight(uuid)
      selection.remove(uuid)
      activeselection.remove(uuid)
    }
    selectedPart.keys.removeIf { it.first == uuid }
    selectPart.keys.removeIf { it.first == uuid }
  }

  @EventHandler
  fun onCraftItem(event: CraftItemEvent) {
    val entitystick =
        event.inventory.matrix.any { item ->
          item?.itemMeta?.persistentDataContainer?.has(ENTITY_STICK_KEY, PersistentDataType.BYTE) ==
              true
        }
    if (entitystick) {
      event.isCancelled = true
    }
  }

  @EventHandler
  fun onPetDeath(event: EntityDeathEvent) {
    val entity = event.entity

    if (entity.persistentDataContainer.has(DEATH_KEY, PersistentDataType.BYTE)) {
      event.drops.clear()
      event.droppedExp = 0
    }
  }

  private fun showPoseRotation(player: Player, angle: Double, label: String) {
    val deg = Math.toDegrees(angle)
    actionBar(player, "§a$label: ${formatDeg(deg)}")
  }

  private fun formatDeg(value: Double): String {
    val normalized = (value % 360 + 360) % 360
    return String.format("%.1f°", normalized)
  }

  private fun fillVariantItems(
      inventory: org.bukkit.inventory.Inventory,
      key: org.bukkit.NamespacedKey,
      variants: List<Triple<String, String, String>>,
      isMini: Boolean,
  ) {
    variants.forEachIndexed { index, (texture, name, value) ->
      val item =
          CustomHead.get(texture).apply {
            itemMeta =
                itemMeta!!.apply {
                  setDisplayName("${ChatColor.GREEN}$name")
                  persistentDataContainer.set(key, PersistentDataType.STRING, value)
                  if (isMini)
                      persistentDataContainer.set(SIZE_KEY, PersistentDataType.STRING, "MINI")
                }
          }
      inventory.setItem(index, item)
    }
  }
}
