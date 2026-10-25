package icu.oyasai.utilities.storage

import java.sql.Connection

internal fun Connection.transaction(block: () -> Unit) {
  autoCommit = false
  try {
    block()
    commit()
  } catch (failure: Exception) {
    rollback()
    throw failure
  } finally {
    autoCommit = true
  }
}
