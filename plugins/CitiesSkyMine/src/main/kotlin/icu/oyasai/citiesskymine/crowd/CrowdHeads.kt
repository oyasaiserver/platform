package icu.oyasai.citiesskymine.crowd

import com.destroystokyo.paper.profile.PlayerProfile
import com.destroystokyo.paper.profile.ProfileProperty
import com.sk89q.jnbt.CompoundTag
import com.sk89q.jnbt.IntArrayTag
import com.sk89q.jnbt.ListTag
import com.sk89q.jnbt.StringTag
import icu.oyasai.citiesskymine.Main
import icu.oyasai.citiesskymine.util.MessageUtil
import java.io.File
import java.nio.charset.StandardCharsets
import java.nio.file.AtomicMoveNotSupportedException
import java.nio.file.Files
import java.nio.file.StandardCopyOption
import java.util.UUID
import org.bukkit.Bukkit
import org.bukkit.command.CommandSender
import org.bukkit.configuration.file.YamlConfiguration
import org.bukkit.entity.Player
import org.bukkit.event.EventHandler
import org.bukkit.event.Listener
import org.bukkit.event.player.PlayerJoinEvent

internal class CrowdHeads(private val plugin: Main) : Listener {
  private val file = File(plugin.dataFolder, "crowd-heads.yml")
  private val yaml = YamlConfiguration.loadConfiguration(file)

  fun profiles(): List<PlayerProfile> =
      yaml.getConfigurationSection("heads")?.getKeys(false).orEmpty().mapNotNull { key ->
        val id = runCatching { UUID.fromString(key) }.getOrNull() ?: return@mapNotNull null
        val path = "heads.$key"
        val value = yaml.getString("$path.value") ?: return@mapNotNull null
        Bukkit.createProfile(id, yaml.getString("$path.name")).apply {
          val signature = yaml.getString("$path.signature")
          setProperty(
              if (signature == null) ProfileProperty("textures", value)
              else ProfileProperty("textures", value, signature)
          )
        }
      }

  fun list(sender: CommandSender) {
    val names =
        yaml.getConfigurationSection("heads")?.getKeys(false).orEmpty().mapNotNull {
          yaml.getString("heads.$it.name")
        }
    MessageUtil.info(
        sender,
        "登録済みの頭 (${names.size}): ${names.sorted().joinToString(", ").ifEmpty { "なし" }}",
    )
  }

  fun add(sender: CommandSender, name: String) {
    if (!name.matches(Regex("[A-Za-z0-9_]{3,16}"))) {
      MessageUtil.error(sender, "MCID は3〜16文字の英数字・_で指定してください。")
      return
    }
    MessageUtil.info(sender, "$name の頭を取得しています。")
    Bukkit.getScheduler()
        .runTaskAsynchronously(
            plugin,
            Runnable {
              val result = runCatching {
                val profile = Bukkit.createProfile(name)
                if (!profile.complete(true)) null else profile
              }
              Bukkit.getScheduler()
                  .runTask(
                      plugin,
                      Runnable {
                        val profile = result.getOrNull()
                        val texture = profile?.properties?.firstOrNull { it.name == "textures" }
                        val id = profile?.id
                        if (id == null || texture == null || texture.value.isBlank()) {
                          MessageUtil.error(sender, "$name のプロフィールまたは textures を取得できませんでした。")
                          result.exceptionOrNull()?.let {
                            plugin.logger.warning("群衆の頭取得に失敗: ${it.message}")
                          }
                          return@Runnable
                        }
                        if (store(id, profile.name ?: name, texture)) {
                          MessageUtil.success(sender, "${profile.name ?: name} の頭を登録しました。")
                        } else {
                          MessageUtil.error(sender, "頭の保存に失敗しました。")
                        }
                      },
                  )
            },
        )
  }

  fun remove(sender: CommandSender, name: String) {
    val key =
        yaml.getConfigurationSection("heads")?.getKeys(false)?.firstOrNull {
          yaml.getString("heads.$it.name")?.equals(name, ignoreCase = true) == true
        }
    if (key == null) {
      MessageUtil.error(sender, "$name は登録されていません。")
      return
    }
    val old = yaml.getConfigurationSection("heads.$key")?.getValues(false).orEmpty()
    yaml.set("heads.$key", null)
    if (save()) MessageUtil.success(sender, "$name の頭を削除しました。")
    else {
      old.forEach { (field, value) -> yaml.set("heads.$key.$field", value) }
      MessageUtil.error(sender, "頭の削除に失敗しました。")
    }
  }

  fun importHeads(sender: CommandSender, entries: List<HeadTexture>, skipped: Int) {
    val before = yaml.saveToString()
    val known =
        yaml
            .getConfigurationSection("heads")
            ?.getKeys(false)
            .orEmpty()
            .mapNotNull { runCatching { UUID.fromString(it) }.getOrNull() }
            .toMutableSet()
    val byTexture = mutableMapOf<String, MutableSet<UUID>>()
    known.forEach { id ->
      yaml.getString("heads.$id.value")?.let { byTexture.getOrPut(it) { mutableSetOf() } += id }
    }
    var added = 0
    var updated = 0
    for (entry in entries) {
      val id =
          entry.id
              ?: UUID.nameUUIDFromBytes(
                  "crowd-texture:${entry.value}".toByteArray(StandardCharsets.UTF_8)
              )
      val matches = byTexture[entry.value].orEmpty()
      val key = matches.firstOrNull() ?: id
      val path = "heads.$key"
      if (key in known) updated++ else added++
      yaml.getString("$path.value")?.let { byTexture[it]?.remove(key) }
      yaml.set("$path.uuid", key.toString())
      yaml.set(
          "$path.name",
          entry.name?.takeIf { it.isNotBlank() }
              ?: yaml.getString("$path.name")
              ?: "head_${(entry.id ?: key).toString().replace("-", "").take(11)}",
      )
      yaml.set("$path.value", entry.value)
      yaml.set("$path.signature", entry.signature)
      yaml.set("$path.updated-at", System.currentTimeMillis())
      known += key
      byTexture.getOrPut(entry.value) { mutableSetOf() } += key
      for (duplicate in (matches + id).filter { it != key && it in known }) {
        yaml.getString("heads.$duplicate.value")?.let { byTexture[it]?.remove(duplicate) }
        yaml.set("heads.$duplicate", null)
        known.remove(duplicate)
      }
    }
    if (entries.isNotEmpty() && !save()) {
      yaml.loadFromString(before)
      MessageUtil.error(sender, "頭の保存に失敗しました。")
      return
    }
    MessageUtil.success(sender, "頭を取り込みました: 新規 $added 件・更新 $updated 件・textures 無しでスキップ $skipped 件")
  }

  @EventHandler
  fun onJoin(event: PlayerJoinEvent) {
    val player: Player = event.player
    val path = "heads.${player.uniqueId}"
    if (!yaml.contains(path)) return
    val texture = player.playerProfile.properties.firstOrNull { it.name == "textures" } ?: return
    if (texture.value.isNotBlank()) store(player.uniqueId, player.name, texture)
  }

  private fun store(id: UUID, name: String, texture: ProfileProperty): Boolean {
    val path = "heads.$id"
    val old = yaml.getConfigurationSection(path)?.getValues(false).orEmpty()
    yaml.set("$path.uuid", id.toString())
    yaml.set("$path.name", name)
    yaml.set("$path.value", texture.value)
    yaml.set("$path.signature", texture.signature)
    yaml.set("$path.updated-at", System.currentTimeMillis())
    if (save()) return true
    yaml.set(path, null)
    old.forEach { (field, value) -> yaml.set("$path.$field", value) }
    return false
  }

  private fun save(): Boolean =
      runCatching {
            file.parentFile.mkdirs()
            val temp = File(file.parentFile, "${file.name}.tmp").toPath()
            try {
              Files.writeString(temp, yaml.saveToString(), StandardCharsets.UTF_8)
              try {
                Files.move(
                    temp,
                    file.toPath(),
                    StandardCopyOption.ATOMIC_MOVE,
                    StandardCopyOption.REPLACE_EXISTING,
                )
              } catch (_: AtomicMoveNotSupportedException) {
                Files.move(temp, file.toPath(), StandardCopyOption.REPLACE_EXISTING)
              }
            } finally {
              Files.deleteIfExists(temp)
            }
          }
          .onFailure { plugin.logger.warning("crowd-heads.yml の保存に失敗: ${it.message}") }
          .isSuccess
}

internal data class HeadTexture(
    val id: UUID?,
    val name: String?,
    val value: String,
    val signature: String?,
)

internal fun headTextureFromNbt(nbt: CompoundTag?): HeadTexture? {
  val profile = nbt?.value?.get("profile") as? CompoundTag ?: return null
  val properties = profile.value["properties"] as? ListTag<*, *> ?: return null
  val texture =
      properties.value.filterIsInstance<CompoundTag>().firstOrNull {
        (it.value["name"] as? StringTag)?.value == "textures" &&
            !(it.value["value"] as? StringTag)?.value.isNullOrBlank()
      } ?: return null
  val rawId = profile.value["id"]
  val id =
      when (rawId) {
        is IntArrayTag ->
            rawId.value
                .takeIf { it.size == 4 }
                ?.let { parts ->
                  UUID(
                      (parts[0].toLong() shl 32) or (parts[1].toLong() and 0xffffffffL),
                      (parts[2].toLong() shl 32) or (parts[3].toLong() and 0xffffffffL),
                  )
                }
        is StringTag -> runCatching { UUID.fromString(rawId.value) }.getOrNull()
        else -> null
      }
  return HeadTexture(
      id,
      (profile.value["name"] as? StringTag)?.value,
      (texture.value["value"] as StringTag).value,
      (texture.value["signature"] as? StringTag)?.value,
  )
}
