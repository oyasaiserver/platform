import { envAwareConfig, expandConfig } from './config.ts'
import { SpigetId } from './spiget-id.ts'

type Plugins = Readonly<{
  modrinthProjects: string[]
  spigetIds: number[]
  urls: string[]
}>

const local: Plugins = {
  modrinthProjects: [
    'bkcommonlib',
    'decentholograms',
    'essentialsx',
    'essentialsx-chat-module',
    'essentialsx-spawn',
    'fastasyncworldedit',
    'luckperms',
    'multiverse-core',
    'multiverse-portals',
    'placeholderapi',
    'plugmanx',
    'tab-was-taken',
    'terra',
    'veinminer',
    'viaversion',
    'worldguard'
  ],
  spigetIds: [
    SpigetId.VENTURE_CHAT,
    SpigetId.PARTICLE_HATS,
    SpigetId.PROTOCOL_LIB,
    SpigetId.ADVANCED_BAN,
    SpigetId.SIGN_SHOP,
    SpigetId.MY_PET,
    SpigetId.NUVOTIFIER,
    SpigetId.MINEPACKS,
    SpigetId.SLOT_MACHINE,
    SpigetId.MY_COMMAND,
    SpigetId.VAULT,
    SpigetId.SIMPLE_ELEVATORS,
    SpigetId.INVENTORY_SHOP,
    SpigetId.CRACKSHOT_GUNS,
    SpigetId.JOIN_COMMANDS,
    SpigetId.TNTRUN_RELOADED,
    SpigetId.GSIT,
    SpigetId.LWC,
    SpigetId.ZVOTEPARTY,
    SpigetId.SKRIPT
  ],
  urls: [
    // invalid version on modrinth
    'https://github.com/IntellectualSites/fastasyncvoxelsniper/releases/download/3.2.3/fastasyncvoxelsniper-3.2.3.jar',
    // not published on spigot/modrinth
    'https://github.com/Jikoo/OpenInv/releases/download/5.1.13/OpenInv.jar',
    // latest release is broken
    'https://github.com/f1w3/LunaChat/releases/download/v3.0.16-fix/LunaChat.jar',
    // spigot id is invalid
    'https://github.com/kennytv/WorldEditSUI/releases/download/1.7.4/WorldEditSUI-1.7.4.jar',
    // spiget id is invalid
    'https://github.com/PryPurity/WorldBorder/releases/download/v2.1.5/WorldBorder.jar',
    // okocraft fork
    'https://github.com/okocraft/ImageOnMap/releases/download/5.1.1/ImageOnMap-5.1.1.jar',
    // not on spigot/modrinth
    'https://repo.codemc.io/repository/maven-public/me/filoghost/chestcommands/chestcommands-plugin/4.0.5/chestcommands-plugin-4.0.5.jar'
  ]
}

const development: Plugins = expandConfig(local, {
  modrinthProjects: ['coreprotect'],
  urls: [
    // always use the latest build
    'https://download.geysermc.org/v2/projects/floodgate/versions/latest/builds/latest/downloads/spigot',
    'https://download.geysermc.org/v2/projects/geyser/versions/latest/builds/latest/downloads/spigot'
  ]
})

export const production: Plugins = expandConfig(development, {
  modrinthProjects: ['discordsrv', 'bluemap']
})

export const plugins: Plugins = envAwareConfig({ local, development, production })
