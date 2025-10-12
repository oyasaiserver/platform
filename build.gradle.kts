import nl.littlerobots.vcu.plugin.resolver.VersionSelectors

plugins {
  java
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
    maven("https://nexus.frengor.com/repository/public/")
    maven("https://nexus.scarsz.me/content/groups/public/")
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

versionCatalogUpdate { versionSelector(VersionSelectors.LATEST) }
