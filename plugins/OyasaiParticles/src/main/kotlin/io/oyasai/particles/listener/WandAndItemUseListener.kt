package io.oyasai.particles.listener

import io.oyasai.particles.item.ParticleItemFactory
import io.oyasai.particles.model.ShapeMode
import io.oyasai.particles.selection.AreaLimitValidator
import io.oyasai.particles.selection.SelectionManager
import io.oyasai.particles.selection.ValidationResult
import io.oyasai.particles.service.AreaService
import net.kyori.adventure.text.Component
import net.kyori.adventure.text.format.NamedTextColor
import org.bukkit.GameMode
import org.bukkit.entity.Player
import org.bukkit.event.EventHandler
import org.bukkit.event.EventPriority
import org.bukkit.event.Listener
import org.bukkit.event.block.Action
import org.bukkit.event.player.PlayerInteractEvent
import org.bukkit.inventory.EquipmentSlot

class WandAndItemUseListener(
    private val itemFactory: ParticleItemFactory,
    private val selectionManager: SelectionManager,
    private val areaService: AreaService,
    private val limitValidator: AreaLimitValidator,
) : Listener {

  @EventHandler(priority = EventPriority.NORMAL)
  fun onInteract(event: PlayerInteractEvent) {
    val item = event.item ?: return
    val isWand = itemFactory.isWand(item)
    val effectConfig = if (isWand) null else itemFactory.parseEffectItem(item)
    if (!isWand && effectConfig == null) return

    // オフハンドの二重発火を抑止する
    if (event.hand != EquipmentSlot.HAND) {
      event.isCancelled = true
      return
    }

    val player = event.player
    event.isCancelled = true

    if (isWand) {
      handleWand(player, event)
      return
    }

    if (
        effectConfig != null &&
            (event.action == Action.RIGHT_CLICK_AIR || event.action == Action.RIGHT_CLICK_BLOCK)
    ) {
      handleEffectItemUse(player, item, effectConfig)
    }
  }

  private fun handleWand(player: Player, event: PlayerInteractEvent) {
    if (!player.hasPermission("oyasaiparticles.wand")) {
      player.sendMessage(Component.text("ワンドを使用する権限がありません。", NamedTextColor.RED))
      return
    }

    val world = player.world
    val action = event.action

    if (
        (action == Action.RIGHT_CLICK_AIR || action == Action.RIGHT_CLICK_BLOCK) &&
            player.isSneaking
    ) {
      val updated = selectionManager.toggleMode(player.uniqueId, world.name)
      val modeLabel = if (updated.mode == ShapeMode.BOX) "四角 (Box)" else "円柱 (Cylinder)"
      player.sendMessage(Component.text("範囲モードを [$modeLabel] に切り替えました。", NamedTextColor.AQUA))
      return
    }

    val clickedBlock = event.clickedBlock
    when (action) {
      Action.LEFT_CLICK_BLOCK -> {
        if (clickedBlock == null) return
        val updated = selectionManager.setPos1(player.uniqueId, clickedBlock.location)
        val label = if (updated.mode == ShapeMode.CYLINDER) "中心 / Pos1" else "Pos1"
        player.sendMessage(
            Component.text(
                "$label を (${clickedBlock.x}, ${clickedBlock.y}, ${clickedBlock.z}) に設定しました。",
                NamedTextColor.AQUA,
            )
        )
      }
      Action.RIGHT_CLICK_BLOCK -> {
        if (clickedBlock == null) return
        val updated = selectionManager.setPos2(player.uniqueId, clickedBlock.location)
        val shapeText = updated.toAreaShape()?.describe() ?: "Pos1 を左クリックで指定してください"
        player.sendMessage(
            Component.text(
                "Pos2 を (${clickedBlock.x}, ${clickedBlock.y}, ${clickedBlock.z}) に設定しました。[$shapeText]",
                NamedTextColor.AQUA,
            )
        )
      }
      Action.RIGHT_CLICK_AIR -> {
        val current = selectionManager.get(player.uniqueId)?.takeIf { it.worldName == world.name }
        val shapeText = current?.toAreaShape()?.describe() ?: "未確定 (左クリック=Pos1 / 右クリック=Pos2)"
        player.sendMessage(Component.text("現在の選択範囲: $shapeText", NamedTextColor.GRAY))
      }
      else -> Unit
    }
  }

  private fun handleEffectItemUse(
      player: Player,
      item: org.bukkit.inventory.ItemStack,
      effectConfig: io.oyasai.particles.model.ParticleEffectConfig,
  ) {
    if (!player.hasPermission("oyasaiparticles.wand")) {
      player.sendMessage(Component.text("パーティクルアイテムを使用する権限がありません。", NamedTextColor.RED))
      return
    }

    val shape = selectionManager.buildShape(player.uniqueId, player.world.name)
    if (shape == null) {
      player.sendMessage(
          Component.text("先にワンド (/opart wand) で範囲を指定してから右クリックしてください。", NamedTextColor.YELLOW)
      )
      return
    }

    when (val check = limitValidator.validateNewArea(player, player.world, shape)) {
      is ValidationResult.Error -> {
        player.sendMessage(Component.text(check.message, NamedTextColor.RED))
        return
      }
      ValidationResult.Ok -> Unit
    }

    val id = areaService.generateItemAreaId()
    val baseName = effectConfig.itemDisplayName ?: "パーティクル"
    val displayName = "${baseName}_${id.removePrefix("item_")}"
    val created =
        areaService.createArea(
            id = id,
            name = displayName,
            worldName = player.world.name,
            ownerUuid = player.uniqueId,
            ownerName = player.name,
            shape = shape,
            effect = effectConfig,
            createdFromItem = true,
        )

    if (player.gameMode != GameMode.CREATIVE) {
      item.amount = (item.amount - 1).coerceAtLeast(0)
    }

    player.sendMessage(
        Component.text(
            "空間にパーティクルエリア「${created.name}」を設置しました！ (/opart list から編集・回収できます)",
            NamedTextColor.GREEN,
        )
    )
  }
}
