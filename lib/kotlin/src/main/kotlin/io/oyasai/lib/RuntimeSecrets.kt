package io.oyasai.lib

import java.lang.System.getenv

/**
 * Sync with schema/ts/src/runtime-secrets.ts.
 *
 * TODO: should be part of codegen but there's no good generator for Kotlin.
 */
object RuntimeSecrets {
    val ENVIRONMENT = secret("ENVIRONMENT")
    val BEARER = secret("BEARER")
    val API_ENPOINT = secret("API_ENDPOINT")

    private fun secret(key: String) =
        requireNotNull(getenv(key)) { "Environment variable '$key' is not set." }
}
