package io.oyasai.oyasaiAdminTools.assistant

/**
 * Exception messages can contain commands and credentials; retain only types and code locations.
 */
internal object AssistantFailure {
  fun describe(failure: Throwable): String =
      generateSequence(failure) { it.cause }
          .take(3)
          .joinToString(" caused-by ") { cause ->
            cause.javaClass.name +
                cause.stackTrace.take(4).joinToString(" <- ", prefix = " at ") {
                  "${it.className}.${it.methodName}:${it.lineNumber}"
                }
          }
}
