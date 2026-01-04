{ oyasaiPapermc }:

oyasaiPapermc rec {
  name = "minecraft-main";
  version = "1.21.8";

  plugins = {
    local = [
      "essentialsx"
      "fastasyncworldedit"
      "luckperms"
      "plugmanx"
      "protocollib"
      "vault"
      "nuvotifier"
      "vertex"
    ];
    development = plugins.local ++ [ "b" ];
    production = plugins.development ++ [ "c" ];
  };
}
