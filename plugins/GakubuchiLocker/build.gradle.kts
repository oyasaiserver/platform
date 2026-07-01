plugins {
    kotlin("jvm") version "1.9.22"
    id("io.github.goooler.shadow") version "8.1.8"
}

group = "com.gakubuchilocker"
version = "1.1.0"

repositories {
    mavenCentral()
    maven("https://repo.papermc.io/repository/maven-public/")
}

dependencies {
    compileOnly("io.papermc.paper:paper-api:1.21.1-R0.1-SNAPSHOT")
    implementation(kotlin("stdlib"))
    implementation("org.xerial:sqlite-jdbc:3.45.1.0")
}

java {
    toolchain.languageVersion.set(JavaLanguageVersion.of(21))
}

tasks {
    processResources {
        val props = mapOf("version" to project.version)
        inputs.properties(props)
        filesMatching("plugin.yml") {
            expand(props)
        }
    }
    shadowJar {
        archiveClassifier.set("")
        // sqlite-jdbc はJNIネイティブライブラリを含むため relocate 不可
    }
    build {
        dependsOn(shadowJar)
    }
    compileKotlin {
        kotlinOptions.jvmTarget = "21"
    }
}
