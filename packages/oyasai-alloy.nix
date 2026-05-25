{
  lib,
  grafana-alloy,
  oyasaiDockerTools,
  stdenv,
  writeTextFile,
}:

let
  alloyConfig = writeTextFile {
    name = "config.alloy";
    text = ''
      // Discover all Docker containers via the Docker socket.
      discovery.docker "all" {
        host = "unix:///var/run/docker.sock"
      }

      // Relabel: expose container name and log stream as Loki labels.
      discovery.relabel "containers" {
        targets = discovery.docker.all.targets

        rule {
          source_labels = ["__meta_docker_container_name"]
          regex         = "/(.*)"
          target_label  = "container"
        }

        rule {
          source_labels = ["__meta_docker_container_log_stream"]
          target_label  = "stream"
        }
      }

      // Tail logs from Docker containers and forward to Loki.
      loki.source.docker "all" {
        host       = "unix:///var/run/docker.sock"
        targets    = discovery.relabel.containers.output
        forward_to = [loki.write.default.receiver]
      }

      loki.write "default" {
        endpoint {
          url = "http://loki:3100/loki/api/v1/push"
        }
      }
    '';
  };
in
lib.optionalAttrs stdenv.hostPlatform.isLinux {
  docker = oyasaiDockerTools.buildLayeredImage {
    name = "oyasai-alloy";
    config = {
      Cmd = [
        "${grafana-alloy}/bin/alloy"
        "run"
        "${alloyConfig}"
      ];
    };
  };
}
