package icu.oyasai.games.inventory

import java.lang.reflect.Proxy
import java.util.UUID
import kotlin.test.*
import org.bukkit.Bukkit
import org.bukkit.Server
import org.bukkit.plugin.PluginManager

class AbsentUtilitiesProbe {
  fun run(id: UUID) {
    InventoryProtection.checkAvailable(id, "pvp")
    InventoryProtection.acquire(id, "pvp")
  }
}

class InventoryProtectionTest {
  @Test
  fun `Games still runs without Utilities or its API classes installed`() {
    val manager =
        Proxy.newProxyInstance(
            PluginManager::class.java.classLoader,
            arrayOf(PluginManager::class.java),
        ) { _, method, _ ->
          check(method.name == "getPlugin")
          null
        } as PluginManager
    val server =
        Proxy.newProxyInstance(Server::class.java.classLoader, arrayOf(Server::class.java)) {
            _,
            method,
            _ ->
          check(method.name == "getPluginManager")
          manager
        } as Server
    val field = Bukkit::class.java.getDeclaredField("server").apply { isAccessible = true }
    val previous = field.get(null)
    field.set(null, server)
    try {
      val parent = javaClass.classLoader
      val isolated =
          object : ClassLoader(parent) {
            override fun loadClass(name: String, resolve: Boolean): Class<*> {
              if (name.startsWith("icu.oyasai.utilities.")) throw ClassNotFoundException(name)
              if (
                  name == InventoryProtection::class.java.name ||
                      name == AbsentUtilitiesProbe::class.java.name
              ) {
                val loaded =
                    findLoadedClass(name)
                        ?: parent.getResourceAsStream(name.replace('.', '/') + ".class")!!.use {
                          val bytes = it.readBytes()
                          defineClass(name, bytes, 0, bytes.size)
                        }
                if (resolve) resolveClass(loaded)
                return loaded
              }
              return super.loadClass(name, resolve)
            }
          }
      val probe = isolated.loadClass(AbsentUtilitiesProbe::class.java.name)
      probe
          .getMethod("run", UUID::class.java)
          .invoke(probe.getConstructor().newInstance(), UUID.randomUUID())
    } finally {
      field.set(null, previous)
    }
  }
}
