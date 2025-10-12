plugins {
  java
  id("com.gradleup.shadow")
}

repositories {
  mavenCentral()
  maven("https://hub.spigotmc.org/nexus/content/repositories/public")
  maven("https://oss.sonatype.org/content/repositories/snapshots")
  maven("https://repo.purpurmc.org/snapshots")
  maven("https://nexus.frengor.com/repository/public/")
  maven("https://nexus.scarsz.me/content/groups/public/")
  maven("https://repo.codemc.io/repository/maven-public/")
  maven("https://repo.inventivetalent.org/content/groups/public/")
  maven { url = uri("https://repo.extendedclip.com/content/repositories/placeholderapi/") }
}

dependencies {
  compileOnly("org.projectlombok:lombok:1.18.42")
  annotationProcessor("org.projectlombok:lombok:1.18.42")
  implementation(libs.purpur.api)
  implementation("me.clip:placeholderapi:2.10.9")
  implementation(libs.vault.api)
  implementation("org.apache.commons:commons-lang3:3.19.0")

  // shaded dependencies
  implementation("redis.clients:jedis:3.5.1")
  implementation("org.apache.commons:commons-pool2:2.4.2")
  implementation("com.zaxxer:HikariCP:4.0.2")
  implementation("org.slf4j:slf4j-nop:1.7.32")
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
