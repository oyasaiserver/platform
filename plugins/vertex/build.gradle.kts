plugins {
    kotlin("jvm") version "2.2.0-Beta1"
    kotlin("plugin.serialization") version "2.1.20"
    id("com.gradleup.shadow") version "9.0.0-beta12"
    id("com.ncorti.ktfmt.gradle") version "0.22.0"
}

group = "com.github.oyasaiserver"

version = "1.0-SNAPSHOT"

repositories {
    mavenCentral()
    maven("https://repo.purpurmc.org/snapshots")
}

dependencies {
    compileOnly("org.purpurmc.purpur:purpur-api:1.20-R0.1-SNAPSHOT")
    implementation("com.google.genai:google-genai:0.4.0")
    implementation("org.jetbrains.kotlin:kotlin-stdlib:2.2.0-Beta1")
    implementation("org.jetbrains.kotlinx:kotlinx-coroutines-core:1.10.2")
    implementation("org.jetbrains.kotlinx:kotlinx-serialization-json:1.8.0")
    implementation("dev.esnault.wanakana:wanakana-core:1.1.1")
    implementation(platform("io.arrow-kt:arrow-stack:2.0.1"))
    implementation("io.arrow-kt:arrow-core")
    implementation("io.ktor:ktor-client-core:3.1.2")
    implementation("io.ktor:ktor-client-cio:3.1.2")
}

kotlin { jvmToolchain(21) }

ktfmt { kotlinLangStyle() }

tasks.run {
    build { dependsOn("shadowJar") }

    processResources {
        val properties = mapOf("version" to version)
        inputs.properties(properties)
        filteringCharset = Charsets.UTF_8.name()
        filesMatching("plugin.yml") { expand(properties) }
    }
}
