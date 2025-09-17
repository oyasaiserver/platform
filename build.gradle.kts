import nl.littlerobots.vcu.plugin.resolver.VersionSelectors
import nl.littlerobots.vcu.plugin.versionSelector

plugins {
  alias(libs.plugins.spotless)
  alias(libs.plugins.version.catalog.update)
}

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
    maven("https://repo.codemc.io/repository/maven-snapshots")
  }
}

spotless {
  isEnforceCheck = false

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

versionCatalogUpdate {
  versionSelector(VersionSelectors.LATEST)
}
