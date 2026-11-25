version = "0.1.0"

dependencies {
  compileOnly(libs.purpur.api)
  compileOnly(libs.fawe.bukkit)
  compileOnly(libs.worldguard.bukkit) { isTransitive = false }
  compileOnly(libs.worldguard.core) { isTransitive = false }
  implementation(libs.kotlin.stdlib)
  testImplementation(libs.purpur.api)
  testImplementation(libs.mockito.core)
}
