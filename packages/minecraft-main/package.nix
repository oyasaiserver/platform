{ oyasaiPurpur, plugin-registry }:

oyasaiPurpur rec {
  name = "minecraft-main";
  version = "1.21.8";

  plugins = with (plugin-registry.forVersion version); [
    essentialsx
    fastasyncworldedit
    luckperms
    plugmanx
    protocollib
    vault
    nuvotifier
    vertex
  ];
}
