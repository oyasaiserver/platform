{ inputs, buildGo126Module }:

buildGo126Module {
  pname = "mc-monitor";
  version = "0.16.8";
  src = inputs.mc-monitor;
  vendorHash = "sha256-b4CkFBGPiPqdP59sJy5zg/FP9U92JZWyXvdOqvhjxcQ=";

  meta.mainProgram = "mc-monitor";
}
