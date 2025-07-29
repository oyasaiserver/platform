plugins {
    java
    id("com.gradleup.shadow")
}

group = "net.coreprotect"

version = "22.4"

description = "CoreProtect"

repositories {
    mavenCentral()
    //    maven("https://hub.spigotmc.org/nexus/content/groups/public/")
    //    maven("https://repo.papermc.io/repository/maven-public/")
    //    maven("https://repo.codemc.org/repository/maven-public/")
    //    maven("https://jitpack.io")
    //    maven("https://maven.enginehub.org/repo/")
}

dependencies {
    compileOnly(libs.purpur.api)
    compileOnly(libs.fawe.core)
    compileOnly(libs.fawe.bukkit) { isTransitive = false }
    compileOnly(libs.advancedchestsapi)
    implementation(libs.hikaricp)
    implementation(libs.oshi.core)
    implementation(libs.json.simple)
    implementation(libs.log4j.core)
    implementation(libs.log4j.api)
}

tasks.apply {
    jar { manifest { attributes["paperweight-mappings-namespace"] = "mojang" } }

    shadowJar {
        archiveClassifier.set("")

        relocate("com.zaxxer", "net.coreprotect.com.zaxxer")

        exclude("**/*.java", "**/*.c", "META-INF/maven/**", "META-INF/services/**")

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
