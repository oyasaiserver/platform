import { cp, glob, readdir, readFile, rm } from 'node:fs/promises'
import { join } from 'node:path'
import { nodeSeaConfig } from '@oyasaiserver/json/store/node-sea-config'
import { directory } from '@oyasaiserver/lib/directory'
import { rf, writeFileSafe, writeJsonFile } from '@oyasaiserver/lib/fs'
import { secrets } from '@oyasaiserver/lib/secrets'
import { runtimeSecrets } from '@oyasaiserver/schema/runtime-secrets'
import { inject } from 'postject'
import { build } from 'tsdown'
import { $, spinner } from 'zx'
import config from '../config.json' with { type: 'json' }
import packageJson from '../package.json' with { type: 'json' }
import { normalizeJarName } from '../src/utils.ts'

await build({
  format: ['cjs'],
  minify: true,
  env: {
    secrets: JSON.stringify(runtimeSecrets.parse(secrets))
  }
})

const seaConfig = nodeSeaConfig.parse({
  main: 'dist/index.cjs',
  output: 'dist/sea.blob',
  disableExperimentalSEAWarning: true
})

await spinner('copy-assets', async () => {
  await cp(
    `${directory.root}/gen/compose/compose.${secrets.ENVIRONMENT}.yaml`,
    `dist/compose.yaml`
  )
  for await (const file of glob(
    join(directory.root, 'plugins/*/build/libs/*.jar')
  )) {
    await cp(
      file,
      `assets/overlays/minecraft-main/plugins/${normalizeJarName(file)}`,
      rf
    )
  }
  for (const plugin of config.plugins) {
    const response = await fetch(plugin)
    const arrayBuffer = await response.arrayBuffer()
    const buffer = new Uint8Array(arrayBuffer)
    const path = `assets/overlays/minecraft-main/plugins/${normalizeJarName(plugin)}`
    await writeFileSafe(path, buffer)
  }
})

await spinner('create-sea-config', async () => {
  const dir = 'assets'
  const dirents = await readdir(dir, {
    recursive: true,
    withFileTypes: true
  })
  const assets = Object.fromEntries(
    dirents
      .filter(dirent => dirent.isFile())
      .map(dirent => join(dirent.parentPath, dirent.name))
      .map(path => [path.substring(dir.length + 1), path])
  )
  seaConfig.assets = {
    ...assets,
    ['compose.yaml']: 'dist/compose.yaml',
    [packageJson.config.sea]: packageJson.config.sea
  }
})

await spinner('compile', async () => {
  await cp(process.execPath, packageJson.bin)
  await writeJsonFile(packageJson.config.sea, seaConfig)
  await $`node --experimental-sea-config ${packageJson.config.sea}`
  await rm(packageJson.config.sea)
})

await spinner('inject', async () => {
  const isDarwin = process.platform === 'darwin'

  await inject(
    packageJson.bin,
    'NODE_SEA_BLOB',
    await readFile(seaConfig.output),
    {
      sentinelFuse: 'NODE_SEA_FUSE_fce680ab2cc467b6e072b8b5df1996b2',
      machoSegmentName: isDarwin ? 'NODE_SEA' : undefined,
      overwrite: true
    }
  )

  if (isDarwin) {
    await $`codesign --force --sign - ${packageJson.bin}`
  }
})
