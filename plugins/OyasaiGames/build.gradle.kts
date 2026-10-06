version = "1.0.0"

dependencies {
  compileOnly(libs.purpur.api)
  compileOnly(libs.vault.api)
  compileOnly(libs.fawe.bukkit)
  implementation(libs.kotlin.stdlib)
  implementation(libs.sqlite.jdbc)

  testImplementation(libs.purpur.api)
  testImplementation(libs.vault.api)
  testImplementation("org.jetbrains.kotlin:kotlin-test-junit5:2.4.0")
  testImplementation("org.junit.jupiter:junit-jupiter-api:5.11.4")
  testImplementation("org.junit.jupiter:junit-jupiter-engine:5.11.4")
  testRuntimeOnly("org.junit.platform:junit-platform-launcher")
}

tasks.test { useJUnitPlatform() }

// Include the license for the behaviour adapted from TNTRun_reloaded in distributions.
tasks.withType<com.github.jengelman.gradle.plugins.shadow.tasks.ShadowJar>().configureEach {
  from("LICENSE-TNTRUN.txt") { into("META-INF/licenses") }
}
