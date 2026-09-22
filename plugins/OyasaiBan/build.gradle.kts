dependencies {
  implementation(libs.kotlin.stdlib)
  implementation(libs.sqlite.jdbc)

  compileOnly(libs.velocity.api)
  compileOnly(libs.floodgate.api) { isTransitive = false }

  testImplementation("org.jetbrains.kotlin:kotlin-test-junit5:2.4.0")
  testImplementation("org.junit.jupiter:junit-jupiter-engine:5.11.4")
  testRuntimeOnly("org.junit.platform:junit-platform-launcher")
}

tasks {
  test { useJUnitPlatform() }

  shadowJar {
    minimize { exclude(dependency(libs.sqlite.jdbc.get())) }
    relocate("kotlin", "io.oyasai.oyasaiban.libs.kotlin")
  }
}
