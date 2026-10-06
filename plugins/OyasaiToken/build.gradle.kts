plugins { alias(libs.plugins.paperweight.userdev) }

repositories { maven("https://jitpack.io") }

dependencies {
  paperweightDevelopmentBundle(libs.purpur.dev.bundle)
  implementation(libs.kotlin.stdlib)
  implementation(libs.sqlite.jdbc)
  compileOnly(libs.tab.api)

  testImplementation("org.jetbrains.kotlin:kotlin-test-junit5:2.4.0")
  testImplementation("org.junit.jupiter:junit-jupiter-engine:5.11.4")
  testRuntimeOnly("org.junit.platform:junit-platform-launcher")
}

tasks.test { useJUnitPlatform() }
