import { useState } from "react";
import { api } from "../api/client";
import { useStore } from "../store/useStore";

const DEFAULT_OPTIONS = {
  min_y: -64,
  max_y: 320,
  block_filter: [] as string[],
  sample_rate: 1.0,
};

export function WorldLoader({ onPathChange }: { onPathChange?: (p: string) => void } = {}) {
  const [worldPath, setWorldPath] = useState("");
  const [options, setOptions] = useState(DEFAULT_OPTIONS);
  const [filterInput, setFilterInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const { setJobId, reset } = useStore();

  const handlePathChange = (val: string) => {
    setWorldPath(val);
    onPathChange?.(val);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!worldPath.trim()) return;

    setLoading(true);
    setError(null);
    reset();

    try {
      const resp = await api.startAnalysis({
        world_path: worldPath.trim(),
        options: {
          ...options,
          block_filter: filterInput
            .split(",")
            .map((s) => s.trim())
            .filter(Boolean),
        },
      });
      setJobId(resp.job_id);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : String(err));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>ワールドデータ解析</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <label style={styles.label}>
          ワールドフォルダパス
          <input
            style={styles.input}
            type="text"
            value={worldPath}
            onChange={(e) => handlePathChange(e.target.value)}
            placeholder="/path/to/your/minecraft/world"
            required
          />
        </label>

        <div style={styles.row}>
          <label style={styles.label}>
            最小Y座標
            <input
              style={{ ...styles.input, width: 80 }}
              type="number"
              value={options.min_y}
              min={-64}
              max={options.max_y}
              onChange={(e) =>
                setOptions((o) => ({ ...o, min_y: Number(e.target.value) }))
              }
            />
          </label>
          <label style={styles.label}>
            最大Y座標
            <input
              style={{ ...styles.input, width: 80 }}
              type="number"
              value={options.max_y}
              min={options.min_y}
              max={320}
              onChange={(e) =>
                setOptions((o) => ({ ...o, max_y: Number(e.target.value) }))
              }
            />
          </label>
          <label style={styles.label}>
            サンプリング率
            <input
              style={{ ...styles.input, width: 80 }}
              type="number"
              value={options.sample_rate}
              min={0.01}
              max={1}
              step={0.01}
              onChange={(e) =>
                setOptions((o) => ({
                  ...o,
                  sample_rate: Number(e.target.value),
                }))
              }
            />
          </label>
        </div>

        <label style={styles.label}>
          ブロックフィルター（カンマ区切り、空=全て）
          <input
            style={styles.input}
            type="text"
            value={filterInput}
            onChange={(e) => setFilterInput(e.target.value)}
            placeholder="minecraft:diamond_ore, minecraft:gold_ore"
          />
        </label>

        {error && <div style={styles.error}>{error}</div>}

        <button style={styles.button} type="submit" disabled={loading}>
          {loading ? "送信中..." : "解析開始"}
        </button>
      </form>
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  container: {
    background: "#16213e",
    borderRadius: 12,
    padding: 24,
    marginBottom: 24,
  },
  title: {
    fontSize: 20,
    marginBottom: 16,
    color: "#7ec8e3",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: 12,
  },
  label: {
    display: "flex",
    flexDirection: "column",
    gap: 4,
    fontSize: 13,
    color: "#aaa",
  },
  input: {
    background: "#0f3460",
    border: "1px solid #334",
    borderRadius: 6,
    color: "#fff",
    padding: "8px 12px",
    fontSize: 14,
    outline: "none",
    width: "100%",
  },
  row: {
    display: "flex",
    gap: 16,
  },
  button: {
    background: "#0f9b58",
    color: "#fff",
    border: "none",
    borderRadius: 8,
    padding: "10px 24px",
    fontSize: 15,
    cursor: "pointer",
    fontWeight: 600,
    marginTop: 4,
    alignSelf: "flex-start",
  },
  error: {
    background: "#4a1a1a",
    border: "1px solid #a33",
    borderRadius: 6,
    padding: "10px 14px",
    color: "#f99",
    fontSize: 13,
  },
};
