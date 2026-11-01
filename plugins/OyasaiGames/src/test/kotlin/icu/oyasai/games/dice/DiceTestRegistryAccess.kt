package icu.oyasai.games.dice

import io.papermc.paper.registry.RegistryAccess
import io.papermc.paper.registry.RegistryKey
import java.lang.reflect.Proxy
import org.bukkit.Keyed
import org.bukkit.Registry
import org.bukkit.block.BlockType

/** Supplies the block air property used by DiceItem without starting a Minecraft server. */
class DiceTestRegistryAccess : RegistryAccess {
  @Suppress("UNCHECKED_CAST", "OVERRIDE_DEPRECATION")
  override fun <T : Keyed> getRegistry(type: Class<T>): Registry<T> = registry(false) as Registry<T>

  @Suppress("UNCHECKED_CAST")
  override fun <T : Keyed> getRegistry(key: RegistryKey<T>): Registry<T> =
      registry(key == RegistryKey.BLOCK) as Registry<T>

  private fun registry(blocks: Boolean): Registry<*> =
      Proxy.newProxyInstance(Registry::class.java.classLoader, arrayOf(Registry::class.java)) {
          _,
          method,
          args ->
        check(blocks && method.name in listOf("get", "getOrThrow")) {
          "Unexpected registry method: ${method.name}"
        }
        val key = args!![0] as net.kyori.adventure.key.Key
        Proxy.newProxyInstance(
            BlockType.Typed::class.java.classLoader,
            arrayOf(BlockType.Typed::class.java),
        ) { _, blockMethod, _ ->
          when (blockMethod.name) {
            "isAir" -> key.value() in listOf("air", "cave_air", "void_air")
            else -> error("Unexpected block type method: ${blockMethod.name}")
          }
        }
      } as Registry<*>
}
