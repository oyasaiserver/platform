package io.oyasai.oyasaitab

import java.io.ByteArrayInputStream
import java.io.ByteArrayOutputStream
import java.io.DataInputStream
import java.io.DataOutputStream
import java.util.UUID

const val OYASAI_TAB_CHANNEL = "oyasaitab:main"
const val LOCAL_TAB_ORDER_BASE = 1000

/** [nameLegacy] は Likes の `<1234>` を含まない名前。リモート表示ではプロキシが代わりに所属サーバー名を 前に付けるため、バックエンドはバッジ抜きで送る。 */
data class OyasaiTabPlayerSnapshot(
    val uuid: UUID,
    val nameLegacy: String,
    val serverName: String,
    val ping: Int,
)

data class OyasaiTabSnapshot(val serverName: String, val players: List<OyasaiTabPlayerSnapshot>)

object OyasaiTabSnapshotCodec {
  private const val VERSION = 2
  private const val MAX_PLAYERS = 1000

  fun encode(snapshot: OyasaiTabSnapshot): ByteArray {
    require(snapshot.players.size <= MAX_PLAYERS) { "OyasaiTab snapshot has too many players." }
    val bytes = ByteArrayOutputStream()
    DataOutputStream(bytes).use { out ->
      out.writeByte(VERSION)
      out.writeUTF(snapshot.serverName)
      out.writeShort(snapshot.players.size)
      snapshot.players.forEach { player ->
        out.writeLong(player.uuid.mostSignificantBits)
        out.writeLong(player.uuid.leastSignificantBits)
        out.writeUTF(player.nameLegacy)
        out.writeUTF(player.serverName)
        out.writeInt(player.ping)
      }
    }
    return bytes.toByteArray()
  }

  fun decode(bytes: ByteArray): OyasaiTabSnapshot =
      DataInputStream(ByteArrayInputStream(bytes)).use { input ->
        require(input.readUnsignedByte() == VERSION) { "Unsupported OyasaiTab snapshot version." }
        val serverName = input.readUTF()
        val count = input.readUnsignedShort()
        require(count <= MAX_PLAYERS) { "OyasaiTab snapshot has too many players." }
        val players =
            List(count) {
              OyasaiTabPlayerSnapshot(
                  uuid = UUID(input.readLong(), input.readLong()),
                  nameLegacy = input.readUTF(),
                  serverName = input.readUTF(),
                  ping = input.readInt().coerceAtLeast(0),
              )
            }
        OyasaiTabSnapshot(serverName, players)
      }
}

data class CrossServerTabEntry(
    val uuid: UUID,
    val nameLegacy: String,
    val serverName: String,
    val ping: Int,
)

data class CrossServerTabDiff(
    val remove: Set<UUID>,
    val forget: Set<UUID>,
    val upsert: List<CrossServerTabEntry>,
)

object CrossServerTabLogic {
  /**
   * リモートのプレイヤーは Likes の代わりに所属サーバー名を出す。ローカル勢の `<1234> Steve` に対して `<Lobby> Steve` になる。
   *
   * ラベルはバックエンド ID の先頭を大文字にしただけ（`lobby` → `Lobby`）。 ponytail: 表示名を ID から機械的に作る。日本語名など ID
   * と別の表記が要るようになったら設定に出す。
   */
  fun remoteDisplayNameLegacy(serverName: String, nameLegacy: String): String =
      "§7<§6${serverLabel(serverName)}§7>§f $nameLegacy"

  private fun serverLabel(serverName: String): String =
      serverName.replaceFirstChar { it.uppercase() }

  fun remoteOrders(entries: Collection<CrossServerTabEntry>): Map<UUID, Int> =
      entries
          .sortedWith(
              compareBy<CrossServerTabEntry, String>(String.CASE_INSENSITIVE_ORDER) {
                    it.serverName
                  }
                  .thenBy(String.CASE_INSENSITIVE_ORDER) { it.nameLegacy }
                  .thenBy { it.uuid.toString() }
          )
          .take(999)
          .mapIndexed { index, entry -> entry.uuid to 999 - index }
          .toMap()

  fun diffForViewer(
      viewerId: UUID,
      viewerServer: String,
      managedEntries: Set<UUID>,
      records: Collection<CrossServerTabEntry>,
      connectedPlayerServers: Map<UUID, String>,
  ): CrossServerTabDiff {
    val remote =
        records
            .filter { it.serverName != viewerServer && it.uuid in connectedPlayerServers }
            .filter { it.uuid != viewerId && connectedPlayerServers[it.uuid] != viewerServer }
            .distinctBy { it.uuid }
    val remoteIds = remote.mapTo(mutableSetOf()) { it.uuid }
    val forget =
        managedEntries.filterTo(mutableSetOf()) { connectedPlayerServers[it] == viewerServer }
    return CrossServerTabDiff(
        remove = managedEntries - remoteIds - forget,
        forget = forget,
        upsert = remote,
    )
  }

  fun shouldRemoveOnDisconnect(uuid: UUID, connectedPlayers: Set<UUID>): Boolean =
      uuid !in connectedPlayers
}
