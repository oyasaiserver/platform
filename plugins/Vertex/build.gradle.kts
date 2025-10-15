plugins {
  kotlin("plugin.serialization") version "2.2.0"
}

dependencies {
  compileOnly(libs.purpur.api)
  implementation(libs.discord.webhooks)
  implementation(libs.ktor.server.core)
  implementation(libs.ktor.server.cio)
  implementation(libs.ktor.server.resources)
  implementation(libs.kotlinx.serialization.json.jvm)
}
