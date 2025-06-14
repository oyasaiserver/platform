import { cp } from 'node:fs/promises'
import { writeJsonFile } from '@oyasaiserver/lib/fs'
import { secrets } from '@oyasaiserver/lib/secrets'
import { UpnpClient } from '@oyasaiserver/lib/upnp/upnp-client'
import { spinner } from 'zx'
import { clean, plugins } from '../config.json'
import { Artifact } from './services/artifact.ts'
import { Cleaner } from './services/cleaner.ts'
import { DockerCompose } from './services/docker-compose.ts'
import { File } from './services/file.ts'
import { Overlays } from './services/overlays.ts'
import { Plugin } from './services/plugin.ts'

await spinner('docker-compose-down', async () => {
  await DockerCompose.down(secrets.ENVIRONMENT)
})

await spinner('backup-clean-and-restore', async () => {
  // const backup = await Backup.create(
  //   `${environment}/minecraft-main/worlds`,
  //   `${environment}/minecraft-main/.backups`
  // )
  // await backup?.removeStale()
  await Cleaner.clean({
    dir: `${secrets.ENVIRONMENT}/minecraft-main`,
    except: clean.except
  })
  // await backup?.restore()
})

await spinner('download-plugins-from-github-artifact', async () => {
  await Artifact.download([
    {
      artifact: 'plugins.zip',
      path: `${secrets.ENVIRONMENT}/minecraft-main/plugins`
    }
  ])
})

await spinner('download-plugins', async () => {
  await Plugin.download({
    path: `${secrets.ENVIRONMENT}/minecraft-main/plugins`,
    plugins
  })
})

await spinner('apply-overlays', async () => {
  await Overlays.apply(`${__dirname}/../overlays`, secrets.ENVIRONMENT)
})

await spinner('clone-compose-yaml', async () => {
  await cp(`${__dirname}/../compose.yaml`, 'compose.yaml')
})

await spinner('clone-env-file', async () => {
  await writeJsonFile(`${secrets.ENVIRONMENT}/.env.json`, secrets)
})

await spinner('docker-compose-up', async () => {
  await DockerCompose.up(secrets.ENVIRONMENT)
})

await spinner('upnp-create-mapping', async () => {
  const client = new UpnpClient()
  await client.createMapping({
    private: 25565,
    public: 25565
  })
  client.close()
})
