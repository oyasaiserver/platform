{ inputs, buildGo126Module }:

buildGo126Module {
  pname = "mc-monitor";
  version = "0.17.1";
  src = inputs.mc-monitor;
  vendorHash = "sha256-LWkvThn08cgWRZCYN46wY0hs53FSt3HZHex+R12mkbw=";

  meta.mainProgram = "mc-monitor";
}
