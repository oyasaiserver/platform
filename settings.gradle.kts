rootProject.name = "platform"

val dir = "plugins"

file(dir)
    .listFiles()
    .filter { it.isDirectory }
    .forEach {
        include("$dir:${it.name}")
    }
