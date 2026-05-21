---
title: "PLATEAU Viewer — CityGMLブラウザビューワー"
category: tool
status: active
owner: marzipan99
source_of_truth: "https://github.com/marzipan99/plateau-viewer"
related_paths: []
last_validated: "2026-05-20"
agent_task: null
---

# PLATEAU Viewer

国土交通省PLATEAUの3D都市モデル（CityGML/GML形式）をブラウザで表示するツール。
Leaflet.jsで地図上に建物フットプリントを描画する。

## 使用方法

1. `index-standalone.html` をブラウザで開く（サーバー不要）
2. GMLファイルまたはフォルダを選択
3. 地図上のメッシュ矩形をクリックするとGMLを解析して建物を表示
4. 建物をクリックするとサイドバーに属性（建物ID・高さ・階数）を表示

## データ形式

- **入力**: PLATEAU CityGML（`.gml`）— 国土交通省配布の3D都市データ
- **座標系**: EPSG:6697（JGD2011地理座標）— GML内は `[lat, lon, alt]` 順
- **ファイル命名**: `MMMMMMBB_bldg.gml`（MMMMMMはJIS X 0410 3次メッシュコード8桁）

## データ取得先

PLATEAUデータ（無償）: [国土交通省G空間情報センター](https://www.geospatial.jp/ckan/dataset/plateau)

## 技術仕様

- Leaflet.js でインタラクティブ地図表示
- `DOMParser` によるブラウザネイティブXML解析（lxmlを使用しない）
- `getByLocalName()` でnamespace非依存のGML要素取得
- メッシュコード → 緯度経度範囲変換（JIS X 0410準拠）

## 関連

- CitiesSkyMine用のCityGML変換: [citygml-converter.md](citygml-converter.md)
