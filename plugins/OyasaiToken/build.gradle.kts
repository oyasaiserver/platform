plugins { alias(libs.plugins.paperweight.userdev) }

repositories { maven("https://jitpack.io") }

dependencies {
  paperweightDevelopmentBundle(libs.purpur.dev.bundle)
  implementation(libs.kotlin.stdlib)
  implementation(libs.sqlite.jdbc)
  compileOnly("com.github.NEZNAMY", "TAB-API", "6.1.2")
}
