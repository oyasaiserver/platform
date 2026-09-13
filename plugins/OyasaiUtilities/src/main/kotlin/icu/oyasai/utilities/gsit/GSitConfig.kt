package icu.oyasai.utilities.gsit

import icu.oyasai.utilities.YamlConfig
import org.bukkit.Bukkit
import org.bukkit.Material
import org.bukkit.NamespacedKey
import org.bukkit.Tag

object GSitConfig : YamlConfig("GSit/config.yml", true) {
  var getUpSneak: Boolean = true
    private set

  var getUpBreak: Boolean = true
    private set

  var centerBlock: Boolean = true
    private set

  var emptyHandOnly: Boolean = true
    private set

  var bottomPartOnly: Boolean = true
    private set

  var commandBlacklist: Set<String> = setOf("skin", "nick")
    private set

  var worldBlacklist: Set<String> = emptySet()
    private set

  private var sitMaterials: Set<Material> = emptySet()
  private var sitTags: List<Tag<Material>> = emptyList()

  fun load() {
    saveDefault()
    reload()
    getUpSneak = getBoolean("get-up-sneak", true)
    getUpBreak = getBoolean("get-up-break", true)
    centerBlock = getBoolean("center-block", true)
    emptyHandOnly = getBoolean("empty-hand-only", true)
    bottomPartOnly = getBoolean("bottom-part-only", true)
    commandBlacklist = getStringList("command-blacklist").map { it.lowercase() }.toSet()
    worldBlacklist = getStringList("world-blacklist").toSet()
    loadSitMaterials(getStringList("sit-materials"))
  }

  fun isSitMaterial(material: Material): Boolean =
      sitMaterials.contains(material) || sitTags.any { it.isTagged(material) }

  private fun loadSitMaterials(entries: List<String>) {
    val materials = mutableSetOf<Material>()
    val tags = mutableListOf<Tag<Material>>()
    for (raw in entries) {
      val token = raw.substringBefore(';').trim()
      if (token.isEmpty()) continue
      if (token.startsWith('#')) {
        resolveTag(token.removePrefix("#").removePrefix("minecraft:"))?.let { tags.add(it) }
        continue
      }
      val material = Material.matchMaterial(token)
      if (material != null) materials.add(material)
    }
    sitMaterials = materials
    sitTags = tags
  }

  private fun resolveTag(name: String): Tag<Material>? {
    val key = NamespacedKey.minecraft(name.lowercase())
    Bukkit.getTag(Tag.REGISTRY_BLOCKS, key, Material::class.java)?.let {
      return it
    }
    return when (name.lowercase()) {
      "stairs" -> Tag.STAIRS
      "slabs" -> Tag.SLABS
      "wool_carpets" -> Tag.WOOL_CARPETS
      "carpets" -> Tag.WOOL_CARPETS
      else -> null
    }
  }
}
