import { envAwareConfig } from './config.ts'

type Plugins = Readonly<{
  urls: string[]
  spigetIds: number[]
  modrinthProjects: string[]
}>

const basePlugins: Plugins = {
  urls: [
    'https://github.com/Jikoo/OpenInv/releases/download/5.1.13/OpenInv.jar',
    'https://github.com/okocraft/ImageOnMap/releases/download/5.1.1/ImageOnMap-5.1.1.jar',
    'https://repo.codemc.io/repository/maven-public/me/filoghost/chestcommands/chestcommands-plugin/4.0.5/chestcommands-plugin-4.0.5.jar',
    'https://download.geysermc.org/v2/projects/floodgate/versions/latest/builds/latest/downloads/spigot',
    'https://download.geysermc.org/v2/projects/geyser/versions/latest/builds/latest/downloads/spigot'
  ],
  spigetIds: [
    771, // venturechat
    1007, // particlehats
    1997, // protocollib
    8695, // advanced-ban
    10997, // signshop
    12725, // mypet
    13449, // nuvotifier
    19286, // minepacks
    22023, // slot-machine
    22272, // mycommand
    34315, // vault
    44462, // simple-elevators
    47694, // inventory-shop
    48301, // crackshot-guns
    51758, // join-commands
    53359, // tntrun-reloaded
    60726, // worldedit-sui
    62325, // gsit
    69551, // lwc
    80466, // worldborder
    114544 // skript
  ],
  modrinthProjects: [
    'placeholderapi',
    'essentialsx',
    'essentialsx-chat-module',
    'essentialsx-spawn',
    'plugmanx',
    'multiverse-core',
    'multiverse-portals',
    'viaversion',
    'fastasyncworldedit',
    'fastasyncvoxelsniper',
    'coreprotect',
    'worldguard',
    'luckperms',
    'lunachat',
    'decentholograms',
    'veinminer',
    'tab-was-taken',
    'terra',
    'bkcommonlib'
  ]
} as const

export const productionPlugins: Plugins = {
  ...basePlugins,
  modrinthProjects: basePlugins.modrinthProjects.concat('discordsrv', 'bluemap')
}

export const plugins: Plugins = envAwareConfig({
  local: basePlugins,
  development: basePlugins,
  production: productionPlugins
})
