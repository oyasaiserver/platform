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
    compileOnly(libs.paper.api)
    implementation(project(":lib:kotlin"))
    implementation(project(":gen:kotlin"))
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
