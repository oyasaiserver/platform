import { cp, glob, readdir, readFile, rm, writeFile } from 'node:fs/promises'
import { basename, join } from 'node:path'
import { nodeSeaConfig } from '@oyasaiserver/json/store/node-sea-config'
import { directory } from '@oyasaiserver/lib/directory'
import { rf, writeFileSafe, writeJsonFile } from '@oyasaiserver/lib/fs'
import { secrets } from '@oyasaiserver/lib/secrets'
import { runtimeSecrets } from '@oyasaiserver/schema/runtime-secrets'
import { inject } from 'postject'
import { build } from 'tsdown'
import { $, spinner } from 'zx'
import { plugins } from '../config.json'
import { bin, config } from '../package.json'

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
      `assets/overlays/minecraft-main/plugins/${basename(file)}`,
      rf
    )
  }
  for (const plugin of plugins) {
    const response = await fetch(plugin)
    const arrayBuffer = await response.arrayBuffer()
    const buffer = new Uint8Array(arrayBuffer)
    const path = `assets/overlays/minecraft-main/plugins/${basename(plugin)}`
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
    [config.sea]: config.sea
  }
})

await spinner('compile', async () => {
  await cp(process.execPath, bin)
  await writeJsonFile(config.sea, seaConfig)
  await $`node --experimental-sea-config ${config.sea}`
  await rm(config.sea)
})

await spinner('inject', async () => {
  const isDarwin = process.platform === 'darwin'

  await inject(bin, 'NODE_SEA_BLOB', await readFile(seaConfig.output), {
    sentinelFuse: 'NODE_SEA_FUSE_fce680ab2cc467b6e072b8b5df1996b2',
    machoSegmentName: isDarwin ? 'NODE_SEA' : undefined,
    overwrite: true
  })

  if (isDarwin) {
    await $`codesign --force --sign - ${bin}`
  }
})
