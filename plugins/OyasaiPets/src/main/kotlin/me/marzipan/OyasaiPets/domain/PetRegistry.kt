@file:Suppress("DEPRECATION")

package me.marzipan.OyasaiPets

import java.util.Locale
import net.kyori.adventure.text.format.NamedTextColor.*
import org.bukkit.*
import org.bukkit.command.*
import org.bukkit.entity.*
import org.bukkit.inventory.*
import org.bukkit.plugin.java.JavaPlugin

/** ペットレジストリ 公式ペット一覧と各ペットの仕様を管理 */
object PetRegistry {
  /** 公式にサポートされているペットの種類 */
  val officialPets: Set<EntityType> =
      setOf(
          EntityType.WOLF,
          EntityType.CAT,
          EntityType.CHICKEN,
          EntityType.DOLPHIN,
          EntityType.PARROT,
          EntityType.FOX,
          EntityType.FROG,
          EntityType.ALLAY,
          EntityType.AXOLOTL,
          EntityType.BEE,
          EntityType.RABBIT,
          EntityType.PANDA,
          EntityType.POLAR_BEAR,
          EntityType.TURTLE,
          EntityType.ARMADILLO,
      )

  /** コンフィグによる上書き */
  private val overrides = mutableMapOf<EntityType, PetSpec>()

  /** デフォルトのペット仕様 */
  private val defaultSpec = PetSpec(PetCategory.LAND, entityType = EntityType.PIG)

  /** 各ペットタイプの仕様定義 */
  private val specs: Map<EntityType, PetSpec> =
      mapOf(
          EntityType.WOLF to
              PetSpec(
                  category = PetCategory.LAND,
                  entityType = EntityType.WOLF,
                  baseSpeed = 0.6,
                  maxSpeed = 1.2,
                  jumpPower = 0.6,
                  toyMaterial = Material.BONE,
                  toyName = "骨のおもちゃ",
                  toyType = ToyType.THROW_FETCH,
              ),
          EntityType.CAT to
              PetSpec(
                  category = PetCategory.LAND,
                  entityType = EntityType.CAT,
                  baseSpeed = 0.5,
                  maxSpeed = 1.0,
                  jumpPower = 0.8,
                  scaleRange = 2.0..3.0,
                  toyMaterial = Material.FISHING_ROD,
                  toyName = "猫じゃらし",
                  toyType = ToyType.FISHING_ROD,
              ),
          EntityType.FOX to
              PetSpec(
                  category = PetCategory.LAND,
                  entityType = EntityType.FOX,
                  baseSpeed = 0.5,
                  maxSpeed = 1.0,
                  jumpPower = 0.7,
                  toyMaterial = Material.SWEET_BERRIES,
                  toyName = "ベリーのおもちゃ",
                  toyType = ToyType.THROW_FETCH,
              ),
          EntityType.DOLPHIN to
              PetSpec(
                  category = PetCategory.WATER,
                  entityType = EntityType.DOLPHIN,
                  baseSpeed = 0.5,
                  maxSpeed = 1.0,
                  scaleRange = 1.5..2.2,
                  toyMaterial = Material.PUFFERFISH,
                  toyName = "フグ風船",
                  toyType = ToyType.BALLOON_JUMP,
                  toyGravity = false,
              ),
          EntityType.AXOLOTL to
              PetSpec(
                  category = PetCategory.WATER,
                  entityType = EntityType.AXOLOTL,
                  baseSpeed = 0.5,
                  maxSpeed = 1.0,
                  scaleRange = 1.5..2.0,
                  toyMaterial = Material.TROPICAL_FISH_BUCKET,
                  toyName = "お魚バケツ",
                  toyType = ToyType.THROW_FETCH,
              ),
          EntityType.FROG to
              PetSpec(
                  category = PetCategory.WATER,
                  entityType = EntityType.FROG,
                  baseSpeed = 0.4,
                  maxSpeed = 0.8,
                  jumpPower = 1.2,
                  scaleRange = 2.0..2.8,
                  toyMaterial = Material.SLIME_BALL,
                  toyName = "スライムボール",
                  toyType = ToyType.THROW_FETCH,
              ),
          EntityType.PARROT to
              PetSpec(
                  category = PetCategory.FLYING,
                  entityType = EntityType.PARROT,
                  baseSpeed = 0.5,
                  maxSpeed = 1.0,
                  jumpPower = 0.5,
                  scaleRange = 2.0..3.0,
                  toyMaterial = Material.WHEAT_SEEDS,
                  toyName = "種のおもちゃ",
                  toyType = ToyType.THROW_FETCH,
                  toyGravity = false,
              ),
          EntityType.CHICKEN to
              PetSpec(
                  category = PetCategory.FLYING,
                  entityType = EntityType.CHICKEN,
                  maxHealth = 20.0,
                  baseSpeed = 0.4,
                  maxSpeed = 0.9,
                  jumpPower = 0.5,
                  toyMaterial = Material.MELON_SEEDS,
                  toyName = "スイカの種",
                  toyType = ToyType.THROW_FETCH,
              ),
          EntityType.BEE to
              PetSpec(
                  category = PetCategory.FLYING,
                  entityType = EntityType.BEE,
                  maxHealth = 16.0,
                  baseSpeed = 0.5,
                  maxSpeed = 1.0,
                  jumpPower = 0.5,
                  scaleRange = 1.25..1.75,
                  toyMaterial = Material.HONEY_BOTTLE,
                  toyName = "ハチミツ",
                  toyType = ToyType.THROW_FETCH,
              ),
          EntityType.ALLAY to
              PetSpec(
                  category = PetCategory.FLYING,
                  entityType = EntityType.ALLAY,
                  baseSpeed = 0.5,
                  maxSpeed = 1.0,
                  jumpPower = 0.5,
                  scaleRange = 1.5..2.0,
                  toyMaterial = Material.AMETHYST_SHARD,
                  toyName = "キラキラ",
                  toyType = ToyType.THROW_FETCH,
                  toyGravity = false,
              ),
          EntityType.RABBIT to
              PetSpec(
                  category = PetCategory.LAND,
                  entityType = EntityType.RABBIT,
                  maxHealth = 20.0,
                  baseSpeed = 0.4,
                  maxSpeed = 0.8,
                  jumpPower = 1.0,
                  scaleRange = 2.5..3.25,
                  toyMaterial = Material.CARROT,
                  toyName = "ニンジン",
                  toyType = ToyType.THROW_FETCH,
              ),
          EntityType.PANDA to
              PetSpec(
                  category = PetCategory.LAND,
                  entityType = EntityType.PANDA,
                  baseSpeed = 0.4,
                  maxSpeed = 0.8,
                  jumpPower = 0.4,
                  scaleRange = 1.25..1.5,
                  toyMaterial = Material.BAMBOO,
                  toyName = "竹",
                  toyType = ToyType.THROW_FETCH,
              ),
          EntityType.POLAR_BEAR to
              PetSpec(
                  category = PetCategory.LAND,
                  entityType = EntityType.POLAR_BEAR,
                  baseSpeed = 0.5,
                  maxSpeed = 1.0,
                  jumpPower = 0.4,
                  scaleRange = 1.25..1.5,
                  toyMaterial = Material.COD,
                  toyName = "魚",
                  toyType = ToyType.THROW_FETCH,
              ),
          EntityType.TURTLE to
              PetSpec(
                  category = PetCategory.WATER,
                  entityType = EntityType.TURTLE,
                  baseSpeed = 0.3,
                  maxSpeed = 0.7,
                  scaleRange = 1.25..1.75,
                  toyMaterial = Material.SEAGRASS,
                  toyName = "海草",
                  toyType = ToyType.THROW_FETCH,
              ),
          EntityType.ARMADILLO to
              PetSpec(
                  category = PetCategory.LAND,
                  entityType = EntityType.ARMADILLO,
                  baseSpeed = 0.4,
                  maxSpeed = 0.8,
                  jumpPower = 0.5,
                  scaleRange = 1.5..2.25,
                  toyMaterial = Material.SPIDER_EYE,
                  toyName = "クモの目",
                  toyType = ToyType.THROW_FETCH,
              ),
      )

  /** 設定可能な全ペットタイプを取得 */
  fun allConfigurableTypes(): Set<EntityType> {
    return (officialPets + specs.keys).toSet()
  }

  /** 指定タイプのデフォルト仕様を取得 */
  fun getDefaultSpec(type: EntityType): PetSpec = specs[type] ?: defaultSpec.copy(entityType = type)

  /** config.ymlから設定を適用 */
  fun applyConfig(plugin: JavaPlugin) {
    overrides.clear()
    val sec = plugin.config.getConfigurationSection("pets") ?: return

    for (mobKey in sec.getKeys(false)) {
      val type =
          runCatching { EntityType.valueOf(mobKey.uppercase(Locale.ROOT)) }.getOrNull() ?: continue

      val base = "pets.$mobKey"
      val def = getDefaultSpec(type)

      val maxHealth = plugin.config.getDouble("$base.maxHealth", def.maxHealth)
      val baseSpeed = plugin.config.getDouble("$base.baseSpeed", def.baseSpeed)
      val maxSpeed = plugin.config.getDouble("$base.maxSpeed", def.maxSpeed)
      val jumpPower = plugin.config.getDouble("$base.jumpPower", def.jumpPower)
      val scaleMin = plugin.config.getDouble("$base.scaleMin", def.scaleRange.start)
      val scaleMax = plugin.config.getDouble("$base.scaleMax", def.scaleRange.endInclusive)

      val tuned =
          def.copy(
              maxHealth = maxHealth,
              baseSpeed = baseSpeed,
              maxSpeed = maxSpeed,
              jumpPower = jumpPower,
              scaleRange = scaleMin..scaleMax,
              entityType = type,
          )

      overrides[type] = tuned
    }
  }

  /** 指定タイプの仕様を取得（コンフィグ上書き適用済み） */
  fun get(type: EntityType): PetSpec =
      overrides[type] ?: specs[type] ?: defaultSpec.copy(entityType = type)

  /** 指定タイプが公式ペットかどうか */
  fun isOfficial(type: EntityType): Boolean = officialPets.contains(type)

  /** アイテムに対応するおもちゃ仕様を検索 */
  fun findSpecByToy(item: ItemStack): PetSpec? {
    if (!item.hasItemMeta()) return null
    val name = PLAIN_TEXT.serialize(item.itemMeta.displayName() ?: return null)
    return specs.values.find { spec ->
      spec.toyMaterial == item.type && name.contains(spec.toyName ?: "")
    }
  }

  /** 全公式ペットのおもちゃアイテムリストを取得 */
  fun getAllToyItems(): List<ItemStack> {
    return officialPets.mapNotNull { type -> specs[type]?.createToyItem() }
  }

  /** モブスペックのキーと現在値の一覧を返す */
  fun getMobEntryList(type: EntityType): List<Pair<String, Any>> {
    val spec = get(type)
    return listOf(
        "baseSpeed" to spec.baseSpeed,
        "maxSpeed" to spec.maxSpeed,
        "jumpPower" to spec.jumpPower,
        "scaleMin" to spec.scaleRange.start,
        "scaleMax" to spec.scaleRange.endInclusive,
    )
  }

  /** モブスペックの特定フィールドの現在値を取得 */
  fun getMobField(type: EntityType, key: String): Any? {
    val spec = get(type)
    return when (key) {
      "baseSpeed" -> spec.baseSpeed
      "maxSpeed" -> spec.maxSpeed
      "jumpPower" -> spec.jumpPower
      "scaleMin" -> spec.scaleRange.start
      "scaleMax" -> spec.scaleRange.endInclusive
      else -> null
    }
  }

  /** モブスペックのフィールドを変更してメモリとconfig.ymlに反映（成功時true） */
  fun setMobField(type: EntityType, key: String, raw: String, plugin: JavaPlugin): Boolean {
    val spec = get(type)
    val updated =
        when (key) {
          "baseSpeed" -> raw.toDoubleOrNull()?.let { spec.copy(baseSpeed = it) }
          "maxSpeed" -> raw.toDoubleOrNull()?.let { spec.copy(maxSpeed = it) }
          "jumpPower" -> raw.toDoubleOrNull()?.let { spec.copy(jumpPower = it) }
          "scaleMin" ->
              raw.toDoubleOrNull()?.let { spec.copy(scaleRange = it..spec.scaleRange.endInclusive) }
          "scaleMax" ->
              raw.toDoubleOrNull()?.let { spec.copy(scaleRange = spec.scaleRange.start..it) }
          else -> null
        } ?: return false

    overrides[type] = updated
    val base = "pets.${type.name.lowercase()}"
    plugin.config.set("$base.baseSpeed", updated.baseSpeed)
    plugin.config.set("$base.maxSpeed", updated.maxSpeed)
    plugin.config.set("$base.jumpPower", updated.jumpPower)
    plugin.config.set("$base.scaleMin", updated.scaleRange.start)
    plugin.config.set("$base.scaleMax", updated.scaleRange.endInclusive)
    plugin.saveConfig()
    return true
  }
}
