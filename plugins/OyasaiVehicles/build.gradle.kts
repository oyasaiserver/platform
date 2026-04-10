plugins { alias(libs.plugins.paperweight.userdev) }

dependencies {
  paperweightDevelopmentBundle(libs.paper.dev.bundle)
  implementation(libs.kotlin.stdlib)
  compileOnly(libs.fawe.bukkit) { exclude(group = "at.yawk.lz4", module = "lz4-java") }
}
