package io.oyasai.worldgen.height

/** Integration-test-only failure injection. This source set is absent from the production jar. */
object OwgFailureTestControl {
  private const val STAGE_PROPERTY = "oyasai.owg.failureTest.stage"
  private const val WORLD_PROPERTY = "oyasai.owg.failureTest.world"

  fun fail(stage: String, worldName: String) {
    if (shouldFail(stage, worldName)) {
      error("OWG FAILURE TEST ONLY: stage=$stage world=$worldName")
    }
  }

  fun shouldFail(stage: String, worldName: String): Boolean {
    return worldName != "cosmic" &&
        System.getProperty(STAGE_PROPERTY) == stage &&
        System.getProperty(WORLD_PROPERTY) == worldName
  }
}
