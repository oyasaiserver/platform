dependencies {
  compileOnly(project(":plugins:OyasaiEconomy"))
  compileOnly(libs.purpur.api)
  compileOnly(project(":plugins:OyasaiLWC"))
  implementation(libs.kotlin.stdlib)
  implementation(libs.sqlite.jdbc)

  testImplementation(libs.purpur.api)
  testImplementation(project(":plugins:OyasaiEconomy"))
}

tasks.test { dependsOn(":plugins:OyasaiEconomy:shadowJar") }
