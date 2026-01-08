dependencies {
  compileOnly(libs.purpur.api)
  compileOnly(libs.luckperms.api)
  compileOnly(project(":plugins:SocialLikes3"))
  compileOnly(project(":plugins:DynamicProfile"))
  implementation(libs.gson)
  implementation(libs.discord.webhooks)
}
