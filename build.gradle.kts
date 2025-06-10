plugins {
    id("com.gradleup.shadow") version "9.0.0-beta12" apply false
    kotlin("jvm") version "2.2.0-Beta2" apply false
    id("com.diffplug.spotless") version "7.0.3"
}

repositories { mavenCentral() }

spotless {
    java {
        target("**/*.java")
        targetExclude("node_modules/**")
        googleJavaFormat()
    }

    kotlin {
        target("**/*.kt")
        targetExclude("node_modules/**")
        ktfmt().kotlinlangStyle()
        ktlint()
    }

    kotlinGradle {
        target("**/*.gradle.kts")
        targetExclude("node_modules/**")
        ktfmt().kotlinlangStyle()
        ktlint()
    }
}
