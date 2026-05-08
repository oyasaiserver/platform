dependencies {
  compileOnly(libs.placeholderapi)
  compileOnly(libs.purpur.api)
  compileOnly(libs.nuvotifier)
  compileOnly(libs.vault.api)
  compileOnly(libs.luckperms.api)
  compileOnly(libs.tokenmanager) { isTransitive = false }
  compileOnly(project(":plugins:DynamicProfile"))
}
