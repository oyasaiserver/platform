package icu.oyasai.utilities.hologram

import icu.oyasai.utilities.OyasaiUtilities
import java.util.UUID
import net.kyori.adventure.text.serializer.plain.PlainTextComponentSerializer
import org.bukkit.Material
import org.bukkit.NamespacedKey
import org.bukkit.entity.Player
import org.bukkit.event.EventHandler
import org.bukkit.event.EventPriority
import org.bukkit.event.Listener
import org.bukkit.event.block.Action
import org.bukkit.event.player.PlayerInteractEvent
import org.bukkit.event.player.PlayerQuitEvent
import org.bukkit.inventory.EquipmentSlot
import org.bukkit.inventory.ItemStack
import org.bukkit.persistence.PersistentDataType
import org.bukkit.util.BoundingBox
import org.bukkit.util.Vector

object HologramTool : Listener {
  private val toolKey by lazy { NamespacedKey(OyasaiUtilities.plugin, "hologram_tool") }
  private val modes = mutableMapOf<UUID, Int>()
  private val angles = mutableMapOf<UUID, Float>()
  private val modeNames = listOf("X", "Y", "Z", "向き")

  fun item(): ItemStack =
      hologramItem(
              Material.AMETHYST_SHARD,
              "&d&lホロクリスタル",
              "&7Shift+右クリック(地面): 新規ホログラム設置",
              "&7Shift+右クリック(文字): 設定メニューを開く",
              "&e左クリック: 調整項目切替 (X→Y→Z→向き)",
              "&e右クリック: 加算 / Shift+左クリック: 減算",
              "&70.1 m / 15° (角度は /oholo angle <角度|reset>)",
          )
          .also {
            it.editMeta { meta ->
              meta.persistentDataContainer.set(toolKey, PersistentDataType.BYTE, 1.toByte())
            }
          }

  fun angle(player: Player, raw: String?) {
    if (!HologramFeature.canEdit(player)) return
    val angle = if (raw.equals("reset", true)) 15f else raw?.toFloatOrNull()
    if (angle == null || !angle.isFinite() || angle <= 0 || angle > 360) {
      player.sendMessage("[oholo] angle <0より大きく360以下の角度|reset>")
      return
    }
    angles[player.uniqueId] = angle
    player.sendMessage("[oholo] 回転の刻み: $angle°")
  }

  @EventHandler(priority = EventPriority.HIGH)
  fun interact(event: PlayerInteractEvent) {
    if (event.hand != EquipmentSlot.HAND) return
    val player = event.player
    val item = event.item ?: return
    if (
        item.type != Material.AMETHYST_SHARD ||
            item.itemMeta?.persistentDataContainer?.get(toolKey, PersistentDataType.BYTE) !=
                1.toByte()
    )
        return
    val left = event.action == Action.LEFT_CLICK_AIR || event.action == Action.LEFT_CLICK_BLOCK
    val right = event.action == Action.RIGHT_CLICK_AIR || event.action == Action.RIGHT_CLICK_BLOCK
    if (!left && !right) return
    event.isCancelled = true
    if (!HologramFeature.canEdit(player)) return
    val holo = target(player)
    if (right && player.isSneaking) {
      if (holo != null) {
        HologramGui.open(player, holo.name)
        return
      }
      val block = event.clickedBlock ?: return
      val loc = block.getRelative(event.blockFace).location.add(0.5, 0.8, 0.5)
      val name =
          generateSequence(1) { it + 1 }
              .map { "holo_$it" }
              .first { HologramFeature.get(it) == null }
      val created =
          Hologram(
              name,
              loc.world.name,
              loc.x,
              loc.y,
              loc.z,
              listOf("&e&l新規ホログラム", "&7Shift+右クリックで設定を開く"),
              true,
              yaw = player.location.yaw,
          )
      HologramFeature.put(created)
      HologramGui.open(player, name)
      return
    }
    if (holo == null) return
    val mode = modes.getOrDefault(player.uniqueId, 0)
    if (left && !player.isSneaking) {
      val next = (mode + 1) % modeNames.size
      modes[player.uniqueId] = next
      player.sendActionBar(hologramComponent("&b[ホロクリスタル] &7調整項目: &e${modeNames[next]}"))
      return
    }
    val sign = if (left) -1 else 1
    val changed =
        when (mode) {
          0 -> holo.copy(x = holo.x + 0.1 * sign)
          1 -> holo.copy(y = holo.y + 0.1 * sign)
          2 -> holo.copy(z = holo.z + 0.1 * sign)
          else ->
              holo.copy(
                  yaw =
                      ((holo.yaw + angles.getOrDefault(player.uniqueId, 15f) * sign) % 360 + 360) %
                          360
              )
        }
    HologramFeature.put(changed)
    val value =
        when (mode) {
          0 -> changed.x
          1 -> changed.y
          2 -> changed.z
          else -> changed.yaw.toDouble()
        }
    player.sendActionBar(
        hologramComponent("&b[ホロクリスタル] &e${modeNames[mode]}: &f%.2f".format(value))
    )
  }

  private fun target(player: Player): Hologram? {
    val eye = player.eyeLocation.toVector()
    val direction = player.eyeLocation.direction
    val wall = player.world.rayTraceBlocks(player.eyeLocation, direction, 6.0)?.hitPosition
    var distance = wall?.distance(eye) ?: 6.0
    var result: Hologram? = null
    for ((name, entities) in HologramFeature.displays()) {
      val holo = HologramFeature.get(name) ?: continue
      if (holo.world != player.world.name) continue
      for (entity in entities) {
        if (!entity.isValid) continue
        val text = PlainTextComponentSerializer.plainText().serialize(entity.text())
        if (text.isEmpty()) continue
        val at =
            entity.location
                .toVector()
                .add(Vector(0.0, entity.transformation.translation.y.toDouble(), 0.0))
        // ponytail: 字幅の近似AABB。正確な文字の当たり判定が必要ならフォント計測と表示平面を使う。
        val width = (text.codePointCount(0, text.length) * 0.075 * holo.scale).coerceAtLeast(0.25)
        val box =
            BoundingBox(
                at.x - width,
                at.y - 0.05,
                at.z - width,
                at.x + width,
                at.y + TEXT_HEIGHT * holo.scale,
                at.z + width,
            )
        val hit = box.rayTrace(eye, direction, distance) ?: continue
        distance = hit.hitPosition.distance(eye)
        result = holo
      }
      // 空のホログラムも原点を狙って編集できる。
      if (
          entities.isEmpty() ||
              entities.all {
                PlainTextComponentSerializer.plainText().serialize(it.text()).isEmpty()
              }
      ) {
        val at = Vector(holo.x, holo.y, holo.z)
        val hit =
            BoundingBox.of(at, 0.25, 0.25, 0.25).rayTrace(eye, direction, distance) ?: continue
        distance = hit.hitPosition.distance(eye)
        result = holo
      }
    }
    return result
  }

  @EventHandler
  fun quit(event: PlayerQuitEvent) {
    modes.remove(event.player.uniqueId)
    angles.remove(event.player.uniqueId)
  }

  fun clear() {
    modes.clear()
    angles.clear()
  }
}
