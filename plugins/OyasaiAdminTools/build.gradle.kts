plugins {
  kotlin("jvm")
  id("com.gradleup.shadow")
}

dependencies {
  compileOnly(libs.placeholderapi)
  compileOnly(libs.purpur.api)
  compileOnly(libs.nuvotifier)
  compileOnly(libs.vault.api)
  compileOnly(libs.luckperms.api)
  compileOnly(libs.tokenmanager) { isTransitive = false }
  compileOnly(project(":plugins:SocialLikes3"))
  compileOnly(project(":plugins:DynamicProfile"))
  implementation(libs.kotlin.stdlib)
  implementation(libs.gson)
}
