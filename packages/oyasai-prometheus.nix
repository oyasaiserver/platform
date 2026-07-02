{
  lib,
  prometheus,
  oyasaiDockerTools,
  stdenv,
  formats,
}:

let
  prometheusYml = (formats.yaml { }).generate "prometheus.yml" {
    global = {
      scrape_interval = "15s";
      evaluation_interval = "15s";
    };
    scrape_configs = [
      {
        job_name = "minecraft";
        static_configs = [ { targets = [ "mc-monitor-exporter:8080" ]; } ];
      }
    ];
  };
in
lib.optionalAttrs stdenv.hostPlatform.isLinux {
  docker = oyasaiDockerTools.buildLayeredImage {
    name = "oyasai-prometheus";
    config = {
      Cmd = [
        "${prometheus}/bin/prometheus"
        "--config.file=${prometheusYml}"
        "--storage.tsdb.path=/data"
        "--web.console.libraries=${prometheus}/share/prometheus/console_libraries"
        "--web.console.templates=${prometheus}/share/prometheus/consoles"
      ];
      ExposedPorts = {
        "9090/tcp" = { };
      };
    };
  };
}
