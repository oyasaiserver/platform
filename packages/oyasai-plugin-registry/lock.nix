{ fetchFromModrinth, fetchFromSpigot, fetchFromGitHubRelease, fetchFromGeyser, fetchurl }:
{
  "1.21.8" = {
    bkcommonlib = fetchFromModrinth {
      slug = "bkcommonlib";
      hash = "";
    };
    venturechat = fetchFromSpigot {
      id = 1007;
      hash = "";
    };
    openinv = fetchFromGitHubRelease {
      owner = "JiKoo";
      repo = "OpenInv";
      tag = "5.1.14";
      name = "OpenInv.jar";
      hash = "";
    };
    arceon = ./static/Arceon.jar;
    floodgate = fetchFromGeyser {
      project = "floodgate";
      version = "";
      build = "";
      hash = "";
    };
    geyser = fetchFromGeyser {
      project = "geyser";
      version = "";
      build = "";
      hash = "";
    };
    chestcommands = fetchurl {
      url = "https://repo.codemc.io/repository/maven-public/me/filoghost/chestcommands/chestcommands-plugin/4.0.5/chestcommands-plugin-4.0.5.jar";
      hash = "";
    };
  };
}
