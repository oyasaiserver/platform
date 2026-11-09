version = "1.0.0"

dependencies {
  compileOnly(libs.purpur.api)

  testImplementation(libs.purpur.api)
  testImplementation(libs.mockito.core)
  testImplementation(libs.junit.jupiter.params)
}

tasks.test { jvmArgs("-XX:+EnableDynamicAgentLoading") }
