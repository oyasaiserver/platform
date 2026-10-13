{
  package-lock2nix,
  lib,
  stdenv,
  oyasaiDockerTools,
  nodejs,
  git,
  cacert,
  caddy,
  coreutils,
  bash,
  util-linux,
  autoPatchelfHook,
  zlib,
  makeWrapper,
}:
let
  cpu = if stdenv.hostPlatform.isAarch64 then "arm64" else "x64";
  vips = "node_modules/@img/sharp-libvips-linux-${cpu}";
  nativePackages = [
    "node_modules/@astrojs/compiler-binding-linux-${cpu}-gnu"
    "node_modules/@bruits/satteri-linux-${cpu}-gnu"
    "node_modules/@rolldown/binding-linux-${cpu}-gnu"
    "node_modules/lightningcss-linux-${cpu}-gnu"
    "node_modules/@pagefind/linux-${cpu}"
    vips
    "node_modules/@img/sharp-linux-${cpu}"
  ];
  runtime = [
    nodejs
    git
    cacert
    caddy
    coreutils
    bash
  ]
  ++ lib.optional stdenv.hostPlatform.isLinux util-linux;
  final = package-lock2nix.mkNpmModule {
    src = ./.;
    nativeBuildInputs = [
      makeWrapper
      git
      coreutils
    ];
    npmOverrides =
      deps: prev:
      lib.optionalAttrs stdenv.hostPlatform.isLinux (
        lib.genAttrs nativePackages (
          key:
          prev.${key}.overrideAttrs (old: {
            nativeBuildInputs = (old.nativeBuildInputs or [ ]) ++ [ autoPatchelfHook ];
            buildInputs =
              (old.buildInputs or [ ])
              ++ [
                stdenv.cc.cc.lib
                zlib
              ]
              ++ lib.optional (key == "node_modules/@img/sharp-linux-${cpu}") deps.${vips};
          })
        )
      );
    # The scope rewrites all `extends` values; restore Astro's tsconfig only here.
    postPatch = ''
      cp ${./tsconfig.json} tsconfig.json
      mkdir -p src/content/docs
      cp -r test/content/. src/content/docs/
    '';
    ASTRO_TELEMETRY_DISABLED = "1";
    preBuild = ''
      export XDG_CACHE_HOME="$TMPDIR/cache"
      export XDG_CONFIG_HOME="$TMPDIR/config"
      mkdir -p "$XDG_CACHE_HOME" "$XDG_CONFIG_HOME"
    '';
    postBuild = ''
      node scripts/check-links.mjs
      node scripts/check-search.mjs
    '';
    installPhase = ''
      runHook preInstall
      tools="$out/share/oyasai-web"
      mkdir -p "$tools" "$out/bin"
      cp -r astro.config.mjs tsconfig.json package.json Caddyfile public scripts src "$tools/"
      rm -r "$tools/src/content/docs"
      ln -s ${final.nodeModules}/node_modules "$tools/node_modules"
      test -f "$tools/node_modules/astro/bin/astro.mjs"
      printf '%s\n' "$out" > "$tools/tool-id"
      makeWrapper ${lib.getExe bash} "$out/bin/oyasai-web" \
        --add-flags "$tools/scripts/serve.sh" \
        --prefix PATH : ${lib.makeBinPath runtime} \
        --set OYASAI_WEB_TOOLS "$tools" \
        --set-default OYASAI_WEB_DATA /data \
        --set XDG_CACHE_HOME /tmp \
        --set XDG_DATA_HOME /tmp \
        --set XDG_CONFIG_HOME /tmp \
        --set ASTRO_TELEMETRY_DISABLED 1 \
        --set SSL_CERT_FILE ${cacert}/etc/ssl/certs/ca-bundle.crt \
        --set GIT_SSL_CAINFO ${cacert}/etc/ssl/certs/ca-bundle.crt
      runHook postInstall
    '';
    meta.mainProgram = "oyasai-web";
    passthru = lib.optionalAttrs stdenv.hostPlatform.isLinux {
      docker = oyasaiDockerTools.buildLayeredImage {
        inherit (final) name;
        contents = runtime;
        extraCommands = ''
          mkdir -p data tmp
          chmod 1777 tmp
        '';
        fakeRootCommands = ''
          chown 1000:1000 data
        '';
        config = {
          Cmd = [ (lib.getExe final) ];
          WorkingDir = "/data";
          User = "1000:1000";
          ExposedPorts."80/tcp" = { };
        };
      };
    };
  };
in
final
