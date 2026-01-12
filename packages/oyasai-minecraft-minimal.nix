{ oyasaiPurpur, plugin-registry }:

let
  final = oyasaiPurpur rec {
    name = "oyasai-minecraft-minimal";
    version = "1.21.8";

    directory = "local";

    plugins = with (plugin-registry.forVersion version); [
      essentialsx
      fastasyncworldedit
      plugmanx
    ];
  };
in
final
