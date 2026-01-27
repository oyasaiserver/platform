package me.marzipan.OyasaiPets.items

import me.marzipan.OyasaiPets.*
import me.marzipan.OyasaiPets.domain.PetRegistry
import me.marzipan.OyasaiPets.domain.VariantHandler
import net.kyori.adventure.text.Component
import net.kyori.adventure.text.format.NamedTextColor.*
import net.kyori.adventure.text.serializer.legacy.LegacyComponentSerializer
import org.bukkit.Bukkit
import org.bukkit.Material
import org.bukkit.NamespacedKey
import org.bukkit.enchantments.Enchantment
import org.bukkit.entity.EntityType
import org.bukkit.entity.LivingEntity
import org.bukkit.inventory.ItemFlag
import org.bukkit.inventory.ItemStack
import org.bukkit.persistence.PersistentDataType
import org.bukkit.plugin.java.JavaPlugin
import java.util.UUID

/**
 * 収納ペットアイテムの生成と復元を担当
 */
class StoredPetItem(private val plugin: JavaPlugin) {

    // ブラシ・おやつ統計用キー
    private val KEY_STORED_STAT_BRUSHES = NamespacedKey(plugin, "stored_stat_brushes")
    private val KEY_STORED_STAT_TREATS = NamespacedKey(plugin, "stored_stat_treats")

    /**
     * ペットエンティティから収納アイテムを生成
     */
    fun create(entity: LivingEntity): ItemStack {
        val matName = "${entity.type.name}_SPAWN_EGG"
        val mat = Material.getMaterial(matName) ?: Material.PIG_SPAWN_EGG
        val item = ItemStack(mat)
        val meta = item.itemMeta

        val pdc = meta.persistentDataContainer
        pdc.set(BigWolfKeys.STORED_FLAG, PersistentDataType.BYTE, 1)
        pdc.set(BigWolfKeys.STORED_TYPE, PersistentDataType.STRING, entity.type.name)

        val pid = entity.petId ?: UUID.randomUUID().toString()
        pdc.set(BigWolfKeys.STORED_ID, PersistentDataType.STRING, pid)

        // オーナーUUIDを保存（譲渡防止）
        val ownerId = entity.ownerId
        if (ownerId != null) {
            pdc.set(BigWolfKeys.STORED_OWNER, PersistentDataType.STRING, ownerId)
        }

        val currentName = entity.customName() ?: Component.text(entity.type.name)
        val nameStr = LegacyComponentSerializer.legacyAmpersand().serialize(currentName)
        pdc.set(BigWolfKeys.STORED_NAME, PersistentDataType.STRING, nameStr)

        pdc.set(BigWolfKeys.FOOD, PersistentDataType.INTEGER, entity.foodLevel)
        pdc.set(BigWolfKeys.SILENT, PersistentDataType.BYTE, if (entity.isSilentMode) 1 else 0)
        pdc.set(BigWolfKeys.PARTICLE, PersistentDataType.INTEGER, entity.particleType)
        pdc.set(BigWolfKeys.STORED_SKILL, PersistentDataType.INTEGER, entity.skillType)
        pdc.set(BigWolfKeys.STORED_UNLOCKED, PersistentDataType.INTEGER, entity.skillUnlockedLevel)
        pdc.set(BigWolfKeys.STORED_HOVER, PersistentDataType.BYTE, if (entity.isHovering) 1 else 0)

        // 遊んだ記録を収納アイテムに保存
        pdc.set(BigWolfKeys.STORED_STAT_DISTANCE, PersistentDataType.DOUBLE, entity.statDistance)
        pdc.set(BigWolfKeys.STORED_STAT_JUMPS, PersistentDataType.INTEGER, entity.statJumps)
        pdc.set(BigWolfKeys.STORED_STAT_TOYS, PersistentDataType.INTEGER, entity.statToys)
        pdc.set(KEY_STORED_STAT_BRUSHES, PersistentDataType.INTEGER, entity.statBrushes)
        pdc.set(KEY_STORED_STAT_TREATS, PersistentDataType.INTEGER, entity.statTreats)

        // v2データを保存（交配、譲渡、パーティクル）
        pdc.set(BigWolfKeys.STORED_PCD_VERSION, PersistentDataType.INTEGER, entity.pcdVersion)
        entity.originalOwnerId?.let { pdc.set(BigWolfKeys.STORED_ORIGINAL_OWNER, PersistentDataType.STRING, it) }
        pdc.set(BigWolfKeys.STORED_TRANSFER_COUNT, PersistentDataType.INTEGER, entity.transferCount)
        pdc.set(BigWolfKeys.STORED_BREED_COUNT, PersistentDataType.INTEGER, entity.breedCount)
        pdc.set(BigWolfKeys.STORED_GENERATION, PersistentDataType.INTEGER, entity.generation)
        entity.parent1Id?.let { pdc.set(BigWolfKeys.STORED_PARENT_1, PersistentDataType.STRING, it) }
        entity.parent2Id?.let { pdc.set(BigWolfKeys.STORED_PARENT_2, PersistentDataType.STRING, it) }
        pdc.set(BigWolfKeys.STORED_PARTICLE_UNLOCKED, PersistentDataType.STRING, entity.particleUnlocked)

        val variantName = VariantHandler.getVariantNameFromEntity(entity)
        if (variantName != null) {
            pdc.set(BigWolfKeys.STORED_VARIANT, PersistentDataType.STRING, variantName)
        }

        // オーナー名を取得してLoreに表示
        val ownerName = if (ownerId != null) {
            Bukkit.getOfflinePlayer(UUID.fromString(ownerId)).name ?: "Unknown"
        } else {
            "Unknown"
        }

        // バリアント名を日本語で取得
        val variantJap = me.marzipan.OyasaiPets.i18n.MobTranslator.translateVariant(variantName)
        val mobJap = me.marzipan.OyasaiPets.i18n.MobTranslator.toJapanese(entity.type)
        val typeDisplayName = if (variantName != null) "$mobJap ($variantJap)" else mobJap

        val loreLi = mutableListOf<Component>()
        loreLi.add(Component.text("右クリックで解放", GRAY))
        loreLi.add(Component.text("種類: $typeDisplayName", YELLOW))
        if (variantName != null) {
            loreLi.add(Component.text("バリアント: $variantName", DARK_GRAY))
        }
        loreLi.add(Component.text("オーナー: $ownerName", AQUA))
        loreLi.add(Component.text("ID: ${pid.take(8)}...", DARK_GRAY))
        loreLi.add(Component.text("記録:", DARK_AQUA))
        loreLi.add(Component.text("  距離: ${"%.1f".format(entity.statDistance)} m", GRAY))
        loreLi.add(Component.text("  ジャンプ: ${entity.statJumps} 回", GRAY))
        loreLi.add(Component.text("  おもちゃ: ${entity.statToys} 回", GRAY))
        loreLi.add(Component.text("  なでた: ${entity.statBrushes} 回", GRAY))
        loreLi.add(Component.text("  おやつ: ${entity.statTreats} 回", GRAY))

        meta.displayName(Component.text("収納された: ", GOLD).append(currentName))
        meta.lore(loreLi)
        meta.addEnchant(Enchantment.UNBREAKING, 1, true)
        meta.addItemFlags(ItemFlag.HIDE_ENCHANTS)
        item.itemMeta = meta

        // PetDataManagerに収納状態を記録
        if (ownerId != null) {
            val ownerUuid = runCatching { UUID.fromString(ownerId) }.getOrNull()
            if (ownerUuid != null) {
                PetDataManager.markAsStored(ownerUuid, pid, entity)
            }
        }

        return item
    }

    /**
     * 収納アイテムからデータを読み取る
     * @return StoredPetData または null
     */
    fun readData(item: ItemStack): StoredPetData? {
        if (!isStoredPet(item)) return null

        val meta = item.itemMeta ?: return null
        val pdc = meta.persistentDataContainer

        return StoredPetData(
            type = pdc.get(BigWolfKeys.STORED_TYPE, PersistentDataType.STRING) ?: "WOLF",
            petId = pdc.get(BigWolfKeys.STORED_ID, PersistentDataType.STRING),
            ownerId = pdc.get(BigWolfKeys.STORED_OWNER, PersistentDataType.STRING),
            name = pdc.get(BigWolfKeys.STORED_NAME, PersistentDataType.STRING),
            variant = pdc.get(BigWolfKeys.STORED_VARIANT, PersistentDataType.STRING),
            foodLevel = pdc.get(BigWolfKeys.FOOD, PersistentDataType.INTEGER) ?: 0,
            isSilentMode = (pdc.get(BigWolfKeys.SILENT, PersistentDataType.BYTE) ?: 0).toInt() == 1,
            particleType = pdc.get(BigWolfKeys.PARTICLE, PersistentDataType.INTEGER) ?: 0,
            skillType = pdc.get(BigWolfKeys.STORED_SKILL, PersistentDataType.INTEGER) ?: 0,
            skillUnlockedLevel = pdc.get(BigWolfKeys.STORED_UNLOCKED, PersistentDataType.INTEGER) ?: 0,
            isHovering = (pdc.get(BigWolfKeys.STORED_HOVER, PersistentDataType.BYTE) ?: 0).toInt() == 1,
            statDistance = pdc.get(BigWolfKeys.STORED_STAT_DISTANCE, PersistentDataType.DOUBLE) ?: 0.0,
            statJumps = pdc.get(BigWolfKeys.STORED_STAT_JUMPS, PersistentDataType.INTEGER) ?: 0,
            statToys = pdc.get(BigWolfKeys.STORED_STAT_TOYS, PersistentDataType.INTEGER) ?: 0,
            statBrushes = pdc.get(KEY_STORED_STAT_BRUSHES, PersistentDataType.INTEGER) ?: 0,
            statTreats = pdc.get(KEY_STORED_STAT_TREATS, PersistentDataType.INTEGER) ?: 0,
            pcdVersion = pdc.get(BigWolfKeys.STORED_PCD_VERSION, PersistentDataType.INTEGER) ?: BigWolfKeys.CURRENT_PCD_VERSION,
            originalOwnerId = pdc.get(BigWolfKeys.STORED_ORIGINAL_OWNER, PersistentDataType.STRING),
            transferCount = pdc.get(BigWolfKeys.STORED_TRANSFER_COUNT, PersistentDataType.INTEGER) ?: 0,
            breedCount = pdc.get(BigWolfKeys.STORED_BREED_COUNT, PersistentDataType.INTEGER) ?: 0,
            generation = pdc.get(BigWolfKeys.STORED_GENERATION, PersistentDataType.INTEGER) ?: 1,
            parent1Id = pdc.get(BigWolfKeys.STORED_PARENT_1, PersistentDataType.STRING),
            parent2Id = pdc.get(BigWolfKeys.STORED_PARENT_2, PersistentDataType.STRING),
            particleUnlocked = pdc.get(BigWolfKeys.STORED_PARTICLE_UNLOCKED, PersistentDataType.STRING) ?: "0"
        )
    }

    /**
     * 収納データをエンティティに適用
     */
    fun applyDataToEntity(entity: LivingEntity, data: StoredPetData, newOwnerId: String) {
        entity.ownerId = newOwnerId
        entity.petId = data.petId ?: UUID.randomUUID().toString()

        if (data.name != null) {
            entity.customName(LegacyComponentSerializer.legacyAmpersand().deserialize(data.name))
            entity.isCustomNameVisible = true
        }

        entity.foodLevel = data.foodLevel
        entity.isSilentMode = data.isSilentMode
        entity.particleType = data.particleType
        entity.skillUnlockedLevel = data.skillUnlockedLevel
        entity.skillType = data.skillType
        entity.isHovering = data.isHovering

        // 遊んだ記録を復元
        entity.statDistance = data.statDistance
        entity.statJumps = data.statJumps
        entity.statToys = data.statToys
        entity.statBrushes = data.statBrushes
        entity.statTreats = data.statTreats

        // v2データを復元
        entity.pcdVersion = data.pcdVersion
        entity.originalOwnerId = data.originalOwnerId
        entity.transferCount = data.transferCount
        entity.breedCount = data.breedCount
        entity.generation = data.generation
        entity.parent1Id = data.parent1Id
        entity.parent2Id = data.parent2Id

        // パーティクルアンロック状態を復元（互換性処理）
        val currentUnlocked = data.particleUnlocked.split(",")
            .mapNotNull { it.trim().toIntOrNull() }
            .toMutableSet()
        // 古いペットの場合、デフォルトパーティクル(0-4)を自動的にアンロック
        currentUnlocked.addAll(listOf(0, 1, 2, 3, 4))
        entity.particleUnlocked = currentUnlocked.sorted().joinToString(",")

        // バリアント適用
        if (data.variant != null) {
            VariantHandler.applyVariant(entity, data.variant)
        }
    }

    /**
     * アイテムが収納ペットアイテムかどうか判定
     */
    fun isStoredPet(item: ItemStack): Boolean {
        if (!item.hasItemMeta()) return false
        return item.itemMeta.persistentDataContainer.has(BigWolfKeys.STORED_FLAG, PersistentDataType.BYTE)
    }

    /**
     * 再取得用のスポーンエッグを作成（PetDataから）
     */
    fun createFromPetData(petData: PetData, type: EntityType, ownerUuid: String): ItemStack {
        val eggMat = Material.getMaterial("${type.name}_SPAWN_EGG") ?: Material.PIG_SPAWN_EGG
        val item = ItemStack(eggMat)
        val meta = item.itemMeta
        val pdc = meta.persistentDataContainer

        val variantStr = petData.variant?.let { " ($it)" } ?: ""
        val nameStr = petData.customName ?: "名前なし"

        meta.displayName(Component.text("【収納】${type.name}$variantStr - $nameStr", AQUA))

        val ownerName = runCatching { Bukkit.getOfflinePlayer(UUID.fromString(ownerUuid)).name }.getOrNull() ?: "Unknown"
        meta.lore(listOf(
            Component.text("右クリックでペットを解放", GRAY),
            Component.text("Lv: ${petData.foodLevel}", YELLOW),
            Component.text("オーナー: $ownerName", DARK_GRAY)
        ))

        // PDCにデータを保存
        pdc.set(BigWolfKeys.STORED_FLAG, PersistentDataType.BYTE, 1)
        pdc.set(BigWolfKeys.STORED_TYPE, PersistentDataType.STRING, type.name)
        petData.variant?.let { pdc.set(BigWolfKeys.STORED_VARIANT, PersistentDataType.STRING, it) }
        petData.customName?.let { pdc.set(BigWolfKeys.STORED_NAME, PersistentDataType.STRING, it) }
        pdc.set(BigWolfKeys.STORED_ID, PersistentDataType.STRING, petData.petId)
        pdc.set(BigWolfKeys.STORED_OWNER, PersistentDataType.STRING, ownerUuid)
        pdc.set(BigWolfKeys.STORED_SKILL, PersistentDataType.INTEGER, petData.skillType)
        pdc.set(BigWolfKeys.STORED_UNLOCKED, PersistentDataType.INTEGER, petData.skillUnlockedLevel)
        pdc.set(BigWolfKeys.FOOD, PersistentDataType.INTEGER, petData.foodLevel)
        pdc.set(BigWolfKeys.STORED_STAT_DISTANCE, PersistentDataType.DOUBLE, petData.stats.distance)
        pdc.set(BigWolfKeys.STORED_STAT_JUMPS, PersistentDataType.INTEGER, petData.stats.jumps)
        pdc.set(BigWolfKeys.STORED_STAT_TOYS, PersistentDataType.INTEGER, petData.stats.toys)
        pdc.set(KEY_STORED_STAT_BRUSHES, PersistentDataType.INTEGER, petData.stats.brushes)
        pdc.set(KEY_STORED_STAT_TREATS, PersistentDataType.INTEGER, petData.stats.treats)

        // v2データ
        pdc.set(BigWolfKeys.STORED_PCD_VERSION, PersistentDataType.INTEGER, BigWolfKeys.CURRENT_PCD_VERSION)
        petData.originalOwner?.let { pdc.set(BigWolfKeys.STORED_ORIGINAL_OWNER, PersistentDataType.STRING, it) }
        pdc.set(BigWolfKeys.STORED_TRANSFER_COUNT, PersistentDataType.INTEGER, petData.transferHistory.size)

        petData.breedInfo?.let { breedInfo ->
            pdc.set(BigWolfKeys.STORED_PARENT_1, PersistentDataType.STRING, breedInfo.parent1Id)
            pdc.set(BigWolfKeys.STORED_PARENT_2, PersistentDataType.STRING, breedInfo.parent2Id)
            pdc.set(BigWolfKeys.STORED_GENERATION, PersistentDataType.INTEGER, breedInfo.generation)
        }
        pdc.set(BigWolfKeys.STORED_BREED_COUNT, PersistentDataType.INTEGER, petData.breedCount)
        pdc.set(BigWolfKeys.STORED_PARTICLE_UNLOCKED, PersistentDataType.STRING, petData.particleUnlocked)

        meta.addEnchant(Enchantment.UNBREAKING, 1, true)
        meta.addItemFlags(ItemFlag.HIDE_ENCHANTS)
        item.itemMeta = meta
        return item
    }
}

/**
 * 収納ペットのデータ
 */
data class StoredPetData(
    val type: String,
    val petId: String?,
    val ownerId: String?,
    val name: String?,
    val variant: String?,
    val foodLevel: Int,
    val isSilentMode: Boolean,
    val particleType: Int,
    val skillType: Int,
    val skillUnlockedLevel: Int,
    val isHovering: Boolean,
    val statDistance: Double,
    val statJumps: Int,
    val statToys: Int,
    val statBrushes: Int,
    val statTreats: Int,
    val pcdVersion: Int,
    val originalOwnerId: String?,
    val transferCount: Int,
    val breedCount: Int,
    val generation: Int,
    val parent1Id: String?,
    val parent2Id: String?,
    val particleUnlocked: String
)

