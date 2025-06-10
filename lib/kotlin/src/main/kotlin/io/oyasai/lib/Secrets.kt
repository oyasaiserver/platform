package io.oyasai.lib

import io.oyasai.gen.Secrets
import kotlinx.serialization.json.Json
import java.lang.System.getenv

object Secrets {
    private val dotenvPrivateKey = env(DOTENV_PRIVATE_KEY)
    private val dotenvPublicKeys = env(DOTENV_PUBLIC_KEYS)

    val secrets: Secrets by lazy { Json.decodeFromString<Secrets>(dotenvPrivateKey) }

    private const val DOTENV_PRIVATE_KEY = "DOTENV_PRIVATE_KEY"
    private const val DOTENV_PUBLIC_KEYS = "DOTENV_PUBLIC_KEYS"

    private fun env(name: String) = requireNotNull(getenv(name)) { "Environment variable $name is not set." }
}
