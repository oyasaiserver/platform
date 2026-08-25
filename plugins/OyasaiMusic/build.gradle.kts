plugins { alias(libs.plugins.paperweight.userdev) }

dependencies {
  paperweightDevelopmentBundle(libs.purpur.dev.bundle)

  implementation(libs.kotlin.stdlib)
  implementation(libs.sqlite.jdbc)

  compileOnly(libs.placeholderapi)
  compileOnly(libs.vault.api)
  compileOnly(libs.fawe.bukkit)
  compileOnly(libs.velocity.api) { exclude(group = "net.kyori") }
}

tasks {
  shadowJar {
    minimize { exclude(dependency(libs.sqlite.jdbc.get())) }
    relocate("org.sqlite", "com.oyasai.music.libs.sqlite")
    relocate("kotlin", "com.oyasai.music.libs.kotlin")
  }

  processResources {
    val properties = mapOf("version" to project.version.toString())
    filesNotMatching(listOf("**/*.bin", "**/sound-catalog.json")) { expand(properties) }
  }
}
