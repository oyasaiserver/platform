plugins { alias(libs.plugins.paperweight.userdev) }

dependencies {
  paperweightDevelopmentBundle(libs.purpur.dev.bundle)

  implementation(libs.kotlin.stdlib)
  implementation(libs.sqlite.jdbc)

  compileOnly(libs.placeholderapi)
  compileOnly(libs.vault.api)
  compileOnly(libs.fawe.bukkit)
  compileOnly(libs.velocity.api) { exclude(group = "net.kyori") }
  // Bedrock Transfer/pack injection on Velocity only. Referenced solely from the velocity
  // package, so Paper-only installs never load these classes. Pin to the deployed Geyser.
  compileOnly("org.geysermc.geyser:api:2.11.2-SNAPSHOT")

}

java { toolchain.languageVersion.set(JavaLanguageVersion.of(25)) }
kotlin { jvmToolchain(25) }

tasks.register<JavaExec>("verifyPluginMessageCodecs") {
  group = "verification"
  description = "Runs pure OMMT Plugin Message codec boundary checks without a Bukkit runtime."
  dependsOn(tasks.named("compileTestKotlin"))
  classpath = sourceSets["test"].runtimeClasspath
  mainClass.set("com.github.sahyuya.oyasaiMusic.interop.PluginMessageCodecVerification")
}

tasks.test {
  // The production verification is the JavaExec task above; no Bukkit-dependent JUnit tests run in this module.
  failOnNoDiscoveredTests = false
}

val rootInteropContract = rootProject.layout.projectDirectory.file("../docs/interop/INTEROP_CONTRACT.md")
val bundledInteropContract = layout.projectDirectory.file("docs/OMMT_PLUGIN_MESSAGE_PROTOCOL_V1.md")

tasks.register("verifyInteropContract") {
  group = "verification"
  description = "Verifies that the bundled OMMT packet contract is byte-identical to the shared contract."
  inputs.file(rootInteropContract)
  inputs.file(bundledInteropContract)
  doLast {
    check(rootInteropContract.asFile.readBytes().contentEquals(bundledInteropContract.asFile.readBytes())) {
      "Bundled OMMT contract differs from docs/interop/INTEROP_CONTRACT.md"
    }
  }
}

tasks.named("check") { dependsOn("verifyInteropContract", "verifyPluginMessageCodecs") }

tasks {
  shadowJar {
    minimize { exclude(dependency(libs.sqlite.jdbc.get())) }
    relocate("org.sqlite", "com.oyasai.music.libs.sqlite")
    relocate("kotlin", "com.oyasai.music.libs.kotlin")
  }

  processResources {
    val properties = mapOf("version" to project.version.toString())
    filesNotMatching(listOf("**/*.bin", "**/sound-catalog.json")) { expand(properties) }
  }
}
