package com.github.srain3.sociallikes.command

import kotlin.test.Test
import kotlin.test.assertEquals
import kotlin.test.assertFailsWith
import kotlin.test.assertIs

class SLUpdateSelectionTest {
  private class FakeIncompleteSelectionException : Exception()

  @Test
  fun `missing or incomplete region returns user-facing failure instead of throwing`() {
    assertEquals(
        SLUpdate.RegionSelectionResult.Failure("&cWorldEditで範囲を選択してください。"),
        SLUpdate.resolveRegionSelection(
            selectionWorld = null,
            playerWorld = "lifeworld",
            loadSelection = { "cuboid" },
        ),
    )

    assertEquals(
        SLUpdate.RegionSelectionResult.Failure("&cWorldEditで2点を選択してから実行してください。"),
        SLUpdate.resolveRegionSelection<String, String>(
            selectionWorld = "lifeworld",
            playerWorld = "lifeworld",
            loadSelection = { throw FakeIncompleteSelectionException() },
            isIncompleteSelection = { it is FakeIncompleteSelectionException },
        ),
    )
  }

  @Test
  fun `world mismatch is rejected and valid selection returns region`() {
    assertEquals(
        SLUpdate.RegionSelectionResult.Failure("&c選択範囲のワールドが現在のワールドと異なります。"),
        SLUpdate.resolveRegionSelection(
            selectionWorld = "resource",
            playerWorld = "lifeworld",
            loadSelection = { "cuboid" },
        ),
    )

    val resolved =
        assertIs<SLUpdate.RegionSelectionResult.Selected<String>>(
            SLUpdate.resolveRegionSelection(
                selectionWorld = "lifeworld",
                playerWorld = "lifeworld",
                loadSelection = { "cuboid:$it" },
            )
        )
    assertEquals("cuboid:lifeworld", resolved.region)
  }

  @Test
  fun `unexpected exceptions are rethrown`() {
    assertFailsWith<IllegalStateException> {
      SLUpdate.resolveRegionSelection<String, String>(
          selectionWorld = "lifeworld",
          playerWorld = "lifeworld",
          loadSelection = { throw IllegalStateException("unexpected") },
          isIncompleteSelection = { it is FakeIncompleteSelectionException },
      )
    }
  }
}
