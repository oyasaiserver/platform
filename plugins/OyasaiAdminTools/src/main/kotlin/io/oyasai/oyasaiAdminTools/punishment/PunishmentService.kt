package io.oyasai.oyasaiAdminTools.punishment

import io.oyasai.oyasaiAdminTools.OyasaiAdminTools
import io.oyasai.oyasaiAdminTools.discord.SendEmbedMessage
import io.oyasai.oyasaiAdminTools.punishment.PunishmentStore.Companion.BAN_TYPES
import io.oyasai.oyasaiAdminTools.utils.DateTimeUtils
import io.oyasai.oyasaiAdminTools.utils.PlayerUtils
import java.io.File
import java.util.UUID
import java.util.logging.Level
import net.kyori.adventure.text.serializer.legacy.LegacyComponentSerializer
import org.bukkit.Bukkit
import org.bukkit.OfflinePlayer
import org.bukkit.Sound
import org.bukkit.configuration.ConfigurationSection

object PunishmentService {
  const val META_IMPORT = "advancedban_import"
  private val legacy = LegacyComponentSerializer.legacySection()

  val defaultMuteCommands = MuteCommands.DEFAULT
  val defaultWarnActions =
      mapOf(
          3 to "kick",
          4 to "tempban 30m",
          5 to "tempban 5h",
          6 to "tempban 7d",
          7 to "tempban 1mo",
          10 to "ban",
      )

  lateinit var store: PunishmentStore
    private set

  fun init(plugin: OyasaiAdminTools) {
    plugin.dataFolder.mkdirs()
    store = PunishmentStore(File(plugin.dataFolder, "punishments.db"))
    store.open()
    importAdvancedBan(plugin)
  }

  fun shutdown() {
    if (::store.isInitialized) store.close()
  }

  fun muteCommands(): List<String> {
    val plugin = OyasaiAdminTools.plugin
    return if (plugin.config.contains("punishment.mute-commands")) {
      plugin.config.getStringList("punishment.mute-commands")
    } else {
      defaultMuteCommands
    }
  }

  fun warnActions(): Map<Int, WarnAction> {
    val plugin = OyasaiAdminTools.plugin
    val section: ConfigurationSection? =
        plugin.config.getConfigurationSection("punishment.warn-actions")
    val raw =
        if (section != null) {
          section.getKeys(false).mapNotNull { key ->
            val count = key.toIntOrNull() ?: return@mapNotNull null
            val value = section.getString(key) ?: return@mapNotNull null
            count to value
          }
        } else {
          defaultWarnActions.entries.map { it.key to it.value }
        }
    return raw.mapNotNull { (count, value) -> WarnActionParser.parse(value)?.let { count to it } }
        .toMap()
  }

  fun resolveTarget(name: String): Pair<UUID, String> {
    val online = Bukkit.getPlayerExact(name)
    if (online != null) return online.uniqueId to online.name
    val uuid = PlayerUtils.resolveUUID(name) ?: Bukkit.getOfflinePlayer(name).uniqueId
    return uuid to name
  }

  fun activeBan(uuid: UUID): PunishmentRecord? = store.findActive(uuid, BAN_TYPES)

  fun activeMute(uuid: UUID): PunishmentRecord? = store.findActive(uuid, setOf(PunishmentType.MUTE))

  fun ban(
      targetName: String,
      duration: PunishmentDuration,
      reason: String,
      operator: String,
      announce: Boolean,
  ): PunishmentRecord {
    val (uuid, name) = resolveTarget(targetName)
    val now = System.currentTimeMillis()
    val end =
        when (duration) {
          is PunishmentDuration.Permanent -> null
          is PunishmentDuration.Temporary -> now + duration.millis
        }
    val type = if (end == null) PunishmentType.BAN else PunishmentType.TEMPBAN
    val record =
        store.insert(
            PunishmentRecord(
                uuid = uuid,
                name = name,
                type = type,
                reason = reason,
                operator = operator,
                start = now,
                end = end,
                active = true,
            )
        )
    kickOnline(uuid, banKickMessage(record))
    if (announce) {
      val durationLabel = DurationParser.label(duration, durationLabelFromEnd(now, end))
      announceBan(name, operator, reason, durationLabel)
    }
    return record
  }

  fun mute(
      targetName: String,
      duration: PunishmentDuration,
      reason: String,
      operator: String,
  ): PunishmentRecord {
    val (uuid, name) = resolveTarget(targetName)
    val now = System.currentTimeMillis()
    val end =
        when (duration) {
          is PunishmentDuration.Permanent -> null
          is PunishmentDuration.Temporary -> now + duration.millis
        }
    return store.insert(
        PunishmentRecord(
            uuid = uuid,
            name = name,
            type = PunishmentType.MUTE,
            reason = reason,
            operator = operator,
            start = now,
            end = end,
            active = true,
        )
    )
  }

  fun warn(targetName: String, reason: String, operator: String): Pair<PunishmentRecord, Int> {
    val (uuid, name) = resolveTarget(targetName)
    val now = System.currentTimeMillis()
    val record =
        store.insert(
            PunishmentRecord(
                uuid = uuid,
                name = name,
                type = PunishmentType.WARN,
                reason = reason,
                operator = operator,
                start = now,
                end = null,
                active = true,
            )
        )
    val count = store.countByType(uuid, PunishmentType.WARN)
    applyWarnAction(name, uuid, reason, operator, count)
    return record to count
  }

  fun kick(target: OfflinePlayer, reason: String, operator: String) {
    val now = System.currentTimeMillis()
    store.insert(
        PunishmentRecord(
            uuid = target.uniqueId,
            name = target.name ?: target.uniqueId.toString(),
            type = PunishmentType.KICK,
            reason = reason,
            operator = operator,
            start = now,
            end = null,
            active = false,
        )
    )
    val player = target.player ?: Bukkit.getPlayer(target.uniqueId)
    player?.kick(legacy.deserialize("§cサーバーからキックされました。\n§f理由: $reason"))
  }

  fun unban(name: String): Int {
    val (uuid, _) = resolveTarget(name)
    val byUuid = store.deactivate(uuid, BAN_TYPES)
    if (byUuid > 0) return byUuid
    return store.deactivateByName(name, BAN_TYPES)
  }

  fun unmute(name: String): Int {
    val (uuid, _) = resolveTarget(name)
    val byUuid = store.deactivate(uuid, setOf(PunishmentType.MUTE))
    if (byUuid > 0) return byUuid
    return store.deactivateByName(name, setOf(PunishmentType.MUTE))
  }

  fun history(name: String): List<PunishmentRecord> {
    val uuid = runCatching { resolveTarget(name).first }.getOrNull()
    return store.history(name, uuid)
  }

  fun warnHistory(name: String): Pair<Int, List<PunishmentRecord>> {
    val rows = history(name).filter { it.type == PunishmentType.WARN }
    return rows.size to rows
  }

  fun banKickMessage(record: PunishmentRecord): String {
    val until = formatEnd(record.end)
    return "§cあなたはBANされています。\n§f理由: ${record.reason}\n§f解除: $until"
  }

  fun muteDenyMessage(record: PunishmentRecord): String {
    return "§cあなたはミュートされています。§7(${formatEnd(record.end)})"
  }

  fun isMutedCommand(message: String, commands: List<String> = muteCommands()): Boolean {
    return MuteCommands.isMuted(message, commands)
  }

  private fun applyWarnAction(
      name: String,
      uuid: UUID,
      reason: String,
      operator: String,
      count: Int,
  ) {
    val action = warnActions()[count] ?: return
    val warnReason = "警告${count}回: $reason"
    when (action) {
      is WarnAction.Kick -> {
        val player = Bukkit.getPlayer(uuid)
        if (player != null) {
          kick(player, warnReason, operator)
        }
      }
      is WarnAction.Ban -> ban(name, action.duration, warnReason, operator, announce = true)
    }
  }

  private fun announceBan(targetName: String, operator: String, reason: String, duration: String) {
    SendEmbedMessage.sendBanNotification(targetName, operator, reason, duration)
    Bukkit.getOnlinePlayers().forEach { player ->
      player.playSound(player.eyeLocation, Sound.ITEM_MACE_SMASH_GROUND_HEAVY, 0.5f, 2.0f)
      player.sendMessage("§4§l[ＢＡＮ] §f§l$targetName §fが§c§lBAN§fされました。")
    }
  }

  private fun kickOnline(uuid: UUID, message: String) {
    Bukkit.getPlayer(uuid)?.kick(legacy.deserialize(message))
  }

  fun formatEnd(end: Long?): String {
    if (end == null) return "永久"
    return DateTimeUtils.formatToString(DateTimeUtils.unixToJST(end))
  }

  private fun durationLabelFromEnd(start: Long, end: Long?): String {
    if (end == null) return "永久"
    val millis = (end - start).coerceAtLeast(0)
    val seconds = millis / 1000
    val minutes = seconds / 60
    val hours = minutes / 60
    val days = hours / 24
    return when {
      days > 0 && days % 30 == 0L -> "${days / 30}mo"
      days > 0 && days % 7 == 0L -> "${days / 7}w"
      days > 0 -> "${days}d"
      hours > 0 -> "${hours}h"
      minutes > 0 -> "${minutes}m"
      else -> "${seconds}s"
    }
  }

  fun importAdvancedBan(plugin: OyasaiAdminTools) {
    if (store.getMeta(META_IMPORT) == "done") return
    try {
      val imported = loadImportBatch(plugin)
      if (imported == null) {
        plugin.logger.info(
            "AdvancedBan のデータが見つかりませんでした。必要なら plugins/OyasaiAdminTools/import/advancedban.yml または advancedban.csv を置いて再起動してください。"
        )
        return
      }
      var count = 0
      val now = System.currentTimeMillis()
      for (row in imported.history + imported.active) {
        val expired = row.end != null && row.end <= now
        store.insertImported(
            PunishmentRecord(
                uuid = row.uuid,
                name = row.name,
                type = row.type,
                reason = row.reason,
                operator = row.operator,
                start = row.start,
                end = row.end,
                active = row.active && !expired,
            )
        )
        count++
      }
      store.setMeta(META_IMPORT, "done")
      plugin.logger.info("AdvancedBan から ${count} 件の処罰を取り込みました。")
    } catch (error: Exception) {
      plugin.logger.log(Level.WARNING, "AdvancedBan からの取り込みに失敗しました。起動は継続します。", error)
    }
  }

  private fun loadImportBatch(plugin: OyasaiAdminTools): ImportBatch? {
    val configured = plugin.config.getString("punishment.advancedban-script").orEmpty()
    val scriptCandidates =
        listOf(
            configured.takeIf { it.isNotBlank() }?.let { File(it) },
            plugin.dataFolder.parentFile?.resolve("AdvancedBan/data/storage.script"),
        )
    for (file in scriptCandidates.filterNotNull()) {
      if (file.isFile) {
        plugin.logger.info("AdvancedBan HSQLDB script を読みます: ${file.absolutePath}")
        return AdvancedBanImporter.parseHsqldbScript(file.readText())
      }
    }

    val importDir = File(plugin.dataFolder, "import")
    val yaml = File(importDir, "advancedban.yml")
    if (yaml.isFile) {
      return yamlToBatch(plugin, yaml)
    }
    val csv = File(importDir, "advancedban.csv")
    if (csv.isFile) {
      val rows = AdvancedBanImporter.parseCsv(csv.readText())
      return ImportBatch(history = rows.filter { !it.active }, active = rows.filter { it.active })
    }
    return null
  }

  private fun yamlToBatch(plugin: OyasaiAdminTools, file: File): ImportBatch {
    val yaml = org.bukkit.configuration.file.YamlConfiguration.loadConfiguration(file)
    val rows =
        yaml.getMapList("punishments").mapNotNull { raw ->
          val map = raw.mapKeys { it.key.toString().lowercase() }
          val type =
              PunishmentType.fromAdvancedBan(map["type"]?.toString() ?: return@mapNotNull null)
                  ?: return@mapNotNull null
          val uuid =
              AdvancedBanImporter.parseUuid(map["uuid"]?.toString() ?: return@mapNotNull null)
                  ?: return@mapNotNull null
          val endValue = map["end"]
          val end =
              when (endValue) {
                null -> null
                is Number -> endValue.toLong().takeIf { it >= 0 }
                else -> endValue.toString().toLongOrNull()?.takeIf { it >= 0 }
              }
          ImportedPunishment(
              uuid = uuid,
              name = map["name"]?.toString() ?: "unknown",
              type = type,
              reason = map["reason"]?.toString() ?: "none",
              operator = map["operator"]?.toString() ?: "CONSOLE",
              start =
                  (map["start"] as? Number)?.toLong()
                      ?: map["start"]?.toString()?.toLongOrNull()
                      ?: return@mapNotNull null,
              end = end,
              active =
                  map["active"]?.toString()?.toBooleanStrictOrNull() ?: (map["active"] == true),
          )
        }
    plugin.logger.info("AdvancedBan YAML dump を読みます: ${file.absolutePath}")
    return ImportBatch(history = rows.filter { !it.active }, active = rows.filter { it.active })
  }
}

private fun String.toBooleanStrictOrNull(): Boolean? =
    when (lowercase()) {
      "true" -> true
      "false" -> false
      else -> null
    }
