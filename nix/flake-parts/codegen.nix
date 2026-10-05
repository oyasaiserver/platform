{ ... }: {
  perSystem = { config, ... }: {
    config.codegen = {
      enable = true;
      root = ../..;
      files =
        let
          inherit (config.oyasai.scope) gradle-wrapper oyasai-cdktf-bindings gradle-plugins;
        in
        {
          "gradle/wrapper".source = "${gradle-wrapper}/gradle/wrapper/";
          "gradlew".source = "${gradle-wrapper}/gradlew";
          "packages/oyasai-cdktf-bindings/gen".source = "${oyasai-cdktf-bindings.gen}/";
          "packages/gradle-plugins/gen".source = "${gradle-plugins}/";
        };
    };
  };
}
