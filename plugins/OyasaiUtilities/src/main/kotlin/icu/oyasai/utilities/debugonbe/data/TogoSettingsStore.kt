package icu.oyasai.utilities.debugonbe.data

import icu.oyasai.utilities.debugonbe.model.BlockShape
import icu.oyasai.utilities.debugonbe.model.TogoSettings
import icu.oyasai.utilities.debugonbe.model.TogoSettingsLimits
import java.io.File
import java.io.IOException
import java.util.UUID
import java.util.logging.Level
import org.bukkit.Material
import org.bukkit.configuration.file.YamlConfiguration
import org.bukkit.plugin.Plugin

/**
 * ユーザーごとのTogo設定をYAMLファイルに保存する。
 *
 * 全体設定を追加する場合は、同じファイルの `global` セクションへ分離して保存できる。
 */
class TogoSettingsStore(private val plugin: Plugin) {

  private val file = File(plugin.dataFolder, "togo-settings.yml")
  private val userSettingsByPlayer: MutableMap<UUID, TogoUserSettings> = mutableMapOf()

  init {
    load()
  }

  /** 保存済みのユーザー設定を取得する。未保存のプレイヤーにはデフォルト設定を返す。 */
  fun getUser(playerUuid: UUID): TogoUserSettings {
    return userSettingsByPlayer[playerUuid] ?: TogoUserSettings()
  }

  /** ユーザー設定をメモリとファイルへ反映する。 */
  fun setUser(playerUuid: UUID, settings: TogoUserSettings) {
    userSettingsByPlayer[playerUuid] = settings
    save()
  }

  /** 現在の設定をファイルへ保存する。 */
  fun save() {
    val yaml = YamlConfiguration()
    yaml.set("version", 1)
    userSettingsByPlayer.forEach { (playerUuid, settings) ->
      val path = "users.$playerUuid"
      val togoSettings = settings.togoSettings

      togoSettings.enabledShapes?.let { shapes ->
        yaml.set("$path.enabledShapes", shapes.map { it.name.lowercase() })
      }
      yaml.set("$path.maxBlocks", togoSettings.maxBlocks)
      yaml.set("$path.radius", togoSettings.radius)
      yaml.set("$path.durationSeconds", togoSettings.durationSeconds)
      if (!settings.replacementMaterial.isAir) {
        yaml.set("$path.replacementMaterial", settings.replacementMaterial.name.lowercase())
      }
    }

    try {
      yaml.save(file)
    } catch (exception: IOException) {
      plugin.logger.log(Level.SEVERE, "[DOB] Togo設定の保存に失敗しました。", exception)
    }
  }

  private fun load() {
    if (!file.exists()) return

    val yaml = YamlConfiguration.loadConfiguration(file)
    val players = yaml.getConfigurationSection("users") ?: return
    players.getKeys(false).forEach { rawUuid ->
      val playerUuid = runCatching { UUID.fromString(rawUuid) }.getOrNull() ?: return@forEach
      val path = "users.$rawUuid"
      userSettingsByPlayer[playerUuid] =
          TogoUserSettings(
              togoSettings = loadTogoSettings(yaml, path),
              replacementMaterial =
                  loadReplacementMaterial(yaml.getString("$path.replacementMaterial")),
          )
    }
  }

  private fun loadTogoSettings(yaml: YamlConfiguration, path: String): TogoSettings {
    val enabledShapes =
        if (yaml.contains("$path.enabledShapes")) {
          yaml.getStringList("$path.enabledShapes").mapNotNull { BlockShape.fromString(it) }.toSet()
        } else {
          null
        }

    return TogoSettings(
        enabledShapes = enabledShapes,
        maxBlocks =
            yaml
                .getInt("$path.maxBlocks", TogoSettingsLimits.DEFAULT_MAX_BLOCKS)
                .coerceIn(TogoSettingsLimits.MIN_MAX_BLOCKS, TogoSettingsLimits.MAX_MAX_BLOCKS),
        radius =
            yaml
                .getInt("$path.radius", TogoSettingsLimits.DEFAULT_RADIUS)
                .coerceIn(TogoSettingsLimits.MIN_RADIUS, TogoSettingsLimits.MAX_RADIUS),
        durationSeconds =
            yaml
                .getInt("$path.durationSeconds", TogoSettingsLimits.DEFAULT_DURATION_SECONDS)
                .coerceIn(
                    TogoSettingsLimits.MIN_DURATION_SECONDS,
                    TogoSettingsLimits.MAX_DURATION_SECONDS,
                ),
    )
  }

  private fun loadReplacementMaterial(rawName: String?): Material {
    val materialName = rawName?.removePrefix("minecraft:") ?: return Material.AIR
    val material = Material.matchMaterial(materialName.uppercase())
    return material?.takeIf { it.isBlock } ?: Material.AIR
  }
}

/** ユーザー単位のTogo設定と、DebugOnBE表示時のフェイクブロック置き換え先。 */
data class TogoUserSettings(
    val togoSettings: TogoSettings = TogoSettings(),
    val replacementMaterial: Material = Material.AIR,
)
