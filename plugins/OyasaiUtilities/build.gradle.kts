plugins {
  kotlin("jvm")
  id("com.gradleup.shadow")
}

dependencies {
  compileOnly(libs.purpur.api)
  compileOnly(libs.vault.api)
}
