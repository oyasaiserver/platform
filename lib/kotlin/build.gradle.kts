plugins { kotlin("jvm") }

dependencies {
  compileOnly(libs.kotlin.reflect)
  compileOnly(libs.purpur.api)
  compileOnly(libs.reflections)
}
