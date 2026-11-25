package io.oyasai.particles.model

import io.papermc.paper.registry.RegistryAccess
import io.papermc.paper.registry.RegistryKey
import org.bukkit.Material
import org.bukkit.NamespacedKey
import org.bukkit.Particle
import org.bukkit.Sound

/** Paper 26.3 のレジストリ依存 enum を静的初期化時に評価しないよう、 すべての定義は文字列キーで保持し、実行時に遅延解決する。 */
enum class ParticlePreset(
    val displayName: String,
    val particleKey: String?,
    val iconMaterialKey: String,
) {
  NONE("なし", null, "GRAY_STAINED_GLASS_PANE"),
  CHERRY_LEAVES("桜の花びら", "CHERRY_LEAVES", "PINK_PETALS"),
  SPORE_BLOSSOM("胞子の花", "SPORE_BLOSSOM_AIR", "SPORE_BLOSSOM"),
  CRIMSON_SPORE("真紅の胞子", "CRIMSON_SPORE", "CRIMSON_FUNGUS"),
  WARPED_SPORE("歪んだ胞子", "WARPED_SPORE", "WARPED_FUNGUS"),
  ASH("火山灰", "ASH", "BASALT"),
  WHITE_ASH("白い灰", "WHITE_ASH", "CALCITE"),
  SNOWFLAKE("雪の結晶", "SNOWFLAKE", "SNOWBALL"),
  END_ROD("星の光粒", "END_ROD", "END_ROD"),
  SOUL_FIRE_FLAME("魂の火の粉", "SOUL_FIRE_FLAME", "SOUL_LANTERN"),
  FLAME("火の粉", "FLAME", "BLAZE_POWDER"),
  HAPPY_VILLAGER("緑の光粒 (蛍風)", "HAPPY_VILLAGER", "LIME_DYE"),
  HEART("ハート", "HEART", "ROSE_BUSH"),
  NOTE("音符", "NOTE", "NOTE_BLOCK"),
  ENCHANT("エンチャント文字", "ENCHANT", "ENCHANTED_BOOK"),
  PORTAL("ポータル粒子", "PORTAL", "ENDER_PEARL");

  fun next(): ParticlePreset {
    val all = entries
    return all[(ordinal + 1) % all.size]
  }

  fun resolveParticle(): Particle? {
    val key = particleKey ?: return null
    return runCatching { Particle.valueOf(key) }.getOrNull()
  }

  fun resolveIconMaterial(): Material = resolveMaterialSafely(iconMaterialKey, "PAPER")

  companion object {
    fun fromKey(raw: String?): ParticlePreset =
        entries.firstOrNull { it.name.equals(raw, ignoreCase = true) } ?: NONE
  }
}

enum class PseudoWeather(
    val displayName: String,
    val iconMaterialKey: String,
) {
  NONE("なし", "SUNFLOWER"),
  RAIN("疑似雨 (砂漠でも降る)", "WATER_BUCKET"),
  SNOW("疑似雪 (砂漠でも降る)", "SNOWBALL"),
  STORM("疑似嵐 (強雨+稲妻演出)", "LIGHTNING_ROD");

  fun next(): PseudoWeather {
    val all = entries
    return all[(ordinal + 1) % all.size]
  }

  fun resolveIconMaterial(): Material = resolveMaterialSafely(iconMaterialKey, "PAPER")

  companion object {
    fun fromKey(raw: String?): PseudoWeather =
        entries.firstOrNull { it.name.equals(raw, ignoreCase = true) } ?: NONE
  }
}

enum class TimePreset(
    val displayName: String,
    val ticks: Long?,
    val iconMaterialKey: String,
) {
  DEFAULT("ワールド準拠", null, "CLOCK"),
  DAWN("夜明け", 23000L, "ORANGE_DYE"),
  MORNING("朝", 1000L, "YELLOW_DYE"),
  NOON("昼", 6000L, "GOLD_INGOT"),
  SUNSET("夕暮れ", 12500L, "AMETHYST_SHARD"),
  NIGHT("夜", 18000L, "INK_SAC");

  fun next(): TimePreset {
    val all = entries
    return all[(ordinal + 1) % all.size]
  }

  fun resolveIconMaterial(): Material = resolveMaterialSafely(iconMaterialKey, "CLOCK")

  companion object {
    fun fromKey(raw: String?): TimePreset =
        entries.firstOrNull { it.name.equals(raw, ignoreCase = true) } ?: DEFAULT
  }
}

enum class AmbientSoundPreset(
    val displayName: String,
    val soundKey: String?,
    val hasPeriodicThunder: Boolean,
    val intervalTicks: Int,
    val volume: Float,
    val pitch: Float,
    val iconMaterialKey: String,
) {
  NONE("なし", null, false, 100, 0f, 1f, "BARRIER"),
  RAIN("雨音", "weather.rain", false, 40, 0.35f, 1.0f, "BLUE_DYE"),
  THUNDER_OCCASIONAL("定期的な雷鳴", null, true, 160, 0.7f, 0.95f, "GUNPOWDER"),
  RAIN_AND_THUNDER("雨音 + 定期的な雷鳴", "weather.rain", true, 40, 0.35f, 1.0f, "PRISMARINE_CRYSTALS"),
  CAVE("洞窟の環境音", "ambient.cave", false, 180, 0.45f, 1.0f, "ECHO_SHARD"),
  CRIMSON_FOREST(
      "真紅の森の環境音",
      "ambient.crimson_forest.additions",
      false,
      120,
      0.5f,
      1.0f,
      "CRIMSON_NYLIUM",
  ),
  SOUL_SAND_VALLEY(
      "ソウルサンドの谷",
      "ambient.soul_sand_valley.additions",
      false,
      120,
      0.5f,
      1.0f,
      "SOUL_SAND",
  );

  fun next(): AmbientSoundPreset {
    val all = entries
    return all[(ordinal + 1) % all.size]
  }

  fun resolveSound(): Sound? {
    val key = soundKey ?: return null
    return resolveSoundByKey(key)
  }

  fun resolveIconMaterial(): Material = resolveMaterialSafely(iconMaterialKey, "NOTE_BLOCK")

  companion object {
    fun fromKey(raw: String?): AmbientSoundPreset =
        entries.firstOrNull { it.name.equals(raw, ignoreCase = true) } ?: NONE
  }
}

data class ParticleEffectConfig(
    val particle: ParticlePreset = ParticlePreset.NONE,
    val weather: PseudoWeather = PseudoWeather.NONE,
    val time: TimePreset = TimePreset.DEFAULT,
    val sound: AmbientSoundPreset = AmbientSoundPreset.NONE,
    val density: Int = 2,
    val itemMaterialKey: String = "PINK_DYE",
    val itemDisplayName: String? = null,
) {
  fun normalized(): ParticleEffectConfig = copy(density = density.coerceIn(1, 5))

  fun hasAnyVisualOrAudio(): Boolean =
      particle != ParticlePreset.NONE ||
          weather != PseudoWeather.NONE ||
          time != TimePreset.DEFAULT ||
          sound != AmbientSoundPreset.NONE
}

object BuiltInItemPresets {
  val presets: Map<String, ParticleEffectConfig> =
      linkedMapOf(
          "cherry" to
              ParticleEffectConfig(
                  particle = ParticlePreset.CHERRY_LEAVES,
                  weather = PseudoWeather.NONE,
                  time = TimePreset.DEFAULT,
                  sound = AmbientSoundPreset.NONE,
                  density = 3,
                  itemMaterialKey = "PINK_DYE",
                  itemDisplayName = "桜吹雪の染料",
              ),
          "desert_rain" to
              ParticleEffectConfig(
                  particle = ParticlePreset.NONE,
                  weather = PseudoWeather.RAIN,
                  time = TimePreset.DEFAULT,
                  sound = AmbientSoundPreset.RAIN,
                  density = 3,
                  itemMaterialKey = "LIGHT_BLUE_DYE",
                  itemDisplayName = "恵みの雨粒",
              ),
          "desert_snow" to
              ParticleEffectConfig(
                  particle = ParticlePreset.SNOWFLAKE,
                  weather = PseudoWeather.SNOW,
                  time = TimePreset.DEFAULT,
                  sound = AmbientSoundPreset.NONE,
                  density = 3,
                  itemMaterialKey = "WHITE_DYE",
                  itemDisplayName = "常冬の雪結晶",
              ),
          "storm" to
              ParticleEffectConfig(
                  particle = ParticlePreset.NONE,
                  weather = PseudoWeather.STORM,
                  time = TimePreset.NIGHT,
                  sound = AmbientSoundPreset.RAIN_AND_THUNDER,
                  density = 4,
                  itemMaterialKey = "GRAY_DYE",
                  itemDisplayName = "嵐夜のオーブ",
              ),
          "night_stars" to
              ParticleEffectConfig(
                  particle = ParticlePreset.END_ROD,
                  weather = PseudoWeather.NONE,
                  time = TimePreset.NIGHT,
                  sound = AmbientSoundPreset.NONE,
                  density = 2,
                  itemMaterialKey = "BLUE_DYE",
                  itemDisplayName = "星空の染料",
              ),
          "sunset_firefly" to
              ParticleEffectConfig(
                  particle = ParticlePreset.HAPPY_VILLAGER,
                  weather = PseudoWeather.NONE,
                  time = TimePreset.SUNSET,
                  sound = AmbientSoundPreset.NONE,
                  density = 2,
                  itemMaterialKey = "LIME_DYE",
                  itemDisplayName = "夕暮れの蛍粉",
              ),
          "crimson" to
              ParticleEffectConfig(
                  particle = ParticlePreset.CRIMSON_SPORE,
                  weather = PseudoWeather.NONE,
                  time = TimePreset.DEFAULT,
                  sound = AmbientSoundPreset.CRIMSON_FOREST,
                  density = 3,
                  itemMaterialKey = "RED_DYE",
                  itemDisplayName = "真紅の胞子粉",
              ),
          "warped" to
              ParticleEffectConfig(
                  particle = ParticlePreset.WARPED_SPORE,
                  weather = PseudoWeather.NONE,
                  time = TimePreset.DEFAULT,
                  sound = AmbientSoundPreset.SOUL_SAND_VALLEY,
                  density = 3,
                  itemMaterialKey = "CYAN_DYE",
                  itemDisplayName = "歪んだ胞子粉",
              ),
          "ash" to
              ParticleEffectConfig(
                  particle = ParticlePreset.ASH,
                  weather = PseudoWeather.NONE,
                  time = TimePreset.DEFAULT,
                  sound = AmbientSoundPreset.CAVE,
                  density = 3,
                  itemMaterialKey = "LIGHT_GRAY_DYE",
                  itemDisplayName = "火山灰の粉",
              ),
      )

  fun find(key: String): ParticleEffectConfig? = presets[key.lowercase()]
}

fun resolveMaterialSafely(key: String, fallbackKey: String): Material {
  val resolved = runCatching { Material.valueOf(key) }.getOrNull()
  if (resolved != null && !resolved.isAir) return resolved
  return runCatching { Material.valueOf(fallbackKey) }.getOrDefault(Material.PAPER)
}

/** 空間適用アイテムとして安全な非設置素材へ解決する。 */
fun resolveNonPlaceableMaterial(key: String): Material {
  val resolved = runCatching { Material.valueOf(key) }.getOrNull()
  if (resolved != null && !resolved.isAir && !resolved.isBlock) {
    return resolved
  }
  return Material.PINK_DYE
}

fun resolveSoundByKey(minecraftKey: String): Sound? {
  return runCatching {
        RegistryAccess.registryAccess()
            .getRegistry(RegistryKey.SOUND_EVENT)
            .get(NamespacedKey.minecraft(minecraftKey))
      }
      .getOrNull()
}
