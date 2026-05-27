{ inputs, buildGo126Module }:

buildGo126Module {
  pname = "mc-monitor";
  version = "0.16.5";
  src = inputs.mc-monitor;
  vendorHash = "sha256-Zc1KpKFQq4Q+eKj3V1d6uC4RQm7R4fd1XKqAwuqsEWk=";

  meta.mainProgram = "mc-monitor";
}
