dependencies {
  compileOnly(libs.purpur.api)
  compileOnly(libs.placeholderapi)
  compileOnly(libs.discordsrv)
  compileOnly(libs.luckperms.api)
  compileOnly(libs.tokenmanager) { isTransitive = false }
  compileOnly(libs.fawe.bukkit)
  implementation(libs.kotlin.stdlib)
  implementation(libs.inventoryframework)
  implementation(libs.javacord)
  implementation(libs.ultimateadvancementapi)
}
