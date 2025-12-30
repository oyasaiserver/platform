rootProject.name = "platform"

file("plugins")
    .listFiles()
    .filter { it.isDirectory }
    .forEach { dir -> include(":plugins:${dir.name}") }
