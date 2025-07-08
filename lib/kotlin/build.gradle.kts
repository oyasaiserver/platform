plugins { kotlin("jvm") }

dependencies {
    compileOnly(libs.protobuf.java)
    compileOnly(libs.connect.kotlin)
    compileOnly(libs.connect.kotlin.google.java.ext)
    compileOnly(libs.connect.kotlin.okhttp)
    compileOnly(libs.okhttp)
}