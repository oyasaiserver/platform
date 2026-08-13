package com.github.sahyuya.oyasaiMusic.db

import com.github.sahyuya.oyasaiMusic.model.Playlist
import com.github.sahyuya.oyasaiMusic.model.Song
import com.github.sahyuya.oyasaiMusic.model.SongStatus
import com.github.sahyuya.oyasaiMusic.util.UuidUtil
import java.sql.ResultSet
import java.sql.Statement
import java.util.UUID

/**
 * playlists / playlist_songs テーブルへのアクセスを担当するリポジトリ（GUIフェーズで追加）。
 * UI/UX設計書「④緑色ブロック(お気に入り＆プレイリスト)」、テーブル定義は [DatabaseManager] のコメント参照（元のデータ設計書には favorites テーブルのみが
 * 定義されており、複数プレイリストを表現するテーブルが無かったため追加）。
 *
 * 「お気に入り」自体はこのテーブルを使わず [SocialRepository] の favorites テーブルで管理する
 * （既存設計を尊重）。GUI側では「お気に入り」を特別な擬似プレイリストとして プレイリスト一覧の先頭に固定表示する。
 */
class PlaylistRepository(private val db: DatabaseManager) {

  fun create(ownerUuid: UUID, name: String): Long =
      db.transaction { conn ->
        conn
            .prepareStatement(
                "INSERT INTO playlists (owner_uuid, name, created_at) VALUES (?, ?, ?)",
                Statement.RETURN_GENERATED_KEYS,
            )
            .use { ps ->
              ps.setBytes(1, UuidUtil.toBytes(ownerUuid))
              ps.setString(2, name)
              ps.setLong(3, System.currentTimeMillis() / 1000)
              ps.executeUpdate()
              ps.generatedKeys.use { keys ->
                if (keys.next()) keys.getLong(1) else error("プレイリストIDの採番に失敗しました")
              }
            }
      }

  fun rename(id: Long, newName: String) =
      db.transaction { conn ->
        conn.prepareStatement("UPDATE playlists SET name = ? WHERE id = ?").use { ps ->
          ps.setString(1, newName)
          ps.setLong(2, id)
          ps.executeUpdate()
        }
      }

  fun delete(id: Long) =
      db.transaction { conn ->
        conn.prepareStatement("DELETE FROM playlists WHERE id = ?").use { ps ->
          ps.setLong(1, id)
          ps.executeUpdate()
        }
      }

  fun listByOwner(ownerUuid: UUID): List<Playlist> =
      db.transaction { conn ->
        conn
            .prepareStatement(
                "SELECT p.*, (SELECT COUNT(*) FROM playlist_songs ps WHERE ps.playlist_id = p.id) AS song_count " +
                    "FROM playlists p WHERE p.owner_uuid = ? ORDER BY p.created_at ASC"
            )
            .use { ps ->
              ps.setBytes(1, UuidUtil.toBytes(ownerUuid))
              ps.executeQuery().use { rs ->
                val list = mutableListOf<Playlist>()
                while (rs.next()) list += rs.toPlaylist()
                list
              }
            }
      }

  /** @return true = 新規追加できた / false = 既に登録済みだった */
  fun addSong(playlistId: Long, songId: Long): Boolean =
      db.transaction { conn ->
        val nextPosition =
            conn
                .prepareStatement(
                    "SELECT COALESCE(MAX(position), -1) + 1 FROM playlist_songs WHERE playlist_id = ?"
                )
                .use { ps ->
                  ps.setLong(1, playlistId)
                  ps.executeQuery().use { rs ->
                    rs.next()
                    rs.getInt(1)
                  }
                }
        conn
            .prepareStatement(
                "INSERT INTO playlist_songs (playlist_id, song_id, position, added_at) VALUES (?, ?, ?, ?) " +
                    "ON CONFLICT(playlist_id, song_id) DO NOTHING"
            )
            .use { ps ->
              ps.setLong(1, playlistId)
              ps.setLong(2, songId)
              ps.setInt(3, nextPosition)
              ps.setLong(4, System.currentTimeMillis() / 1000)
              ps.executeUpdate() > 0
            }
      }

  fun removeSong(playlistId: Long, songId: Long) =
      db.transaction { conn ->
        conn
            .prepareStatement("DELETE FROM playlist_songs WHERE playlist_id = ? AND song_id = ?")
            .use { ps ->
              ps.setLong(1, playlistId)
              ps.setLong(2, songId)
              ps.executeUpdate()
            }
      }

  /**
   * 指定した曲を、リスト内の任意の位置(0始まり)へ移動する （UI/UX設計書5章「並び替え(ドラッグ可)」対応。真のドラッグ操作は[PlaylistDetailScreen]側で
   * クリックによる掴み上げ/設置として実装し、ここでは全曲の位置を振り直すだけのシンプルな実装とする）。
   */
  fun reorderToPosition(playlistId: Long, songId: Long, targetIndex: Int) =
      db.transaction { conn ->
        val ordered =
            conn
                .prepareStatement(
                    "SELECT song_id FROM playlist_songs WHERE playlist_id = ? ORDER BY position ASC"
                )
                .use { ps ->
                  ps.setLong(1, playlistId)
                  ps.executeQuery().use { rs ->
                    val list = mutableListOf<Long>()
                    while (rs.next()) list += rs.getLong("song_id")
                    list
                  }
                }
                .toMutableList()

        if (!ordered.remove(songId)) return@transaction
        val insertAt = targetIndex.coerceIn(0, ordered.size)
        ordered.add(insertAt, songId)

        ordered.forEachIndexed { index, id ->
          conn
              .prepareStatement(
                  "UPDATE playlist_songs SET position = ? WHERE playlist_id = ? AND song_id = ?"
              )
              .use { ps ->
                ps.setInt(1, index)
                ps.setLong(2, playlistId)
                ps.setLong(3, id)
                ps.executeUpdate()
              }
        }
      }

  fun listSongs(playlistId: Long): List<Song> =
      db.transaction { conn ->
        conn
            .prepareStatement(
                "SELECT s.* FROM playlist_songs ps JOIN songs s ON s.id = ps.song_id " +
                    "WHERE ps.playlist_id = ? ORDER BY ps.position ASC"
            )
            .use { ps ->
              ps.setLong(1, playlistId)
              ps.executeQuery().use { rs ->
                val list = mutableListOf<Song>()
                while (rs.next()) list += rs.toSongRow()
                list
              }
            }
      }

  private fun ResultSet.toPlaylist(): Playlist =
      Playlist(
          id = getLong("id"),
          ownerUuid = UuidUtil.fromBytes(getBytes("owner_uuid")),
          name = getString("name"),
          createdAt = getLong("created_at"),
          songCount = getLong("song_count"),
      )

  private fun ResultSet.toSongRow(): Song =
      Song(
          id = getLong("id"),
          authorUuid = UuidUtil.fromBytes(getBytes("author_uuid")),
          title = getString("title"),
          createdAt = getLong("created_at"),
          bpm = getInt("bpm"),
          recordMaterial = getString("record_material"),
          price = getInt("price"),
          referenceUrl = getString("reference_url"),
          status = SongStatus.fromCode(getInt("status")),
          likes = getLong("likes"),
          views = getLong("views"),
          fileName = getString("file_name"),
          supportsPositional = getInt("supports_positional") != 0,
          published = getInt("published") != 0,
          reviewRequestedAt = getLong("review_requested_at").let { if (wasNull()) null else it },
      )
}
