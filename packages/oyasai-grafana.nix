{
  lib,
  grafana,
  oyasaiDockerTools,
  stdenv,
  formats,
  runCommandLocal,
}:

let
  datasourceYml = (formats.yaml { }).generate "prometheus.yaml" {
    apiVersion = 1;
    datasources = [
      {
        name = "Prometheus";
        type = "prometheus";
        url = "http://prometheus:9090";
        isDefault = true;
        access = "proxy";
      }
    ];
  };

  lokiYml = (formats.yaml { }).generate "loki.yaml" {
    apiVersion = 1;
    datasources = [
      {
        name = "Loki";
        type = "loki";
        url = "http://loki:3100";
        access = "proxy";
      }
    ];
  };

  # Bake data sources into the image via provisioning directory.
  # Grafana reads this on startup and auto-configures them.
  provisioningDir = runCommandLocal "grafana-provisioning" { } ''
    mkdir -p $out/datasources
    cp ${datasourceYml} $out/datasources/prometheus.yaml
    cp ${lokiYml} $out/datasources/loki.yaml
  '';
in
lib.optionalAttrs stdenv.hostPlatform.isLinux {
  docker = oyasaiDockerTools.buildLayeredImage {
    name = "oyasai-grafana";
    config = {
      Cmd = [
        "${grafana}/bin/grafana"
        "server"
        "--homepath=${grafana}/share/grafana"
      ];
      Env = [
        "GF_PATHS_HOME=${grafana}/share/grafana"
        "GF_PATHS_PROVISIONING=${provisioningDir}"
        "GF_PATHS_DATA=/data"
        "GF_PATHS_LOGS=/data/log"
        "GF_PATHS_PLUGINS=/data/plugins"
        "GF_SERVER_HTTP_PORT=3000"
      ];
      ExposedPorts = {
        "3000/tcp" = { };
      };
    };
  };
}
