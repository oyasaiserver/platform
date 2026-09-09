repositories { maven("https://maven.playpro.com") }

dependencies {
  compileOnly(libs.purpur.api)
  compileOnly(libs.fawe.bukkit)
  compileOnly(libs.coreprotect.api) { isTransitive = false }
  compileOnly(libs.worldguard.bukkit) { isTransitive = false }
  compileOnly(libs.worldguard.core) { isTransitive = false }
  implementation(libs.kotlin.stdlib)
}
