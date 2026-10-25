plugins { alias(libs.plugins.paperweight.userdev) }

repositories { maven("https://jitpack.io") }

dependencies {
  paperweightDevelopmentBundle(libs.purpur.dev.bundle)
  implementation(libs.kotlin.stdlib)
  implementation(libs.sqlite.jdbc)
  compileOnly(libs.tab.api)
  testImplementation(libs.purpur.api)
  testImplementation("org.junit.jupiter:junit-jupiter-params:5.11.4")
}
