package me.marzipan.OyasaiPets.services

import com.google.gson.GsonBuilder
import me.marzipan.OyasaiPets.*
import net.kyori.adventure.text.Component
import net.kyori.adventure.text.format.NamedTextColor.*
import net.kyori.adventure.text.serializer.plain.PlainTextComponentSerializer
import org.bukkit.Bukkit
import org.bukkit.entity.LivingEntity
import org.bukkit.entity.Player
import org.bukkit.persistence.PersistentDataType
import org.bukkit.plugin.java.JavaPlugin
import java.io.File
import java.util.UUID
import java.util.logging.Logger

/**
 * ペット譲渡を担当するサービス
 * - 譲渡コマンド処理
 * - 2段階確認フロー
 * - 譲渡処理の実行
 */
class TransferService(
    private val plugin: JavaPlugin,
    private val storageService: PetStorageService,
    private val logger: Logger
) {
    private val pendingTransfers = mutableMapOf<UUID, TransferRequest>()

    data class TransferRequest(
        val petId: String,
        val targetPlayer: UUID,
        val expireTime: Long
    )

    /**
     * 譲渡コマンドを処理
     */
    fun handleTransferCommand(player: Player, args: Array<out String>) {
        if (args.size < 3) {
            player.sendMessage(Component.text("使い方: /bigwolf transfer <ペット番号> <プレイヤー名>", RED))
            return
        }

        val petNumber = args[1].toIntOrNull()
        if (petNumber == null) {
            player.sendMessage(Component.text("ペット番号は数字で指定してください。", RED))
            return
        }

        val targetName = args[2]
        val targetPlayer = Bukkit.getPlayer(targetName)
        if (targetPlayer == null) {
            player.sendMessage(Component.text("プレイヤー $targetName はオンラインではありません。", RED))
            return
        }

        if (targetPlayer.uniqueId == player.uniqueId) {
            player.sendMessage(Component.text("自分自身には譲渡できません。", RED))
            return
        }

        // ペット確認（召喚中のペットから検索）
        var targetEntity: LivingEntity? = null
        val playerUuidStr = player.uniqueId.toString()
        for (world in Bukkit.getWorlds()) {
            for (entity in world.livingEntities) {
                if (entity.ownerId == playerUuidStr) {
                    val petData = entity.petId?.let { PetDataManager.getPetData(player.uniqueId, it) }
                    if (petData?.petNumber == petNumber) {
                        targetEntity = entity
                        break
                    }
                }
            }
            if (targetEntity != null) break
        }

        if (targetEntity == null) {
            player.sendMessage(Component.text("番号 $petNumber の召喚中ペットが見つかりません。", RED))
            player.sendMessage(Component.text("譲渡するにはペットを召喚している必要があります。", GRAY))
            return
        }

        val petId = targetEntity.petId!!
        val petName = targetEntity.customName()?.let {
            PlainTextComponentSerializer.plainText().serialize(it)
        } ?: targetEntity.type.name

        // ★ 2回目の実行チェック（確認済みリクエストがあるか）
        val existingRequest = pendingTransfers[player.uniqueId]
        if (existingRequest != null) {
            // 有効期限チェック
            if (System.currentTimeMillis() > existingRequest.expireTime) {
                pendingTransfers.remove(player.uniqueId)
                player.sendMessage(Component.text("譲渡確認の有効期限が切れました。もう一度最初から実行してください。", RED))
                return
            }

            // 同じペット・同じターゲットか確認
            if (existingRequest.petId == petId && existingRequest.targetPlayer == targetPlayer.uniqueId) {
                // ★ 実際の譲渡処理を実行
                executePetTransfer(player, targetPlayer, targetEntity, petId, petName)
                pendingTransfers.remove(player.uniqueId)
                return
            } else {
                // 違うペット/ターゲットなので、リクエストを更新
                pendingTransfers.remove(player.uniqueId)
                player.sendMessage(Component.text("前回の譲渡確認をキャンセルしました。", GRAY))
            }
        }

        // ★ 1回目の実行：確認リクエストを保存
        pendingTransfers[player.uniqueId] = TransferRequest(
            petId = petId,
            targetPlayer = targetPlayer.uniqueId,
            expireTime = System.currentTimeMillis() + 30_000 // 30秒
        )

        player.sendMessage(Component.text("=== 譲渡確認 ===", GOLD))
        player.sendMessage(Component.text("ペット「$petName」を ${targetPlayer.name} に譲渡しますか？", YELLOW))
        player.sendMessage(Component.text("確定するには30秒以内にもう一度同じコマンドを実行してください。", GRAY))
        player.sendMessage(Component.text("※譲渡後は取り消せません", RED))
    }

    /**
     * 実際の譲渡処理を実行
     */
    private fun executePetTransfer(
        sender: Player,
        targetPlayer: Player,
        petEntity: LivingEntity,
        petId: String,
        petName: String
    ) {
        try {
            val senderUuid = sender.uniqueId
            val targetUuid = targetPlayer.uniqueId

            // 1. 元のペットデータを取得
            var petData = PetDataManager.getPetData(senderUuid, petId)
            if (petData == null) {
                sender.sendMessage(Component.text("ペットデータが見つかりません。", RED))
                return
            }

            // originalOwner / transfer回数を最新化してから収納
            if (petEntity.originalOwnerId == null) {
                petEntity.originalOwnerId = senderUuid.toString()
            }
            petEntity.transferCount = petEntity.transferCount + 1

            // 2. ペットを収納してスポーンエッグを取得
            val egg = storageService.createStoredPetItem(petEntity)

            // createStoredPetItem -> markAsStored により JSON が更新されるため再読込
            petData = PetDataManager.getPetData(senderUuid, petId) ?: petData

            // 3. エンティティを削除
            petEntity.remove()

            // 4. 元のデータファイルを削除
            val senderFolder = File(File(plugin.dataFolder, "players"), senderUuid.toString())
            val oldFileName = storageService.getPetFileName(petData)
            val oldFile = File(senderFolder, oldFileName)
            if (oldFile.exists()) {
                oldFile.delete()
            }

            // ★ 元のオーナーのキャッシュからも削除
            PetDataManager.removePetFromCache(senderUuid, petId)

            // 5. 新しいオーナーで全ペットを読み込んで最大番号を取得
            val targetPets = PetDataManager.getAllPets(targetUuid)
            val nextNumber = (targetPets.maxOfOrNull { it.petNumber } ?: 0) + 1

            // 6. 譲渡履歴を記録
            val transferRecord = TransferRecord(
                fromOwner = senderUuid.toString(),
                toOwner = targetUuid.toString(),
                timestamp = java.time.LocalDateTime.now().toString()
            )
            val updatedHistory = petData.transferHistory.toMutableList()
            updatedHistory.add(transferRecord)

            // 7. originalOwnerが未設定の場合は現在の送信者をセット
            val originalOwner = petData.originalOwner ?: senderUuid.toString()

            // 8. 新しいペット番号でデータを作成
            val newPetData = petData.copy(
                petNumber = nextNumber,
                originalOwner = originalOwner,
                transferHistory = updatedHistory,
                breedInfo = petData.breedInfo?.copy(),
                stats = petData.stats.copy(),
                particleUnlocked = petData.particleUnlocked
            )

            // 9. 新しいオーナーでデータを保存
            val targetFolder = File(File(plugin.dataFolder, "players"), targetUuid.toString())
            if (!targetFolder.exists()) {
                targetFolder.mkdirs()
            }
            val newFileName = storageService.getPetFileName(newPetData)
            val newFile = File(targetFolder, newFileName)
            newFile.writeText(GsonBuilder().setPrettyPrinting().create().toJson(newPetData))

            // ★ PetDataManagerのキャッシュを更新
            PetDataManager.savePet(targetUuid, newPetData)

            // 10. スポーンエッグのオーナーUUIDを更新
            egg.itemMeta = egg.itemMeta?.apply {
                persistentDataContainer.set(
                    BigWolfKeys.STORED_OWNER,
                    PersistentDataType.STRING,
                    targetUuid.toString()
                )
            }

            // 11. 譲渡先プレイヤーにスポーンエッグを渡す
            val leftover = targetPlayer.inventory.addItem(egg)
            if (leftover.isNotEmpty()) {
                targetPlayer.world.dropItem(targetPlayer.location, egg)
                targetPlayer.sendMessage(Component.text("インベントリがいっぱいだったため、足元にドロップしました。", YELLOW))
            }

            // 12. 成功メッセージ（譲渡回数を表示）
            val transferCount = updatedHistory.size
            sender.sendMessage(Component.text("ペット「$petName」(#${petData.petNumber})を ${targetPlayer.name} に譲渡しました！(譲渡回数: $transferCount)", GREEN))
            targetPlayer.sendMessage(Component.text("${sender.name} からペット「$petName」(あなたの#$nextNumber)を譲渡されました！", GREEN))

            logger.info("Pet transfer: $petName (ID: $petId) #${petData.petNumber} from ${sender.name} to ${targetPlayer.name} #$nextNumber")

        } catch (e: Exception) {
            sender.sendMessage(Component.text("譲渡処理中にエラーが発生しました: ${e.message}", RED))
            logger.warning("Pet transfer error: ${e.message}")
            e.printStackTrace()
        }
    }
}
