/**
 * minecraft-glass-worker.js
 * Offloads heavy 3D pixel-to-block mapping and NBT encoding to a background thread.
 */

class NBTWriter {
    constructor(initialSize = 1024 * 1024 * 4) {
        this.buffer = new Uint8Array(initialSize);
        this.offset = 0;
        this.textEncoder = new TextEncoder();
    }

    ensure(size) {
        if (this.offset + size > this.buffer.length) {
            const newBuf = new Uint8Array(this.buffer.length * 2);
            newBuf.set(this.buffer);
            this.buffer = newBuf;
        }
    }

    writeByte(v) { this.ensure(1); this.buffer[this.offset++] = v & 0xff; }
    writeShort(v) {
        this.ensure(2);
        this.buffer[this.offset++] = (v >> 8) & 0xff;
        this.buffer[this.offset++] = v & 0xff;
    }
    writeInt(v) {
        this.ensure(4);
        this.buffer[this.offset++] = (v >> 24) & 0xff;
        this.buffer[this.offset++] = (v >> 16) & 0xff;
        this.buffer[this.offset++] = (v >> 8) & 0xff;
        this.buffer[this.offset++] = v & 0xff;
    }

    writeString(str) {
        const bytes = this.textEncoder.encode(str);
        this.writeShort(bytes.length);
        this.ensure(bytes.length);
        this.buffer.set(bytes, this.offset);
        this.offset += bytes.length;
    }

    writeCompound(name, cb) {
        this.writeByte(10);
        if (name !== null) this.writeString(name);
        cb();
        this.writeByte(0); // END
    }

    writeTagInt(name, val) {
        this.writeByte(3);
        this.writeString(name);
        this.writeInt(val);
    }

    writeTagShort(name, val) {
        this.writeByte(2);
        this.writeString(name);
        this.writeShort(val);
    }

    writeTagByteArray(name, bytes) {
        this.writeByte(7);
        this.writeString(name);
        this.writeInt(bytes.length);
        this.ensure(bytes.length);
        this.buffer.set(bytes, this.offset);
        this.offset += bytes.length;
    }

    getBuffer() {
        return this.buffer.slice(0, this.offset);
    }
}

function encodeVarInt(val) {
    let bytes = [];
    while (true) {
        if ((val & ~0x7F) === 0) {
            bytes.push(val);
            return bytes;
        }
        bytes.push((val & 0x7F) | 0x80);
        val >>>= 7;
    }
}

const MC_COLORS = {
    "White": [249, 255, 254], "Orange": [249, 128, 29], "Magenta": [199, 78, 189],
    "Light Blue": [58, 179, 218], "Yellow": [254, 216, 61], "Lime": [128, 199, 31],
    "Pink": [243, 140, 170], "Gray": [71, 79, 82], "Light Gray": [157, 157, 151],
    "Cyan": [22, 156, 156], "Purple": [137, 50, 184], "Blue": [60, 68, 170],
    "Brown": [131, 84, 50], "Green": [94, 124, 22], "Red": [176, 46, 38],
    "Black": [29, 29, 33]
};

const MC_BLOCK_IDS = {
    "White": "minecraft:white_stained_glass", "Orange": "minecraft:orange_stained_glass",
    "Magenta": "minecraft:magenta_stained_glass", "Light Blue": "minecraft:light_blue_stained_glass",
    "Yellow": "minecraft:yellow_stained_glass", "Lime": "minecraft:lime_stained_glass",
    "Pink": "minecraft:pink_stained_glass", "Gray": "minecraft:gray_stained_glass",
    "Light Gray": "minecraft:light_gray_stained_glass", "Cyan": "minecraft:cyan_stained_glass",
    "Purple": "minecraft:purple_stained_glass", "Blue": "minecraft:blue_stained_glass",
    "Brown": "minecraft:brown_stained_glass", "Green": "minecraft:green_stained_glass",
    "Red": "minecraft:red_stained_glass", "Black": "minecraft:black_stained_glass"
};

function buildPalette(layers, bgColor = [255, 255, 255], alpha = 0.5) {
    let currentDP = new Map();
    currentDP.set(bgColor.join(','), []);
    const colorNames = Object.keys(MC_COLORS);

    for (let l = 1; l <= layers; l++) {
        // Send progress message so the UI can update
        postMessage({ type: 'progress', message: `パレット構築中: ${l}/${layers} 層目` });

        let nextDP = new Map();
        for (let [prevCStr, prevCombo] of currentDP.entries()) {
            const prevC = prevCStr.split(',').map(Number);
            for (let cName of colorNames) {
                const newGlass = MC_COLORS[cName];
                const r = newGlass[0] * alpha + prevC[0] * (1 - alpha);
                const g = newGlass[1] * alpha + prevC[1] * (1 - alpha);
                const b = newGlass[2] * alpha + prevC[2] * (1 - alpha);
                const key = [Math.round(r), Math.round(g), Math.round(b)].join(',');
                if (!nextDP.has(key)) nextDP.set(key, [...prevCombo, cName]);
            }
        }
        currentDP = nextDP;
    }

    const palette = [];
    for (let [rgbStr, combo] of currentDP.entries()) {
        palette.push({ color: rgbStr.split(',').map(Number), combo: combo });
    }
    return palette;
}

// IndexedDB helper
const DB_NAME = 'mc-glass-cache';
const STORE = 'palettes';

function openDB() {
    return new Promise((resolve, reject) => {
        const req = indexedDB.open(DB_NAME, 1);
        req.onupgradeneeded = e => e.target.result.createObjectStore(STORE);
        req.onsuccess = e => resolve(e.target.result);
        req.onerror = () => reject(req.error);
    });
}

async function getPaletteCached(layers) {
    try {
        const db = await openDB();
        const cached = await new Promise((res, rej) => {
            const tx = db.transaction(STORE, 'readonly');
            const req = tx.objectStore(STORE).get(layers);
            req.onsuccess = () => res(req.result);
            req.onerror = () => rej(req.error);
        });
        if (cached) return cached;
        postMessage({ type: 'progress', message: `パレット構築中 (${layers}層)... 初回は時間がかかります` });
        const palette = buildPalette(layers);
        // store
        const tx = db.transaction(STORE, 'readwrite');
        tx.objectStore(STORE).put(palette, layers);
        return palette;
    } catch {
        return buildPalette(layers);
    }
}

function getColorDistanceSquared(c1, c2) {
    return Math.pow(c1[0] - c2[0], 2) + Math.pow(c1[1] - c2[1], 2) + Math.pow(c1[2] - c2[2], 2);
}

function calculateLuminanceMap(pixels, width, height) {
    const lumMap = Array.from({ length: width }, () => new Int32Array(height));
    for (let x = 0; x < width; x++) {
        for (let y = 0; y < height; y++) {
            const idx = (y * width + x) * 4;
            const r = pixels[idx], g = pixels[idx + 1], b = pixels[idx + 2];
            const yVal = 0.299 * r + 0.587 * g + 0.114 * b;
            lumMap[x][y] = Math.round((yVal / 255.0) * 15);
        }
    }
    return lumMap;
}

function optimizeLightPlacement(lumMap, width, height) {
    const placementMap = Array.from({ length: width }, () => new Int32Array(height));
    const simLight = Array.from({ length: width }, () => new Int32Array(height));

    for (let target = 15; target > 0; target--) {
        for (let x = 0; x < width; x++) {
            for (let y = 0; y < height; y++) {
                if (lumMap[x][y] >= target && simLight[x][y] < lumMap[x][y]) {
                    const level = lumMap[x][y];
                    placementMap[x][y] = level;
                    const radius = level;
                    for (let dx = -radius; dx <= radius; dx++) {
                        for (let dy = -radius; dy <= radius; dy++) {
                            const dist = Math.abs(dx) + Math.abs(dy);
                            const nx = x + dx, ny = y + dy;
                            if (nx >= 0 && nx < width && ny >= 0 && ny < height && dist <= level) {
                                const arriving = level - dist;
                                if (simLight[nx][ny] < arriving) simLight[nx][ny] = arriving;
                            }
                        }
                    }
                }
            }
        }
    }
    return placementMap;
}

self.addEventListener('message', async (e) => {
    const { pixels, width, height, layers, orientation } = e.data;

    try {
        postMessage({ type: 'progress', message: 'パレット構築開始...' });
        const palette = await getPaletteCached(layers);

        postMessage({ type: 'progress', message: 'ミニLED スパース光源シミュレーション計算中...' });
        const lumMap = calculateLuminanceMap(pixels, width, height);
        const lightPlacement = optimizeLightPlacement(lumMap, width, height);

        postMessage({ type: 'progress', message: 'ブロックマッピング中...' });
        const colorCache = new Map();

        // We will send back a reconstructed preview
        const previewPixels = new Uint8Array(width * height * 4);

        let schemWidth, schemHeight, schemLength;
        if (orientation === "wall") {
            schemWidth = width;
            schemHeight = height;
            schemLength = layers * 2;
        } else {
            schemWidth = width;
            schemHeight = layers * 2;
            schemLength = height;
        }

        const totalBlocks = schemWidth * schemHeight * schemLength;
        const grid = new Int32Array(totalBlocks); // 0 = minecraft:air
        const schemPalette = { "minecraft:air": 0 };
        let paletteCounter = 1;

        function getBlockId(name) {
            if (schemPalette[name] !== undefined) return schemPalette[name];
            schemPalette[name] = paletteCounter++;
            return schemPalette[name];
        }

        // Processing row by row to potentially update progress during mapping
        for (let y = 0; y < height; y++) {
            if (y % 10 === 0) {
                postMessage({ type: 'progress', message: `ブロックマッピング中... ${(y / height * 100).toFixed(0)}%` });
            }

            for (let x = 0; x < width; x++) {
                const idx = (y * width + x) * 4;
                const target = [pixels[idx], pixels[idx + 1], pixels[idx + 2]];
                const targetKey = target.join(',');

                let bestFinalColor, bestCombo;
                if (colorCache.has(targetKey)) {
                    const c = colorCache.get(targetKey);
                    bestFinalColor = c.color; bestCombo = c.combo;
                } else {
                    let minDist = Infinity;
                    for (let p of palette) {
                        const dist = getColorDistanceSquared(target, p.color);
                        if (dist < minDist) { minDist = dist; bestFinalColor = p.color; bestCombo = p.combo; }
                    }
                    colorCache.set(targetKey, { color: bestFinalColor, combo: bestCombo });
                }

                previewPixels[idx] = bestFinalColor[0];
                previewPixels[idx + 1] = bestFinalColor[1];
                previewPixels[idx + 2] = bestFinalColor[2];
                previewPixels[idx + 3] = 255;

                for (let i = 0; i < layers; i++) {
                    const glassBlockName = MC_BLOCK_IDS[bestCombo[i]];
                    const mcGlassDepth = i * 2;
                    const mcLightDepth = i * 2 + 1;
                    let mx, my, mz;
                    let lx, ly, lz;

                    if (orientation === "wall") {
                        mx = x; my = height - 1 - y; mz = mcGlassDepth;
                        lx = x; ly = height - 1 - y; lz = mcLightDepth;
                    } else {
                        mx = x; my = mcGlassDepth; mz = y;
                        lx = x; ly = mcLightDepth; lz = y;
                    }

                    const gridIdx = (my * schemLength + mz) * schemWidth + mx;
                    grid[gridIdx] = getBlockId(glassBlockName);

                    const lightLvl = lightPlacement[x][y];
                    if (lightLvl > 0) {
                        const lightName = `minecraft:light[level=${lightLvl}]`;
                        const lGridIdx = (ly * schemLength + lz) * schemWidth + lx;
                        grid[lGridIdx] = getBlockId(lightName);
                    }
                }
            }
        }

        postMessage({ type: 'progress', message: 'NBTバイナリエンコード中...' });

        let blockDataBytes = [];
        for (let i = 0; i < totalBlocks; i++) {
            const encoded = encodeVarInt(grid[i]);
            for (let b = 0; b < encoded.length; b++) {
                blockDataBytes.push(encoded[b]);
            }
        }

        const writer = new NBTWriter();
        writer.writeCompound("Schematic", () => {
            writer.writeTagInt("Version", 2);
            writer.writeTagInt("DataVersion", 3465); // 1.20+
            writer.writeTagShort("Width", schemWidth);
            writer.writeTagShort("Height", schemHeight);
            writer.writeTagShort("Length", schemLength);
            writer.writeTagInt("PaletteMax", paletteCounter);

            writer.writeCompound("Palette", () => {
                for (let [name, id] of Object.entries(schemPalette)) {
                    writer.writeTagInt(name, id);
                }
            });

            writer.writeTagByteArray("BlockData", new Uint8Array(blockDataBytes));
        });

        postMessage({ type: 'progress', message: '圧縮中...' });
        const uncompressed = writer.getBuffer();

        // Pass back uncompressed buffer, let the main thread do the compression Blob trick 
        // since CompressionStream is more robust on main thread if missing in worker scope.
        postMessage({
            type: 'done',
            nbtBuffer: uncompressed,
            previewPixels: previewPixels,
            stats: { w: schemWidth, h: schemHeight, l: schemLength }
        });

    } catch (error) {
        postMessage({ type: 'error', error: error.message });
    }
});
