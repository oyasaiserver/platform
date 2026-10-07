plugins { alias(libs.plugins.paperweight.userdev) }

tasks.processResources { from("sldata-stats2-text.md") }

dependencies {
  paperweightDevelopmentBundle(libs.purpur.dev.bundle)
  compileOnly(libs.discordsrv)
  compileOnly(libs.luckperms.api)
  compileOnly(project(":plugins:OyasaiToken"))
  // Paper provides Adventure at runtime. FAWE's compile-time Adventure 5.x must not override
  // Paper's 4.x API, otherwise builder return types are linked against incompatible descriptors.
  compileOnly(libs.fawe.bukkit) { exclude(group = "net.kyori") }
  implementation(libs.kotlin.stdlib)
  implementation(libs.inventoryframework)
  implementation(libs.javacord)
  implementation(libs.exposed.core)
  implementation(libs.exposed.jdbc)
  implementation(libs.sqlite.jdbc)

  testImplementation(libs.purpur.api)
}
