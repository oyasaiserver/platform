package icu.oyasai.utilities.sit

import java.lang.reflect.Proxy
import java.util.UUID
import kotlin.test.Test
import kotlin.test.assertEquals
import kotlin.test.assertFalse
import kotlin.test.assertNull
import org.bukkit.NamespacedKey
import org.bukkit.entity.Entity
import org.bukkit.entity.Interaction
import org.bukkit.entity.Player
import org.bukkit.persistence.PersistentDataContainer
import org.bukkit.persistence.PersistentDataType

class PlayerSitRulesTest {
  private val seatKey = requireNotNull(NamespacedKey.fromString("oyasaiutilities:sit_seat"))

  private inline fun <reified T> stub(crossinline invoke: (String, Array<out Any?>?) -> Any?): T =
      Proxy.newProxyInstance(T::class.java.classLoader, arrayOf(T::class.java)) { _, method, args ->
        invoke(method.name, args)
      } as T

  private fun player(id: UUID): Player = stub { name, _ ->
    when (name) {
      "getUniqueId" -> id
      else -> error("Unexpected player call: $name")
    }
  }

  private fun seat(vararg passengers: Entity, marked: Boolean = true): Interaction {
    val data =
        stub<PersistentDataContainer> { name, args ->
          when (name) {
            "has" -> marked && args?.toList() == listOf(seatKey, PersistentDataType.BYTE)
            else -> error("Unexpected PDC call: $name")
          }
        }
    return stub { name, _ ->
      when (name) {
        "getPassengers" -> passengers.toList()
        "getPersistentDataContainer" -> data
        else -> error("Unexpected seat call: $name")
      }
    }
  }

  @Test
  fun `seat height clears the carrier's view and has a minimum`() {
    assertEquals(0.5f, PlayerSitRules.interactionHeight(1.0, 1.0), 1e-6f)
    assertEquals(1.19f, PlayerSitRules.interactionHeight(2.0, 0.5), 1e-6f)
    assertEquals(0.08f, PlayerSitRules.interactionHeight(0.5, 2.0), 1e-6f)
  }

  @Test
  fun `tagged seats are traversed to find the top player`() {
    val rider = UUID.randomUUID()
    val bottom = UUID.randomUUID()
    val middle = UUID.randomUUID()
    val top = UUID.randomUUID()
    val graph = mapOf(bottom to listOf(seat(player(middle))), middle to listOf(seat(player(top))))
    assertEquals(
        top,
        PlayerSitRules.top(rider, bottom) {
          PlayerSitRules.playerPassengers(graph[it].orEmpty(), seatKey)
        },
    )
  }

  @Test
  fun `only a marked seat with exactly one player is transparent`() {
    val id = UUID.randomUUID()
    val passenger = player(id)
    assertEquals(listOf(id), PlayerSitRules.playerPassengers(listOf(passenger), seatKey))
    assertNull(PlayerSitRules.playerPassengers(listOf(seat(passenger, marked = false)), seatKey))
    assertNull(PlayerSitRules.playerPassengers(listOf(seat()), seatKey))
    assertNull(
        PlayerSitRules.playerPassengers(listOf(seat(passenger, player(UUID.randomUUID()))), seatKey)
    )
    assertNull(PlayerSitRules.playerPassengers(listOf(seat(seat(passenger))), seatKey))
  }

  @Test
  fun `every pair follows the specified rank order`() {
    val groups =
        listOf(
            "white",
            "blue",
            "takumi",
            "builder",
            "jokyu",
            "chukyu",
            "default",
            "mod",
            "admini",
            "admin",
            "dev",
        )
    groups.forEachIndexed { riderIndex, rider ->
      groups.forEachIndexed { targetIndex, target ->
        assertEquals(
            riderIndex < targetIndex,
            PlayerSitRules.canRide(rider, target),
            "$rider -> $target",
        )
      }
    }
  }

  @Test
  fun `unknown groups are lowest and cannot ride one another`() {
    assertEquals(true, PlayerSitRules.canRide("dev", "unknown"))
    assertFalse(PlayerSitRules.canRide("unknown", "dev"))
    assertFalse(PlayerSitRules.canRide("unknown", "another"))
  }

  @Test
  fun `mode parsing accepts command case and rejects invalid values`() {
    assertEquals(PlayerSitMode.RANK, PlayerSitMode.parse("RaNk"))
    assertEquals(PlayerSitMode.ALL, PlayerSitMode.parse("all"))
    assertNull(PlayerSitMode.parse("invalid"))
  }

  @Test
  fun `new rider attaches to the top of an existing stack`() {
    val rider = UUID.randomUUID()
    val bottom = UUID.randomUUID()
    val middle = UUID.randomUUID()
    val top = UUID.randomUUID()
    val graph = mapOf(bottom to listOf(middle), middle to listOf(top), top to emptyList())
    assertEquals(top, PlayerSitRules.top(rider, bottom) { graph[it] })
    assertEquals(top, PlayerSitRules.top(rider, top) { graph[it] })
  }

  @Test
  fun `self riding and cycles including rider are rejected`() {
    val rider = UUID.randomUUID()
    val other = UUID.randomUUID()
    assertNull(PlayerSitRules.top(rider, rider) { emptyList() })
    assertNull(PlayerSitRules.top(rider, other) { listOf(rider) })
    assertNull(PlayerSitRules.top(rider, other) { listOf(other) })
  }

  @Test
  fun `carrier exit releases the entire upper stack top first`() {
    val bottom = UUID.randomUUID()
    val middle = UUID.randomUUID()
    val top = UUID.randomUUID()
    val middleRide = PlayerSitRules.Ride(bottom, seat(player(middle)))
    val topRide = PlayerSitRules.Ride(middle, seat(player(top)))
    val rides = mutableMapOf(middle to middleRide, top to topRide)
    assertEquals(listOf(topRide, middleRide), PlayerSitRules.detach(rides, bottom))
    assertEquals(emptyMap(), rides)
    assertEquals(emptyList(), PlayerSitRules.detach(rides, bottom))
  }

  @Test
  fun `middle rider exit preserves their carrier and unrelated stacks`() {
    val bottom = UUID.randomUUID()
    val lower = UUID.randomUUID()
    val middle = UUID.randomUUID()
    val top = UUID.randomUUID()
    val otherRider = UUID.randomUUID()
    val otherCarrier = UUID.randomUUID()
    val lowerRide = PlayerSitRules.Ride(bottom, seat(player(lower)))
    val middleRide = PlayerSitRules.Ride(lower, seat(player(middle)))
    val topRide = PlayerSitRules.Ride(middle, seat(player(top)))
    val otherRide = PlayerSitRules.Ride(otherCarrier, seat(player(otherRider)))
    val rides =
        mutableMapOf(
            lower to lowerRide,
            middle to middleRide,
            top to topRide,
            otherRider to otherRide,
        )
    assertEquals(listOf(topRide, middleRide), PlayerSitRules.detach(rides, middle))
    assertEquals(mapOf(lower to lowerRide, otherRider to otherRide), rides)
  }

  @Test
  fun `unavailable and branching passenger chains are rejected`() {
    val rider = UUID.randomUUID()
    val target = UUID.randomUUID()
    assertNull(PlayerSitRules.top(rider, target) { null })
    assertNull(PlayerSitRules.top(rider, target) { listOf(UUID.randomUUID(), UUID.randomUUID()) })
  }
}
