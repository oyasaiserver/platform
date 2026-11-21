package me.ankokunsan.entityPose

import kotlin.collections.filter
import kotlin.collections.set
import kotlin.math.round
import me.ankokunsan.entityPose.EntityClick.Companion.currentStep
import me.ankokunsan.entityPose.EntityClick.Companion.currentZah
import me.ankokunsan.entityPose.EntityCopyClick.Companion.activeselection
import me.ankokunsan.entityPose.EntityPose.Companion.CAT_KEY
import me.ankokunsan.entityPose.EntityPose.Companion.HORSE_COLOR_KEY
import me.ankokunsan.entityPose.EntityPose.Companion.HORSE_STYLE_KEY
import me.ankokunsan.entityPose.EntityPose.Companion.KAKUDO_KEY
import me.ankokunsan.entityPose.EntityPose.Companion.PARROT_KEY
import me.ankokunsan.entityPose.EntityPose.Companion.RABBIT_KEY
import me.ankokunsan.entityPose.EntityPose.Companion.SIZE_KEY
import me.ankokunsan.entityPose.EntityPose.Companion.WOLF_KEY
import me.ankokunsan.entityPose.EntityPose.Companion.ZAHYO_KEY
import org.bukkit.Bukkit
import org.bukkit.NamespacedKey
import org.bukkit.Registry
import org.bukkit.Sound
import org.bukkit.attribute.Attribute
import org.bukkit.entity.ArmorStand
import org.bukkit.entity.Cat
import org.bukkit.entity.EntityType
import org.bukkit.entity.Horse
import org.bukkit.entity.LivingEntity
import org.bukkit.entity.Parrot
import org.bukkit.entity.Player
import org.bukkit.entity.Rabbit
import org.bukkit.entity.Tameable
import org.bukkit.entity.Wolf
import org.bukkit.event.EventHandler
import org.bukkit.event.Listener
import org.bukkit.event.entity.EntityDamageEvent
import org.bukkit.event.inventory.InventoryAction
import org.bukkit.event.inventory.InventoryClickEvent
import org.bukkit.event.inventory.InventoryDragEvent
import org.bukkit.persistence.PersistentDataType

class GUIClick : Listener {
  private fun validateGuiClick(
      event: InventoryClickEvent,
      expectedType: EntityPoseGuiType,
  ): Pair<Player, EntityPoseGuiHolder>? {
    val holder = event.view.topInventory.holder as? EntityPoseGuiHolder ?: return null
    if (holder.type != expectedType) return null
    event.isCancelled = true

    val player = event.whoClicked as? Player ?: return null
    if (!player.hasPermission("entitypose_arrange")) {
      player.closeInventory()
      return null
    }
    if (
        event.action == InventoryAction.COLLECT_TO_CURSOR ||
            event.isShiftClick ||
            event.clickedInventory != event.view.topInventory
    ) {
      return null
    }
    return player to holder
  }

  @EventHandler
  fun onInventoryDrag(event: InventoryDragEvent) {
    if (event.view.topInventory.holder is EntityPoseGuiHolder) {
      event.isCancelled = true
    }
  }

  @EventHandler
  fun onSettingClick(event: InventoryClickEvent) {
    val (player, holder) = validateGuiClick(event, EntityPoseGuiType.SETTING) ?: return

    val target =
        (holder.targetEntityId?.let { Bukkit.getEntity(it) }
            ?: player.world
                .rayTraceEntities(player.eyeLocation, player.location.direction, 3.0, 0.5) {
                  it !is Player
                }
                ?.hitEntity) ?: return
    if (!target.isValid || target is Player) return
    if (target.world != player.world || target.location.distanceSquared(player.location) > 36.0) {
      player.closeInventory()
      return
    }
    if (target is LivingEntity && target.hasAI()) return
    val livingEntity = target as? LivingEntity

    val slot = event.rawSlot
    if (slot !in setOf(0, 1, 2, 3, 5, 6, 7, 8)) return
    if (
        slot != 8 &&
            target.persistentDataContainer.has(EntityPose.ARRANGELOCK, PersistentDataType.BYTE)
    ) {
      player.sendMessage("§6[EntityPose] §cこのエンティティはロックされています")
      return
    }

    when (slot) {
      0 -> {
        val container = target.persistentDataContainer
        if (container.has(EntityPose.INVINCIBLE, PersistentDataType.BYTE)) {
          container.remove(EntityPose.INVINCIBLE)
        } else {
          container.set(EntityPose.INVINCIBLE, PersistentDataType.BYTE, 1.toByte())
        }
      }
      1 -> {
        if (target is Tameable) {
          target.isTamed = !target.isTamed
        } else if (target is ArmorStand) {
          target.setGravity(!target.hasGravity())
        }
      }
      2 -> {
        if (target is ArmorStand) target.setBasePlate(!target.hasBasePlate())
      }
      3 -> {
        if (target is ArmorStand) {
          val container = target.persistentDataContainer
          if (container.has(EntityPose.ITEMLOCK, PersistentDataType.BYTE)) {
            container.remove(EntityPose.ITEMLOCK)
          } else {
            container.set(EntityPose.ITEMLOCK, PersistentDataType.BYTE, 1.toByte())
          }
        }
      }
      5 -> livingEntity?.let { it.isInvisible = !it.isInvisible }
      6 -> {
        val attribute = livingEntity?.getAttribute(Attribute.SCALE) ?: return
        val currentScale = attribute.baseValue
        val newScale = (currentScale + 0.1).coerceAtMost(3.0)
        val roundedScale = round(newScale * 10) / 10.0
        attribute.baseValue = roundedScale
      }
      7 -> {
        val attribute = livingEntity?.getAttribute(Attribute.SCALE) ?: return
        val currentScale = attribute.baseValue
        val newScale = (currentScale - 0.1).coerceAtLeast(0.3)
        val roundedScale = round(newScale * 10) / 10.0
        attribute.baseValue = roundedScale
      }
      8 -> {
        val container = target.persistentDataContainer
        if (container.has(EntityPose.ARRANGELOCK, PersistentDataType.BYTE)) {
          container.remove(EntityPose.ARRANGELOCK)
        } else {
          container.set(EntityPose.ARRANGELOCK, PersistentDataType.BYTE, 1.toByte())
        }
      }
    }
    player.playSound(player.location, Sound.UI_BUTTON_CLICK, 1.0f, 1.5f)
    ChooseGUi.openSettingGUI(player, target)
  }

  @EventHandler
  fun onALLSettingClick(event: InventoryClickEvent) {
    val (player, holder) = validateGuiClick(event, EntityPoseGuiType.ALL_SETTING) ?: return

    val selected = activeselection[player.uniqueId] ?: return
    val targets =
        selected.filter { it.isValid && it !is Player && (it as? LivingEntity)?.hasAI() != true }
    if (targets.isEmpty()) {
      player.closeInventory()
      return
    }
    val targetId = holder.targetEntityId
    if (targetId != null) {
      if (targets.none { it.uniqueId == targetId }) return
    } else {
      val result =
          player.world.rayTraceEntities(player.eyeLocation, player.location.direction, 3.0, 0.5) {
            it !is Player
          }
      val hit = result?.hitEntity ?: return
      if (hit !in targets) return
    }

    val slot = event.rawSlot
    if (slot !in setOf(0, 1, 2, 3, 5, 6, 7, 8)) return

    if (slot == 8) {
      val allarrange =
          targets.all {
            it.persistentDataContainer.has(EntityPose.ARRANGELOCK, PersistentDataType.BYTE)
          }
      targets.forEach {
        if (allarrange) it.persistentDataContainer.remove(EntityPose.ARRANGELOCK)
        else
            it.persistentDataContainer.set(
                EntityPose.ARRANGELOCK,
                PersistentDataType.BYTE,
                1.toByte(),
            )
      }
    } else {
      val editableTargets =
          targets.filter {
            !it.persistentDataContainer.has(EntityPose.ARRANGELOCK, PersistentDataType.BYTE)
          }
      if (editableTargets.isEmpty()) {
        player.sendMessage("§6[EntityPose] §c選択中のエンティティはすべてロックされています")
        return
      }
      val armor = editableTargets.filterIsInstance<ArmorStand>()
      when (slot) {
        0 -> {
          val allInvincible =
              editableTargets.all {
                it.persistentDataContainer.has(EntityPose.INVINCIBLE, PersistentDataType.BYTE)
              }
          editableTargets.forEach {
            if (allInvincible) it.persistentDataContainer.remove(EntityPose.INVINCIBLE)
            else
                it.persistentDataContainer.set(
                    EntityPose.INVINCIBLE,
                    PersistentDataType.BYTE,
                    1.toByte(),
                )
          }
        }
        1 -> {
          if (targets.all { it is ArmorStand }) {
            val allgravity = armor.all { it.hasGravity() }
            val nextState = !allgravity
            armor.forEach { it.setGravity(nextState) }
          }
        }
        2 -> {
          if (targets.all { it is ArmorStand }) {
            val allbaseplate = armor.all { it.hasBasePlate() }
            val nextState = !allbaseplate
            armor.forEach { it.setBasePlate(nextState) }
          }
        }
        3 -> {
          if (targets.all { it is ArmorStand }) {
            val allItemlock =
                armor.all {
                  it.persistentDataContainer.has(EntityPose.ITEMLOCK, PersistentDataType.BYTE)
                }
            armor.forEach {
              if (allItemlock) it.persistentDataContainer.remove(EntityPose.ITEMLOCK)
              else
                  it.persistentDataContainer.set(
                      EntityPose.ITEMLOCK,
                      PersistentDataType.BYTE,
                      1.toByte(),
                  )
            }
          }
        }
        5 -> {
          val livingTargets = editableTargets.filterIsInstance<LivingEntity>()
          val allInvisible = livingTargets.isNotEmpty() && livingTargets.all { it.isInvisible }
          val nextState = !allInvisible
          livingTargets.forEach { entity -> entity.isInvisible = nextState }
        }
        6 -> {
          editableTargets.forEach { entity ->
            (entity as? LivingEntity)?.getAttribute(Attribute.SCALE)?.let { attribute ->
              val newScale = (attribute.baseValue + 0.1).coerceAtMost(3.0)
              val roundedScale = round(newScale * 10) / 10.0
              attribute.baseValue = roundedScale
            }
          }
        }
        7 -> {
          editableTargets.forEach { entity ->
            (entity as? LivingEntity)?.getAttribute(Attribute.SCALE)?.let { attribute ->
              val newScale = (attribute.baseValue - 0.1).coerceAtLeast(0.3)
              val roundedScale = round(newScale * 10) / 10.0
              attribute.baseValue = roundedScale
            }
          }
        }
      }
    }
    player.playSound(player.location, Sound.UI_BUTTON_CLICK, 1.0f, 1.5f)
    ChooseGUi.openAllSettingGUI(player, targets, holder.targetEntityId)
  }

  @EventHandler
  fun onDamage(event: EntityDamageEvent) {
    // 叩かれたエンティティがtagを持っていたら
    if (event.entity.persistentDataContainer.has(EntityPose.INVINCIBLE, PersistentDataType.BYTE)) {
      // ダメージそのものを「なかったこと」にする
      event.isCancelled = true
    }
  }

  @EventHandler
  fun onwolfClick(event: InventoryClickEvent) {
    val (player, _) = validateGuiClick(event, EntityPoseGuiType.WOLF) ?: return
    val item = event.currentItem ?: return
    if (!item.hasItemMeta()) return
    player.playSound(player, Sound.UI_BUTTON_CLICK, 1.0f, 1.5f)

    val meta = item.itemMeta!!
    val action = meta.persistentDataContainer.get(WOLF_KEY, PersistentDataType.STRING) ?: return
    val isMini = meta.persistentDataContainer.get(SIZE_KEY, PersistentDataType.STRING) == "MINI"

    val variantMap =
        mapOf(
            "LIGHT_BROWN" to "chestnut",
            "GRAY" to "ashen",
            "STRIPED" to "striped",
            "SPOTTED" to "spotted",
            "BROWN" to "rusty",
            "WHITE" to "snowy",
            "BLACK" to "black",
            "WOOD" to "woods",
            "NORMAL" to "pale",
        )
    // 2. 対応するバリアント名を取得（なければ処理終了）
    val variantName = variantMap[action] ?: return
    // 3. 共通のスポーン・追従処理を実行
    FollowEntity.start<Wolf>(player, EntityType.WOLF) { wolf ->
      val variantKey = NamespacedKey.minecraft(variantName)
      Registry.WOLF_VARIANT.get(variantKey)?.let { wolf.variant = it }
      if (isMini) {
        wolf.setBaby()
        wolf.ageLock = true // 大人にならないように固定
      }
    }
    player.closeInventory()
  }

  @EventHandler
  fun oncatClick(event: InventoryClickEvent) {
    val (player, _) = validateGuiClick(event, EntityPoseGuiType.CAT) ?: return

    val item = event.currentItem ?: return
    if (!item.hasItemMeta()) return
    player.playSound(player, Sound.UI_BUTTON_CLICK, 2.0f, 1.5f)

    val meta = item.itemMeta!!
    val action = meta.persistentDataContainer.get(CAT_KEY, PersistentDataType.STRING) ?: return
    val isMini = meta.persistentDataContainer.get(SIZE_KEY, PersistentDataType.STRING) == "MINI"

    val catVariantMap =
        mapOf(
            "TORA" to "tabby",
            "MIKE" to "calico",
            "TUXEDO" to "black",
            "ORANGE" to "red",
            "SIAMESE" to "siamese",
            "LIGHT_GRAY" to "british_shorthair",
            "LIGHT_BROWN" to "persian",
            "RAG" to "ragdoll",
            "WHITE" to "white",
            "GRAY" to "jellie",
            "BLACK" to "all_black",
        )
    // 2. 対応するバリアント名を取得
    val variantName = catVariantMap[action] ?: return
    // 3. 共通のスポーン・追従処理
    FollowEntity.start<Cat>(player, EntityType.CAT) { cat ->
      val variantKey = NamespacedKey.minecraft(variantName)
      Registry.CAT_VARIANT.get(variantKey)?.let { cat.catType = it }
      if (isMini) {
        cat.setBaby()
        cat.ageLock = true // 大人にならないように固定
      }
    }
    player.closeInventory()
  }

  @EventHandler
  fun onrabbitClick(event: InventoryClickEvent) {
    val (player, _) = validateGuiClick(event, EntityPoseGuiType.RABBIT) ?: return

    val item = event.currentItem ?: return
    if (!item.hasItemMeta()) return

    val meta = item.itemMeta!!
    val action = meta.persistentDataContainer.get(RABBIT_KEY, PersistentDataType.STRING) ?: return

    val rabbitTypeMap =
        mapOf(
            "BROWN" to Rabbit.Type.BROWN,
            "WHITE" to Rabbit.Type.WHITE,
            "BLACK" to Rabbit.Type.BLACK,
            "WHITE_BLACK" to Rabbit.Type.BLACK_AND_WHITE,
            "GOLD" to Rabbit.Type.GOLD,
            "LIGHT_BROWN" to Rabbit.Type.SALT_AND_PEPPER,
        )
    // 2. 対応するバリアント名を取得
    val rabtype = rabbitTypeMap[action] ?: return
    // 3. 共通のスポーン・追従処理
    FollowEntity.start<Rabbit>(player, EntityType.RABBIT) { rabbit ->
      // ウサギの種類を設定
      rabbit.rabbitType = rabtype
    }
    player.closeInventory()
  }

  @EventHandler
  fun onparrotClick(event: InventoryClickEvent) {
    val (player, _) = validateGuiClick(event, EntityPoseGuiType.PARROT) ?: return

    val item = event.currentItem ?: return
    if (!item.hasItemMeta()) return

    val meta = item.itemMeta!!
    val action = meta.persistentDataContainer.get(PARROT_KEY, PersistentDataType.STRING) ?: return

    val parrotVariantMap =
        mapOf(
            "RED" to Parrot.Variant.RED,
            "BLUE" to Parrot.Variant.BLUE,
            "GREEN" to Parrot.Variant.GREEN,
            "CYAN" to Parrot.Variant.CYAN,
            "GRAY" to Parrot.Variant.GRAY,
        )

    val parrotType = parrotVariantMap[action] ?: return
    FollowEntity.start<Parrot>(player, EntityType.PARROT) { parrot -> parrot.variant = parrotType }
    player.closeInventory()
  }

  @EventHandler
  fun onhorseClick(event: InventoryClickEvent) {
    val (player, _) = validateGuiClick(event, EntityPoseGuiType.HORSE_COLOR) ?: return

    val item = event.currentItem ?: return
    if (!item.hasItemMeta()) return

    val meta = item.itemMeta!!
    val action =
        meta.persistentDataContainer.get(HORSE_COLOR_KEY, PersistentDataType.STRING) ?: return

    player.closeInventory()
    ChooseGUi.openHorseStyleGUI(player, action)
  }

  @EventHandler
  fun onHorseStyleClick(event: InventoryClickEvent) {
    val (player, _) = validateGuiClick(event, EntityPoseGuiType.HORSE_STYLE) ?: return

    val item = event.currentItem ?: return
    if (!item.hasItemMeta()) return

    val meta = item.itemMeta!!
    val colorKey =
        meta.persistentDataContainer.get(HORSE_COLOR_KEY, PersistentDataType.STRING) ?: return
    val styleKey =
        meta.persistentDataContainer.get(HORSE_STYLE_KEY, PersistentDataType.STRING) ?: return

    // ここでも map を維持して呼び出し
    val horseVariantMap =
        mapOf(
            "WHITE" to Horse.Color.WHITE,
            "CHESTNUT" to Horse.Color.CHESTNUT,
            "CREAM" to Horse.Color.CREAMY,
            "BROWN" to Horse.Color.BROWN,
            "BLACK" to Horse.Color.BLACK,
            "GRAY" to Horse.Color.GRAY,
            "DARKBROWN" to Horse.Color.DARK_BROWN,
        )

    val horseStyleMap =
        mapOf(
            "NONE" to Horse.Style.NONE,
            "WHITE" to Horse.Style.WHITE,
            "WHITEFIELD" to Horse.Style.WHITEFIELD,
            "WHITE_DOTS" to Horse.Style.WHITE_DOTS,
            "BLACK_DOTS" to Horse.Style.BLACK_DOTS,
        )

    val horseColor = horseVariantMap[colorKey] ?: return
    val horseStyle = horseStyleMap[styleKey] ?: return

    // 決定した色と模様をまとめて適用
    FollowEntity.start<Horse>(player, EntityType.HORSE) { horse ->
      horse.color = horseColor
      horse.style = horseStyle
    }

    player.closeInventory()
  }

  @EventHandler
  fun onKakudoClick(event: InventoryClickEvent) {
    val (player, _) = validateGuiClick(event, EntityPoseGuiType.KAKUDO) ?: return
    val item = event.currentItem ?: return

    val value =
        item.itemMeta?.persistentDataContainer?.get(KAKUDO_KEY, PersistentDataType.DOUBLE) ?: return

    currentStep[player.uniqueId] = value
    player.sendMessage("§6[EntityPose] §aエンティティの角度の刻みを${value}度に設定しました")
    player.playSound(player, Sound.UI_BUTTON_CLICK, 1.0f, 1.5f)
    player.closeInventory()
  }

  @EventHandler
  fun onStepClick(event: InventoryClickEvent) {
    val (player, _) = validateGuiClick(event, EntityPoseGuiType.ZAHYO) ?: return
    val item = event.currentItem ?: return
    val value1 =
        item.itemMeta?.persistentDataContainer?.get(ZAHYO_KEY, PersistentDataType.DOUBLE) ?: return
    currentZah[player.uniqueId] = value1

    player.sendMessage("§6[EntityPose] §aエンティティの一回あたりに動く座標の大きさを${value1}マスに設定しました")
    player.playSound(player.location, Sound.UI_BUTTON_CLICK, 1.0f, 1.5f)

    player.closeInventory()
  }
}
