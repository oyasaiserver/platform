plugins { alias(libs.plugins.paperweight.userdev) }

repositories { maven("https://maven.playpro.com") }

dependencies {
  paperweightDevelopmentBundle(libs.purpur.dev.bundle)
  compileOnly(libs.fawe.bukkit)
  compileOnly(libs.coreprotect.api) { isTransitive = false }
  compileOnly(libs.worldguard.bukkit) { isTransitive = false }
  compileOnly(libs.worldguard.core) { isTransitive = false }
  implementation(libs.kotlin.stdlib)
}

paperweight { addServerDependencyTo.set(listOf(configurations.compileOnly.get())) }
