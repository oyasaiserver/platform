import org.jetbrains.kotlin.konan.util.substitute

plugins {
    kotlin("jvm") version "2.2.0-Beta2"
    kotlin("plugin.serialization") version "2.2.0-Beta2"
    id("com.gradleup.shadow") version "9.0.0-beta12"
    id("com.diffplug.spotless") version "7.0.3"
}

repositories {
    mavenCentral()
    maven("https://repo.purpurmc.org/snapshots")
    maven("https://repo.essentialsx.net/snapshots/")
    maven("https://nexus.frengor.com/repository/public/")
}

dependencies {
    compileOnly("org.purpurmc.purpur:purpur-api:1.21.5-R0.1-SNAPSHOT")
    compileOnly("net.essentialsx:EssentialsX:2.21.1-SNAPSHOT")
    implementation("com.google.genai:google-genai:0.4.0")
    implementation("com.github.ben-manes.caffeine:caffeine:3.2.0")
    implementation("org.apache.commons:commons-lang3:3.17.0")
    implementation("org.reflections:reflections:0.10.2")
    implementation("org.postgresql:postgresql:42.7.5")
    implementation("com.frengor:ultimateadvancementapi:2.5.0")
    implementation(kotlin("reflect"))
    implementation(platform("net.kyori:adventure-bom:4.21.0"))
    implementation("net.kyori:adventure-api")
    implementation("net.kyori:adventure-text-serializer-plain")
    implementation("net.kyori:adventure-text-minimessage")
    implementation(platform("org.jetbrains.kotlin:kotlin-bom:2.2.0-Beta2"))
    implementation("org.jetbrains.kotlin:kotlin-stdlib")
    implementation(platform("org.jetbrains.kotlinx:kotlinx-coroutines-bom:1.10.2"))
    implementation("org.jetbrains.kotlinx:kotlinx-coroutines-core")
    implementation(platform("org.jetbrains.kotlinx:kotlinx-serialization-bom:1.8.1"))
    implementation("org.jetbrains.kotlinx:kotlinx-serialization-core")
    implementation("org.jetbrains.kotlinx:kotlinx-serialization-json")
    implementation(platform("io.arrow-kt:arrow-stack:2.0.1"))
    implementation("io.arrow-kt:arrow-core")
    implementation(platform("io.ktor:ktor-bom:3.1.2"))
    implementation("io.ktor:ktor-client-core")
    implementation("io.ktor:ktor-client-cio")
    implementation(platform("org.mongodb:mongodb-driver-bom:5.4.0"))
    implementation("org.mongodb:mongodb-driver-kotlin-coroutine")
    implementation("org.mongodb:bson-kotlinx")
    implementation(platform("org.jetbrains.exposed:exposed-bom:0.61.0"))
    implementation("org.jetbrains.exposed:exposed-core")
    implementation("org.jetbrains.exposed:exposed-dao")
    implementation("org.jetbrains.exposed:exposed-jdbc")
    implementation("org.jetbrains.exposed:exposed-kotlin-datetime")
    implementation("org.jetbrains.exposed:exposed-migration")
}

configurations.configureEach {
    resolutionStrategy.dependencySubstitution {
        substitute(module("org.spigotmc:spigot-api"))
            .using(module("org.purpurmc.purpur:purpur-api:1.21.5-R0.1-SNAPSHOT"))
    }
}

kotlin {
    jvmToolchain {
        languageVersion = JavaLanguageVersion.of(24)
        vendor = JvmVendorSpec.ORACLE
    }
}

spotless {
    kotlin {
        ktfmt().kotlinlangStyle()
        ktlint()
    }
}

tasks.apply {
    shadowJar {
        duplicatesStrategy = DuplicatesStrategy.EXCLUDE
        relocate(
            "com.fren_gor.ultimateAdvancementAPI",
            "com.github.oyasaiserver.ultimateAdvancementAPI",
        )
    }

    build {
        compileKotlin.get().compilerOptions.optIn.addAll(
            "kotlin.uuid.ExperimentalUuidApi",
        )
        dependsOn(shadowJar)
        doLast {
            copy {
                from(shadowJar.get().archiveFile)
                into("../../infra/data/plugins")
            }
        }
    }

    processResources {
        val version: String by project
        val properties = mapOf("version" to version)
        inputs.properties(properties)
        filteringCharset = Charsets.UTF_8.name()
        filesMatching("plugin.yml") {
            expand(properties)
        }
    }
}
