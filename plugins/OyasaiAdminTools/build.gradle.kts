dependencies {
  compileOnly(libs.purpur.api)
  compileOnly(libs.luckperms.api)
  compileOnly(project(":plugins:OyasaiToken"))
  implementation(libs.kotlin.stdlib)
  implementation(libs.gson)
  implementation(libs.discord.webhooks)
  implementation(libs.inventoryframework)
  implementation(libs.sqlite.jdbc)
  implementation("org.jetbrains.kotlinx:kotlinx-coroutines-core:1.10.2")
  testImplementation(libs.purpur.api)
}

// Kotlin stdlib/reflection retain their names: relocating them breaks built-in type lookup.
tasks.shadowJar {
  listOf(
          "kotlinx",
          "okhttp3",
          "okio",
          "_COROUTINE",
          "org.slf4j",
          "com.typesafe.config",
          "org.jetbrains.annotations",
          "org.intellij.lang.annotations",
          "org.reactivestreams",
          "org.jspecify",
      )
      .forEach { relocate(it, "io.oyasai.oyasaiAdminTools.libs.$it") }
  filesMatching("META-INF/services/**") { duplicatesStrategy = DuplicatesStrategy.INCLUDE }
  filesMatching("META-INF/*.kotlin_module") { duplicatesStrategy = DuplicatesStrategy.INCLUDE }
  mergeServiceFiles()
  exclude("META-INF/*.SF", "META-INF/*.RSA", "META-INF/*.DSA")
}

tasks.test { dependsOn(tasks.shadowJar) }
