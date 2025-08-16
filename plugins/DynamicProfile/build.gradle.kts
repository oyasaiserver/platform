plugins {
  kotlin("jvm")
  id("com.gradleup.shadow")
}

dependencies { compileOnly(libs.purpur.api) }

tasks.apply {
  jar { enabled = false }

  shadowJar { duplicatesStrategy = DuplicatesStrategy.EXCLUDE }

  build { dependsOn(shadowJar) }

  processResources {
    val version: String by project
    val properties = mapOf("version" to version)
    inputs.properties(properties)
    filteringCharset = Charsets.UTF_8.name()
    filesMatching("plugin.yml") { expand(properties) }
  }
}
