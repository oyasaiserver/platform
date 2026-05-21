import { useState, useMemo } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";
import { useStore } from "../store/useStore";

const COLORS = [
  "#7ec8e3", "#0f9b58", "#e3b87e", "#e37e7e", "#a07ee3",
  "#7ee3b8", "#e3e37e", "#7e9be3", "#e37eb8", "#7ee37e",
];

const TOP_N = 20;

export function BlockStats() {
  const { result, setSelectedBlock } = useStore();
  const [search, setSearch] = useState("");
  const [view, setView] = useState<"bar" | "pie">("bar");
  const [showAll, setShowAll] = useState(false);

  const counts = result?.block_counts ?? [];

  const filtered = useMemo(() => {
    if (!search) return counts;
    return counts.filter((b) =>
      b.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [counts, search]);

  const displayed = showAll ? filtered : filtered.slice(0, TOP_N);

  const pieData = counts.slice(0, 9).map((b) => ({
    name: b.name.replace("minecraft:", ""),
    value: b.count,
  }));
  const othersCount = counts
    .slice(9)
    .reduce((acc, b) => acc + b.count, 0);
  if (othersCount > 0) {
    pieData.push({ name: "その他", value: othersCount });
  }

  if (!result) return null;

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h3 style={styles.title}>ブロック分布統計</h3>
        <div style={styles.meta}>
          合計: {result.total_blocks.toLocaleString()} ブロック /{" "}
          {result.unique_types} 種類 / {result.elapsed_s.toFixed(1)}秒
        </div>
      </div>

      <div style={styles.controls}>
        <input
          style={styles.search}
          type="text"
          placeholder="ブロック名で検索..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button
          style={{ ...styles.tab, ...(view === "bar" ? styles.tabActive : {}) }}
          onClick={() => setView("bar")}
        >
          棒グラフ
        </button>
        <button
          style={{ ...styles.tab, ...(view === "pie" ? styles.tabActive : {}) }}
          onClick={() => setView("pie")}
        >
          円グラフ
        </button>
      </div>

      {view === "bar" && (
        <>
          <ResponsiveContainer width="100%" height={400}>
            <BarChart
              data={displayed}
              layout="vertical"
              margin={{ left: 160, right: 40, top: 8, bottom: 8 }}
            >
              <XAxis type="number" tick={{ fill: "#aaa", fontSize: 11 }} />
              <YAxis
                type="category"
                dataKey="name"
                tick={{ fill: "#ddd", fontSize: 11 }}
                width={155}
                tickFormatter={(v) => v.replace("minecraft:", "")}
              />
              <Tooltip
                contentStyle={{ background: "#16213e", border: "1px solid #334", borderRadius: 8 }}
                labelStyle={{ color: "#7ec8e3" }}
                formatter={(v: number) => [v.toLocaleString(), "個数"]}
              />
              <Bar
                dataKey="count"
                fill="#7ec8e3"
                onClick={(d) => setSelectedBlock(d.name)}
                cursor="pointer"
              />
            </BarChart>
          </ResponsiveContainer>
          <div style={styles.showMore}>
            {filtered.length > TOP_N && (
              <button style={styles.linkBtn} onClick={() => setShowAll((v) => !v)}>
                {showAll ? "折りたたむ" : `残り ${filtered.length - TOP_N} 件を表示`}
              </button>
            )}
          </div>
        </>
      )}

      {view === "pie" && (
        <ResponsiveContainer width="100%" height={420}>
          <PieChart>
            <Pie
              data={pieData}
              cx="50%"
              cy="50%"
              outerRadius={160}
              dataKey="value"
              label={({ name, percent }) =>
                `${name} ${(percent * 100).toFixed(1)}%`
              }
              labelLine={false}
              onClick={(d) => {
                if (d.name !== "その他") {
                  setSelectedBlock(`minecraft:${d.name}`);
                }
              }}
            >
              {pieData.map((_, i) => (
                <Cell key={i} fill={COLORS[i % COLORS.length]} />
              ))}
            </Pie>
            <Legend
              formatter={(v) => (
                <span style={{ color: "#ddd", fontSize: 12 }}>{v}</span>
              )}
            />
            <Tooltip
              contentStyle={{ background: "#16213e", border: "1px solid #334", borderRadius: 8 }}
              formatter={(v: number) => [v.toLocaleString(), "個数"]}
            />
          </PieChart>
        </ResponsiveContainer>
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
  meta: {
    fontSize: 12,
    color: "#888",
  },
  controls: {
    display: "flex",
    gap: 8,
    marginBottom: 16,
    alignItems: "center",
    flexWrap: "wrap",
  },
  search: {
    flex: 1,
    minWidth: 180,
    background: "#0f3460",
    border: "1px solid #334",
    borderRadius: 6,
    color: "#fff",
    padding: "6px 12px",
    fontSize: 13,
    outline: "none",
  },
  tab: {
    background: "#0f3460",
    border: "1px solid #334",
    borderRadius: 6,
    color: "#aaa",
    padding: "6px 14px",
    fontSize: 13,
    cursor: "pointer",
  },
  tabActive: {
    background: "#7ec8e3",
    color: "#000",
    border: "1px solid #7ec8e3",
    fontWeight: 600,
  },
  showMore: {
    textAlign: "center",
    marginTop: 8,
  },
  linkBtn: {
    background: "none",
    border: "none",
    color: "#7ec8e3",
    cursor: "pointer",
    fontSize: 13,
    textDecoration: "underline",
  },
};
