plugins { alias(libs.plugins.spotless) }

buildscript {
  dependencies {
    classpath(libs.kotlin.plugin)
    classpath(libs.shadow.plugin)
  }

  repositories { mavenCentral() }
}

allprojects {
  repositories {
    mavenCentral()
    maven("https://repo.purpurmc.org/snapshots")
    maven("https://maven.enginehub.org/repo")
    maven("https://jitpack.io")
  }
}

spotless {
  isEnforceCheck = false

  kotlin {
    target("**/*.kt")
    targetExclude("gen/**/*.kt")
    ktlint()
  }

  kotlin {
    target("**/*.kt")
    ktfmt().googleStyle()
  }

  kotlinGradle {
    target("**/*.gradle.kts")
    ktfmt().googleStyle()
  }

  java {
    target("**/*.java")
    targetExclude("node_modules/**/*")
    googleJavaFormat()
  }
}
