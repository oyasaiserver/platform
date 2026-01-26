package me.marzipan.OyasaiPets.systems

import me.marzipan.OyasaiPets.*
import net.kyori.adventure.text.Component
import net.kyori.adventure.text.format.NamedTextColor.*
import org.bukkit.Bukkit
import org.bukkit.entity.LivingEntity
import org.bukkit.entity.Player
import java.time.LocalDateTime
import java.time.format.DateTimeFormatter
import java.util.UUID

/**
 * ペット譲渡システム
 * ペットの所有権移転、譲渡履歴管理
 */
class TransferSystem {

    // 譲渡待機中のペット管理
    private val pendingTransfers = mutableMapOf<UUID, Pair<LivingEntity, Long>>()

    /**
     * 譲渡を開始（確認待ち状態）
     */
    fun initiateTransfer(player: Player, entity: LivingEntity, targetPlayer: Player) {
        if (entity.ownerId != player.uniqueId.toString()) {
            player.sendMessage(Component.text("このペットはあなたのものではありません！", RED))
            return
        }

        if (targetPlayer.uniqueId == player.uniqueId) {
            player.sendMessage(Component.text("自分自身には譲渡できません。", RED))
            return
        }

        pendingTransfers[player.uniqueId] = Pair(entity, System.currentTimeMillis())
        player.sendMessage(Component.text("${targetPlayer.name}にペットを譲渡します。", YELLOW))
        player.sendMessage(Component.text("もう一度コマンドを実行して確定してください（15秒以内）", GRAY))
    }

    /**
     * 譲渡を確定実行
     */
    fun confirmTransfer(player: Player, entity: LivingEntity, targetPlayer: Player): Boolean {
        val pending = pendingTransfers[player.uniqueId]
        if (pending == null) {
            player.sendMessage(Component.text("譲渡が開始されていません。", RED))
            return false
        }

        val (pendingEntity, timestamp) = pending
        val now = System.currentTimeMillis()

        if (now - timestamp > 15000) {
            pendingTransfers.remove(player.uniqueId)
            player.sendMessage(Component.text("譲渡がタイムアウトしました。", RED))
            return false
        }

        if (pendingEntity.uniqueId != entity.uniqueId) {
            player.sendMessage(Component.text("対象のペットが異なります。", RED))
            return false
        }

        // 譲渡実行
        val petId = entity.petId ?: return false
        val oldOwnerId = entity.ownerId ?: return false
        val newOwnerId = targetPlayer.uniqueId.toString()

        // PDCの更新
        entity.ownerId = newOwnerId
        if (entity.originalOwnerId == null) {
            entity.originalOwnerId = oldOwnerId
        }
        entity.transferCount++

        // PetDataの移動
        val oldOwnerUuid = runCatching { UUID.fromString(oldOwnerId) }.getOrNull()
        if (oldOwnerUuid != null) {
            val petData = PetDataManager.getPetData(oldOwnerUuid, petId)
            if (petData != null) {
                // 譲渡履歴を追加
                if (petData.originalOwner == null) {
                    petData.originalOwner = oldOwnerId
                }
                petData.transferHistory.add(
                    TransferRecord(
                        fromOwner = oldOwnerId,
                        toOwner = newOwnerId,
                        timestamp = LocalDateTime.now().format(DateTimeFormatter.ISO_LOCAL_DATE_TIME)
                    )
                )

                // 新しいオーナーに保存
                PetDataManager.savePet(targetPlayer.uniqueId, petData)

                // 旧オーナーから削除
                PetDataManager.removePetFromCache(oldOwnerUuid, petId)
            }
        }

        // カスタム名更新
        val currentName = entity.customName()?.let {
            net.kyori.adventure.text.serializer.plain.PlainTextComponentSerializer.plainText().serialize(it)
        } ?: entity.type.name

        entity.customName(Component.text("${targetPlayer.name}'s $currentName"))

        // メッセージ
        player.sendMessage(Component.text("${targetPlayer.name}にペットを譲渡しました！", GREEN))
        targetPlayer.sendMessage(Component.text("${player.name}からペットを受け取りました！", GREEN))

        pendingTransfers.remove(player.uniqueId)
        return true
    }

    /**
     * 譲渡をキャンセル
     */
    fun cancelTransfer(player: Player) {
        if (pendingTransfers.remove(player.uniqueId) != null) {
            player.sendMessage(Component.text("譲渡をキャンセルしました。", YELLOW))
        }
    }

    /**
     * プレイヤーがログアウトした際のクリーンアップ
     */
    fun cleanupPlayer(playerUuid: UUID) {
        pendingTransfers.remove(playerUuid)
    }
}

