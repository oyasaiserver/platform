package me.ankokunsan.entityPose

import me.ankokunsan.entityPose.EntityPose.Companion.CAT_KEY
import me.ankokunsan.entityPose.EntityPose.Companion.RABBIT_KEY
import me.ankokunsan.entityPose.EntityPose.Companion.SIZE_KEY
import me.ankokunsan.entityPose.EntityPose.Companion.WOLF_KEY
import me.ankokunsan.entityPose.commands.Entityinfo
import org.bukkit.NamespacedKey
import org.bukkit.Registry
import org.bukkit.Sound
import org.bukkit.attribute.Attribute
import org.bukkit.entity.ArmorStand
import org.bukkit.entity.Cat
import org.bukkit.entity.EntityType
import org.bukkit.entity.LivingEntity
import org.bukkit.entity.Player
import org.bukkit.entity.Rabbit
import org.bukkit.entity.Tameable
import org.bukkit.entity.Wolf
import org.bukkit.event.EventHandler
import org.bukkit.event.Listener
import org.bukkit.event.entity.EntityDamageEvent
import org.bukkit.event.inventory.InventoryClickEvent
import org.bukkit.persistence.PersistentDataType
import kotlin.math.round

class GUIClick : Listener {
  @EventHandler
  fun onSettingClick(event: InventoryClickEvent) {
    if (event.view.title != "§3エンティティの設定変更") return
    event.isCancelled = true

    val player = event.whoClicked as? Player ?: return

    // 【重要】Mapを使わず、クリックした瞬間の視線からターゲットを再取得
    val result =
        player.world.rayTraceEntities(player.eyeLocation, player.location.direction, 3.0, 0.5) {
          it != player
        }
    val target = result?.hitEntity ?: return // いなければ終了

    val slot = event.rawSlot
    when (slot) {
      0 -> { // ダメージ無効スイッチ
        // タグを使って状態を管理する (isInvulnerableはfalseのままにする)
        if (target.scoreboardTags.contains("custom_invincible")) {
          target.removeScoreboardTag("custom_invincible")
        } else {
          target.addScoreboardTag("custom_invincible")
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
        if (target is ArmorStand) target.isInvisible = !target.isInvisible
      }
      7 -> {
        val livingEntity = target as? LivingEntity ?: return
        val attribute = livingEntity.getAttribute(Attribute.SCALE) ?: return
        val currentScale = attribute.baseValue
        val newScale =(currentScale + 0.1).coerceAtMost(3.0)
        val roundedScale = round(newScale * 10) / 10.0
        attribute.baseValue = roundedScale
      }
      8 -> {
        val livingEntity = target as? LivingEntity ?: return
        val attribute = livingEntity.getAttribute(Attribute.SCALE) ?: return
        val currentScale = attribute.baseValue
        val newScale =(currentScale - 0.1).coerceAtLeast(0.5)
        val roundedScale = round(newScale * 10) / 10.0
        attribute.baseValue = roundedScale
      }
    }
    player.playSound(player.location, Sound.UI_BUTTON_CLICK, 1.0f, 1.5f)
    // 再描画の際も、今見つけたtargetを渡す
    Entityinfo().openSettingGUI(player, target)
  }

  @EventHandler
  fun onDamage(event: EntityDamageEvent) {
    // 叩かれたエンティティが「あの名札（タグ）」を持っていたら…
    if (event.entity.scoreboardTags.contains("custom_invincible")) {
      // ダメージ事件そのものを「なかったこと」にする！
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
  }
}
