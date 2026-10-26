package icu.oyasai.utilities.fart

import icu.oyasai.utilities.fart.FartFeature.Mode
import java.lang.reflect.Proxy
import java.util.UUID
import kotlin.test.Test
import kotlin.test.assertEquals
import kotlin.test.assertFalse
import kotlin.test.assertNull
import kotlin.test.assertTrue
import org.bukkit.entity.Entity
import org.bukkit.entity.Player
import org.bukkit.event.entity.EntityDismountEvent

class FartFeatureTest {
  private inline fun <reified T : Entity> entity(
      id: UUID = UUID.randomUUID(),
      sneaking: Boolean = false,
      vehicle: Entity? = null,
  ): T =
      Proxy.newProxyInstance(T::class.java.classLoader, arrayOf(T::class.java)) { _, method, _ ->
        when (method.name) {
          "getUniqueId" -> id
          "isSneaking" -> sneaking
          "getVehicle" -> vehicle
          else -> error("Unexpected entity call: ${method.name}")
        }
      } as T

  @Test
  fun stayCancelsHeadDismountAfterVehicleIsCleared() {
    val carrier = entity<Player>()
    val rider = entity<Player>(sneaking = true)
    FartFeature.toggle(rider.uniqueId, Mode.STAY)
    try {
      assertNull(rider.vehicle)
      val event = EntityDismountEvent(rider, carrier)
      FartFeature.onDismount(event)
      assertTrue(event.isCancelled)
    } finally {
      FartFeature.toggle(rider.uniqueId)
    }
  }

  @Test
  fun stayLeavesOtherDismountsAlone() {
    for (mode in listOf(null, Mode.NORMAL, Mode.STAY, Mode.FLY)) {
      for (head in listOf(false, true)) {
        for (sneaking in listOf(false, true)) {
          for (cancellable in listOf(false, true)) {
            val rider = entity<Player>(sneaking = sneaking)
            val carrier = if (head) entity<Player>() else entity<Entity>()
            if (mode != null) FartFeature.toggle(rider.uniqueId, mode)
            try {
              val event = EntityDismountEvent(rider, carrier, cancellable)
              FartFeature.onDismount(event)
              assertEquals(
                  mode == Mode.STAY && head && sneaking && cancellable,
                  event.isCancelled,
                  "mode=$mode head=$head sneaking=$sneaking cancellable=$cancellable",
              )
            } finally {
              if (FartFeature.isOn(rider.uniqueId)) FartFeature.toggle(rider.uniqueId)
            }
          }
        }
      }
    }
  }

  @Test
  fun stayStillChecksTheCurrentVehicleOutsideDismount() {
    val carrier = entity<Player>()
    val id = UUID.randomUUID()
    FartFeature.toggle(id, Mode.STAY)
    try {
      assertTrue(FartFeature.staysOnHead(entity<Player>(id, vehicle = carrier)))
      assertFalse(FartFeature.staysOnHead(entity<Player>(id)))
      assertFalse(FartFeature.staysOnHead(entity<Player>(id, vehicle = entity<Entity>())))
    } finally {
      FartFeature.toggle(id)
    }
  }

  @Test
  fun parsesModesAndOptionalTargets() {
    val cases =
        listOf(
            emptyList<String>() to FartFeature.Parsed(Mode.NORMAL, null),
            listOf("stay") to FartFeature.Parsed(Mode.STAY, null),
            listOf("fly") to FartFeature.Parsed(Mode.FLY, null),
            listOf("StAy") to FartFeature.Parsed(Mode.STAY, null),
            listOf("FLY") to FartFeature.Parsed(Mode.FLY, null),
            listOf("marzipan99") to FartFeature.Parsed(Mode.NORMAL, "marzipan99"),
            listOf("stay", "marzipan99") to FartFeature.Parsed(Mode.STAY, "marzipan99"),
            listOf("fly", "marzipan99") to FartFeature.Parsed(Mode.FLY, "marzipan99"),
        )
    for ((args, expected) in cases) assertEquals(expected, FartFeature.parse(args.toTypedArray()))
    for (args in
        listOf(listOf("stay", "a", "b"), listOf("a", "b"), listOf(""), listOf("fly", ""))) {
      assertNull(FartFeature.parse(args.toTypedArray()))
    }
  }

  @Test
  fun completesModesAndPermissionGatedPlayers() {
    val players = listOf("marzipan99", "Steve")
    fun complete(vararg args: String, others: Boolean = false) =
        FartFeature.complete(args, players, others)
    assertEquals(listOf("stay", "fly"), complete(""))
    assertEquals(listOf("stay", "fly", "marzipan99", "Steve"), complete("", others = true))
    assertEquals(listOf("stay"), complete("ST"))
    assertEquals(listOf("fly"), complete("F"))
    assertEquals(listOf("stay", "Steve"), complete("ST", others = true))
    assertEquals(emptyList(), complete("ma"))
    assertEquals(listOf("marzipan99"), complete("MA", others = true))
    assertEquals(players, complete("stay", "", others = true))
    assertEquals(listOf("marzipan99"), complete("FLY", "MA", others = true))
    assertEquals(emptyList(), complete("stay", ""))
    assertEquals(emptyList(), complete("fly", ""))
    assertEquals(emptyList(), complete("other", "", others = true))
    assertEquals(emptyList(), complete("stay", "missing", others = true))
    assertEquals(emptyList(), complete("stay", "a", "", others = true))
    assertEquals(emptyList(), complete(others = true))
  }

  @Test
  fun normalTogglesOffAndOn() {
    val id = UUID.randomUUID()
    assertFalse(FartFeature.isOn(id))
    assertEquals(Mode.NORMAL, FartFeature.toggle(id))
    assertTrue(FartFeature.isOn(id))
    assertNull(FartFeature.toggle(id))
    assertFalse(FartFeature.isOn(id))
  }

  @Test
  fun modesSwitchAndDefaultTurnsAnyModeOff() {
    val id = UUID.randomUUID()
    assertEquals(Mode.NORMAL, FartFeature.toggle(id))
    assertEquals(Mode.STAY, FartFeature.toggle(id, Mode.STAY))
    assertEquals(Mode.FLY, FartFeature.toggle(id, Mode.FLY))
    assertNull(FartFeature.toggle(id))
    assertEquals(Mode.STAY, FartFeature.toggle(id, Mode.STAY))
    assertNull(FartFeature.toggle(id))
    assertFalse(FartFeature.isOn(id))
  }

  @Test
  fun repeatingEachModeTurnsItOff() {
    for (mode in Mode.entries) {
      val id = UUID.randomUUID()
      assertEquals(mode, FartFeature.toggle(id, mode))
      assertNull(FartFeature.toggle(id, mode))
      assertFalse(FartFeature.isOn(id))
    }
  }

  @Test
  fun playersHaveIndependentModes() {
    val a = UUID.randomUUID()
    val b = UUID.randomUUID()
    assertEquals(Mode.STAY, FartFeature.toggle(a, Mode.STAY))
    assertFalse(FartFeature.isOn(b))
    assertEquals(Mode.FLY, FartFeature.toggle(b, Mode.FLY))
    assertNull(FartFeature.toggle(a, Mode.STAY))
    assertFalse(FartFeature.isOn(a))
    assertTrue(FartFeature.isOn(b))
    assertNull(FartFeature.toggle(b, Mode.FLY))
  }

  @Test
  fun liftAddsSpeedUpToTheCap() {
    assertEquals(0.3, FartFeature.lifted(0.0), 1e-9)
    assertEquals(-0.2, FartFeature.lifted(-0.5), 1e-9)
    assertEquals(0.5, FartFeature.lifted(0.2), 1e-9)
    assertEquals(0.6, FartFeature.lifted(0.3), 1e-9)
    assertEquals(0.6, FartFeature.lifted(0.5), 1e-9)
    assertEquals(0.6, FartFeature.lifted(1.0), 1e-9)
  }
}
