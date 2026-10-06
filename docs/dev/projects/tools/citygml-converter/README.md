# citygml-converter

A collection of Python scripts to convert MLIT PLATEAU CityGML files to various 3D formats.

## Features

- `citygml_to_gltf.py` — LOD2 geometry → binary glTF 2.0 (.glb), textured and untextured variants
- `citygml_to_schem.py` — CityGML → Minecraft Schematic (.schem)
- `plateau_citygml_to_mesh.py` — CityGML → mesh with JGD2011 (EPSG:6697) coordinate transformation

## Requirements

```bash
pip install lxml numpy mcschematic mapbox-earcut
```

## Usage

```bash
python citygml_to_gltf.py <file.gml> -o output
python citygml_to_schem.py <file.gml> -o output.schem
python plateau_citygml_to_mesh.py <file.gml> -o output
```

## Data Source

PLATEAU 2022/2023 datasets are available at  
<https://www.geospatial.jp/ckan/dataset/plateau>

## License

MIT
