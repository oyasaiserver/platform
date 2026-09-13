dependencies {
  compileOnly(libs.purpur.api)
  compileOnly(libs.luckperms.api)
  compileOnly(libs.worldborder) { isTransitive = false }
  compileOnly(project(":plugins:OyasaiToken"))
  compileOnly(project(":plugins:SocialLikes3"))
  compileOnly(project(":plugins:DynamicProfile"))
  implementation(libs.kotlin.stdlib)
  implementation(libs.gson)
  implementation(libs.discord.webhooks)
  implementation(libs.inventoryframework)
  implementation(libs.sqlite.jdbc)

  testImplementation("org.jetbrains.kotlin:kotlin-test-junit5:2.4.0")
  testImplementation("org.junit.jupiter:junit-jupiter-engine:5.11.4")
  testRuntimeOnly("org.junit.platform:junit-platform-launcher")
}

tasks.test { useJUnitPlatform() }
