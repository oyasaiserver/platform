import csv
import io
import json

import numpy as np
from fastapi import APIRouter, HTTPException, Query
from fastapi.responses import StreamingResponse

from job_manager import job_manager
from analyzer import build_heatmap

router = APIRouter()


def _get_result_or_raise(job_id: str) -> dict:
    result = job_manager.get_result(job_id)
    if result is None:
        raise HTTPException(status_code=404, detail="Result not ready or job not found")
    return result


@router.get("/jobs/{job_id}/export/csv")
async def export_csv(job_id: str):
    result = _get_result_or_raise(job_id)
    bc = result.get("block_counter", {})
    total = result.get("total_blocks", sum(bc.values()))

    buf = io.StringIO()
    writer = csv.writer(buf)
    writer.writerow(["block_name", "count", "percentage"])
    for name, count in sorted(bc.items(), key=lambda x: x[1], reverse=True):
        pct = round(count / total * 100, 4) if total > 0 else 0.0
        writer.writerow([name, count, pct])

    buf.seek(0)
    return StreamingResponse(
        iter([buf.getvalue()]),
        media_type="text/csv",
        headers={"Content-Disposition": f'attachment; filename="blocks_{job_id}.csv"'},
    )


@router.get("/jobs/{job_id}/export/json")
async def export_json(job_id: str):
    result = _get_result_or_raise(job_id)
    bc = result.get("block_counter", {})
    total = result.get("total_blocks", sum(bc.values()))

    export_data = {
        "job_id": job_id,
        "world_path": result.get("world_path", ""),
        "total_blocks": total,
        "unique_types": len(bc),
        "elapsed_s": result.get("elapsed_s", 0.0),
        "world_bounds": result.get("world_bounds", {}),
        "block_counts": [
            {
                "name": name,
                "count": count,
                "percentage": round(count / total * 100, 4) if total > 0 else 0.0,
            }
            for name, count in sorted(bc.items(), key=lambda x: x[1], reverse=True)
        ],
    }

    content = json.dumps(export_data, indent=2)
    return StreamingResponse(
        iter([content]),
        media_type="application/json",
        headers={"Content-Disposition": f'attachment; filename="blocks_{job_id}.json"'},
    )


@router.get("/jobs/{job_id}/export/png")
async def export_png(
    job_id: str,
    block: str = Query("minecraft:grass_block"),
    colormap: str = Query("viridis"),
    width: int = Query(2048, ge=64, le=8192),
    height: int = Query(2048, ge=64, le=8192),
):
    result = _get_result_or_raise(job_id)
    heatmap = build_heatmap(result, block, grid_size=max(width, height))

    data = np.array(heatmap["data"], dtype=np.float32)

    # Resize to requested dimensions using PIL
    from PIL import Image

    data_uint8 = (data * 255).astype(np.uint8)
    gray_img = Image.fromarray(data_uint8, mode="L")
    gray_img = gray_img.resize((width, height), Image.NEAREST)

    # Apply colormap
    colormap_func = _get_colormap(colormap)
    colored = colormap_func(np.array(gray_img) / 255.0)  # RGBA float
    img_uint8 = (colored * 255).astype(np.uint8)
    img = Image.fromarray(img_uint8[:, :, :3], mode="RGB")

    buf = io.BytesIO()
    img.save(buf, format="PNG")
    buf.seek(0)

    safe_block = block.replace(":", "_").replace("/", "_")
    return StreamingResponse(
        buf,
        media_type="image/png",
        headers={
            "Content-Disposition": f'attachment; filename="heatmap_{safe_block}_{job_id}.png"'
        },
    )


def _get_colormap(name: str):
    """Return a simple colormap function that maps float 0-1 → RGBA numpy array."""
    COLORMAPS = {
        "viridis": [
            (0.267, 0.004, 0.329),
            (0.127, 0.566, 0.551),
            (0.993, 0.906, 0.144),
        ],
        "plasma": [
            (0.050, 0.030, 0.528),
            (0.799, 0.152, 0.480),
            (0.940, 0.975, 0.131),
        ],
        "inferno": [
            (0.0, 0.0, 0.014),
            (0.745, 0.071, 0.448),
            (0.988, 1.0, 0.643),
        ],
        "hot": [
            (0.0, 0.0, 0.0),
            (1.0, 0.0, 0.0),
            (1.0, 1.0, 0.0),
            (1.0, 1.0, 1.0),
        ],
        "cool": [
            (0.0, 1.0, 1.0),
            (1.0, 0.0, 1.0),
        ],
    }

    stops = COLORMAPS.get(name, COLORMAPS["viridis"])
    n_stops = len(stops)

    def apply(arr: np.ndarray) -> np.ndarray:
        h, w = arr.shape
        out = np.zeros((h, w, 4), dtype=np.float32)
        for i in range(h):
            for j in range(w):
                v = float(arr[i, j])
                seg = v * (n_stops - 1)
                lo = int(seg)
                hi = min(lo + 1, n_stops - 1)
                t = seg - lo
                r = stops[lo][0] * (1 - t) + stops[hi][0] * t
                g = stops[lo][1] * (1 - t) + stops[hi][1] * t
                b = stops[lo][2] * (1 - t) + stops[hi][2] * t
                out[i, j] = [r, g, b, 1.0]
        return out

    def apply_vectorized(arr: np.ndarray) -> np.ndarray:
        stops_arr = np.array(stops, dtype=np.float32)
        seg = arr * (n_stops - 1)
        lo = np.floor(seg).astype(int).clip(0, n_stops - 2)
        hi = (lo + 1).clip(0, n_stops - 1)
        t = (seg - lo)[..., np.newaxis]
        colors = stops_arr[lo] * (1 - t) + stops_arr[hi] * t
        alpha = np.ones((*arr.shape, 1), dtype=np.float32)
        return np.concatenate([colors, alpha], axis=-1)

    return apply_vectorized
