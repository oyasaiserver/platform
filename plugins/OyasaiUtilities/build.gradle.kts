plugins { alias(libs.plugins.paperweight.userdev) }

repositories { maven("https://repo.essentialsx.net/releases/") }

dependencies {
  paperweightDevelopmentBundle(libs.purpur.dev.bundle)
  implementation(libs.sqlite.jdbc)
  compileOnly(libs.luckperms.api)
  compileOnly(libs.floodgate.api) { isTransitive = false }
  compileOnly("net.essentialsx:EssentialsX:2.21.2") { isTransitive = false }
  compileOnly(project(":plugins:OyasaiEconomy"))

  testImplementation(libs.purpur.api)
  testImplementation(project(":plugins:OyasaiEconomy"))
}

tasks.test { dependsOn(":plugins:OyasaiEconomy:shadowJar") }
