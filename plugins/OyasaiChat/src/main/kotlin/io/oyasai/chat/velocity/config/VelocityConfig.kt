package io.oyasai.chat.velocity.config

import java.nio.file.Path
import net.kyori.adventure.text.minimessage.MiniMessage
import net.kyori.adventure.text.minimessage.tag.resolver.Placeholder
import org.spongepowered.configurate.ConfigurationNode
import org.spongepowered.configurate.yaml.YamlConfigurationLoader

// Velocity側設定ファイルの読み込み。
// Validation処理はAI生成
data class VelocityRoutingConfig(
    val groups: Map<String, Set<String>>,
    val channelGroups: Map<String, String?>,
    val loginMessages: LoginMessageConfig = LoginMessageConfig(),
) {
  fun groupForChannel(channelId: String): String? = channelGroups[channelId.lowercase()]

  fun managedBackends(): Set<String> = groups.values.flatten().toSet()
}

data class LoginMessageConfig(
    val backendDisplayNames: Map<String, String> = emptyMap(),
    val fromSuffixFormat: String = " <gray>from <white><backend></white></gray>",
    val toSuffixFormat: String = " <gray>to <white><backend></white></gray>",
) {
  fun displayName(backendId: String): String = backendDisplayNames[backendId] ?: backendId
}

object VelocityConfigLoader {
  private val mini = MiniMessage.builder().strict(true).build()

  fun load(path: Path, registeredBackends: Set<String>): VelocityRoutingConfig {
    val root = YamlConfigurationLoader.builder().path(path).build().load()
    val groups =
        root
            .node("network", "groups")
            .requiredChildren("network.groups")
            .map { (key, value) ->
              require(key.isNotBlank()) { "network.groups contains a blank group name" }
              val backends = value.getList(String::class.java).orEmpty()
              require(backends.isNotEmpty() && backends.none(String::isBlank)) {
                "network group '$key' must contain non-blank backends"
              }
              key to backends.toSet()
            }
            .toMap()
    val configuredBackends = groups.values.flatten().toSet()
    require(configuredBackends.all { it in registeredBackends }) {
      "Network groups reference an unregistered Velocity backend."
    }
    val channels =
        root
            .node("channels")
            .requiredChildren("channels")
            .map { (key, value) -> key.lowercase() to value.node("network-group").string }
            .toMap()
    require(channels.values.filterNotNull().all { groups.containsKey(it) }) {
      "A channel references a missing network group."
    }
    require(channels.keys.none(String::isBlank)) { "channels contains a blank channel id" }
    val loginMessages = root.node("login-messages")
    val configuredDisplayNames =
        loginMessages
            .node("backend-display-names")
            .childrenMap()
            .mapKeys { it.key.toString() }
            .mapValues { (backendId, value) ->
              require(backendId.isNotBlank()) {
                "login-messages.backend-display-names contains a blank backend id"
              }
              val displayName = value.string?.trim().orEmpty()
              require(
                  displayName.isNotBlank() &&
                      displayName.length <= 64 &&
                      displayName.none(Char::isISOControl)
              ) {
                "login-messages backend display name '$backendId' must be 1..64 characters without control characters"
              }
              displayName
            }
    require(configuredDisplayNames.keys.all { it in registeredBackends }) {
      "login-messages.backend-display-names references an unregistered Velocity backend."
    }
    val messageConfig =
        LoginMessageConfig(
            backendDisplayNames = configuredDisplayNames,
            fromSuffixFormat =
                loginMessages.node("from-suffix-format").string
                    ?: LoginMessageConfig().fromSuffixFormat,
            toSuffixFormat =
                loginMessages.node("to-suffix-format").string
                    ?: LoginMessageConfig().toSuffixFormat,
        )
    listOf(
            "from-suffix-format" to messageConfig.fromSuffixFormat,
            "to-suffix-format" to messageConfig.toSuffixFormat,
        )
        .forEach { (name, value) ->
          require(value.length <= 1024 && value.none(Char::isISOControl)) {
            "login-messages.$name must be at most 1024 characters without control characters"
          }
          runCatching {
                mini.deserialize(
                    value,
                    Placeholder.unparsed("backend", "backend"),
                )
              }
              .getOrElse {
                throw IllegalArgumentException("login-messages.$name is not valid MiniMessage.", it)
              }
        }
    return VelocityRoutingConfig(groups, channels, messageConfig)
  }

  private fun ConfigurationNode.requiredChildren(name: String): Map<String, ConfigurationNode> {
    val children = childrenMap().mapKeys { it.key.toString() }
    require(children.isNotEmpty()) { "$name must be a non-empty map" }
    return children
  }
}
