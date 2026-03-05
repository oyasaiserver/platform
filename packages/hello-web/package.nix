{
  lib,
  static-web-server,
  writeShellApplication,
}:
writeShellApplication {
  name = "hello-web";
  runtimeInputs = [ static-web-server ];
  text = ''
    exec static-web-server \
      --health \
      --compression false \
      --root ${./www} \
      --port 8000
  '';
}
