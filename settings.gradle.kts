rootProject.name = "platform"

include(":lib:kotlin")

file("plugins")
  .listFiles()
  .filter { it.isDirectory }
  .forEach { dir -> include(":plugins:${dir.name}") }
