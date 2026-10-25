dependencies {
  compileOnly(libs.purpur.api)
  compileOnly(libs.luckperms.api)
  compileOnly(project(":plugins:OyasaiEconomy"))
  compileOnly(project(":plugins:DynamicProfile"))
  implementation(libs.sqlite.jdbc)
  testImplementation(libs.purpur.api)
  testImplementation(project(":plugins:OyasaiEconomy"))
}

tasks.test { dependsOn(":plugins:OyasaiEconomy:shadowJar") }
