{ oyasaiPurpur, oyasai-plugin-registry }:

oyasaiPurpur rec {
  name = "oyasai-minecraft-marzipan";
  version = "1.21.8";

  directory = "local";

  port = 8000;

  # see packages/oyasai-plugins-registry/data.json
  plugins = with (oyasai-plugin-registry.forVersion version); [
    essentialsx
    fastasyncworldedit
    plugmanx
    oyasaipets
  ];
}
