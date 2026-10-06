package io.oyasai.oyasaiAdminTools.socialspy

import io.oyasai.oyasaiAdminTools.OyasaiAdminTools
import java.util.UUID
import org.bukkit.entity.Player

/** Optional, pinned-version runtime adapter. Never invokes a setter that saves Essentials YAML. */
internal class EssentialsSpyCompatibility(private val plugin: OyasaiAdminTools) {
  private val previous = mutableMapOf<UUID, RuntimeSpyState>()

  fun suppress(p: Player) {
    val essentials =
        plugin.server.pluginManager.getPlugin("Essentials")?.takeIf { it.isEnabled } ?: return
    val user = essentials.javaClass.getMethod("getUser", Player::class.java).invoke(essentials, p)
    val old = previous[p.uniqueId]
    if (old != null && old.user === user && old.matchesHolder()) {
      old.suppress()
      return
    }
    old?.restore()
    RuntimeSpyState(user).also {
      previous[p.uniqueId] = it
      it.suppress()
    }
  }

  fun restore(uuid: UUID) {
    previous.remove(uuid)?.restore()
  }

  fun restore() {
    previous.values.forEach { it.restore() }
    previous.clear()
  }
}

/** Cache only online users; a userdata reload can replace the holder, so check its identity. */
internal class RuntimeSpyState(val user: Any) {
  private val field =
      generateSequence(user.javaClass as Class<*>?) { it.superclass }
          .mapNotNull { c -> runCatching { c.getDeclaredField("holder") }.getOrNull() }
          .first()
          .apply { isAccessible = true }
  private val holder = field.get(user)
  private val get = holder.javaClass.getMethod("socialSpy")
  private val set = holder.javaClass.getMethod("socialSpy", Boolean::class.javaPrimitiveType)
  private val original = get.invoke(holder) as Boolean

  fun matchesHolder() = field.get(user) === holder

  fun suppress() {
    set.invoke(holder, false)
  }

  fun restore() {
    set.invoke(holder, original)
  }
}
