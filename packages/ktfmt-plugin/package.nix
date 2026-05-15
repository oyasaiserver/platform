{ runCommand, ktfmt }:
  runCommand "ktfmt-plugin" {} ''
    mkdir -p $out/share
    cp ${ktfmt}/share/ktfmt/ktfmt.jar $out/share/ktfmt.jar
  ''
