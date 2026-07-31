plugins { alias(libs.plugins.paperweight.userdev) }

dependencies {
  paperweightDevelopmentBundle(libs.paper.dev.bundle)

  implementation(libs.kotlin.stdlib)
  implementation(libs.sqlite.jdbc)

  compileOnly(libs.placeholderapi)
  compileOnly(libs.vault.api)
  compileOnly(libs.fawe.bukkit)
}

tasks {
  shadowJar {
    minimize { exclude(dependency(libs.sqlite.jdbc.get())) }
    relocate("org.sqlite", "com.oyasai.music.libs.sqlite")
    relocate("kotlin", "com.oyasai.music.libs.kotlin")
  }

  processResources {
    val properties = mapOf("version" to project.version.toString())
    filesNotMatching(listOf("**/*.bin", "**/sound-catalog.yml")) { expand(properties) }
  }
}
