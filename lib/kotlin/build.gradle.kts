plugins { kotlin("jvm") }

dependencies {
    compileOnly(libs.kotlin.reflect)
    compileOnly(libs.protobuf.java)
    compileOnly(libs.connect.kotlin)
    compileOnly(libs.connect.kotlin.google.java.ext)
    compileOnly(libs.connect.kotlin.okhttp)
    compileOnly(libs.okhttp)
    compileOnly(libs.purpur.api)
    compileOnly(libs.reflections)
}