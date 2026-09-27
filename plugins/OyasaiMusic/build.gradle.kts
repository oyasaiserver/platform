plugins { alias(libs.plugins.paperweight.userdev) }

repositories { maven("https://repo.essentialsx.net/releases/") }

dependencies {
  paperweightDevelopmentBundle(libs.purpur.dev.bundle)

  implementation(libs.kotlin.stdlib)
  implementation(libs.sqlite.jdbc)

  compileOnly("net.essentialsx:EssentialsX:2.21.2") { isTransitive = false }
  compileOnly(libs.vault.api)
  compileOnly(libs.fawe.bukkit)
  compileOnly(libs.velocity.api) { exclude(group = "net.kyori") }
  compileOnly(libs.geyser.api)
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
