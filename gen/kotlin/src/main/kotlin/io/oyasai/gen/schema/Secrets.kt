@file:Suppress("ktlint")
package io.oyasai.gen

import kotlinx.serialization.*
import kotlinx.serialization.json.*
import kotlinx.serialization.descriptors.*
import kotlinx.serialization.encoding.*

@Serializable
data class Secrets (
    @SerialName("CLOUDFLARE_ACCOUNT_ID")
    val cloudflareAccountId: String,

    @SerialName("CLOUDFLARE_API_TOKEN")
    val cloudflareApiToken: String,

    @SerialName("DOTENV_PUBLIC_KEY")
    val dotenvPublicKey: String,

    @SerialName("ENVIRONMENT")
    val environment: Environment,

    @SerialName("GITHUB_APP_ID")
    val githubAppId: String,

    @SerialName("GITHUB_APP_INSTALLATION_ID")
    val githubAppInstallationId: String,

    @SerialName("GITHUB_APP_PEM_FILE")
    val githubAppPemFile: String,

    @SerialName("TF_API_TOKEN")
    val tfApiToken: String,

    @SerialName("TF_TOKEN_app_terraform_io")
    val tfTokenAppTerraformIo: String
)

@Serializable
enum class Environment(val value: String) {
    @SerialName("development") Development("development"),
    @SerialName("local") Local("local"),
    @SerialName("production") Production("production");
}
