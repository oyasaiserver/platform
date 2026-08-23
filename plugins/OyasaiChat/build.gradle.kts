dependencies {
  implementation(libs.gson)
  implementation(libs.kotlin.stdlib)

  compileOnly(libs.purpur.api)
  compileOnly(libs.discordsrv)
  compileOnly(libs.placeholderapi)
  compileOnly(libs.velocity.api) {
    exclude(group = "net.kyori")
  }
  compileOnly(libs.vault.api)
}
