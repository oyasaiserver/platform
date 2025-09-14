plugins {
  kotlin("jvm")
  id("com.gradleup.shadow")
}

repositories {
  mavenCentral()
  maven { url = uri("https://repo.extendedclip.com/content/repositories/placeholderapi/") }
  maven { url = uri("https://repo.papermc.io/repository/maven-public/") }
  maven { url = uri("https://jitpack.io") } // VaultAPI, NuVotifier, TokenManager
}

dependencies {
  implementation("org.jetbrains.kotlin:kotlin-stdlib:1.9.22")
  implementation("com.google.code.gson:gson:2.11.0")

  compileOnly("me.clip:placeholderapi:2.11.5")
  compileOnly("io.papermc.paper:paper-api:1.20.1-R0.1-SNAPSHOT")
  compileOnly("com.github.NuVotifier:NuVotifier:2.7.2")
  compileOnly("com.github.MilkBowl:VaultAPI:1.7")
  compileOnly("net.luckperms:api:5.4")
  compileOnly("com.github.Realizedd:TokenManager:3.2.4") { isTransitive = false }
  compileOnly(libs.purpur.api)
  compileOnly(project(":plugins:SocialLikes3"))
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

  build { dependsOn(shadowJar) }

  processResources {
    val version: String by project
    val properties = mapOf("version" to version)
    inputs.properties(properties)
    filteringCharset = Charsets.UTF_8.name()
    filesMatching("plugin.yml") { expand(properties) }
  }
}
