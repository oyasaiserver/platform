plugins { alias(libs.plugins.paperweight.userdev) }

dependencies {
  paperweightDevelopmentBundle(libs.purpur.dev.bundle)
  compileOnly(libs.vault.api)
  compileOnly(libs.luckperms.api)
  compileOnly(project(":plugins:OyasaiToken"))
}
