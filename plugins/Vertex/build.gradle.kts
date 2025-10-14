plugins {
  kotlin("jvm")
  id("com.gradleup.shadow")
}

dependencies {
  compileOnly(libs.purpur.api)
  implementation(libs.discord.webhooks)
}

