dependencies {
  compileOnly(libs.purpur.api)
  compileOnly(libs.vault.api)
  compileOnly(libs.luckperms.api)
  compileOnly(project(":plugins:OyasaiToken"))
  compileOnly(project(":plugins:DynamicProfile"))
  implementation(libs.sqlite.jdbc)
  testImplementation(libs.purpur.api)
}
