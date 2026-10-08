package icu.oyasai.games.dice

import java.util.UUID
import org.bukkit.Bukkit
import org.bukkit.entity.Entity
import org.bukkit.entity.Player
import org.bukkit.plugin.Plugin

/** 統合版（Bedrock / Floodgate / GeyserMC）プレイヤーの判定および表示制御ユーティリティ */
object BedrockSupport {
  private val isFloodgatePresent: Boolean by lazy {
    Bukkit.getPluginManager().getPlugin("floodgate") != null ||
        Bukkit.getPluginManager().getPlugin("Floodgate") != null
  }

  fun isBedrockPlayer(player: Player): Boolean {
    return isBedrockPlayer(player.uniqueId)
  }

  fun isBedrockPlayer(uuid: UUID): Boolean {
    if (!isFloodgatePresent) return false
    return runCatching {
          val api = Class.forName("org.geysermc.floodgate.api.FloodgateApi")
          val instance = api.getMethod("getInstance").invoke(null)
          api.getMethod("isFloodgatePlayer", UUID::class.java).invoke(instance, uuid) as Boolean
        }
        .getOrElse { false }
  }

  /** 統合版用ドロップアイテムをJava版プレイヤーから非表示にします。 Java版プレイヤーには滑らかなItemDisplayが見えるため、ドロップアイテムと二重になるのを防ぎます。 */
  fun hideBedrockEntityFromJava(plugin: Plugin, entity: Entity) {
    val world = entity.world
    for (p in world.players) {
      if (!isBedrockPlayer(p)) {
        p.hideEntity(plugin, entity)
      }
    }
  }
}
