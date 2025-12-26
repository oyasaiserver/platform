{ flake-parts-lib, ... }:
{
  options.perSystem = flake-parts-lib.mkPerSystemOption (
    { pkgs, ... }:
    {
      devShells.default = pkgs.mkShell {
        packages = with pkgs; [
          nodejs_24
          javaPackages.compiler.temurin-bin.jdk-25
          terraform
        ];
      };
    }
  );
}
