plugins {
  kotlin("jvm")
  id("com.gradleup.shadow")
}

dependencies {
  compileOnly(libs.purpur.api)
  compileOnly(libs.vault.api)
}

configurations.configureEach {
  resolutionStrategy.dependencySubstitution {
    substitute(module("org.bukkit:bukkit"))
      .using(module("org.purpurmc.purpur:purpur-api:1.21.5-R0.1-SNAPSHOT"))
  }
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
