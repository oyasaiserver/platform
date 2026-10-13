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

  /**
   * ホログラムの可視性をJava版・統合版で分離します。
   * - Java版プレイヤー: javaHolo を表示し、bedrockHolo を非表示
   * - 統合版プレイヤー: bedrockHolo を表示し、javaHolo を非表示
   */
  fun separateHologramVisibility(plugin: Plugin, javaHolo: Entity?, bedrockHolo: Entity?) {
    val world = javaHolo?.world ?: bedrockHolo?.world ?: return
    for (p in world.players) {
      updatePlayerHologramVisibility(plugin, p, javaHolo, bedrockHolo)
    }
  }

  fun updatePlayerHologramVisibility(
      plugin: Plugin,
      player: Player,
      javaHolo: Entity?,
      bedrockHolo: Entity?,
  ) {
    if (isBedrockPlayer(player)) {
      if (javaHolo != null && javaHolo.isValid) player.hideEntity(plugin, javaHolo)
      if (bedrockHolo != null && bedrockHolo.isValid) player.showEntity(plugin, bedrockHolo)
    } else {
      if (bedrockHolo != null && bedrockHolo.isValid) player.hideEntity(plugin, bedrockHolo)
      if (javaHolo != null && javaHolo.isValid) player.showEntity(plugin, javaHolo)
    }
  }
}
