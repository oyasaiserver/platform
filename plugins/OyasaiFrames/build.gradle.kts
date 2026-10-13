import com.github.jengelman.gradle.plugins.shadow.tasks.ShadowJar

version = "6.0.0"

dependencies {
  compileOnly(libs.purpur.api)
  compileOnly(libs.worldguard.bukkit) { isTransitive = false }
  compileOnly(libs.worldguard.core) { isTransitive = false }
  compileOnly(libs.fawe.bukkit)
  implementation(libs.sqlite.jdbc)
  implementation(libs.zstd.jni)
  implementation(libs.imageio.webp)
  implementation(libs.anvilgui)
  testImplementation(libs.purpur.api)
}

tasks.named<ShadowJar>("shadowJar") {
  // Keep the production Linux targets and the macOS development target.
  exclude(
      "aix/**",
      "darwin/x86_64/**",
      "freebsd/**",
      "linux/arm/**",
      "linux/i386/**",
      "linux/loongarch64/**",
      "linux/mips64/**",
      "linux/ppc64/**",
      "linux/ppc64le/**",
      "linux/riscv64/**",
      "linux/s390x/**",
      "win/**",
  )
}
