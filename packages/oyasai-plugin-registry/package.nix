{
  package-lock2nix,
  stdenvNoCC,
  makeWrapper,
  lib,
  plugins,
  just,
  writeShellApplication,
}:

let
  data = builtins.fromJSON (builtins.readFile ./data.json);

  directory = {
    gen = "gen";
    static = "static";
  };

  mkOut = (version: id: "${directory.gen}/${version}/${id}.jar");

  update = writeShellApplication {
    name = "plugin-registry-update";
    text = ''
      rm -rf ${directory.gen}
    ''
    + lib.concatMapAttrsStringSep "\n" (
      version: entries:
      lib.concatMapAttrsStringSep "\n" (
        id: definition:
        let
          out = mkOut version id;
        in
        ''
          mkdir -p ${builtins.dirOf out}
        ''
        + (
          if definition.type == "local" then
            "cp ${plugins.${id}}/${definition.name} ${out}"
          else if definition.type == "static" then
            "cp ${directory.static}/${definition.name} ${out}"
          else
            "${final}/bin/plugin-registry-download-helper ${
              lib.concatMapAttrsStringSep " " (k: v: " --${k} ${toString v}") definition
            } --out ${out} --version ${version}"
        )
      ) entries
    ) data;
  };

  final = package-lock2nix.mkNpmModule {
    src = ./.;

    passthru = {
      update = stdenvNoCC.mkDerivation {
        name = "plugin-registry-update";
        src = ./.;

        installPhase = ''
          mkdir -p $out/bin
          cp ${lib.getExe update} $out/bin/plugin-registry-update
        '';
      };

      forVersion = (version: (lib.mapAttrs (id: _: "${final}/${mkOut version id}") data.${version}));
    };
  };
in
final
