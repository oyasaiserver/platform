from pydantic import BaseModel, Field
from typing import Literal, Optional
from datetime import datetime


class AnalysisOptions(BaseModel):
    min_y: int = Field(-64, ge=-64, le=320)
    max_y: int = Field(320, ge=-64, le=320)
    block_filter: list[str] = Field(default_factory=list)
    sample_rate: float = Field(1.0, gt=0.0, le=1.0)


class AnalyzeRequest(BaseModel):
    world_path: str
    options: AnalysisOptions = Field(default_factory=AnalysisOptions)


class AnalyzeResponse(BaseModel):
    job_id: str
    estimated_regions: int
    ws_url: str


class JobStatus(BaseModel):
    job_id: str
    status: Literal["pending", "running", "complete", "error", "cancelled"]
    progress_pct: float
    processed_regions: int
    total_regions: int
    error: Optional[str] = None
    created_at: datetime
    updated_at: datetime


class BlockCount(BaseModel):
    name: str
    count: int
    percentage: float


class WorldBounds(BaseModel):
    min_x: int
    max_x: int
    min_z: int
    max_z: int


class AnalysisResult(BaseModel):
    job_id: str
    total_blocks: int
    unique_types: int
    elapsed_s: float
    world_path: str
    block_counts: list[BlockCount]
    world_bounds: WorldBounds


class HeatmapData(BaseModel):
    width: int
    height: int
    min_x: int
    max_x: int
    min_z: int
    max_z: int
    data: list[list[float]]


class DepthEntry(BaseModel):
    y: int
    count: int


class DepthData(BaseModel):
    block: str
    y_levels: list[DepthEntry]


class WorldInfo(BaseModel):
    region_count: int
    estimated_chunks: int
    spawn_x: int
    spawn_z: int
    game_version: Optional[str] = None
    world_name: Optional[str] = None
