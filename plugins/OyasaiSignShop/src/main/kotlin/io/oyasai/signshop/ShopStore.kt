package io.oyasai.signshop

import java.io.Closeable
import java.io.StringReader
import java.nio.file.Files
import java.nio.file.Path
import java.security.MessageDigest
import java.sql.Connection
import java.sql.DriverManager
import java.time.Instant
import org.yaml.snakeyaml.DumperOptions
import org.yaml.snakeyaml.LoaderOptions
import org.yaml.snakeyaml.Yaml
import org.yaml.snakeyaml.constructor.SafeConstructor
import org.yaml.snakeyaml.events.AliasEvent
import org.yaml.snakeyaml.events.CollectionStartEvent
import org.yaml.snakeyaml.events.NodeEvent
import org.yaml.snakeyaml.events.ScalarEvent

internal object ShopYaml {
  private fun loader() =
      Yaml(
          SafeConstructor(
              LoaderOptions().apply {
                isAllowDuplicateKeys = false
                maxAliasesForCollections = 0
                codePointLimit = 16_000_000
              }
          )
      )

  private val dumper =
      Yaml(
          DumperOptions().apply {
            defaultFlowStyle = DumperOptions.FlowStyle.BLOCK
            isPrettyFlow = true
            isAllowUnicode = true
          }
      )

  fun read(yaml: String): MutableMap<String, Any?> {
    for (event in loader().parse(StringReader(yaml))) {
      require(event !is AliasEvent && (event !is NodeEvent || event.anchor == null)) {
        "YAML の別名は使えません"
      }
      require(event !is ScalarEvent || event.tag == null) { "YAML のタグは使えません" }
      require(event !is CollectionStartEvent || event.tag == null) { "YAML のタグは使えません" }
    }
    val root = loader().load<Any>(yaml)
    require(root is Map<*, *>) { "YAML のルートがマッピングではありません" }
    return strings(root)
  }

  @Suppress("UNCHECKED_CAST")
  private fun strings(value: Map<*, *>): MutableMap<String, Any?> {
    require(value.keys.all { it is String }) { "YAML のキーは文字列が必要です" }
    return value.entries.associateTo(linkedMapOf()) { (key, item) ->
      key as String to
          when (item) {
            is Map<*, *> -> strings(item)
            is List<*> -> item.map { if (it is Map<*, *>) strings(it) else it }
            else -> item
          }
    }
  }

  fun dump(value: Map<String, Any?>): String = dumper.dump(value)
}

internal class ShopStore(path: Path, sellers: Path) : Closeable {
  private val db: Connection
  val shops = linkedMapOf<Pair<String, String>, Shop>()

  init {
    Files.createDirectories(path.parent)
    db = DriverManager.getConnection("jdbc:sqlite:$path")
    try {
      db.createStatement().use { s ->
        s.execute("PRAGMA journal_mode=WAL")
        s.execute("PRAGMA synchronous=FULL")
        s.execute("PRAGMA busy_timeout=5000")
        s.execute(
            "CREATE TABLE IF NOT EXISTS schema_meta (key TEXT PRIMARY KEY, value TEXT NOT NULL)"
        )
        s.execute(
            "CREATE TABLE IF NOT EXISTS shops (section TEXT NOT NULL CHECK(section IN ('sellers','deferred_sellers','invalid_sellers')), shop_key TEXT NOT NULL, record_yaml TEXT NOT NULL, halt_reason TEXT, updated_at INTEGER NOT NULL, PRIMARY KEY(section,shop_key))"
        )
        s.execute(
            "CREATE TABLE IF NOT EXISTS shop_transactions (id INTEGER PRIMARY KEY AUTOINCREMENT, shop_section TEXT NOT NULL, shop_key TEXT NOT NULL, kind TEXT NOT NULL CHECK(kind IN ('Buy','Sell','iBuy','iSell','Device')), player_uuid TEXT NOT NULL, owner_uuid TEXT NOT NULL, amount_yen INTEGER NOT NULL CHECK(amount_yen >= 0), status TEXT NOT NULL CHECK(status IN ('pending','success','failed','compensated','compensation_failed')), detail TEXT, started_at INTEGER NOT NULL, finished_at INTEGER, reviewed_at INTEGER, review_note TEXT)"
        )
        s.execute(
            "CREATE INDEX IF NOT EXISTS idx_shop_transactions_shop ON shop_transactions(shop_section,shop_key,id)"
        )
        s.execute(
            "CREATE INDEX IF NOT EXISTS idx_shop_transactions_status ON shop_transactions(status,reviewed_at)"
        )
      }
      val meta =
          db.createStatement().use { s ->
            s.executeQuery("SELECT count(*) FROM schema_meta").use {
              it.next()
              it.getInt(1)
            }
          }
      val rows =
          db.createStatement().use { s ->
            s.executeQuery("SELECT count(*) FROM shops").use {
              it.next()
              it.getInt(1)
            }
          }
      val txns =
          db.createStatement().use { s ->
            s.executeQuery("SELECT count(*) FROM shop_transactions").use {
              it.next()
              it.getInt(1)
            }
          }
      if (meta == 0 && rows == 0 && txns == 0) {
        if (Files.exists(sellers)) import(sellers)
        else
            transaction {
              putMeta("schema_version", "1")
              putMeta("fresh", "true")
              putMeta("source_root_yaml", ShopYaml.dump(mapOf("DataVersion" to 4)))
            }
      } else
          require(
              meta > 0 &&
                  meta("schema_version") == "1" &&
                  (meta("imported_at") != null || meta("fresh") == "true")
          ) {
            "DB が中途半端です。再移行せず点検してください"
          }
      db.createStatement().use { s ->
        s.executeQuery("SELECT section,shop_key,record_yaml,halt_reason FROM shops").use { r ->
          while (r.next()) {
            val shop =
                Shop(r.getString(1), r.getString(2), ShopYaml.read(r.getString(3)), r.getString(4))
            shops[shop.section to shop.key] = shop
          }
        }
      }
      db.createStatement().use { s ->
        s.executeQuery(
                "SELECT DISTINCT shop_section,shop_key FROM shop_transactions WHERE status IN ('pending','compensation_failed') AND reviewed_at IS NULL"
            )
            .use { r ->
              while (r.next()) shops[r.getString(1) to r.getString(2)]?.haltReason = "未照合の取引があります"
            }
      }
    } catch (e: Exception) {
      db.close()
      throw e
    }
  }

  private fun meta(key: String): String? =
      db.prepareStatement("SELECT value FROM schema_meta WHERE key=?").use { s ->
        s.setString(1, key)
        s.executeQuery().use { if (it.next()) it.getString(1) else null }
      }

  private fun putMeta(key: String, value: String) =
      db.prepareStatement("INSERT INTO schema_meta(key,value) VALUES(?,?)").use {
        it.setString(1, key)
        it.setString(2, value)
        it.executeUpdate()
      }

  private fun <T> transaction(body: () -> T): T {
    db.createStatement().use { it.execute("BEGIN IMMEDIATE") }
    try {
      val result = body()
      db.createStatement().use { it.execute("COMMIT") }
      return result
    } catch (e: Exception) {
      db.createStatement().use { it.execute("ROLLBACK") }
      throw e
    }
  }

  private fun import(source: Path) {
    val bytes = Files.readAllBytes(source)
    val root = ShopYaml.read(String(bytes, Charsets.UTF_8))
    require(SECTIONS.all(root::containsKey) && root["DataVersion"] is Int) {
      "sellers.yml の必須領域または DataVersion がありません"
    }
    val entries =
        SECTIONS.associateWith { section ->
          val value = root[section] ?: emptyMap<String, Any?>()
          require(value is Map<*, *>) { "$section がマッピングではありません" }
          @Suppress("UNCHECKED_CAST")
          (value as Map<String, Any?>).mapValues { (_, record) ->
            require(record is Map<*, *>) { "店レコードがマッピングではありません" }
            @Suppress("UNCHECKED_CAST")
            record as Map<String, Any?>
          }
        }
    val extras = root.filterKeys { it !in SECTIONS }
    val sha =
        MessageDigest.getInstance("SHA-256").digest(bytes).joinToString("") {
          "%02x".format(it.toInt() and 0xff)
        }
    transaction {
      putMeta("schema_version", "1")
      putMeta("source_root_yaml", ShopYaml.dump(extras))
      putMeta("source_sha256", sha)
      putMeta("imported_at", Instant.now().epochSecond.toString())
      SECTIONS.forEach { section ->
        putMeta("source_count_$section", entries.getValue(section).size.toString())
        val keys =
            entries.getValue(section).keys.sorted().joinToString("\n").toByteArray(Charsets.UTF_8)
        putMeta(
            "source_keys_sha256_$section",
            MessageDigest.getInstance("SHA-256").digest(keys).joinToString("") {
              "%02x".format(it.toInt() and 0xff)
            },
        )
        entries.getValue(section).forEach { (key, record) ->
          insert(section, key, ShopYaml.dump(record))
        }
      }
      db.createStatement().use { s ->
        s.executeQuery("SELECT section,shop_key,record_yaml FROM shops").use { r ->
          val seen = SECTIONS.associateWith { mutableSetOf<String>() }
          while (r.next()) {
            val section = r.getString(1)
            val key = r.getString(2)
            require(ShopYaml.read(r.getString(3)) == entries.getValue(section)[key]) { "取り込み照合失敗" }
            seen.getValue(section).add(key)
          }
          SECTIONS.forEach {
            require(seen.getValue(it) == entries.getValue(it).keys) { "キー集合の照合失敗" }
          }
        }
      }
    }
  }

  private fun insert(section: String, key: String, yaml: String) =
      db.prepareStatement(
              "INSERT INTO shops(section,shop_key,record_yaml,updated_at) VALUES(?,?,?,?)"
          )
          .use {
            it.setString(1, section)
            it.setString(2, key)
            it.setString(3, yaml)
            it.setLong(4, Instant.now().epochSecond)
            it.executeUpdate()
          }

  fun save(shop: Shop) {
    transaction {
      db.prepareStatement(
              "INSERT INTO shops(section,shop_key,record_yaml,halt_reason,updated_at) VALUES(?,?,?,?,?) ON CONFLICT(section,shop_key) DO UPDATE SET record_yaml=excluded.record_yaml,halt_reason=excluded.halt_reason,updated_at=excluded.updated_at"
          )
          .use {
            it.setString(1, shop.section)
            it.setString(2, shop.key)
            it.setString(3, ShopYaml.dump(shop.record))
            it.setString(4, shop.haltReason)
            it.setLong(5, Instant.now().epochSecond)
            it.executeUpdate()
          }
    }
    shops[shop.section to shop.key] = shop
  }

  fun delete(shop: Shop) {
    transaction {
      db.prepareStatement("DELETE FROM shops WHERE section=? AND shop_key=?").use {
        it.setString(1, shop.section)
        it.setString(2, shop.key)
        it.executeUpdate()
      }
    }
    shops.remove(shop.section to shop.key)
  }

  fun begin(shop: Shop, kind: String, player: String, owner: String, amount: Long): Long =
      transaction {
        db.prepareStatement(
                "INSERT INTO shop_transactions(shop_section,shop_key,kind,player_uuid,owner_uuid,amount_yen,status,started_at) VALUES(?,?,?,?,?,?,'pending',?)"
            )
            .use {
              it.setString(1, shop.section)
              it.setString(2, shop.key)
              it.setString(3, kind)
              it.setString(4, player)
              it.setString(5, owner)
              it.setLong(6, amount)
              it.setLong(7, Instant.now().epochSecond)
              it.executeUpdate()
            }
        db.createStatement().use { s ->
          s.executeQuery("SELECT last_insert_rowid()").use {
            it.next()
            it.getLong(1)
          }
        }
      }

  fun finish(shop: Shop, id: Long, status: String, detail: String, halt: String? = null) {
    transaction {
      db.prepareStatement(
              "UPDATE shop_transactions SET status=?,detail=?,finished_at=? WHERE id=? AND status='pending'"
          )
          .use {
            it.setString(1, status)
            it.setString(2, detail)
            it.setLong(3, Instant.now().epochSecond)
            it.setLong(4, id)
            require(it.executeUpdate() == 1) { "取引行の更新に失敗しました" }
          }
      if (halt != null)
          db.prepareStatement("UPDATE shops SET halt_reason=? WHERE section=? AND shop_key=?").use {
            it.setString(1, halt)
            it.setString(2, shop.section)
            it.setString(3, shop.key)
            require(it.executeUpdate() == 1)
          }
    }
    if (halt != null) shop.haltReason = halt
  }

  override fun close() {
    try {
      db.createStatement().use { it.execute("PRAGMA wal_checkpoint(TRUNCATE)") }
    } finally {
      db.close()
    }
  }
}
