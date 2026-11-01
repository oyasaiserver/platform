package icu.oyasai.games.tank

import kotlin.test.Test
import kotlin.test.assertTrue
import org.joml.Vector3f

class TankModelsTest {
  @Test
  fun `models fit display budget and hull dimensions`() {
    for (spec in TankRules.SPECS) {
      val model = TankModels.create(spec)
      assertTrue(model.parts.size <= 40, "${spec.key}: ${model.parts.size} parts")
      val corners =
          model.parts
              .filter { it.group != Group.BARREL }
              .flatMap { part ->
                listOf(-1f, 1f).flatMap { x ->
                  listOf(-1f, 1f).flatMap { y ->
                    listOf(-1f, 1f).map { z ->
                      // 変換は原点が角の 1 ブロックに掛かるので、0〜1 の角を移す。
                      part.local
                          .transformPosition(Vector3f((x + 1) / 2, (y + 1) / 2, (z + 1) / 2))
                          .add(if (part.group == Group.TURRET) model.pivot else Vector3f())
                    }
                  }
                }
              }
      val width = corners.maxOf { it.x } - corners.minOf { it.x }
      val height = corners.maxOf { it.y } - corners.minOf { it.y }
      val length = corners.maxOf { it.z } - corners.minOf { it.z }
      assertTrue(
          width.toDouble() in spec.width * 0.9..spec.width * 1.1,
          "${spec.key} width: $width",
      )
      assertTrue(
          height.toDouble() in spec.height * 0.9..spec.height * 1.1,
          "${spec.key} height: $height",
      )
      assertTrue(
          length.toDouble() in spec.length * 0.9..spec.length * 1.1,
          "${spec.key} length: $length",
      )
      assertTrue(model.gunLength.toDouble() in spec.gunLength * 0.9..spec.gunLength * 1.1)
    }
  }
}
