import java.time.ZoneId
import java.time.ZonedDateTime
import java.time.format.DateTimeFormatter

plugins { alias(libs.plugins.paperweight.userdev) }

tasks.processResources { from("sldata-stats2-text.md") }

dependencies {
  paperweightDevelopmentBundle(libs.purpur.dev.bundle)
  compileOnly(libs.placeholderapi)
  compileOnly(libs.discordsrv)
  compileOnly(libs.luckperms.api)
  compileOnly(libs.tokenmanager) { isTransitive = false }
  // Paper provides Adventure at runtime. FAWE's compile-time Adventure 5.x must not override
  // Paper's 4.x API, otherwise builder return types are linked against incompatible descriptors.
  compileOnly(libs.fawe.bukkit) { exclude(group = "net.kyori") }
  implementation(libs.kotlin.stdlib)
  implementation(libs.inventoryframework)
  implementation(libs.javacord)
  implementation(libs.exposed.core)
  implementation(libs.exposed.jdbc)
  implementation(libs.sqlite.jdbc)
}

val archiveSldataDialogSource by
    tasks.registering {
      group = "backup"
      description = "Archives the current SLData dialog source before SocialLikes3 is built."

      doLast {
        val source =
            layout.projectDirectory
                .file("src/main/kotlin/com/github/srain3/sociallikes/command/SLData.kt")
                .asFile
        if (!source.exists()) return@doLast

        val timestamp =
            ZonedDateTime.now(ZoneId.of("Asia/Tokyo"))
                .format(DateTimeFormatter.ofPattern("yyyyMMdd-HHmmss"))
        val archiveDir =
            rootProject.layout.projectDirectory
                .dir("docs/03_Outputs/sociallikes-dialog-archives")
                .asFile
        copy {
          from(source)
          into(archiveDir)
          rename { "SLData-$timestamp.kt" }
        }
      }
    }

tasks.named("compileKotlin") { dependsOn(archiveSldataDialogSource) }
