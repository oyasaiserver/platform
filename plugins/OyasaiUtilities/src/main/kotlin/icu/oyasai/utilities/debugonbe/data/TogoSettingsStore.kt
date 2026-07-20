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
 * ユーザーごとのTogo設定と、全体設定をYAMLファイルに保存する。
 *
 * `DebugOnBE/togo-global.yml` と `DebugOnBE/togo-users.yml` に分けて管理する。
 */
class TogoSettingsStore(private val plugin: Plugin) {

  private val debugOnBeDataFolder = File(plugin.dataFolder, "DebugOnBE")
  private val globalFile = File(debugOnBeDataFolder, "togo-global.yml")
  private val usersFile = File(debugOnBeDataFolder, "togo-users.yml")
  private var globalSettings: TogoGlobalSettings = TogoGlobalSettings()
  private val userSettingsByPlayer: MutableMap<UUID, TogoUserSettings> = mutableMapOf()

  init {
    debugOnBeDataFolder.mkdirs()
    TogoSettingsLimits.applyGlobalLimits(
        maxBlocks = TogoSettingsLimits.DEFAULT_MAX_MAX_BLOCKS,
        radius = TogoSettingsLimits.HARD_MAX_RADIUS,
        durationSeconds = TogoSettingsLimits.HARD_MAX_DURATION_SECONDS,
    )
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

  /** 保存済みの全体設定を取得する。 */
  fun getGlobal(): TogoGlobalSettings = globalSettings

  /** 全体設定をメモリとファイルへ反映する。 */
  fun setGlobal(settings: TogoGlobalSettings) {
    globalSettings = normalizeGlobalSettings(settings)
    TogoSettingsLimits.applyGlobalLimits(
        maxBlocks = globalSettings.maxBlocksLimit,
        radius = globalSettings.radiusLimit,
        durationSeconds = globalSettings.durationSecondsLimit,
    )
    save()
  }

  /** 現在の設定をファイルへ保存する。 */
  fun save() {
    val globalYaml = YamlConfiguration()
    globalYaml.set("version", 1)
    globalYaml.set(
        "replacementMaterial",
        globalSettings.replacementMaterial.name.lowercase(),
    )
    globalYaml.set("limits.maxBlocks", globalSettings.maxBlocksLimit)
    globalYaml.set("limits.radius", globalSettings.radiusLimit)
    globalYaml.set("limits.durationSeconds", globalSettings.durationSecondsLimit)

    val usersYaml = YamlConfiguration()
    usersYaml.set("version", 1)
    userSettingsByPlayer.forEach { (playerUuid, settings) ->
      val path = "users.$playerUuid"
      val togoSettings = settings.togoSettings

      togoSettings.enabledShapes?.let { shapes ->
        usersYaml.set("$path.enabledShapes", shapes.map { it.name.lowercase() })
      }
      usersYaml.set("$path.maxBlocks", togoSettings.maxBlocks)
      usersYaml.set("$path.radius", togoSettings.radius)
      usersYaml.set("$path.durationSeconds", togoSettings.durationSeconds)
      usersYaml.set("$path.debugStickAutoEnabled", settings.debugStickAutoEnabled)
    }

    saveFile(globalFile, globalYaml)
    saveFile(usersFile, usersYaml)
  }

  private fun saveFile(file: File, yaml: YamlConfiguration) {
    try {
      yaml.save(file)
    } catch (exception: IOException) {
      plugin.logger.log(Level.SEVERE, "[DOB] Togo設定の保存に失敗しました: ${file.name}", exception)
    }
  }

  private fun load() {
    val globalYaml =
        globalFile.takeIf { it.exists() }?.let { YamlConfiguration.loadConfiguration(it) }
            ?: YamlConfiguration()
    val usersYaml =
        usersFile.takeIf { it.exists() }?.let { YamlConfiguration.loadConfiguration(it) }
            ?: YamlConfiguration()

    globalSettings = loadGlobalSettings(globalYaml)
    TogoSettingsLimits.applyGlobalLimits(
        maxBlocks = globalSettings.maxBlocksLimit,
        radius = globalSettings.radiusLimit,
        durationSeconds = globalSettings.durationSecondsLimit,
    )

    loadUsers(usersYaml)
  }

  private fun loadUsers(yaml: YamlConfiguration) {
    val players = yaml.getConfigurationSection("users") ?: return
    players.getKeys(false).forEach { rawUuid ->
      val playerUuid = runCatching { UUID.fromString(rawUuid) }.getOrNull() ?: return@forEach
      val path = "users.$rawUuid"
      userSettingsByPlayer[playerUuid] =
          TogoUserSettings(
              togoSettings = loadTogoSettings(yaml, path),
              debugStickAutoEnabled = yaml.getBoolean("$path.debugStickAutoEnabled", false),
          )
    }
  }

  private fun loadGlobalSettings(yaml: YamlConfiguration): TogoGlobalSettings {
    val replacementMaterial = loadReplacementMaterial(yaml.getString("replacementMaterial"))
    return normalizeGlobalSettings(
        TogoGlobalSettings(
            replacementMaterial = replacementMaterial,
            maxBlocksLimit =
                yaml
                    .getInt(
                        "limits.maxBlocks",
                        TogoSettingsLimits.DEFAULT_MAX_MAX_BLOCKS,
                    )
                    .coerceIn(
                        TogoSettingsLimits.MIN_MAX_BLOCKS,
                        TogoSettingsLimits.HARD_MAX_MAX_BLOCKS,
                    ),
            radiusLimit =
                yaml
                    .getInt("limits.radius", TogoSettingsLimits.HARD_MAX_RADIUS)
                    .coerceIn(TogoSettingsLimits.MIN_RADIUS, TogoSettingsLimits.HARD_MAX_RADIUS),
            durationSecondsLimit =
                yaml
                    .getInt(
                        "limits.durationSeconds",
                        TogoSettingsLimits.HARD_MAX_DURATION_SECONDS,
                    )
                    .coerceIn(
                        TogoSettingsLimits.MIN_DURATION_SECONDS,
                        TogoSettingsLimits.HARD_MAX_DURATION_SECONDS,
                    ),
        )
    )
  }

  private fun normalizeGlobalSettings(settings: TogoGlobalSettings): TogoGlobalSettings {
    return settings.copy(
        maxBlocksLimit =
            settings.maxBlocksLimit.coerceIn(
                TogoSettingsLimits.MIN_MAX_BLOCKS,
                TogoSettingsLimits.HARD_MAX_MAX_BLOCKS,
            ),
        radiusLimit =
            settings.radiusLimit.coerceIn(
                TogoSettingsLimits.MIN_RADIUS,
                TogoSettingsLimits.HARD_MAX_RADIUS,
            ),
        durationSecondsLimit =
            settings.durationSecondsLimit.coerceIn(
                TogoSettingsLimits.MIN_DURATION_SECONDS,
                TogoSettingsLimits.HARD_MAX_DURATION_SECONDS,
            ),
    )
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

/** 全プレイヤーに適用するTogo設定。 */
data class TogoGlobalSettings(
    val replacementMaterial: Material = Material.AIR,
    val maxBlocksLimit: Int = TogoSettingsLimits.DEFAULT_MAX_MAX_BLOCKS,
    val radiusLimit: Int = TogoSettingsLimits.HARD_MAX_RADIUS,
    val durationSecondsLimit: Int = TogoSettingsLimits.HARD_MAX_DURATION_SECONDS,
)

/** ユーザー単位のTogo設定。 */
data class TogoUserSettings(
    val togoSettings: TogoSettings = TogoSettings(),
    val debugStickAutoEnabled: Boolean = false,
)
