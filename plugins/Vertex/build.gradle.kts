plugins {
  kotlin("jvm")
  id("com.gradleup.shadow")
}

dependencies {
  compileOnly(libs.purpur.api)
  implementation(libs.discord.webhooks)
}

tasks.apply {
  jar { enabled = false }

  shadowJar { duplicatesStrategy = DuplicatesStrategy.EXCLUDE }

  build {
    compileKotlin.get().compilerOptions.optIn.addAll("kotlin.uuid.ExperimentalUuidApi")
    dependsOn(shadowJar)
  }

  processResources {
    val version: String by project
    val properties = mapOf("version" to version)
    inputs.properties(properties)
    filteringCharset = Charsets.UTF_8.name()
    filesMatching("plugin.yml") { expand(properties) }
  }
}
