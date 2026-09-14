repositories { maven("https://repo.essentialsx.net/releases/") }

dependencies {
  compileOnly(libs.purpur.api)
  compileOnly(libs.luckperms.api)
  compileOnly(libs.vault.api)
  compileOnly("net.essentialsx:EssentialsX:2.21.2") { isTransitive = false }
  compileOnly(project(":plugins:OyasaiToken"))
  compileOnly(project(":plugins:SocialLikes3"))
  implementation(libs.discord.webhooks)

  testImplementation("org.jetbrains.kotlin:kotlin-test-junit5:2.4.0")
  testImplementation("org.junit.jupiter:junit-jupiter-engine:5.11.4")
  testRuntimeOnly("org.junit.platform:junit-platform-launcher")
}

tasks.test { useJUnitPlatform() }
