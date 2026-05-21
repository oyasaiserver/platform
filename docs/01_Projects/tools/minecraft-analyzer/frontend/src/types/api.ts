export interface AnalysisOptions {
  min_y: number;
  max_y: number;
  block_filter: string[];
  sample_rate: number;
}

export interface AnalyzeRequest {
  world_path: string;
  options: AnalysisOptions;
}

export interface AnalyzeResponse {
  job_id: string;
  estimated_regions: number;
  ws_url: string;
}

export interface JobStatus {
  job_id: string;
  status: "pending" | "running" | "complete" | "error" | "cancelled";
  progress_pct: number;
  processed_regions: number;
  total_regions: number;
  error?: string;
  created_at: string;
  updated_at: string;
}

export interface BlockCount {
  name: string;
  count: number;
  percentage: number;
}

export interface WorldBounds {
  min_x: number;
  max_x: number;
  min_z: number;
  max_z: number;
}

export interface AnalysisResult {
  job_id: string;
  total_blocks: number;
  unique_types: number;
  elapsed_s: number;
  world_path: string;
  block_counts: BlockCount[];
  world_bounds: WorldBounds;
}

export interface HeatmapData {
  width: number;
  height: number;
  min_x: number;
  max_x: number;
  min_z: number;
  max_z: number;
  data: number[][];
}

export interface DepthEntry {
  y: number;
  count: number;
}

export interface DepthData {
  block: string;
  y_levels: DepthEntry[];
}
