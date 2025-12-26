import { downloadPlugins } from '@oyasaiserver/plugins/download'
import { readEnvironment } from '@oyasaiserver/secrets/environment'
import { glob, rm } from 'node:fs/promises'
import type { Environment } from '@oyasaiserver/secrets/environment'
import { type RegistryId } from '@oyasaiserver/plugins/registry'

const local: RegistryId[] = [
  'essentialsx',
  'fastasyncworldedit',
  'luckperms',
  'plugmanx',
  'protocollib',
  'vault',
  'nuvotifier',
  'vertex'
]

const development: RegistryId[] = local.concat(
  'bkcommonlib',
  'coreprotect',
  'decentholograms',
  'essentialsxchat',
  'essentialsxspawn',
  'fastasyncvoxelsniper',
  'multiversecore',
  'multiverseprotals',
  'placeholderapi',
  'tab',
  'terra',
  'veinminer',
  'viaversion',
  'worldguard',
  'venturechat',
  'particlehats',
  'skinsrestorer',
  'protocollib',
  'advancedban',
  'signshop',
  'mypet',
  'minepacks',
  'slotmachine',
  'mycommand',
  'simpleelevator',
  'inventoryshop',
  'crackshotguns',
  'joincommands',
  'tntruneloaded',
  'gsit',
  'lwc',
  'skript',
  'zvoteparty',
  'floodgate',
  'geyser',
  'openinv',
  'lunachat',
  'worldeditsui',
  'worldborder',
  'imageonmap',
  'chestcommands',
  'arceon',
  'ezedits',
  'oyasaivehicles',
  'tokenmanager',
  'dynamicprofile',
  'oyasaiadmintools',
  'oyasaiutilities',
  'painttools',
  'sociallikes3',
  'socialvotes',
  'tpswitch',
  'vertex',
  'pvparena',
  'oyasaipets'
)

const production: RegistryId[] = development.concat('discordsrv', 'bluemap')

const plugins: Record<Environment, readonly RegistryId[]> = {
  local,
  development,
  production
}

if (import.meta.main) {
  const environment = readEnvironment()
  const dir = 'plugins'

  for await (const file of glob(`${dir}/*.jar`)) {
    await rm(file)
  }

  await downloadPlugins(dir, plugins[environment])
}
