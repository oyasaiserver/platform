dependencies {
  compileOnly(libs.purpur.api)
  compileOnly(libs.vault.api)
  compileOnly(libs.gson)
  compileOnly(project(":plugins:OyasaiToken"))
  implementation(libs.kotlin.stdlib)

  testImplementation(libs.purpur.api)
  testRuntimeOnly(libs.gson)
}
