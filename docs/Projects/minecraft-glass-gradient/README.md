# Minecraft Glass Gradient & miniLED Generator

This project is a suite of Python scripts that map images into 3D Minecraft glass structures. It simulates Minecraft's alpha-blending physics to convert full-color gradients and complex pictures into stacked `.schem` blueprints.

## Key Features
- **Multi-layer Glass Simulation**: Generates 1 to 8+ layers of colored glass combinations based on the mathematical alpha-blending logic (`C_final = C_src * alpha + C_dst * (1 - alpha)`).
- **miniLED Sparse Backlighting**: Emulates a "miniLED" display by converting pixel luminance from the original image into hidden Minecraft Light Blocks. It automatically calculates Manhattan distance attenuation to sparsify backlights, preventing light bleed and creating immense contrast ratios.
- **Directional Generation**: Support for standing vertical murals (`wall`) or massive horizontal displays (`floor`).
- **Mathematical Validation Tools**: Included scripts allow for calculating RGB coverage and visualizing it via 3D scatter plot GIFs to understand color space limits.

## Files
- `minecraft_glass_layering.py`: The main script to convert any image into a multi-layered `.schem` using dynamic programming to find optimal combinations and calculating sparse lighting logic.
- `minecraft_glass_mapper.py`: Earlier fallback mapping implementation utilizing only structural color blocks without lighting integration.
- `calculate_rgb_coverage.py`: Calculates combinations and graphs the RGB coverage % of glass layered 1 to 10 deep.
- `visualize_rgb_space.py`: Renders an animated rotating 3D scatter GIF showing exactly which colors are possible internally using 8 layers.

## Usage
Run the main script via terminal, providing input, output names, block dimension limits, layers, and orientation:
```bash
python3 minecraft_glass_layering.py <input.jpg> <output_prefix> [max_size] [layers] [floor|wall]

# Example
python3 minecraft_glass_layering.py my_image.png my_output 256 8 floor
```

## Web GUI

```bash
python server.py
# Open http://localhost:5000
```

## Requirements

```bash
pip install -r requirements.txt
```

- `numpy`, `scipy`, `Pillow`, `matplotlib`, `mcschematic`, `flask`

## License

MIT
