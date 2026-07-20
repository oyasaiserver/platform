@file:Suppress("DEPRECATION")

package me.marzipan.OyasaiPets

import java.util.UUID
import net.kyori.adventure.text.Component
import net.kyori.adventure.text.format.NamedTextColor.*
import org.bukkit.*
import org.bukkit.command.*
import org.bukkit.entity.*
import org.bukkit.event.EventHandler
import org.bukkit.event.Listener
import org.bukkit.event.inventory.InventoryClickEvent
import org.bukkit.event.player.PlayerQuitEvent
import org.bukkit.inventory.*

/** 購入GUIのクリックイベントを処理するリスナー */
class PetShopGuiListener(
    private val petShopGuiService: PetShopGuiService,
    private val openMainMenuFn: (Player) -> Unit,
    private val consumeTokensFn: (Player, Int) -> Boolean,
) : Listener {

  // 開いているバリアント選択GUIを追跡 (プレイヤーUUID -> EntityType)
  private val openedVariantGuis = mutableMapOf<UUID, EntityType>()

  @EventHandler
  fun onInventoryClick(event: InventoryClickEvent) {
    val player = event.whoClicked as? Player ?: return
    val title = event.view.title()
    val titlePlain = PLAIN_TEXT.serialize(title)

    // メイン購入GUI
    if (titlePlain == "★ ペットショップ") {
      event.isCancelled = true

      val clickedItem = event.currentItem ?: return
      if (clickedItem.type == Material.AIR || clickedItem.type == Material.EMERALD) return

      // メインメニューへ戻るボタン
      if (clickedItem.type == Material.ARROW) {
        player.closeInventory()
        openMainMenuFn(player)
        return
      }

      // アイテムショップボタン
      if (clickedItem.type == Material.CHEST) {
        player.closeInventory()
        petShopGuiService.openItemShopGui(player)
        return
      }

      // スポーンエッグのマテリアル名からEntityTypeを取得
      val materialName = clickedItem.type.name
      if (!materialName.endsWith("_SPAWN_EGG")) return

      val typeName = materialName.removeSuffix("_SPAWN_EGG")
      val type = runCatching { EntityType.valueOf(typeName) }.getOrNull() ?: return

      if (!PetRegistry.isOfficial(type)) return

      // バリアントがあるかチェック
      val variants = VariantHandler.getVariantNames(type)

      player.closeInventory()

      if (variants.isNotEmpty()) {
        // バリアント選択GUIを開く
        openedVariantGuis[player.uniqueId] = type
        petShopGuiService.openVariantSelectionGui(player, type)
      } else {
        // バリアントがない場合は直接購入画面へ
        petShopGuiService.openVariantSelectionGui(player, type)
      }

      return
    }

    // アイテムショップ カテゴリ選択GUI
    if (title == petShopGuiService.itemShopTitle) {
      event.isCancelled = true
      val clickedItem = event.currentItem ?: return
      when (clickedItem.type) {
        Material.ARROW -> {
          player.closeInventory()
          petShopGuiService.openMainShopGui(player)
        }
        Material.GOLDEN_APPLE -> {
          player.closeInventory()
          petShopGuiService.openCareShopGui(player)
        }
        Material.ENCHANTED_BOOK -> {
          player.closeInventory()
          petShopGuiService.openSkillShopGui(player)
        }
        Material.NETHER_STAR -> {
          player.closeInventory()
          petShopGuiService.openParticleShopGui(player)
        }
        Material.STICK -> {
          player.closeInventory()
          petShopGuiService.openToyShopGui(player)
        }
        else -> {}
      }
      return
    }

    // ケア用品ショップ
    if (title == petShopGuiService.careShopTitle) {
      event.isCancelled = true
      val clickedItem = event.currentItem ?: return
      if (clickedItem.type == Material.ARROW) {
        player.closeInventory()
        petShopGuiService.openItemShopGui(player)
        return
      }
      val cost =
          when {
            PetItemFactory.isPetFood(clickedItem) -> BigWolfConfig.itemShopPetFoodCost
            PetItemFactory.isPetBrush(clickedItem) -> BigWolfConfig.itemShopPetBrushCost
            PetItemFactory.isPetTreat(clickedItem) -> BigWolfConfig.itemShopPetTreatCost
            PetItemFactory.isPetHeal(clickedItem) -> BigWolfConfig.itemShopHealPotionCost
            else -> return
          }
      if (!consumeTokensFn(player, cost)) {
        player.playSound(player.location, Sound.ENTITY_VILLAGER_NO, 1f, 1f)
        return
      }
      val buyItem = clickedItem.clone().apply { amount = 1 }
      // loreから価格行を除いた元アイテムを渡すため、単純にcloneして支給
      player.inventory.addItem(buyItem)
      player.playSound(player.location, Sound.ENTITY_PLAYER_LEVELUP, 1f, 1.2f)
      player.sendMessage(Component.text("購入しました！ (-${cost}pt)", GREEN))
      return
    }

    // スキルブックショップ
    if (title == petShopGuiService.skillShopTitle) {
      event.isCancelled = true
      val clickedItem = event.currentItem ?: return
      if (clickedItem.type == Material.ARROW) {
        player.closeInventory()
        petShopGuiService.openItemShopGui(player)
        return
      }
      val level = PetItemFactory.getUnlockItemLevel(clickedItem)
      if (level == 0) return
      val cost = BigWolfConfig.getSkillBookShopCost(level)
      if (!consumeTokensFn(player, cost)) {
        player.playSound(player.location, Sound.ENTITY_VILLAGER_NO, 1f, 1f)
        return
      }
      player.inventory.addItem(PetItemFactory.createSkillUnlockItem(level))
      player.playSound(player.location, Sound.ENTITY_PLAYER_LEVELUP, 1f, 1.2f)
      player.sendMessage(Component.text("購入しました！ (-${cost}pt)", GREEN))
      return
    }

    // パーティクルショップ
    if (title == petShopGuiService.particleShopTitle) {
      event.isCancelled = true
      val clickedItem = event.currentItem ?: return
      if (clickedItem.type == Material.ARROW) {
        player.closeInventory()
        petShopGuiService.openItemShopGui(player)
        return
      }
      val particleId = PetItemFactory.getParticleUnlockId(clickedItem)
      if (particleId !in 5..10) return
      val cost = BigWolfConfig.itemShopParticleCost
      if (!consumeTokensFn(player, cost)) {
        player.playSound(player.location, Sound.ENTITY_VILLAGER_NO, 1f, 1f)
        return
      }
      player.inventory.addItem(PetItemFactory.createParticleUnlockItem(particleId))
      player.playSound(player.location, Sound.ENTITY_PLAYER_LEVELUP, 1f, 1.2f)
      player.sendMessage(Component.text("購入しました！ (-${cost}pt)", GREEN))
      return
    }

    // おもちゃショップ
    if (title == petShopGuiService.toyShopTitle) {
      event.isCancelled = true
      val clickedItem = event.currentItem ?: return
      if (clickedItem.type == Material.ARROW) {
        player.closeInventory()
        petShopGuiService.openItemShopGui(player)
        return
      }
      val spec = PetRegistry.findSpecByToy(clickedItem) ?: return
      val cost = BigWolfConfig.itemShopToyCost
      if (!consumeTokensFn(player, cost)) {
        player.playSound(player.location, Sound.ENTITY_VILLAGER_NO, 1f, 1f)
        return
      }
      player.inventory.addItem(spec.createToyItem())
      player.playSound(player.location, Sound.ENTITY_PLAYER_LEVELUP, 1f, 1.2f)
      player.sendMessage(Component.text("購入しました！ (-${cost}pt)", GREEN))
      return
    }

    // バリアント選択GUI
    if (titlePlain.endsWith("のバリアント選択")) {
      event.isCancelled = true

      val type = openedVariantGuis[player.uniqueId] ?: return
      val clickedItem = event.currentItem ?: return

      when (clickedItem.type) {
        Material.AIR,
        Material.EMERALD -> return
        Material.ARROW -> {
          // 戻るボタン
          player.closeInventory()
          petShopGuiService.openMainShopGui(player)
          return
        }
        else -> {
          // スポーンエッグがクリックされた
          if (!clickedItem.type.name.endsWith("_SPAWN_EGG")) return

          val itemMeta = clickedItem.itemMeta ?: return
          val itemLore = itemMeta.lore() ?: return

          // LOREから「バリアント: xxx」行を探してバリアント名を取得
          var variant: String? = null
          for (loreLine in itemLore) {
            val lorePlain = PLAIN_TEXT.serialize(loreLine)
            if (lorePlain.startsWith("バリアント: ")) {
              variant = lorePlain.removePrefix("バリアント: ")
              break
            }
          }

          // タイトルから「デフォルト」かどうか判定
          val itemName = itemMeta.displayName() ?: return
          val itemNamePlain = PLAIN_TEXT.serialize(itemName)
          if (itemNamePlain.contains("デフォルト")) {
            variant = null
          }

          player.closeInventory()

          // 購入確認画面を開く
          petShopGuiService.openPurchaseConfirmation(player, type, variant)
        }
      }

      return
    }
  }

  @EventHandler
  fun onPlayerQuit(event: PlayerQuitEvent) {
    openedVariantGuis.remove(event.player.uniqueId)
  }
}
