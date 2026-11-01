dependencies {
  compileOnly(libs.purpur.api)
  compileOnly(libs.gson)
  compileOnly(project(":plugins:OyasaiEconomy"))
  implementation(libs.kotlin.stdlib)

  testImplementation(libs.purpur.api)
  testImplementation(project(":plugins:OyasaiEconomy"))
  testRuntimeOnly(libs.gson)
}

tasks.test { dependsOn(":plugins:OyasaiEconomy:shadowJar") }
