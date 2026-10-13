dependencies {
  implementation(libs.sqlite.jdbc)
  implementation(libs.gson)
  implementation(libs.kotlin.stdlib)

  compileOnly(libs.purpur.api)
  compileOnly(libs.discordsrv)
  compileOnly(libs.velocity.api) { exclude(group = "net.kyori") }
  compileOnly(libs.vault.api)
  compileOnly(libs.luckperms.api)
}

// Tests exercise conversion and migration fixtures without contacting Google or starting Paper.
dependencies {
  testImplementation(libs.purpur.api)
  testImplementation(libs.luckperms.api)
}
