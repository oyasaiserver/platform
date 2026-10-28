package icu.oyasai.games.tank

import com.destroystokyo.paper.profile.ProfileProperty
import com.google.gson.JsonObject
import com.google.gson.JsonParser
import java.io.File
import java.util.UUID
import org.bukkit.Bukkit
import org.bukkit.Material
import org.bukkit.inventory.ItemStack
import org.bukkit.inventory.meta.SkullMeta
import org.joml.Matrix4f
import org.joml.Quaternionf
import org.joml.Vector3f

internal enum class Group {
  HULL,
  TURRET,
  BARREL,
}

internal class Part(
    val group: Group,
    val center: Vector3f,
    val size: Vector3f,
    val block: Material,
    val rotation: Quaternionf = Quaternionf(),
)

/**
 * 表示 1 枚。[local] はグループの原点（HULL は車体の原点、TURRET は砲塔の回転中心、BARREL は砲身の付け根）からの変換。 [block]
 * （`minecraft:stone` などのブロック状態の文字列。作るのにサーバーが要るので表示を出すときに変換する）があれば BlockDisplay、なければ [item] の
 * ItemDisplay。
 */
internal class ModelPart(
    val group: Group,
    val local: Matrix4f,
    val block: String?,
    val item: ItemStack?,
)

/** 箱（中心・大きさ・中心まわりの回転）を、原点が角の 1 ブロックへの変換にする。 */
private fun Part.toModelPart(): ModelPart =
    ModelPart(
        group,
        Matrix4f().translate(center).rotate(rotation).scale(size).translate(-0.5f, -0.5f, -0.5f),
        block.key.toString(),
        null,
    )

internal class TankModel(
    val parts: List<ModelPart>,
    val pivot: Vector3f,
    val gunRoot: Vector3f,
    val gunLength: Float,
    val coaxRoot: Vector3f,
    val seatY: Double,
)

internal object TankModels {
  fun create(spec: TankSpec): TankModel {
    val w = spec.width.toFloat()
    val l = spec.length.toFloat()
    val h = spec.height.toFloat()
    val gun = spec.gunLength.toFloat()
    val heavy = spec.key == "heavy"
    val light = spec.key == "light"
    val color = if (heavy) Material.YELLOW_TERRACOTTA else Material.GREEN_TERRACOTTA
    val track = Material.BLACK_CONCRETE
    val wheel = if (heavy) Material.TERRACOTTA else Material.GRAY_TERRACOTTA
    val parts = mutableListOf<Part>()
    fun box(
        group: Group,
        x: Float,
        y: Float,
        z: Float,
        sx: Float,
        sy: Float,
        sz: Float,
        block: Material = color,
        angle: Float = 0f,
    ) {
      parts.add(
          Part(
              group,
              Vector3f(x, y, z),
              Vector3f(sx, sy, sz),
              block,
              Quaternionf().rotationX(Math.toRadians(angle.toDouble()).toFloat()),
          )
      )
    }
    val hullTop = h * 0.55f
    val pivot = Vector3f(0f, hullTop, -l * 0.04f)
    val gunRoot = Vector3f(0f, h * 0.17f, l * 0.19f)
    val coaxRoot = Vector3f(-w * 0.12f, gunRoot.y, gunRoot.z + 0.36f)
    val trackWidth = w * if (heavy) 0.23f else 0.18f
    val bodyWidth = w - 2 * trackWidth
    box(Group.HULL, 0f, h * 0.27f, -l * 0.05f, bodyWidth, h * 0.42f, l * 0.78f)
    box(Group.HULL, 0f, hullTop - 0.08f, -l * 0.25f, bodyWidth, 0.16f, l * 0.40f)
    val slope = if (light) 60f else if (heavy) 5f else 47f
    box(Group.HULL, 0f, h * 0.40f, l * 0.36f, bodyWidth, h * 0.35f, 0.12f, angle = -slope)
    box(Group.HULL, 0f, h * 0.18f, l * 0.40f, bodyWidth, h * 0.24f, 0.12f, angle = 30f)
    for (side in listOf(-1f, 1f)) {
      val tx = side * (w - trackWidth) / 2f
      box(Group.HULL, tx, h * 0.16f, 0f, trackWidth, h * 0.32f, l, track)
      box(Group.HULL, tx, h * 0.34f, 0f, trackWidth, 0.10f, l * 0.94f)
      box(
          Group.HULL,
          side * (bodyWidth / 2f - 0.03f),
          h * 0.43f,
          -l * 0.06f,
          trackWidth * 0.55f,
          h * 0.20f,
          l * 0.70f,
      )
      val count = if (light) 5 else if (heavy) 8 else 6
      for (i in 0 until count) {
        val wz = -l * 0.32f + l * 0.64f * i / (count - 1)
        val outer = if (heavy && i % 2 == 0) 0.015f else 0.035f
        box(
            Group.HULL,
            side * (w / 2f + outer),
            h * 0.15f,
            wz,
            0.07f,
            h * if (heavy) 0.24f else 0.20f,
            l * if (heavy) 0.13f else 0.12f,
            wheel,
        )
      }
      if (!light && !heavy) {
        for (i in 0 until 3) {
          box(
              Group.HULL,
              side * (w / 2f + 0.01f),
              h * 0.26f,
              -l * 0.256f + i * l * 0.256f,
              0.04f,
              h * 0.12f,
              l * 0.16f,
          )
        }
      }
      for (end in listOf(-1f, 1f)) {
        box(
            Group.HULL,
            side * (w / 2f + 0.02f),
            h * 0.18f,
            end * l * 0.43f,
            0.07f,
            h * 0.17f,
            l * 0.10f,
            wheel,
        )
      }
    }
    // 砲塔の段は鋳造形状、ティーガーは箱形を表す。
    box(Group.TURRET, 0f, h * 0.17f, 0f, w * 0.65f, h * 0.34f, l * 0.36f)
    if (!heavy) box(Group.TURRET, 0f, h * 0.35f, -l * 0.02f, w * 0.52f, h * 0.08f, l * 0.28f)
    box(Group.TURRET, 0f, gunRoot.y, gunRoot.z, w * if (heavy) 0.38f else 0.27f, h * 0.24f, 0.22f)
    box(Group.TURRET, -w * 0.15f, h * 0.42f, -l * 0.06f, w * 0.22f, h * 0.06f, l * 0.12f)
    box(Group.TURRET, w * 0.15f, h * 0.425f, -l * 0.06f, w * 0.17f, h * 0.05f, l * 0.10f)
    box(Group.HULL, -w * 0.20f, h * 0.39f, l * 0.40f, 0.09f, 0.09f, l * 0.14f, track)
    val barrelWidth = (spec.caliberMm / 1000.0 * 2.2).toFloat()
    box(Group.BARREL, 0f, 0f, gun / 2f, barrelWidth, barrelWidth, gun, Material.GRAY_CONCRETE)
    box(Group.BARREL, coaxRoot.x, 0f, 0.09f, 0.07f, 0.07f, 0.54f, track)
    if (heavy)
        box(
            Group.BARREL,
            0f,
            0f,
            gun - 0.16f,
            barrelWidth * 1.8f,
            barrelWidth * 1.8f,
            0.32f,
            Material.GRAY_CONCRETE,
        )
    return TankModel(
        parts.map { it.toModelPart() },
        pivot,
        gunRoot,
        gun,
        coaxRoot,
        hullTop.toDouble(),
    )
  }

  /**
   * tools/bdengine_tank.py が BDEngine の書き出しから作ったモデルファイル（JSON）を読む。行列は行優先の 16 個。
   * モデルの著作物はリポジトリに入れず、サーバーの plugins/OyasaiGames/tank-models/<車種>.json に置く。
   */
  fun load(file: File): TankModel {
    val root = file.reader(Charsets.UTF_8).use { JsonParser.parseReader(it).asJsonObject }
    fun vec(name: String): Vector3f {
      val a = root.getAsJsonArray(name)
      return Vector3f(a[0].asFloat, a[1].asFloat, a[2].asFloat)
    }
    val parts =
        root.getAsJsonArray("parts").map { element ->
          val part = element.asJsonObject
          val values = part.getAsJsonArray("m").map { it.asFloat }.toFloatArray()
          require(values.size == 16) { "matrix must have 16 values" }
          ModelPart(
              Group.valueOf(part.get("group").asString),
              Matrix4f().set(values).transpose(),
              part.get("block")?.asString,
              if (part.has("block")) null else item(part),
          )
        }
    return TankModel(
        parts,
        vec("pivot"),
        vec("gunRoot"),
        root.get("gunLength").asFloat,
        vec("coaxRoot"),
        root.get("seatY").asDouble,
    )
  }

  private fun item(part: JsonObject): ItemStack {
    val material =
        Material.matchMaterial(part.get("item").asString)
            ?: error("unknown item ${part.get("item").asString}")
    val stack = ItemStack(material)
    val texture = part.get("texture")?.asString ?: return stack
    stack.editMeta(SkullMeta::class.java) {
      val profile = Bukkit.createProfile(UUID.nameUUIDFromBytes(texture.toByteArray()), null)
      profile.setProperty(ProfileProperty("textures", texture))
      it.playerProfile = profile
    }
    return stack
  }
}
