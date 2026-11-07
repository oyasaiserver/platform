plugins { alias(libs.plugins.paperweight.userdev) }

dependencies {
  paperweightDevelopmentBundle(libs.purpur.dev.bundle)
  implementation(libs.kotlin.stdlib)
  compileOnly(libs.fawe.bukkit) { exclude(group = "at.yawk.lz4", module = "lz4-java") }
  testImplementation(libs.fawe.bukkit) { exclude(group = "at.yawk.lz4", module = "lz4-java") }
  testImplementation(libs.kotlin.test.junit5)
  testImplementation(libs.junit.jupiter.engine)
  testRuntimeOnly(libs.junit.platform.launcher)
}

tasks.test { useJUnitPlatform() }
