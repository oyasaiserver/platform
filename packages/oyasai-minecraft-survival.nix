{ oyasaiPurpur, oyasai-plugin-registry }:

oyasaiPurpur rec {
  name = "oyasai-minecraft-survival";
  version = "26.3";

  properties = {
    # keep-sorted start
    difficulty = "hard";
    enable-rcon = true;
    online-mode = false; # handled by velocity
    white-list = false; # 26.3 changed the default to true
    # keep-sorted end
  };

  paperConfig = {
    proxies.velocity = {
      enabled = true;
      online-mode = true;
    };
  };

  plugins = with oyasai-plugin-registry.forPlatform "paper" version; [
    # keep-sorted start
    clickmobs
    oyasaichat
    plugmanx
    survivalharvest
    survivalpull
    survivalspawnlimit
    veinminer
    # keep-sorted end
  ];
}
