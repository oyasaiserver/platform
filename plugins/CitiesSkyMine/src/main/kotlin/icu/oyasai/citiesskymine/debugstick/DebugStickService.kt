package icu.oyasai.citiesskymine.debugstick

import icu.oyasai.citiesskymine.Main
import org.bukkit.FluidCollisionMode
import org.bukkit.block.Block
import org.bukkit.entity.Player

class DebugStickService(
    private val plugin: Main,
    private val memoryStore: DebugStickMemoryStore
) {

    private val propertyAccess = BlockDataPropertyAccess()

    fun select(player: Player): DebugStickResult {
        val block = targetBlock(player) ?: return DebugStickResult.Error("対象ブロックが見つかりません。")
        val properties = propertyAccess.properties(block.blockData)
        if (properties.isEmpty()) {
            return DebugStickResult.Error("${block.type.key.key} には変更可能な状態がありません。")
        }

        val selectedName = memoryStore.selectedProperty(player, block.type)
        val currentIndex = properties.indexOfFirst { it.name == selectedName }.takeIf { it >= 0 } ?: -1
        val selected = properties[(currentIndex + 1).floorMod(properties.size)]
        memoryStore.setSelectedProperty(player, block.type, selected.name)

        return DebugStickResult.Success(
            "${block.type.key.key}: ${selected.name}=${selected.currentValue}"
        )
    }

    fun cycle(player: Player): DebugStickResult {
        val block = targetBlock(player) ?: return DebugStickResult.Error("対象ブロックが見つかりません。")
        val properties = propertyAccess.properties(block.blockData)
        if (properties.isEmpty()) {
            return DebugStickResult.Error("${block.type.key.key} には変更可能な状態がありません。")
        }

        val selected = selectedProperty(player, block, properties)
        if (selected.values.isEmpty()) {
            return DebugStickResult.Error("${selected.name} の候補値を取得できません。")
        }

        val currentIndex = selected.values.indexOf(selected.currentValue).takeIf { it >= 0 } ?: 0
        val nextValue = selected.values[(currentIndex + 1).floorMod(selected.values.size)]
        val nextData = propertyAccess.withPropertyValue(block.blockData, selected.name, nextValue)
            ?: return DebugStickResult.Error("${selected.name}=$nextValue を適用できません。")

        block.setBlockData(nextData, plugin.config.getBoolean("debug-stick.apply-physics", false))
        return DebugStickResult.Success(
            "${block.type.key.key}: ${selected.name} ${selected.currentValue} -> $nextValue"
        )
    }

    private fun selectedProperty(
        player: Player,
        block: Block,
        properties: List<DebugBlockProperty>
    ): DebugBlockProperty {
        val selectedName = memoryStore.selectedProperty(player, block.type)
        val selected = properties.firstOrNull { it.name == selectedName } ?: properties.first()
        if (selected.name != selectedName) {
            memoryStore.setSelectedProperty(player, block.type, selected.name)
        }
        return selected
    }

    private fun targetBlock(player: Player): Block? {
        val maxDistance = plugin.config.getDouble("debug-stick.max-distance", 6.0).coerceIn(1.0, 64.0)
        return player.rayTraceBlocks(maxDistance, FluidCollisionMode.NEVER)?.hitBlock
    }

    private fun Int.floorMod(size: Int): Int = Math.floorMod(this, size)
}

sealed class DebugStickResult {
    data class Success(val message: String) : DebugStickResult()
    data class Error(val message: String) : DebugStickResult()
}
