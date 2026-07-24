version = "0.1.0"

repositories {
  maven("https://repo.papermc.io/repository/maven-public/")
}

dependencies {
  compileOnly(libs.velocity.api)
  implementation(libs.kotlin.stdlib)
}
