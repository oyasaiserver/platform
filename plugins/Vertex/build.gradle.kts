plugins {
    kotlin("jvm")
    kotlin("plugin.serialization") version "2.2.0-Beta2"
    id("com.gradleup.shadow")
}

repositories {
    mavenCentral()
    maven("https://repo.purpurmc.org/snapshots")
    maven("https://repo.essentialsx.net/snapshots/")
}

dependencies {
    compileOnly(libs.purpur.api)
    compileOnly(libs.essentialsx)
    implementation(project(":lib:kotlin"))
    implementation(project(":gen:kotlin"))
    implementation(libs.genai)
    implementation(libs.caffeine)
    implementation(libs.commons.lang3)
    implementation(libs.reflections)
    implementation(libs.postgresql)
    implementation(libs.kotlin.reflect)
    implementation(platform(libs.adventure.bom))
    implementation(libs.adventure.api)
    implementation(libs.adventure.plain)
    implementation(libs.adventure.minimessage)
    implementation(platform(libs.kotlin.bom))
    implementation(libs.kotlin.stdlib)
    implementation(platform(libs.coroutines.bom))
    implementation(libs.coroutines.core)
    implementation(platform(libs.serialization.bom))
    implementation(libs.serialization.core)
    implementation(libs.serialization.json)
    implementation(platform(libs.arrow.stack))
    implementation(libs.arrow.core)
    implementation(platform(libs.ktor.bom))
    implementation(libs.ktor.core)
    implementation(libs.ktor.cio)
    implementation(platform(libs.exposed.bom))
    implementation(libs.exposed.core)
    implementation(libs.exposed.dao)
    implementation(libs.exposed.jdbc)
    implementation(libs.exposed.kotlin.datetime)
    implementation(libs.exposed.migration)
}

configurations.configureEach {
    resolutionStrategy.dependencySubstitution {
        substitute(module("org.spigotmc:spigot-api"))
            .using(module("org.purpurmc.purpur:purpur-api:1.21.5-R0.1-SNAPSHOT"))
    }
}

tasks.apply {
    jar { enabled = false }

    shadowJar { duplicatesStrategy = DuplicatesStrategy.EXCLUDE }

    build {
        compileKotlin
            .get()
            .compilerOptions.optIn
            .addAll("kotlin.uuid.ExperimentalUuidApi")
        dependsOn(shadowJar)
    }

    processResources {
        val version: String by project
        val properties = mapOf("version" to version)
        inputs.properties(properties)
        filteringCharset = Charsets.UTF_8.name()
        filesMatching("plugin.yml") { expand(properties) }
    }
}
