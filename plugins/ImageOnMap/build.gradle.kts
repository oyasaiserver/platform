version = "6.0.0"

dependencies {
  compileOnly(libs.purpur.api)
  implementation(libs.sqlite.jdbc)
  implementation(libs.imageio.webp)
  testImplementation(libs.purpur.api)
  testImplementation("org.jetbrains.kotlin:kotlin-test-junit5:2.4.0")
  testImplementation("org.junit.jupiter:junit-jupiter-engine:5.11.4")
  testRuntimeOnly("org.junit.platform:junit-platform-launcher")
}

tasks.test { useJUnitPlatform() }
