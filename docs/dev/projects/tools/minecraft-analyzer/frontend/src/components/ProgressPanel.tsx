import { useStore } from "../store/useStore";
import { useJobProgress } from "../hooks/useJobProgress";

export function ProgressPanel() {
  const { jobId, jobStatus } = useStore();
  useJobProgress(jobId);

  if (!jobId || !jobStatus) return null;

  const { status, progress_pct, processed_regions, total_regions, error } = jobStatus;

  const statusLabel: Record<string, string> = {
    pending: "待機中",
    running: "解析中",
    complete: "完了",
    error: "エラー",
    cancelled: "キャンセル",
  };

  const statusColor: Record<string, string> = {
    pending: "#aaa",
    running: "#7ec8e3",
    complete: "#0f9b58",
    error: "#f66",
    cancelled: "#aaa",
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <span style={{ color: statusColor[status] || "#fff", fontWeight: 600 }}>
          {statusLabel[status] || status}
        </span>
        <span style={styles.jobId}>Job: {jobId}</span>
      </div>

      {status !== "error" && status !== "cancelled" && (
        <>
          <div style={styles.barOuter}>
            <div
              style={{
                ...styles.barInner,
                width: `${progress_pct.toFixed(1)}%`,
                background: status === "complete" ? "#0f9b58" : "#7ec8e3",
              }}
            />
          </div>
          <div style={styles.info}>
            {processed_regions} / {total_regions} リージョン処理済み
            （{progress_pct.toFixed(1)}%）
          </div>
        </>
      )}

      {error && <div style={styles.error}>{error}</div>}
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  container: {
    background: "#16213e",
    borderRadius: 12,
    padding: 20,
    marginBottom: 24,
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: 12,
  },
  jobId: {
    fontSize: 12,
    color: "#666",
    fontFamily: "monospace",
  },
  barOuter: {
    background: "#0f3460",
    borderRadius: 999,
    height: 12,
    overflow: "hidden",
    marginBottom: 8,
  },
  barInner: {
    height: "100%",
    borderRadius: 999,
    transition: "width 0.3s ease",
  },
  info: {
    fontSize: 12,
    color: "#999",
  },
  error: {
    background: "#4a1a1a",
    border: "1px solid #a33",
    borderRadius: 6,
    padding: "8px 12px",
    color: "#f99",
    fontSize: 13,
    marginTop: 8,
  },
};
