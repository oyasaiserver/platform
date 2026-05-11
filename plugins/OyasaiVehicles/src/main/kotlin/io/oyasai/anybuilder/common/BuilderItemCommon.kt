package io.oyasaiserver.anybuilder.common

import io.oyasaiserver.toolbox.legacyDisplayName
import io.oyasaiserver.toolbox.legacyLore
import org.bukkit.Material
import org.bukkit.inventory.ItemStack
import org.bukkit.inventory.meta.ItemMeta

object BuilderItemSupport {
    data class VehicleIntRule(
        val valueRegex: Regex,
        val max: Int,
        val min: Int = 1
    )

    data class LoreLineReplacement(
        val regex: Regex,
        val replacement: String
    )

    data class VehicleStatSpec(
        val title: String,
        val regex: Regex,
        val defaultValue: Int,
        val strict: Boolean = false,
        val fromEnd: Boolean = true
    )

    fun checkCustomModelMinecart(item: ItemStack?, customModelData: Int): Boolean {
        if (item?.type != Material.HOPPER_MINECART) return false
        val meta = item.itemMeta ?: return false
        return meta.hasCustomModelDataComponent() && meta.customModelDataComponent.floats.singleOrNull() == customModelData.toFloat()
    }

    fun buildMinecartItem(
        baseName: String,
        playerName: String?,
        customModelData: Int,
        lore: List<String>
    ): ItemStack? {
        val item = ItemStack(Material.HOPPER_MINECART)
        val meta = item.itemMeta ?: return null
        meta.legacyLore = lore.toMutableList()
        meta.legacyDisplayName = "${if (playerName != null) "${playerName}の" else ""}$baseName"
        val customModelDataComponent = meta.customModelDataComponent
        customModelDataComponent.setFloats(listOf(customModelData.toFloat()))
        meta.setCustomModelDataComponent(customModelDataComponent)
        item.itemMeta = meta
        return item
    }

    fun readLoreValue(meta: ItemMeta?, regex: Regex, prefix: String, fromEnd: Boolean = false): String? {
        val lore = meta?.legacyLore ?: return null
        val line = if (fromEnd) lore.lastOrNull { regex.matches(it) } else lore.firstOrNull { regex.matches(it) }
        return line?.replace(prefix, "")
    }

    fun readLoreInt(
        meta: ItemMeta?,
        regex: Regex,
        prefix: String,
        default: Int,
        strict: Boolean = false,
        fromEnd: Boolean = false
    ): Int {
        val value = readLoreValue(meta, regex, prefix, fromEnd) ?: return default
        return if (strict) {
            value.toInt()
        } else {
            value.toIntOrNull() ?: default
        }
    }

    fun readLoreBoolean(
        meta: ItemMeta?,
        regex: Regex,
        prefix: String,
        default: Boolean = false,
        fromEnd: Boolean = false
    ): Boolean {
        val value = readLoreValue(meta, regex, prefix, fromEnd) ?: return default
        return value.toBoolean()
    }

    fun readVehicleStatValues(meta: ItemMeta?, specs: List<VehicleStatSpec>): List<Int> {
        return specs.map { spec ->
            readLoreInt(
                meta,
                spec.regex,
                "${spec.title}: ",
                spec.defaultValue,
                strict = spec.strict,
                fromEnd = spec.fromEnd
            )
        }
    }

    fun readVehicleStatValues(item: ItemStack, specs: List<VehicleStatSpec>): List<Int> {
        return readVehicleStatValues(item.itemMeta, specs)
    }

    fun replaceLoreLines(
        item: ItemStack,
        replacements: List<LoreLineReplacement>,
        costRegex: Regex? = null,
        costValue: Int? = null
    ): Boolean {
        val meta = item.itemMeta ?: return false
        val lore = meta.legacyLore ?: return false
        val newLore = mutableListOf<String>()
        val found = BooleanArray(replacements.size)
        var foundCost = costValue == null || costRegex == null

        for (line in lore) {
            var replaced = false

            if (costRegex != null && costRegex.matches(line)) {
                if (costValue != null) {
                    newLore.add("Cost: $costValue")
                    foundCost = true
                }
                replaced = true
            } else {
                for ((index, replacement) in replacements.withIndex()) {
                    if (replacement.regex.matches(line)) {
                        newLore.add(replacement.replacement)
                        found[index] = true
                        replaced = true
                        break
                    }
                }
            }

            if (!replaced) {
                newLore.add(line)
            }
        }

        if (found.any { !it } || !foundCost) return false

        meta.legacyLore = newLore
        item.itemMeta = meta
        return true
    }

    fun appendLoreLine(item: ItemStack, line: String): Boolean {
        val meta = item.itemMeta ?: return false
        val lore = meta.legacyLore ?: mutableListOf()
        lore.add(line)
        meta.legacyLore = lore
        item.itemMeta = meta
        return true
    }

    fun renameItem(item: ItemStack, displayName: String): Boolean {
        val meta = item.itemMeta ?: return false
        meta.legacyDisplayName = displayName
        item.itemMeta = meta
        return true
    }

    fun rewriteLore(
        item: ItemStack,
        requireExistingLore: Boolean = true,
        rewrite: (List<String>) -> MutableList<String>
    ): Boolean {
        val meta = item.itemMeta ?: return false
        val lore = meta.legacyLore ?: if (requireExistingLore) return false else mutableListOf<String>()
        meta.legacyLore = rewrite(lore)
        item.itemMeta = meta
        return true
    }

    fun getCostLimit(meta: ItemMeta?, costLimitRegex: Regex): Int {
        return readLoreInt(meta, costLimitRegex, "CostLimit: ", -1)
    }

    fun getCostFromStats(stats: List<Int>, baseValues: List<Int>): Int? {
        if (stats.isEmpty()) return null
        var total = 0
        for (i in stats.indices) {
            val base = baseValues.getOrElse(i) { 0 }
            total += (stats[i] - base)
        }
        return total
    }

    fun changeVehicleInt(
        item: ItemStack,
        stat: String,
        delta: Int,
        rules: Map<String, VehicleIntRule>,
        costRegex: Regex,
        currentCost: (ItemStack) -> Int?
    ): Boolean {
        val meta = item.itemMeta ?: return false
        val lore = meta.legacyLore ?: return false
        val targetRule = rules[stat] ?: return false

        val newLore = mutableListOf<String>()
        var changed = false

        for (line in lore) {
            if (targetRule.valueRegex.matches(line)) {
                val currentVal = line.replace(Regex("[^0-9]"), "").toIntOrNull() ?: continue
                val normalizedCurrent = currentVal.coerceIn(targetRule.min, targetRule.max)
                val newVal = normalizedCurrent + delta
                if (newVal in targetRule.min..targetRule.max) {
                    newLore.add(line.replace(Regex("[0-9]+"), newVal.toString()))
                    changed = true
                } else {
                    return false
                }
            } else if (costRegex.matches(line)) {

            } else {
                newLore.add(line)
            }
        }

        if (!changed) return false

        val nowCost = currentCost(item) ?: 0
        newLore.add("Cost: ${nowCost + delta}")
        meta.legacyLore = newLore
        item.itemMeta = meta
        return true
    }
}
