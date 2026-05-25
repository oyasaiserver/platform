{ inputs, buildGo126Module }:

buildGo126Module {
  pname = "mc-monitor";
  version = "0.16.5";
  src = inputs.mc-monitor;
  vendorHash = "sha256-6E/hQu65Cj/vPG+SDHMwyHQOAlcNrJ6ZqflzYI71RXU=";

  meta.mainProgram = "mc-monitor";
}
