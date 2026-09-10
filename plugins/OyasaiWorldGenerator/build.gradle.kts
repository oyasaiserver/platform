import com.github.jengelman.gradle.plugins.shadow.tasks.ShadowJar

plugins { alias(libs.plugins.paperweight.userdev) }

version = "0.1.0"

dependencies { paperweightDevelopmentBundle(libs.purpur.dev.bundle) }

val failureTestProvider =
    layout.buildDirectory.file(
        "generated/failureTest/kotlin/io/oyasai/worldgen/height/NmsHeightProviderFailureBuild.kt"
    )

val generateFailureTestProvider by
    tasks.registering {
      val productionProvider =
          layout.projectDirectory.file(
              "src/main/kotlin/io/oyasai/worldgen/height/NmsHeightProvider.kt"
          )
      inputs.file(productionProvider)
      outputs.file(failureTestProvider)
      doLast {
        var source = productionProvider.asFile.readText()
        source =
            source.replace(
                "val spec = declarations[world.name] ?: return false\n    if (!isSupportedServer())",
                "val spec = declarations[world.name] ?: return false\n" +
                    "    OwgFailureTestControl.fail(\"before-apply\", world.name)\n" +
                    "    if (!isSupportedServer())",
            )
        source =
            source.replace(
                "patchLevel(serverLevel, registration.holder, spec, levelSnapshot)\n      starlightMutationStarted = true",
                "patchLevel(serverLevel, registration.holder, spec, levelSnapshot)\n" +
                    "      OwgFailureTestControl.fail(\"after-level\", world.name)\n" +
                    "      starlightMutationStarted = true",
            )
        source =
            source.replace(
                "check(verify(world, spec)) {",
                "check(verify(world, spec) && " +
                    "!OwgFailureTestControl.shouldFail(\"final-verify\", world.name)) {",
            )
        val output = failureTestProvider.get().asFile
        output.parentFile.mkdirs()
        output.writeText(source)
      }
    }

val failureTest =
    sourceSets.create("failureTest") {
      java.setSrcDirs(emptyList<String>())
      resources.srcDir("src/main/resources")
      compileClasspath += sourceSets.main.get().compileClasspath
      runtimeClasspath += compileClasspath
    }

kotlin.sourceSets.named("failureTest") {
  kotlin.srcDir("src/main/kotlin")
  kotlin.srcDir("src/failureTest/kotlin")
  kotlin.srcDir(layout.buildDirectory.dir("generated/failureTest/kotlin"))
  kotlin.exclude("**/NmsHeightProvider.kt")
}

tasks.named("compileFailureTestKotlin") { dependsOn(generateFailureTestProvider) }

tasks.register<ShadowJar>("failureTestShadowJar") {
  group = "verification"
  description = "Builds the integration-only OWG jar containing isolated failure injection."
  archiveBaseName = "OyasaiWorldGenerator-failure-test"
  archiveVersion = ""
  archiveClassifier = ""
  archiveFileName = "OyasaiWorldGenerator-failure-test.jar"
  from(failureTest.output)
  configurations = listOf(project.configurations[failureTest.runtimeClasspathConfigurationName])
  duplicatesStrategy = DuplicatesStrategy.EXCLUDE
  dependsOn(failureTest.classesTaskName)
}
