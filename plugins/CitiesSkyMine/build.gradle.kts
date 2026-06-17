dependencies {
  compileOnly(libs.purpur.api)
  compileOnly(libs.fawe.bukkit)
  compileOnly(libs.luckperms.api)
  compileOnly(libs.placeholderapi)
  implementation(libs.kotlin.stdlib)
}

val generateUserGuide =
    tasks.register<Exec>("generateCitiesSkyMineUserGuide") {
      workingDir = rootDir
      commandLine("python3", "plugins/CitiesSkyMine/tools/generate_user_guide.py")
    }

val checkUserGuide =
    tasks.register<Exec>("checkCitiesSkyMineUserGuide") {
      workingDir = rootDir
      commandLine("python3", "plugins/CitiesSkyMine/tools/generate_user_guide.py", "--check")
    }

tasks.named("check") { dependsOn(checkUserGuide) }

tasks.named("processResources") { dependsOn(checkUserGuide) }
