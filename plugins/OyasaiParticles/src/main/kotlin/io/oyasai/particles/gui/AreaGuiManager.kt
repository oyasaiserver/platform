package io.oyasai.particles.gui

import io.oyasai.particles.item.ParticleItemFactory
import io.oyasai.particles.model.AmbientSoundPreset
import io.oyasai.particles.model.ParticleArea
import io.oyasai.particles.model.ParticlePreset
import io.oyasai.particles.model.PseudoWeather
import io.oyasai.particles.model.TimePreset
import io.oyasai.particles.model.resolveMaterialSafely
import io.oyasai.particles.selection.AreaLimitValidator
import io.oyasai.particles.selection.SelectionManager
import io.oyasai.particles.selection.ValidationResult
import io.oyasai.particles.service.AreaService
import net.kyori.adventure.text.Component
import net.kyori.adventure.text.format.NamedTextColor
import net.kyori.adventure.text.format.TextDecoration
import org.bukkit.Bukkit
import org.bukkit.Material
import org.bukkit.entity.Player
import org.bukkit.inventory.Inventory
import org.bukkit.inventory.ItemFlag
import org.bukkit.inventory.ItemStack

class AreaGuiManager(
    private val areaService: AreaService,
    private val itemFactory: ParticleItemFactory,
    private val selectionManager: SelectionManager,
    private val limitValidator: AreaLimitValidator,
) {
  companion object {
    const val LIST_SIZE = 54
    const val LIST_PAGE_ITEMS = 45
    const val EDITOR_SIZE = 36

    const val SLOT_PREV_PAGE = 45
    const val SLOT_TOGGLE_VISUAL = 49
    const val SLOT_NEXT_PAGE = 53

    const val SLOT_PARTICLE = 10
    const val SLOT_WEATHER = 11
    const val SLOT_TIME = 12
    const val SLOT_SOUND = 13
    const val SLOT_DENSITY = 14
    const val SLOT_UPDATE_SHAPE = 16
    const val SLOT_BACK = 29
    const val SLOT_RECLAIM = 31
    const val SLOT_DELETE = 33

    const val OPTION_SIZE = 36
    const val SLOT_OPTION_BACK = 31
  }

  fun openList(player: Player, showAll: Boolean = false, page: Int = 0) {
    val canViewAll = showAll && player.hasPermission("oyasaiparticles.admin")
    val areas =
        if (canViewAll) {
          areaService.allAreas()
        } else {
          areaService.areasOwnedBy(player.uniqueId)
        }
    val totalPages = ((areas.size - 1).coerceAtLeast(0) / LIST_PAGE_ITEMS) + 1
    val safePage = page.coerceIn(0, totalPages - 1)

    val holder = AreaListHolder(showAll = canViewAll, page = safePage)
    val title =
        if (canViewAll) {
          Component.text("パーティクルエリア一覧 (全体 ${safePage + 1}/$totalPages)", NamedTextColor.DARK_PURPLE)
        } else {
          Component.text("自分のパーティクルエリア (${safePage + 1}/$totalPages)", NamedTextColor.DARK_AQUA)
        }
    val inv = Bukkit.createInventory(holder, LIST_SIZE, title)
    holder.backingInventory = inv

    val start = safePage * LIST_PAGE_ITEMS
    val pageItems = areas.drop(start).take(LIST_PAGE_ITEMS)
    pageItems.forEachIndexed { index, area ->
      holder.slotAreaIds[index] = area.id
      inv.setItem(index, buildAreaSummaryItem(area))
    }

    val filler =
        createButton(Material.GRAY_STAINED_GLASS_PANE, " ", emptyList(), NamedTextColor.GRAY)
    for (slot in 45 until LIST_SIZE) {
      inv.setItem(slot, filler)
    }
    if (safePage > 0) {
      inv.setItem(
          SLOT_PREV_PAGE,
          createButton(Material.ARROW, "前のページ", listOf("クリックで前ページへ"), NamedTextColor.YELLOW),
      )
    }
    val visualEnabled = areaService.isVisualEnabled(player.uniqueId)
    inv.setItem(
        SLOT_TOGGLE_VISUAL,
        createButton(
            if (visualEnabled) Material.LIME_DYE else Material.GRAY_DYE,
            "個人表示: ${if (visualEnabled) "ON" else "OFF"}",
            listOf("クリックで自分へのパーティクル表示を切替"),
            if (visualEnabled) NamedTextColor.GREEN else NamedTextColor.RED,
        ),
    )
    if (safePage + 1 < totalPages) {
      inv.setItem(
          SLOT_NEXT_PAGE,
          createButton(Material.ARROW, "次のページ", listOf("クリックで次ページへ"), NamedTextColor.YELLOW),
      )
    }

    player.openInventory(inv)
  }

  fun openEditor(player: Player, area: ParticleArea, returnShowAll: Boolean = false) {
    val holder = AreaEditorHolder(areaId = area.id, returnShowAll = returnShowAll)
    val inv =
        Bukkit.createInventory(
            holder,
            EDITOR_SIZE,
            Component.text("設定: ${area.name}", NamedTextColor.DARK_PURPLE),
        )
    holder.backingInventory = inv
    renderEditorInventory(inv, holder, area)
    player.openInventory(inv)
  }

  fun handleListClick(player: Player, holder: AreaListHolder, slot: Int) {
    when (slot) {
      SLOT_PREV_PAGE -> if (holder.page > 0) openList(player, holder.showAll, holder.page - 1)
      SLOT_NEXT_PAGE -> openList(player, holder.showAll, holder.page + 1)
      SLOT_TOGGLE_VISUAL -> {
        val enabled = areaService.toggleVisual(player.uniqueId)
        player.sendMessage(
            Component.text(
                "パーティクル表示を ${if (enabled) "ON" else "OFF"} にしました。",
                if (enabled) NamedTextColor.GREEN else NamedTextColor.YELLOW,
            )
        )
        openList(player, holder.showAll, holder.page)
      }
      else -> {
        val areaId = holder.slotAreaIds[slot] ?: return
        val area = areaService.findById(areaId)
        if (area == null) {
          player.sendMessage(Component.text("そのエリアは既に削除されています。", NamedTextColor.RED))
          openList(player, holder.showAll, holder.page)
          return
        }
        if (!canEdit(player, area)) {
          player.sendMessage(Component.text("このエリアを編集する権限がありません。", NamedTextColor.RED))
          return
        }
        openEditor(player, area, holder.showAll)
      }
    }
  }

  fun handleEditorClick(
      player: Player,
      holder: AreaEditorHolder,
      inv: Inventory,
      slot: Int,
      isRightClick: Boolean,
  ) {
    val area = areaService.findById(holder.areaId)
    if (area == null) {
      player.closeInventory()
      player.sendMessage(Component.text("対象のエリアは既に存在しません。", NamedTextColor.RED))
      return
    }
    if (!canEdit(player, area)) {
      player.closeInventory()
      player.sendMessage(Component.text("このエリアを編集する権限がありません。", NamedTextColor.RED))
      return
    }

    when (slot) {
      SLOT_PARTICLE -> {
        if (isRightClick) {
          resetConfirmFlags(holder)
          val updated =
              areaService.updateArea(area.id, player.uniqueId, player.name) {
                it.copy(effect = it.effect.copy(particle = ParticlePreset.NONE))
              } ?: return
          renderEditorInventory(inv, holder, updated)
        } else {
          openOptionSelector(player, area, EffectSelectionCategory.PARTICLE, holder.returnShowAll)
        }
      }
      SLOT_WEATHER -> {
        if (isRightClick) {
          resetConfirmFlags(holder)
          val updated =
              areaService.updateArea(area.id, player.uniqueId, player.name) {
                it.copy(effect = it.effect.copy(weather = PseudoWeather.NONE))
              } ?: return
          renderEditorInventory(inv, holder, updated)
        } else {
          openOptionSelector(player, area, EffectSelectionCategory.WEATHER, holder.returnShowAll)
        }
      }
      SLOT_TIME -> {
        if (isRightClick) {
          resetConfirmFlags(holder)
          val updated =
              areaService.updateArea(area.id, player.uniqueId, player.name) {
                it.copy(effect = it.effect.copy(time = TimePreset.DEFAULT))
              } ?: return
          renderEditorInventory(inv, holder, updated)
        } else {
          openOptionSelector(player, area, EffectSelectionCategory.TIME, holder.returnShowAll)
        }
      }
      SLOT_SOUND -> {
        if (isRightClick) {
          resetConfirmFlags(holder)
          val updated =
              areaService.updateArea(area.id, player.uniqueId, player.name) {
                it.copy(effect = it.effect.copy(sound = AmbientSoundPreset.NONE))
              } ?: return
          renderEditorInventory(inv, holder, updated)
        } else {
          openOptionSelector(player, area, EffectSelectionCategory.SOUND, holder.returnShowAll)
        }
      }
      SLOT_DENSITY -> {
        resetConfirmFlags(holder)
        val nextDensity =
            if (isRightClick) {
              ((area.effect.density - 2).mod(5)) + 1
            } else {
              (area.effect.density % 5) + 1
            }
        val updated =
            areaService.updateArea(area.id, player.uniqueId, player.name) {
              it.copy(effect = it.effect.copy(density = nextDensity))
            } ?: return
        renderEditorInventory(inv, holder, updated)
      }
      SLOT_UPDATE_SHAPE -> {
        resetConfirmFlags(holder)
        val newShape = selectionManager.buildShape(player.uniqueId, area.worldName)
        if (newShape == null) {
          player.sendMessage(
              Component.text(
                  "ワールド「${area.worldName}」でワンドの範囲選択をしてから押してください。",
                  NamedTextColor.YELLOW,
              )
          )
          return
        }
        val world = Bukkit.getWorld(area.worldName)
        if (world == null) {
          player.sendMessage(Component.text("ワールド「${area.worldName}」が見つかりません。", NamedTextColor.RED))
          return
        }
        when (val check = limitValidator.validateShapeAndProtection(player, world, newShape)) {
          is ValidationResult.Error -> {
            player.sendMessage(Component.text(check.message, NamedTextColor.RED))
            return
          }
          ValidationResult.Ok -> Unit
        }
        val updated =
            areaService.updateArea(area.id, player.uniqueId, player.name) {
              it.copy(shape = newShape)
            } ?: return
        player.sendMessage(Component.text("エリアの範囲を更新しました。", NamedTextColor.GREEN))
        renderEditorInventory(inv, holder, updated)
      }
      SLOT_BACK -> openList(player, holder.returnShowAll, 0)
      SLOT_RECLAIM -> {
        holder.confirmDelete = false
        if (!holder.confirmReclaim) {
          holder.confirmReclaim = true
          renderEditorInventory(inv, holder, area)
          return
        }
        if (player.inventory.firstEmpty() == -1) {
          player.sendMessage(
              Component.text("インベントリに空きがありません。1枠以上空けてから回収してください。", NamedTextColor.RED)
          )
          holder.confirmReclaim = false
          renderEditorInventory(inv, holder, area)
          return
        }
        val reclaimed = areaService.reclaimArea(area.id, player.uniqueId, player.name)
        player.closeInventory()
        if (reclaimed != null) {
          val item = itemFactory.createEffectItem(reclaimed.effect, 1)
          player.inventory.addItem(item)
          player.sendMessage(
              Component.text(
                  "エリア「${reclaimed.name}」を撤去し、パーティクルアイテムとして回収しました！",
                  NamedTextColor.GREEN,
              )
          )
        }
      }
      SLOT_DELETE -> {
        holder.confirmReclaim = false
        if (!holder.confirmDelete) {
          holder.confirmDelete = true
          renderEditorInventory(inv, holder, area)
          return
        }
        val deleted = areaService.deleteArea(area.id, player.uniqueId, player.name)
        player.closeInventory()
        if (deleted != null) {
          player.sendMessage(Component.text("エリア「${deleted.name}」を削除しました。", NamedTextColor.YELLOW))
        }
      }
      else -> {
        if (holder.confirmReclaim || holder.confirmDelete) {
          resetConfirmFlags(holder)
          renderEditorInventory(inv, holder, area)
        }
      }
    }
  }

  private fun canEdit(player: Player, area: ParticleArea): Boolean =
      area.ownerUuid == player.uniqueId || player.hasPermission("oyasaiparticles.admin")

  private fun resetConfirmFlags(holder: AreaEditorHolder) {
    holder.confirmReclaim = false
    holder.confirmDelete = false
  }

  private fun renderEditorInventory(
      inv: Inventory,
      holder: AreaEditorHolder,
      area: ParticleArea,
  ) {
    val bg = createButton(Material.BLACK_STAINED_GLASS_PANE, " ", emptyList(), NamedTextColor.GRAY)
    for (slot in 0 until EDITOR_SIZE) {
      inv.setItem(slot, bg)
    }

    inv.setItem(4, buildAreaSummaryItem(area))

    inv.setItem(
        SLOT_PARTICLE,
        createButton(
            area.effect.particle.resolveIconMaterial(),
            "パーティクル: ${area.effect.particle.displayName}",
            listOf("左クリック: 一覧から選ぶ", "右クリック: なしに戻す"),
            NamedTextColor.LIGHT_PURPLE,
        ),
    )
    inv.setItem(
        SLOT_WEATHER,
        createButton(
            area.effect.weather.resolveIconMaterial(),
            "疑似天候: ${area.effect.weather.displayName}",
            listOf("左クリック: 一覧から選ぶ", "右クリック: なしに戻す", "※砂漠でも雨や雪が降ります"),
            NamedTextColor.AQUA,
        ),
    )
    inv.setItem(
        SLOT_TIME,
        createButton(
            area.effect.time.resolveIconMaterial(),
            "個人時間: ${area.effect.time.displayName}",
            listOf("左クリック: 一覧から選ぶ", "右クリック: ワールド準拠に戻す"),
            NamedTextColor.YELLOW,
        ),
    )
    inv.setItem(
        SLOT_SOUND,
        createButton(
            area.effect.sound.resolveIconMaterial(),
            "環境音: ${area.effect.sound.displayName}",
            listOf("左クリック: 一覧から選ぶ", "右クリック: なしに戻す"),
            NamedTextColor.GREEN,
        ),
    )
    inv.setItem(
        SLOT_DENSITY,
        createButton(
            Material.GLOWSTONE_DUST,
            "描画密度: ${area.effect.density} / 5",
            listOf("左クリック: +1", "右クリック: -1"),
            NamedTextColor.GOLD,
        ),
    )
    inv.setItem(
        SLOT_UPDATE_SHAPE,
        createButton(
            Material.BLAZE_ROD,
            "選択範囲でサイズ/位置を更新",
            listOf("現在のワンド選択範囲をこのエリアに適用", "位置: ${area.shape.describe()}"),
            NamedTextColor.AQUA,
        ),
    )

    inv.setItem(
        SLOT_BACK,
        createButton(Material.ARROW, "一覧へ戻る", listOf("エリア一覧メニューへ戻ります"), NamedTextColor.WHITE),
    )

    inv.setItem(
        SLOT_RECLAIM,
        if (holder.confirmReclaim) {
          createButton(
              Material.EMERALD_BLOCK,
              "【確認】もう一度クリックで回収！",
              listOf("エリアを撤去し、現在の設定で", "パーティクルアイテムを1個返却します"),
              NamedTextColor.GREEN,
          )
        } else {
          createButton(
              Material.CHEST,
              "撤去してアイテムとして回収",
              listOf("空間から撤去してアイテムに戻します", "※アイテムはインベントリへ入ります"),
              NamedTextColor.GOLD,
          )
        },
    )

    inv.setItem(
        SLOT_DELETE,
        if (holder.confirmDelete) {
          createButton(
              Material.REDSTONE_BLOCK,
              "【確認】もう一度クリックで完全削除！",
              listOf("エリアを削除します (アイテムは戻りません)", "※誤操作時は /opart rollback で復元可"),
              NamedTextColor.RED,
          )
        } else {
          createButton(
              Material.BARRIER,
              "エリアを削除",
              listOf("アイテムに戻さずエリアを削除します"),
              NamedTextColor.RED,
          )
        },
    )
  }

  fun openOptionSelector(
      player: Player,
      area: ParticleArea,
      category: EffectSelectionCategory,
      returnShowAll: Boolean = false,
  ) {
    val holder =
        AreaOptionSelectHolder(
            areaId = area.id,
            category = category,
            returnShowAll = returnShowAll,
        )
    val inv =
        Bukkit.createInventory(
            holder,
            OPTION_SIZE,
            Component.text("${category.title}: ${area.name}", NamedTextColor.DARK_AQUA),
        )
    holder.backingInventory = inv

    val bg = createButton(Material.BLACK_STAINED_GLASS_PANE, " ", emptyList(), NamedTextColor.GRAY)
    for (slot in 27 until OPTION_SIZE) {
      inv.setItem(slot, bg)
    }
    inv.setItem(
        SLOT_OPTION_BACK,
        createButton(Material.ARROW, "設定画面へ戻る", listOf("変更せずに戻ります"), NamedTextColor.WHITE),
    )

    when (category) {
      EffectSelectionCategory.PARTICLE -> {
        ParticlePreset.entries.forEachIndexed { idx, preset ->
          if (idx >= 27) return@forEachIndexed
          val selected = area.effect.particle == preset
          holder.slotOptionKeys[idx] = preset.name
          inv.setItem(
              idx,
              createSelectableButton(
                  preset.resolveIconMaterial(),
                  preset.displayName,
                  selected,
                  NamedTextColor.LIGHT_PURPLE,
              ),
          )
        }
      }
      EffectSelectionCategory.WEATHER -> {
        PseudoWeather.entries.forEachIndexed { idx, preset ->
          if (idx >= 27) return@forEachIndexed
          val selected = area.effect.weather == preset
          holder.slotOptionKeys[idx] = preset.name
          inv.setItem(
              idx,
              createSelectableButton(
                  preset.resolveIconMaterial(),
                  preset.displayName,
                  selected,
                  NamedTextColor.AQUA,
              ),
          )
        }
      }
      EffectSelectionCategory.TIME -> {
        TimePreset.entries.forEachIndexed { idx, preset ->
          if (idx >= 27) return@forEachIndexed
          val selected = area.effect.time == preset
          holder.slotOptionKeys[idx] = preset.name
          inv.setItem(
              idx,
              createSelectableButton(
                  preset.resolveIconMaterial(),
                  preset.displayName,
                  selected,
                  NamedTextColor.YELLOW,
              ),
          )
        }
      }
      EffectSelectionCategory.SOUND -> {
        AmbientSoundPreset.entries.forEachIndexed { idx, preset ->
          if (idx >= 27) return@forEachIndexed
          val selected = area.effect.sound == preset
          holder.slotOptionKeys[idx] = preset.name
          inv.setItem(
              idx,
              createSelectableButton(
                  preset.resolveIconMaterial(),
                  preset.displayName,
                  selected,
                  NamedTextColor.GREEN,
              ),
          )
        }
      }
    }

    player.openInventory(inv)
  }

  fun handleOptionSelectClick(player: Player, holder: AreaOptionSelectHolder, slot: Int) {
    val area = areaService.findById(holder.areaId)
    if (area == null) {
      player.closeInventory()
      player.sendMessage(Component.text("対象のエリアは既に存在しません。", NamedTextColor.RED))
      return
    }
    if (!canEdit(player, area)) {
      player.closeInventory()
      player.sendMessage(Component.text("このエリアを編集する権限がありません。", NamedTextColor.RED))
      return
    }

    if (slot == SLOT_OPTION_BACK) {
      openEditor(player, area, holder.returnShowAll)
      return
    }

    val key = holder.slotOptionKeys[slot] ?: return
    val updated =
        areaService.updateArea(area.id, player.uniqueId, player.name) { current ->
          when (holder.category) {
            EffectSelectionCategory.PARTICLE ->
                current.copy(effect = current.effect.copy(particle = ParticlePreset.fromKey(key)))
            EffectSelectionCategory.WEATHER ->
                current.copy(effect = current.effect.copy(weather = PseudoWeather.fromKey(key)))
            EffectSelectionCategory.TIME ->
                current.copy(effect = current.effect.copy(time = TimePreset.fromKey(key)))
            EffectSelectionCategory.SOUND ->
                current.copy(effect = current.effect.copy(sound = AmbientSoundPreset.fromKey(key)))
          }
        } ?: return

    openEditor(player, updated, holder.returnShowAll)
  }

  private fun createSelectableButton(
      material: Material,
      label: String,
      selected: Boolean,
      color: NamedTextColor,
  ): ItemStack {
    val title = if (selected) "▶ $label (選択中)" else label
    val lore = if (selected) listOf("現在選択されている項目です") else listOf("クリックでこの項目を選択")
    val item = createButton(material, title, lore, if (selected) NamedTextColor.GREEN else color)
    if (selected) {
      val meta = item.itemMeta
      if (meta != null) {
        meta.setEnchantmentGlintOverride(true)
        item.itemMeta = meta
      }
    }
    return item
  }

  private fun buildAreaSummaryItem(area: ParticleArea): ItemStack {
    val material = resolveMaterialSafely(area.effect.itemMaterialKey, "PINK_DYE")
    return createButton(
        material,
        area.name,
        listOf(
            "ID: ${area.id} / 所有者: ${area.ownerName}",
            "ワールド: ${area.worldName}",
            "範囲: ${area.shape.describe()}",
            "パーティクル: ${area.effect.particle.displayName}",
            "疑似天候: ${area.effect.weather.displayName} / 時間: ${area.effect.time.displayName}",
            "環境音: ${area.effect.sound.displayName} (密度 ${area.effect.density})",
            "クリックで設定・回収メニューを開く",
        ),
        NamedTextColor.LIGHT_PURPLE,
    )
  }

  private fun createButton(
      material: Material,
      title: String,
      loreLines: List<String>,
      color: NamedTextColor,
  ): ItemStack {
    val item = ItemStack(material, 1)
    val meta = item.itemMeta ?: return item
    meta.displayName(Component.text(title, color).decoration(TextDecoration.ITALIC, false))
    if (loreLines.isNotEmpty()) {
      meta.lore(
          loreLines.map {
            Component.text(it, NamedTextColor.GRAY).decoration(TextDecoration.ITALIC, false)
          }
      )
    }
    meta.addItemFlags(ItemFlag.HIDE_ATTRIBUTES)
    item.itemMeta = meta
    return item
  }
}
