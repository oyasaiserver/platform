import { mkdir, writeFile } from 'node:fs/promises'

export async function gradle(dst: string) {
  await mkdir(dst, {
    recursive: true
  })
  await writeFile(
    `${dst}/build.gradle.kts`,
    `
      plugins {
        kotlin("jvm")
      }

      repositories {
        mavenCentral()
      }

      dependencies {
      }
    `
  )
  await writeFile(`${dst}/gradle.properties`, 'version=1.0-SNAPSHOT')
  await writeFile(`${dst}/settings.gradle.kts`, 'rootProject.name = "gen"')
}
