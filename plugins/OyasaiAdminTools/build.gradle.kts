dependencies {
  compileOnly(libs.purpur.api)
  compileOnly(libs.luckperms.api)
  compileOnly(project(":plugins:OyasaiToken"))
  implementation(libs.kotlin.stdlib)
  implementation(libs.gson)
  implementation(libs.discord.webhooks)
  implementation(libs.inventoryframework)
  implementation(libs.sqlite.jdbc)
  testImplementation(libs.purpur.api)
}
