package com.github.sahyuya.oyasaiMenu.item

import java.lang.reflect.Proxy
import java.util.UUID
import kotlin.test.Test
import kotlin.test.assertEquals
import kotlin.test.assertFalse
import kotlin.test.assertTrue
import net.kyori.adventure.text.serializer.gson.GsonComponentSerializer
import org.bukkit.entity.Player
import org.bukkit.inventory.ItemStack
import org.bukkit.inventory.PlayerInventory
import org.bukkit.plugin.Plugin
import sun.misc.Unsafe

class MenuItemTest {
  private val template = bareItemStack()
  private var held = template
  private var playedBefore = false
  private var given = 0
  private val commands = mutableListOf<String>()
  private val messages = mutableListOf<String>()
  private val id = UUID.randomUUID()
  private val inventory =
      proxy(PlayerInventory::class.java) { method, args ->
        when (method) {
          "getItemInMainHand" -> held
          "addItem" -> {
            given += (args?.get(0) as Array<*>).size
            HashMap<Int, ItemStack>()
          }
          else -> error("Unexpected inventory method: $method")
        }
      }
  private val player =
      proxy(Player::class.java) { method, args ->
        when (method) {
          "hasPlayedBefore" -> playedBefore
          "getInventory" -> inventory
          "getUniqueId" -> id
          "performCommand" -> {
            commands += args!![0] as String
            true
          }
          "sendMessage" -> {
            messages += args!![0] as String
            null
          }
          else -> error("Unexpected player method: $method")
        }
      }

  @Test
  fun firstJoinGivesOnlyToNewPlayer() {
    val item = feature()
    item.giveOnFirstJoin(player)
    assertEquals(1, given)
    playedBefore = true
    item.giveOnFirstJoin(player)
    assertEquals(1, given)
  }

  @Test
  fun craftingWithTemplateIsCancelledAndMessaged() {
    val item = feature()
    val cancelled = item.cancelCraft(arrayOf(bareItemStack(), template)) { messages += it }
    assertTrue(cancelled)
    assertEquals(" §8► §cYou can not use the menu item in crafting!", messages.single())
  }

  @Test
  fun rightClickRunsOncePerTickAndOnlyForMatchingItem() {
    var tick = 10
    val item = feature { tick }
    assertTrue(item.activate(player))
    assertTrue(item.activate(player))
    assertEquals(listOf("menu"), commands)
    tick++
    assertTrue(item.activate(player))
    assertEquals(listOf("menu", "menu"), commands)
    held = bareItemStack()
    tick++
    assertFalse(item.activate(player))
    assertEquals(2, commands.size)
  }

  private fun feature(tick: () -> Int = { 0 }): MenuItem {
    val plugin =
        proxy(Plugin::class.java) { method, _ -> error("Unexpected plugin method: $method") }
    return MenuItem(plugin, tick, { held, saved -> held === saved }, { it }, template)
  }

  @Test
  fun fixedBookComponentsMatchProductionStructure() {
    val serializer = GsonComponentSerializer.gson()
    assertEquals(
        serializer.deserialize("""{"text":"menu本","color":"green","bold":true}"""),
        MenuBook.name,
    )
    assertEquals(
        listOf(
            serializer.deserialize(
                """{"text":"右クリックで","color":"gold","bold":true,"extra":[{"text":"/menu","color":"blue","bold":true},{"text":"代わりに!","color":"gold","bold":true}]}"""
            )
        ),
        MenuBook.lore,
    )
  }

  private fun bareItemStack(): ItemStack {
    val field = Unsafe::class.java.getDeclaredField("theUnsafe")
    field.isAccessible = true
    return (field.get(null) as Unsafe).allocateInstance(ItemStack::class.java) as ItemStack
  }

  private fun <T> proxy(type: Class<T>, call: (String, Array<Any?>?) -> Any?): T =
      type.cast(
          Proxy.newProxyInstance(type.classLoader, arrayOf(type)) { _, method, args ->
            call(method.name, args)
          }
      )
}
