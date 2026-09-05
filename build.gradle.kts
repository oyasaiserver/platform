import com.github.jengelman.gradle.plugins.shadow.tasks.ShadowJar

apply(plugin = "com.diffplug.spotless")

tasks.register("fmt") { dependsOn("spotlessApply") }

configure<com.diffplug.gradle.spotless.SpotlessExtension> {
  // Enforced via treefmt
  isEnforceCheck = false
  kotlin {
    target("plugins/**/*.kt")
    ktfmt()
  }
  kotlinGradle {
    target("*.gradle.kts", "plugins/**/*.gradle.kts")
    ktfmt()
  }
}

tasks.register<JavaExec>("lock") {
  val gradle2nixHome = rootDir.resolve("packages/gradle-plugins/gen/gradle2nix")
  classpath = files(fileTree(gradle2nixHome.resolve("lib")) { include("*.jar") })
  mainClass = "org.nixos.gradle2nix.MainKt"
  jvmArgs("-Dorg.nixos.gradle2nix.share=${gradle2nixHome.resolve("share")}")
  args("--project", rootDir)
}

buildscript {
  dependencies {
    classpath(libs.kotlin.plugin)
    classpath(libs.shadow.plugin)
    classpath(libs.spotless.plugin)
  }

  repositories { mavenCentral() }
}

allprojects {
  repositories {
    maven(rootDir.resolve("packages/gradle-plugins/gen/ktfmt").toURI())
    mavenCentral()
    maven("https://nexus.frengor.com/repository/public/")
    maven("https://repo.purpurmc.org/snapshots") {
      content {
        excludeGroupByRegex("io.papermc.*")
        excludeGroupByRegex("org.geysermc.*")
      }
    }
    maven("https://repo.opencollab.dev/main/")
    maven("https://nexus.scarsz.me/content/groups/public/")
    maven("https://maven.enginehub.org/repo/")
    maven("https://repo.papermc.io/repository/maven-public/")
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
