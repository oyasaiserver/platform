package io.oyasai.oyasaiAdminTools.assistant

import com.fastasyncworldedit.core.wrappers.LocationMaskedPlayerWrapper
import com.sk89q.worldedit.LocalSession
import com.sk89q.worldedit.WorldEdit
import com.sk89q.worldedit.bukkit.BukkitPlayer
import com.sk89q.worldedit.bukkit.WorldEditPlugin
import com.sk89q.worldedit.extension.platform.Actor
import com.sk89q.worldedit.extension.platform.PlatformManager
import com.sk89q.worldedit.session.SessionManager
import com.sk89q.worldedit.session.SessionOwner
import com.sk89q.worldedit.util.lifecycle.SimpleLifecycled
import java.lang.reflect.Proxy
import kotlin.test.Test
import kotlin.test.assertFailsWith
import kotlin.test.assertSame
import org.bukkit.entity.Player
import org.bukkit.metadata.FixedMetadataValue
import sun.misc.Unsafe

class FaweSelectionMaskTest {
  private class SessionLookupReached : RuntimeException()

  private class ProxyPlatform : PlatformManager(WorldEdit.getInstance()) {
    lateinit var proxyActor: LocationMaskedPlayerWrapper

    @Suppress("UNCHECKED_CAST")
    override fun <T : Actor> createProxyActor(actor: T): T = proxyActor as T
  }

  private class Sessions : SessionManager(WorldEdit.getInstance()) {
    lateinit var expectedActor: Actor

    override fun get(owner: SessionOwner): LocalSession {
      assertSame(expectedActor, owner)
      throw SessionLookupReached()
    }
  }

  @Test
  fun executeAcceptsFaweLocationMaskedPlayerInsteadOfCastingToBukkitPlayer() {
    val unsafe =
        Unsafe::class.java.getDeclaredField("theUnsafe").apply { isAccessible = true }.get(null)
            as Unsafe
    fun <T> allocate(type: Class<T>): T = type.cast(unsafe.allocateInstance(type))
    fun set(target: Any, name: String, value: Any) =
        target.javaClass.getDeclaredField(name).apply { isAccessible = true }.set(target, value)

    // Bypass server startup, but execute the real Bukkit adaptation and FAWE generic API call.
    val plugin = allocate(WorldEditPlugin::class.java)
    set(plugin, "adapter", SimpleLifecycled.invalid<Any>())
    val bukkitActor = allocate(BukkitPlayer::class.java)
    val metadata = listOf(FixedMetadataValue(plugin, bukkitActor))
    val player =
        Proxy.newProxyInstance(Player::class.java.classLoader, arrayOf(Player::class.java)) {
            _,
            method,
            _ ->
          check(method.name == "getMetadata") { "Unexpected player call: ${method.name}" }
          metadata
        } as Player
    val proxyActor = allocate(LocationMaskedPlayerWrapper::class.java)
    val platform = allocate(ProxyPlatform::class.java).apply { this.proxyActor = proxyActor }
    val sessions = allocate(Sessions::class.java).apply { expectedActor = proxyActor }
    val worldEdit = allocate(WorldEdit::class.java)
    set(worldEdit, "platformManager", platform)
    set(worldEdit, "sessions", sessions)
    val mask = allocate(FaweSelectionMask::class.java)
    set(mask, "worldEdit", worldEdit)

    val instance =
        WorldEditPlugin::class.java.getDeclaredField("INSTANCE").apply { isAccessible = true }
    val previous = instance.get(null)
    try {
      instance.set(null, plugin)
      assertFailsWith<SessionLookupReached> {
        mask.execute(player, "fastasyncworldedit:/set stone")
      }
    } finally {
      instance.set(null, previous)
    }
  }
}
