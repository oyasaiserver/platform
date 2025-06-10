plugins {
    id("com.gradleup.shadow") version "9.0.0-beta12" apply false
    kotlin("jvm") version "2.2.0-Beta2" apply false
    id("com.diffplug.spotless") version "7.0.3"
}

repositories { mavenCentral() }

spotless {
    val spotlessIgnore =
        listOf(
            "node_modules/**",
        )

    java {
        target("**/*.java")
        targetExclude(spotlessIgnore)
        googleJavaFormat()
    }

    kotlin {
        target("**/*.kt")
        targetExclude(spotlessIgnore)
        ktfmt().kotlinlangStyle()
        ktlint()
    }

    kotlinGradle {
        target("**/*.gradle.kts")
        targetExclude(spotlessIgnore)
        ktfmt().kotlinlangStyle()
        ktlint()
    }
}
