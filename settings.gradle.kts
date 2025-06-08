plugins {
    id("com.gradleup.shadow") version "9.0.0-beta12" apply false
    kotlin("jvm") version "2.2.0-Beta2" apply false
}

rootProject.name = "platform"

"plugins".let { dir ->
    file(dir).listFiles().filter { it.isDirectory }.forEach { plugin ->
        include("$dir:${plugin.name}")
    }
}

include(":lib:kotlin")
