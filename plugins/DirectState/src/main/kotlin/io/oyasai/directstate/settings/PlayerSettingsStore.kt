package io.oyasai.directstate.settings

import io.oyasai.directstate.edit.replace.TypeReplaceMode
import java.io.File
import java.sql.Connection
import java.sql.DriverManager
import java.sql.SQLException
import java.util.UUID
import java.util.logging.Logger

// AI生成
/** プレイヤー設定をメモリで保持し、変更のたびにSQLiteへ保存する。 */
internal class PlayerSettingsStore(private val dataFolder: File, private val logger: Logger) {
  private val file = File(dataFolder, "users.db")
  private val users = mutableMapOf<UUID, PlayerSettings>()
  private lateinit var connection: Connection

  /** データベースを開き、現行形式の表を用意して全プレイヤー設定をメモリへ読む。 */
  fun load() {
    if (!dataFolder.exists() && !dataFolder.mkdirs()) {
      error("Could not create plugin data folder: $dataFolder")
    }
    connection = DriverManager.getConnection("jdbc:sqlite:${file.absolutePath}")
    connection.createStatement().use { statement ->
      statement.execute("PRAGMA busy_timeout = 5000")
      statement.execute(
          """
          CREATE TABLE IF NOT EXISTS player_settings (
              uuid TEXT PRIMARY KEY NOT NULL,
              hand_enabled INTEGER NOT NULL DEFAULT 0,
              update_enabled INTEGER NOT NULL DEFAULT 0,
              replacement_enabled INTEGER NOT NULL DEFAULT 0,
              type_replacement_mode TEXT NOT NULL DEFAULT 'OFF',
              itemless_modes_disabled INTEGER NOT NULL DEFAULT 0
          )
          """
              .trimIndent()
      )
    }
    users.clear()
    connection
        .prepareStatement(
            "SELECT uuid, hand_enabled, update_enabled, replacement_enabled, type_replacement_mode, " +
                "itemless_modes_disabled " +
                "FROM player_settings"
        )
        .use { statement ->
          statement.executeQuery().use { rows ->
            while (rows.next()) {
              val uuid =
                  runCatching { UUID.fromString(rows.getString("uuid")) }.getOrNull() ?: continue
              users[uuid] =
                  PlayerSettings(
                      handEnabled = rows.getInt("hand_enabled") != 0,
                      updateEnabled = rows.getInt("update_enabled") != 0,
                      replacementEnabled = rows.getInt("replacement_enabled") != 0,
                      typeReplacementMode =
                          TypeReplaceMode.parse(rows.getString("type_replacement_mode"))
                              ?: TypeReplaceMode.OFF,
                      itemlessModesDisabled = rows.getInt("itemless_modes_disabled") != 0,
                  )
            }
          }
        }
  }

  /** 設定を返す。初回のプレイヤーには既定値を作る。 */
  fun get(uuid: UUID): PlayerSettings = users.getOrPut(uuid) { PlayerSettings() }

  /** 設定のコピーを保存してからメモリへ反映する。保存失敗時は現在値を保つ。 */
  fun update(uuid: UUID, change: (PlayerSettings) -> Unit) {
    val changed = get(uuid).copy()
    change(changed)
    persist(uuid, changed)
    users[uuid] = changed
  }

  /** 開いているSQLite接続を安全に閉じる。未初期化なら何もしない。 */
  fun close() {
    if (::connection.isInitialized) {
      try {
        connection.close()
      } catch (error: SQLException) {
        logger.warning("Could not close player settings database: ${error.message}")
      }
    }
  }

  /** 一人分の現在設定をINSERTまたはUPDATEで保存する。 */
  private fun persist(uuid: UUID, settings: PlayerSettings) {
    connection
        .prepareStatement(
            """
            INSERT INTO player_settings
                (uuid, hand_enabled, update_enabled, replacement_enabled, type_replacement_mode, itemless_modes_disabled)
            VALUES (?, ?, ?, ?, ?, ?)
            ON CONFLICT(uuid) DO UPDATE SET
                hand_enabled = excluded.hand_enabled,
                update_enabled = excluded.update_enabled,
                replacement_enabled = excluded.replacement_enabled,
                type_replacement_mode = excluded.type_replacement_mode,
                itemless_modes_disabled = excluded.itemless_modes_disabled
            """
                .trimIndent()
        )
        .use { statement ->
          statement.setString(1, uuid.toString())
          statement.setInt(2, if (settings.handEnabled) 1 else 0)
          statement.setInt(3, if (settings.updateEnabled) 1 else 0)
          statement.setInt(4, if (settings.replacementEnabled) 1 else 0)
          statement.setString(5, settings.typeReplacementMode.name)
          statement.setInt(6, if (settings.itemlessModesDisabled) 1 else 0)
          statement.executeUpdate()
        }
  }
}
