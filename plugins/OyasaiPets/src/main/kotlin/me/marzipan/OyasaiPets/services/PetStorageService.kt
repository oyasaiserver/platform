package me.marzipan.OyasaiPets.services

import me.marzipan.OyasaiPets.*
import me.marzipan.OyasaiPets.domain.PetRegistry
import me.marzipan.OyasaiPets.domain.PetSpec
import me.marzipan.OyasaiPets.domain.VariantHandler
import me.marzipan.OyasaiPets.SpawnUtils
import net.kyori.adventure.text.Component
import net.kyori.adventure.text.format.NamedTextColor.*
import net.kyori.adventure.text.serializer.legacy.LegacyComponentSerializer
import org.bukkit.*
import org.bukkit.attribute.Attribute
import org.bukkit.enchantments.Enchantment
import org.bukkit.entity.LivingEntity
import org.bukkit.entity.Player
import org.bukkit.inventory.ItemFlag
import org.bukkit.inventory.ItemStack
import org.bukkit.persistence.PersistentDataType
import org.bukkit.plugin.java.JavaPlugin
import java.util.UUID

/**
 * ペットの収納と復元を管理するサービス
 * ペットをアイテムに変換して保存、復元する機能を提供
 */
class PetStorageService(private val plugin: JavaPlugin) {

    private val KEY_STORED_STAT_BRUSHES = NamespacedKey(plugin, "stored_stat_brushes")
    private val KEY_STORED_STAT_TREATS = NamespacedKey(plugin, "stored_stat_treats")

    /**
     * エンティティから収納アイテムを作成
     */
    fun createStoredPetItem(entity: LivingEntity): ItemStack {
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
        pdc.set(BigWolfKeys.STORED_SPEED_MULTIPLIER, PersistentDataType.DOUBLE, entity.speedMultiplier)
        pdc.set(BigWolfKeys.STORED_JUMP_MULTIPLIER, PersistentDataType.DOUBLE, entity.jumpMultiplier)

        val variantName = VariantHandler.getVariantNameFromEntity(entity)
        if (variantName != null) {
            pdc.set(BigWolfKeys.STORED_VARIANT, PersistentDataType.STRING, variantName)
        }

        // オーナー名を取得してLoreに表示
        val ownerName =
            if (ownerId != null) {
                Bukkit.getOfflinePlayer(UUID.fromString(ownerId)).name ?: "Unknown"
            } else {
                "Unknown"
            }

        meta.displayName(Component.text("収納された: ", GOLD).append(currentName))
        meta.lore(
            listOf(
                Component.text("右クリックで解放", GRAY),
                Component.text("オーナー: $ownerName", AQUA),
                Component.text("ID: ${pid.take(8)}...", DARK_GRAY),
                Component.text("記録:", DARK_AQUA),
                Component.text("  距離: ${"%.1f".format(entity.statDistance)} m", GRAY),
                Component.text("  ジャンプ: ${entity.statJumps} 回", GRAY),
                Component.text("  おもちゃ: ${entity.statToys} 回", GRAY),
                Component.text("  なでた: ${entity.statBrushes} 回", GRAY),
                Component.text("  おやつ: ${entity.statTreats} 回", GRAY),
            ))
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
     * ペットをアイテムに収納
     */
    fun storePetToItem(player: Player, entity: LivingEntity) {
        if (player.inventory.firstEmpty() == -1) {
            return player.sendMessage(Component.text("インベントリがいっぱいです！", RED))
        }

        val item = createStoredPetItem(entity)

        player.inventory.addItem(item)
        entity.remove()
        player.playSound(player.location, Sound.ENTITY_ENDERMAN_TELEPORT, 1f, 1f)
        player.sendMessage(Component.text("ペットをアイテムに収納しました！", GREEN))
    }

    /**
     * すべてのペットを収納
     */
    fun storeAllPets(player: Player) {
        val targetId = player.uniqueId.toString()
        var count = 0
        val itemsToGive = mutableListOf<ItemStack>()

        for (world in Bukkit.getWorlds()) {
            val pets = world.livingEntities.filter { it.ownerId == targetId }
            for (entity in pets) {
                val item = createStoredPetItem(entity)
                itemsToGive.add(item)
                entity.world.spawnParticle(Particle.POOF, entity.location, 10, 0.5, 0.5, 0.5, 0.0)
                entity.remove()
                count++
            }
        }

        if (count == 0) {
            player.sendMessage(Component.text("収納するペットがいません。", RED))
            return
        }

        val leftovers = player.inventory.addItem(*itemsToGive.toTypedArray())
        leftovers.values.forEach { item -> player.world.dropItem(player.location, item) }

        player.playSound(player.location, Sound.ENTITY_ENDERMAN_TELEPORT, 1f, 1f)
        player.sendMessage(Component.text("$count 匹のペットを収納しました！", GREEN))
        if (leftovers.isNotEmpty()) {
            player.sendMessage(Component.text("インベントリに入り切らなかった分を足元にドロップしました。", YELLOW))
        }
    }

    /**
     * アイテムからペットを復元
     */
    fun restorePetFromItem(
        player: Player,
        item: ItemStack,
        loc: Location,
        countActivePets: (Player) -> Int,
        setupPetEntity: (LivingEntity, PetSpec, Player) -> Unit,
        updateStats: (LivingEntity, Int, PetSpec) -> Unit
    ) {
        if (countActivePets(player) >= BigWolfConfig.MAX_PET_COUNT) {
            player.sendMessage(Component.text("ペットは同時に${BigWolfConfig.MAX_PET_COUNT}匹までしか召喚できません！", RED))
            return
        }

        val meta = item.itemMeta
        val pdc = meta.persistentDataContainer

        // オーナーチェック（譲渡防止）
        val storedOwner = pdc.get(BigWolfKeys.STORED_OWNER, PersistentDataType.STRING)
        if (storedOwner != null && storedOwner != player.uniqueId.toString()) {
            val ownerName =
                runCatching { Bukkit.getOfflinePlayer(UUID.fromString(storedOwner)).name }.getOrNull()
                    ?: "Unknown"
            player.sendMessage(Component.text("このペットはあなたのものではありません！(オーナー: $ownerName)", RED))
            return
        }

        val storedId = pdc.get(BigWolfKeys.STORED_ID, PersistentDataType.STRING)
        if (storedId != null) {
            for (world in Bukkit.getWorlds()) {
                for (e in world.livingEntities) {
                    if (e.petId == storedId) {
                        player.sendMessage(Component.text("このペットは既に召喚されています！(コピー禁止)", RED))
                        return
                    }
                }
            }
        }

        val typeStr = pdc.get(BigWolfKeys.STORED_TYPE, PersistentDataType.STRING) ?: "WOLF"
        val type = runCatching { org.bukkit.entity.EntityType.valueOf(typeStr) }.getOrNull() ?: org.bukkit.entity.EntityType.WOLF
        val spec = PetRegistry.get(type)

        val safeLoc = SpawnUtils.findSafeSpawnLocation(loc)
        if (safeLoc == null) {
            player.sendMessage(Component.text("この場所ではペットを解放できません（周囲に空間と足場が必要です）。", RED))
            return
        }

        val entity = player.world.spawnEntity(safeLoc, type) as? LivingEntity

        if (entity == null || !entity.isValid) {
            player.sendMessage(Component.text("この場所ではペットを解放できません（保護されています）。", RED))
            return
        }

        // petIdとownerIdを先に設定（setupPetEntityでデフォルト名生成に必要）
        entity.petId = storedId ?: UUID.randomUUID().toString()
        entity.ownerId = player.uniqueId.toString()

        // バリアントを先に適用（setupPetEntityでバリアント名取得に必要）
        val variantStr = pdc.get(BigWolfKeys.STORED_VARIANT, PersistentDataType.STRING)
        if (variantStr != null) {
            me.marzipan.OyasaiPets.domain.VariantHandler.applyVariant(entity, variantStr)
        }

        setupPetEntity(entity, spec, player)

        // カスタム名が保存されている場合のみ上書き（ユーザーが名前変更していた場合）
        val nameStr = pdc.get(BigWolfKeys.STORED_NAME, PersistentDataType.STRING)
        if (nameStr != null && !nameStr.contains("の大")) {
            // 旧デフォルト名「プレイヤー名の大WOLF」でない場合のみ復元
            entity.customName(LegacyComponentSerializer.legacyAmpersand().deserialize(nameStr))
            entity.isCustomNameVisible = true
        }


        val food = pdc.get(BigWolfKeys.FOOD, PersistentDataType.INTEGER) ?: 0
        entity.foodLevel = food
        entity.isSilentMode = (pdc.get(BigWolfKeys.SILENT, PersistentDataType.BYTE) ?: 0).toInt() == 1
        entity.particleType = pdc.get(BigWolfKeys.PARTICLE, PersistentDataType.INTEGER) ?: 0
        entity.skillUnlockedLevel =
            pdc.get(BigWolfKeys.STORED_UNLOCKED, PersistentDataType.INTEGER) ?: 0
        entity.skillType = pdc.get(BigWolfKeys.STORED_SKILL, PersistentDataType.INTEGER) ?: 0
        entity.isHovering =
            (pdc.get(BigWolfKeys.STORED_HOVER, PersistentDataType.BYTE) ?: 0).toInt() == 1
        pdc.get(BigWolfKeys.STORED_SPEED_MULTIPLIER, PersistentDataType.DOUBLE)?.let { entity.speedMultiplier = it }
        pdc.get(BigWolfKeys.STORED_JUMP_MULTIPLIER, PersistentDataType.DOUBLE)?.let { entity.jumpMultiplier = it }

        // 遊んだ記録を復元
        entity.statDistance =
            pdc.get(BigWolfKeys.STORED_STAT_DISTANCE, PersistentDataType.DOUBLE) ?: 0.0
        entity.statJumps = pdc.get(BigWolfKeys.STORED_STAT_JUMPS, PersistentDataType.INTEGER) ?: 0
        entity.statToys = pdc.get(BigWolfKeys.STORED_STAT_TOYS, PersistentDataType.INTEGER) ?: 0
        entity.statBrushes = pdc.get(KEY_STORED_STAT_BRUSHES, PersistentDataType.INTEGER) ?: 0
        entity.statTreats = pdc.get(KEY_STORED_STAT_TREATS, PersistentDataType.INTEGER) ?: 0

        // v2データを復元（交配、譲渡、パーティクル）
        entity.pcdVersion = pdc.get(BigWolfKeys.STORED_PCD_VERSION, PersistentDataType.INTEGER) ?: BigWolfKeys.CURRENT_PCD_VERSION
        entity.originalOwnerId = pdc.get(BigWolfKeys.STORED_ORIGINAL_OWNER, PersistentDataType.STRING)
        entity.transferCount = pdc.get(BigWolfKeys.STORED_TRANSFER_COUNT, PersistentDataType.INTEGER) ?: 0
        entity.breedCount = pdc.get(BigWolfKeys.STORED_BREED_COUNT, PersistentDataType.INTEGER) ?: 0
        entity.generation = pdc.get(BigWolfKeys.STORED_GENERATION, PersistentDataType.INTEGER) ?: 1
        entity.parent1Id = pdc.get(BigWolfKeys.STORED_PARENT_1, PersistentDataType.STRING)
        entity.parent2Id = pdc.get(BigWolfKeys.STORED_PARENT_2, PersistentDataType.STRING)

        // パーティクルアンロック状態を復元（互換性処理）
        val unlockedStr = pdc.get(BigWolfKeys.STORED_PARTICLE_UNLOCKED, PersistentDataType.STRING) ?: "0"
        // 古いペットの場合、デフォルトパーティクル(0-4)を自動的にアンロック
        val currentUnlocked = unlockedStr.split(",").mapNotNull { it.trim().toIntOrNull() }.toMutableSet()
        currentUnlocked.addAll(listOf(0, 1, 2, 3, 4))
        entity.particleUnlocked = currentUnlocked.sorted().joinToString(",")

        updateStats(entity, food, spec)


        // PetDataManagerに解放状態を記録
        PetDataManager.markAsAlive(player.uniqueId, entity.petId!!)

        // 解放位置を記録（見失い対策）
        PetDataManager.updateLastLocation(player.uniqueId, entity.petId!!, safeLoc)

        item.amount -= 1
        player.sendMessage(Component.text("ペットを解放しました！", GREEN))
        player.playSound(safeLoc, Sound.ENTITY_ITEM_PICKUP, 1f, 1f)
    }

    /**
     * 死亡ペットから回復用の収納アイテムを作成
     */
    fun createRecoveredStoredPetItem(petData: PetData, type: org.bukkit.entity.EntityType, ownerUuid: String): ItemStack {
        val eggMat = Material.getMaterial("${type.name}_SPAWN_EGG") ?: Material.PIG_SPAWN_EGG
        val item = ItemStack(eggMat)
        val meta = item.itemMeta
        val pdc = meta.persistentDataContainer

        val variantJap = me.marzipan.OyasaiPets.i18n.MobTranslator.translateVariant(petData.variant)
        val mobJap = me.marzipan.OyasaiPets.i18n.MobTranslator.toJapanese(type)
        val typeDisplayName = if (petData.variant != null) "$mobJap ($variantJap)" else mobJap
        val nameStr = petData.customName ?: "名前なし"

        meta.displayName(Component.text("【収納】$typeDisplayName - $nameStr", AQUA))

        val ownerName = runCatching { Bukkit.getOfflinePlayer(UUID.fromString(ownerUuid)).name }.getOrNull() ?: "Unknown"
        val loreLi = mutableListOf<Component>()
        loreLi.add(Component.text("右クリックでペットを解放", GRAY))
        loreLi.add(Component.text("種類: $typeDisplayName", YELLOW))
        if (petData.variant != null) {
            loreLi.add(Component.text("バリアント: ${petData.variant}", DARK_GRAY))
        }
        loreLi.add(Component.text("Lv: ${petData.foodLevel}", YELLOW))
        loreLi.add(Component.text("オーナー: $ownerName", DARK_GRAY))

        meta.lore(loreLi)

        // PDCにデータを保存（全データを正しく保存）
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
        pdc.set(BigWolfKeys.STORED_STAT_BRUSHES, PersistentDataType.INTEGER, petData.stats.brushes)
        pdc.set(BigWolfKeys.STORED_STAT_TREATS, PersistentDataType.INTEGER, petData.stats.treats)

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

    /**
     * ペットデータのファイル名を生成するヘルパー関数
     */
    fun getPetFileName(petData: PetData): String {
        val number = petData.petNumber.toString().padStart(3, '0')
        val variant = petData.variant?.let { "_$it" } ?: ""
        return "${number}_${petData.type}${variant}.json"
    }

    /**
     * ペットエンティティを初期設定（PetSpawnSystemから呼び出される）
     */
    fun setupPetEntity(entity: LivingEntity, spec: PetSpec, player: Player) {
        entity.apply {
            // バリアント名とMOB名を日本語で取得
            val variantName = me.marzipan.OyasaiPets.domain.VariantHandler.getVariantNameFromEntity(entity)
            val variantJap = me.marzipan.OyasaiPets.i18n.MobTranslator.translateVariant(variantName)
            val mobJap = me.marzipan.OyasaiPets.i18n.MobTranslator.toJapanese(type)

            // ID番号を取得（petIdの最初の8文字をハッシュ値として使用）
            val petId = entity.petId ?: java.util.UUID.randomUUID().toString().also { entity.petId = it }
            val idNum = petId.hashCode().let { if (it < 0) -it else it } % 10000

            // デフォルト名: 「プレイヤー名の<バリアント><MOB名> #<ID>」
            val defaultName = if (variantName != null) {
                "${player.name}の$variantJap$mobJap #$idNum"
            } else {
                "${player.name}の$mobJap #$idNum"
            }

            customName(Component.text(defaultName))
            isCustomNameVisible = true
            setRemoveWhenFarAway(false)
            isInvulnerable = true
            setAI(true)

            getAttribute(Attribute.SCALE)?.baseValue = spec.scaleRange.start
            getAttribute(Attribute.MOVEMENT_SPEED)?.baseValue = 0.0
            getAttribute(Attribute.FLYING_SPEED)?.baseValue = 0.0
            getAttribute(Attribute.STEP_HEIGHT)?.baseValue = 1.1

            if (this is org.bukkit.entity.Tameable) {
                isTamed = true
                owner = player
            }
            if (this is org.bukkit.entity.Sittable) isSitting = false
            if (this is org.bukkit.entity.Ageable) setAdult()

            // RabbitとChickenのHP増加（デフォルトが低いため）
            if (this is org.bukkit.entity.Rabbit) {
                getAttribute(Attribute.MAX_HEALTH)?.baseValue = 20.0  // デフォルト3 → 20
                health = 20.0
            }
            if (this is org.bukkit.entity.Chicken) {
                getAttribute(Attribute.MAX_HEALTH)?.baseValue = 20.0  // デフォルト4 → 20
                health = 20.0
            }

            // Turtleの陸上移動速度を低く設定（モーション高速化を防ぐ）
            if (this is org.bukkit.entity.Turtle) {
                // Turtleは水中では速く、陸上ではゆっくり移動
                getAttribute(Attribute.MOVEMENT_SPEED)?.baseValue = 0.1
            }
        }
    }
}
