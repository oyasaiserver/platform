package icu.oyasai.games.pvp

import java.io.File
import java.io.FileOutputStream
import java.nio.file.Files
import java.nio.file.StandardCopyOption
import java.util.Base64
import org.bukkit.GameMode
import org.bukkit.attribute.Attribute
import org.bukkit.configuration.file.YamlConfiguration
import org.bukkit.entity.Player
import org.bukkit.inventory.ItemStack
import org.bukkit.potion.PotionEffect

internal fun durableWrite(file: File, content: ByteArray) {
  Files.createDirectories(file.parentFile.toPath())
  val temporary = File(file.parentFile, file.name + ".tmp")
  FileOutputStream(temporary).use {
    it.write(content)
    it.fd.sync()
  }
  // Refuse participation on filesystems without atomic replacement.
  Files.move(
      temporary.toPath(),
      file.toPath(),
      StandardCopyOption.ATOMIC_MOVE,
      StandardCopyOption.REPLACE_EXISTING,
  )
}

internal fun saveYaml(file: File, yaml: YamlConfiguration) =
    durableWrite(file, yaml.saveToString().toByteArray(Charsets.UTF_8))

internal fun recoverSavedState(file: File, restoreAndSave: (YamlConfiguration) -> Unit) {
  val yaml = YamlConfiguration().also { it.load(file) }
  restoreAndSave(yaml)
  Files.delete(file.toPath())
}

internal fun requireExclusiveSnapshot(directory: File, fileName: String) {
  val moduleRoot = directory.parentFile.parentFile
  // Inventory-replacing games use the same journal shape and ownership rule.
  for (module in listOf("pvp", "bedwars", "tntrun")) {
    val other = File(moduleRoot, "$module/players/$fileName")
    check(other.canonicalFile == File(directory, fileName).canonicalFile || !other.exists()) {
      "Another game's inventory recovery is pending"
    }
  }
}

internal class PlayerStore(private val directory: File) {
  fun file(player: Player) = File(directory, "${player.uniqueId}.yml")

  fun pending(player: Player) = file(player).exists()

  fun capture(player: Player) {
    check(!pending(player)) { "Previous inventory recovery is pending" }
    requireExclusiveSnapshot(directory, file(player).name)
    check(player.itemOnCursor.type.isAir) { "Please empty the cursor first" }
    player.closeInventory()
    val y = YamlConfiguration()
    y.set(
        "inventory",
        player.inventory.contents.map {
          it?.let { item -> Base64.getEncoder().encodeToString(item.serializeAsBytes()) }
        },
    )
    y.set("location", player.location)
    y.set("compass-target", player.compassTarget)
    y.set("mode", player.gameMode.name)
    y.set("health", player.health)
    y.set("max-health", player.getAttribute(Attribute.MAX_HEALTH)!!.baseValue)
    y.set("food", player.foodLevel)
    y.set("saturation", player.saturation)
    y.set("exhaustion", player.exhaustion)
    y.set("exp", player.exp)
    y.set("level", player.level)
    y.set("total-exp", player.totalExperience)
    y.set("effects", player.activePotionEffects.toList())
    y.set("flight", player.allowFlight)
    y.set("flying", player.isFlying)
    y.set("fire", player.fireTicks)
    y.set("fall", player.fallDistance)
    y.set("collidable", player.isCollidable)
    y.set("held-slot", player.inventory.heldItemSlot)
    saveYaml(file(player), y)
  }

  fun restore(player: Player, destination: org.bukkit.Location? = null): Boolean {
    if (!pending(player)) return true
    if (player.isDead) return false
    recoverSavedState(file(player)) { y ->
      // Decode and validate everything before replacing any inventory slots.
      val inventory =
          (y.getList("inventory") ?: error("Recovery inventory is missing"))
              .map {
                if (it == null) null
                else ItemStack.deserializeBytes(Base64.getDecoder().decode(it as String))
              }
              .toTypedArray()
      check(inventory.size == player.inventory.contents.size) { "Recovery inventory size mismatch" }
      val location =
          destination ?: y.getLocation("location") ?: error("Recovery world is unavailable")
      val mode = GameMode.valueOf(y.getString("mode") ?: error("Recovery mode is missing"))
      val effects = (y.getList("effects") ?: emptyList<Any>()).map { it as PotionEffect }
      player.closeInventory()
      check(player.teleport(location)) { "Recovery teleport was cancelled" }
      player.setItemOnCursor(null)
      player.inventory.contents = inventory
      y.getLocation("compass-target")?.let { player.compassTarget = it }
      player.getAttribute(Attribute.MAX_HEALTH)!!.baseValue = y.getDouble("max-health")
      player.gameMode = mode
      player.foodLevel = y.getInt("food")
      player.saturation = y.getDouble("saturation").toFloat()
      player.exhaustion = y.getDouble("exhaustion").toFloat()
      player.totalExperience = y.getInt("total-exp")
      player.level = y.getInt("level")
      player.exp = y.getDouble("exp").toFloat()
      player.activePotionEffects.forEach { player.removePotionEffect(it.type) }
      player.addPotionEffects(effects)
      player.health =
          y.getDouble("health").coerceIn(0.01, player.getAttribute(Attribute.MAX_HEALTH)!!.value)
      player.allowFlight = y.getBoolean("flight")
      player.isFlying = y.getBoolean("flying")
      player.fireTicks = y.getInt("fire")
      player.fallDistance = y.getDouble("fall").toFloat()
      player.isCollidable = y.getBoolean("collidable")
      player.inventory.heldItemSlot = y.getInt("held-slot")
      // Persist vanilla player data before removing the recovery journal. A crash before
      // deletion repeats a replacement restore, never adds items a second time.
      player.saveData()
    }
    return true
  }
}
