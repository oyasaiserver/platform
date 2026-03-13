{ ... }:
{
  perSystem =
    { config, ... }:
    {
      config.codegen = {
        enable = true;
        root = ../.;
        files =
          let
            inherit (config.oyasai.scope) gradle-wrapper;
          in
          {
            "gradle/wrapper".source = "${gradle-wrapper}/gradle/wrapper/";
            "gradlew".source = "${gradle-wrapper}/gradlew";
          };
      };
    };
}
