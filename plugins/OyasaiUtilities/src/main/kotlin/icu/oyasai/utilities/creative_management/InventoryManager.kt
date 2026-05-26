package icu.oyasai.utilities.creative_management

import icu.oyasai.utilities.OyasaiUtilities.plugin
import java.io.ByteArrayInputStream
import java.io.ByteArrayOutputStream
import java.io.File
import java.io.IOException
import org.bukkit.GameMode
import org.bukkit.configuration.file.YamlConfiguration
import org.bukkit.entity.Player
import org.bukkit.inventory.Inventory
import org.bukkit.inventory.ItemStack
import org.bukkit.inventory.PlayerInventory
import org.bukkit.util.io.BukkitObjectInputStream
import org.bukkit.util.io.BukkitObjectOutputStream
import org.yaml.snakeyaml.external.biz.base64Coder.Base64Coder

/** Inventory manager class. */
class InventoryManager(private val p: Player) {
  private val file = File(plugin.dataFolder, "CreativeManagement/data/" + p.uniqueId + ".yml")
  private val cm = YamlConfiguration.loadConfiguration(file)

  fun hasContent(): Boolean {
    return !cm.getKeys(false).isEmpty()
  }

  /**
   * Load inventory.
   *
   * @param gm the game mode.
   */
  fun loadInventory(gm: GameMode) {
    if (p.hasPermission("cm.bypass")) return
    val gameMode = gm.name
    if (
        cm.contains("$gameMode.content") &&
            cm.isString("$gameMode.content") &&
            cm.contains("$gameMode.armor") &&
            cm.isString("$gameMode.armor")
    ) {
      try {
        cm.getString("$gameMode.content")?.let {
          p.inventory.contents = this.itemStackArrayFromBase64(it)
        }
        cm.getString("$gameMode.armor")?.let {
          p.inventory.armorContents = this.itemStackArrayFromBase64(it)
        }
      } catch (e: IOException) {
        plugin.logger.severe(e.message)
      }
      plugin.logger.info(
          "Load inventory of user " +
              p.name +
              " in file " +
              p.uniqueId +
              ".yml for gamemode " +
              gameMode
      )
    } else {
      p.inventory.clear()
      plugin.logger.info(
          "Clear inventory for " +
              p.name +
              " (" +
              p.uniqueId +
              ") because no saved inventory found for gamemode " +
              gameMode
      )
    }
  }

  /**
   * Save inventory.
   *
   * @param gm the game mode.
   */
  fun saveInventory(gm: GameMode) {
    if (p.hasPermission("cm.bypass")) return
    val gameMode = gm.name
    val encoded = this.playerInventoryToBase64(p.inventory)
    cm.set("$gameMode.content", encoded[0])
    cm.set("$gameMode.armor", encoded[1])
    if (
        cm.contains("$gameMode.content") &&
            cm.isString("$gameMode.content") &&
            cm.contains("$gameMode.armor") &&
            cm.isString("$gameMode.armor")
    ) {
      cm.save(file)
      plugin.logger.info(
          "Save inventory of user " +
              p.name +
              " in file " +
              p.uniqueId +
              ".yml for gamemode " +
              gameMode
      )
    }
  }

  /**
   * Player inventory to base 64 string.
   *
   * @param playerInventory the player inventory.
   * @return the string [ ]
   * @throws IllegalStateException the illegal state exception.
   */
  @Throws(IllegalStateException::class)
  private fun playerInventoryToBase64(playerInventory: PlayerInventory): Array<String> {
    // get the main content part, this doesn't return the armor
    val content = this.toBase64(playerInventory)
    val armor = itemStackArrayToBase64(playerInventory.armorContents)

    return arrayOf(content, armor)
  }

  /**
   * Special thanks to Comphenix in the Bukkit forums or also known as aadnk on GitHub.
   * [Original Source](https://gist.github.com/aadnk/8138186)
   *
   * @param inventory the inventory
   * @return the string
   * @throws IllegalStateException the illegal state exception
   */
  @Throws(IllegalStateException::class)
  private fun toBase64(inventory: Inventory): String {
    try {
      val outputStream = ByteArrayOutputStream()
      val dataOutput = BukkitObjectOutputStream(outputStream)

      // Write the size of the inventory
      dataOutput.writeInt(inventory.size)

      // Save every element in the list
      for (i in 0..<inventory.size) {
        dataOutput.writeObject(inventory.getItem(i))
      }

      // Serialize that array
      dataOutput.close()
      return Base64Coder.encodeLines(outputStream.toByteArray())
    } catch (e: Exception) {
      throw IllegalStateException("Unable to save item stacks.", e)
    }
  }

  /**
   * Item stack array from base 64 item stack.
   *
   * @param data the data.
   * @return the item stack.
   * @throws IOException the io exception.
   */
  @Throws(IOException::class)
  private fun itemStackArrayFromBase64(data: String): Array<ItemStack?> {
    try {
      val inputStream = ByteArrayInputStream(Base64Coder.decodeLines(data))
      val dataInput = BukkitObjectInputStream(inputStream)
      val items = arrayOfNulls<ItemStack>(dataInput.readInt())

      // Read the serialized inventory.
      for (i in items.indices) {
        items[i] = dataInput.readObject() as ItemStack?
      }

      dataInput.close()
      return items
    } catch (e: ClassNotFoundException) {
      throw IOException("Unable to decode class type.", e)
    }
  }

  companion object {
    /**
     * Item stack array to base 64 string.
     *
     * @param items the items.
     * @return the string.
     * @throws IllegalStateException the illegal state exception.
     */
    @Throws(IllegalStateException::class)
    fun itemStackArrayToBase64(items: Array<ItemStack?>): String {
      try {
        val outputStream = ByteArrayOutputStream()
        val dataOutput = BukkitObjectOutputStream(outputStream)

        // Write the size of the inventory
        dataOutput.writeInt(items.size)

        // Save every element in the list
        for (item in items) {
          dataOutput.writeObject(item)
        }

        // Serialize that array
        dataOutput.close()
        return Base64Coder.encodeLines(outputStream.toByteArray())
      } catch (e: Exception) {
        throw IllegalStateException("Unable to save item stacks.", e)
      }
    }
  }
}
