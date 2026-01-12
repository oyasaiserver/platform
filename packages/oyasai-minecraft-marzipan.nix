{ oyasaiPurpur, plugin-registry }:

oyasaiPurpur rec {
  name = "oyasai-minecraft-marzipan";
  version = "1.21.8";

  directory = "local";

  plugins = with (plugin-registry.forVersion version); [
    essentialsx
    fastasyncworldedit
    plugmanx
    oyasaipets
  ];
}
