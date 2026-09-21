package com.github.srain3.sociallikes.datas

import kotlin.test.Test
import kotlin.test.assertEquals

class DirtyBuildManagerTest {
  @Test
  fun `reconciliation failures log through six then every sixth attempt`() {
    val loggedAttempts = (1..18).filter(DirtyBuildManager::shouldLogReconciliationFailure)

    assertEquals(listOf(1, 2, 3, 4, 5, 6, 12, 18), loggedAttempts)
  }
}
