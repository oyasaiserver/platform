package me.marzipan.OyasaiPets.listeners

import me.marzipan.OyasaiPets.BigWolfKeys
import me.marzipan.OyasaiPets.domain.ShopContext
import org.bukkit.entity.EntityType
import org.bukkit.entity.LivingEntity
import org.bukkit.entity.Player
import org.bukkit.event.EventHandler
import org.bukkit.event.Listener
import org.bukkit.event.entity.EntityDamageEvent
import org.bukkit.event.player.PlayerInteractEntityEvent
import org.bukkit.persistence.PersistentDataType

/**
 * ショップMOB関連のイベントリスナー
 */
class ShopListener(
    private val onShopInteract: (Player, ShopContext) -> Unit
) : Listener {

    /**
     * ショップMOBへのインタラクト
     */
    @EventHandler
    fun onShopMobInteract(event: PlayerInteractEntityEvent) {
        val entity = event.rightClicked as? LivingEntity ?: return
        val pdc = entity.persistentDataContainer

        if (!pdc.has(BigWolfKeys.SHOP_FLAG, PersistentDataType.BYTE)) return

        event.isCancelled = true

        val player = event.player
        val typeStr = pdc.get(BigWolfKeys.SHOP_TYPE, PersistentDataType.STRING) ?: return
        val type = runCatching { EntityType.valueOf(typeStr) }.getOrNull() ?: return
        val variant = pdc.get(BigWolfKeys.SHOP_VARIANT, PersistentDataType.STRING)
        val cost = pdc.get(BigWolfKeys.SHOP_COST, PersistentDataType.INTEGER) ?: return

        val ctx = ShopContext(type, variant, cost)
        onShopInteract(player, ctx)
    }

    /**
     * ショップMOBへのダメージをキャンセル
     */
    @EventHandler
    fun onShopMobDamage(event: EntityDamageEvent) {
        val entity = event.entity as? LivingEntity ?: return
        val pdc = entity.persistentDataContainer

        if (pdc.has(BigWolfKeys.SHOP_FLAG, PersistentDataType.BYTE)) {
            event.isCancelled = true
        }
    }
}
