plugins {
    id("com.diffplug.spotless") version "7.0.3"
}

repositories {
    mavenCentral()
}

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
}
