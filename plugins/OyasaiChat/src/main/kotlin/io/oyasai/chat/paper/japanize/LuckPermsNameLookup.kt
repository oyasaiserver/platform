package io.oyasai.chat.paper.japanize

import java.util.UUID
import java.util.concurrent.CompletableFuture
import net.luckperms.api.model.user.UserManager

/** Loaded only when the optional LuckPerms plugin and its service are available. */
class LuckPermsNameLookup(private val users: UserManager) : (String) -> CompletableFuture<UUID?> {
  companion object {
    fun available(plugin: org.bukkit.plugin.Plugin): LuckPermsNameLookup? =
        plugin.server.servicesManager.load(net.luckperms.api.LuckPerms::class.java)?.let {
          LuckPermsNameLookup(it.userManager)
        }
  }

  override fun invoke(name: String): CompletableFuture<UUID?> =
      users.lookupUniqueId(name).thenApply { it }
}
