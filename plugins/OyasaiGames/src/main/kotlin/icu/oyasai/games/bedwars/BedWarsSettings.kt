package icu.oyasai.games.bedwars

import org.bukkit.configuration.ConfigurationSection

/** Keys consumed by this module, kept explicit so retained legacy data is never silent. */
internal object BedWarsSettings {
  val configKeys: Set<String> =
      setOf(
          "game-start-items",
          "mainlobby.enabled",
          "mainlobby.location",
          "mainlobby.world",
          "preventArenaFromGriefing",
          "destroy-placed-blocks-by-explosion",
          "specials.throwable-fireball.damage-thrower",
          "specials.auto-igniteable-tnt.damage-placer",
          "specials.golem.name-format",
          "specials.golem.show-name",
          "vault.enable",
          "vault.reward.kill",
          "vault.reward.win",
          "vault.reward.final-kill",
          "vault.reward.bed-destroy",
          "respawn-cooldown.enabled",
          "respawn-cooldown.time",
          "respawn.protection-enabled",
          "respawn.protection-time",
          "gived-game-start-items",
          "compass-enabled",
          "remove-unused-target-blocks",
          "allow-spectator-join",
          "spawn-resources-on-game-start",
          "use-chunk-tickets-if-available",
          "friendlyfire",
          "disable-hunger",
          "statistics.scores.kill",
          "statistics.scores.final-kill",
          "statistics.scores.bed-destroy",
          "statistics.scores.win",
          "statistics.scores.lose",
          "breakable.enabled",
          "breakable.asblacklist",
          "breakable.blocks",
          "destroy-placed-blocks-by-explosion-except",
          "reset-full-spawner-countdown-after-picking",
          "specials.teamchest.turn-all-enderchests-to-teamchests",
          "spawner-disable-merge",
          "allow-crafting",
          "specials.throwable-fireball.damage",
          "specials.throwable-fireball.incendiary",
          "specials.golem.collidable",
          "specials.golem.health",
          "specials.golem.speed",
          "specials.golem.follow-range",
          "specials.auto-igniteable-tnt.explosion-time",
          "specials.auto-igniteable-tnt.damage",
      ) + setOf("iron", "gold", "diamond", "emerald").map { "resources.$it.interval" }

  val sbaKeys: Set<String> =
      setOf(
          "npc.enabled",
          "replace-stores-with-npc",
          "shop.normal-shop.entity-name",
          "shop.upgrade-shop.entity-name",
          "chat-format.game-chat.enabled",
          "chat-format.lobby-chat.enabled",
          "games-inventory.enabled",
          "party.enabled",
          "party.leader-autojoin-autoleave",
          "party.invite-expiration-time",
          "shout.time-out",
          "generator-splitter.allowed-materials",
          "chat-format.game-chat.format",
          "chat-format.game-chat.format-spectator",
          "chat-format.game-chat.all-chat-format",
          "chat-format.game-chat.all-chat-prefix",
          "chat-format.lobby-chat.format",
          "explosion-damage",
          "tnt-fireball-jumping.detection-distance",
          "tnt-fireball-jumping.acceleration-y",
          "tnt-fireball-jumping.reduce-y",
          "tnt-fireball-jumping.launch-multiplier",
          "tnt-fireball-jumping.fall-damage",
          "give-killer-resources",
          "final-kill-lightning",
          "running-generator-drops",
          "upgrades.trap-detection-range",
          "upgrades.timer-upgrades-enabled",
          "upgrades.multiplier",
          "upgrades.show-upgrade-message",
          "floating-generator.enabled",
          "floating-generator.height",
          "floating-generator.mapping.DIAMOND",
          "floating-generator.mapping.EMERALD",
          "replace-sword-on-upgrade",
          "game-scoreboard.enabled",
          "lobby-scoreboard.enabled",
          "show-health-in-tablist",
          "show-health-under-player-name",
          "disable-item-damage",
          "block-item-drops",
          "allowed-item-drops",
          "disable-armor-inventory-movement",
          "block-players-putting-certain-items-onto-chest",
          "automatic-protection.spawner-diameter",
          "automatic-protection.team-spawn-diameter",
          "automatic-protection.store-diameter",
          "upgrades.limit.Iron",
          "upgrades.limit.Gold",
          "upgrades.limit.Sharpness",
          "upgrades.limit.Protection",
          "upgrades.limit.Efficiency",
      ) +
          setOf("teleporter", "tracker").flatMap { name ->
            setOf("enabled", "name", "material", "slot").map { "spectator.$name.$it" }
          } +
          setOf("Diamond", "Emerald").flatMap { type ->
            setOf("I", "II", "III", "IV").map { "upgrades.limit.$type-$it" } +
                setOf("II", "III", "IV").map { "upgrades.time.$type-$it" }
          } +
          setOf("Sharpness", "Prot", "Efficiency").flatMap { type ->
            setOf("I", "II", "III", "IV").map { "upgrades.prices.$type-$it" }
          }

  fun report(files: BedWarsFiles) = files.reportUnsupportedKeys(configKeys, sbaKeys)

  fun unsupported(section: ConfigurationSection, consumed: Set<String>): List<String> =
      section
          .getKeys(true)
          .filter { !section.isConfigurationSection(it) && it !in consumed }
          .sorted()
}
