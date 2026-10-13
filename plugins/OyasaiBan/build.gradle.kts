dependencies {
  implementation(libs.kotlin.stdlib)
  implementation(libs.sqlite.jdbc)

  compileOnly(libs.velocity.api)
  compileOnly(libs.floodgate.api) { isTransitive = false }
}
