import { expandObject } from './object.ts'
import { spigetId } from './spiget-id.ts'

type Plugins = Readonly<{
  modrinthProjects: string[]
  spigetIds: number[]
  urls: string[]
}>

const local: Plugins = {
  modrinthProjects: ['essentialsx', 'fastasyncworldedit', 'luckperms', 'plugmanx'],
  spigetIds: [spigetId.protocolLib, spigetId.vault, spigetId.nuvotifier],
  urls: []
}

const development: Plugins = expandObject(local, {
  modrinthProjects: [
    'bkcommonlib',
    'coreprotect',
    'decentholograms',
    'essentialsx-chat-module',
    'essentialsx-spawn',
    'multiverse-core',
    'multiverse-portals',
    'placeholderapi',
    'tab-was-taken',
    'terra',
    'veinminer',
    'viaversion',
    'worldguard'
  ],
  spigetIds: [
    spigetId.ventureChat,
    spigetId.particleHats,
    spigetId.protocolLib,
    spigetId.advancedBan,
    spigetId.signShop,
    spigetId.myPet,
    spigetId.minepacks,
    spigetId.slotMachine,
    spigetId.myCommand,
    spigetId.simpleElevator,
    spigetId.inventoryShop,
    spigetId.crackshotGuns,
    spigetId.joinCommands,
    spigetId.tntrunReloaded,
    spigetId.gsit,
    spigetId.lwc,
    spigetId.skript,
    spigetId.zVoteParty
  ],
  urls: [
    // always use the latest build
    'https://download.geysermc.org/v2/projects/floodgate/versions/latest/builds/latest/downloads/spigot',
    'https://download.geysermc.org/v2/projects/geyser/versions/latest/builds/latest/downloads/spigot',
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
})

const production: Plugins = expandObject(development, {
  modrinthProjects: ['discordsrv', 'bluemap']
})

export const envAwarePlugins = { local, development, production }
