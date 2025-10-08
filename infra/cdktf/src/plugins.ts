import { expandObject } from './object.ts'
import { modrinth, spiget } from './plugin-ids.ts'

type Plugins = Readonly<{
  modrinthProjects: string[]
  spigetIds: number[]
  urls: string[]
}>

const local: Plugins = {
  modrinthProjects: [
    modrinth.essentialsx,
    modrinth.fastasyncworldedit,
    modrinth.luckperms,
    modrinth.plugmanx
  ],
  spigetIds: [spiget.protocolLib, spiget.vault, spiget.nuvotifier],
  urls: []
}

const development: Plugins = expandObject(local, {
  modrinthProjects: [
    modrinth.bkcommonlib,
    modrinth.coreprotect,
    modrinth.decentholograms,
    modrinth.essentialsxChatModule,
    modrinth.essentialsxSpawn,
    modrinth.multiverseCore,
    modrinth.multiversePortals,
    modrinth.placeholderapi,
    modrinth.tabWasTaken,
    modrinth.terra,
    modrinth.veinminer,
    modrinth.viaversion,
    modrinth.worldguard
  ],
  spigetIds: [
    spiget.ventureChat,
    spiget.particleHats,
    spiget.protocolLib,
    spiget.advancedBan,
    spiget.signShop,
    spiget.myPet,
    spiget.minepacks,
    spiget.slotMachine,
    spiget.myCommand,
    spiget.simpleElevator,
    spiget.inventoryShop,
    spiget.crackshotGuns,
    spiget.joinCommands,
    spiget.tntrunReloaded,
    spiget.gsit,
    spiget.lwc,
    spiget.skript,
    spiget.zVoteParty
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
  modrinthProjects: [modrinth.discordsrv, modrinth.bluemap]
})

export const envAwarePlugins = { local, development, production }
