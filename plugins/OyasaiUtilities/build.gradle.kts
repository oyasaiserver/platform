plugins { alias(libs.plugins.paperweight.userdev) }

dependencies {
  paperweightDevelopmentBundle(libs.paper.dev.bundle)
  compileOnly(libs.vault.api)
  compileOnly(files("libs/veinminer-paper-2.6.0.jar"))
}
