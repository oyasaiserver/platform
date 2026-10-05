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
              Bukkit.getScheduler().runTask(plugin, Runnable { finishAdd(sender, name, result) })
            },
        )
  }

  private fun finishAdd(sender: CommandSender, name: String, result: Result<PlayerProfile?>) {
    val profile = result.getOrNull()
    val texture = profile?.properties?.firstOrNull { it.name == "textures" }
    val id = profile?.id
    if (id == null || texture == null || texture.value.isBlank()) {
      MessageUtil.error(sender, "$name のプロフィールまたは textures を取得できませんでした。")
      result.exceptionOrNull()?.let { plugin.logger.warning("群衆の頭取得に失敗: ${it.message}") }
      return
    }
    if (store(id, profile.name ?: name, texture))
        MessageUtil.success(sender, "${profile.name ?: name} の頭を登録しました。")
    else MessageUtil.error(sender, "頭の保存に失敗しました。")
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
    yaml.set("heads.$key", null)
    if (save()) MessageUtil.success(sender, "$name の頭を削除しました。")
    else MessageUtil.error(sender, "頭の削除に失敗しました。")
  }

  fun importHeads(sender: CommandSender, entries: List<HeadTexture>, skipped: Int) {
    val known = yaml.getConfigurationSection("heads")?.getKeys(false).orEmpty().toMutableSet()
    var added = 0
    var updated = 0
    for (entry in entries) {
      val id =
          entry.id
              ?: UUID.nameUUIDFromBytes(
                  "crowd-texture:${entry.value}".toByteArray(StandardCharsets.UTF_8)
              )
      val path = "heads.$id"
      if (id.toString() in known) updated++ else added++
      yaml.set("$path.uuid", id.toString())
      yaml.set(
          "$path.name",
          entry.name?.takeIf { it.isNotBlank() }
              ?: yaml.getString("$path.name")
              ?: "head_${id.toString().replace("-", "").take(11)}",
      )
      yaml.set("$path.value", entry.value)
      yaml.set("$path.signature", entry.signature)
      yaml.set("$path.updated-at", System.currentTimeMillis())
      known += id.toString()
    }
    if (entries.isNotEmpty() && !save()) {
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
    yaml.set("$path.uuid", id.toString())
    yaml.set("$path.name", name)
    yaml.set("$path.value", texture.value)
    yaml.set("$path.signature", texture.signature)
    yaml.set("$path.updated-at", System.currentTimeMillis())
    return save()
  }

  private fun save(): Boolean =
      runCatching { yaml.save(file) }
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
