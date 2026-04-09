{ ... }:
{
  perSystem =
    { config, ... }:
    {
      config.codegen = {
        enable = true;
        root = ../../.;
        files =
          let
            inherit (config.oyasai.scope) gradle-wrapper cdktf-providers;
          in
          {
            "gradle/wrapper".source = "${gradle-wrapper}/gradle/wrapper/";
            "gradlew".source = "${gradle-wrapper}/gradlew";
            "packages/cdktf-providers/gen".source = "${cdktf-providers}/providers/";
          };
      };
    };
}
