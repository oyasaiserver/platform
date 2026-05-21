import type {
  AnalyzeRequest,
  AnalyzeResponse,
  JobStatus,
  AnalysisResult,
  HeatmapData,
  DepthData,
} from "../types/api";

const BASE = "/api";

async function fetchJSON<T>(url: string, init?: RequestInit): Promise<T> {
  const res = await fetch(url, init);
  if (!res.ok) {
    const body = await res.text();
    throw new Error(`${res.status} ${res.statusText}: ${body}`);
  }
  return res.json();
}

export const api = {
  startAnalysis: (req: AnalyzeRequest) =>
    fetchJSON<AnalyzeResponse>(`${BASE}/analyze`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(req),
    }),

  getStatus: (jobId: string) =>
    fetchJSON<JobStatus>(`${BASE}/jobs/${jobId}`),

  getResult: (jobId: string) =>
    fetchJSON<AnalysisResult>(`${BASE}/jobs/${jobId}/result`),

  getHeatmap: (jobId: string, block: string, gridSize = 512) =>
    fetchJSON<HeatmapData>(
      `${BASE}/jobs/${jobId}/heatmap?block=${encodeURIComponent(block)}&grid_size=${gridSize}`
    ),

  getDepth: (jobId: string, block: string) =>
    fetchJSON<DepthData>(
      `${BASE}/jobs/${jobId}/depth?block=${encodeURIComponent(block)}`
    ),

  exportCsvUrl: (jobId: string) => `${BASE}/jobs/${jobId}/export/csv`,
  exportJsonUrl: (jobId: string) => `${BASE}/jobs/${jobId}/export/json`,
  exportPngUrl: (jobId: string, block: string, colormap = "viridis") =>
    `${BASE}/jobs/${jobId}/export/png?block=${encodeURIComponent(block)}&colormap=${colormap}`,
};
