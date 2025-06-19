import { directory } from '@oyasaiserver/lib/directory'
import { readFileContent } from '@oyasaiserver/lib/fs'
import { secrets } from '@oyasaiserver/lib/secrets'
import { spinner } from '@oyasaiserver/lib/zx'
import { defineConfig } from 'tsup'
import { plugins } from './config.json'
import { Artifact } from './src/services/artifact.ts'
import { Plugin } from './src/services/plugin.ts'

await spinner('download-plugins-from-github-artifact', async () => {
  await Artifact.download([
    {
      artifact: 'plugins.zip',
      path: 'overlays/minecraft-main/plugins'
    }
  ])
})

await spinner('download-plugins', async () => {
  await Plugin.download({
    path: 'overlays/minecraft-main/plugins',
    plugins
  })
})

export default defineConfig({
  clean: true,
  entry: ['src/index.ts'],
  outDir: 'dist',
  env: {
    DOTENV_PUBLIC_KEYS: await readFileContent(
      `${directory.root}/envs/${secrets.ENVIRONMENT}/.env`
    )
  },
  format: 'esm',
  minify: true,
  shims: true,
  noExternal: [/.*/],
  target: 'esnext'
})
