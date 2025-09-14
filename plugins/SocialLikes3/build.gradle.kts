plugins {
  kotlin("jvm")
  id("com.gradleup.shadow")
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
  implementation("org.jetbrains.kotlin:kotlin-stdlib:2.2.0")
  compileOnly("io.papermc.paper:paper-api:1.21.5-R0.1-SNAPSHOT")
  implementation("com.github.stefvanschie.inventoryframework:IF:0.11.2")
  compileOnly("me.clip:placeholderapi:2.11.6")
  implementation("net.wesjd:anvilgui:1.10.8-SNAPSHOT")
  api("com.frengor:ultimateadvancementapi-shadeable:2.5.2")
  compileOnly("com.discordsrv:discordsrv:1.29.0")
  implementation("org.javacord:javacord:3.8.0")
  compileOnly("net.luckperms:api:5.5")
  implementation("com.github.PryPurity:WorldBorder:v2.1.4")
  compileOnly(group = "com.github.Realizedd", name = "TokenManager", version = "3.2.4") { isTransitive = false }
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
