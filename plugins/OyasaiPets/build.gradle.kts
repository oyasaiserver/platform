dependencies {
  compileOnly(libs.purpur.api)
  compileOnly(project(":plugins:OyasaiEconomy"))
  implementation(libs.kotlin.stdlib)
  testImplementation(libs.purpur.api)
  testImplementation(project(":plugins:OyasaiEconomy"))
}

tasks.test { dependsOn(":plugins:OyasaiEconomy:shadowJar") }
