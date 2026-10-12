# plateau-viewer

Minimal Flask backend + WebGL viewer for MLIT PLATEAU CityGML (LOD2) building data.

Parses GML files, reprojects coordinates from JGD2011 (EPSG:6697) to a local XZ plane, and serves tile data as JSON. The frontend renders buildings as interactive 3D geometry with click-to-select.

## Features

- Streaming tile loader — only fetches buildings visible in the current viewport
- Click a building to display its GML ID and coordinates
- Supports any PLATEAU 2022/2023 CityGML dataset
- Zero frontend build step — plain HTML + WebGL

## Requirements

```bash
pip install flask numpy
```

## Usage

```bash
# Point to your CityGML dataset
CITYGML_DIR=/path/to/26100_kyoto-shi_city_2023_citygml_1_op python server.py

# Or set the dataset folder name (searched relative to the script)
CITYGML_DATASET=my_city_2023_citygml python server.py
```

Open `http://localhost:5001` in your browser.

## Data Source

PLATEAU datasets: <https://www.geospatial.jp/ckan/dataset/plateau>

## License

MIT
