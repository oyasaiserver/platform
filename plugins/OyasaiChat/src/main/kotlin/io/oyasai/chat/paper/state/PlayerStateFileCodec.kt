package io.oyasai.chat.paper.state

import java.io.File
import java.nio.file.AtomicMoveNotSupportedException
import java.nio.file.FileAlreadyExistsException
import java.nio.file.Files
import java.nio.file.StandardCopyOption
import org.bukkit.configuration.file.YamlConfiguration

// プレイヤー設定のYAML保存・読み込み。
object PlayerStateFileCodec {
  fun load(
      file: File,
      defaultPrivateMessagesEnabled: Boolean,
      onFailure: (Throwable) -> Unit = {},
  ): PlayerChatState {
    if (!file.exists())
        return PlayerChatState(
            "",
            mutableSetOf(),
            privateMessagesEnabled = defaultPrivateMessagesEnabled,
        )
    return runCatching {
          val yaml = YamlConfiguration.loadConfiguration(file)
          PlayerChatState(
              activeChannel = yaml.getString("active-channel", "") ?: "",
              joinedChannels = yaml.getStringList("joined-channels").toMutableSet(),
              privateMessagesEnabled =
                  yaml.getBoolean("private-messages-enabled", defaultPrivateMessagesEnabled),
          )
        }
        .getOrElse {
          onFailure(it)
          PlayerChatState(
              "",
              mutableSetOf(),
              privateMessagesEnabled = defaultPrivateMessagesEnabled,
          )
        }
  }

  fun saveAtomic(
      file: File,
      activeChannel: String,
      joinedChannels: List<String>,
      privateMessagesEnabled: Boolean,
  ) {
    val directory = file.parentFile ?: error("Player state file has no parent directory")
    if (!directory.exists() && !directory.mkdirs() && !directory.isDirectory)
        error("could not create ${directory.absolutePath}")
    val yaml =
        YamlConfiguration().apply {
          set("active-channel", activeChannel)
          set("joined-channels", joinedChannels)
          set("private-messages-enabled", privateMessagesEnabled)
        }
    val temporary = File.createTempFile("${file.nameWithoutExtension}-", ".tmp", directory)
    try {
      yaml.save(temporary)
      try {
        Files.move(
            temporary.toPath(),
            file.toPath(),
            StandardCopyOption.ATOMIC_MOVE,
            StandardCopyOption.REPLACE_EXISTING,
        )
      } catch (_: AtomicMoveNotSupportedException) {
        Files.move(temporary.toPath(), file.toPath(), StandardCopyOption.REPLACE_EXISTING)
      } catch (_: FileAlreadyExistsException) {
        Files.move(temporary.toPath(), file.toPath(), StandardCopyOption.REPLACE_EXISTING)
      }
    } finally {
      if (temporary.exists()) temporary.delete()
    }
  }
}
