{ oyasaiPurpur, oyasai-plugin-registry }:

oyasaiPurpur rec {
  name = "oyasai-minecraft-minimal";
  version = "1.21.8";

  directory = "local";

  # see packages/oyasai-plugins-registry/data.json
  plugins = with (oyasai-plugin-registry.forVersion version); [
    essentialsx
    fastasyncworldedit
    plugmanx
  ];
}
