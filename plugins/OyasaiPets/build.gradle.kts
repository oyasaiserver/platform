dependencies {
  compileOnly(libs.purpur.api)
  // compileOnly(project(":plugins:SocialLikes3")) // 未使用のため除外
  compileOnly(files("libs/tokenmanager.jar"))
  implementation(libs.kotlin.stdlib)
}
