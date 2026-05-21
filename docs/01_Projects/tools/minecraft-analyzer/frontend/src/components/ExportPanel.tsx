import { useStore } from "../store/useStore";
import { api } from "../api/client";

const COLORMAPS = ["viridis", "plasma", "inferno", "hot", "cool"];

export function ExportPanel() {
  const { jobId, result, selectedBlock } = useStore();
  const [colormap, setColormap] = useState("viridis");

  if (!jobId || !result) return null;

  const download = (url: string) => {
    const a = document.createElement("a");
    a.href = url;
    a.click();
  };

  return (
    <div style={styles.container}>
      <h3 style={styles.title}>エクスポート</h3>
      <div style={styles.grid}>
        <button
          style={styles.btn}
          onClick={() => download(api.exportCsvUrl(jobId))}
        >
          CSV ダウンロード
        </button>

        <button
          style={styles.btn}
          onClick={() => download(api.exportJsonUrl(jobId))}
        >
          JSON ダウンロード
        </button>

        <div style={styles.pngRow}>
          <select
            style={styles.select}
            value={colormap}
            onChange={(e) => setColormap(e.target.value)}
          >
            {COLORMAPS.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
          <button
            style={styles.btn}
            onClick={() =>
              download(api.exportPngUrl(jobId, selectedBlock, colormap))
            }
          >
            PNG ヒートマップ
            <br />
            <small style={{ fontWeight: 400, fontSize: 11 }}>
              ({selectedBlock.replace("minecraft:", "")})
            </small>
          </button>
        </div>
      </div>
    </div>
  );
}

// Need to import useState
import { useState } from "react";

const styles: Record<string, React.CSSProperties> = {
  container: {
    background: "#16213e",
    borderRadius: 12,
    padding: 24,
  },
  title: {
    fontSize: 18,
    color: "#7ec8e3",
    marginBottom: 16,
  },
  grid: {
    display: "flex",
    gap: 12,
    flexWrap: "wrap",
    alignItems: "flex-end",
  },
  btn: {
    background: "#0f3460",
    border: "1px solid #334",
    borderRadius: 8,
    color: "#fff",
    padding: "10px 20px",
    fontSize: 14,
    cursor: "pointer",
    textAlign: "center",
    lineHeight: 1.4,
  },
  pngRow: {
    display: "flex",
    gap: 8,
    alignItems: "flex-end",
  },
  select: {
    background: "#0f3460",
    border: "1px solid #334",
    borderRadius: 6,
    color: "#fff",
    padding: "6px 10px",
    fontSize: 13,
    outline: "none",
    height: 46,
  },
};
