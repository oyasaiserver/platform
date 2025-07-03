plugins {
    alias(libs.plugins.spotless)
}

buildscript {
    dependencies {
        classpath(libs.kotlin.plugin)
        classpath(libs.shadow.plugin)
    }

    repositories {
        mavenCentral()
    }
}

allprojects {
    repositories {
        mavenCentral()
        maven("https://repo.purpurmc.org/snapshots")
    }
}

spotless {
    isEnforceCheck = false

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
