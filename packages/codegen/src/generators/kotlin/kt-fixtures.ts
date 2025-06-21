import { mkdir, writeFile } from 'node:fs/promises'
import { dedent } from '@oyasaiserver/lib/dedent'

export async function ktFixtures(dst: string) {
  await mkdir(dst, {
    recursive: true
  })
  await writeFile(
    `${dst}/build.gradle.kts`,
    dedent`
      plugins {
        kotlin("jvm")
      }

      repositories {
        mavenCentral()
      }

      dependencies {
        implementation(platform(libs.serialization.bom))
        implementation(libs.serialization.core)
        implementation(libs.serialization.json)
      }
    `
  )
  await writeFile(`${dst}/gradle.properties`, 'version=1.0-SNAPSHOT')
  await writeFile(`${dst}/settings.gradle.kts`, 'rootProject.name = "gen"')
}
