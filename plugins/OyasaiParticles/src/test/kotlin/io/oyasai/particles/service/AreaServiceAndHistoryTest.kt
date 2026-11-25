package io.oyasai.particles.service

import io.oyasai.particles.model.AmbientSoundPreset
import io.oyasai.particles.model.AreaShape
import io.oyasai.particles.model.HistoryAction
import io.oyasai.particles.model.ParticleEffectConfig
import io.oyasai.particles.model.ParticlePreset
import io.oyasai.particles.model.PseudoWeather
import io.oyasai.particles.model.TimePreset
import io.oyasai.particles.storage.YamlAreaRepository
import java.nio.file.Path
import java.util.UUID
import kotlin.test.Test
import kotlin.test.assertEquals
import kotlin.test.assertFalse
import kotlin.test.assertNotNull
import kotlin.test.assertNull
import kotlin.test.assertTrue
import org.junit.jupiter.api.io.TempDir

class AreaServiceAndHistoryTest {

  @TempDir lateinit var tempDir: Path

  @Test
  fun `create update reclaim rollback and yaml persistence roundtrip`() {
    val ownerUuid = UUID.randomUUID()
    val adminUuid = UUID.randomUUID()
    val repo = YamlAreaRepository(tempDir.toFile())
    val service = AreaService(repo, maxHistoryEntries = 50)
    service.load()

    // 1. 作成
    val created =
        service.createArea(
            id = "desert_oasis",
            name = "desert_oasis",
            worldName = "lifeworld",
            ownerUuid = ownerUuid,
            ownerName = "QuQuLa89",
            shape = AreaShape.Cylinder.of(100.5, 200.5, 64, 80, 12.0),
            effect =
                ParticleEffectConfig(
                    particle = ParticlePreset.CHERRY_LEAVES,
                    weather = PseudoWeather.RAIN,
                    time = TimePreset.SUNSET,
                    sound = AmbientSoundPreset.RAIN_AND_THUNDER,
                    density = 4,
                    itemMaterialKey = "PINK_DYE",
                    itemDisplayName = "桜雨の結晶",
                ),
            createdFromItem = true,
        )
    assertEquals(1, service.allAreas().size)

    // 2. 更新
    val updated =
        service.updateArea(created.id, adminUuid, "Moderator") {
          it.copy(effect = it.effect.copy(weather = PseudoWeather.SNOW))
        }
    assertNotNull(updated)
    assertEquals(PseudoWeather.SNOW, updated.effect.weather)

    // 3. 回収 (RECLAIM)
    val reclaimed = service.reclaimArea(created.id, ownerUuid, "QuQuLa89")
    assertNotNull(reclaimed)
    assertTrue(service.allAreas().isEmpty())

    val history = service.listHistory()
    assertEquals(3, history.size)
    assertEquals(HistoryAction.RECLAIM, history[0].action)
    assertEquals(HistoryAction.UPDATE, history[1].action)
    assertEquals(HistoryAction.CREATE, history[2].action)

    // 4. 回収をロールバック -> エリア復活（雪の状態）
    val rb1 = service.rollback(history[0].id, adminUuid, "Moderator")
    assertTrue(rb1 is RollbackResult.Success)
    assertEquals(PseudoWeather.SNOW, service.findById("desert_oasis")?.effect?.weather)

    // 5. 更新をロールバック -> 雨に戻る
    val rb2 = service.rollback(history[1].id, adminUuid, "Moderator")
    assertTrue(rb2 is RollbackResult.Success)
    assertEquals(PseudoWeather.RAIN, service.findById("desert_oasis")?.effect?.weather)

    // 6. 個人トグル切り替え & 別インスタンスでリロード往復検証
    assertTrue(service.isVisualEnabled(ownerUuid))
    assertFalse(service.toggleVisual(ownerUuid))

    val reloaded = AreaService(YamlAreaRepository(tempDir.toFile()), maxHistoryEntries = 50)
    reloaded.load()
    val loadedArea = reloaded.findById("desert_oasis")
    assertNotNull(loadedArea)
    assertEquals(PseudoWeather.RAIN, loadedArea.effect.weather)
    assertEquals(TimePreset.SUNSET, loadedArea.effect.time)
    assertEquals(AmbientSoundPreset.RAIN_AND_THUNDER, loadedArea.effect.sound)
    assertFalse(reloaded.isVisualEnabled(ownerUuid))
    assertTrue(reloaded.listHistory().any { it.action == HistoryAction.ROLLBACK })

    // 7. 作成自体をロールバック -> 削除される
    val createEntry = reloaded.listHistory().first { it.action == HistoryAction.CREATE }
    val rbCreate = reloaded.rollback(createEntry.id, adminUuid, "Moderator")
    assertTrue(rbCreate is RollbackResult.Success)
    assertNull(reloaded.findById("desert_oasis"))
  }

  @Test
  fun `history is trimmed to maxHistoryEntries`() {
    val ownerUuid = UUID.randomUUID()
    val service = AreaService(YamlAreaRepository(tempDir.toFile()), maxHistoryEntries = 3)
    service.load()

    val area =
        service.createArea(
            id = "trim_test",
            name = "trim_test",
            worldName = "lifeworld",
            ownerUuid = ownerUuid,
            ownerName = "QuQuLa89",
            shape = AreaShape.Box.of(0, 64, 0, 5, 70, 5),
            effect = ParticleEffectConfig(),
            createdFromItem = false,
        )
    repeat(5) { idx ->
      service.updateArea(area.id, ownerUuid, "QuQuLa89") {
        it.copy(effect = it.effect.copy(density = (idx % 5) + 1))
      }
    }
    assertEquals(3, service.listHistory(limit = 100).size)
  }
}
