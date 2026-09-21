plugins { alias(libs.plugins.paperweight.userdev) }

dependencies {
  paperweightDevelopmentBundle(libs.purpur.dev.bundle)
  implementation(libs.sqlite.jdbc)
  compileOnly(libs.vault.api)
  compileOnly(libs.luckperms.api)
  compileOnly(project(":plugins:OyasaiToken"))

  testImplementation(libs.purpur.api)
  testImplementation("org.jetbrains.kotlin:kotlin-test-junit5:2.4.0")
  testImplementation("org.junit.jupiter:junit-jupiter-engine:5.11.4")
  testRuntimeOnly("org.junit.platform:junit-platform-launcher")
}

tasks.test { useJUnitPlatform() }
