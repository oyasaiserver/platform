{ ... }: {
  perSystem = { config, ... }: {
    config.codegen = {
      enable = true;
      root = ../..;
      files =
        let
          inherit (config.oyasai.scope) gradle-wrapper oyasai-cdktf-providers gradle-plugins;
        in
        {
          "gradle/wrapper".source = "${gradle-wrapper}/gradle/wrapper/";
          "gradlew".source = "${gradle-wrapper}/gradlew";
          "packages/oyasai-cdktf-providers/gen".source = "${oyasai-cdktf-providers.gen}/providers/";
          "packages/gradle-plugins/gen".source = "${gradle-plugins}/";
        };
    };
  };
}
