package me.marzipan.OyasaiPets.gui

import me.marzipan.OyasaiPets.*
import me.marzipan.OyasaiPets.domain.PetCategory
import me.marzipan.OyasaiPets.domain.PetRegistry
import me.marzipan.OyasaiPets.domain.ShopContext
import me.marzipan.OyasaiPets.domain.VariantHandler
import me.marzipan.OyasaiPets.items.PetItemFactory
import net.kyori.adventure.text.Component
import net.kyori.adventure.text.format.NamedTextColor
import net.kyori.adventure.text.format.NamedTextColor.*
import org.bukkit.Bukkit
import org.bukkit.Material
import org.bukkit.attribute.Attribute
import org.bukkit.enchantments.Enchantment
import org.bukkit.entity.LivingEntity
import org.bukkit.entity.Player
import org.bukkit.inventory.Inventory
import org.bukkit.inventory.ItemFlag
import org.bukkit.inventory.ItemStack
import java.util.UUID

/**
 * GUI管理クラス
 * ペット情報GUI、パーティクル選択GUI、ショップGUI、メインメニューを管理
 */
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

    /**
     * ヘルパー関数：アイテム生成
     */
    private fun createItem(mat: Material, name: String, color: NamedTextColor, vararg lore: Component): ItemStack =
        ItemStack(mat).apply {
            itemMeta = itemMeta.apply {
                displayName(Component.text(name, color))
                lore(lore.toList())
            }
        }

    /**
     * ペット情報GUIを開く
     */
    fun openPetInfoGui(player: Player, entity: LivingEntity): Inventory {
        val inv = Bukkit.createInventory(null, 9, petInfoTitle)
        openedPetGuis[inv] = entity
        val level = entity.foodLevel
        val spec = PetRegistry.get(entity.type)

        // スロット0: 基本情報
        val nameComp = entity.customName() ?: Component.text(entity.type.name, AQUA)
        val vName = VariantHandler.getVariantNameFromEntity(entity)
        val variantJap = me.marzipan.OyasaiPets.i18n.MobTranslator.translateVariant(vName)
        val mobJap = me.marzipan.OyasaiPets.i18n.MobTranslator.toJapanese(entity.type)
        val typeName = if (vName != null) "$mobJap ($variantJap)" else mobJap
        val hp = "${entity.health.toInt()} / ${entity.getAttribute(Attribute.MAX_HEALTH)?.value?.toInt()}"
        val ownerName = Bukkit.getOfflinePlayer(UUID.fromString(entity.ownerId ?: player.uniqueId.toString())).name ?: "Unknown"

        inv.setItem(0, createItem(Material.NAME_TAG, "基本情報", AQUA,
            Component.text("名前: ", GRAY).append(nameComp),
            Component.text("種類: $typeName", GRAY),
            Component.text("オーナー: $ownerName", GRAY),
            Component.text("体力: $hp", RED),
            Component.text("クリックで名前変更", GREEN)))

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
        recordLore.add(Component.text("おもちゃ: ${entity.statToys}, なでた: ${entity.statBrushes}, おやつ: ${entity.statTreats}", GRAY))

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
                        val originalName = Bukkit.getOfflinePlayer(UUID.fromString(petData.originalOwner)).name ?: "Unknown"
                        recordLore.add(Component.text("初代オーナー: $originalName", GRAY))
                    }
                }
            } catch (e: Exception) {
                // エラーは無視
            }
        }

        if (entity.parent1Id != null || entity.parent2Id != null) {
            recordLore.add(Component.text("=== 親情報 ===", GOLD))
            recordLore.add(Component.text("ID: ${entity.petId?.take(8)}...", DARK_GRAY))
        }

        inv.setItem(1, createItem(Material.PAPER, "能力・記録", YELLOW, *recordLore.toTypedArray()))

        // スロット2: 食事 & 成長
        inv.setItem(2, createItem(Material.COOKED_BEEF, "食事・成長", GOLD,
            Component.text("現在のレベル: $level / ${BigWolfConfig.maxFoodLevel}", WHITE),
            Component.text("次のレベルまで: ${BigWolfConfig.foodPointCost}pt", GRAY),
            Component.text("クリックでフードを与える", GREEN)))

        // スロット3: スキル設定
        val currentSkill = entity.skillType
        val unlocked = entity.skillUnlockedLevel
        val (skName, skColor, skDesc) = when (currentSkill) {
            1 -> Triple("咆哮 (Roar)", GOLD, "周囲を吹き飛ばす")
            2 -> Triple("突進 (Dash)", AQUA, "前方に高速移動")
            3 -> Triple("特殊 (Special)", LIGHT_PURPLE,
                if (spec.category == PetCategory.FLYING) "ホバリング" else if (spec.category == PetCategory.WATER) "水面走行" else "高速水泳")
            else -> Triple("なし (NONE)", GRAY, "スキル未セット")
        }
        val skillIcon = if (unlocked == 0) Material.BARRIER else Material.IRON_SWORD
        inv.setItem(3, createItem(skillIcon, "スキル設定", skColor,
            Component.text("現在: $skName", WHITE),
            Component.text("解放状況: $unlocked / 3", DARK_GRAY),
            Component.text(skDesc, YELLOW),
            if (unlocked > 0) Component.text("クリックで切り替え", GREEN) else Component.text("要:強化アイテム", RED)))

        // スロット4: エフェクト設定
        val pType = entity.particleType
        val particleName = PetItemFactory.getParticleName(pType)
        val particleColor = getParticleColor(pType)
        inv.setItem(4, createItem(Material.BLAZE_POWDER, "エフェクト設定", GOLD,
            Component.text("現在: ", GRAY).append(Component.text(particleName, particleColor)),
            Component.text("クリックで選択画面を開く", GREEN)))

        // スロット5: マナーモード
        val silent = entity.isSilentMode
        val (sIcon, sText, sColor) = if (silent)
            Triple(Material.RED_WOOL, "静寂 (ON)", RED)
        else
            Triple(Material.LIME_WOOL, "通常 (OFF)", GREEN)
        inv.setItem(5, createItem(sIcon, "マナーモード", WHITE,
            Component.text(sText, sColor),
            Component.text("クリックで切替", GRAY)))

        // スロット6: 収納
        inv.setItem(6, createItem(Material.CHEST, "収納する", LIGHT_PURPLE,
            Component.text("ペットをアイテム化して", GRAY),
            Component.text("インベントリに戻します", GRAY),
            Component.text("クリックで実行", GREEN)))

        // スロット7: 譲渡
        var transferCount = 0
        if (petId != null && ownerId != null) {
            try {
                val ownerUuid = UUID.fromString(ownerId)
                val petData = PetDataManager.getPetData(ownerUuid, petId)
                transferCount = petData?.transferHistory?.size ?: 0
            } catch (e: Exception) {
                // エラーは無視
            }
        }
        inv.setItem(7, createItem(Material.PLAYER_HEAD, "譲渡する", GOLD,
            Component.text("他のプレイヤーに譲渡", GRAY),
            Component.text("譲渡回数: $transferCount 回", DARK_GRAY),
            Component.text("クリックで宛先入力", GREEN)))

        // スロット8: 閉じる
        inv.setItem(8, createItem(Material.BARRIER, "閉じる", RED,
            Component.text("メニューを閉じる", GRAY)))

        player.openInventory(inv)
        return inv
    }

    /**
     * パーティクル選択GUIを開く
     */
    fun openParticleSelectGui(player: Player, entity: LivingEntity): Inventory {
        val inv = Bukkit.createInventory(null, 27, particleSelectTitle)
        openedPetGuis[inv] = entity

        // デフォルトパーティクル (0-4) - 常に選択可能
        val defaultParticles = listOf(
            Triple(0, "なし", Material.BARRIER),
            Triple(1, "電気", Material.LIGHTNING_ROD),
            Triple(2, "炎", Material.BLAZE_POWDER),
            Triple(3, "青炎", Material.SOUL_CAMPFIRE),
            Triple(4, "ハート", Material.RED_DYE)
        )

        defaultParticles.forEachIndexed { idx, (id, name, mat) ->
            val current = entity.particleType == id
            val lore = mutableListOf<Component>()
            if (current) lore.add(Component.text("現在使用中", GREEN))
            lore.add(Component.text("クリックで選択", GRAY))

            val itemStack = createItem(mat, name, if (current) GREEN else WHITE, *lore.toTypedArray())
            if (current) {
                itemStack.itemMeta = itemStack.itemMeta.apply {
                    addEnchant(Enchantment.UNBREAKING, 1, true)
                    addItemFlags(ItemFlag.HIDE_ENCHANTS)
                }
            }
            inv.setItem(idx, itemStack)
        }

        // アンロック可能パーティクル (5-10)
        val unlockableParticles = listOf(
            Triple(5, "星", Material.NETHER_STAR),
            Triple(6, "音符", Material.NOTE_BLOCK),
            Triple(7, "雪", Material.SNOWBALL),
            Triple(8, "桜", Material.CHERRY_LEAVES),
            Triple(9, "エンド", Material.ENDER_PEARL),
            Triple(10, "スライム", Material.SLIME_BALL)
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
                    itemStack.itemMeta = itemStack.itemMeta.apply {
                        addEnchant(Enchantment.UNBREAKING, 1, true)
                        addItemFlags(ItemFlag.HIDE_ENCHANTS)
                    }
                }
                inv.setItem(slot, itemStack)
            } else {
                inv.setItem(slot, createItem(Material.GRAY_DYE, "???", DARK_GRAY,
                    Component.text("未解放", RED),
                    Component.text("パーティクルアイテムで解放", GRAY)))
            }
        }

        // 戻るボタン
        inv.setItem(26, createItem(Material.ARROW, "戻る", YELLOW,
            Component.text("ペットメニューに戻る", GRAY)))

        player.openInventory(inv)
        return inv
    }

    /**
     * ショップGUIを開く
     */
    fun openShopGui(player: Player, ctx: ShopContext, getPlayerTokens: (Player) -> Long): Inventory {
        val inv = Bukkit.createInventory(null, 27, shopGuiTitle)
        openedShopGuis[inv] = ctx

        val spec = PetRegistry.get(ctx.type)

        // バリアント名とMOB名を日本語化
        val mobJap = me.marzipan.OyasaiPets.i18n.MobTranslator.toJapanese(ctx.type)
        val variantJap = me.marzipan.OyasaiPets.i18n.MobTranslator.translateVariant(ctx.variant)
        val typeLabel = if (ctx.variant != null) "$mobJap ($variantJap)" else mobJap

        val currentTokens = getPlayerTokens(player)
        val canAfford = currentTokens >= ctx.cost

        // 左: 商品
        val eggMat = Material.getMaterial("${ctx.type.name}_SPAWN_EGG") ?: Material.PIG_SPAWN_EGG
        inv.setItem(10, createItem(eggMat, "購入対象: $typeLabel", GOLD,
            Component.text("カテゴリ: ${spec.category}", GRAY),
            Component.text("価格: ${ctx.cost}pt", YELLOW),
            Component.text("所持: ${currentTokens}pt", if (canAfford) GREEN else RED)))

        // 中: ステータス表示
        inv.setItem(13, createItem(Material.PAPER, "ステータス", AQUA,
            Component.text("baseSpeed: ${"%.2f".format(spec.baseSpeed)}", GRAY),
            Component.text("maxSpeed : ${"%.2f".format(spec.maxSpeed)}", GRAY),
            Component.text("jumpPower: ${"%.2f".format(spec.jumpPower)}", GRAY),
            Component.text("scale    : ${"%.2f".format(spec.scaleRange.start)} .. ${"%.2f".format(spec.scaleRange.endInclusive)}", GRAY)))

        // 右: 購入 / キャンセル
        inv.setItem(16, createItem(Material.EMERALD_BLOCK, "購入する", GREEN,
            Component.text("クリックで購入確定", GRAY),
            if (canAfford) Component.text("購入可能", GREEN) else Component.text("ポイント不足", RED)))
        inv.setItem(22, createItem(Material.BARRIER, "キャンセル", RED,
            Component.text("購入しない", GRAY)))

        player.openInventory(inv)
        return inv
    }

    /**
     * メインメニューGUIを開く
     */
    fun openMainMenu(player: Player): Inventory {
        val inv = Bukkit.createInventory(null, 27, mainMenuTitle)
        openedMainMenus.add(inv)

        inv.setItem(10, createItem(Material.CHEST, "全ペット収納", GOLD,
            Component.text("自分のペットを全て収納", GRAY),
            Component.text("クリックで実行", GREEN)))

        inv.setItem(11, createItem(Material.SKELETON_SKULL, "死亡ペット一覧", RED,
            Component.text("死亡したペットを確認", GRAY),
            Component.text("クリックで表示", GREEN)))

        inv.setItem(12, createItem(Material.BOOK, "ペット履歴", YELLOW,
            Component.text("全ペットの履歴を確認", GRAY),
            Component.text("クリックで表示", GREEN)))

        inv.setItem(13, createItem(Material.HEART_OF_THE_SEA, "交配", LIGHT_PURPLE,
            Component.text("ペット同士を交配", GRAY),
            Component.text("コスト: ${BigWolfConfig.defaultShopCost}pt", GOLD),
            Component.text("クリックで選択", GREEN)))

        inv.setItem(14, createItem(Material.TOTEM_OF_UNDYING, "ペット復活", AQUA,
            Component.text("死亡ペットを復活", GRAY),
            Component.text("コスト: ${BigWolfConfig.reviveCost}pt/匹", GOLD),
            Component.text("※番号指定が必要", DARK_GRAY)))

        inv.setItem(15, createItem(Material.EGG, "エッグ再取得", GREEN,
            Component.text("収納ペットのエッグを再取得", GRAY),
            Component.text("コスト: ${BigWolfConfig.recoverCost}pt", GOLD),
            Component.text("※番号指定が必要", DARK_GRAY)))

        inv.setItem(16, createItem(Material.COMPASS, "位置確認", YELLOW,
            Component.text("ペットの最終位置を確認", GRAY),
            Component.text("※番号指定が必要", DARK_GRAY)))

        inv.setItem(22, createItem(Material.BARRIER, "閉じる", RED,
            Component.text("メニューを閉じる", GRAY)))

        player.openInventory(inv)
        return inv
    }

    /**
     * GUIをクリーンアップ
     */
    fun cleanup(inv: Inventory) {
        openedPetGuis.remove(inv)
        openedShopGuis.remove(inv)
        openedMainMenus.remove(inv)
    }

    /**
     * パーティクルIDから色を取得
     */
    private fun getParticleColor(pType: Int): NamedTextColor = when (pType) {
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

    /**
     * インベントリがペット情報GUIかどうか
     */
    fun isPetInfoGui(inv: Inventory): Boolean = openedPetGuis.containsKey(inv)

    /**
     * インベントリがショップGUIかどうか
     */
    fun isShopGui(inv: Inventory): Boolean = openedShopGuis.containsKey(inv)

    /**
     * インベントリがメインメニューかどうか
     */
    fun isMainMenu(inv: Inventory): Boolean = openedMainMenus.contains(inv)

    /**
     * インベントリがパーティクル選択GUIかどうか
     */
    fun isParticleSelectGui(inv: Inventory): Boolean {
        return openedPetGuis.containsKey(inv) &&
            inv.size == 27 // パーティクル選択GUIは27スロット
    }

    /**
     * ペット情報GUIからエンティティを取得
     */
    fun getEntityFromGui(inv: Inventory): LivingEntity? = openedPetGuis[inv]

    /**
     * ショップGUIからコンテキストを取得
     */
    fun getShopContext(inv: Inventory): ShopContext? = openedShopGuis[inv]
}
