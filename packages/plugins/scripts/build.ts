import { envAwarePlugins } from '@oyasaiserver/plugins'
import { downloadJar } from '@oyasaiserver/plugins/download'
import { createSecrets } from '@oyasaiserver/secrets'
import { ok } from 'node:assert/strict'
import { randomUUID } from 'node:crypto'
import { mkdir, rm, writeFile } from 'node:fs/promises'
import { format } from 'node:path'

if (import.meta.main) {
  const secrets = await createSecrets()
  const plugins = envAwarePlugins[secrets.ENVIRONMENT]

  const dir = 'dist'
  await rm(dir, { force: true, recursive: true })
  await mkdir(dir)

  for (const plugin of plugins) {
    console.log(`Downloading ${JSON.stringify(plugin)}`)
    const byte = await downloadJar(plugin)
    ok(byte.byteLength)
    const path = format({
      dir,
      name: randomUUID(),
      ext: '.jar'
    })
    await writeFile(path, byte)
  }
}
