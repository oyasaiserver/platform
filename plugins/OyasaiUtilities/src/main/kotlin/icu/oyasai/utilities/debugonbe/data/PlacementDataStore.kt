package icu.oyasai.utilities.debugonbe.data

import icu.oyasai.utilities.debugonbe.model.ArmorStandPlacement
import icu.oyasai.utilities.debugonbe.model.BlockShape
import icu.oyasai.utilities.debugonbe.model.ShapePlacementData
import java.io.File
import java.util.logging.Logger
import org.bukkit.configuration.file.YamlConfiguration
import org.bukkit.inventory.ItemStack
import org.bukkit.plugin.Plugin
import org.bukkit.util.EulerAngle

/**
 * 形状ごとの配置データを YAML ファイルに読み書きする。
 *
 * ファイルパス: plugins/CustomBlockModels/shapes/<shape_name>.yml
 */
class PlacementDataStore(private val plugin: Plugin) {

  private val shapesDir: File = File(plugin.dataFolder, "shapes").also { it.mkdirs() }
  private val logger: Logger = plugin.logger

  /** メモリ上のキャッシュ: 形状 → 配置データ */
  private val cache: MutableMap<BlockShape, ShapePlacementData> = mutableMapOf()

  // ────────────────────────────────────────────────────────────────
  // 読み込み / 保存
  // ────────────────────────────────────────────────────────────────

  /** 全シェイプのデータをキャッシュクリアして再読み込みする */
  fun reloadAll() {
    cache.clear()
    loadAll()
  }

  /** 全シェイプのデータをファイルから読み込む */
  fun loadAll() {
    BlockShape.entries.forEach { shape ->
      val file = fileFor(shape)
      if (file.exists()) {
        cache[shape] = load(shape, file)
        logger.info("[DOB] Loaded shape data: ${shape.name} (${cache[shape]!!.states.size} states)")
      } else {
        cache[shape] = ShapePlacementData(shape)
      }
    }
  }

  /** 指定シェイプのデータをファイルに保存する */
  fun save(shape: BlockShape) {
    val data = cache.getOrPut(shape) { ShapePlacementData(shape) }
    val file = fileFor(shape)
    val yaml = YamlConfiguration()

    yaml.set("shape", shape.name)

    data.states.forEach { (stateKey, placements) ->
      placements.forEachIndexed { idx, p ->
        val path = "states.$stateKey.$idx"
        yaml.set("$path.offsetX", p.offsetX)
        yaml.set("$path.offsetY", p.offsetY)
        yaml.set("$path.offsetZ", p.offsetZ)
        yaml.set("$path.yaw", p.yaw.toDouble())
        yaml.set("$path.isSmall", p.isSmall)
        yaml.set("$path.scale", p.scale)
        yaml.set("$path.visible", p.visible)
        setEuler(yaml, "$path.headPose", p.headPose)
        setEuler(yaml, "$path.bodyPose", p.bodyPose)
        setEuler(yaml, "$path.leftArmPose", p.leftArmPose)
        setEuler(yaml, "$path.rightArmPose", p.rightArmPose)
        setEuler(yaml, "$path.leftLegPose", p.leftLegPose)
        setEuler(yaml, "$path.rightLegPose", p.rightLegPose)
        p.headItem?.let { yaml.set("$path.headItem", it) }
        p.chestItem?.let { yaml.set("$path.chestItem", it) }
        p.legsItem?.let { yaml.set("$path.legsItem", it) }
        p.feetItem?.let { yaml.set("$path.feetItem", it) }
        p.mainHandItem?.let { yaml.set("$path.mainHandItem", it) }
        p.offHandItem?.let { yaml.set("$path.offHandItem", it) }
      }
    }

    yaml.save(file)
    logger.info("[DOB] Saved shape data: ${shape.name}")
  }

  // ────────────────────────────────────────────────────────────────
  // キャッシュへのアクセス
  // ────────────────────────────────────────────────────────────────

  fun get(shape: BlockShape): ShapePlacementData =
      cache.getOrPut(shape) { ShapePlacementData(shape) }

  fun getOrNull(shape: BlockShape): ShapePlacementData? = cache[shape]

  // ────────────────────────────────────────────────────────────────
  // ユーティリティ
  // ────────────────────────────────────────────────────────────────

  private fun fileFor(shape: BlockShape): File = File(shapesDir, "${shape.name.lowercase()}.yml")

  private fun load(shape: BlockShape, file: File): ShapePlacementData {
    val yaml = YamlConfiguration.loadConfiguration(file)
    val data = ShapePlacementData(shape)

    val statesSection = yaml.getConfigurationSection("states") ?: return data

    for (stateKey in statesSection.getKeys(false)) {
      val stateSection = statesSection.getConfigurationSection(stateKey) ?: continue
      for (idxKey in stateSection.getKeys(false)) {
        val path = "states.$stateKey.$idxKey"
        val placement =
            ArmorStandPlacement(
                offsetX = yaml.getDouble("$path.offsetX"),
                offsetY = yaml.getDouble("$path.offsetY"),
                offsetZ = yaml.getDouble("$path.offsetZ"),
                yaw = yaml.getDouble("$path.yaw").toFloat(),
                isSmall = yaml.getBoolean("$path.isSmall", true),
                scale = yaml.getDouble("$path.scale", 1.0),
                visible = yaml.getBoolean("$path.visible", false),
                headPose = getEuler(yaml, "$path.headPose"),
                bodyPose = getEuler(yaml, "$path.bodyPose"),
                leftArmPose = getEuler(yaml, "$path.leftArmPose"),
                rightArmPose = getEuler(yaml, "$path.rightArmPose"),
                leftLegPose = getEuler(yaml, "$path.leftLegPose"),
                rightLegPose = getEuler(yaml, "$path.rightLegPose"),
                headItem = yaml.get("$path.headItem") as? ItemStack,
                chestItem = yaml.get("$path.chestItem") as? ItemStack,
                legsItem = yaml.get("$path.legsItem") as? ItemStack,
                feetItem = yaml.get("$path.feetItem") as? ItemStack,
                mainHandItem = yaml.get("$path.mainHandItem") as? ItemStack,
                offHandItem = yaml.get("$path.offHandItem") as? ItemStack,
            )
        data.addPlacement(stateKey, placement)
      }
    }
    return data
  }

  private fun setEuler(yaml: YamlConfiguration, path: String, angle: EulerAngle) {
    yaml.set("$path.x", Math.toDegrees(angle.x))
    yaml.set("$path.y", Math.toDegrees(angle.y))
    yaml.set("$path.z", Math.toDegrees(angle.z))
  }

  private fun getEuler(yaml: YamlConfiguration, path: String): EulerAngle {
    val x = Math.toRadians(yaml.getDouble("$path.x", 0.0))
    val y = Math.toRadians(yaml.getDouble("$path.y", 0.0))
    val z = Math.toRadians(yaml.getDouble("$path.z", 0.0))
    return EulerAngle(x, y, z)
  }
}
