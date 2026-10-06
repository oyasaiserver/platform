from fastapi import APIRouter, HTTPException, Query
from models import JobStatus, AnalysisResult, HeatmapData, DepthData, BlockCount, WorldBounds
from job_manager import job_manager

router = APIRouter()


@router.get("/jobs/{job_id}", response_model=JobStatus)
async def get_job_status(job_id: str):
    status = job_manager.get_status(job_id)
    if status is None:
        raise HTTPException(status_code=404, detail="Job not found")
    return status


@router.get("/jobs/{job_id}/result", response_model=AnalysisResult)
async def get_result(job_id: str):
    result = job_manager.get_result(job_id)
    if result is None:
        status = job_manager.get_status(job_id)
        if status is None:
            raise HTTPException(status_code=404, detail="Job not found")
        raise HTTPException(status_code=202, detail=f"Job not complete (status: {status['status']})")

    bc = result.get("block_counter", {})
    total = result.get("total_blocks", sum(bc.values()))
    sorted_counts = sorted(bc.items(), key=lambda x: x[1], reverse=True)

    block_counts = [
        BlockCount(
            name=name,
            count=count,
            percentage=round(count / total * 100, 4) if total > 0 else 0.0,
        )
        for name, count in sorted_counts
    ]

    bounds_raw = result.get("world_bounds", {})
    bounds = WorldBounds(
        min_x=bounds_raw.get("min_x", 0),
        max_x=bounds_raw.get("max_x", 0),
        min_z=bounds_raw.get("min_z", 0),
        max_z=bounds_raw.get("max_z", 0),
    )

    return AnalysisResult(
        job_id=job_id,
        total_blocks=total,
        unique_types=len(bc),
        elapsed_s=result.get("elapsed_s", 0.0),
        world_path=result.get("world_path", ""),
        block_counts=block_counts,
        world_bounds=bounds,
    )


@router.get("/jobs/{job_id}/heatmap", response_model=HeatmapData)
async def get_heatmap(
    job_id: str,
    block: str = Query("minecraft:grass_block"),
    grid_size: int = Query(512, ge=64, le=4096),
):
    data = job_manager.get_heatmap(job_id, block)
    if data is None:
        raise HTTPException(status_code=404, detail="Result not ready")
    return data


@router.get("/jobs/{job_id}/depth", response_model=DepthData)
async def get_depth(
    job_id: str,
    block: str = Query("minecraft:diamond_ore"),
):
    data = job_manager.get_depth(job_id, block)
    if data is None:
        raise HTTPException(status_code=404, detail="Result not ready")
    return data
