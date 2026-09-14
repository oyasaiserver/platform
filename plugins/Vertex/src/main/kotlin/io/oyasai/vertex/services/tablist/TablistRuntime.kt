package io.oyasai.vertex.services.tablist

import com.github.srain3.sociallikes.datas.Data
import io.oyasai.oyasaitoken.api.OyasaiTokenApi
import io.oyasai.vertex.Vertex.Companion.plugin
import java.util.Locale
import net.kyori.adventure.text.serializer.legacy.LegacyComponentSerializer
import net.luckperms.api.LuckPerms
import net.milkbowl.vault.economy.Economy
import org.bukkit.Bukkit
import org.bukkit.scheduler.BukkitTask

class TablistRuntime
private constructor(
    private val economy: Economy,
    private val tokenApi: OyasaiTokenApi,
    private val luckPerms: LuckPerms,
    private val groupColors: Map<String, String>,
) {
  private val legacy = LegacyComponentSerializer.legacyAmpersand()
  private var task: BukkitTask? = null

  fun start(): TablistRuntime {
    task = Bukkit.getScheduler().runTaskTimer(plugin, Runnable { updateAll() }, 20L, 20L)
    updateAll()
    plugin.logger.info("TablistService enabled.")
    return this
  }

  fun stop() {
    task?.cancel()
    task = null
  }

  private fun updateAll() {
    val allLikes = Data.userLikesInt.values.sum()
    val buildings = Data.getBuildingInt()
    val online = Bukkit.getOnlinePlayers().size
    val tps = TablistFormatter.formatTps(Bukkit.getTPS().firstOrNull() ?: 0.0)
    val version = TablistFormatter.minecraftVersion(Bukkit.getBukkitVersion())

    Bukkit.getOnlinePlayers().forEach { player ->
      val likes = Data.userLikesInt[player.uniqueId] ?: 0
      val money = economy.getBalance(player)
      val tokens = tokenApi.getBalance(player.uniqueId)
      val user = luckPerms.userManager.getUser(player.uniqueId)
      val suffix = user?.cachedData?.metaData?.suffix.orEmpty()
      val group = user?.primaryGroup?.lowercase(Locale.US).orEmpty()
      val groupColor = groupColors[group].orEmpty()

      player.sendPlayerListHeaderAndFooter(
          legacy.deserialize(TablistFormatter.headerLegacy(version, likes)),
          legacy.deserialize(
              TablistFormatter.footerLegacy(
                  money = money,
                  tokens = tokens,
                  online = online,
                  tps = tps,
                  allLikes = allLikes,
                  buildings = buildings,
              )
          ),
      )
      player.playerListName(
          legacy.deserialize(
              TablistFormatter.playerNameLegacy(
                  groupColor = groupColor,
                  suffix = suffix,
                  likes = likes,
                  playerName = player.name,
              )
          )
      )
    }
  }

  companion object {
    fun start(): TablistRuntime? {
      val economy = Bukkit.getServicesManager().getRegistration(Economy::class.java)?.provider
      val tokenApi =
          Bukkit.getServicesManager().getRegistration(OyasaiTokenApi::class.java)?.provider
      val luckPerms = Bukkit.getServicesManager().getRegistration(LuckPerms::class.java)?.provider
      val missingServices =
          listOfNotNull(
              "Vault Economy".takeIf { economy == null },
              "OyasaiTokenApi".takeIf { tokenApi == null },
              "LuckPerms API".takeIf { luckPerms == null },
          )
      if (economy == null || tokenApi == null || luckPerms == null) {
        plugin.logger.info(
            "TablistService disabled: missing services ${missingServices.joinToString()}"
        )
        return null
      }
      return TablistRuntime(economy, tokenApi, luckPerms, loadGroupColors()).start()
    }

    private fun loadGroupColors(): Map<String, String> {
      val section =
          plugin.config.getConfigurationSection("tablist.group-colors") ?: return emptyMap()
      return section.getKeys(false).associate {
        it.lowercase(Locale.US) to section.getString(it, "").orEmpty()
      }
    }
  }
}
