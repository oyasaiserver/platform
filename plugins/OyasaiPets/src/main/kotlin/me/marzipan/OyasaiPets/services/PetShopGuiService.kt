@file:Suppress("DEPRECATION")

package me.marzipan.OyasaiPets

import net.kyori.adventure.text.Component
import net.kyori.adventure.text.format.NamedTextColor.*
import org.bukkit.*
import org.bukkit.command.*
import org.bukkit.entity.*
import org.bukkit.inventory.*

/** ペット購入GUIを管理するサービス */
class PetShopGuiService(
    private val openShopGui: (Player, ShopContext, (Player) -> Long) -> Unit,
    private val getPlayerTokens: (Player) -> Long,
) {

  /** メイン購入GUI（全ペット種類一覧）を開く */
  fun openMainShopGui(player: Player) {
    val officialPets = PetRegistry.officialPets.sortedBy { it.name }

    // ペット数に応じて必要な行数を計算（+1行: コントロール行）
    val petRows = (officialPets.size + 8) / 9
    val invSize = minOf(54, (petRows + 1) * 9)
    val controlRowStart = invSize - 9

    val inv = Bukkit.createInventory(null, invSize, Component.text("★ ペットショップ", DARK_PURPLE))

    val maxPetSlots = invSize - 9
    officialPets.forEachIndexed { index, type ->
      if (index >= maxPetSlots) return@forEachIndexed

      val eggMat = Material.getMaterial("${type.name}_SPAWN_EGG") ?: Material.PIG_SPAWN_EGG
      val japName = MobTranslator.toJapanese(type)

      // バリアントがあるか確認
      val variants = VariantHandler.getVariantNames(type)

      val item =
          ItemStack(eggMat).apply {
            itemMeta =
                itemMeta?.apply {
                  displayName(Component.text(japName, YELLOW))

                  val loreList = mutableListOf<Component>()
                  loreList.add(Component.text("価格: ${BigWolfConfig.defaultShopCost}pt", GOLD))

                  if (variants.isNotEmpty()) {
                    loreList.add(Component.text("バリアント: ${variants.size}種類", AQUA))
                    loreList.add(Component.text("クリックでバリアント選択", GREEN))
                  } else {
                    loreList.add(Component.text("クリックで購入", GREEN))
                  }

                  lore(loreList)
                }
          }

      inv.setItem(index, item)
    }

    // コントロール行: 戻るボタン + アイテムショップ + 情報
    val backItem =
        ItemStack(Material.ARROW).apply {
          itemMeta =
              itemMeta?.apply {
                displayName(Component.text("← メインメニューへ", WHITE))
                lore(listOf(Component.text("メインメニューに戻る", GRAY)))
              }
        }
    inv.setItem(controlRowStart, backItem)

    val itemShopButton =
        ItemStack(Material.CHEST).apply {
          itemMeta =
              itemMeta?.apply {
                displayName(Component.text("★ アイテムショップ", GOLD))
                lore(
                    listOf(
                        Component.text("ケア用品・スキルブック", GRAY),
                        Component.text("パーティクル・おもちゃを購入", GRAY),
                        Component.text("クリックで開く", GREEN),
                    )
                )
              }
        }
    inv.setItem(controlRowStart + 2, itemShopButton)

    val infoItem =
        ItemStack(Material.EMERALD).apply {
          itemMeta =
              itemMeta?.apply {
                displayName(Component.text("あなたの所持ポイント", GOLD))
                lore(
                    listOf(
                        Component.text("${getPlayerTokens(player)}pt", GREEN),
                        Component.text("", GRAY),
                        Component.text("ペットをクリックして購入！", YELLOW),
                    )
                )
              }
        }
    inv.setItem(controlRowStart + 4, infoItem)

    player.openInventory(inv)
  }

  /** バリアント選択GUI（特定ペットのバリアント一覧）を開く */
  fun openVariantSelectionGui(player: Player, type: EntityType) {
    val variants = VariantHandler.getVariantNames(type)

    if (variants.isEmpty()) {
      // バリアントがない場合は直接購入画面へ
      openShopGui(player, ShopContext(type, null, BigWolfConfig.defaultShopCost), getPlayerTokens)
      return
    }

    val size = ((variants.size + 8) / 9) * 9 // 9の倍数に切り上げ
    val invSize = minOf(54, maxOf(27, size + 9)) // 最小27、最大54
    val japName = MobTranslator.toJapanese(type)
    val inv =
        Bukkit.createInventory(null, invSize, Component.text("$japName のバリアント選択", DARK_PURPLE))

    val eggMat = Material.getMaterial("${type.name}_SPAWN_EGG") ?: Material.PIG_SPAWN_EGG

    variants.forEachIndexed { index: Int, variant: String ->
      if (index >= 45) return@forEachIndexed

      val variantJap = MobTranslator.translateVariant(variant)
      val item =
          ItemStack(eggMat).apply {
            itemMeta =
                itemMeta?.apply {
                  displayName(Component.text("$japName ($variantJap)", YELLOW))
                  lore(
                      listOf(
                          Component.text("バリアント: $variant", GRAY),
                          Component.text("価格: ${BigWolfConfig.defaultShopCost}pt", GOLD),
                          Component.text("", GRAY),
                          Component.text("クリックで購入", GREEN),
                      )
                  )
                }
          }

      inv.setItem(index, item)
    }

    // デフォルト（バリアントなし）オプション
    val defaultItem =
        ItemStack(eggMat).apply {
          itemMeta =
              itemMeta?.apply {
                displayName(Component.text("$japName (デフォルト)", YELLOW))
                lore(
                    listOf(
                        Component.text("価格: ${BigWolfConfig.defaultShopCost}pt", GOLD),
                        Component.text("", GRAY),
                        Component.text("クリックで購入", GREEN),
                    )
                )
              }
        }
    inv.setItem(invSize - 3, defaultItem)

    // 戻るボタン（左端）
    val backItem =
        ItemStack(Material.ARROW).apply {
          itemMeta = itemMeta?.apply { displayName(Component.text("戻る", RED)) }
        }
    inv.setItem(invSize - 9, backItem)

    // 所持ポイント表示（中央下）
    val pointsItem =
        ItemStack(Material.EMERALD).apply {
          itemMeta =
              itemMeta?.apply {
                displayName(Component.text("所持ポイント: ${getPlayerTokens(player)}pt", GOLD))
              }
        }
    inv.setItem(invSize - 5, pointsItem)

    player.openInventory(inv)
  }

  /** 直接購入確認画面を開く（コマンドから直接呼び出し用） */
  fun openPurchaseConfirmation(player: Player, type: EntityType, variant: String?) {
    openShopGui(player, ShopContext(type, variant, BigWolfConfig.defaultShopCost), getPlayerTokens)
  }

  // ===== アイテムショップ =====

  val itemShopTitle = Component.text("★ アイテムショップ", DARK_PURPLE)
  val careShopTitle = Component.text("ケア用品ショップ", DARK_GREEN)
  val skillShopTitle = Component.text("スキルブックショップ", DARK_AQUA)
  val particleShopTitle = Component.text("パーティクルショップ", LIGHT_PURPLE)
  val toyShopTitle = Component.text("おもちゃショップ", GOLD)

  /** アイテムショップ カテゴリ選択GUI */
  fun openItemShopGui(player: Player) {
    val inv = Bukkit.createInventory(null, 27, itemShopTitle)

    // スロット10: ケア用品
    inv.setItem(
        10,
        ItemStack(Material.GOLDEN_APPLE).apply {
          itemMeta =
              itemMeta?.apply {
                displayName(Component.text("ケア用品", GREEN))
                lore(
                    listOf(
                        Component.text("ペットフード / ブラシ", GRAY),
                        Component.text("おやつ / ヒールポーション", GRAY),
                        Component.text("クリックで開く", GREEN),
                    )
                )
              }
        },
    )

    // スロット12: スキルブック
    inv.setItem(
        12,
        ItemStack(Material.ENCHANTED_BOOK).apply {
          itemMeta =
              itemMeta?.apply {
                displayName(Component.text("スキルブック", AQUA))
                lore(
                    listOf(
                        Component.text("咆哮の書 / 突進の書 / 極意の書", GRAY),
                        Component.text("クリックで開く", GREEN),
                    )
                )
              }
        },
    )

    // スロット14: パーティクル
    inv.setItem(
        14,
        ItemStack(Material.NETHER_STAR).apply {
          itemMeta =
              itemMeta?.apply {
                displayName(Component.text("パーティクル結晶", LIGHT_PURPLE))
                lore(
                    listOf(Component.text("特殊エフェクトをアンロック", GRAY), Component.text("クリックで開く", GREEN))
                )
              }
        },
    )

    // スロット16: おもちゃ
    inv.setItem(
        16,
        ItemStack(Material.STICK).apply {
          itemMeta =
              itemMeta?.apply {
                displayName(Component.text("おもちゃ", YELLOW))
                lore(listOf(Component.text("各種ペット用おもちゃ", GRAY), Component.text("クリックで開く", GREEN)))
              }
        },
    )

    // スロット18: ペットショップへ戻る
    inv.setItem(
        18,
        ItemStack(Material.ARROW).apply {
          itemMeta =
              itemMeta?.apply {
                displayName(Component.text("← ペットショップへ戻る", WHITE))
                lore(listOf(Component.text("クリックで戻る", GRAY)))
              }
        },
    )

    // スロット22: 所持ポイント
    inv.setItem(
        22,
        ItemStack(Material.EMERALD).apply {
          itemMeta =
              itemMeta?.apply {
                displayName(Component.text("所持ポイント: ${getPlayerTokens(player)}pt", GOLD))
              }
        },
    )

    player.openInventory(inv)
  }

  /** ケア用品ショップ (18-slot) */
  fun openCareShopGui(player: Player) {
    val inv = Bukkit.createInventory(null, 18, careShopTitle)

    data class CareItem(val slot: Int, val item: ItemStack, val cost: Int)
    listOf(
            CareItem(1, PetItemFactory.createPetFoodItem(), BigWolfConfig.itemShopPetFoodCost),
            CareItem(3, PetItemFactory.createPetBrushItem(), BigWolfConfig.itemShopPetBrushCost),
            CareItem(5, PetItemFactory.createPetTreatItem(), BigWolfConfig.itemShopPetTreatCost),
            CareItem(7, PetItemFactory.createPetHealItem(), BigWolfConfig.itemShopHealPotionCost),
        )
        .forEach { ci ->
          val meta = ci.item.itemMeta ?: return@forEach
          val currentLore = meta.lore() ?: mutableListOf()
          meta.lore(
              currentLore +
                  listOf(Component.text("価格: ${ci.cost}pt", GOLD), Component.text("クリックで購入", GREEN))
          )
          ci.item.itemMeta = meta
          inv.setItem(ci.slot, ci.item)
        }

    inv.setItem(
        9,
        ItemStack(Material.ARROW).apply {
          itemMeta = itemMeta?.apply { displayName(Component.text("← アイテムショップへ戻る", WHITE)) }
        },
    )
    inv.setItem(
        13,
        ItemStack(Material.EMERALD).apply {
          itemMeta =
              itemMeta?.apply {
                displayName(Component.text("所持ポイント: ${getPlayerTokens(player)}pt", GOLD))
              }
        },
    )

    player.openInventory(inv)
  }

  /** スキルブックショップ (18-slot) */
  fun openSkillShopGui(player: Player) {
    val inv = Bukkit.createInventory(null, 18, skillShopTitle)

    listOf(1, 2, 3).forEach { level ->
      val item = PetItemFactory.createSkillUnlockItem(level)
      val cost = BigWolfConfig.getSkillBookShopCost(level)
      val meta = item.itemMeta ?: return@forEach
      val currentLore = meta.lore() ?: mutableListOf()
      meta.lore(
          currentLore +
              listOf(Component.text("価格: ${cost}pt", GOLD), Component.text("クリックで購入", GREEN))
      )
      item.itemMeta = meta
      val slot = (level - 1) * 2 + 2 // 2, 4, 6
      inv.setItem(slot, item)
    }

    inv.setItem(
        9,
        ItemStack(Material.ARROW).apply {
          itemMeta = itemMeta?.apply { displayName(Component.text("← アイテムショップへ戻る", WHITE)) }
        },
    )
    inv.setItem(
        13,
        ItemStack(Material.EMERALD).apply {
          itemMeta =
              itemMeta?.apply {
                displayName(Component.text("所持ポイント: ${getPlayerTokens(player)}pt", GOLD))
              }
        },
    )

    player.openInventory(inv)
  }

  /** パーティクルショップ (18-slot, ID 5-10) */
  fun openParticleShopGui(player: Player) {
    val inv = Bukkit.createInventory(null, 18, particleShopTitle)
    val cost = BigWolfConfig.itemShopParticleCost

    (5..10).forEachIndexed { idx, particleId ->
      val item = PetItemFactory.createParticleUnlockItem(particleId)
      val meta = item.itemMeta ?: return@forEachIndexed
      val currentLore = meta.lore() ?: mutableListOf()
      meta.lore(
          currentLore +
              listOf(Component.text("価格: ${cost}pt", GOLD), Component.text("クリックで購入", GREEN))
      )
      item.itemMeta = meta
      inv.setItem(idx + 1, item)
    }

    inv.setItem(
        9,
        ItemStack(Material.ARROW).apply {
          itemMeta = itemMeta?.apply { displayName(Component.text("← アイテムショップへ戻る", WHITE)) }
        },
    )
    inv.setItem(
        13,
        ItemStack(Material.EMERALD).apply {
          itemMeta =
              itemMeta?.apply {
                displayName(Component.text("所持ポイント: ${getPlayerTokens(player)}pt", GOLD))
              }
        },
    )

    player.openInventory(inv)
  }

  /** おもちゃショップ (動的サイズ) */
  fun openToyShopGui(player: Player) {
    val toyItems = PetRegistry.getAllToyItems()
    val cost = BigWolfConfig.itemShopToyCost

    val rows = maxOf(2, (toyItems.size + 8) / 9 + 1)
    val invSize = minOf(54, rows * 9)
    val controlRowStart = invSize - 9

    val inv = Bukkit.createInventory(null, invSize, toyShopTitle)

    toyItems.forEachIndexed { idx, item ->
      if (idx >= controlRowStart) return@forEachIndexed
      val meta = item.itemMeta ?: return@forEachIndexed
      val currentLore = meta.lore() ?: mutableListOf()
      meta.lore(
          currentLore +
              listOf(Component.text("価格: ${cost}pt", GOLD), Component.text("クリックで購入", GREEN))
      )
      item.itemMeta = meta
      inv.setItem(idx, item)
    }

    inv.setItem(
        controlRowStart,
        ItemStack(Material.ARROW).apply {
          itemMeta = itemMeta?.apply { displayName(Component.text("← アイテムショップへ戻る", WHITE)) }
        },
    )
    inv.setItem(
        controlRowStart + 4,
        ItemStack(Material.EMERALD).apply {
          itemMeta =
              itemMeta?.apply {
                displayName(Component.text("所持ポイント: ${getPlayerTokens(player)}pt", GOLD))
              }
        },
    )

    player.openInventory(inv)
  }
}
