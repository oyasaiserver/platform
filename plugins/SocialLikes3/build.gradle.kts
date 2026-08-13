import java.time.ZoneId
import java.time.ZonedDateTime
import java.time.format.DateTimeFormatter

dependencies {
  compileOnly(libs.purpur.api)
  compileOnly(libs.placeholderapi)
  compileOnly(libs.discordsrv)
  compileOnly(libs.luckperms.api)
  compileOnly(libs.tokenmanager) { isTransitive = false }
  compileOnly(libs.fawe.bukkit)
  implementation(libs.kotlin.stdlib)
  implementation(libs.inventoryframework)
  implementation(libs.anvilgui)
  implementation(libs.javacord)
  implementation(libs.ultimateadvancementapi)
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
