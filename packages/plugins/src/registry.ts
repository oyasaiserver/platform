import type { PathLike } from 'node:fs'
import { format, join } from 'node:path'

const path = {
  static: join(import.meta.dirname, '../static'),
  plugins: join(import.meta.dirname, '../../../plugins')
} as const

function toGradleBuildPath(name: string) {
  return format({
    dir: join(path.plugins, name, 'build/libs'),
    name,
    ext: '.jar'
  })
}

export type PluginDefinition = Readonly<
  | { type: 'modrinth'; slug: string }
  | { type: 'spiget'; id: number }
  | { type: 'github'; owner: string; repo: string; tag: string; name: string }
  | { type: 'local'; path: PathLike }
  | { type: 'url'; url: string }
>

export const registry = {
  bkcommonlib: { type: 'modrinth', slug: 'bkcommonlib' },
  coreprotect: { type: 'modrinth', slug: 'coreprotect' },
  decentholograms: { type: 'modrinth', slug: 'decentholograms' },
  essentialsx: { type: 'modrinth', slug: 'essentialsx' },
  essentialsxchat: { type: 'modrinth', slug: 'essentialsx-chat-module' },
  essentialsxspawn: { type: 'modrinth', slug: 'essentialsx-spawn' },
  fastasyncworldedit: { type: 'modrinth', slug: 'fastasyncworldedit' },
  fastasyncvoxelsniper: { type: 'modrinth', slug: 'fastasyncvoxelsniper' },
  multiversecore: { type: 'modrinth', slug: 'multiverse-core' },
  multiverseprotals: { type: 'modrinth', slug: 'multiverse-portals' },
  placeholderapi: { type: 'modrinth', slug: 'placeholderapi' },
  tab: { type: 'modrinth', slug: 'tab-was-taken' },
  terra: { type: 'modrinth', slug: 'terra' },
  veinminer: { type: 'modrinth', slug: 'veinminer' },
  viaversion: { type: 'modrinth', slug: 'viaversion' },
  worldguard: { type: 'modrinth', slug: 'worldguard' },
  luckperms: { type: 'modrinth', slug: 'luckperms' },
  plugmanx: { type: 'modrinth', slug: 'plugmanx' },
  discordsrv: { type: 'modrinth', slug: 'discordsrv' },
  bluemap: { type: 'modrinth', slug: 'bluemap' },

  venturechat: { type: 'spiget', id: 771 },
  particlehats: { type: 'spiget', id: 1007 },
  protocollib: { type: 'spiget', id: 1997 },
  advancedban: { type: 'spiget', id: 8695 },
  signshop: { type: 'spiget', id: 10997 },
  mypet: { type: 'spiget', id: 12725 },
  nuvotifier: { type: 'spiget', id: 13449 },
  minepacks: { type: 'spiget', id: 19286 },
  slotmachine: { type: 'spiget', id: 22023 },
  mycommand: { type: 'spiget', id: 22272 },
  vault: { type: 'spiget', id: 34315 },
  simpleelevator: { type: 'spiget', id: 44462 },
  inventoryshop: { type: 'spiget', id: 47694 },
  crackshotguns: { type: 'spiget', id: 48301 },
  joincommands: { type: 'spiget', id: 51758 },
  tntruneloaded: { type: 'spiget', id: 53359 },
  gsit: { type: 'spiget', id: 62325 },
  lwc: { type: 'spiget', id: 69551 },
  zvoteparty: { type: 'spiget', id: 95603 },
  skript: { type: 'spiget', id: 114544 },

  openinv: { type: 'github', owner: 'JiKoo', repo: 'OpenInv', tag: '5.1.14', name: 'OpenInv.jar' },
  lunachat: {
    type: 'github',
    owner: 'f1w3',
    repo: 'LunaChat',
    tag: 'v3.0.16-fix',
    name: 'LunaChat.jar'
  },
  worldeditsui: {
    type: 'github',
    owner: 'kennytv',
    repo: 'WorldEditSUI',
    tag: '1.7.4',
    name: 'WorldEditSUI-1.7.4.jar'
  },
  worldborder: {
    type: 'github',
    owner: 'PryPurity',
    repo: 'WorldBorder',
    tag: 'v2.1.5',
    name: 'WorldBorder.jar'
  },
  imageonmap: {
    type: 'github',
    owner: 'okocraft',
    repo: 'ImageOnMap',
    tag: '5.1.1',
    name: 'ImageOnMap-5.1.1.jar'
  },

  arceon: {
    type: 'local',
    path: join(path.static, 'Arceon.jar')
  },
  ezedits: {
    type: 'local',
    path: join(path.static, 'ezEdits.jar')
  },
  oyasaivehicles: {
    type: 'local',
    path: join(path.static, 'OyasaiVehicles.jar')
  },
  tokenmanager: {
    type: 'local',
    path: join(path.static, 'TokenManager.jar')
  },

  dynamicprofile: {
    type: 'local',
    path: toGradleBuildPath('DynamicProfile')
  },
  oyasaiutilities: {
    type: 'local',
    path: toGradleBuildPath('OyasaiUtilities')
  },
  painttools: {
    type: 'local',
    path: toGradleBuildPath('PaintTools')
  },
  sociallikes3: {
    type: 'local',
    path: toGradleBuildPath('SocialLikes3')
  },
  tpswitch: {
    type: 'local',
    path: toGradleBuildPath('TPswitch')
  },
  vertex: {
    type: 'local',
    path: toGradleBuildPath('Vertex')
  },

  floodgate: {
    type: 'url',
    url: 'https://download.geysermc.org/v2/projects/floodgate/versions/latest/builds/latest/downloads/spigot'
  },
  geyser: {
    type: 'url',
    url: 'https://download.geysermc.org/v2/projects/geyser/versions/latest/builds/latest/downloads/spigot'
  },
  chestcommands: {
    type: 'url',
    url: 'https://repo.codemc.io/repository/maven-public/me/filoghost/chestcommands/chestcommands-plugin/4.0.5/chestcommands-plugin-4.0.5.jar'
  }
} as const satisfies Record<string, PluginDefinition>
