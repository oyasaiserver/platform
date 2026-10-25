---
record_type: project
source_of_truth:
  - packages/oyasai-plugin-registry/registry.json
  - packages/oyasai-plugin-registry/lock.json
  - nix/oyasai-purpur.nix
related_paths:
  - packages/oyasai-minecraft-main.nix
  - packages/oyasai-minecraft-axiom.nix
  - packages/oyasai-minecraft-lobby.nix
---

# spark

サーバーの負荷を調査する外部プラグイン。公式配布の Bukkit 版を registry の URL と SHA-256 で固定する。Modrinth の spark は Paper 版を配布していない。

Bukkit 版は Adventure を独自の名前空間に同梱する。Purpur の起動時に `paper.preferSparkPlugin=true` を指定し、導入した spark を同梱版より優先する。プラグインが読み込めなければ Paper は同梱版に戻る。

## 判断の記録

- 2026-10-14: 同梱 spark 1.10.152 の `TextComponent.Builder.build(): BuildableComponent` 呼び出しは Adventure 5.1.1 と ABI が合わないため、独立した Adventure を持つ Bukkit 版を採用する。Purpur や他のプラグインのバージョンは変更しない。
- 公式 CI のビルド URL に固定し、配布物の再現性を保つ。spark の更新時は `registry.json` のビルド番号・jar 名を更新し、lock を再生成する。

参照: [公式配布](https://spark.lucko.me/download)、[Bukkit 版の依存と relocation](https://github.com/lucko/spark/blob/master/spark-bukkit/build.gradle)、[Paper の優先設定](https://docs.papermc.io/paper/profiling/)。
