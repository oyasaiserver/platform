@file:Suppress("ktlint")

package io.oyasai.gen.schema

import kotlinx.serialization.*
import kotlinx.serialization.descriptors.*
import kotlinx.serialization.encoding.*
import kotlinx.serialization.json.*

@Serializable
data class Repository(
    val description: Description,
    val homepage: Homepage,
    val icon: Icon,
    val name: Name,
    val organization: Organization,
    val url: URL,
)

@Serializable
enum class Description(val value: String) {
    @SerialName("Proof of concept for stateless Minecraft server.")
    ProofOfConceptForStatelessMinecraftServer("Proof of concept for stateless Minecraft server.")
}

@Serializable
enum class Homepage(val value: String) {
    @SerialName("https://oyasai.io") HTTPSOyasaiIo("https://oyasai.io")
}

@Serializable
enum class Icon(val value: String) {
    @SerialName("https://avatars.githubusercontent.com/oyasaiserver")
    HTTPSAvatarsGithubusercontentComOyasaiserver(
        "https://avatars.githubusercontent.com/oyasaiserver"
    )
}

@Serializable
enum class Name(val value: String) {
    @SerialName("platform") Platform("platform")
}

@Serializable
enum class Organization(val value: String) {
    @SerialName("oyasaiserver") Oyasaiserver("oyasaiserver")
}

@Serializable
enum class URL(val value: String) {
    @SerialName("https://github.com/oyasaiserver/platform")
    HTTPSGithubComOyasaiserverPlatform("https://github.com/oyasaiserver/platform")
}
