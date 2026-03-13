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
            "gradle".source = "${gradle-wrapper}/gradle/";
            "gradlew".source = "${gradle-wrapper}/gradlew";
            "gradlew.bat".source = "${gradle-wrapper}/gradlew.bat";
          };
      };
    };
}
