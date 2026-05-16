{
  oyasaiPurpur,
  oyasai-plugin-registry,
  lib,
}:

oyasaiPurpur {
  name = "oyasai-minecraft-minimal";
  version = "1.21.10";

  properties = {
    difficulty = "peaceful";
    enable-command-block = true;
    enforce-secure-profile = false;
    max-players = 5;
    motd = "oyasai dev server";
    online-mode = false;
    spawn-protection = 0;
    view-distance = 8;
  };

  plugins = with oyasai-plugin-registry.forVersion "1.21.10"; [
    fastasyncworldedit
    citiesskymine
    oyasaimenu
    vault
    placeholderapi
  ];
}
