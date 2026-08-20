package io.oyasai.chat.velocity

import com.velocitypowered.api.command.SimpleCommand

// Velocity側の管理コマンド処理。
internal class OyasaiVelocityCommand(
    private val plugin: OyasaiVelocityPlugin,
) : SimpleCommand {
  override fun execute(invocation: SimpleCommand.Invocation) {
    val args = invocation.arguments()
    if (args.size != 1 || !args[0].equals("reload", ignoreCase = true)) {
      invocation.source().sendPlainMessage("Usage: /oyasaichat reload")
      return
    }
    plugin.reloadConfiguration(invocation.source())
  }

  override fun hasPermission(invocation: SimpleCommand.Invocation): Boolean =
      invocation.source().hasPermission("oyasaichat.admin.reload")

  override fun suggest(invocation: SimpleCommand.Invocation): List<String> {
    val args = invocation.arguments()
    if (args.size > 1) return emptyList()
    val prefix = args.firstOrNull().orEmpty()
    return listOf("reload").filter { it.startsWith(prefix, ignoreCase = true) }
  }
}
