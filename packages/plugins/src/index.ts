import { type PluginDefinition, registry } from './registry.ts'

const local: PluginDefinition[] = [
  registry.essentialsx,
  registry.fastasyncworldedit,
  registry.luckperms,
  registry.plugmanx,
  registry.protocollib,
  registry.vault,
  registry.nuvotifier
]

const development: PluginDefinition[] = local.concat([
  registry.bkcommonlib,
  registry.coreprotect,
  registry.decentholograms,
  registry.essentialsxchat,
  registry.essentialsxspawn,
  registry.fastasyncvoxelsniper,
  registry.multiversecore,
  registry.multiverseprotals,
  registry.placeholderapi,
  registry.tab,
  registry.terra,
  registry.veinminer,
  registry.viaversion,
  registry.worldguard,
  registry.venturechat,
  registry.particlehats,
  registry.protocollib,
  registry.advancedban,
  registry.signshop,
  registry.mypet,
  registry.minepacks,
  registry.slotmachine,
  registry.mycommand,
  registry.simpleelevator,
  registry.inventoryshop,
  registry.crackshotguns,
  registry.joincommands,
  registry.tntruneloaded,
  registry.gsit,
  registry.lwc,
  registry.skript,
  registry.zvoteparty,
  registry.floodgate,
  registry.geyser,
  registry.openinv,
  registry.lunachat,
  registry.worldeditsui,
  registry.worldborder,
  registry.imageonmap,
  registry.chestcommands
])

const production: PluginDefinition[] = development.concat([registry.discordsrv, registry.bluemap])

export const envAwarePlugins = { local, development, production }
