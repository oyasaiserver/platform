plugins { kotlin("jvm") }

repositories { mavenCentral() }

dependencies {
  compileOnly(libs.protobuf.java)
  compileOnly(libs.connect.kotlin)
  compileOnly(libs.connect.kotlin.google.java.ext)
}
