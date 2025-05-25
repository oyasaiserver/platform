rootProject.name = "platform"

"plugins".let {
    file(it)
        .listFiles()
        .forEach { plugin ->
            include("$it:${plugin.name}")
        }
}
