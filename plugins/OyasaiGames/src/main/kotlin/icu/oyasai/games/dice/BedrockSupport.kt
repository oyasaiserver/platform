package icu.oyasai.games.dice

import java.util.UUID
import org.bukkit.Bukkit
import org.bukkit.entity.Entity
import org.bukkit.entity.Player
import org.bukkit.plugin.Plugin

/** 統合版（Bedrock / Floodgate / GeyserMC）プレイヤーとの互換性をサポートするユーティリティ */
object BedrockSupport {
  private val isFloodgatePresent: Boolean by lazy {
    Bukkit.getPluginManager().getPlugin("floodgate") != null ||
        Bukkit.getPluginManager().getPlugin("Floodgate") != null
  }

  /** 指定したプレイヤーが統合版（Bedrock）からの接続かどうかを判定します */
  fun isBedrockPlayer(player: Player): Boolean {
    return isBedrockPlayer(player.uniqueId)
  }

  /** 指定したUUIDが統合版（Bedrock）プレイヤーのものかどうかを判定します */
  fun isBedrockPlayer(uuid: UUID): Boolean {
    if (!isFloodgatePresent) return false
    return runCatching {
          val api = org.geysermc.floodgate.api.FloodgateApi.getInstance()
          api.isFloodgatePlayer(uuid)
        }
        .getOrElse { false }
  }

  /**
   * 統合版用エンティティ（ItemやArmorStand）を、Java版プレイヤーから非表示にします。
   * これにより、Java版プレイヤー側でItemDisplay等と二重に重なって表示されるのを防ぎます。
   */
  fun hideBedrockEntityFromJava(plugin: Plugin, entity: Entity) {
    val world = entity.world
    for (p in world.players) {
      if (!isBedrockPlayer(p)) {
        p.hideEntity(plugin, entity)
      }
    }
  }

  /** 新しく参加またはワールド間移動したJavaプレイヤーに対して、 既存の統合版用エンティティを非表示にします。 */
  fun hideFromPlayerIfJava(plugin: Plugin, player: Player, entity: Entity) {
    if (!isBedrockPlayer(player)) {
      player.hideEntity(plugin, entity)
    }
  }
}
