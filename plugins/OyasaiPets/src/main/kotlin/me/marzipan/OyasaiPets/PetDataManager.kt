@file:Suppress("DEPRECATION")

package me.marzipan.OyasaiPets

import com.google.gson.Gson
import com.google.gson.GsonBuilder
import java.io.File
import java.time.LocalDateTime
import java.time.format.DateTimeFormatter
import java.util.UUID
import java.util.concurrent.ConcurrentHashMap
import net.kyori.adventure.text.format.NamedTextColor.*
import org.bukkit.*
import org.bukkit.command.*
import org.bukkit.entity.*
import org.bukkit.inventory.*
import org.bukkit.persistence.PersistentDataType
import org.bukkit.plugin.java.JavaPlugin

/** ペットデータの永続化管理クラス 各プレイヤーごとにフォルダを作成し、各ペットのJSONファイルを管理 */
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

  /** ペット購入時にデータを記録 */
  fun recordPurchase(
      ownerUuid: UUID,
      petId: String,
      type: EntityType,
      variant: String?,
      customName: String?,
  ): PetData {
    val existingPets = loadPlayerPets(ownerUuid)

    // 次のペット番号を決定（自分が元オーナーのペットの最大番号+1、全番号と衝突しない値を保証）
    val ownerUuidStr = ownerUuid.toString()
    val allNumbers = existingPets.values.map { it.petNumber }.toSet()
    val ownMax =
        existingPets.values.filter { it.originalOwner == ownerUuidStr }.maxOfOrNull { it.petNumber }
            ?: 0
    var nextNumber = ownMax + 1
    while (nextNumber in allNumbers) nextNumber++
    val ownerName = Bukkit.getOfflinePlayer(ownerUuid).name ?: "Unknown"
    val defaultName = buildDefaultPetName(ownerName, type, variant, nextNumber)

    val petData =
        PetData(
            petId = petId,
            petNumber = nextNumber,
            type = type.name,
            variant = variant,
            customName = customName ?: defaultName,
            purchasedAt = LocalDateTime.now().format(DateTimeFormatter.ISO_LOCAL_DATE_TIME),
            status = PetStatus.ALIVE,
            lastLocation = null,
            deathData = null,
            stats = PetStats(),
            skillType = 0,
            skillUnlockedLevel = 0,
            foodLevel = 0,
        )

    savePetData(ownerUuid, petData)

    // キャッシュ更新
    cache.getOrPut(ownerUuid.toString()) { ConcurrentHashMap() }[petId] = petData

    plugin.logger.info("Pet purchased: Player=${ownerUuid}, PetNumber=$nextNumber, Type=$type")
    return petData
  }

  /** ペットの位置を更新（降車時・ログアウト時） */
  fun updateLastLocation(ownerUuid: UUID, petId: String, location: Location) {
    val petData = getPetData(ownerUuid, petId) ?: return

    petData.lastLocation =
        LocationData(
            world = location.world?.name ?: "world",
            x = location.x,
            y = location.y,
            z = location.z,
        )

    savePetData(ownerUuid, petData, syncBack = false)
  }

  /** ペット死亡時にデータを保存 */
  fun recordDeath(ownerUuid: UUID, entity: LivingEntity) {
    val petId =
        entity.persistentDataContainer.get(BigWolfKeys.PET_ID, PersistentDataType.STRING) ?: return

    val petData = getPetData(ownerUuid, petId) ?: return

    // 死亡データを保存
    petData.status = PetStatus.DEAD
    petData.deathData =
        DeathData(
            deathTime = LocalDateTime.now().format(DateTimeFormatter.ISO_LOCAL_DATE_TIME),
            location =
                LocationData(
                    world = entity.location.world?.name ?: "world",
                    x = entity.location.x,
                    y = entity.location.y,
                    z = entity.location.z,
                ),
        )

    // エンティティから最新のステータスを取得
    petData.syncFromEntity(entity)

    savePetData(ownerUuid, petData, syncBack = false)

    plugin.logger.info("Pet died: Owner=$ownerUuid, PetNumber=${petData.petNumber}")
  }

  /** ペットを復活させる */
  fun getDeathDataForRevive(ownerUuid: UUID, petNumber: Int): PetData? {
    val pets = loadPlayerPets(ownerUuid)
    return pets.values.find { it.petNumber == petNumber && it.status == PetStatus.DEAD }
  }

  /** 復活後にステータスを更新 */
  fun markAsRevived(ownerUuid: UUID, petId: String) {
    val petData = getPetData(ownerUuid, petId) ?: return
    petData.status = PetStatus.ALIVE
    petData.deathData = null
    savePetData(ownerUuid, petData)
  }

  /** 死亡したペット一覧を取得 */
  fun getDeadPets(ownerUuid: UUID): List<PetData> {
    return loadPlayerPets(ownerUuid).values.filter { it.status == PetStatus.DEAD }
  }

  /** プレイヤーの全ペット一覧を取得 */
  fun getAllPets(ownerUuid: UUID): List<PetData> {
    return loadPlayerPets(ownerUuid).values.toList()
  }

  /** ペット収納時にステータスを更新 */
  fun markAsStored(ownerUuid: UUID, petId: String, entity: LivingEntity) {
    val petData = getPetData(ownerUuid, petId) ?: return
    petData.status = PetStatus.STORED
    petData.lastLocation =
        LocationData(
            world = entity.location.world?.name ?: "world",
            x = entity.location.x,
            y = entity.location.y,
            z = entity.location.z,
        )
    petData.syncFromEntity(entity)
    savePetData(ownerUuid, petData)
  }

  /** ペット解放時にステータスを更新 */
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
    val variant =
        petData.variant?.let { v ->
          val safe = v.replace(Regex("[^a-zA-Z0-9_-]"), "")
          if (safe.isNotEmpty()) "_$safe" else ""
        } ?: ""
    return "${number}_${petData.type}${variant}.json"
  }

  private fun savePetData(ownerUuid: UUID, petData: PetData, syncBack: Boolean = true) {
    val playerFolder = getPlayerFolder(ownerUuid)
    val fileName = getPetFileName(petData)
    val file = File(playerFolder, fileName)
    val json = gson.toJson(petData)

    // キャッシュ更新
    cache.getOrPut(ownerUuid.toString()) { ConcurrentHashMap() }[petData.petId] = petData

    // ファイル書き込み（同期: クラッシュ時のデータ消失を防ぐ）
    try {
      file.writeText(json)
    } catch (e: Exception) {
      plugin.logger.warning(
          "Failed to save pet data for $ownerUuid / ${petData.petId}: ${e.message}"
      )
    }

    if (syncBack) {
      PetSynchronizer.syncDataToEntity(ownerUuid, petData)
    }
  }

  private fun loadPlayerPets(ownerUuid: UUID): MutableMap<String, PetData> {
    // キャッシュチェック
    cache[ownerUuid.toString()]?.let {
      return it
    }

    val playerFolder = getPlayerFolder(ownerUuid)
    val pets = ConcurrentHashMap<String, PetData>()

    playerFolder
        .listFiles()
        ?.filter { it.extension == "json" }
        ?.forEach { file ->
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

  private fun extractStats(entity: LivingEntity): PetStats {
    return PetStats(
        distance = entity.statDistance,
        jumps = entity.statJumps,
        toys = entity.statToys,
        brushes = entity.statBrushes,
        treats = entity.statTreats,
    )
  }

  /** エンティティから最新ステータスを PetData に転写（recordDeath / markAsStored 共通処理） */
  private fun PetData.syncFromEntity(entity: LivingEntity) {
    stats = extractStats(entity)
    skillType = entity.skillType
    skillUnlockedLevel = entity.skillUnlockedLevel
    foodLevel = entity.foodLevel
    particleUnlocked = entity.particleUnlocked
    customName = entity.customName()?.let { LEGACY_AMP.serialize(it) }
    speedMultiplier = entity.speedMultiplier
    jumpMultiplier = entity.jumpMultiplier
    particleType = entity.particleType
    isHovering = entity.isHovering
    temperament = entity.temperament
  }

  /** デフォルトペット名を生成（recordPurchase / recordBreeding 共通処理） */
  private fun buildDefaultPetName(
      ownerName: String,
      type: EntityType,
      variant: String?,
      number: Int,
  ): String {
    val mobJap = MobTranslator.toJapanese(type)
    return if (variant != null) {
      val variantJap = MobTranslator.translateVariant(variant)
      "${ownerName}の$variantJap$mobJap #$number"
    } else {
      "${ownerName}の$mobJap #$number"
    }
  }

  /** ペットをキャッシュから削除（譲渡時など） */
  /** プレイヤーのキャッシュを全削除（ログアウト時に呼ぶ） */
  fun clearPlayerCache(ownerUuid: UUID) {
    cache.remove(ownerUuid.toString())
  }

  fun removePetFromCache(ownerUuid: UUID, petId: String) {
    cache[ownerUuid.toString()]?.remove(petId)

    // ファイルも削除
    val playerFolder = getPlayerFolder(ownerUuid)
    val pets = loadPlayerPets(ownerUuid)
    val petData = pets[petId] ?: return
    val fileName = getPetFileName(petData)
    val file = File(playerFolder, fileName)
    if (file.exists()) {
      file.delete()
    }
  }

  /** カスタム名を更新 */
  fun updateCustomName(ownerUuid: UUID, petId: String, newName: String) {
    val petData = getPetData(ownerUuid, petId) ?: return
    petData.customName = newName
    savePetData(ownerUuid, petData)
  }

  /** エンティティ側で最新化されたスナップショットから JSON を更新する。 */
  fun updateFromSnapshot(ownerUuid: UUID, snapshot: PetSnapshot) {
    val petData = getPetData(ownerUuid, snapshot.petId) ?: return
    petData.customName = snapshot.customName
    petData.variant = snapshot.variant
    petData.status = snapshot.status
    petData.lastLocation = snapshot.lastLocation
    petData.stats = snapshot.stats
    petData.skillType = snapshot.skillType
    petData.skillUnlockedLevel = snapshot.skillUnlockedLevel
    petData.foodLevel = snapshot.foodLevel
    petData.originalOwner = snapshot.originalOwnerId ?: petData.originalOwner
    petData.breedCount = snapshot.breedCount
    petData.particleUnlocked = snapshot.particleUnlocked
    savePetData(ownerUuid, petData)
  }

  /** 公開getPetData（他クラスから使用） */
  fun getPetData(ownerUuid: UUID, petId: String): PetData? {
    return loadPlayerPets(ownerUuid)[petId]
  }

  /** 収納されたペットを番号で取得（リカバリー用） */
  fun getStoredPetForRecover(ownerUuid: UUID, petNumber: Int): PetData? {
    val pets = loadPlayerPets(ownerUuid)
    return pets.values.find { it.petNumber == petNumber && it.status == PetStatus.STORED }
  }

  /** 交配結果を記録 */
  fun recordBreeding(
      ownerUuid: UUID,
      petId: String,
      type: EntityType,
      variant: String?,
      customName: String?,
      parent1Id: String,
      parent2Id: String,
      generation: Int,
  ): PetData {
    val existingPets = loadPlayerPets(ownerUuid)
    // 自分が元オーナーのペットの最大番号+1、全番号と衝突しない値を保証
    val ownerUuidStr = ownerUuid.toString()
    val allNumbers = existingPets.values.map { it.petNumber }.toSet()
    val ownMax =
        existingPets.values.filter { it.originalOwner == ownerUuidStr }.maxOfOrNull { it.petNumber }
            ?: 0
    var nextNumber = ownMax + 1
    while (nextNumber in allNumbers) nextNumber++
    val ownerName = Bukkit.getOfflinePlayer(ownerUuid).name ?: "Unknown"
    val defaultName = buildDefaultPetName(ownerName, type, variant, nextNumber)

    val petData =
        PetData(
            petId = petId,
            petNumber = nextNumber,
            type = type.name,
            variant = variant,
            customName = customName ?: defaultName,
            purchasedAt = LocalDateTime.now().format(DateTimeFormatter.ISO_LOCAL_DATE_TIME),
            status = PetStatus.ALIVE,
            lastLocation = null,
            deathData = null,
            stats = PetStats(),
            skillType = 0,
            skillUnlockedLevel = 0,
            foodLevel = 0,
            originalOwner = ownerUuid.toString(),
            breedInfo = BreedInfo(parent1Id, parent2Id, generation),
            breedCount = 0,
            particleUnlocked = "0,1,2,3,4",
        )

    savePetData(ownerUuid, petData)
    cache.getOrPut(ownerUuid.toString()) { mutableMapOf() }[petId] = petData

    plugin.logger.info(
        "Pet bred: Player=$ownerUuid, PetNumber=$nextNumber, Type=$type, Gen=$generation"
    )
    return petData
  }

  /** ペットデータを保存（公開用） */
  fun savePet(ownerUuid: UUID, petData: PetData) {
    savePetData(ownerUuid, petData)
  }
}

// --- Data classes ---

enum class PetStatus {
  ALIVE,
  DEAD,
  STORED,
}

data class PetData(
    val petId: String,
    val petNumber: Int,
    val type: String,
    var variant: String?,
    var customName: String?,
    val purchasedAt: String,
    var status: PetStatus,
    var lastLocation: LocationData?,
    var deathData: DeathData?,
    var stats: PetStats,
    var skillType: Int,
    var skillUnlockedLevel: Int,
    var foodLevel: Int,
    // v2: 譲渡・交配関連
    var originalOwner: String? = null,
    var transferHistory: MutableList<TransferRecord> = mutableListOf(),
    var breedInfo: BreedInfo? = null,
    var breedCount: Int = 0,
    var particleUnlocked: String = "0,1,2,3,4",
    var speedMultiplier: Double = 1.0,
    var jumpMultiplier: Double = 1.0,
    var particleType: Int = 0,
    var isHovering: Boolean = false,
    var temperament: String = "typical",
)

data class LocationData(val world: String, val x: Double, val y: Double, val z: Double)

data class DeathData(val deathTime: String, val location: LocationData)

data class PetStats(
    var distance: Double = 0.0,
    var jumps: Int = 0,
    var toys: Int = 0,
    var brushes: Int = 0,
    var treats: Int = 0,
)

data class TransferRecord(val fromOwner: String, val toOwner: String, val timestamp: String)

data class BreedInfo(val parent1Id: String, val parent2Id: String, val generation: Int)

data class PetSnapshot(
    val petId: String,
    val ownerUuid: UUID,
    val type: EntityType,
    val customName: String?,
    val variant: String?,
    val status: PetStatus,
    val lastLocation: LocationData?,
    val stats: PetStats,
    val skillType: Int,
    val skillUnlockedLevel: Int,
    val foodLevel: Int,
    val particleUnlocked: String,
    val breedCount: Int,
    val originalOwnerId: String?,
)
