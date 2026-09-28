package io.oyasai.worldgen.portal

import java.nio.file.Files
import kotlin.test.Test
import kotlin.test.assertEquals
import kotlin.test.assertNull

class PortalImportTest {
  @Test
  fun importsMixedLegacyPortals() {
    val file = Files.createTempFile("fictional-portals", ".yml")
    try {
      Files.writeString(
          file,
          """
          portals:
            entry:
              action: {type: multiverse-destination, value: 'p:exit:west'}
              location: 'DemoWorld:-10.0,60.0,5.0:-9.0,62.0,5.0'
              safe-teleport: true
            exit:
              action: {type: multiverse-destination, value: 'p:entry'}
              location: 'DemoWorld:10.0,60.0,5.0:10.0,62.0,5.0'
              safe-teleport: false
            coordinate:
              action: {type: multiverse-destination, value: 'e:OtherWorld:1.5,70.0,2.5:15:90'}
              location: 'DemoWorld:0,60,0:0,61,0'
            broken:
              action: {type: multiverse-destination, value: ''}
              location: 'DemoWorld:2,60,0:2,61,0'
            missing:
              action: {type: multiverse-destination, value: 'p:nonexistent'}
              location: 'DemoWorld:3,60,0:3,61,0'
            old:
              world: DemoWorld
              location: '4,60,0:4,61,0'
              destination: 'p:exit:e'
              serialized:
                ==: UnknownLegacyClass
                value: ignored
            invalid:
              location: nonsense
            unsupported:
              action: {type: command, value: '/say retained'}
              location: 'DemoWorld:5,60,0:5,61,0'
          """
              .trimIndent(),
      )
      val imported = parsePortals(file.toFile())
      assertEquals(6, imported.portals.size)
      assertEquals(listOf("invalid"), imported.skipped)
      assertEquals(listOf("unsupported:command"), imported.unsupportedActions)
      assertNull(imported.portals["unsupported"])
      assertEquals("p:exit:west", imported.portals["entry"]?.destination)
      assertEquals("e:OtherWorld:1.5,70.0,2.5:15:90", imported.portals["coordinate"]?.destination)
      assertEquals("", imported.portals["broken"]?.destination)
      assertEquals("p:nonexistent", imported.portals["missing"]?.destination)
      assertEquals("DemoWorld", imported.portals["old"]?.world)
      assertEquals("p:exit:e", imported.portals["old"]?.destination)
      assertEquals(false, imported.portals["exit"]?.safeTeleport)
      assertNull(imported.portals["invalid"])
    } finally {
      Files.deleteIfExists(file)
    }
  }
}
