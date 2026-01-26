package me.marzipan.OyasaiPets.commands

import me.marzipan.OyasaiPets.BigWolfConfig
import me.marzipan.OyasaiPets.domain.PetRegistry
import me.marzipan.OyasaiPets.domain.ShopContext
import me.marzipan.OyasaiPets.petId
import net.kyori.adventure.text.Component
import net.kyori.adventure.text.format.NamedTextColor.*
import org.bukkit.Bukkit
import org.bukkit.Material
import org.bukkit.Sound
import org.bukkit.entity.EntityType
import org.bukkit.entity.LivingEntity
import org.bukkit.entity.Player
import org.bukkit.inventory.ItemStack

/**
 * 一般プレイヤー向けコマンド処理
 */
class PlayerCommands(
    private val openShopGui: (Player, ShopContext) -> Unit,
    private val createStoredPetItem: (LivingEntity) -> ItemStack
) {

    /**
     * 使用方法を表示
     */
    fun showUsage(player: Player) {
        player.sendMessage(Component.text("=== BigWolf 使用方法 ===", GOLD))
        player.sendMessage(Component.text("/bigwolf <mob名> [variant] - ペットを購入して召喚", YELLOW))
        player.sendMessage(Component.text("/bigwolf list - 購入可能なペット一覧", YELLOW))
        player.sendMessage(Component.text("/bigwolf storeall - 自分の全ペットを収納", YELLOW))
        player.sendMessage(Component.text("例: /bigwolf wolf, /bigwolf cat tabby", GRAY))
    }

    /**
     * 購入可能なペット一覧を表示
     */
    fun handleListCommand(player: Player) {
        player.sendMessage(Component.text("=== 購入可能なペット ===", GOLD))
        PetRegistry.officialPets.forEach { type ->
            val spec = PetRegistry.get(type)
            player.sendMessage(
                Component.text("- ${type.name}", YELLOW)
                    .append(Component.text(" (カテゴリ: ${spec.category})", GRAY))
            )
        }
        player.sendMessage(Component.text("詳細: /bigwolf <mob名> で購入画面を開けます", GREEN))
    }

    /**
     * 通常召喚（購入）
     */
    fun handleNormalSummon(player: Player, mobName: String, args: Array<out String>) {
        val type = runCatching { EntityType.valueOf(mobName.uppercase()) }.getOrNull()
        if (type == null) {
            player.sendMessage(Component.text("そのエンティティは見つかりません: $mobName", RED))
            return
        }

        if (!PetRegistry.isOfficial(type)) {
            player.sendMessage(Component.text("そのMOB (${type.name}) は通常召喚できません。", RED))
            player.sendMessage(Component.text("実験的なMOBの召喚にはOP権限と /bigwolf exp コマンドが必要です。", GRAY))
            return
        }

        if (!type.isAlive) {
            player.sendMessage(Component.text("召喚できません。", RED))
            return
        }

        val variant = if (args.size >= 2) args[1].lowercase() else null
        val cost = BigWolfConfig.defaultShopCost

        // ショップGUIを開いて購入処理
        openShopGui(player, ShopContext(type, variant, cost))
    }

    /**
     * 全ペットを収納
     */
    fun handleStoreAll(player: Player) {
        val playerUuidStr = player.uniqueId.toString()
        var count = 0
        val itemsToGive = mutableListOf<ItemStack>()

        for (world in Bukkit.getWorlds()) {
            val pets = world.livingEntities.filter {
                it is LivingEntity && it.petId != null && it.petId == playerUuidStr
            }
            for (entity in pets) {
                if (entity is LivingEntity) {
                    val item = createStoredPetItem(entity)
                    itemsToGive.add(item)
                    entity.remove()
                    count++
                }
            }
        }

        if (count == 0) {
            player.sendMessage(Component.text("収納できるペットが見つかりませんでした。", RED))
            return
        }

        val leftovers = player.inventory.addItem(*itemsToGive.toTypedArray())
        leftovers.values.forEach { item -> player.world.dropItem(player.location, item) }

        player.playSound(player.location, Sound.ENTITY_ENDERMAN_TELEPORT, 1f, 1f)
        player.sendMessage(Component.text("ペット ${count}匹 を収納しました！", GREEN))
        if (leftovers.isNotEmpty()) {
            player.sendMessage(Component.text("インベントリに入り切らなかった分を足元にドロップしました。", YELLOW))
        }
    }
}

