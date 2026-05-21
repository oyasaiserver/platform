import { useState } from "react";
import { useStore } from "./store/useStore";
import { WorldLoader } from "./components/WorldLoader";
import { ProgressPanel } from "./components/ProgressPanel";
import { BlockStats } from "./components/BlockStats";
import { MapView } from "./components/MapView";
import { DepthProfile } from "./components/DepthProfile";
import { ExportPanel } from "./components/ExportPanel";
import { CommandBlockView } from "./components/CommandBlockView";

type MainTab = "analyze" | "cmdblocks";
type AnalyzeTab = "stats" | "map" | "depth";

const ANALYZE_TABS: { id: AnalyzeTab; label: string }[] = [
  { id: "stats", label: "ブロック統計" },
  { id: "map", label: "2Dマップ" },
  { id: "depth", label: "Y座標分布" },
];

export default function App() {
  const { result, activeTab, setActiveTab } = useStore();
  const [mainTab, setMainTab] = useState<MainTab>("analyze");
  const [worldPath, setWorldPath] = useState("");

  return (
    <div style={styles.page}>
      <header style={styles.header}>
        <h1 style={styles.logo}>⛏ Minecraft World Analyzer</h1>
        <nav style={styles.nav}>
          <button
            style={{ ...styles.navBtn, ...(mainTab === "analyze" ? styles.navActive : {}) }}
            onClick={() => setMainTab("analyze")}
          >
            ブロック分析
          </button>
          <button
            style={{ ...styles.navBtn, ...(mainTab === "cmdblocks" ? styles.navActive : {}) }}
            onClick={() => setMainTab("cmdblocks")}
          >
            コマンドブロック
          </button>
        </nav>
      </header>

      <main style={styles.main}>
        {mainTab === "analyze" && (
          <>
            <WorldLoader onPathChange={setWorldPath} />
            <ProgressPanel />

            {result && (
              <>
                <div style={styles.tabs}>
                  {ANALYZE_TABS.map((t) => (
                    <button
                      key={t.id}
                      style={{
                        ...styles.tab,
                        ...(activeTab === t.id ? styles.tabActive : {}),
                      }}
                      onClick={() => setActiveTab(t.id)}
                    >
                      {t.label}
                    </button>
                  ))}
                </div>

                <div style={styles.panel}>
                  {activeTab === "stats" && <BlockStats />}
                  {activeTab === "map" && <MapView />}
                  {activeTab === "depth" && <DepthProfile />}
                </div>

                <ExportPanel />
              </>
            )}
          </>
        )}

        {mainTab === "cmdblocks" && (
          <CommandBlockView worldPath={worldPath} />
        )}
      </main>
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  page: {
    minHeight: "100vh",
    background: "#1a1a2e",
    color: "#e0e0e0",
  },
  header: {
    background: "#0f3460",
    padding: "14px 32px",
    borderBottom: "1px solid #334",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 24,
    flexWrap: "wrap",
  },
  logo: {
    fontSize: 20,
    color: "#7ec8e3",
    fontWeight: 700,
  },
  nav: {
    display: "flex",
    gap: 4,
  },
  navBtn: {
    background: "none",
    border: "1px solid #334",
    borderRadius: 6,
    color: "#aaa",
    padding: "6px 18px",
    fontSize: 13,
    cursor: "pointer",
  },
  navActive: {
    background: "#7ec8e3",
    color: "#000",
    borderColor: "#7ec8e3",
    fontWeight: 600,
  },
  main: {
    maxWidth: 1100,
    margin: "0 auto",
    padding: "32px 24px",
    display: "flex",
    flexDirection: "column",
    gap: 0,
  },
  tabs: {
    display: "flex",
    gap: 4,
    marginBottom: 16,
    borderBottom: "2px solid #334",
    paddingBottom: 0,
  },
  tab: {
    background: "none",
    border: "none",
    borderBottom: "2px solid transparent",
    color: "#aaa",
    padding: "10px 20px",
    fontSize: 14,
    cursor: "pointer",
    marginBottom: -2,
    transition: "all 0.15s",
  },
  tabActive: {
    color: "#7ec8e3",
    borderBottom: "2px solid #7ec8e3",
    fontWeight: 600,
  },
  panel: {
    marginBottom: 24,
  },
};
