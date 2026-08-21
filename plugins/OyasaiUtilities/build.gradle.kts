plugins { alias(libs.plugins.paperweight.userdev) }

dependencies {
  paperweightDevelopmentBundle(libs.purpur.dev.bundle)
  compileOnly(libs.vault.api)
  compileOnly(libs.tokenmanager) { isTransitive = false }
  compileOnly(files("libs/veinminer-paper-2.6.0.jar"))
}
