"""
Endpoints for command block scanning.

POST /api/command-blocks/scan          Start a scan (returns scan_id)
GET  /api/command-blocks/{scan_id}     Status + results JSON
GET  /api/command-blocks/{scan_id}/plot.png  Color-coded scatter plot
GET  /api/command-blocks/{scan_id}/export/csv
GET  /api/command-blocks/{scan_id}/export/json
"""

import asyncio
import csv
import io
import json
import logging
import uuid
from datetime import datetime, timezone
from typing import Optional

from fastapi import APIRouter, BackgroundTasks, HTTPException, Query
from fastapi.responses import StreamingResponse
from pydantic import BaseModel

from command_block_scanner import scan_world_command_blocks, generate_plot

log = logging.getLogger(__name__)
router = APIRouter(prefix="/api/command-blocks", tags=["command-blocks"])

# In-memory store for scan results
_scans: dict[str, dict] = {}


class ScanRequest(BaseModel):
    world_path: str


class ScanResponse(BaseModel):
    scan_id: str
    status: str
    message: str


def _run_scan(scan_id: str, world_path: str):
    """Synchronous worker – runs in a thread via BackgroundTasks."""
    _scans[scan_id]["status"] = "running"
    try:
        blocks = scan_world_command_blocks(world_path)
        _scans[scan_id].update({
            "status": "complete",
            "blocks": blocks,
            "total": len(blocks),
            "completed_at": datetime.now(timezone.utc).isoformat(),
        })
        log.info("Scan %s complete: %d command blocks found", scan_id, len(blocks))
    except Exception as e:
        log.error("Scan %s failed: %s", scan_id, e)
        _scans[scan_id].update({"status": "error", "error": str(e)})


@router.post("/scan", response_model=ScanResponse)
async def start_scan(req: ScanRequest, background_tasks: BackgroundTasks):
    from pathlib import Path
    base = Path(req.world_path)
    mcas = list(base.glob("region/r.*.*.mca")) + \
           list(base.glob("DIM-1/region/r.*.*.mca")) + \
           list(base.glob("DIM1/region/r.*.*.mca"))
    if not mcas:
        raise HTTPException(400, detail=f"region ファイルが見つかりません: {req.world_path}")

    scan_id = str(uuid.uuid4())[:8]
    _scans[scan_id] = {
        "scan_id": scan_id,
        "world_path": req.world_path,
        "status": "pending",
        "blocks": [],
        "total": 0,
        "started_at": datetime.now(timezone.utc).isoformat(),
    }

    background_tasks.add_task(_run_scan, scan_id, req.world_path)

    return ScanResponse(
        scan_id=scan_id,
        status="pending",
        message=f"{len(mcas)} リージョンファイルをスキャン中...",
    )


@router.get("/{scan_id}")
async def get_scan(scan_id: str):
    scan = _scans.get(scan_id)
    if not scan:
        raise HTTPException(404, detail="Scan not found")

    # Return status + summary (not full block list to keep response small)
    blocks = scan.get("blocks", [])
    impact_counts = {"critical": 0, "high": 0, "medium": 0, "low": 0}
    for b in blocks:
        impact_counts[b.get("impact", "low")] += 1

    return {
        "scan_id": scan_id,
        "status": scan["status"],
        "world_path": scan["world_path"],
        "total": scan["total"],
        "impact_counts": impact_counts,
        "error": scan.get("error"),
        "started_at": scan.get("started_at"),
        "completed_at": scan.get("completed_at"),
    }


@router.get("/{scan_id}/blocks")
async def get_blocks(
    scan_id: str,
    impact: Optional[str] = Query(None, description="Filter by impact level"),
    limit: int = Query(1000, ge=1, le=10000),
    offset: int = Query(0, ge=0),
):
    """Return paginated list of command blocks."""
    scan = _scans.get(scan_id)
    if not scan:
        raise HTTPException(404, detail="Scan not found")
    if scan["status"] != "complete":
        raise HTTPException(202, detail=f"Scan not complete: {scan['status']}")

    blocks = scan["blocks"]
    if impact:
        blocks = [b for b in blocks if b.get("impact") == impact]

    total_filtered = len(blocks)
    page = blocks[offset: offset + limit]

    return {
        "total": total_filtered,
        "offset": offset,
        "limit": limit,
        "blocks": page,
    }


@router.get("/{scan_id}/plot.png")
async def get_plot(
    scan_id: str,
    dpi: int = Query(150, ge=72, le=300),
):
    scan = _scans.get(scan_id)
    if not scan:
        raise HTTPException(404, detail="Scan not found")
    if scan["status"] != "complete":
        raise HTTPException(202, detail=f"Scan not complete: {scan['status']}")

    png_bytes = generate_plot(scan["blocks"], dpi=dpi)

    return StreamingResponse(
        io.BytesIO(png_bytes),
        media_type="image/png",
        headers={
            "Content-Disposition": f'inline; filename="command_blocks_{scan_id}.png"'
        },
    )


@router.get("/{scan_id}/export/csv")
async def export_csv(scan_id: str):
    scan = _scans.get(scan_id)
    if not scan:
        raise HTTPException(404, detail="Scan not found")
    if scan["status"] != "complete":
        raise HTTPException(202, detail=f"Scan not complete: {scan['status']}")

    buf = io.StringIO()
    writer = csv.DictWriter(
        buf,
        fieldnames=["x", "y", "z", "type", "auto", "powered", "impact", "command", "last_output", "success_count"],
    )
    writer.writeheader()
    for b in scan["blocks"]:
        writer.writerow({k: b.get(k, "") for k in writer.fieldnames})

    buf.seek(0)
    return StreamingResponse(
        iter([buf.getvalue()]),
        media_type="text/csv",
        headers={"Content-Disposition": f'attachment; filename="command_blocks_{scan_id}.csv"'},
    )


@router.get("/{scan_id}/export/json")
async def export_json(scan_id: str):
    scan = _scans.get(scan_id)
    if not scan:
        raise HTTPException(404, detail="Scan not found")
    if scan["status"] != "complete":
        raise HTTPException(202, detail=f"Scan not complete: {scan['status']}")

    content = json.dumps(
        {
            "scan_id": scan_id,
            "world_path": scan["world_path"],
            "total": scan["total"],
            "blocks": scan["blocks"],
        },
        ensure_ascii=False,
        indent=2,
    )
    return StreamingResponse(
        iter([content]),
        media_type="application/json",
        headers={"Content-Disposition": f'attachment; filename="command_blocks_{scan_id}.json"'},
    )
