dependencies {
  compileOnly(libs.purpur.api)
  compileOnly(libs.vault.api)
  compileOnly(project(":plugins:OyasaiLWC"))
  implementation(libs.kotlin.stdlib)
  implementation(libs.sqlite.jdbc)

  testImplementation(libs.purpur.api)
  testImplementation(libs.vault.api)
}
