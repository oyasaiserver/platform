plugins {
    id("com.gradleup.shadow") version "9.0.0-beta12" apply false
    kotlin("jvm") version "2.2.0-Beta2" apply false
    id("com.diffplug.spotless") version "7.0.3"
}

repositories { mavenCentral() }

spotless {
    kotlin {
        target("**/src/**/*.kt")
        targetExclude("gen/**/*.kt")
        ktlint()
    }

    kotlin {
        target("**/src/**/*.kt")
        ktfmt().kotlinlangStyle()
    }

    kotlinGradle {
        target("**/src/**/*.gradle.kt")
        ktfmt().kotlinlangStyle()
        ktlint()
    }
}
