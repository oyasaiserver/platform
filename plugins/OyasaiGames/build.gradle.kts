version = "1.0.0"

dependencies {
  compileOnly(libs.purpur.api)

  testImplementation(libs.purpur.api)
  testImplementation("org.junit.jupiter:junit-jupiter-api:5.11.4")
  testImplementation("org.junit.jupiter:junit-jupiter-engine:5.11.4")
  testRuntimeOnly("org.junit.platform:junit-platform-launcher")
}

tasks.test { useJUnitPlatform() }
