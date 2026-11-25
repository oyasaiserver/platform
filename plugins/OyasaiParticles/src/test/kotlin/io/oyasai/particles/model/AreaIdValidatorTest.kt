package io.oyasai.particles.model

import kotlin.test.Test
import kotlin.test.assertEquals
import kotlin.test.assertFalse
import kotlin.test.assertNull
import kotlin.test.assertTrue

class AreaIdValidatorTest {

  @Test
  fun `accepts safe alphanumeric ids`() {
    assertTrue(AreaIdValidator.isValid("sakura_plaza-01"))
    assertEquals("sakura_plaza-01", AreaIdValidator.sanitizeOrNull("  sakura_plaza-01  "))
  }

  @Test
  fun `rejects path traversal dots slashes and oversized names`() {
    assertFalse(AreaIdValidator.isValid(null))
    assertFalse(AreaIdValidator.isValid(""))
    assertFalse(AreaIdValidator.isValid("   "))
    assertFalse(AreaIdValidator.isValid(".."))
    assertFalse(AreaIdValidator.isValid("foo.bar"))
    assertFalse(AreaIdValidator.isValid("foo/bar"))
    assertFalse(AreaIdValidator.isValid("foo\\bar"))
    assertFalse(AreaIdValidator.isValid("a".repeat(33)))
    assertNull(AreaIdValidator.sanitizeOrNull("../secret"))
  }
}
