package com.griefcraft.lwc

import com.griefcraft.model.Protection
import icu.oyasai.lwc.LwcPlugin
import org.bukkit.block.Block
import org.bukkit.entity.Player

// SignShop の canBuild 専用。protectBlock の自動保護 API は対象外。
class LWC(private val plugin: LwcPlugin) {
  fun findProtection(block: Block): Protection? = plugin.protection(block)?.let { Protection() }

  fun canAccessProtection(player: Player, block: Block): Boolean =
      plugin.protection(block)?.let { plugin.canUse(player, it) } ?: true
}
