version = "2.4.0"

dependencies {
  compileOnly(libs.purpur.api)
  compileOnly(project(":plugins:SocialLikes3"))
  compileOnly(files("libs/tokenmanager.jar"))
  implementation(libs.kotlin.stdlib)
}
