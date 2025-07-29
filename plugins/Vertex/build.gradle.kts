plugins {
  kotlin("jvm")
  id("com.gradleup.shadow")
}

dependencies {
  compileOnly(libs.purpur.api)
  implementation(libs.protobuf.java)
  implementation(libs.connect.kotlin)
  implementation(libs.connect.kotlin.google.java.ext)
  implementation(libs.connect.kotlin.okhttp)
  implementation(libs.okhttp)
  implementation(libs.reflections)
  implementation(project(":lib:kotlin"))
  implementation(project(":gen:proto:kotlin"))
}

configurations.configureEach {
  resolutionStrategy.dependencySubstitution {
    substitute(module("org.spigotmc:spigot-api"))
      .using(module("org.purpurmc.purpur:purpur-api:1.21.5-R0.1-SNAPSHOT"))
  }
}

tasks.apply {
  jar { enabled = false }

  shadowJar {
    duplicatesStrategy = DuplicatesStrategy.EXCLUDE
    relocate("com.google.protobuf", "io.oyasai.protobuf")
  }

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
