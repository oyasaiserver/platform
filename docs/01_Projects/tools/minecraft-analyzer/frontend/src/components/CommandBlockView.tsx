import { useState, useEffect, useMemo } from "react";

const BASE = "/api/command-blocks";

interface ScanStatus {
  scan_id: string;
  status: string;
  world_path: string;
  total: number;
  impact_counts: Record<string, number>;
  error?: string;
  started_at?: string;
  completed_at?: string;
}

interface CommandBlock {
  x: number;
  y: number;
  z: number;
  type: string;
  auto: boolean;
  powered: boolean;
  impact: string;
  command: string;
  last_output: string;
  success_count: number;
}

interface BlocksResponse {
  total: number;
  offset: number;
  limit: number;
  blocks: CommandBlock[];
}

const IMPACT_STYLE: Record<string, { color: string; bg: string; label: string }> = {
  critical: { color: "#ff2222", bg: "#3a0a0a", label: "重大" },
  high:     { color: "#ff7700", bg: "#3a1a00", label: "高負荷" },
  medium:   { color: "#ffcc00", bg: "#2a2000", label: "中負荷" },
  low:      { color: "#44aaff", bg: "#0a1a2e", label: "低負荷" },
};

const TYPE_LABEL: Record<string, string> = {
  repeating: "リピート",
  chain:     "チェーン",
  impulse:   "インパルス",
};

export function CommandBlockView({ worldPath }: { worldPath: string }) {
  const [scanId, setScanId] = useState<string | null>(null);
  const [status, setStatus] = useState<ScanStatus | null>(null);
  const [blocks, setBlocks] = useState<CommandBlock[]>([]);
  const [loading, setLoading] = useState(false);
  const [polling, setPolling] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [filterImpact, setFilterImpact] = useState<string>("all");
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(0);
  const [totalFiltered, setTotalFiltered] = useState(0);
  const [plotKey, setPlotKey] = useState(0);
  const PAGE_SIZE = 50;

  // Start scan
  const startScan = async () => {
    setLoading(true);
    setError(null);
    setBlocks([]);
    setScanId(null);
    setStatus(null);
    try {
      const res = await fetch(`${BASE}/scan`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ world_path: worldPath }),
      });
      if (!res.ok) throw new Error(await res.text());
      const data = await res.json();
      setScanId(data.scan_id);
      setPolling(true);
    } catch (e: unknown) {
      setError(e instanceof Error ? e.message : String(e));
    } finally {
      setLoading(false);
    }
  };

  // Poll for scan completion
  useEffect(() => {
    if (!scanId || !polling) return;
    const interval = setInterval(async () => {
      try {
        const res = await fetch(`${BASE}/${scanId}`);
        const data: ScanStatus = await res.json();
        setStatus(data);
        if (data.status === "complete" || data.status === "error") {
          setPolling(false);
          clearInterval(interval);
          if (data.status === "complete") {
            setPlotKey((k) => k + 1);
            fetchBlocks(scanId, 0, "all");
          }
        }
      } catch {
        setPolling(false);
        clearInterval(interval);
      }
    }, 1500);
    return () => clearInterval(interval);
  }, [scanId, polling]);

  const fetchBlocks = async (sid: string, offset: number, impact: string) => {
    const impactParam = impact !== "all" ? `&impact=${impact}` : "";
    const res = await fetch(
      `${BASE}/${sid}/blocks?limit=${PAGE_SIZE}&offset=${offset}${impactParam}`
    );
    if (!res.ok) return;
    const data: BlocksResponse = await res.json();
    setBlocks(data.blocks);
    setTotalFiltered(data.total);
  };

  useEffect(() => {
    if (!scanId || status?.status !== "complete") return;
    setPage(0);
    fetchBlocks(scanId, 0, filterImpact);
  }, [filterImpact, scanId, status?.status]);

  const handlePage = (newPage: number) => {
    setPage(newPage);
    if (scanId) fetchBlocks(scanId, newPage * PAGE_SIZE, filterImpact);
  };

  const filtered = useMemo(() => {
    if (!search) return blocks;
    const q = search.toLowerCase();
    return blocks.filter(
      (b) =>
        b.command.toLowerCase().includes(q) ||
        `${b.x},${b.y},${b.z}`.includes(q)
    );
  }, [blocks, search]);

  const totalPages = Math.ceil(totalFiltered / PAGE_SIZE);

  return (
    <div style={s.container}>
      <div style={s.header}>
        <h3 style={s.title}>コマンドブロック スキャン</h3>
        <span style={s.path}>{worldPath}</span>
      </div>

      <button
        style={{ ...s.btn, opacity: loading || polling ? 0.6 : 1 }}
        onClick={startScan}
        disabled={loading || polling}
      >
        {polling ? "スキャン中..." : loading ? "送信中..." : "スキャン開始"}
      </button>

      {error && <div style={s.error}>{error}</div>}

      {/* Progress */}
      {polling && status && (
        <div style={s.progress}>
          <div style={s.progressBar}>
            <div style={{ ...s.progressFill, width: status.status === "complete" ? "100%" : "60%" }} />
          </div>
          <span style={s.progressText}>
            スキャン中... ステータス: {status.status}
          </span>
        </div>
      )}

      {/* Impact summary cards */}
      {status?.status === "complete" && (
        <>
          <div style={s.cards}>
            {(["critical", "high", "medium", "low"] as const).map((impact) => {
              const count = status.impact_counts?.[impact] ?? 0;
              const meta = IMPACT_STYLE[impact];
              return (
                <div
                  key={impact}
                  style={{
                    ...s.card,
                    background: meta.bg,
                    borderColor: meta.color,
                    cursor: "pointer",
                    outline: filterImpact === impact ? `2px solid ${meta.color}` : "none",
                  }}
                  onClick={() =>
                    setFilterImpact((f) => (f === impact ? "all" : impact))
                  }
                >
                  <div style={{ ...s.cardCount, color: meta.color }}>{count}</div>
                  <div style={s.cardLabel}>{meta.label}</div>
                </div>
              );
            })}
            <div
              style={{
                ...s.card,
                background: "#111",
                borderColor: "#444",
                cursor: "pointer",
                outline: filterImpact === "all" ? "2px solid #888" : "none",
              }}
              onClick={() => setFilterImpact("all")}
            >
              <div style={{ ...s.cardCount, color: "#fff" }}>{status.total}</div>
              <div style={s.cardLabel}>合計</div>
            </div>
          </div>

          {/* Plot image */}
          {scanId && (
            <div style={s.plotWrap}>
              <div style={s.plotHeader}>
                <span style={{ color: "#7ec8e3" }}>分布マップ（クリックで拡大表示）</span>
                <div style={s.exportRow}>
                  <a
                    href={`${BASE}/${scanId}/export/csv`}
                    download
                    style={s.exportBtn}
                  >
                    CSV
                  </a>
                  <a
                    href={`${BASE}/${scanId}/export/json`}
                    download
                    style={s.exportBtn}
                  >
                    JSON
                  </a>
                  <a
                    href={`${BASE}/${scanId}/plot.png?dpi=150`}
                    download
                    style={s.exportBtn}
                  >
                    PNG
                  </a>
                </div>
              </div>
              <a
                href={`${BASE}/${scanId}/plot.png?dpi=150`}
                target="_blank"
                rel="noreferrer"
              >
                <img
                  key={plotKey}
                  src={`${BASE}/${scanId}/plot.png?dpi=150&_=${plotKey}`}
                  alt="Command block distribution"
                  style={s.plot}
                />
              </a>
            </div>
          )}

          {/* Block list */}
          <div style={s.listSection}>
            <div style={s.listHeader}>
              <span style={{ color: "#aaa", fontSize: 13 }}>
                {filterImpact !== "all" ? `${IMPACT_STYLE[filterImpact].label} ` : "全"}
                {totalFiltered} 件
              </span>
              <input
                style={s.search}
                placeholder="コマンド・座標で検索..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>

            <div style={s.table}>
              <div style={s.tableHead}>
                <span style={{ width: 80 }}>座標</span>
                <span style={{ width: 70 }}>種別</span>
                <span style={{ width: 60 }}>自動</span>
                <span style={{ width: 70 }}>負荷</span>
                <span style={{ flex: 1 }}>コマンド</span>
              </div>

              {filtered.map((b, i) => {
                const meta = IMPACT_STYLE[b.impact] ?? IMPACT_STYLE.low;
                return (
                  <div key={i} style={{ ...s.row, borderLeft: `3px solid ${meta.color}` }}>
                    <span style={{ ...s.cell, width: 80, fontFamily: "monospace", fontSize: 11, color: "#adf" }}>
                      {b.x},{b.y},{b.z}
                    </span>
                    <span style={{ ...s.cell, width: 70 }}>
                      {TYPE_LABEL[b.type] ?? b.type}
                    </span>
                    <span style={{ ...s.cell, width: 60, color: b.auto ? "#f77" : "#aaa" }}>
                      {b.auto ? "常時" : "手動"}
                    </span>
                    <span style={{ ...s.cell, width: 70, color: meta.color, fontWeight: 600 }}>
                      {meta.label}
                    </span>
                    <span
                      style={{ ...s.cell, flex: 1, fontFamily: "monospace", fontSize: 11, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}
                      title={b.command}
                    >
                      {b.command || <em style={{ color: "#555" }}>（空）</em>}
                    </span>
                  </div>
                );
              })}

              {filtered.length === 0 && (
                <div style={{ padding: "24px", textAlign: "center", color: "#555" }}>
                  該当するコマンドブロックがありません
                </div>
              )}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div style={s.pagination}>
                <button
                  style={s.pageBtn}
                  onClick={() => handlePage(page - 1)}
                  disabled={page === 0}
                >
                  ←
                </button>
                <span style={{ color: "#aaa", fontSize: 13 }}>
                  {page + 1} / {totalPages}
                </span>
                <button
                  style={s.pageBtn}
                  onClick={() => handlePage(page + 1)}
                  disabled={page >= totalPages - 1}
                >
                  →
                </button>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
}

const s: Record<string, React.CSSProperties> = {
  container: { background: "#16213e", borderRadius: 12, padding: 24 },
  header: { display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 16, flexWrap: "wrap", gap: 8 },
  title: { fontSize: 18, color: "#7ec8e3" },
  path: { fontSize: 12, color: "#555", fontFamily: "monospace" },
  btn: { background: "#e05c00", color: "#fff", border: "none", borderRadius: 8, padding: "10px 28px", fontSize: 14, cursor: "pointer", fontWeight: 700, marginBottom: 20 },
  error: { background: "#3a0a0a", border: "1px solid #a33", borderRadius: 6, padding: "10px 14px", color: "#f99", fontSize: 13, marginBottom: 16 },
  progress: { marginBottom: 16 },
  progressBar: { background: "#0f3460", borderRadius: 999, height: 8, overflow: "hidden", marginBottom: 6 },
  progressFill: { height: "100%", background: "#e05c00", borderRadius: 999, transition: "width 0.5s ease" },
  progressText: { fontSize: 12, color: "#888" },
  cards: { display: "flex", gap: 12, marginBottom: 24, flexWrap: "wrap" },
  card: { flex: "1 1 80px", minWidth: 80, border: "1px solid", borderRadius: 10, padding: "12px 16px", textAlign: "center" },
  cardCount: { fontSize: 28, fontWeight: 700 },
  cardLabel: { fontSize: 11, color: "#aaa", marginTop: 4 },
  plotWrap: { marginBottom: 24 },
  plotHeader: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 },
  exportRow: { display: "flex", gap: 8 },
  exportBtn: { background: "#0f3460", color: "#7ec8e3", border: "1px solid #334", borderRadius: 6, padding: "4px 12px", fontSize: 12, textDecoration: "none", cursor: "pointer" },
  plot: { width: "100%", borderRadius: 8, display: "block", cursor: "zoom-in" },
  listSection: { marginTop: 8 },
  listHeader: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12, gap: 12 },
  search: { background: "#0f3460", border: "1px solid #334", borderRadius: 6, color: "#fff", padding: "6px 12px", fontSize: 13, outline: "none", width: 280 },
  table: { display: "flex", flexDirection: "column", gap: 2 },
  tableHead: { display: "flex", gap: 8, padding: "6px 12px", color: "#666", fontSize: 11, fontWeight: 700, textTransform: "uppercase" },
  row: { display: "flex", gap: 8, padding: "8px 12px", background: "#0d1b2a", borderRadius: 4, fontSize: 12, alignItems: "center" },
  cell: { display: "block", color: "#ccc" },
  pagination: { display: "flex", justifyContent: "center", alignItems: "center", gap: 16, marginTop: 16 },
  pageBtn: { background: "#0f3460", border: "1px solid #334", borderRadius: 6, color: "#fff", padding: "6px 16px", cursor: "pointer", fontSize: 14 },
};
