# OyasaiVehicles 物理挙動アルゴリズム仕様書（実装詳細特化版）

## 概要
本仕様書は、OyasaiVehiclesプラグインの物理挙動（落下、衝突判定、段差検出、登り処理等）を、実装観点から詳細に記述します。特に、Kotlin/Javaでのクラス設計・メソッド構成・状態管理・Tickごとの処理フロー・YAML設定の反映・例外処理・拡張ポイントまで、実装者がそのままコード化できるレベルで明確にします。

---

## 1. クラス・責務設計

### 1.1 主要クラス
- `VehicleController`（仮称）: 物理演算の中心。Tickごとに車両の状態を更新。
- `UnderBlockPattern`: ブロック種別ごとの補正値・物理特性を管理。
- `VehicleState`: 車両の現在状態（通常/落下/ジャンプ/衝突/段差登り等）をenumで管理。
- `VehicleEntity`（ArmorStand等）: 実際のエンティティ。位置・速度・向き・状態を保持。

### 1.2 主要メソッド
- `updatePhysics(vehicle: VehicleEntity)`
  - Tickごとに呼ばれ、下記の物理判定・状態遷移を一括管理。
- `getBlockValue(loc: Location): Double`
  - 指定座標直下のMaterialを取得し、`UnderBlockPattern`から補正値を得る。
- `tryStepUp(vehicle: VehicleEntity): Boolean`
  - 前方ブロックの補正値を見て段差登り可能か判定し、可能ならY座標を補正。
- `tryFall(vehicle: VehicleEntity): Boolean`
  - 直下ブロックの補正値が0.0なら落下処理。落下速度・加速度も管理。
- `tryCollide(vehicle: VehicleEntity): Boolean`
  - 進行方向ブロックが通過不可なら停止。

---

## 2. Tickごとの物理演算フロー（擬似コード）

```kotlin
fun updatePhysics(vehicle: VehicleEntity) {
    val loc = vehicle.location
    val underValue = getBlockValue(loc.clone().add(0.0, -0.95, 0.0))
    val forwardLoc = loc.clone().add(vehicle.direction.normalize())
    val forwardValue = getBlockValue(forwardLoc)

    // 1. 落下判定
    if (underValue == 0.0) {
        if (vehicle.state != VehicleState.FALLING) {
            vehicle.state = VehicleState.FALLING
            vehicle.fallSpeed = 0.0
        }
        vehicle.fallSpeed = min(vehicle.fallSpeed + GRAVITY, MAX_FALL_SPEED)
        vehicle.location.y -= vehicle.fallSpeed
        return
    } else if (vehicle.state == VehicleState.FALLING) {
        vehicle.state = VehicleState.NORMAL
        vehicle.fallSpeed = 0.0
    }

    // 2. 衝突判定
    if (forwardValue == 0.0 || !forwardLoc.block.isPassable) {
        vehicle.state = VehicleState.COLLIDED
        vehicle.velocity = Vector(0, 0, 0)
        return
    }

    // 3. 段差登り
    if (forwardValue in 0.0..0.99) {
        if (tryStepUp(vehicle, forwardValue)) return
    }

    // 4. 通常進行
    vehicle.state = VehicleState.NORMAL
    vehicle.moveForward()
}

fun tryStepUp(vehicle: VehicleEntity, stepHeight: Double): Boolean {
    val nextLoc = vehicle.location.clone().add(0.0, stepHeight, 0.0)
    if (getBlockValue(nextLoc) > 0.0) {
        vehicle.location = nextLoc
        vehicle.state = VehicleState.STEP_UP
        return true
    }
    return false
}
```

---

## 3. UnderBlockPattern 実装例

```kotlin
object UnderBlockPattern {
    private val map = mutableMapOf<Material, Double>()
    fun loadConfig(yml: YamlConfiguration) {
        map.clear()
        for (key in yml.getKeys(false)) {
            val mat = Material.getMaterial(key.uppercase())
            if (mat != null) map[mat] = yml.getDouble(key, 1.0)
        }
    }
    fun getValue(mat: Material): Double = map[mat] ?: 1.0
}
```

---

## 4. 状態管理・パラメータ
- `VehicleState`は`NORMAL`, `FALLING`, `STEP_UP`, `COLLIDED`, `JUMPING`等を持つ。
- `fallSpeed`, `jumpPower`, `maxStepHeight`等の物理パラメータはVehicleEntityで管理。
- Tickごとに状態遷移を厳密に制御。

---

## 5. YAML設定例
```yml
GRASS_BLOCK: 1.0
SLAB: 0.5
AIR: 0.0
WATER: 0.0
ICE: 1.0
SLIME_BLOCK: 1.0
BEDROCK: 0.0
```

---

## 6. 例外・拡張ポイント
- 設定ファイルにないMaterialは1.0扱い。
- 特殊地形（氷・スライム等）は摩擦・反発係数など追加パラメータで拡張。
- プレイヤー搭乗時/非搭乗時で挙動分岐も可能。
- イベントフック（落下開始・着地・衝突時）でサウンドやエフェクトも追加可能。

---

## 7. テスト観点（実装者向け）
- すべての状態遷移（通常→落下→着地、通常→段差登り、通常→衝突等）をユニットテスト。
- 設定ファイル変更時の即時反映。
- 連続段差・複数ブロックまたぎ・特殊地形での挙動。
- 落下・ジャンプ・衝突時の速度・加速度・エフェクト等。

---

## 8. 実装上の注意
- 物理演算は必ずTickごとに一貫して呼び出す。
- 直下・進行方向の判定は常に最新の座標で行う。
- 状態遷移は必ず明示的に管理し、状態フラグの競合を避ける。
- 例外時は安全側（停止・落下）に倒す。

---

以上。
