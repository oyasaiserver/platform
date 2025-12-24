{ flake-parts-lib, ... }:
{
  options.perSystem = flake-parts-lib.mkPerSystemOption (
    { pkgs, config, ... }:
    {
      devShells.default = pkgs.mkShell {
        name = "anterior-npm-devshell";
        packages = with pkgs; [
          nodejs_24
          javaPackages.compiler.temurin-bin.jdk-25
          terraform
        ];
      };
    }
  );
}
