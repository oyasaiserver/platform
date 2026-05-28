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
        uid = "prometheus";
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
        uid = "loki";
        type = "loki";
        url = "http://loki:3100";
        access = "proxy";
      }
    ];
  };

  dashboardsDir = runCommandLocal "grafana-dashboards" { } ''
    mkdir -p $out
    cp ${./oyasai-grafana-dashboard.json} $out/minecraft.json
  '';

  dashboardsProvisionerYml = (formats.yaml { }).generate "dashboards.yaml" {
    apiVersion = 1;
    providers = [
      {
        name = "oyasai";
        type = "file";
        disableDeletion = true;
        options.path = "${dashboardsDir}";
      }
    ];
  };

  # Bake data sources and dashboards into the image via provisioning directory.
  # Grafana reads this on startup and auto-configures them.
  provisioningDir = runCommandLocal "grafana-provisioning" { } ''
    mkdir -p $out/datasources $out/dashboards
    cp ${datasourceYml} $out/datasources/prometheus.yaml
    cp ${lokiYml} $out/datasources/loki.yaml
    cp ${dashboardsProvisionerYml} $out/dashboards/oyasai.yaml
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
