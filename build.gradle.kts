import com.github.jengelman.gradle.plugins.shadow.tasks.ShadowJar

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

  apply(plugin = "org.jetbrains.kotlin.jvm")
  apply(plugin = "com.gradleup.shadow")
  apply(plugin = "java-library")

  afterEvaluate {
    tasks.withType<Jar>().configureEach {
      if (name == "jar") {
        enabled = false
      }
    }

    tasks.withType<ShadowJar>().configureEach {
      archiveBaseName = project.name
      archiveVersion = ""
      archiveClassifier = ""
      duplicatesStrategy = DuplicatesStrategy.EXCLUDE
    }

    tasks.withType<ProcessResources>().configureEach {
      val version: String by project
      val properties = mapOf("version" to version)
      inputs.properties(properties)
      filteringCharset = Charsets.UTF_8.name()
      filesMatching("plugin.yml") { expand(properties) }
    }

    tasks.named("build") { dependsOn("shadowJar") }
  }
}
