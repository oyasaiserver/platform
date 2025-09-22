plugins {
  kotlin("jvm")
  id("com.gradleup.shadow")
  `java-library`
}

repositories {
  mavenCentral()
  maven("https://hub.spigotmc.org/nexus/content/repositories/snapshots/")
  maven("https://repo.extendedclip.com/content/repositories/placeholderapi/")
  maven("https://repo.codemc.io/repository/maven-snapshots/")
  maven("https://jitpack.io")
  maven("https://repo.papermc.io/repository/maven-public/")
  maven("https://nexus.frengor.com/repository/public/")
  maven("https://nexus.scarsz.me/content/groups/public/")
  maven("https://repo.opencollab.dev/main/")
  maven("https://repo.codemc.org/repository/maven-public")
}

dependencies {
  implementation(libs.kotlin.stdlib)
  compileOnly(libs.purpur.api)
  implementation(libs.inventoryframework)
  compileOnly(libs.placeholderapi)
  implementation(libs.anvilgui)
  compileOnly(libs.discordsrv)
  implementation(libs.javacord)
  compileOnly(libs.luckperms.api)
  implementation(libs.worldborder)
  compileOnly(libs.tokenmanager) {
    isTransitive = false
  }
  implementation(libs.ultimateadvancementapi)
}

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
