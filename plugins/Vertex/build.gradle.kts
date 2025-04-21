plugins {
    kotlin("jvm") version "2.2.0-Beta1"
    kotlin("plugin.serialization") version "2.1.20"
    id("com.gradleup.shadow") version "9.0.0-beta12"
    id("com.diffplug.spotless") version "7.0.3"
}

repositories {
    mavenCentral()
    maven("https://repo.purpurmc.org/snapshots")
}

dependencies {
    compileOnly("org.purpurmc.purpur:purpur-api:1.20-R0.1-SNAPSHOT")
    implementation("com.google.genai:google-genai:0.4.0")
    implementation(platform("org.jetbrains.kotlin:kotlin-bom:2.2.0-Beta1"))
    implementation("org.jetbrains.kotlin:kotlin-stdlib")
    implementation("org.jetbrains.kotlinx:kotlinx-coroutines-core:1.10.2")
    implementation("org.jetbrains.kotlinx:kotlinx-serialization-json:1.8.1")
    implementation(platform("io.arrow-kt:arrow-stack:2.0.1"))
    implementation("io.arrow-kt:arrow-core")
    implementation(platform("io.ktor:ktor-bom:3.1.2"))
    implementation("io.ktor:ktor-client-core")
    implementation("io.ktor:ktor-client-cio")
    implementation(platform("org.mongodb:mongodb-driver-bom:5.4.0"))
    implementation("org.mongodb:mongodb-driver-kotlin-coroutine")
    implementation("org.mongodb:bson-kotlinx")
}

kotlin { jvmToolchain(21) }

spotless {
    kotlin {
        ktlint()
    }
}

tasks.run {
    build {
        dependsOn(shadowJar)
        doLast {
            copy {
                from(
                    layout.buildDirectory
                        .file("libs/Vertex-1.0-SNAPSHOT-all.jar")
                        .get()
                        .asFile,
                )
                into("../../infra/data/plugins")
            }
        }
    }

    processResources {
        val version: String by project
        val properties = mapOf("version" to version)
        inputs.properties(properties)
        filteringCharset = Charsets.UTF_8.name()
        filesMatching("plugin.yml") { expand(properties) }
    }
}
