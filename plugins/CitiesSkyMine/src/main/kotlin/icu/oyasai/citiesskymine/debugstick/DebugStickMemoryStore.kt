package icu.oyasai.citiesskymine.debugstick

import icu.oyasai.citiesskymine.Main
import org.bukkit.Material
import org.bukkit.configuration.file.YamlConfiguration
import org.bukkit.entity.Player
import java.io.File
import java.util.UUID
import java.util.concurrent.ConcurrentHashMap

class DebugStickMemoryStore(private val plugin: Main) {

    private val legacyFile = File(plugin.dataFolder, "debug-stick-memory.yml")
    private val volatileSelections = ConcurrentHashMap<MemoryKey, String>()

    fun load() {
        volatileSelections.clear()
        if (!legacyFile.exists()) {
            return
        }

        val yaml = YamlConfiguration.loadConfiguration(legacyFile)
        val players = yaml.getConfigurationSection("players") ?: return
        for (playerId in players.getKeys(false)) {
            val uuid = runCatching { UUID.fromString(playerId) }.getOrNull() ?: continue
            val playerSection = players.getConfigurationSection(playerId) ?: continue
            for (blockType in playerSection.getKeys(false)) {
                val property = playerSection.getString(blockType) ?: continue
                val path = propertyPath(blockType)
                if (plugin.playerDataStore.getString(uuid, path) == null) {
                    plugin.playerDataStore.set(uuid, path, property)
                }
            }
        }
    }

    fun save() {
        plugin.playerDataStore.saveAll()
    }

    fun selectedProperty(player: Player, material: Material): String? =
        volatileSelections[MemoryKey(player.uniqueId, blockTypeKey(material))]
            ?: plugin.playerDataStore.getString(player, propertyPath(material))

    fun setSelectedProperty(player: Player, material: Material, propertyName: String) {
        if (plugin.config.getBoolean("debug-stick.memory-persist", true)) {
            plugin.playerDataStore.set(player, propertyPath(material), propertyName)
        } else {
            volatileSelections[MemoryKey(player.uniqueId, blockTypeKey(material))] = propertyName
        }
    }

    private fun blockTypeKey(material: Material): String = material.key.toString()

    private fun propertyPath(material: Material): String =
        "debug-stick.selected.${material.key.namespace}.${material.key.key}"

    private fun propertyPath(blockType: String): String {
        val parts = blockType.split(':', limit = 2)
        return if (parts.size == 2) {
            "debug-stick.selected.${parts[0]}.${parts[1]}"
        } else {
            "debug-stick.selected.minecraft.$blockType"
        }
    }

    private data class MemoryKey(
        val playerId: UUID,
        val blockType: String
    )
}
