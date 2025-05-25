rootProject.name = "platform"

"plugins".let {
    file(it)
        .listFiles()
        .filter { it.isDirectory }
        .forEach { plugin ->
            include("$it:${plugin.name}")
        }
}
