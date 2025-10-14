plugins {
  kotlin("jvm")
  id("com.gradleup.shadow")
  `java-library`
}

dependencies {
  compileOnly(libs.purpur.api)
  compileOnly(libs.placeholderapi)
  compileOnly(libs.discordsrv)
  compileOnly(libs.luckperms.api)
  compileOnly(libs.tokenmanager) { isTransitive = false }
  implementation(libs.kotlin.stdlib)
  implementation(libs.inventoryframework)
  implementation(libs.anvilgui)
  implementation(libs.javacord)
  implementation(libs.worldborder)
  implementation(libs.ultimateadvancementapi)
}
