package io.oyasai.worldgen.height

import java.nio.file.Files
import java.nio.file.Path

/** Integration-test-only failure injection. This source set is absent from the production jar. */
object OwgFailureTestControl {
  private val controlFile: Path = Path.of(".owg-failure-test")

  fun fail(stage: String, worldName: String) {
    if (shouldFail(stage, worldName)) {
      error("OWG FAILURE TEST ONLY: stage=$stage world=$worldName")
    }
  }

  fun shouldFail(stage: String, worldName: String): Boolean {
    if (!Files.isRegularFile(controlFile)) return false
    val parts = Files.readString(controlFile).trim().split(':', limit = 2)
    return parts.size == 2 && parts[0] == stage && parts[1] == worldName
  }
}
