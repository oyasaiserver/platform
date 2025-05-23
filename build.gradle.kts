plugins {
    id("com.diffplug.spotless") version "7.0.3"
}

repositories {
    mavenCentral()
}

spotless {
    java {
        target("**/*.java")
        googleJavaFormat()
    }

    kotlin {
        target("**/*.kt")
        ktfmt().kotlinlangStyle()
        ktlint()
    }
}
