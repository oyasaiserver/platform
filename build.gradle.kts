plugins {
    id("com.gradleup.shadow") version "9.0.0-beta12" apply false
    kotlin("jvm") version "2.2.0-Beta2" apply false
    id("com.diffplug.spotless") version "7.0.3"
}

repositories { mavenCentral() }

spotless {
    val excludes = listOf("node_modules")

    java {
        targetExclude(excludes)
        target("**/*.java")
        googleJavaFormat()
    }

    kotlin {
        targetExclude(excludes)
        target("**/*.kt")
        ktfmt().kotlinlangStyle()
        ktlint()
    }

    kotlinGradle {
        targetExclude(excludes)
        target("**/*.gradle.kts")
        ktfmt().kotlinlangStyle()
        ktlint()
    }
}
