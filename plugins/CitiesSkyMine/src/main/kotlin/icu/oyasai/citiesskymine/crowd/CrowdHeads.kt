package icu.oyasai.citiesskymine.crowd

import com.destroystokyo.paper.profile.PlayerProfile
import com.destroystokyo.paper.profile.ProfileProperty
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
