plugins {
  kotlin("jvm")
  id("com.gradleup.shadow")
  `java-library`
}

dependencies {
  compileOnly(libs.purpur.api)
  compileOnly(libs.placeholderapi)
  compileOnly(libs.discordsrv)
  compileOnly(libs.luckperms.api)
  compileOnly(libs.tokenmanager) { isTransitive = false }
  implementation(libs.kotlin.stdlib)
  implementation(libs.inventoryframework)
  implementation(libs.anvilgui)
  implementation(libs.javacord)
  implementation(libs.worldborder)
  implementation(libs.ultimateadvancementapi)
}

tasks.apply {
  jar { enabled = false }

  shadowJar {
    archiveBaseName.set(project.name)
    archiveClassifier.set("")
    archiveVersion.set("")
    duplicatesStrategy = DuplicatesStrategy.EXCLUDE
  }

  build { dependsOn(shadowJar) }

  processResources {
    val version: String by project
    val properties = mapOf("version" to version)
    inputs.properties(properties)
    filteringCharset = Charsets.UTF_8.name()
    filesMatching("plugin.yml") { expand(properties) }
  }
}
