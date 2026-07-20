@file:Suppress("DEPRECATION")

package me.marzipan.OyasaiPets

import net.kyori.adventure.text.format.NamedTextColor.*
import org.bukkit.*
import org.bukkit.command.*
import org.bukkit.entity.*
import org.bukkit.event.EventHandler
import org.bukkit.event.Listener
import org.bukkit.event.entity.EntityDamageEvent
import org.bukkit.event.player.PlayerInteractEntityEvent
import org.bukkit.inventory.*

/** ショップMOB関連のイベントリスナー */
class ShopListener(
    private val shopSystem: ShopSystem,
    private val onShopInteract: (Player, ShopContext) -> Unit,
) : Listener {

  /** ショップMOBへのインタラクト */
  @EventHandler
  fun onShopMobInteract(event: PlayerInteractEntityEvent) {
    val entity = event.rightClicked as? LivingEntity ?: return
    val ctx = shopSystem.getShopContext(entity) ?: return

    event.isCancelled = true

    val player = event.player
    onShopInteract(player, ctx)
  }

  /** ショップMOBへのダメージをキャンセル */
  @EventHandler
  fun onShopMobDamage(event: EntityDamageEvent) {
    val entity = event.entity as? LivingEntity ?: return
    if (shopSystem.isShopMob(entity)) {
      event.isCancelled = true
    }
  }
}
