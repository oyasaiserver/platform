from fastapi import APIRouter, HTTPException
from models import AnalyzeRequest, AnalyzeResponse
from job_manager import job_manager

router = APIRouter()


@router.post("/analyze", response_model=AnalyzeResponse)
async def start_analysis(req: AnalyzeRequest):
    estimated = job_manager.estimate_regions(req.world_path)
    if estimated == 0:
        raise HTTPException(
            status_code=400,
            detail=f"No region files found at: {req.world_path}",
        )

    options_dict = req.options.model_dump()
    job_id = await job_manager.submit(req.world_path, options_dict)

    return AnalyzeResponse(
        job_id=job_id,
        estimated_regions=estimated,
        ws_url=f"/ws/{job_id}",
    )


@router.delete("/jobs/{job_id}")
async def cancel_job(job_id: str):
    ok = job_manager.cancel(job_id)
    if not ok:
        raise HTTPException(status_code=404, detail="Job not found or already finished")
    return {"cancelled": True}
