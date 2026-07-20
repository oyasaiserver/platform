@file:Suppress("DEPRECATION")

package me.marzipan.OyasaiPets

import java.util.UUID
import java.util.logging.Logger
import net.kyori.adventure.text.Component
import net.kyori.adventure.text.event.ClickEvent
import net.kyori.adventure.text.format.NamedTextColor.*
import org.bukkit.*
import org.bukkit.command.*
import org.bukkit.entity.*
import org.bukkit.event.EventHandler
import org.bukkit.event.Listener
import org.bukkit.event.inventory.InventoryClickEvent
import org.bukkit.event.inventory.InventoryCloseEvent
import org.bukkit.inventory.*
import org.bukkit.persistence.PersistentDataType

/**
 * PetInventoryListener handles all inventory GUI interactions:
 * - onInventoryClick: Main GUI handler for pet info, shop, main menu, particle selection
 * - onBreedGuiClick: Breeding selection GUI
 * - onInventoryClose: Cleanup when inventories are closed
 */
class PetInventoryListener(
    private val logger: Logger,
    private val guiManager: GuiManager,
    private val petSpawnSystem: PetSpawnSystem,
    // GUI state maps
    private val openedGuis: MutableMap<Inventory, LivingEntity>,
    private val openedShopGuis: MutableMap<Inventory, ShopContext>,
    private val openedMainMenus: MutableSet<Inventory>,
    // GUI titles
    private val guiTitle: Component,
    private val shopGuiTitle: Component,
    private val mainMenuTitle: Component,
    private val breedGuiTitle: Component,
    // Helper method references
    private val consumeTokensFn: (Player, Int) -> Boolean,
    private val refundTokensFn: (Player, Int) -> Unit,
    private val giveFoodFn: (Player, LivingEntity) -> Unit,
    private val storePetToItemFn: (Player, LivingEntity) -> Unit,
    private val storeAllPetsFn: (Player) -> Unit,
    private val handleBreedCommandFn: (Player) -> Unit,
    private val openShopFn: (Player) -> Unit,
) : Listener {

  @EventHandler
  fun onInventoryClick(event: InventoryClickEvent) {
    val player = event.whoClicked as? Player ?: return
    val item = event.currentItem ?: return

    // パーティクル選択GUI
    if (event.view.title() == Component.text("パーティクル選択", GOLD)) {
      event.isCancelled = true
      val entity = openedGuis[event.view.topInventory] ?: return

      when (item.type) {
        Material.BARRIER,
        Material.LIGHTNING_ROD,
        Material.BLAZE_POWDER,
        Material.SOUL_CAMPFIRE,
        Material.RED_DYE,
        Material.NETHER_STAR,
        Material.NOTE_BLOCK,
        Material.SNOWBALL,
        Material.CHERRY_LEAVES,
        Material.ENDER_PEARL,
        Material.SLIME_BALL -> {
          // パーティクルを選択
          val particleId =
              when (event.slot) {
                0 -> 0 // なし
                1 -> 1 // 電気
                2 -> 2 // 炎
                3 -> 3 // 青炎
                4 -> 4 // ハート
                9 -> 5 // 星
                10 -> 6 // 音符
                11 -> 7 // 雪
                12 -> 8 // 桜
                13 -> 9 // エンド
                14 -> 10 // スライム
                else -> -1
              }

          if (particleId >= 0) {
            // デフォルトパーティクル(0-4)は常に選択可能
            // アンロック可能パーティクル(5-10)は解放済みかチェック
            if (particleId <= 4 || entity.isParticleUnlocked(particleId)) {
              entity.particleType = particleId
              player.playSound(player.location, Sound.BLOCK_AMETHYST_BLOCK_CHIME, 1f, 1f)
              guiManager.openParticleSelectGui(player, entity) // GUI再描画
            } else {
              player.sendMessage(Component.text("このパーティクルは未解放です！", RED))
              player.playSound(player.location, Sound.ENTITY_VILLAGER_NO, 1f, 1f)
            }
          }
        }
        Material.ARROW -> {
          // 戻る
          player.closeInventory()
          guiManager.openPetInfoGui(player, entity)
        }
        Material.GRAY_DYE -> {
          // 未解放パーティクル
          player.sendMessage(Component.text("このパーティクルは未解放です！", RED))
          player.playSound(player.location, Sound.ENTITY_VILLAGER_NO, 1f, 1f)
        }
        else -> {}
      }
      return
    }

    // メインメニューGUI
    if (event.view.title() == mainMenuTitle) {
      event.isCancelled = true
      if (!openedMainMenus.contains(event.view.topInventory)) return

      when (item.type) {
        Material.WRITTEN_BOOK -> {
          // ペット一覧
          player.closeInventory()
          guiManager.openPetListGui(player, player.uniqueId)
        }
        Material.CHEST -> {
          // 全ペット収納
          player.closeInventory()
          storeAllPetsFn(player)
        }
        Material.HEART_OF_THE_SEA -> {
          // 交配
          player.closeInventory()
          handleBreedCommandFn(player)
        }
        Material.EMERALD -> {
          // ショップ
          player.closeInventory()
          openShopFn(player)
        }
        Material.BARRIER -> {
          // 閉じる
          player.closeInventory()
        }
        else -> {}
      }
      return
    }

    // 購入GUI
    if (event.view.title() == shopGuiTitle) {
      event.isCancelled = true
      val ctx = openedShopGuis[event.view.topInventory] ?: return player.closeInventory()

      when (item.type) {
        Material.EMERALD_BLOCK -> {
          // ペット数制限チェック
          if (petSpawnSystem.countActivePets(player) >= BigWolfConfig.MAX_PET_COUNT) {
            player.closeInventory()
            player.sendMessage(
                Component.text("ペットは同時に${BigWolfConfig.MAX_PET_COUNT}匹までしか召喚できません！", RED)
            )
            player.playSound(player.location, Sound.ENTITY_VILLAGER_NO, 1f, 1f)
            return
          }

          // ポイント残高チェックと消費
          if (!consumeTokensFn(player, ctx.cost)) {
            player.closeInventory()
            player.playSound(player.location, Sound.ENTITY_VILLAGER_NO, 1f, 1f)
            return
          }

          player.closeInventory()

          // 直接ペットをスポーン（購入券システム廃止）
          val petId = petSpawnSystem.spawnAndMountEntity(player, ctx.type, ctx.variant)

          if (petId == null) {
            // スポーン失敗 → 返金
            refundTokensFn(player, ctx.cost)
            player.sendMessage(Component.text("召喚に失敗したためポイントを返金しました。(+${ctx.cost}pt)", YELLOW))
            player.playSound(player.location, Sound.ENTITY_VILLAGER_NO, 1f, 1f)
            return
          }

          // 購入履歴を記録
          val petData =
              PetDataManager.recordPurchase(
                  ownerUuid = player.uniqueId,
                  petId = petId,
                  type = ctx.type,
                  variant = ctx.variant,
                  customName = null,
              )

          // エンティティの表示名をJSON保存名（連番ベース）で上書き
          petData.customName?.let {
            ActivePetRegistry.findByPetId(petId)?.customName(Component.text(it))
          }

          player.playSound(player.location, Sound.ENTITY_PLAYER_LEVELUP, 1f, 1.2f)
          val label =
              if (ctx.variant != null) "${ctx.type.name} (${ctx.variant})" else ctx.type.name
          player.sendMessage(Component.text("購入しました: $label (-${ctx.cost}pt)", GREEN))
        }

        Material.ARROW -> {
          // ← ショップへ戻る
          player.closeInventory()
          openShopFn(player)
        }

        Material.BARRIER -> {
          player.closeInventory()
        }

        else -> {}
      }
      return
    }

    // 既存のペット情報GUI
    if (event.view.title() != guiTitle) return
    event.isCancelled = true

    val entity =
        openedGuis[event.view.topInventory]
            ?: return player.closeInventory().also {
              player.sendMessage(Component.text("操作対象のペットが見つかりません。", RED))
            }

    if (!entity.isValid) {
      player.closeInventory()
      player.sendMessage(Component.text("ペットが存在しません。", RED))
      return
    }

    when (item.type) {
      Material.NAME_TAG -> {
        player.closeInventory()
        val petId = entity.petId
        val ownerId = entity.ownerId
        if (petId == null || ownerId == null) {
          player.sendMessage(Component.text("ペットIDまたはオーナーIDが見つかりません。", RED))
          return
        }
        try {
          val ownerUuid = UUID.fromString(ownerId)
          val petData = PetDataManager.getPetData(ownerUuid, petId)
          if (petData == null) {
            player.sendMessage(Component.text("ペットデータが見つかりません。", RED))
            logger.warning("Pet data not found: ownerUuid=$ownerUuid, petId=$petId")
            return
          }
          player.sendMessage(Component.text("=== ペット名前変更 ===", GOLD))
          player.sendMessage(Component.text("下のメッセージをクリックすると、チャット欄に自動入力されます。", YELLOW))
          player.sendMessage(Component.text("名前を入力してEnterキーで確定してください。", YELLOW))
          player.sendMessage(Component.empty())
          player.sendMessage(
              Component.text("▶ /bigwolf rename ${petData.petNumber} <新しい名前>", GREEN)
                  .clickEvent(
                      net.kyori.adventure.text.event.ClickEvent.suggestCommand(
                          "/bigwolf rename ${petData.petNumber} "
                      )
                  )
                  .hoverEvent(Component.text("クリックでコマンドを入力欄に挿入"))
          )
        } catch (e: Exception) {
          player.sendMessage(Component.text("ペット情報の取得に失敗しました。", RED))
          logger.warning("Failed to get pet data: ${e.message}")
        }
      }

      Material.IRON_SWORD -> {
        val unlocked = entity.skillUnlockedLevel
        if (unlocked == 0) {
          player.sendMessage(Component.text("スキルが一つも解放されていません。強化アイテムを与えてください。", RED))
          return
        }
        val currentSkill = entity.skillType
        val nextSkill =
            if (event.isRightClick) {
              if (currentSkill > 1) currentSkill - 1 else unlocked
            } else {
              if (currentSkill < unlocked) currentSkill + 1 else 1
            }

        entity.skillType = nextSkill
        player.playSound(player.location, Sound.UI_BUTTON_CLICK, 1f, 1f)
        guiManager.openPetInfoGui(player, entity)
      }

      Material.BARRIER -> {
        if (event.slot == 3) {
          player.sendMessage(Component.text("スキルが未解放です。スキル強化の本を与えてください。", RED))
        } else if (event.slot == 7) { // 閉じるボタン
          player.closeInventory()
        }
      }

      Material.BLAZE_POWDER -> {
        // パーティクル選択GUIを開く
        player.closeInventory()
        guiManager.openParticleSelectGui(player, entity)
      }

      Material.CHEST -> {
        player.closeInventory()
        storePetToItemFn(player, entity)
      }

      // 譲渡ボタン
      Material.PLAYER_HEAD -> {
        player.closeInventory()
        val petId = entity.petId
        val ownerId = entity.ownerId
        if (petId == null || ownerId == null) {
          player.sendMessage(Component.text("ペットIDまたはオーナーIDが見つかりません。", RED))
          return
        }

        try {
          val ownerUuid = UUID.fromString(ownerId)
          val petData = PetDataManager.getPetData(ownerUuid, petId)
          if (petData == null) {
            player.sendMessage(Component.text("ペットデータが見つかりません。", RED))
            logger.warning("Pet data not found for transfer: ownerUuid=$ownerUuid, petId=$petId")
            return
          }

          player.sendMessage(Component.text("=== ペット譲渡 ===", GOLD))
          player.sendMessage(Component.text("下のメッセージをクリックすると、チャット欄に自動入力されます。", YELLOW))
          player.sendMessage(Component.text("譲渡先のプレイヤー名を入力してEnterキーで確定してください。", YELLOW))
          player.sendMessage(Component.text("※誤操作防止のため、2回実行で確定されます", GRAY))
          player.sendMessage(Component.empty())
          player.sendMessage(
              Component.text("▶ /bigwolf transfer ${petData.petNumber} <プレイヤー名>", GREEN)
                  .clickEvent(
                      net.kyori.adventure.text.event.ClickEvent.suggestCommand(
                          "/bigwolf transfer ${petData.petNumber} "
                      )
                  )
                  .hoverEvent(Component.text("クリックでコマンドを入力欄に挿入"))
          )
        } catch (e: Exception) {
          player.sendMessage(Component.text("譲渡処理中にエラーが発生しました: ${e.message}", RED))
          logger.warning("Transfer error: ${e.message}")
        }
      }

      // フード
      Material.COOKED_BEEF -> {
        giveFoodFn(player, entity)
        guiManager.openPetInfoGui(player, entity) // 更新
      }

      else -> {}
    }
  }

  @EventHandler
  fun onBreedGuiClick(event: InventoryClickEvent) {
    val player = event.whoClicked as? Player ?: return
    if (event.view.title() != breedGuiTitle) return
    event.isCancelled = true

    val item = event.currentItem ?: return
    if (!item.hasItemMeta()) return

    val pdc = item.itemMeta.persistentDataContainer
    val petId = pdc.get(BigWolfKeys.PET_ID, PersistentDataType.STRING) ?: return

    // ペットエンティティを取得
    val selectedPet: LivingEntity? = ActivePetRegistry.findByPetId(petId)

    if (selectedPet == null) {
      player.sendMessage(Component.text("ペットが見つかりません。", RED))
      return
    }

    // 新しい交配システムでは、このGUIは使用されない
    // BreedGuiListenerで処理される
    player.closeInventory()
    player.sendMessage(Component.text("交配システムが更新されました。/bigwolf breed を使用してください。", YELLOW))
  }

  @EventHandler
  fun onInventoryClose(event: InventoryCloseEvent) {
    openedGuis.remove(event.inventory)
    openedShopGuis.remove(event.inventory)
    openedMainMenus.remove(event.inventory)
  }
}
