plugins { `java-library` }

dependencies {
  compileOnly(libs.placeholderapi)
  compileOnly(libs.purpur.api)
  compileOnly(libs.nuvotifier)
  compileOnly(libs.vault.api)
  compileOnly(libs.luckperms.api)
  compileOnly(libs.tokenmanager) { isTransitive = false }
  compileOnly(project(":plugins:SocialLikes3"))
  implementation(libs.kotlin.stdlib)
  implementation(libs.gson)
}
