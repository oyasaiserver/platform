# anamorph-voxel

Python script that generates trapezoidal anamorphic MagicaVoxel (.vox) files from grayscale PNG images.

The output appears distorted from most viewing angles but resolves into a recognizable portrait when viewed from one specific angle.

## Features

- Pure Python 3.9+ — no third-party dependencies
- Built-in minimal PNG decoder
- Single-portrait or two-portrait (front + back depth) modes
- Outputs binary `.vox` files compatible with MagicaVoxel

## Usage

```bash
python generate_trapezoid_vox.py front.png -o output.vox
python generate_trapezoid_vox.py front.png back.png -o output.vox
```

## License

MIT
