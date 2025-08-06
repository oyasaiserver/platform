plugins {
  java
  id("com.gradleup.shadow")
}

group = "net.coreprotect"

repositories { mavenCentral() }

dependencies {
  compileOnly(libs.purpur.api)
  compileOnly(libs.fawe.core)
  compileOnly(libs.fawe.bukkit) { isTransitive = false }
  compileOnly(libs.advancedchestsapi)
  implementation(libs.hikaricp)
  implementation(libs.oshi.core)
  implementation(libs.json.simple)
  implementation(libs.log4j.core)
  implementation(libs.log4j.api)
}

tasks.apply {
  jar { manifest { attributes["paperweight-mappings-namespace"] = "mojang" } }

  shadowJar {
    archiveClassifier.set("")

    relocate("com.zaxxer", "net.coreprotect.com.zaxxer")

    exclude("**/*.java", "**/*.c", "META-INF/maven/**", "META-INF/services/**")

    dependencies {
      exclude(dependency("com.google.code.gson:.*"))
      exclude(dependency("org.intellij:.*"))
      exclude(dependency("org.jetbrains:.*"))
      exclude(dependency("org.slf4j:.*"))
      exclude(dependency("org.apache.logging.log4j:.*"))
      exclude(dependency("net.java.dev.jna:.*"))
    }
  }
}
