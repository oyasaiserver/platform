plugins { alias(libs.plugins.paperweight.userdev) }

repositories { maven("https://repo.essentialsx.net/releases/") }

dependencies {
  paperweightDevelopmentBundle(libs.purpur.dev.bundle)
  implementation(libs.sqlite.jdbc)
  compileOnly(libs.vault.api)
  compileOnly(libs.luckperms.api)
  compileOnly("net.essentialsx:EssentialsX:2.21.2") { isTransitive = false }
  compileOnly(project(":plugins:OyasaiToken"))

  testImplementation(libs.purpur.api)
}
