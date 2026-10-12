---
title: "Anamorph Voxel — アナモルフィックボクセルアート生成"
category: tool
status: active
owner: marzipan99
source_of_truth: "https://github.com/marzipan99/anamorph-voxel"
related_paths: []
last_validated: "2026-05-20"
agent_task: null
---

# Anamorph Voxel

特定の角度から見たときだけ正しい画像に見える「アナモルフィックアート」の
MagicaVoxel用ボクセルデータ（`.vox`）を生成するブラウザツール。

## 使用方法

1. `index.html` をブラウザで開く（サーバー不要）
2. 元画像（PNG）をアップロード
3. 視点角度・奥行き・解像度を設定
4. `.vox` ファイルをダウンロード → MagicaVoxelでインポート

## アルゴリズム

1. **クロススパン計算**: 各ピクセルの台形状スパンを視点角から計算（`computeCrossSpans`）
2. **台形ボクセル配置**: 奥行き方向に台形状にボクセルを積む（`generateTrapezoidVoxels`）
3. **4階調グレースケール**: 輝度に応じて4段階（48/112/176/240）のグレーパレット

## 出力フォーマット（MagicaVoxel .vox）

```
"VOX " + version(4B LE 150) + MAIN chunk
  → SIZE chunk (x,y,z)
  → XYZI chunk (ボクセル座標+パレットindex)
  → RGBA chunk (パレット定義: 256色)
```

## 技術仕様

- Three.js InstancedMesh による3Dプレビュー（CDN）
- Canvas API でPNG画像デコード
- サーバー・Python不要のブラウザ完結動作
