plugins {
    java
    id("com.gradleup.shadow") version "9.0.0-beta12"
    id("com.diffplug.spotless") version "7.0.3"
}

group = "net.coreprotect"
version = "22.4"
description = "CoreProtect"

repositories {
    mavenCentral()
    maven("https://hub.spigotmc.org/nexus/content/groups/public/")
    maven("https://repo.papermc.io/repository/maven-public/")
    maven("https://repo.codemc.org/repository/maven-public/")
    maven("https://jitpack.io")
    maven("https://maven.enginehub.org/repo/")
}

dependencies {
    compileOnly("io.papermc.paper:paper-api:1.21.1-R0.1-SNAPSHOT")
    compileOnly("com.fastasyncworldedit:FastAsyncWorldEdit-Core:2.13.0")
    compileOnly("com.fastasyncworldedit:FastAsyncWorldEdit-Bukkit:2.13.0") {
        exclude(group = "*", module = "FastAsyncWorldEdit-Core")
    }
    compileOnly("com.github.DeadSilenceIV:AdvancedChestsAPI:3.2-BETA")
    implementation("org.bstats:bstats-bukkit:3.0.2")
    implementation("com.zaxxer:HikariCP:5.0.1")
    implementation("com.github.oshi:oshi-core:6.6.2")
    implementation("org.apache.logging.log4j:log4j-core:2.19.0")
    implementation("org.apache.logging.log4j:log4j-api:2.19.0")
}

java {
    toolchain {
        languageVersion = JavaLanguageVersion.of(24)
        vendor = JvmVendorSpec.ORACLE
    }
}

tasks.apply {
    jar {
        manifest {
            attributes["paperweight-mappings-namespace"] = "mojang"
        }
    }

    shadowJar {
        archiveClassifier.set("")

        // Relocations
        relocate("org.bstats", "net.coreprotect.org.bstats")
        relocate("com.zaxxer", "net.coreprotect.com.zaxxer")

        // Filters
        exclude("**/*.java")
        exclude("**/*.c")
        exclude("META-INF/maven/**")
        exclude("META-INF/services/**")

        dependencies {
            exclude(dependency("com.google.code.gson:.*"))
            exclude(dependency("org.intellij:.*"))
            exclude(dependency("org.jetbrains:.*"))
            exclude(dependency("org.slf4j:.*"))
            exclude(dependency("org.apache.logging.log4j:.*"))
            exclude(dependency("net.java.dev.jna:.*"))
        }
    }
}
