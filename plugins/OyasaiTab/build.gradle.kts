dependencies {
  compileOnly(libs.purpur.api)
  compileOnly(libs.luckperms.api)
  compileOnly(libs.vault.api)
  compileOnly(libs.velocity.api) { exclude(group = "net.kyori") }
  compileOnly(project(":plugins:DynamicProfile"))
  compileOnly(project(":plugins:OyasaiToken"))
  compileOnly(project(":plugins:SocialLikes3"))
  implementation(libs.kotlin.stdlib)

  testImplementation(libs.purpur.api)
}
