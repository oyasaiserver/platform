package me.marzipan.OyasaiPets.systems

import me.marzipan.OyasaiPets.*
import me.marzipan.OyasaiPets.domain.PetRegistry
import me.marzipan.OyasaiPets.domain.PetSpec
import me.marzipan.OyasaiPets.domain.ToyType
import net.kyori.adventure.text.Component
import net.kyori.adventure.text.format.NamedTextColor.*
import org.bukkit.Material
import org.bukkit.Sound
import org.bukkit.entity.Item
import org.bukkit.entity.LivingEntity
import org.bukkit.entity.Player
import org.bukkit.inventory.ItemStack
import org.bukkit.plugin.java.JavaPlugin
import org.bukkit.scheduler.BukkitRunnable
import org.bukkit.scheduler.BukkitTask
import org.bukkit.util.Vector
import java.util.UUID

/**
 * おもちゃフェッチシステム
 * ペットがおもちゃを拾って持ってくる動作を管理
 */
class FetchSystem(private val plugin: JavaPlugin) {

    // アクティブなフェッチタスク管理
    private val activeFetchTasks = mutableMapOf<UUID, BukkitTask>()

    /**
     * プレイヤーがオーナーかチェック
     */
    private fun isOwner(entity: LivingEntity, player: Player): Boolean {
        return entity.ownerId == player.uniqueId.toString()
    }

    /**
     * 投げるタイプのおもちゃを処理
     */
    fun handleThrowToy(player: Player, item: ItemStack, toySpec: PetSpec) {
        val pet = player.getNearbyEntities(15.0, 10.0, 15.0)
            .filterIsInstance<LivingEntity>()
            .firstOrNull {
                it.type == toySpec.entityType && isOwner(it, player) && it.passengers.isEmpty()
            }

        if (pet != null) {
            // おもちゃで遊んだ回数（投げたタイミングでカウント）
            pet.statToys = pet.statToys + 1

            val thrownItem = player.world.dropItem(player.eyeLocation, item.asOne())
            thrownItem.setGravity(toySpec.toyGravity)

            if (!toySpec.toyGravity) {
                thrownItem.velocity = player.location.direction.multiply(0.5)
            } else {
                thrownItem.velocity = player.location.direction.multiply(1.2)
            }

            thrownItem.pickupDelay = 20
            item.amount -= 1

            player.sendMessage(Component.text("取ってこい！", AQUA))
            player.playSound(player.location, Sound.ENTITY_SNOWBALL_THROW, 1f, 1f)

            startFetchTask(player, pet, thrownItem, toySpec)
        } else {
            player.sendMessage(Component.text("遊んでくれる ${toySpec.entityType.name} が近くにいません。", RED))
        }
    }

    /**
     * 釣竿タイプのおもちゃを処理
     */
    fun handleFishingToy(player: Player, toySpec: PetSpec) {
        val pet = player.getNearbyEntities(15.0, 10.0, 15.0)
            .filterIsInstance<LivingEntity>()
            .firstOrNull {
                it.type == toySpec.entityType && isOwner(it, player) && it.passengers.isEmpty()
            }

        if (pet != null) {
            // おもちゃで遊んだ回数
            pet.statToys = pet.statToys + 1

            val targetLoc = player.eyeLocation.add(player.location.direction.normalize().multiply(6.0))
            val vec = targetLoc.toVector().subtract(pet.location.toVector())
            val dist = vec.clone().setY(0).length()

            if (dist > 1.0) {
                val strength = (dist * 0.25).coerceIn(0.5, 1.8)
                val velocity = vec.clone().setY(0).normalize().multiply(strength).setY(0.6)

                pet.velocity = velocity
                pet.lookAt(targetLoc, io.papermc.paper.entity.LookAnchor.EYES)

                player.sendMessage(Component.text("とびかかれ！", LIGHT_PURPLE))
                pet.world.playSound(pet.location, Sound.ENTITY_CAT_HISS, 1f, 1f)
            }
        }
    }

    /**
     * フェッチタスクを開始
     */
    private fun startFetchTask(player: Player, entity: LivingEntity, toyItem: Item, spec: PetSpec) {
        activeFetchTasks[entity.uniqueId]?.cancel()

        val returnItemStack = spec.createToyItem()
        val task = object : BukkitRunnable() {
            var phase = 0
            val runSpeed = 0.35

            override fun run() {
                if (!entity.isValid || entity.isDead || !player.isOnline) {
                    cleanup(true)
                    return
                }
                if (!entity.passengers.isEmpty()) {
                    cleanup(true)
                    return
                }

                if (phase == 0) {
                    // フェーズ0: おもちゃに向かって走る
                    if (!toyItem.isValid) {
                        cleanup(false)
                        return
                    }
                    val targetLoc = toyItem.location
                    val dist = entity.location.distance(targetLoc)
                    if (dist < 1.5) {
                        toyItem.remove()
                        entity.equipment?.setItemInMainHand(returnItemStack)
                        entity.world.playSound(entity.location, Sound.ENTITY_ITEM_PICKUP, 1f, 1f)
                        phase = 1
                    } else {
                        val dirVec = targetLoc.toVector().subtract(entity.location.toVector()).normalize()
                        entity.velocity = dirVec.multiply(runSpeed)
                    }
                } else {
                    // フェーズ1: プレイヤーに向かって戻る
                    if (!player.isOnline) {
                        cleanup(true)
                        return
                    }
                    val playerLoc = player.location
                    val dist = entity.location.distance(playerLoc)
                    if (dist < 2.5) {
                        entity.equipment?.setItemInMainHand(null)
                        val drop = entity.world.dropItem(entity.location, returnItemStack)
                        drop.setGravity(spec.toyGravity)
                        if (!spec.toyGravity) drop.velocity = Vector(0, 0, 0)
                        player.playSound(player.location, Sound.ENTITY_PLAYER_LEVELUP, 1f, 1.5f)
                        player.sendMessage(Component.text("持ってきた！", GREEN))
                        cleanup(false)
                    } else {
                        val dirVec = playerLoc.toVector().subtract(entity.location.toVector()).normalize()
                        entity.velocity = dirVec.multiply(runSpeed)
                    }
                }
            }

            fun cleanup(dropItem: Boolean) {
                if (dropItem) {
                    entity.equipment?.setItemInMainHand(null)
                    val drop = entity.world.dropItem(entity.location, returnItemStack)
                    drop.setGravity(spec.toyGravity)
                    if (!spec.toyGravity) drop.velocity = Vector(0, 0, 0)
                }
                this.cancel()
                activeFetchTasks.remove(entity.uniqueId)
            }
        }
        activeFetchTasks[entity.uniqueId] = task.runTaskTimer(plugin, 0L, 1L)
    }

    /**
     * フェッチタスクを停止
     */
    fun stopFetchTask(entity: LivingEntity) {
        if (activeFetchTasks.containsKey(entity.uniqueId)) {
            activeFetchTasks[entity.uniqueId]?.cancel()
            activeFetchTasks.remove(entity.uniqueId)
            if (entity.equipment?.itemInMainHand?.type != Material.AIR) {
                entity.equipment?.setItemInMainHand(null)
            }
        }
    }
}

