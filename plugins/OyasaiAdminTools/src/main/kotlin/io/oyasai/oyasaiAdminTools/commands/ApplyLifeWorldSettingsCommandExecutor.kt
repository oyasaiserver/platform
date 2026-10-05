package io.oyasai.oyasaiAdminTools.commands

import org.bukkit.Bukkit
import org.bukkit.command.Command
import org.bukkit.command.CommandExecutor
import org.bukkit.command.CommandSender

object ApplyLifeWorldSettingsCommandExecutor : CommandExecutor {
  override fun onCommand(
      sender: CommandSender,
      command: Command,
      label: String,
      args: Array<out String>,
  ): Boolean {
    if (!sender.hasPermission("oyasai.admintools.applylifeworldsettings")) {
      sender.sendMessage("§cこのコマンドを使用する権限がありません。")
      return true
    }
    if (args.isEmpty()) return false

    val target = args.joinToString(" ")
    if (Bukkit.getWorld(target) == null) {
      sender.sendMessage("§cワールド '$target' が見つかりません。")
      return true
    }

    sender.sendMessage("§e${target} に lifeworld と同じ基本設定を適用します。")
    val commands =
        listOf(
            "mv modify ${target} set adjust-spawn true",
            "mv modify ${target} set allow-advancement-grant true",
            "mv modify ${target} set allow-flight true",
            "mv modify ${target} set allow-weather true",
            "mv modify ${target} set anchor-respawn true",
            "mv modify ${target} set auto-heal true",
            "mv modify ${target} set auto-load true",
            "mv modify ${target} set bed-respawn true",
            "mv modify ${target} set difficulty normal",
            "mv modify ${target} set gamemode survival",
            "mv modify ${target} set hidden false",
            "mv modify ${target} set hunger true",
            "mv modify ${target} set keep-spawn-in-memory true",
            "mv modify ${target} set player-limit -1",
            "mv modify ${target} set portal-form all",
            "mv modify ${target} set pvp false",
            "mv modify ${target} set scale 1.0",
            "mv entity-spawn-config modify ${target} monster set spawn false",
            "mv entity-spawn-config modify ${target} animal set spawn true",
            "mv entity-spawn-config modify ${target} water_animal set spawn true",
            "mv entity-spawn-config modify ${target} water_ambient set spawn true",
            "mv entity-spawn-config modify ${target} water_underground_creature set spawn true",
            "mv entity-spawn-config modify ${target} ambient set spawn true",
            "mv entity-spawn-config modify ${target} axolotl set spawn true",
            "mv entity-spawn-config modify ${target} misc set spawn true",
            "mv gamerule set minecraft:spawn_wandering_traders true ${target}",
            "mv gamerule set minecraft:block_drops true ${target}",
            "mv gamerule set minecraft:reduced_debug_info false ${target}",
            "mv gamerule set minecraft:show_death_messages true ${target}",
            "mv gamerule set minecraft:spawn_monsters true ${target}",
            "mv gamerule set minecraft:spawner_blocks_work true ${target}",
            "mv gamerule set minecraft:tnt_explodes true ${target}",
            "mv gamerule set minecraft:player_movement_check true ${target}",
            "mv gamerule set minecraft:immediate_respawn false ${target}",
            "mv gamerule set minecraft:block_explosion_drop_decay true ${target}",
            "mv gamerule set minecraft:spread_vines true ${target}",
            "mv gamerule set minecraft:max_entity_cramming 24 ${target}",
            "mv gamerule set minecraft:forgive_dead_players true ${target}",
            "mv gamerule set minecraft:fall_damage true ${target}",
            "mv gamerule set minecraft:send_command_feedback false ${target}",
            "mv gamerule set minecraft:global_sound_events true ${target}",
            "mv gamerule set minecraft:elytra_movement_check true ${target}",
            "mv gamerule set minecraft:fire_spread_radius_around_player 128 ${target}",
            "mv gamerule set minecraft:freeze_damage true ${target}",
            "mv gamerule set minecraft:natural_health_regeneration true ${target}",
            "mv gamerule set minecraft:mob_explosion_drop_decay true ${target}",
            "mv gamerule set minecraft:players_nether_portal_default_delay 100000000 ${target}",
            "mv gamerule set minecraft:mob_drops true ${target}",
            "mv gamerule set minecraft:log_admin_commands true ${target}",
            "mv gamerule set minecraft:mob_griefing false ${target}",
            "mv gamerule set minecraft:pvp false ${target}",
            "mv gamerule set minecraft:spawn_mobs false ${target}",
            "mv gamerule set minecraft:spectators_generate_chunks true ${target}",
            "mv gamerule set minecraft:max_command_sequence_length 65536 ${target}",
            "mv gamerule set minecraft:players_sleeping_percentage 100 ${target}",
            "mv gamerule set minecraft:players_nether_portal_creative_delay 100000 ${target}",
            "mv gamerule set minecraft:advance_weather true ${target}",
            "mv gamerule set minecraft:max_block_modifications 32768 ${target}",
            "mv gamerule set minecraft:max_command_forks 65536 ${target}",
            "mv gamerule set minecraft:drowning_damage true ${target}",
            "mv gamerule set minecraft:show_advancement_messages false ${target}",
            "mv gamerule set minecraft:command_block_output false ${target}",
            "mv gamerule set minecraft:locator_bar false ${target}",
            "mv gamerule set minecraft:respawn_radius 10 ${target}",
            "mv gamerule set minecraft:raids true ${target}",
            "mv gamerule set minecraft:spawn_phantoms true ${target}",
            "mv gamerule set minecraft:max_snow_accumulation_height 1 ${target}",
            "mv gamerule set minecraft:limited_crafting false ${target}",
            "mv gamerule set minecraft:allow_entering_nether_using_portals false ${target}",
            "mv gamerule set minecraft:lava_source_conversion false ${target}",
            "mv gamerule set minecraft:tnt_explosion_drop_decay false ${target}",
            "mv gamerule set minecraft:keep_inventory false ${target}",
            "mv gamerule set minecraft:universal_anger false ${target}",
            "mv gamerule set minecraft:spawn_patrols true ${target}",
            "mv gamerule set minecraft:random_tick_speed 0 ${target}",
            "mv gamerule set minecraft:fire_damage true ${target}",
            "mv gamerule set minecraft:entity_drops true ${target}",
            "mv gamerule set minecraft:advance_time true ${target}",
            "mv gamerule set minecraft:command_blocks_work true ${target}",
            "mv gamerule set minecraft:spawn_wardens true ${target}",
            "mv gamerule set minecraft:water_source_conversion true ${target}",
            "mv gamerule set minecraft:projectiles_can_break_blocks true ${target}",
            "mv gamerule set minecraft:ender_pearls_vanish_on_death true ${target}",
            "rg flag __global__ other-explosion -w ${target} deny",
            "rg flag __global__ lava-fire -w ${target} deny",
            "rg flag __global__ frosted-ice-form -w ${target} deny",
            "rg flag __global__ water-flow -w ${target} deny",
            "rg flag __global__ ice-melt -w ${target} deny",
            "rg flag __global__ snow-fall -w ${target} deny",
            "rg flag __global__ fire-spread -w ${target} deny",
            "rg flag __global__ enderdragon-block-damage -w ${target} deny",
            "rg flag __global__ coral-fade -w ${target} deny",
            "rg flag __global__ wind-charge-burst -w ${target} deny",
            "rg flag __global__ mob-damage -w ${target} allow",
            "rg flag __global__ ravager-grief -w ${target} deny",
            "rg flag __global__ entity-painting-destroy -w ${target} deny",
            "rg flag __global__ ice-form -w ${target} deny",
            "rg flag __global__ wither-damage -w ${target} deny",
            "rg flag __global__ enderman-grief -w ${target} deny",
            "rg flag __global__ mob-spawning -w ${target} allow",
            "rg flag __global__ crop-growth -w ${target} deny",
            "rg flag __global__ moisture-change -w ${target} allow",
            "rg flag __global__ soil-dry -w ${target} allow",
            "rg flag __global__ vine-growth -w ${target} deny",
            "rg flag __global__ fall-damage -w ${target} allow",
            "rg flag __global__ snow-melt -w ${target} deny",
            "rg flag __global__ frosted-ice-melt -w ${target} deny",
            "rg flag __global__ tnt -w ${target} deny",
            "rg flag __global__ entity-item-frame-destroy -w ${target} deny",
            "rg save -w ${target}",
        )
    val consoleSender = Bukkit.getConsoleSender()
    commands.forEach { Bukkit.dispatchCommand(consoleSender, it) }
    sender.sendMessage("§a${target} に lifeworld の基本設定を適用しました。")
    return true
  }
}
