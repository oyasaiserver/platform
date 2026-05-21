import { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import { useStore } from "../store/useStore";
import { api } from "../api/client";
import type { DepthData } from "../types/api";

export function DepthProfile() {
  const { jobId, result, selectedBlock, setSelectedBlock } = useStore();
  const [depth, setDepth] = useState<DepthData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const blockList = result?.block_counts.slice(0, 50).map((b) => b.name) ?? [];

  useEffect(() => {
    if (!jobId || !selectedBlock) return;
    setLoading(true);
    setError(null);
    api
      .getDepth(jobId, selectedBlock)
      .then(setDepth)
      .catch((e) => setError(e.message))
      .finally(() => setLoading(false));
  }, [jobId, selectedBlock]);

  if (!result) return null;

  const chartData =
    depth?.y_levels.map((e) => ({ y: e.y, count: e.count })) ?? [];

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h3 style={styles.title}>Y座標別ブロック分布</h3>
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
      </div>

      {loading && <div style={styles.status}>読み込み中...</div>}
      {error && <div style={styles.error}>{error}</div>}

      {!loading && depth && chartData.length === 0 && (
        <div style={styles.status}>
          このブロックのY座標データがありません
        </div>
      )}

      {!loading && chartData.length > 0 && (
        <>
          <div style={styles.info}>
            合計: {chartData.reduce((a, d) => a + d.count, 0).toLocaleString()} 個 /{" "}
            Y {Math.min(...chartData.map((d) => d.y))} 〜 {Math.max(...chartData.map((d) => d.y))}
          </div>
          <ResponsiveContainer width="100%" height={500}>
            <BarChart
              data={chartData}
              layout="vertical"
              margin={{ left: 40, right: 40, top: 8, bottom: 8 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#334" horizontal={false} />
              <XAxis
                type="number"
                tick={{ fill: "#aaa", fontSize: 11 }}
                tickFormatter={(v) => v.toLocaleString()}
              />
              <YAxis
                type="category"
                dataKey="y"
                tick={{ fill: "#ddd", fontSize: 10 }}
                width={35}
                reversed
              />
              <Tooltip
                contentStyle={{
                  background: "#16213e",
                  border: "1px solid #334",
                  borderRadius: 8,
                }}
                labelStyle={{ color: "#7ec8e3" }}
                labelFormatter={(v) => `Y = ${v}`}
                formatter={(v: number) => [v.toLocaleString(), "個数"]}
              />
              <Bar dataKey="count" fill="#e3b87e" />
            </BarChart>
          </ResponsiveContainer>
        </>
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
    marginBottom: 16,
  },
  title: {
    fontSize: 18,
    color: "#7ec8e3",
  },
  controls: {
    display: "flex",
    gap: 16,
    marginBottom: 16,
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
    minWidth: 200,
  },
  status: {
    textAlign: "center",
    color: "#888",
    padding: 32,
  },
  info: {
    fontSize: 12,
    color: "#888",
    marginBottom: 8,
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
