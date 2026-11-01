version = "1.0.0"

dependencies {
  compileOnly(project(":plugins:OyasaiEconomy"))
  compileOnly(libs.purpur.api)
  compileOnly(libs.fawe.bukkit)
  implementation(libs.kotlin.stdlib)
  implementation(libs.sqlite.jdbc)

  testImplementation(libs.purpur.api)
  testImplementation(project(":plugins:OyasaiEconomy"))
}

// Include the license for the behaviour adapted from TNTRun_reloaded in distributions.
tasks.withType<com.github.jengelman.gradle.plugins.shadow.tasks.ShadowJar>().configureEach {
  from("LICENSE-TNTRUN.txt") { into("META-INF/licenses") }
}

tasks.test { dependsOn(":plugins:OyasaiEconomy:shadowJar") }

// Do not embed build timestamps in distributions.
tasks.withType<AbstractArchiveTask>().configureEach {
  isPreserveFileTimestamps = false
  isReproducibleFileOrder = true
}
