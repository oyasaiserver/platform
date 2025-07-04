plugins {
    kotlin("jvm")
}

dependencies {
    implementation(libs.protobuf.java)
    implementation(libs.connect.kotlin)
    implementation(libs.connect.kotlin.google.java.ext)
}
