dependencies {
  compileOnly(libs.purpur.api)
  compileOnly(libs.vault.api)
  compileOnly(libs.gson)
  compileOnly(project(":plugins:OyasaiToken"))
  implementation(libs.kotlin.stdlib)

  testImplementation("org.jetbrains.kotlin:kotlin-test-junit5:2.4.0")
  testImplementation("org.junit.jupiter:junit-jupiter-engine:5.11.4")
  testRuntimeOnly("org.junit.platform:junit-platform-launcher")
}

tasks.test { useJUnitPlatform() }
