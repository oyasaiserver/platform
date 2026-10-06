import { useEffect, useRef, useState } from "react";
import { useStore } from "../store/useStore";
import { api } from "../api/client";
import type { HeatmapData } from "../types/api";

const COLORMAPS = ["viridis", "plasma", "inferno", "hot", "cool"];

// Simple colormaps: array of [r, g, b] stops (0–1)
const CMAP_DATA: Record<string, number[][]> = {
  viridis: [[0.267,0.004,0.329],[0.127,0.566,0.551],[0.993,0.906,0.144]],
  plasma:  [[0.050,0.030,0.528],[0.799,0.152,0.480],[0.940,0.975,0.131]],
  inferno: [[0.0,0.0,0.014],[0.745,0.071,0.448],[0.988,1.0,0.643]],
  hot:     [[0,0,0],[1,0,0],[1,1,0],[1,1,1]],
  cool:    [[0,1,1],[1,0,1]],
};

function applyColormap(v: number, stops: number[][]): [number, number, number] {
  const n = stops.length;
  const seg = v * (n - 1);
  const lo = Math.max(0, Math.min(n - 2, Math.floor(seg)));
  const hi = lo + 1;
  const t = seg - lo;
  return [
    (stops[lo][0] * (1 - t) + stops[hi][0] * t) * 255,
    (stops[lo][1] * (1 - t) + stops[hi][1] * t) * 255,
    (stops[lo][2] * (1 - t) + stops[hi][2] * t) * 255,
  ];
}

export function MapView() {
  const { jobId, result, selectedBlock, setSelectedBlock } = useStore();
  const [heatmap, setHeatmap] = useState<HeatmapData | null>(null);
  const [colormap, setColormap] = useState("viridis");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const blockList = result?.block_counts.slice(0, 50).map((b) => b.name) ?? [];

  useEffect(() => {
    if (!jobId || !selectedBlock) return;
    setLoading(true);
    setError(null);
    api
      .getHeatmap(jobId, selectedBlock, 512)
      .then(setHeatmap)
      .catch((e) => setError(e.message))
      .finally(() => setLoading(false));
  }, [jobId, selectedBlock]);

  useEffect(() => {
    if (!heatmap || !canvasRef.current) return;
    const canvas = canvasRef.current;
    const { width, height, data } = heatmap;
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext("2d")!;
    const imgData = ctx.createImageData(width, height);
    const stops = CMAP_DATA[colormap] ?? CMAP_DATA.viridis;

    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        const v = data[y]?.[x] ?? 0;
        const [r, g, b] = applyColormap(v, stops);
        const idx = (y * width + x) * 4;
        imgData.data[idx]     = r;
        imgData.data[idx + 1] = g;
        imgData.data[idx + 2] = b;
        imgData.data[idx + 3] = v === 0 ? 40 : 255;
      }
    }
    ctx.putImageData(imgData, 0, 0);
  }, [heatmap, colormap]);

  if (!result) return null;

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h3 style={styles.title}>2Dヒートマップ</h3>
        {heatmap && (
          <span style={styles.bounds}>
            X: {heatmap.min_x} ~ {heatmap.max_x} &nbsp; Z: {heatmap.min_z} ~ {heatmap.max_z}
          </span>
        )}
      </div>

      <div style={styles.controls}>
        <label style={styles.label}>
          ブロック
          <select
            style={styles.select}
            value={selectedBlock}
            onChange={(e) => setSelectedBlock(e.target.value)}
          >
            {blockList.map((b) => (
              <option key={b} value={b}>
                {b.replace("minecraft:", "")}
              </option>
            ))}
          </select>
        </label>

        <label style={styles.label}>
          カラーマップ
          <select
            style={styles.select}
            value={colormap}
            onChange={(e) => setColormap(e.target.value)}
          >
            {COLORMAPS.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
        </label>
      </div>

      {loading && <div style={styles.status}>読み込み中...</div>}
      {error && <div style={styles.error}>{error}</div>}

      {heatmap && (
        <div style={styles.canvasWrapper}>
          <canvas
            ref={canvasRef}
            style={{ width: "100%", imageRendering: "pixelated", borderRadius: 8 }}
          />
          <div style={styles.legend}>
            <span>少</span>
            <div style={styles.legendBar} />
            <span>多</span>
          </div>
        </div>
      )}
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  container: {
    background: "#16213e",
    borderRadius: 12,
    padding: 24,
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "baseline",
    marginBottom: 16,
    flexWrap: "wrap",
    gap: 8,
  },
  title: {
    fontSize: 18,
    color: "#7ec8e3",
  },
  bounds: {
    fontSize: 12,
    color: "#888",
    fontFamily: "monospace",
  },
  controls: {
    display: "flex",
    gap: 16,
    marginBottom: 16,
    flexWrap: "wrap",
  },
  label: {
    display: "flex",
    flexDirection: "column",
    gap: 4,
    fontSize: 13,
    color: "#aaa",
  },
  select: {
    background: "#0f3460",
    border: "1px solid #334",
    borderRadius: 6,
    color: "#fff",
    padding: "6px 10px",
    fontSize: 13,
    outline: "none",
    minWidth: 180,
  },
  canvasWrapper: {
    position: "relative",
  },
  legend: {
    display: "flex",
    alignItems: "center",
    gap: 8,
    marginTop: 8,
    fontSize: 12,
    color: "#888",
  },
  legendBar: {
    flex: 1,
    height: 10,
    borderRadius: 4,
    background: "linear-gradient(to right, #111 0%, #7ec8e3 50%, #ffe900 100%)",
  },
  status: {
    textAlign: "center",
    color: "#888",
    padding: 32,
  },
  error: {
    background: "#4a1a1a",
    border: "1px solid #a33",
    borderRadius: 6,
    padding: "8px 12px",
    color: "#f99",
    fontSize: 13,
  },
};
