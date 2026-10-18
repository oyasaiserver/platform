dependencies {
  compileOnly(libs.purpur.api)
  compileOnly(libs.luckperms.api)
  compileOnly(project(":plugins:OyasaiToken"))
  implementation(libs.kotlin.stdlib)
  implementation(libs.gson)
  implementation(libs.discord.webhooks)
  implementation(libs.inventoryframework)
  implementation(libs.sqlite.jdbc)
  implementation("ai.koog:koog-agents:1.3.0")
  implementation("ai.koog:prompt-executor-openrouter-client:1.3.0")
  implementation("ai.koog:prompt-executor-google-client:1.3.0-beta")
  implementation("ai.koog:prompt-executor-deepseek-client:1.3.0-beta")
  testImplementation(libs.purpur.api)
}

// Kotlin stdlib/reflection retain their names: relocating them breaks built-in type lookup.
tasks.shadowJar {
  listOf(
          "ai.koog",
          "io.ktor",
          "kotlinx",
          "io.github.oshai",
          "com.fasterxml.jackson",
          "okhttp3",
          "okio",
          "_COROUTINE",
          "org.fusesource.jansi",
          "org.slf4j",
          "io.opentelemetry",
          "aws.smithy.kotlin",
          "aws.sdk.kotlin",
          "org.apache.hc",
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
