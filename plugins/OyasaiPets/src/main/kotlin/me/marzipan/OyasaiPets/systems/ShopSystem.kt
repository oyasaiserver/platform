package me.marzipan.OyasaiPets.systems

import me.marzipan.OyasaiPets.BigWolfConfig
import me.marzipan.OyasaiPets.BigWolfKeys
import me.marzipan.OyasaiPets.domain.PetRegistry
import me.marzipan.OyasaiPets.domain.ShopContext
import me.marzipan.OyasaiPets.domain.VariantHandler
import me.marzipan.OyasaiPets.SpawnUtils
import net.kyori.adventure.text.Component
import net.kyori.adventure.text.format.NamedTextColor.*
import org.bukkit.Bukkit
import org.bukkit.Material
import org.bukkit.entity.EntityType
import org.bukkit.entity.LivingEntity
import org.bukkit.entity.Player
import org.bukkit.persistence.PersistentDataType

/**
 * ショップシステム
 * ショップMOBの生成・管理、削除
 */
class ShopSystem {

    /**
     * ショップMOBを生成
     */
    fun spawnShopMob(
        admin: Player,
        type: EntityType,
        variant: String?,
        cost: Int,
        yawDeg: Float?
    ) {
        val loc = admin.location.block.location.add(0.5, 0.0, 0.5)
        val safeLoc = SpawnUtils.findSafeGroundLocation(loc) ?: run {
            admin.sendMessage(Component.text("ここにはショップMOBを設置できません（足場と空間が必要です）。", RED))
            return
        }

        val ent = admin.world.spawnEntity(safeLoc, type) as? LivingEntity ?: return
        ent.setAI(false)
        ent.isInvulnerable = true
        ent.isSilent = true
        ent.setRemoveWhenFarAway(false)

        // 向きを設定（45度単位）
        val yaw = yawDeg ?: admin.location.yaw
        val newLoc = safeLoc.clone()
        newLoc.yaw = yaw
        ent.teleport(newLoc)

        // PDCにショップ情報を設定
        val pdc = ent.persistentDataContainer
        pdc.set(BigWolfKeys.SHOP_FLAG, PersistentDataType.BYTE, 1)
        pdc.set(BigWolfKeys.SHOP_TYPE, PersistentDataType.STRING, type.name)
        if (variant != null) {
            pdc.set(BigWolfKeys.SHOP_VARIANT, PersistentDataType.STRING, variant)
        }
        pdc.set(BigWolfKeys.SHOP_COST, PersistentDataType.INTEGER, cost)

        // バリアント適用
        if (variant != null) {
            VariantHandler.applyVariant(ent, variant)
        }

        // カスタム名
        val spec = PetRegistry.get(type)
        val label = if (variant != null) "${type.name} ($variant)" else type.name
        ent.customName(Component.text("★ $label - ${cost}pt", GOLD))
        ent.isCustomNameVisible = true

        admin.sendMessage(Component.text("ショップMOBを設置しました: $label (${cost}pt)", GREEN))
    }

    /**
     * 最も近いショップMOBを削除
     */
    fun removeNearestShopMob(admin: Player): Boolean {
        val nearbyEntities = admin.getNearbyEntities(10.0, 10.0, 10.0)
        val shopMob = nearbyEntities.filterIsInstance<LivingEntity>().firstOrNull {
            val pdc = it.persistentDataContainer
            (pdc.get(BigWolfKeys.SHOP_FLAG, PersistentDataType.BYTE) ?: 0).toInt() == 1
        }

        if (shopMob != null) {
            val typeStr = shopMob.persistentDataContainer.get(BigWolfKeys.SHOP_TYPE, PersistentDataType.STRING) ?: "UNKNOWN"
            shopMob.remove()
            admin.sendMessage(Component.text("ショップMOBを削除しました: $typeStr", YELLOW))
            return true
        } else {
            admin.sendMessage(Component.text("近くにショップMOBが見つかりません。", RED))
            return false
        }
    }

    /**
     * ワールド内のすべてのショップMOBを削除
     */
    fun removeAllShopMobs(admin: Player): Int {
        var count = 0
        for (world in Bukkit.getWorlds()) {
            for (entity in world.livingEntities) {
                val pdc = entity.persistentDataContainer
                if ((pdc.get(BigWolfKeys.SHOP_FLAG, PersistentDataType.BYTE) ?: 0).toInt() == 1) {
                    entity.remove()
                    count++
                }
            }
        }
        admin.sendMessage(Component.text("すべてのショップMOBを削除しました (${count}体)", GREEN))
        return count
    }

    /**
     * エンティティがショップMOBかチェック
     */
    fun isShopMob(entity: LivingEntity): Boolean {
        val pdc = entity.persistentDataContainer
        return (pdc.get(BigWolfKeys.SHOP_FLAG, PersistentDataType.BYTE) ?: 0).toInt() == 1
    }

    /**
     * ショップMOBからShopContextを取得
     */
    fun getShopContext(entity: LivingEntity): ShopContext? {
        if (!isShopMob(entity)) return null

        val pdc = entity.persistentDataContainer
        val typeStr = pdc.get(BigWolfKeys.SHOP_TYPE, PersistentDataType.STRING) ?: return null
        val type = runCatching { EntityType.valueOf(typeStr) }.getOrNull() ?: return null
        val variant = pdc.get(BigWolfKeys.SHOP_VARIANT, PersistentDataType.STRING)
        val cost = pdc.get(BigWolfKeys.SHOP_COST, PersistentDataType.INTEGER) ?: BigWolfConfig.defaultShopCost

        return ShopContext(type, variant, cost)
    }
}
