{ inputs, buildGo126Module }:

buildGo126Module {
  pname = "mc-monitor";
  version = "0.16.2";
  src = inputs.mc-monitor;
  vendorHash = "sha256-qS6on5v+yR6JbfedB2QRfm7+hEEMPB0QdIldAiJQnAI=";

  meta.mainProgram = "mc-monitor";
}
