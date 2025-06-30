rootProject.name = "platform"

"plugins"
    .let { dir ->
        file(dir)
            .listFiles()
            .filter { it.isDirectory }
            .forEach { plugin -> include("$dir:${plugin.name}") }
    }

include(":lib:kotlin")

include(":gen:proto:kotlin")
