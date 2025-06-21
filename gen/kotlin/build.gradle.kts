plugins {
  kotlin("jvm")
}

repositories {
  mavenCentral()
}

dependencies {
  implementation(platform(libs.serialization.bom))
  implementation(libs.serialization.core)
  implementation(libs.serialization.json)
}