{ inputs, buildGo126Module }:

buildGo126Module {
  pname = "mc-monitor";
  version = "0.17.1";
  src = inputs.mc-monitor;
  vendorHash = "sha256-4Cxt8S8jFp/d2G/S5vi0gZBVBTXVHxh+JoQSdTkToO4=";

  meta.mainProgram = "mc-monitor";
}
