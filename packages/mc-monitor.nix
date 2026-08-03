{ inputs, buildGo126Module }:

buildGo126Module {
  pname = "mc-monitor";
  version = "0.17.0";
  src = inputs.mc-monitor;
  vendorHash = "sha256-FBoyQ3w34FJDVzTPmnaQah1IAPcR5aCVThv1IQodFWk=";

  meta.mainProgram = "mc-monitor";
}
