package me.marzipan.OyasaiPets.services

import me.marzipan.OyasaiPets.*
import me.marzipan.OyasaiPets.systems.BreedingSystem
import net.kyori.adventure.text.Component
import net.kyori.adventure.text.format.NamedTextColor.*
import org.bukkit.Bukkit
import org.bukkit.Particle
import org.bukkit.Sound
import org.bukkit.entity.LivingEntity
import org.bukkit.entity.Player
import java.util.UUID
import java.util.logging.Logger

/**
 * ペット関連のコマンド処理を担当するサービス
 * - 名前変更
 * - 交配コマンド
 */
class PetCommandService(
    private val breedingSystem: BreedingSystem,
    private val logger: Logger
) {
    val breedGuiTitle = Component.text("★ 交配するペットを選択", DARK_PURPLE)

    // 交配の親選択状態 (プレイヤーUUID -> (親1, 親2))
    data class BreedSelection(var parent1: LivingEntity? = null, var parent2: LivingEntity? = null)
    val breedSelections = mutableMapOf<UUID, BreedSelection>()

    // BreedGuiListenerへの参照（後で設定）
    var breedGuiListener: me.marzipan.OyasaiPets.listeners.BreedGuiListener? = null

    /**
     * 交配コマンドを処理
     */
    fun handleBreedCommand(player: Player) {
        val breedablePets = breedingSystem.getBreedablePets(player)
        if (breedablePets.size < 2) {
            player.sendMessage(Component.text("交配にはLv.${BigWolfConfig.breedMinLevel}以上のペットが2匹必要です", RED))
            return
        }

        // 交配選択状態を初期化
        breedSelections[player.uniqueId] = BreedSelection()

        val inv = breedingSystem.openBreedGui(player, breedablePets, breedGuiTitle)
        player.openInventory(inv)

        // BreedGuiListenerにpetsを通知
        breedGuiListener?.registerBreedGuiOpened(player, breedablePets)
    }

    /**
     * 親を選択
     */
    fun selectParent(player: Player, pet: LivingEntity, isParent1: Boolean) {
        val selection = breedSelections.getOrPut(player.uniqueId) { BreedSelection() }

        if (isParent1) {
            selection.parent1 = pet
            player.sendMessage(Component.text("親1に選択しました: ${pet.customName()?.let {
                net.kyori.adventure.text.serializer.plain.PlainTextComponentSerializer.plainText().serialize(it)
            } ?: pet.type.name}", GREEN))
        } else {
            selection.parent2 = pet
            player.sendMessage(Component.text("親2に選択しました: ${pet.customName()?.let {
                net.kyori.adventure.text.serializer.plain.PlainTextComponentSerializer.plainText().serialize(it)
            } ?: pet.type.name}", GREEN))
        }
    }

    /**
     * 選択された親を取得
     */
    fun getSelectedParents(player: Player): Pair<LivingEntity?, LivingEntity?> {
        val selection = breedSelections[player.uniqueId] ?: return Pair(null, null)
        return Pair(selection.parent1, selection.parent2)
    }

    /**
     * 選択をクリア
     */
    fun clearSelection(player: Player) {
        breedSelections.remove(player.uniqueId)
    }

    /**
     * 名前変更コマンドを処理
     */
    fun handleRenameCommand(player: Player, args: Array<out String>) {
        if (args.size < 3) {
            player.sendMessage(Component.text("使い方: /bigwolf rename <ペット番号> <新しい名前>", RED))
            player.sendMessage(Component.text("例: /bigwolf rename 1 ポチ", GRAY))
            return
        }

        val petNumber = args[1].toIntOrNull()
        if (petNumber == null) {
            player.sendMessage(Component.text("ペット番号は数字で指定してください。", RED))
            return
        }

        // 残りの引数を名前として結合
        val newName = args.drop(2).joinToString(" ")
        if (newName.isBlank() || newName.length > 32) {
            player.sendMessage(Component.text("名前は1～32文字で指定してください。", RED))
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
            player.sendMessage(Component.text("名前を変更するにはペットを召喚している必要があります。", GRAY))
            return
        }

        // 名前を変更
        val nameComponent = Component.text(newName, AQUA)
        targetEntity.customName(nameComponent)
        targetEntity.isCustomNameVisible = true

        // JSONファイルにも保存
        val petId = targetEntity.petId
        if (petId != null) {
            try {
                PetDataManager.updateCustomName(player.uniqueId, petId, newName)
            } catch (e: Exception) {
                logger.warning("Failed to update pet name in JSON: ${e.message}")
            }
        }

        player.sendMessage(Component.text("ペット #$petNumber の名前を「$newName」に変更しました！", GREEN))
        player.playSound(player.location, Sound.ENTITY_PLAYER_LEVELUP, 1f, 1f)
        targetEntity.world.spawnParticle(Particle.HEART, targetEntity.location.add(0.0, 1.0, 0.0), 10, 0.5, 0.5, 0.5)
    }
}
