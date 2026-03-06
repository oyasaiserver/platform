import com.github.jengelman.gradle.plugins.shadow.tasks.ShadowJar
import io.gitlab.arturbosch.detekt.extensions.DetektExtension
import org.jlleitschuh.gradle.ktlint.KtlintExtension

plugins {
  id("org.jlleitschuh.gradle.ktlint") version "12.1.1" apply false
  id("io.gitlab.arturbosch.detekt") version "1.23.6" apply false
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

  apply(plugin = "org.jetbrains.kotlin.jvm")
  apply(plugin = "com.gradleup.shadow")
  apply(plugin = "java-library")
  apply(plugin = "org.jlleitschuh.gradle.ktlint")
  apply(plugin = "io.gitlab.arturbosch.detekt")

  extensions.configure<KtlintExtension>("ktlint") {
    android.set(false)
    verbose.set(true)
    outputToConsole.set(true)
    ignoreFailures.set(true)
    filter {
      exclude("**/build/**")
    }
  }

  extensions.configure<DetektExtension>("detekt") {
    buildUponDefaultConfig = false
    config.setFrom(rootProject.file("config/detekt/detekt.yml"))
    autoCorrect = false
    ignoreFailures = true
    baseline = rootProject.file("config/detekt/baseline.xml")
  }

  tasks.withType<io.gitlab.arturbosch.detekt.Detekt>().configureEach {
    ignoreFailures = true
    jvmTarget = "17"
    reports {
      html.required.set(true)
      txt.required.set(false)
      xml.required.set(false)
    }
  }

  tasks.withType<io.gitlab.arturbosch.detekt.DetektCreateBaselineTask>().configureEach {
    jvmTarget = "17"
  }

  afterEvaluate {
    tasks.withType<Jar>().configureEach {
      if (name == "jar") {
        enabled = false
      }
    }

    tasks.withType<ShadowJar>().configureEach {
      archiveBaseName = project.name
      archiveClassifier = ""
      archiveVersion = ""
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
