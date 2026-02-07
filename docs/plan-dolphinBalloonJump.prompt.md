# Plan: イルカのフグ風船ジャンプ機能の実装

イルカの遊びを「ビーチボール（雪玉）投げ取り」から「フグ風船ジャンプ」に変更します。フグアイテムを投げると水面から5ブロック上空に浮遊し、イルカが水面からジャンプしてフグ風船をつつく動作を実装します。

## Steps

### 1. ToyType.kt に `BALLOON_JUMP` を追加

**File:** `/Users/aa/platform/plugins/OyasaiPets/src/main/kotlin/me/marzipan/OyasaiPets/domain/ToyType.kt`

```kotlin
enum class ToyType {
    /** おもちゃなし */
    NONE,
    /** 投げて取ってこい */
    THROW_FETCH,
    /** 釣竿で遊ぶ（猫じゃらし等） */
    FISHING_ROD,
    /** 風船ジャンプ（イルカ用：水面からジャンプして風船をつつく） */
    BALLOON_JUMP
}
```

### 2. PetRegistry.kt のイルカ設定を更新

**File:** `/Users/aa/platform/plugins/OyasaiPets/src/main/kotlin/me/marzipan/OyasaiPets/domain/PetRegistry.kt`

74-83行目付近のイルカ設定を以下のように変更:

```kotlin
EntityType.DOLPHIN to PetSpec(
    category = PetCategory.WATER,
    entityType = EntityType.DOLPHIN,
    baseSpeed = 0.5,
    maxSpeed = 1.0,
    scaleRange = 1.2..2.2,
    toyMaterial = Material.PUFFERFISH,
    toyName = "フグ風船",
    toyType = ToyType.BALLOON_JUMP,
    toyGravity = false
),
```

### 3. FetchSystem.kt に `handleBalloonJump()` メソッドを追加

**File:** `/Users/aa/platform/plugins/OyasaiPets/src/main/kotlin/me/marzipan/OyasaiPets/systems/FetchSystem.kt`

新しいメソッドを追加:

```kotlin
/**
 * 風船ジャンプを処理（イルカ用）
 * フグを水面から5ブロック上空に浮遊させ、イルカがジャンプしてつつく
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

    // 水面を検出
    val waterSurface = findWaterSurface(pet.location)
    if (waterSurface == null) {
        player.sendMessage(Component.text("イルカが水中にいる必要があります。", RED))
        return
    }

    // おもちゃで遊んだ回数をカウント
    pet.statToys = pet.statToys + 1

    // フグ風船を水面から5ブロック上空に配置
    val balloonLoc = waterSurface.clone().add(0.0, 5.0, 0.0)
    val balloon = player.world.dropItem(balloonLoc, item.asOne())
    balloon.setGravity(false)
    balloon.velocity = Vector(0.0, 0.02, 0.0) // ゆっくり上昇
    balloon.pickupDelay = Int.MAX_VALUE // プレイヤーが拾えないように
    balloon.isGlowing = true // 光らせる

    item.amount -= 1

    player.sendMessage(Component.text("フグ風船を放った！", AQUA))
    player.playSound(player.location, Sound.ENTITY_PUFFER_FISH_BLOW_UP, 1f, 1.2f)

    // 風船ジャンプタスクを開始
    startBalloonJumpTask(player, pet, balloon, waterSurface, item.asOne())
}

/**
 * 水面の位置を検出
 */
private fun findWaterSurface(location: org.bukkit.Location): org.bukkit.Location? {
    val world = location.world
    var loc = location.clone()

    // まず水中にいるか確認
    if (!loc.block.type.name.contains("WATER")) {
        // 下方向に水を探す
        for (y in 0..10) {
            loc.y -= 1
            if (loc.block.type.name.contains("WATER")) break
        }
        if (!loc.block.type.name.contains("WATER")) return null
    }

    // 水面を探す（上方向に移動）
    for (y in 0..20) {
        val above = loc.clone().add(0.0, 1.0, 0.0)
        if (!above.block.type.name.contains("WATER")) {
            return loc.clone().add(0.5, 1.0, 0.5) // 水面の上
        }
        loc.y += 1
    }
    return null
}

/**
 * 風船ジャンプタスク
 */
private fun startBalloonJumpTask(
    player: Player,
    entity: LivingEntity,
    balloon: Item,
    waterSurface: org.bukkit.Location,
    originalItem: ItemStack
) {
    activeFetchTasks[entity.uniqueId]?.cancel()

    val task = object : BukkitRunnable() {
        var phase = 0 // 0: 水面へ移動, 1: ジャンプ, 2: 完了
        var jumpTicks = 0

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
                cleanup(false)
                return
            }

            // 風船のパーティクル演出
            balloon.world.spawnParticle(
                Particle.BUBBLE_POP,
                balloon.location,
                3, 0.2, 0.2, 0.2, 0.01
            )

            when (phase) {
                0 -> {
                    // フェーズ0: 水面に向かって泳ぐ
                    val targetLoc = waterSurface.clone().add(0.0, -1.0, 0.0)
                    val dist = entity.location.distance(targetLoc)

                    if (dist < 2.0) {
                        // 水面到達、ジャンプ開始
                        phase = 1
                        jumpTicks = 0

                        // ジャンプ！
                        val jumpVec = balloon.location.toVector()
                            .subtract(entity.location.toVector())
                            .normalize()
                            .multiply(1.5)
                            .setY(1.2)
                        entity.velocity = jumpVec

                        entity.world.playSound(entity.location, Sound.ENTITY_DOLPHIN_JUMP, 1f, 1f)
                        entity.world.spawnParticle(
                            Particle.SPLASH,
                            waterSurface,
                            30, 1.0, 0.2, 1.0, 0.1
                        )
                    } else {
                        moveTo(entity, targetLoc, 0.5)
                    }
                }
                1 -> {
                    // フェーズ1: ジャンプ中、風船に当たるか確認
                    jumpTicks++

                    val distToBalloon = entity.location.distance(balloon.location)

                    if (distToBalloon < 2.0) {
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

                    // タイムアウト（60tick = 3秒）
                    if (jumpTicks > 60) {
                        player.sendMessage(Component.text("惜しい！もう一度！", YELLOW))
                        cleanup(true)
                    }
                }
            }
        }

        fun cleanup(dropBalloon: Boolean) {
            if (dropBalloon && balloon.isValid) {
                // 風船を消してアイテムを返却
                balloon.remove()
                val drop = player.world.dropItem(player.location.add(0.0, 1.0, 0.0), originalItem)
                drop.velocity = Vector(0, 0, 0)
            }
            this.cancel()
            activeFetchTasks.remove(entity.uniqueId)
        }
    }
    activeFetchTasks[entity.uniqueId] = task.runTaskTimer(plugin, 0L, 1L)
}
```

### 4. PlayerActionListener.kt に `BALLOON_JUMP` の分岐を追加

**File:** `/Users/aa/platform/plugins/OyasaiPets/src/main/kotlin/me/marzipan/OyasaiPets/listeners/PlayerActionListener.kt`

おもちゃ使用時の分岐（51行目付近）に追加:

```kotlin
if (toySpec != null && toySpec.toyType == ToyType.THROW_FETCH) {
    fetchSystem.handleThrowToy(player, item, toySpec)
    event.isCancelled = true
} else if (toySpec != null && toySpec.toyType == ToyType.BALLOON_JUMP) {
    fetchSystem.handleBalloonJump(player, item, toySpec)
    event.isCancelled = true
}
```

importに `ToyType` が既にあることを確認（なければ追加）。

## エフェクト詳細

1. **風船の浮遊**: 水面から5ブロック上空、ゆっくり上昇、光る
2. **イルカのジャンプ**: 水しぶきパーティクル（SPLASH）、ジャンプ音
3. **風船ヒット時**: ハートパーティクル、泡パーティクル、フグの音、レベルアップ音

## 注意事項

- イルカが水中にいない場合はエラーメッセージを表示
- 3秒以内に当たらなければタイムアウト
- アイテムは必ずプレイヤーに返却される
