---
title: "CityGML Converter — CityGML→GLBコンバーター"
category: tool
status: active
owner: marzipan99
source_of_truth: "https://github.com/marzipan99/citygml-converter"
related_paths: []
last_validated: "2026-05-20"
agent_task: null
---

# CityGML Converter

PLATEAU CityGML（EPSG:6697, JGD2011）の3D建物データを
glTF 2.0バイナリ形式（`.glb`）に変換するブラウザツール。

## 使用方法

### ブラウザ版（サーバー不要）

1. `index.html` をブラウザで開く
2. GMLファイル（複数可）を選択
3. 「変換」ボタンをクリック → Three.jsで3Dプレビュー表示
4. GLBファイルをダウンロード（Blender・three.js等で利用可能）

### Python版（高機能・テクスチャ対応）

```bash
pip install -r requirements.txt
python citygml_to_gltf.py input.gml -o output
# → output_textured.glb, output_notexture.glb

python citygml_to_schem.py input.gml -o output
# → output.schem（WorldEdit形式）
```

### FastAPI版（Webサービス）

```bash
pip install -r requirements.txt
python api.py  # http://localhost:8080
```

### Docker

```bash
docker build -t citygml-converter .
docker run -p 8080:8080 citygml-converter
```

## 座標変換

EPSG:6697（地理座標）→ ENU（East-North-Up ローカル直交座標）変換:

1. `geo_to_ecef(lat, lon, h)` → ECEF（地球中心直交座標, m）
2. `make_enu_basis(lat0, lon0)` → ENU基底ベクトル
3. `geo_to_enu(lat, lon, h)` → ローカルENU座標（m）

データ範囲の中心点をENU原点として全頂点を変換するため、
GLB内では浮動小数点精度が保たれる。

## 技術仕様

- **ブラウザ版**: DOMParser + Fan triangulation + DataView/ArrayBufferでGLB直接生成
- **Python版**: lxml + GLB binary（struct.pack）
- **三角形分割**: Fan triangulation（凸ポリゴン前提）
- **出力**: glTF 2.0バイナリ（GLB）、flat greyマテリアル

## データ取得先

PLATEAUデータ（無償）: [国土交通省G空間情報センター](https://www.geospatial.jp/ckan/dataset/plateau)
