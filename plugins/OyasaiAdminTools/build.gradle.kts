dependencies {
  compileOnly(libs.purpur.api)
  compileOnly(libs.luckperms.api)
  compileOnly(libs.worldborder) { isTransitive = false }
  compileOnly(libs.tokenmanager) { isTransitive = false }
  compileOnly(project(":plugins:SocialLikes3"))
  compileOnly(project(":plugins:DynamicProfile"))
  implementation(libs.kotlin.stdlib)
  implementation(libs.gson)
  implementation(libs.discord.webhooks)
}
