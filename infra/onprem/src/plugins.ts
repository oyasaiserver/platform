import { readdirSync } from 'node:fs'
import { join } from 'node:path'
import { directory } from '@oyasaiserver/lib/directory'

const versions = {
  essentials: '2.21.1'
} as const

export const plugins = [
  `https://github.com/EssentialsX/Essentials/releases/download/${versions.essentials}/EssentialsX-${versions.essentials}.jar`,
  `https://github.com/EssentialsX/Essentials/releases/download/${versions.essentials}/EssentialsXChat-${versions.essentials}.jar`,
  `https://github.com/EssentialsX/Essentials/releases/download/${versions.essentials}/EssentialsXSpawn-${versions.essentials}.jar`,
  'https://github.com/Test-Account666/PlugManX/releases/download/2.4.1/PlugManX-2.4.1.jar',
  'https://github.com/dmulloy2/ProtocolLib/releases/download/5.4.0/ProtocolLib.jar',
  'https://github.com/NicoNekoDev/VoidGen/releases/download/2.2.9/VoidGen-2.2.9.jar',
  'https://github.com/DiscordSRV/DiscordSRV/releases/download/v1.29.0/DiscordSRV-Build-1.29.0.jar',
  'https://github.com/NEZNAMY/TAB/releases/download/5.2.5/TAB.v5.2.5.jar',
  'https://github.com/Multiverse/Multiverse-Core/releases/download/5.1.2/multiverse-core-5.1.2.jar',
  'https://github.com/Multiverse/Multiverse-Portals/releases/download/5.1.0/multiverse-portals-5.1.0.jar',
  'https://github.com/f1w3/LunaChat/releases/download/v3.0.16-fix/LunaChat.jar',
  'https://github.com/XZot1K/DisplayShops/releases/download/2.0/DisplayShops_2.0.1.jar',
  'https://github.com/DevLeoko/AdvancedBan/releases/download/v2.3.0/AdvancedBan-Bundle-2.3.0-RELEASE.jar',
  'https://github.com/NuVotifier/NuVotifier/releases/download/v2.7.3/nuvotifier.jar',
  'https://cdn.modrinth.com/data/FIlZB9L0/versions/GXo6GGY8/Terra-bukkit-6.6.3-BETA%2Bcc5258ce7-shaded.jar',
  'https://ci.athion.net/job/FastAsyncWorldEdit/1160/artifact/artifacts/FastAsyncWorldEdit-Paper-2.13.2-SNAPSHOT-1160.jar',
  'https://dev.bukkit.org/projects/worldguard/files/6643567/download',
  'https://download.geysermc.org/v2/projects/floodgate/versions/latest/builds/latest/downloads/spigot',
  'https://download.geysermc.org/v2/projects/geyser/versions/latest/builds/latest/downloads/spigot',
  'https://download.luckperms.net/1594/bukkit/loader/LuckPerms-Bukkit-5.5.9.jar',
  'https://hangarcdn.papermc.io/plugins/ViaVersion/ViaVersion/versions/5.4.2/PAPER/ViaVersion-5.4.2.jar'
] as const

export const staticPugins = readdirSync(
  join(directory.root, 'infra/onprem/assets/minecraft-main/plugins')
).filter(file => file.endsWith('.jar'))

export const customPlugins = readdirSync(join(directory.root, 'plugins')).map(
  plugin => `${plugin}*.jar`
)
