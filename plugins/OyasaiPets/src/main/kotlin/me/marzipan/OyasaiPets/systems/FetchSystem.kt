package me.marzipan.OyasaiPets.systems

import io.papermc.paper.entity.LookAnchor
import me.marzipan.OyasaiPets.domain.PetRegistry
import me.marzipan.OyasaiPets.domain.PetSpec
import me.marzipan.OyasaiPets.ownerId
import me.marzipan.OyasaiPets.statToys
import net.kyori.adventure.text.Component
import net.kyori.adventure.text.format.NamedTextColor.*
import org.bukkit.Material
import org.bukkit.Particle
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
class FetchSystem(
    private val plugin: JavaPlugin,
    private val activeFetchTasks: MutableMap<UUID, BukkitTask>
) {

    /**
     * プレイヤーがオーナーかチェック
     */
    private fun isOwner(entity: LivingEntity, player: Player): Boolean =
        entity.ownerId == player.uniqueId.toString()


    /**
     * エンティティを目標地点に向かって移動させる（元のBigWolf.ktのmoveTo関数を復元）
     */
    private fun moveTo(entity: LivingEntity, targetLoc: org.bukkit.Location) {
        val spec = PetRegistry.get(entity.type)
        val targetVec = targetLoc.toVector().subtract(entity.location.toVector()).normalize().multiply(0.35)

        if (spec.category == me.marzipan.OyasaiPets.domain.PetCategory.FLYING ||
            (spec.category == me.marzipan.OyasaiPets.domain.PetCategory.WATER && entity.isInWater)) {
            entity.velocity = targetVec
        } else {
            targetVec.y = entity.velocity.y
            entity.velocity = targetVec
        }

        entity.lookAt(targetLoc, LookAnchor.EYES)
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
                pet.lookAt(targetLoc, LookAnchor.EYES)

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

        // 投げたアイテムのItemStackを保存（増殖防止）
        val originalItemStack = toyItem.itemStack.clone()

        val task = object : BukkitRunnable() {
            var phase = 0
            var ticks = 0
            val timeoutTicks = 200  // 10秒（200tick）でタイムアウト
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

                ticks++

                // タイムアウトチェック
                if (ticks > timeoutTicks) {
                    player.sendMessage(Component.text("たどり着けなかった...", YELLOW))
                    if (toyItem.isValid) toyItem.remove()
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
                        entity.equipment?.setItemInMainHand(originalItemStack)
                        entity.world.playSound(entity.location, Sound.ENTITY_ITEM_PICKUP, 1f, 1f)
                        phase = 1
                        ticks = 0  // フェーズ1に入ったらタイマーリセット
                    } else {
                        moveTo(entity, targetLoc)
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
                        val drop = entity.world.dropItem(entity.location, originalItemStack)
                        drop.setGravity(spec.toyGravity)
                        if (!spec.toyGravity) drop.velocity = Vector(0, 0, 0)
                        player.playSound(player.location, Sound.ENTITY_PLAYER_LEVELUP, 1f, 1.5f)
                        player.sendMessage(Component.text("持ってきた！", GREEN))
                        cleanup(false)
                    } else {
                        moveTo(entity, playerLoc)
                    }
                }
            }

            fun cleanup(dropItem: Boolean) {
                if (dropItem) {
                    entity.equipment?.setItemInMainHand(null)
                    val drop = entity.world.dropItem(entity.location, originalItemStack)
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

    /**
     * 風船ジャンプを処理（イルカ用）
     * フグ風船をプレイヤーの目線方向に浮遊させ、イルカがAIで追いかけてジャンプ
     */
    fun handleBalloonJump(player: Player, item: ItemStack, toySpec: PetSpec) {
        val pet = player.getNearbyEntities(15.0, 10.0, 15.0)
            .filterIsInstance<LivingEntity>()
            .firstOrNull {
                it.type == toySpec.entityType && isOwner(it, player) && it.passengers.isEmpty()
            }

        if (pet == null) {
            player.sendMessage(Component.text("遊んでくれるイルカが近くにいません。", RED))
            return
        }

        // 既に遊び中（フェッチタスクがある）なら新しい風船を出さない
        if (activeFetchTasks.containsKey(pet.uniqueId)) {
            player.sendMessage(Component.text("イルカはまだ遊んでいます！", YELLOW))
            return
        }

        // おもちゃで遊んだ回数をカウント
        pet.statToys = pet.statToys + 1

        // フグ風船をプレイヤーの目線方向に投げる
        val balloon = player.world.dropItem(player.eyeLocation, item.asOne())
        balloon.setGravity(false)

        // プレイヤーの目線方向（水平成分）＋上昇成分で斜め上に浮かせる
        val lookDir = player.location.direction.clone()
        lookDir.y = 0.0  // 水平成分のみ
        lookDir.normalize()

        // 斜め上方向に浮いていく（水平0.2 + 上昇0.15）
        val floatVelocity = lookDir.multiply(0.2).setY(0.15)
        balloon.velocity = floatVelocity

        balloon.pickupDelay = Int.MAX_VALUE // プレイヤーが拾えないように
        balloon.isGlowing = true // 光らせる

        item.amount -= 1

        player.sendMessage(Component.text("フグ風船を放った！", AQUA))
        player.playSound(player.location, Sound.ENTITY_PUFFER_FISH_BLOW_UP, 1f, 1.2f)

        // 風船ジャンプタスクを開始
        startBalloonJumpTask(player, pet, balloon, item.asOne())
    }

    /**
     * 風船ジャンプタスク
     * イルカがAIで風船を追いかけ、水面から山型にジャンプ
     */
    private fun startBalloonJumpTask(
        player: Player,
        entity: LivingEntity,
        balloon: Item,
        originalItem: ItemStack
    ) {
        activeFetchTasks[entity.uniqueId]?.cancel()

        // 元の移動速度を保存し、一時的にAI移動を有効化
        val originalSpeed = entity.getAttribute(org.bukkit.attribute.Attribute.MOVEMENT_SPEED)?.baseValue ?: 0.0
        entity.getAttribute(org.bukkit.attribute.Attribute.MOVEMENT_SPEED)?.baseValue = 0.3  // イルカのデフォルト速度

        val task = object : BukkitRunnable() {
            var phase = 0 // 0: 風船が浮いていく＆イルカが追いかける, 1: ジャンプ中
            var ticks = 0
            var jumpTicks = 0
            var hasJumped = false
            var wasInAir = false  // 空中にいたかどうか（入水検出用）

            override fun run() {
                if (!entity.isValid || entity.isDead || !player.isOnline) {
                    cleanup(true)
                    return
                }
                if (!entity.passengers.isEmpty()) {
                    cleanup(true)
                    return
                }
                if (!balloon.isValid) {
                    cleanup(true)
                    return
                }

                ticks++

                // 風船のパーティクル演出
                balloon.world.spawnParticle(
                    Particle.BUBBLE_POP,
                    balloon.location,
                    3, 0.2, 0.2, 0.2, 0.01
                )

                // 風船の上昇速度を徐々に減速（最初は速く、だんだんゆっくり）
                if (ticks < 60) {
                    val slowdown = 1.0 - (ticks / 80.0)
                    val currentVel = balloon.velocity.clone()
                    currentVel.y = 0.12 * slowdown.coerceAtLeast(0.1)
                    balloon.velocity = currentVel
                } else {
                    // 60tick後はほぼ静止
                    balloon.velocity = Vector(0.0, 0.02, 0.0)
                }

                when (phase) {
                    0 -> {
                        // フェーズ0: イルカが風船に向かって泳ぐ（AI有効）
                        val balloonLoc = balloon.location
                        val entityLoc = entity.location
                        val dirToBalloon = balloonLoc.toVector().subtract(entityLoc.toVector())

                        // イルカを風船の方向に向かせる（AIが自然に追いかける）
                        entity.lookAt(balloonLoc, LookAnchor.EYES)

                        // 水中にいる場合は風船に向かって泳ぐ（AIの補助）
                        if (entity.isInWater) {
                            val swimDir = dirToBalloon.clone().normalize().multiply(0.4)
                            entity.velocity = entity.velocity.add(swimDir.multiply(0.3))
                        }

                        // 風船の真下付近に到達し、水面近くならジャンプ開始
                        val horizontalDist = dirToBalloon.clone().setY(0.0).length()
                        val isNearSurface = !entity.location.clone().add(0.0, 1.5, 0.0).block.type.name.contains("WATER")

                        if (horizontalDist < 3.0 && isNearSurface && !hasJumped) {
                            // ジャンプ！山型の軌道（デフォルトのイルカジャンプに近い）
                            phase = 1
                            jumpTicks = 0
                            hasJumped = true
                            wasInAir = true

                            // ジャンプ中はAIの向き制御を止める（pitch上書き防止）
                            // noAIは使わず自由に動けるようにする

                            // 風船への方向ベクトル（山型ジャンプ用）
                            val jumpDir = dirToBalloon.clone().normalize()

                            // 水平成分と垂直成分を分けて設定（山型軌道）
                            // デフォルトのイルカジャンプのように、前方に飛びながら上昇
                            val horizontalStrength = 1.0  // 水平方向の強さ（前に飛ぶ）
                            val verticalStrength = 0.9    // 上方向の強さ

                            val jumpVelocity = Vector(
                                jumpDir.x * horizontalStrength,
                                verticalStrength,
                                jumpDir.z * horizontalStrength
                            )
                            entity.velocity = jumpVelocity

                            entity.world.playSound(entity.location, Sound.ENTITY_DOLPHIN_JUMP, 1f, 1f)
                            entity.world.spawnParticle(
                                Particle.SPLASH,
                                entity.location,
                                30, 1.0, 0.2, 1.0, 0.1
                            )
                        }

                        // タイムアウト（200tick = 10秒）
                        if (ticks > 200) {
                            player.sendMessage(Component.text("イルカが風船に届かなかった...", YELLOW))
                            cleanup(true)
                        }
                    }
                    1 -> {
                        // フェーズ1: ジャンプ中、風船に当たるか確認
                        jumpTicks++

                        // 空中にいるかチェック（水中でない = 空中）
                        val isCurrentlyInAir = !entity.isInWater

                        // 放物線の傾斜角に合わせてイルカの向きを変える
                        // 速度ベクトルからyawとpitchを直接計算
                        val velocity = entity.velocity
                        if (velocity.lengthSquared() > 0.01 && isCurrentlyInAir) {
                            val horizontalLength = kotlin.math.sqrt(velocity.x * velocity.x + velocity.z * velocity.z)

                            // yaw: 水平方向の向き（-180〜180度）
                            val yaw = Math.toDegrees(kotlin.math.atan2(-velocity.x, velocity.z)).toFloat()

                            // pitch: 垂直方向の向き（-90〜90度）
                            // 上向きはマイナス、下向きはプラス（Minecraftの仕様）
                            val pitch = Math.toDegrees(-kotlin.math.atan2(velocity.y, horizontalLength)).toFloat()

                            // teleportは速度が不安定になりやすいので、AI停止中はsetRotationを使用
                            entity.setRotation(yaw, pitch)
                        }

                        val distToBalloon = entity.location.distance(balloon.location)

                        if (distToBalloon < 2.5) {
                            // 風船にヒット！
                            balloon.world.spawnParticle(
                                Particle.HEART,
                                balloon.location,
                                10, 0.5, 0.5, 0.5, 0.1
                            )
                            balloon.world.spawnParticle(
                                Particle.BUBBLE_POP,
                                balloon.location,
                                20, 0.5, 0.5, 0.5, 0.1
                            )
                            balloon.world.playSound(
                                balloon.location,
                                Sound.ENTITY_PUFFER_FISH_BLOW_OUT,
                                1f, 1.5f
                            )
                            balloon.world.playSound(
                                balloon.location,
                                Sound.ENTITY_PLAYER_LEVELUP,
                                0.8f, 1.5f
                            )

                            balloon.remove()
                            player.sendMessage(Component.text("ナイスジャンプ！", GREEN))

                            // アイテムを返却
                            val drop = player.world.dropItem(player.location.add(0.0, 1.0, 0.0), originalItem)
                            drop.velocity = Vector(0, 0, 0)

                            cleanup(false)
                            return
                        }

                        // ジャンプ後、水に戻ったら再度追いかけモードに
                        if (jumpTicks > 20 && entity.isInWater) {
                            // 入水時のスプラッシュエフェクト
                            if (wasInAir) {
                                entity.world.spawnParticle(
                                    Particle.SPLASH,
                                    entity.location.add(0.0, 0.3, 0.0),
                                    25, 0.5, 0.2, 0.5, 0.15
                                )
                                entity.world.playSound(entity.location, Sound.ENTITY_GENERIC_SPLASH, 1.0f, 1.0f)
                                wasInAir = false
                            }
                            // 着水したらAIを戻す
                            phase = 0
                            hasJumped = false
                        }

                        // ジャンプタイムアウト（60tick = 3秒）
                        if (jumpTicks > 60) {
                            // 返却して終了
                            cleanup(true)
                        }
                    }
                }
            }

            fun cleanup(returnItem: Boolean) {
                // 移動速度を元に戻す
                entity.getAttribute(org.bukkit.attribute.Attribute.MOVEMENT_SPEED)?.baseValue = originalSpeed

                // 風船が残っていれば必ず削除
                if (balloon.isValid) {
                    balloon.remove()
                }

                // アイテムを返却（成功時以外）
                if (returnItem) {
                    val drop = player.world.dropItem(player.location.add(0.0, 1.0, 0.0), originalItem)
                    drop.velocity = Vector(0, 0, 0)
                }

                this.cancel()
                activeFetchTasks.remove(entity.uniqueId)
            }
        }
        activeFetchTasks[entity.uniqueId] = task.runTaskTimer(plugin, 0L, 1L)
    }
}
