@file:Suppress("ktlint")

package io.oyasai.gen

import kotlinx.serialization.*
import kotlinx.serialization.descriptors.*
import kotlinx.serialization.encoding.*
import kotlinx.serialization.json.*

@Serializable
data class Secrets(
    @SerialName("CLOUDFLARE_API_TOKEN") val cloudflareApiToken: String,
    @SerialName("DOTENV_PUBLIC_KEY") val dotenvPublicKey: String,
    @SerialName("ENVIRONMENT") val environment: Environment,
    @SerialName("TF_API_TOKEN") val tfApiToken: String,
    @SerialName("TF_TOKEN_app_terraform_io") val tfTokenAppTerraformIo: String,
)

@Serializable
enum class Environment(val value: String) {
    @SerialName("development") Development("development"),
    @SerialName("local") Local("local"),
    @SerialName("production") Production("production"),
}
