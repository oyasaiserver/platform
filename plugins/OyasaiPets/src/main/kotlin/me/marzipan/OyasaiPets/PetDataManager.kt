package me.marzipan.OyasaiPets

import com.google.gson.Gson
import com.google.gson.GsonBuilder
import java.io.File
import java.time.LocalDateTime
import java.time.format.DateTimeFormatter
import java.util.UUID
import java.util.concurrent.ConcurrentHashMap
import org.bukkit.Location
import org.bukkit.entity.EntityType
import org.bukkit.entity.LivingEntity
import org.bukkit.plugin.java.JavaPlugin

/**
 * ペットデータの永続化管理クラス
 * 各プレイヤーごとにフォルダを作成し、各ペットのJSONファイルを管理
 */
object PetDataManager {
    private lateinit var plugin: JavaPlugin
    private lateinit var dataFolder: File
    private val gson: Gson = GsonBuilder().setPrettyPrinting().create()

    // メモリキャッシュ: プレイヤーUUID -> (petId -> PetData)
    private val cache = ConcurrentHashMap<String, MutableMap<String, PetData>>()

    fun initialize(plugin: JavaPlugin) {
        this.plugin = plugin
        this.dataFolder = File(plugin.dataFolder, "players")
        if (!dataFolder.exists()) {
            dataFolder.mkdirs()
        }
    }

    /**
     * ペット購入時にデータを記録
     */
    fun recordPurchase(
        ownerUuid: UUID,
        petId: String,
        type: EntityType,
        variant: String?,
        customName: String?
    ): PetData {
        val existingPets = loadPlayerPets(ownerUuid)

        // 次のペット番号を決定
        val nextNumber = (existingPets.values.maxOfOrNull { it.petNumber } ?: 0) + 1

        val petData = PetData(
            petId = petId,
            petNumber = nextNumber,
            type = type.name,
            variant = variant,
            customName = customName,
            purchasedAt = LocalDateTime.now().format(DateTimeFormatter.ISO_LOCAL_DATE_TIME),
            status = PetStatus.ALIVE,
            lastLocation = null,
            deathData = null,
            stats = PetStats(),
            skillType = 0,
            skillUnlockedLevel = 0,
            foodLevel = 0
        )

        savePetData(ownerUuid, petData)

        // キャッシュ更新
        cache.getOrPut(ownerUuid.toString()) { mutableMapOf() }[petId] = petData

        plugin.logger.info("Pet purchased: Player=${ownerUuid}, PetNumber=$nextNumber, Type=$type")
        return petData
    }

    /**
     * ペットの位置を更新（降車時・ログアウト時）
     */
    fun updateLastLocation(ownerUuid: UUID, petId: String, location: Location) {
        val petData = getPetData(ownerUuid, petId) ?: return

        petData.lastLocation = LocationData(
            world = location.world?.name ?: "world",
            x = location.x,
            y = location.y,
            z = location.z
        )

        savePetData(ownerUuid, petData)
    }


    /**
     * ペット死亡時にデータを保存
     */
    fun recordDeath(ownerUuid: UUID, entity: LivingEntity) {
        val petId = entity.persistentDataContainer.get(
            BigWolfKeys.PET_ID,
            org.bukkit.persistence.PersistentDataType.STRING
        ) ?: return

        val petData = getPetData(ownerUuid, petId) ?: return

        // 死亡データを保存
        petData.status = PetStatus.DEAD
        petData.deathData = DeathData(
            deathTime = LocalDateTime.now().format(DateTimeFormatter.ISO_LOCAL_DATE_TIME),
            location = LocationData(
                world = entity.location.world?.name ?: "world",
                x = entity.location.x,
                y = entity.location.y,
                z = entity.location.z
            )
        )

        // エンティティから最新のステータスを取得
        petData.customName = entity.customName()?.let {
            net.kyori.adventure.text.serializer.legacy.LegacyComponentSerializer.legacyAmpersand().serialize(it)
        }
        petData.stats = extractStats(entity)
        petData.skillType = entity.skillType
        petData.skillUnlockedLevel = entity.skillUnlockedLevel
        petData.foodLevel = entity.foodLevel

        savePetData(ownerUuid, petData)

        plugin.logger.info("Pet died: Owner=$ownerUuid, PetNumber=${petData.petNumber}")
    }

    /**
     * ペットを復活させる
     */
    fun getDeathDataForRevive(ownerUuid: UUID, petNumber: Int): PetData? {
        val pets = loadPlayerPets(ownerUuid)
        return pets.values.find { it.petNumber == petNumber && it.status == PetStatus.DEAD }
    }

    /**
     * 復活後にステータスを更新
     */
    fun markAsRevived(ownerUuid: UUID, petId: String) {
        val petData = getPetData(ownerUuid, petId) ?: return
        petData.status = PetStatus.ALIVE
        petData.deathData = null
        savePetData(ownerUuid, petData)
    }

    /**
     * 死亡したペット一覧を取得
     */
    fun getDeadPets(ownerUuid: UUID): List<PetData> {
        return loadPlayerPets(ownerUuid).values.filter { it.status == PetStatus.DEAD }
    }

    /**
     * プレイヤーの全ペット一覧を取得
     */
    fun getAllPets(ownerUuid: UUID): List<PetData> {
        return loadPlayerPets(ownerUuid).values.toList()
    }


    /**
     * ペット収納時にステータスを更新
     */
    fun markAsStored(ownerUuid: UUID, petId: String, entity: LivingEntity) {
        val petData = getPetData(ownerUuid, petId) ?: return
        petData.status = PetStatus.STORED
        petData.lastLocation = LocationData(
            world = entity.location.world?.name ?: "world",
            x = entity.location.x,
            y = entity.location.y,
            z = entity.location.z
        )
        petData.stats = extractStats(entity)
        petData.skillType = entity.skillType
        petData.skillUnlockedLevel = entity.skillUnlockedLevel
        petData.foodLevel = entity.foodLevel
        petData.customName = entity.customName()?.let {
            net.kyori.adventure.text.serializer.legacy.LegacyComponentSerializer.legacyAmpersand().serialize(it)
        }
        savePetData(ownerUuid, petData)
    }

    /**
     * ペット解放時にステータスを更新
     */
    fun markAsAlive(ownerUuid: UUID, petId: String) {
        val petData = getPetData(ownerUuid, petId) ?: return
        petData.status = PetStatus.ALIVE
        savePetData(ownerUuid, petData)
    }

    // --- Private methods ---

    private fun getPlayerFolder(ownerUuid: UUID): File {
        val folder = File(dataFolder, ownerUuid.toString())
        if (!folder.exists()) {
            folder.mkdirs()
        }
        return folder
    }

    private fun getPetFileName(petData: PetData): String {
        val number = petData.petNumber.toString().padStart(3, '0')
        val variant = petData.variant?.let { "_$it" } ?: ""
        return "${number}_${petData.type}${variant}.json"
    }

    private fun savePetData(ownerUuid: UUID, petData: PetData) {
        val playerFolder = getPlayerFolder(ownerUuid)
        val fileName = getPetFileName(petData)
        val file = File(playerFolder, fileName)

        file.writeText(gson.toJson(petData))

        // キャッシュ更新
        cache.getOrPut(ownerUuid.toString()) { mutableMapOf() }[petData.petId] = petData
    }

    private fun loadPlayerPets(ownerUuid: UUID): MutableMap<String, PetData> {
        // キャッシュチェック
        cache[ownerUuid.toString()]?.let { return it }

        val playerFolder = getPlayerFolder(ownerUuid)
        val pets = mutableMapOf<String, PetData>()

        playerFolder.listFiles()?.filter { it.extension == "json" }?.forEach { file ->
            try {
                val petData = gson.fromJson(file.readText(), PetData::class.java)
                pets[petData.petId] = petData
            } catch (e: Exception) {
                plugin.logger.warning("Failed to load pet data: ${file.name} - ${e.message}")
            }
        }

        // キャッシュに保存
        cache[ownerUuid.toString()] = pets
        return pets
    }

    private fun getPetData(ownerUuid: UUID, petId: String): PetData? {
        return loadPlayerPets(ownerUuid)[petId]
    }

    private fun extractStats(entity: LivingEntity): PetStats {
        return PetStats(
            distance = entity.statDistance,
            jumps = entity.statJumps,
            toys = entity.statToys,
            brushes = entity.statBrushes,
            treats = entity.statTreats
        )
    }

    /**
     * petIdからオーナーUUIDを検索
     */
    fun findOwnerByPetId(petId: String): UUID? {
        // まずキャッシュを検索
        for ((ownerUuidStr, pets) in cache) {
            if (pets.containsKey(petId)) {
                return UUID.fromString(ownerUuidStr)
            }
        }

        // キャッシュになければファイルを検索
        dataFolder.listFiles()?.filter { it.isDirectory }?.forEach { playerFolder ->
            try {
                val ownerUuid = UUID.fromString(playerFolder.name)
                val pets = loadPlayerPets(ownerUuid)
                if (pets.containsKey(petId)) {
                    return ownerUuid
                }
            } catch (_: Exception) {
                // 無効なフォルダ名は無視
            }
        }

        return null
    }
}

// --- Data classes ---

enum class PetStatus {
    ALIVE,
    DEAD,
    STORED
}

data class PetData(
    val petId: String,
    val petNumber: Int,
    val type: String,
    val variant: String?,
    var customName: String?,
    val purchasedAt: String,
    var status: PetStatus,
    var lastLocation: LocationData?,
    var deathData: DeathData?,
    var stats: PetStats,
    var skillType: Int,
    var skillUnlockedLevel: Int,
    var foodLevel: Int
)

data class LocationData(
    val world: String,
    val x: Double,
    val y: Double,
    val z: Double
)

data class DeathData(
    val deathTime: String,
    val location: LocationData
)

data class PetStats(
    var distance: Double = 0.0,
    var jumps: Int = 0,
    var toys: Int = 0,
    var brushes: Int = 0,
    var treats: Int = 0
)

