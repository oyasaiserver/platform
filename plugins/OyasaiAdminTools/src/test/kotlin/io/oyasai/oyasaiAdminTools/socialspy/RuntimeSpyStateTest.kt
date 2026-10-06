package io.oyasai.oyasaiAdminTools.socialspy

import kotlin.test.*

class RuntimeSpyStateTest {
  class Holder(private var enabled: Boolean) {
    fun socialSpy() = enabled

    fun socialSpy(value: Boolean) {
      enabled = value
    }
  }

  open class UserData(@Suppress("unused") private var holder: Holder) {
    var saveCalls = 0

    fun setSocialSpyEnabled(value: Boolean) {
      holder.socialSpy(value)
      saveCalls++
    }

    fun reload(value: Holder) {
      holder = value
    }
  }

  class User(holder: Holder) : UserData(holder)

  @Test
  fun suppressionFindsSuperclassHolderAndNeverCallsSavingSetter() {
    val holder = Holder(true)
    val user = User(holder)
    val state = RuntimeSpyState(user)
    state.suppress()
    state.suppress()
    assertFalse(holder.socialSpy())
    assertEquals(0, user.saveCalls)
    assertTrue(state.matchesHolder())
    state.restore()
    assertTrue(holder.socialSpy())
    user.reload(Holder(false))
    assertFalse(state.matchesHolder())
    val reloaded = RuntimeSpyState(user)
    reloaded.suppress()
    reloaded.restore()
    assertEquals(0, user.saveCalls)
  }
}
