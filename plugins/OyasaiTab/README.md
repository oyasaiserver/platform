# OyasaiTab

OyasaiTab replaces the production parts of TAB with native Paper/Bukkit APIs:
header/footer, tab names, tab sorting, nametag prefixes, and the ping objective.

Before enabling it alongside TAB, disable TAB's overlapping features in
`plugins/TAB/config.yml`:

```yaml
header-footer:
  enabled: false
tablist-name-formatting:
  enabled: false
scoreboard-teams:
  enabled: false
playerlist-objective:
  enabled: false
```

Leave TAB installed until the Velocity/global player list replacement is ready.
