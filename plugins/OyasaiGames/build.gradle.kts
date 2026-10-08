version = "1.0.0"

dependencies {
  compileOnly(libs.purpur.api)
  compileOnly(libs.vault.api)
  compileOnly(libs.fawe.bukkit)
  compileOnly(libs.floodgate.api) { isTransitive = false }
  implementation(libs.kotlin.stdlib)
  implementation(libs.sqlite.jdbc)

  testImplementation(libs.purpur.api)
  testImplementation(libs.vault.api)
}

// Include the license for the behaviour adapted from TNTRun_reloaded in distributions.
tasks.withType<com.github.jengelman.gradle.plugins.shadow.tasks.ShadowJar>().configureEach {
  from("LICENSE-TNTRUN.txt") { into("META-INF/licenses") }
}
