@file:Suppress("DEPRECATION")

package me.marzipan.OyasaiPets

import java.util.UUID
import net.kyori.adventure.text.Component
import net.kyori.adventure.text.event.ClickEvent
import net.kyori.adventure.text.format.NamedTextColor
import net.kyori.adventure.text.format.NamedTextColor.*
import org.bukkit.*
import org.bukkit.attribute.Attribute
import org.bukkit.command.*
import org.bukkit.enchantments.Enchantment
import org.bukkit.entity.*
import org.bukkit.event.EventHandler
import org.bukkit.event.Listener
import org.bukkit.event.inventory.InventoryClickEvent
import org.bukkit.event.inventory.InventoryCloseEvent
import org.bukkit.inventory.*

/** GUI管理クラス ペット情報GUI、パーティクル選択GUI、ショップGUI、メインメニューを管理 */
class GuiManager {

  // GUIタイトル
  val petInfoTitle = Component.text("ペットステータス", BLACK)
  val shopGuiTitle = Component.text("購入確認", BLACK)
  val mainMenuTitle = Component.text("★ BigWolf メインメニュー", DARK_PURPLE)
  val particleSelectTitle = Component.text("パーティクル選択", GOLD)

  // 開いているGUIのトラッキング
  val openedPetGuis = mutableMapOf<Inventory, LivingEntity>()
  val openedShopGuis = mutableMapOf<Inventory, ShopContext>()
  val openedMainMenus = mutableSetOf<Inventory>()

  // ペット一覧・詳細・放棄確認GUI のタイトル
  val petListTitle = Component.text("★ マイペット一覧", DARK_PURPLE)
  val petDetailTitle = Component.text("ペット詳細", DARK_PURPLE)
  val abandonConfirmTitle = Component.text("ペットの放棄確認", DARK_RED)

  // 追跡マップ
  val openedPetListGuis = mutableMapOf<Inventory, PetListGuiContext>()
  val openedPetDetailGuis = mutableMapOf<Inventory, PetDetailGuiContext>()
  val openedAbandonConfirmGuis = mutableMapOf<Inventory, PetData>()

  /** ヘルパー関数：アイテム生成 */
  private fun createItem(
      mat: Material,
      name: String,
      color: NamedTextColor,
      vararg lore: Component,
  ): ItemStack =
      ItemStack(mat).apply {
        itemMeta =
            itemMeta.apply {
              displayName(Component.text(name, color))
              lore(lore.toList())
            }
      }

  /** ペット情報GUIを開く */
  fun openPetInfoGui(player: Player, entity: LivingEntity): Inventory {
    val inv = Bukkit.createInventory(null, 9, petInfoTitle)
    openedPetGuis[inv] = entity
    val level = entity.foodLevel
    val spec = PetRegistry.get(entity.type)

    // スロット0: 基本情報
    val nameComp = entity.customName() ?: Component.text(entity.type.name, AQUA)
    val vName = VariantHandler.getVariantNameFromEntity(entity)
    val variantJap = MobTranslator.translateVariant(vName)
    val mobJap = MobTranslator.toJapanese(entity.type)
    val typeName = if (vName != null) "$mobJap ($variantJap)" else mobJap
    val hp =
        "${entity.health.toInt()} / ${entity.getAttribute(Attribute.MAX_HEALTH)?.value?.toInt()}"
    val ownerName =
        Bukkit.getOfflinePlayer(UUID.fromString(entity.ownerId ?: player.uniqueId.toString())).name
            ?: "Unknown"
    val temperamentDisplay = TemperamentHelper.getDisplayName(entity.temperament)
    val temperamentColor = if (entity.isAtypical()) LIGHT_PURPLE else GRAY

    inv.setItem(
        0,
        createItem(
            Material.NAME_TAG,
            "基本情報",
            AQUA,
            Component.text("名前: ", GRAY).append(nameComp),
            Component.text("種類: $typeName", GRAY),
            Component.text("性質: $temperamentDisplay", temperamentColor),
            Component.text("オーナー: $ownerName", GRAY),
            Component.text("体力: $hp", RED),
            Component.text("クリックで名前変更", GREEN),
        ),
    )

    // スロット1: 記録 & 家系図
    val gen = entity.generation
    val speedPct = (entity.speedMultiplier * 100).toInt()
    val jumpPct = (entity.jumpMultiplier * 100).toInt()

    val recordLore = mutableListOf<Component>()
    recordLore.add(Component.text("=== 能力値 ===", GOLD))
    recordLore.add(Component.text("世代: 第${gen}世代", YELLOW))
    recordLore.add(Component.text("移動速度: ${speedPct}%", if (speedPct > 100) AQUA else GRAY))
    recordLore.add(Component.text("ジャンプ: ${jumpPct}%", if (jumpPct > 100) AQUA else GRAY))

    val dist = "%.1f".format(entity.statDistance)
    recordLore.add(Component.text("=== 遊んだ記録 ===", GOLD))
    recordLore.add(Component.text("距離: ${dist}m, ジャンプ: ${entity.statJumps}", GRAY))
    recordLore.add(
        Component.text(
            "おもちゃ: ${entity.statToys}, なでた: ${entity.statBrushes}, おやつ: ${entity.statTreats}",
            GRAY,
        )
    )

    // 譲渡履歴を表示
    val petId = entity.petId
    val ownerId = entity.ownerId
    if (petId != null && ownerId != null) {
      try {
        val ownerUuid = UUID.fromString(ownerId)
        val petData = PetDataManager.getPetData(ownerUuid, petId)
        if (petData != null && petData.transferHistory.isNotEmpty()) {
          recordLore.add(Component.text("=== 譲渡履歴 ===", GOLD))
          recordLore.add(Component.text("譲渡回数: ${petData.transferHistory.size}", YELLOW))
          if (petData.originalOwner != null) {
            val originalName =
                Bukkit.getOfflinePlayer(UUID.fromString(petData.originalOwner)).name ?: "Unknown"
            recordLore.add(Component.text("初代オーナー: $originalName", GRAY))
          }
        }
      } catch (_: Exception) {
        // エラーは無視
      }
    }

    if (entity.parent1Id != null || entity.parent2Id != null) {
      recordLore.add(Component.text("=== 親情報 ===", GOLD))
      recordLore.add(Component.text("ID: ${entity.petId?.take(8)}...", DARK_GRAY))
    }

    inv.setItem(1, createItem(Material.PAPER, "能力・記録", YELLOW, *recordLore.toTypedArray()))

    // スロット2: 食事 & 成長
    inv.setItem(
        2,
        createItem(
            Material.COOKED_BEEF,
            "食事・成長",
            GOLD,
            Component.text("現在のレベル: $level / ${BigWolfConfig.maxFoodLevel}", WHITE),
            Component.text("次のレベルまで: ${BigWolfConfig.foodPointCost}pt", GRAY),
            Component.text("クリックでフードを与える", GREEN),
        ),
    )

    // スロット3: スキル設定
    val currentSkill = entity.skillType
    val unlocked = entity.skillUnlockedLevel
    val (skName, skColor, skDesc) =
        when (currentSkill) {
          1 -> Triple("咆哮 (Roar)", GOLD, "周囲を吹き飛ばす")
          2 -> Triple("突進 (Dash)", AQUA, "前方に高速移動")
          3 ->
              Triple(
                  "特殊 (Special)",
                  LIGHT_PURPLE,
                  if (spec.category == PetCategory.FLYING) "ホバリング"
                  else if (spec.category == PetCategory.WATER) "水面走行" else "高速水泳",
              )
          else -> Triple("なし (NONE)", GRAY, "スキル未セット")
        }
    val skillIcon = if (unlocked == 0) Material.BARRIER else Material.IRON_SWORD
    inv.setItem(
        3,
        createItem(
            skillIcon,
            "スキル設定",
            skColor,
            Component.text("現在: $skName", WHITE),
            Component.text("解放状況: $unlocked / 3", DARK_GRAY),
            Component.text(skDesc, YELLOW),
            if (unlocked > 0) Component.text("クリックで切り替え", GREEN)
            else Component.text("要:強化アイテム", RED),
        ),
    )

    // スロット4: エフェクト設定
    val pType = entity.particleType
    val particleName = PetItemFactory.getParticleName(pType)
    val particleColor = getParticleColor(pType)
    inv.setItem(
        4,
        createItem(
            Material.BLAZE_POWDER,
            "エフェクト設定",
            GOLD,
            Component.text("現在: ", GRAY).append(Component.text(particleName, particleColor)),
            Component.text("クリックで選択画面を開く", GREEN),
        ),
    )

    // スロット5: 収納
    inv.setItem(
        5,
        createItem(
            Material.CHEST,
            "収納する",
            LIGHT_PURPLE,
            Component.text("ペットをアイテム化して", GRAY),
            Component.text("インベントリに戻します", GRAY),
            Component.text("クリックで実行", GREEN),
        ),
    )

    // スロット6: 譲渡
    var transferCount = 0
    if (petId != null && ownerId != null) {
      try {
        val ownerUuid = UUID.fromString(ownerId)
        val petData = PetDataManager.getPetData(ownerUuid, petId)
        transferCount = petData?.transferHistory?.size ?: 0
      } catch (_: Exception) {
        // エラーは無視
      }
    }
    inv.setItem(
        6,
        createItem(
            Material.PLAYER_HEAD,
            "譲渡する",
            GOLD,
            Component.text("他のプレイヤーに譲渡", GRAY),
            Component.text("譲渡回数: $transferCount 回", DARK_GRAY),
            Component.text("クリックで宛先入力", GREEN),
        ),
    )

    // スロット7: 閉じる
    inv.setItem(7, createItem(Material.BARRIER, "閉じる", RED, Component.text("メニューを閉じる", GRAY)))

    player.openInventory(inv)
    return inv
  }

  /** パーティクル選択GUIを開く */
  fun openParticleSelectGui(player: Player, entity: LivingEntity): Inventory {
    val inv = Bukkit.createInventory(null, 27, particleSelectTitle)
    openedPetGuis[inv] = entity

    // デフォルトパーティクル (0-4) - 常に選択可能
    val defaultParticles =
        listOf(
            Triple(0, "なし", Material.BARRIER),
            Triple(1, "電気", Material.LIGHTNING_ROD),
            Triple(2, "炎", Material.BLAZE_POWDER),
            Triple(3, "青炎", Material.SOUL_CAMPFIRE),
            Triple(4, "ハート", Material.RED_DYE),
        )

    defaultParticles.forEachIndexed { idx, (id, name, mat) ->
      val current = entity.particleType == id
      val lore = mutableListOf<Component>()
      if (current) lore.add(Component.text("現在使用中", GREEN))
      lore.add(Component.text("クリックで選択", GRAY))

      val itemStack = createItem(mat, name, if (current) GREEN else WHITE, *lore.toTypedArray())
      if (current) {
        itemStack.itemMeta =
            itemStack.itemMeta.apply {
              addEnchant(Enchantment.UNBREAKING, 1, true)
              addItemFlags(ItemFlag.HIDE_ENCHANTS)
            }
      }
      inv.setItem(idx, itemStack)
    }

    // アンロック可能パーティクル (5-10)
    val unlockableParticles =
        listOf(
            Triple(5, "星", Material.NETHER_STAR),
            Triple(6, "音符", Material.NOTE_BLOCK),
            Triple(7, "雪", Material.SNOWBALL),
            Triple(8, "桜", Material.CHERRY_LEAVES),
            Triple(9, "エンド", Material.ENDER_PEARL),
            Triple(10, "スライム", Material.SLIME_BALL),
        )

    unlockableParticles.forEachIndexed { idx, (id, name, mat) ->
      val unlocked = entity.isParticleUnlocked(id)
      val current = entity.particleType == id
      val slot = idx + 9

      if (unlocked) {
        val lore = mutableListOf<Component>()
        if (current) lore.add(Component.text("現在使用中", GREEN))
        lore.add(Component.text("クリックで選択", GRAY))

        val itemStack = createItem(mat, name, if (current) GREEN else AQUA, *lore.toTypedArray())
        if (current) {
          itemStack.itemMeta =
              itemStack.itemMeta.apply {
                addEnchant(Enchantment.UNBREAKING, 1, true)
                addItemFlags(ItemFlag.HIDE_ENCHANTS)
              }
        }
        inv.setItem(slot, itemStack)
      } else {
        inv.setItem(
            slot,
            createItem(
                Material.GRAY_DYE,
                "???",
                DARK_GRAY,
                Component.text("未解放", RED),
                Component.text("パーティクルアイテムで解放", GRAY),
            ),
        )
      }
    }

    // 戻るボタン
    inv.setItem(26, createItem(Material.ARROW, "戻る", YELLOW, Component.text("ペットメニューに戻る", GRAY)))

    player.openInventory(inv)
    return inv
  }

  /** ショップGUIを開く */
  fun openShopGui(player: Player, ctx: ShopContext, getPlayerTokens: (Player) -> Long): Inventory {
    val inv = Bukkit.createInventory(null, 18, shopGuiTitle)
    openedShopGuis[inv] = ctx

    val spec = PetRegistry.get(ctx.type)

    // バリアント名とMOB名を日本語化
    val mobJap = MobTranslator.toJapanese(ctx.type)
    val variantJap = MobTranslator.translateVariant(ctx.variant)
    val typeLabel = if (ctx.variant != null) "$mobJap ($variantJap)" else mobJap

    val currentTokens = getPlayerTokens(player)
    val canAfford = currentTokens >= ctx.cost

    // 左 (スロット2): 商品情報
    val eggMat = Material.getMaterial("${ctx.type.name}_SPAWN_EGG") ?: Material.PIG_SPAWN_EGG
    inv.setItem(
        2,
        createItem(
            eggMat,
            "購入対象: $typeLabel",
            GOLD,
            Component.text("カテゴリ: ${spec.category}", GRAY),
            Component.text("価格: ${ctx.cost}pt", YELLOW),
            Component.text("所持: ${currentTokens}pt", if (canAfford) GREEN else RED),
        ),
    )

    // 中 (スロット4): ステータス表示
    inv.setItem(
        4,
        createItem(
            Material.PAPER,
            "ステータス",
            AQUA,
            Component.text("baseSpeed: ${"%.2f".format(spec.baseSpeed)}", GRAY),
            Component.text("maxSpeed : ${"%.2f".format(spec.maxSpeed)}", GRAY),
            Component.text("jumpPower: ${"%.2f".format(spec.jumpPower)}", GRAY),
            Component.text(
                "scale    : ${"%.2f".format(spec.scaleRange.start)} .. ${"%.2f".format(spec.scaleRange.endInclusive)}",
                GRAY,
            ),
        ),
    )

    // 右 (スロット6): 購入ボタン
    inv.setItem(
        6,
        createItem(
            Material.EMERALD_BLOCK,
            "購入する",
            GREEN,
            Component.text("クリックで購入確定", GRAY),
            if (canAfford) Component.text("購入可能", GREEN) else Component.text("ポイント不足", RED),
        ),
    )

    // 下段左 (スロット10): ショップに戻る
    inv.setItem(
        10,
        createItem(Material.ARROW, "← ショップへ戻る", WHITE, Component.text("ペット一覧に戻る", GRAY)),
    )

    // 下段右 (スロット16): キャンセル
    inv.setItem(16, createItem(Material.BARRIER, "閉じる", RED, Component.text("GUIを閉じる", GRAY)))

    player.openInventory(inv)
    return inv
  }

  /** メインメニューGUIを開く */
  fun openMainMenu(player: Player): Inventory {
    val inv = Bukkit.createInventory(null, 27, mainMenuTitle)
    openedMainMenus.add(inv)

    inv.setItem(
        10,
        createItem(
            Material.WRITTEN_BOOK,
            "ペット一覧",
            AQUA,
            Component.text("所有ペットを一覧表示", GRAY),
            Component.text("復活・収納・放棄もここから", GRAY),
            Component.text("クリックで開く", GREEN),
        ),
    )

    inv.setItem(
        12,
        createItem(
            Material.CHEST,
            "全ペット収納",
            GOLD,
            Component.text("自分のペットを全て収納", GRAY),
            Component.text("クリックで実行", GREEN),
        ),
    )

    inv.setItem(
        14,
        createItem(
            Material.HEART_OF_THE_SEA,
            "交配",
            LIGHT_PURPLE,
            Component.text("ペット同士を交配させる", GRAY),
            Component.text("コスト: ${BigWolfConfig.breedCost}pt", GOLD),
            Component.text("クリックで選択", GREEN),
        ),
    )

    inv.setItem(
        16,
        createItem(
            Material.EMERALD,
            "ショップ",
            GREEN,
            Component.text("新しいペットを購入", GRAY),
            Component.text("クリックで開く", GREEN),
        ),
    )

    inv.setItem(22, createItem(Material.BARRIER, "閉じる", RED, Component.text("メニューを閉じる", GRAY)))

    player.openInventory(inv)
    return inv
  }

  /** ペット一覧GUIを開く */
  fun openPetListGui(
      player: Player,
      ownerUuid: UUID,
      filter: PetListFilter = PetListFilter.ALL,
      page: Int = 1,
  ): Inventory {
    val allPets = PetDataManager.getAllPets(ownerUuid).sortedBy { it.petNumber }
    val filtered =
        when (filter) {
          PetListFilter.ALL -> allPets
          PetListFilter.ALIVE -> allPets.filter { it.status == PetStatus.ALIVE }
          PetListFilter.STORED -> allPets.filter { it.status == PetStatus.STORED }
          PetListFilter.DEAD -> allPets.filter { it.status == PetStatus.DEAD }
        }

    val petsPerPage = 36
    val totalPages = maxOf(1, (filtered.size + petsPerPage - 1) / petsPerPage)
    val currentPage = page.coerceIn(1, totalPages)

    val inv = Bukkit.createInventory(null, 54, petListTitle)
    openedPetListGuis[inv] = PetListGuiContext(ownerUuid, filter, currentPage)

    // フィルタータブ (スロット 0-3) — 固有アイコンで視認性向上
    PetListFilter.entries.forEachIndexed { idx, f ->
      val isActive = f == filter
      val tabMat =
          when (f) {
            PetListFilter.ALL -> if (isActive) Material.WRITTEN_BOOK else Material.BOOK
            PetListFilter.ALIVE -> if (isActive) Material.LIME_WOOL else Material.WHITE_WOOL
            PetListFilter.STORED -> Material.CHEST
            PetListFilter.DEAD -> if (isActive) Material.SKELETON_SKULL else Material.BONE
          }
      val count =
          when (f) {
            PetListFilter.ALL -> allPets.size
            PetListFilter.ALIVE -> allPets.count { it.status == PetStatus.ALIVE }
            PetListFilter.STORED -> allPets.count { it.status == PetStatus.STORED }
            PetListFilter.DEAD -> allPets.count { it.status == PetStatus.DEAD }
          }
      val lore = buildList {
        add(Component.text("${count}匹", f.statusColor))
        if (isActive) add(Component.text("▶ 現在表示中", GREEN))
        else add(Component.text("クリックで切り替え", GRAY))
      }
      inv.setItem(
          idx,
          createItem(
              tabMat,
              "${f.label} (${count})",
              if (isActive) f.statusColor else GRAY,
              *lore.toTypedArray(),
          ),
      )
    }
    // 装飾ガラス (スロット 4-7)
    val glassPane = createItem(Material.GRAY_STAINED_GLASS_PANE, " ", GRAY)
    for (i in 4..7) inv.setItem(i, glassPane)

    // メインメニューへ戻るボタン（右上端）
    inv.setItem(
        8,
        createItem(Material.BARRIER, "← メインメニューへ", WHITE, Component.text("メインメニューに戻る", GRAY)),
    )

    // ペット一覧 (スロット 9-44)
    val startIdx = (currentPage - 1) * petsPerPage
    val endIdx = minOf(startIdx + petsPerPage, filtered.size)
    for ((i, pet) in filtered.subList(startIdx, endIdx).withIndex()) {
      val slot = i + 9
      val eggMat = Material.getMaterial("${pet.type}_SPAWN_EGG") ?: Material.PIG_SPAWN_EGG
      val typeName =
          runCatching { EntityType.valueOf(pet.type) }
              .getOrNull()
              ?.let { MobTranslator.toJapanese(it) } ?: pet.type
      val variantStr = pet.variant?.let { " (${MobTranslator.translateVariant(it)})" } ?: ""
      val plainName = pet.customName?.let { PLAIN_TEXT.serialize(LEGACY_AMP.deserialize(it)) }
      val statusStr =
          when (pet.status) {
            PetStatus.ALIVE -> "生存"
            PetStatus.STORED -> "収納中"
            PetStatus.DEAD -> "死亡"
          }
      val lore =
          mutableListOf(
              Component.text("状態: ", GRAY).append(Component.text(statusStr, pet.status.guiColor())),
              Component.text("レベル: ${pet.foodLevel} / ${BigWolfConfig.maxFoodLevel}", GRAY),
          )
      if (plainName != null) lore.add(0, Component.text("名前: 「$plainName」", WHITE))
      lore.add(Component.text("クリックで詳細を表示", DARK_AQUA))

      val item =
          createItem(
              eggMat,
              "#${pet.petNumber} $typeName$variantStr",
              pet.status.guiColor(),
              *lore.toTypedArray(),
          )
      if (pet.status == PetStatus.DEAD) {
        item.itemMeta =
            item.itemMeta.apply {
              addEnchant(Enchantment.UNBREAKING, 1, true)
              addItemFlags(ItemFlag.HIDE_ENCHANTS)
            }
      }
      inv.setItem(slot, item)
    }

    // ナビゲーション行 (スロット 45-53)
    for (i in 45..53) inv.setItem(i, glassPane)
    if (currentPage > 1) {
      inv.setItem(
          45,
          createItem(
              Material.ARROW,
              "← 前のページ",
              GREEN,
              Component.text("ページ ${currentPage - 1} / $totalPages", GRAY),
          ),
      )
    }
    inv.setItem(
        49,
        createItem(
            Material.BOOK,
            "ページ $currentPage / $totalPages",
            WHITE,
            Component.text("${filtered.size}匹表示中", GRAY),
        ),
    )
    if (currentPage < totalPages) {
      inv.setItem(
          53,
          createItem(
              Material.ARROW,
              "次のページ →",
              GREEN,
              Component.text("ページ ${currentPage + 1} / $totalPages", GRAY),
          ),
      )
    }

    player.openInventory(inv)
    return inv
  }

  /** ペット詳細GUIを開く */
  fun openPetDetailGui(
      player: Player,
      ownerUuid: UUID,
      pet: PetData,
      fromFilter: PetListFilter = PetListFilter.ALL,
      fromPage: Int = 1,
  ): Inventory {
    val inv = Bukkit.createInventory(null, 54, petDetailTitle)
    openedPetDetailGuis[inv] = PetDetailGuiContext(ownerUuid, pet, fromFilter, fromPage)

    val glassPane = createItem(Material.GRAY_STAINED_GLASS_PANE, " ", GRAY)
    for (i in 0 until 54) inv.setItem(i, glassPane)

    val typeName =
        runCatching { EntityType.valueOf(pet.type) }
            .getOrNull()
            ?.let { MobTranslator.toJapanese(it) } ?: pet.type
    val variantStr = pet.variant?.let { " (${MobTranslator.translateVariant(it)})" } ?: ""
    val plainName = pet.customName?.let { PLAIN_TEXT.serialize(LEGACY_AMP.deserialize(it)) }
    val statusColor = pet.status.guiColor()
    val statusStr =
        when (pet.status) {
          PetStatus.ALIVE -> "生存"
          PetStatus.STORED -> "収納中"
          PetStatus.DEAD -> "死亡"
        }

    // スロット4: ペットアイコン
    val eggMat = Material.getMaterial("${pet.type}_SPAWN_EGG") ?: Material.PIG_SPAWN_EGG
    val nameDisplay = if (plainName != null) "「$plainName」" else "$typeName$variantStr"
    inv.setItem(
        4,
        createItem(
            eggMat,
            "#${pet.petNumber} $nameDisplay",
            statusColor,
            Component.text("種族: $typeName$variantStr", GRAY),
            Component.text("状態: $statusStr", statusColor),
            Component.text("購入日: ${pet.purchasedAt.take(10)}", DARK_GRAY),
        ),
    )

    // スロット10: 基本情報
    val basicLore = mutableListOf<Component>()
    if (plainName != null) basicLore.add(Component.text("名前: 「$plainName」", WHITE))
    basicLore.add(Component.text("種族: $typeName$variantStr", GRAY))
    basicLore.add(Component.text("状態: $statusStr", statusColor))
    basicLore.add(Component.text("購入日: ${pet.purchasedAt.take(10)}", DARK_GRAY))
    inv.setItem(10, createItem(Material.NAME_TAG, "基本情報", AQUA, *basicLore.toTypedArray()))

    // スロット12: レベル・スキル
    inv.setItem(
        12,
        createItem(
            Material.IRON_SWORD,
            "レベル・スキル",
            GOLD,
            Component.text("フードLv: ${pet.foodLevel} / ${BigWolfConfig.maxFoodLevel}", GREEN),
            Component.text("スキル: Lv.${pet.skillType}", AQUA),
            Component.text("解放済み: Lv.${pet.skillUnlockedLevel}", DARK_AQUA),
        ),
    )

    // スロット14: 記録
    inv.setItem(
        14,
        createItem(
            Material.PAPER,
            "遊んだ記録",
            YELLOW,
            Component.text("移動距離: ${"%.1f".format(pet.stats.distance)} m", GRAY),
            Component.text("ジャンプ: ${pet.stats.jumps} 回", GRAY),
            Component.text("おもちゃ: ${pet.stats.toys} 回", GRAY),
            Component.text("なでた: ${pet.stats.brushes} 回", GRAY),
            Component.text("おやつ: ${pet.stats.treats} 回", GRAY),
        ),
    )

    // スロット16: 位置情報
    val deathData = pet.deathData
    val lastLoc = pet.lastLocation
    if (pet.status == PetStatus.DEAD && deathData != null) {
      val loc = deathData.location
      inv.setItem(
          16,
          createItem(
              Material.SKELETON_SKULL,
              "死亡情報",
              RED,
              Component.text("死亡日時: ${deathData.deathTime.take(16)}", GRAY),
              Component.text("場所: ${loc.world}", GRAY),
              Component.text("  X:${loc.x.toInt()} Y:${loc.y.toInt()} Z:${loc.z.toInt()}", GRAY),
          ),
      )
    } else if (lastLoc != null) {
      inv.setItem(
          16,
          createItem(
              Material.COMPASS,
              "最終位置",
              YELLOW,
              Component.text("ワールド: ${lastLoc.world}", GRAY),
              Component.text(
                  "X:${lastLoc.x.toInt()} Y:${lastLoc.y.toInt()} Z:${lastLoc.z.toInt()}",
                  GRAY,
              ),
          ),
      )
    }

    // スロット20: 交配情報（ある場合）
    val breedInfo = pet.breedInfo
    if (breedInfo != null || pet.breedCount > 0) {
      val breedLore = mutableListOf<Component>()
      if (breedInfo != null) {
        breedLore.add(Component.text("世代: 第${breedInfo.generation}世代", AQUA))
        val allPets = PetDataManager.getAllPets(ownerUuid)
        val p1 =
            allPets.find { it.petId == breedInfo.parent1Id }?.let { "#${it.petNumber}" }
                ?: breedInfo.parent1Id.take(8)
        val p2 =
            allPets.find { it.petId == breedInfo.parent2Id }?.let { "#${it.petNumber}" }
                ?: breedInfo.parent2Id.take(8)
        breedLore.add(Component.text("親: $p1 × $p2", GRAY))
      }
      if (pet.breedCount > 0) breedLore.add(Component.text("交配回数: ${pet.breedCount} 回", GRAY))
      inv.setItem(
          20,
          createItem(Material.HEART_OF_THE_SEA, "交配情報", LIGHT_PURPLE, *breedLore.toTypedArray()),
      )
    }

    // スロット22: 譲渡履歴（ある場合）
    if (pet.transferHistory.isNotEmpty()) {
      val transferLore = mutableListOf<Component>()
      transferLore.add(Component.text("譲渡回数: ${pet.transferHistory.size} 回", YELLOW))
      for (record in pet.transferHistory.takeLast(3)) {
        val fromName =
            runCatching { Bukkit.getOfflinePlayer(UUID.fromString(record.fromOwner)).name }
                .getOrNull() ?: record.fromOwner.take(8)
        val toName =
            runCatching { Bukkit.getOfflinePlayer(UUID.fromString(record.toOwner)).name }
                .getOrNull() ?: record.toOwner.take(8)
        transferLore.add(Component.text("${record.timestamp.take(10)}: $fromName → $toName", GRAY))
      }
      inv.setItem(22, createItem(Material.PLAYER_HEAD, "譲渡履歴", GOLD, *transferLore.toTypedArray()))
    }

    // アクションボタン (最終行 スロット45-53)
    // スロット45: 戻る
    inv.setItem(
        45,
        createItem(Material.ARROW, "← 一覧に戻る", GREEN, Component.text("ペット一覧に戻ります", GRAY)),
    )

    // スロット47: 主要アクション（状態別）
    when (pet.status) {
      PetStatus.DEAD ->
          inv.setItem(
              47,
              createItem(
                  Material.TOTEM_OF_UNDYING,
                  "復活する",
                  GREEN,
                  Component.text("コスト: ${BigWolfConfig.reviveCost}pt", YELLOW),
                  Component.text("クリックで復活実行", GREEN),
              ),
          )
      PetStatus.STORED ->
          inv.setItem(
              47,
              createItem(
                  Material.EGG,
                  "エッグ再取得",
                  YELLOW,
                  Component.text("コスト: ${BigWolfConfig.recoverCost}pt", YELLOW),
                  Component.text("クリックで再取得", GREEN),
              ),
          )
      PetStatus.ALIVE ->
          inv.setItem(
              47,
              createItem(
                  Material.CHEST,
                  "収納する",
                  LIGHT_PURPLE,
                  Component.text("ペットをアイテム化", GRAY),
                  Component.text("クリックで収納", GREEN),
              ),
          )
    }

    // スロット49: 名前変更（死亡以外）
    if (pet.status != PetStatus.DEAD) {
      inv.setItem(
          49,
          createItem(
              Material.NAME_TAG,
              "名前変更",
              AQUA,
              Component.text("/bigwolf rename ${pet.petNumber} <名前>", GRAY),
              Component.text("クリックでコマンド入力", GREEN),
          ),
      )
    }

    // スロット51: 放棄（死亡以外）
    if (pet.status != PetStatus.DEAD) {
      inv.setItem(
          51,
          createItem(
              Material.TNT,
              "放棄する",
              RED,
              Component.text("このペットを永久に放棄", DARK_GRAY),
              Component.text("クリックで確認画面へ", RED),
          ),
      )
    }

    // スロット53: 閉じる
    inv.setItem(53, createItem(Material.BARRIER, "閉じる", RED, Component.text("GUIを閉じる", GRAY)))

    player.openInventory(inv)
    return inv
  }

  /** 放棄確認GUIを開く */
  fun openAbandonConfirmGui(player: Player, pet: PetData): Inventory {
    val inv = Bukkit.createInventory(null, 27, abandonConfirmTitle)
    openedAbandonConfirmGuis[inv] = pet

    val glassPane = createItem(Material.GRAY_STAINED_GLASS_PANE, " ", GRAY)
    for (i in 0 until 27) inv.setItem(i, glassPane)

    val typeName =
        runCatching { EntityType.valueOf(pet.type) }
            .getOrNull()
            ?.let { MobTranslator.toJapanese(it) } ?: pet.type
    val variantStr = pet.variant?.let { " (${MobTranslator.translateVariant(it)})" } ?: ""
    val plainName = pet.customName?.let { PLAIN_TEXT.serialize(LEGACY_AMP.deserialize(it)) }
    val nameDisplay = plainName?.let { "「$it」" } ?: "$typeName$variantStr"

    // スロット4: ペット情報
    val eggMat = Material.getMaterial("${pet.type}_SPAWN_EGG") ?: Material.PIG_SPAWN_EGG
    inv.setItem(
        4,
        createItem(
            eggMat,
            "#${pet.petNumber} $nameDisplay",
            GOLD,
            Component.text("$typeName$variantStr", GRAY),
            Component.text("レベル: ${pet.foodLevel}", GRAY),
            Component.text("これを放棄しようとしています", RED),
        ),
    )

    // スロット11: キャンセル
    inv.setItem(
        11,
        createItem(
            Material.GREEN_WOOL,
            "キャンセル",
            GREEN,
            Component.text("放棄しない", GRAY),
            Component.text("クリックで戻る", GREEN),
        ),
    )

    // スロット15: 確認（放棄実行）
    inv.setItem(
        15,
        createItem(
            Material.RED_WOOL,
            "放棄する",
            RED,
            Component.text("$nameDisplay を放棄します", RED),
            Component.text("この操作は取り消せません", DARK_RED),
            Component.text("クリックで確定", RED),
        ),
    )

    player.openInventory(inv)
    return inv
  }

  /** パーティクルIDから色を取得 */
  private fun getParticleColor(pType: Int): NamedTextColor =
      when (pType) {
        0 -> GRAY
        1 -> YELLOW
        2 -> RED
        3 -> AQUA
        4 -> LIGHT_PURPLE
        5 -> WHITE
        6 -> GREEN
        7 -> AQUA
        8 -> LIGHT_PURPLE
        9 -> DARK_PURPLE
        10 -> GREEN
        else -> WHITE
      }
}

// ===== ペット一覧GUIリスナー =====
class PetListGuiListener(private val guiManager: GuiManager) : Listener {

  @EventHandler
  fun onInventoryClick(event: InventoryClickEvent) {
    val player = event.whoClicked as? Player ?: return
    val inv = event.view.topInventory
    val ctx = guiManager.openedPetListGuis[inv] ?: return
    event.isCancelled = true

    val slot = event.rawSlot
    if (slot < 0 || slot >= inv.size) return

    // フィルタータブ (スロット 0-3)
    val newFilter =
        when (slot) {
          0 -> PetListFilter.ALL
          1 -> PetListFilter.ALIVE
          2 -> PetListFilter.STORED
          3 -> PetListFilter.DEAD
          else -> null
        }
    if (newFilter != null) {
      guiManager.openedPetListGuis.remove(inv)
      guiManager.openPetListGui(player, ctx.ownerUuid, newFilter, 1)
      return
    }

    // 前ページ (スロット45)
    if (slot == 45 && ctx.page > 1) {
      guiManager.openedPetListGuis.remove(inv)
      guiManager.openPetListGui(player, ctx.ownerUuid, ctx.filter, ctx.page - 1)
      return
    }

    // メインメニューへ戻る (スロット8 = 右上端)
    if (slot == 8) {
      guiManager.openedPetListGuis.remove(inv)
      player.closeInventory()
      guiManager.openMainMenu(player)
      return
    }

    // 次ページ (スロット53)
    if (slot == 53) {
      val allPets = PetDataManager.getAllPets(ctx.ownerUuid).sortedBy { it.petNumber }
      val filtered =
          when (ctx.filter) {
            PetListFilter.ALL -> allPets
            PetListFilter.ALIVE -> allPets.filter { it.status == PetStatus.ALIVE }
            PetListFilter.STORED -> allPets.filter { it.status == PetStatus.STORED }
            PetListFilter.DEAD -> allPets.filter { it.status == PetStatus.DEAD }
          }
      val totalPages = maxOf(1, (filtered.size + 35) / 36)
      if (ctx.page < totalPages) {
        guiManager.openedPetListGuis.remove(inv)
        guiManager.openPetListGui(player, ctx.ownerUuid, ctx.filter, ctx.page + 1)
      }
      return
    }

    // ペットスロット (スロット9-44)
    if (slot in 9..44) {
      val allPets = PetDataManager.getAllPets(ctx.ownerUuid).sortedBy { it.petNumber }
      val filtered =
          when (ctx.filter) {
            PetListFilter.ALL -> allPets
            PetListFilter.ALIVE -> allPets.filter { it.status == PetStatus.ALIVE }
            PetListFilter.STORED -> allPets.filter { it.status == PetStatus.STORED }
            PetListFilter.DEAD -> allPets.filter { it.status == PetStatus.DEAD }
          }
      val petIdx = (ctx.page - 1) * 36 + (slot - 9)
      if (petIdx < filtered.size) {
        guiManager.openedPetListGuis.remove(inv)
        guiManager.openPetDetailGui(player, ctx.ownerUuid, filtered[petIdx], ctx.filter, ctx.page)
      }
    }
  }

  @EventHandler
  fun onInventoryClose(event: InventoryCloseEvent) {
    guiManager.openedPetListGuis.remove(event.view.topInventory)
  }
}

// ===== ペット詳細GUIリスナー =====
class PetDetailGuiListener(
    private val guiManager: GuiManager,
    private val reviveFn: (Player, Array<out String>) -> Unit,
    private val recoverFn: (Player, Array<out String>) -> Unit,
    private val storePetFn: (Player, LivingEntity) -> Unit,
    private val executePetAbandonFn: (Player, PetData) -> Unit,
) : Listener {

  @EventHandler
  fun onInventoryClick(event: InventoryClickEvent) {
    val player = event.whoClicked as? Player ?: return
    val inv = event.view.topInventory
    val ctx = guiManager.openedPetDetailGuis[inv] ?: return
    event.isCancelled = true

    val slot = event.rawSlot
    if (slot < 0 || slot >= inv.size) return

    when (slot) {
      45 -> {
        // ← 一覧に戻る
        guiManager.openedPetDetailGuis.remove(inv)
        player.closeInventory()
        guiManager.openPetListGui(player, ctx.ownerUuid, ctx.fromFilter, ctx.fromPage)
      }
      47 -> {
        // 主要アクション（状態別）
        guiManager.openedPetDetailGuis.remove(inv)
        player.closeInventory()
        when (ctx.pet.status) {
          PetStatus.DEAD -> reviveFn(player, arrayOf("revive", ctx.pet.petNumber.toString()))
          PetStatus.STORED -> recoverFn(player, arrayOf("recover", ctx.pet.petNumber.toString()))
          PetStatus.ALIVE -> {
            val entity = ActivePetRegistry.findByPetId(ctx.pet.petId)
            if (entity != null) {
              storePetFn(player, entity)
            } else {
              player.sendMessage(Component.text("ペットが見つかりません。", RED))
            }
          }
        }
      }
      49 -> {
        // 名前変更
        if (ctx.pet.status != PetStatus.DEAD) {
          player.closeInventory()
          player.sendMessage(
              Component.text("▶ /bigwolf rename ${ctx.pet.petNumber} <新しい名前>", GREEN)
                  .hoverEvent(Component.text("クリックでコマンドを入力欄に挿入"))
                  .clickEvent(ClickEvent.suggestCommand("/bigwolf rename ${ctx.pet.petNumber} "))
          )
        }
      }
      51 -> {
        // 放棄する → 放棄確認GUI
        if (ctx.pet.status != PetStatus.DEAD) {
          guiManager.openedPetDetailGuis.remove(inv)
          guiManager.openAbandonConfirmGui(player, ctx.pet)
        }
      }
      53 -> {
        guiManager.openedPetDetailGuis.remove(inv)
        player.closeInventory()
      }
    }
  }

  @EventHandler
  fun onInventoryClose(event: InventoryCloseEvent) {
    guiManager.openedPetDetailGuis.remove(event.view.topInventory)
  }
}

// ===== 放棄確認GUIリスナー =====
class AbandonConfirmGuiListener(
    private val guiManager: GuiManager,
    private val executePetAbandonFn: (Player, PetData) -> Unit,
) : Listener {

  @EventHandler
  fun onInventoryClick(event: InventoryClickEvent) {
    val player = event.whoClicked as? Player ?: return
    val inv = event.view.topInventory
    val pet = guiManager.openedAbandonConfirmGuis[inv] ?: return
    event.isCancelled = true

    val slot = event.rawSlot
    if (slot < 0 || slot >= inv.size) return

    when (slot) {
      11 -> {
        // キャンセル
        guiManager.openedAbandonConfirmGuis.remove(inv)
        player.closeInventory()
      }
      15 -> {
        // 放棄確定
        guiManager.openedAbandonConfirmGuis.remove(inv)
        player.closeInventory()
        executePetAbandonFn(player, pet)
      }
    }
  }

  @EventHandler
  fun onInventoryClose(event: InventoryCloseEvent) {
    guiManager.openedAbandonConfirmGuis.remove(event.view.topInventory)
  }
}
