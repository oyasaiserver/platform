package io.oyasai.directstate.edit.shape

/** ブロック内の生のレイヒットを、回転対称な南向き基準空間へ変換する。 */
internal object ClickGeometry {
  /** ブロックの6基本面。 */
  enum class Face {
    NORTH,
    EAST,
    SOUTH,
    WEST,
    UP,
    DOWN,
  }

  /** ブロック内の位置。各軸は0.0～1.0。 */
  data class Point(val x: Double, val y: Double, val z: Double)

  private const val EPSILON = 1.0e-6

  /** 素手デバッグ棒の形状切替で、境界上の打点をクリックした部分の少し内側へ補正する。 */
  fun local(x: Double, y: Double, z: Double, face: Face?): Point {
    var px = x.coerceIn(0.0, 1.0)
    var py = y.coerceIn(0.0, 1.0)
    var pz = z.coerceIn(0.0, 1.0)
    // 上下半分や四隅を分類する前に、ヒット平面からクリックされた部分の内側へ移動する。
    // x=0.5のような内部平面だけでなく、外側の0/1境界でも必要となる。
    when (face) {
      Face.WEST -> px += EPSILON
      Face.EAST -> px -= EPSILON
      Face.NORTH -> pz += EPSILON
      Face.SOUTH -> pz -= EPSILON
      Face.DOWN -> py += EPSILON
      Face.UP -> py -= EPSILON
      null -> Unit
    }
    return Point(
        px.coerceIn(EPSILON, 1.0 - EPSILON),
        py.coerceIn(EPSILON, 1.0 - EPSILON),
        pz.coerceIn(EPSILON, 1.0 - EPSILON),
    )
  }

  /** 素手デバッグ棒の階段編集で、打点を南向き階段の座標へ回す。 */
  fun canonical(point: Point, facing: Int): Point =
      when (facing.mod(4)) {
        0 -> Point(1.0 - point.x, point.y, 1.0 - point.z) // NORTHからSOUTH
        1 -> Point(1.0 - point.z, point.y, point.x) // EASTからSOUTH
        2 -> point // SOUTH
        else -> Point(point.z, point.y, 1.0 - point.x) // WESTからSOUTH
      }

  /** テストと逆変換で、南向き基準の点を元の階段の座標へ戻す。 */
  fun fromCanonical(point: Point, facing: Int): Point =
      when (facing.mod(4)) {
        0 -> Point(1.0 - point.x, point.y, 1.0 - point.z)
        1 -> Point(point.z, point.y, 1.0 - point.x)
        2 -> point
        else -> Point(1.0 - point.z, point.y, point.x)
      }

  /** テストで、クリック面を南向き階段の面へ回す。 */
  fun faceToCanonical(face: Face, facing: Int): Face {
    if (face == Face.UP || face == Face.DOWN) return face
    val world = horizontalIndex(face)
    return horizontalFace((world + 2 - facing).mod(4))
  }

  /** テストで、南向き基準の面を元の階段の面へ戻す。 */
  fun faceFromCanonical(face: Face, facing: Int): Face {
    if (face == Face.UP || face == Face.DOWN) return face
    val canonical = horizontalIndex(face)
    return horizontalFace((canonical - 2 + facing).mod(4))
  }

  /** 水平面をNORTH=0から時計回りの番号へ変換する。 */
  private fun horizontalIndex(face: Face) =
      when (face) {
        Face.NORTH -> 0
        Face.EAST -> 1
        Face.SOUTH -> 2
        Face.WEST -> 3
        else -> error("Vertical face has no horizontal index")
      }

  /** 時計回りの番号を水平面へ戻す。 */
  private fun horizontalFace(index: Int) =
      listOf(Face.NORTH, Face.EAST, Face.SOUTH, Face.WEST)[index.mod(4)]

  /** 素手デバッグ棒の階段編集で、打点をNW=0、NE=1、SE=2、SW=3へ分類する。 */
  fun quarter(point: Point): Int =
      when {
        point.x < 0.5 && point.z < 0.5 -> 0
        point.x >= 0.5 && point.z < 0.5 -> 1
        point.x >= 0.5 && point.z >= 0.5 -> 2
        else -> 3
      }

  /** 0～3は下半分、4～7は上半分で、各段は北西、北東、南東、南西の時計回り。 番号を各部分の中心(各軸0.25または0.75)へ変換し、打点との距離比較に使う。 */
  fun partCenter(part: Int): Point {
    val quarter = part % 4
    return Point(
        if (quarter == 1 || quarter == 2) 0.75 else 0.25,
        if (part >= 4) 0.75 else 0.25,
        if (quarter >= 2) 0.75 else 0.25,
    )
  }

  /** 素手デバッグ棒の階段編集で、現在形状を南向き基準へ回す。 */
  fun maskToCanonical(mask: Int, facing: Int): Int = rotateMask(mask, facing, true)

  /** 素手デバッグ棒の階段編集で、編集結果を元の向きへ戻す。 */
  fun maskFromCanonical(mask: Int, facing: Int): Int = rotateMask(mask, facing, false)

  /** 各ビットを点へ置き換えて回転し、移動先のビット列を組み立てる。 */
  private fun rotateMask(mask: Int, facing: Int, toCanonical: Boolean): Int {
    var result = 0
    for (part in 0..7) if (mask and (1 shl part) != 0) {
      val point = partCenter(part)
      val rotated = if (toCanonical) canonical(point, facing) else fromCanonical(point, facing)
      result = result or (1 shl (quarter(rotated) + if (part >= 4) 4 else 0))
    }
    return result
  }
}
