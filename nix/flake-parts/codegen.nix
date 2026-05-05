{ ... }:
{
  perSystem =
    { config, ... }:
    {
      config.codegen = {
        enable = true;
        root = ../..;
        files =
          let
            inherit (config.oyasai.scope) gradle-wrapper oyasai-cdktf-providers gradle2nix-gradle-plugin;
          in
          {
            "gradle/wrapper".source = "${gradle-wrapper}/gradle/wrapper/";
            "gradlew".source = "${gradle-wrapper}/gradlew";
            "packages/oyasai-cdktf-providers/gen".source = "${oyasai-cdktf-providers.gen}/providers/";
            "packages/gradle2nix-gradle-plugin/gen".source = "${gradle2nix-gradle-plugin}/";
          };
      };
    };
}
