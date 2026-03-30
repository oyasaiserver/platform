package me.ankokunsan.entityPose

import kotlin.collections.filter
import kotlin.collections.set
import kotlin.math.round
import me.ankokunsan.entityPose.EntityClick.Companion.currentStep
import me.ankokunsan.entityPose.EntityClick.Companion.currentZah
import me.ankokunsan.entityPose.EntityCopyClick.Companion.activeselection
import me.ankokunsan.entityPose.EntityPose.Companion.CAT_KEY
import me.ankokunsan.entityPose.EntityPose.Companion.KAKUDO_KEY
import me.ankokunsan.entityPose.EntityPose.Companion.PARROT_KEY
import me.ankokunsan.entityPose.EntityPose.Companion.RABBIT_KEY
import me.ankokunsan.entityPose.EntityPose.Companion.SIZE_KEY
import me.ankokunsan.entityPose.EntityPose.Companion.WOLF_KEY
import me.ankokunsan.entityPose.EntityPose.Companion.ZAHYO_KEY
import org.bukkit.NamespacedKey
import org.bukkit.Registry
import org.bukkit.Sound
import org.bukkit.attribute.Attribute
import org.bukkit.entity.ArmorStand
import org.bukkit.entity.Cat
import org.bukkit.entity.EntityType
import org.bukkit.entity.LivingEntity
import org.bukkit.entity.Parrot
import org.bukkit.entity.Player
import org.bukkit.entity.Rabbit
import org.bukkit.entity.Tameable
import org.bukkit.entity.Wolf
import org.bukkit.event.EventHandler
import org.bukkit.event.Listener
import org.bukkit.event.entity.EntityDamageEvent
import org.bukkit.event.inventory.InventoryClickEvent
import org.bukkit.persistence.PersistentDataType

class GUIClick : Listener {
  @EventHandler
  fun onSettingClick(event: InventoryClickEvent) {
    if (event.view.title != "§3エンティティの設定変更") return
    event.isCancelled = true

    val player = event.whoClicked as? Player ?: return

    val result =
        player.world.rayTraceEntities(player.eyeLocation, player.location.direction, 3.0, 0.5) {
          it != player
        }
    val target = result?.hitEntity ?: return // いなければ終了
    val livingEntity = target as? LivingEntity

    val slot = event.rawSlot
    when (slot) {
      0 -> {
        val container = target.persistentDataContainer
        if (target.persistentDataContainer.has(EntityPose.INVINCIBLE, PersistentDataType.BYTE)) {
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
        val container = target.persistentDataContainer
        if (target.persistentDataContainer.has(EntityPose.ITEMLOCK, PersistentDataType.BYTE)) {
          container.remove(EntityPose.ITEMLOCK)
        } else {
          container.set(EntityPose.ITEMLOCK, PersistentDataType.BYTE, 1.toByte())
        }
      }
      5 -> livingEntity?.isInvisible = !livingEntity.isInvisible
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
        if (target.persistentDataContainer.has(EntityPose.ARRANGELOCK, PersistentDataType.BYTE)) {
          container.remove(EntityPose.ARRANGELOCK)
        } else {
          container.set(EntityPose.ARRANGELOCK, PersistentDataType.BYTE, 1.toByte())
        }
      }
    }
    player.playSound(player.location, Sound.UI_BUTTON_CLICK, 1.0f, 1.5f)
    // 再描画の際も、今見つけたtargetを渡す
    ChooseGUi.openSettingGUI(player, target)
  }

  @EventHandler
  fun onALLSettingClick(event: InventoryClickEvent) {
    if (event.view.title != "§3範囲選択済みエンティティの設定変更") return
    event.isCancelled = true

    val player = event.whoClicked as? Player ?: return

    val result =
        player.world.rayTraceEntities(player.eyeLocation, player.location.direction, 3.0, 0.5) {
          it != player
        }
    val target = result?.hitEntity ?: return
    val selected = activeselection[player.uniqueId]
    if (selected != null && selected.contains(target)) {
      val targets = selected.filter { it.isValid }

      val slot = event.rawSlot
      val armor = targets.filterIsInstance<ArmorStand>()
      when (slot) {
        0 -> {
          val allInvincible =
              targets.all {
                it.persistentDataContainer.has(EntityPose.INVINCIBLE, PersistentDataType.BYTE)
              }
          targets.forEach {
            if (allInvincible) it.persistentDataContainer.remove(EntityPose.INVINCIBLE)
            else
                it.persistentDataContainer.set(
                    EntityPose.INVINCIBLE, PersistentDataType.BYTE, 1.toByte())
          }
        }
        1 -> {
          val allgravity = armor.all { it.hasGravity() }
          val nextState = !allgravity
          armor.forEach { it.setGravity(nextState) }
        }
        2 -> {
          val allbaseplate = armor.all { it.hasBasePlate() }
          val nextState = !allbaseplate
          armor.forEach { it.setBasePlate(nextState) }
        }
        3 -> {
          val allItemlock =
              targets.all {
                it.persistentDataContainer.has(EntityPose.ITEMLOCK, PersistentDataType.BYTE)
              }
          targets.forEach {
            if (allItemlock) it.persistentDataContainer.remove(EntityPose.ITEMLOCK)
            else
                it.persistentDataContainer.set(
                    EntityPose.ITEMLOCK, PersistentDataType.BYTE, 1.toByte())
          }
        }
        5 -> {
          val allInvisible = targets.all { (it as? LivingEntity)?.isInvisible == true }
          val nextState = !allInvisible
          targets.forEach { entity ->
            if (entity is LivingEntity) {
              entity.isInvisible = nextState
            }
          }
        }
        6 -> {
          targets.forEach { entity ->
            (entity as? LivingEntity)?.getAttribute(Attribute.SCALE)?.let { attribute ->
              val newScale = (attribute.baseValue + 0.1).coerceAtMost(3.0)
              val roundedScale = round(newScale * 10) / 10.0
              attribute.baseValue = roundedScale
            }
          }
        }
        7 -> {
          targets.forEach { entity ->
            (entity as? LivingEntity)?.getAttribute(Attribute.SCALE)?.let { attribute ->
              val newScale = (attribute.baseValue - 0.1).coerceAtLeast(0.3)
              val roundedScale = round(newScale * 10) / 10.0
              attribute.baseValue = roundedScale
            }
          }
        }
        8 -> {
          val allarrange =
              targets.all {
                it.persistentDataContainer.has(EntityPose.ARRANGELOCK, PersistentDataType.BYTE)
              }
          targets.forEach {
            if (allarrange) it.persistentDataContainer.remove(EntityPose.ARRANGELOCK)
            else
                it.persistentDataContainer.set(
                    EntityPose.ARRANGELOCK, PersistentDataType.BYTE, 1.toByte())
          }
        }
      }
      player.playSound(player.location, Sound.UI_BUTTON_CLICK, 1.0f, 1.5f)
      ChooseGUi.openAllSettingGUI(player, targets)
    }
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
    val player = event.whoClicked as? Player ?: return
    if (!event.view.title.contains("オオカミ選択")) return

    event.isCancelled = true
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
            "NORMAL" to "pale")
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
    val player = event.whoClicked as? Player ?: return
    if (!event.view.title.contains("ネコ選択")) return

    event.isCancelled = true

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
            "BLACK" to "all_black")
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
      player.closeInventory()
    }
  }

  @EventHandler
  fun onrabbitClick(event: InventoryClickEvent) {
    val player = event.whoClicked as? Player ?: return
    if (event.view.title != "§3ウサギ選択") return

    event.isCancelled = true

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
            "LIGHT_BROWN" to Rabbit.Type.SALT_AND_PEPPER)
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
    val player = event.whoClicked as? Player ?: return
    if (event.view.title != "§3オウム選択") return

    event.isCancelled = true

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
            "GRAY" to Parrot.Variant.GRAY)

    val parrotType = parrotVariantMap[action] ?: return
    FollowEntity.start<Parrot>(player, EntityType.PARROT) { parrot -> parrot.variant = parrotType }
    player.closeInventory()
  }

  @EventHandler
  fun onKakudoClick(event: InventoryClickEvent) {
    if (event.view.title != "§3角度の刻みを選択") return
    event.isCancelled = true

    val player = event.whoClicked as? Player ?: return
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
    if (event.view.title != "§3一回あたりに動く座標の大きさを選択") return
    event.isCancelled = true

    val player = event.whoClicked as? Player ?: return
    val item = event.currentItem ?: return
    val value1 =
        item.itemMeta?.persistentDataContainer?.get(ZAHYO_KEY, PersistentDataType.DOUBLE) ?: return
    currentZah[player.uniqueId] = value1

    player.sendMessage("§6[EntityPose] §aエンティティの一回あたりに動く座標の大きさを${value1}マスに設定しました")
    player.playSound(player.location, Sound.UI_BUTTON_CLICK, 1.0f, 1.5f)

    player.closeInventory()
  }
}
