import com.github.jengelman.gradle.plugins.shadow.tasks.ShadowJar
import nl.littlerobots.vcu.plugin.resolver.VersionSelectors

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
    maven("https://nexus.frengor.com/repository/public/")
    maven("https://nexus.scarsz.me/content/groups/public/")
  }
}

subprojects {
  if (!project.path.startsWith(":plugins:")) {
    return@subprojects
  }
  configurations.configureEach {
    resolutionStrategy.dependencySubstitution {
      substitute(module("org.bukkit:bukkit"))
        .using(module(libs.purpur.api.get().toString()))
    }
  }

  afterEvaluate {
    tasks.withType<Jar>().configureEach {
      if (name == "jar") {
        enabled = false
      }
    }

    tasks.withType<ShadowJar>().configureEach {
      archiveBaseName.set(project.name)
      archiveClassifier.set("")
      archiveVersion.set("")
      duplicatesStrategy = DuplicatesStrategy.EXCLUDE
    }

    tasks.withType<ProcessResources>().configureEach {
      val version: String by project
      val properties = mapOf("version" to version)
      inputs.properties(properties)
      filteringCharset = Charsets.UTF_8.name()
      filesMatching("plugin.yml") { expand(properties) }
    }

    tasks.named("build") {
      dependsOn("shadowJar")
    }
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
