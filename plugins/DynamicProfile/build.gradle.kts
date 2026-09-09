dependencies {
  compileOnly(libs.placeholderapi)
  compileOnly(libs.purpur.api)
  compileOnly(libs.nuvotifier)
  compileOnly(libs.vault.api)
  compileOnly(libs.luckperms.api)
  compileOnly(project(":plugins:OyasaiToken"))
  compileOnly(project(":plugins:SocialLikes3"))
  implementation(libs.kotlin.stdlib)
  implementation(libs.gson)
}
