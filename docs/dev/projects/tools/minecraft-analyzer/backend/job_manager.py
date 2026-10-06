"""
Async job manager for Minecraft world analysis.

Submits region files to a ProcessPoolExecutor, tracks progress,
and broadcasts updates to WebSocket clients.
"""

import asyncio
import logging
import os
import time
import uuid
from concurrent.futures import ProcessPoolExecutor
from dataclasses import dataclass, field
from datetime import datetime, timezone
from pathlib import Path
from typing import Optional

from analyzer import analyze_region, merge_region_results, build_heatmap, build_depth_profile

log = logging.getLogger(__name__)

MAX_WORKERS = max(1, (os.cpu_count() or 4) - 1)


@dataclass
class JobState:
    job_id: str
    world_path: str
    options: dict
    status: str = "pending"
    total_regions: int = 0
    processed_regions: int = 0
    error: Optional[str] = None
    result: Optional[dict] = None
    created_at: datetime = field(default_factory=lambda: datetime.now(timezone.utc))
    updated_at: datetime = field(default_factory=lambda: datetime.now(timezone.utc))
    elapsed_s: float = 0.0
    # WebSocket queues: job_id -> list of Queue
    _ws_queues: list = field(default_factory=list)

    @property
    def progress_pct(self) -> float:
        if self.total_regions == 0:
            return 0.0
        return min(100.0, self.processed_regions / self.total_regions * 100)

    def to_status_dict(self) -> dict:
        return {
            "job_id": self.job_id,
            "status": self.status,
            "progress_pct": self.progress_pct,
            "processed_regions": self.processed_regions,
            "total_regions": self.total_regions,
            "error": self.error,
            "created_at": self.created_at.isoformat(),
            "updated_at": self.updated_at.isoformat(),
        }


class JobManager:
    def __init__(self):
        self._jobs: dict[str, JobState] = {}
        self._executor: Optional[ProcessPoolExecutor] = None
        # job_id -> list[asyncio.Queue]
        self._ws_queues: dict[str, list[asyncio.Queue]] = {}

    def startup(self):
        self._executor = ProcessPoolExecutor(max_workers=MAX_WORKERS)
        log.info("JobManager started with %d workers", MAX_WORKERS)

    def shutdown(self):
        if self._executor:
            self._executor.shutdown(wait=False, cancel_futures=True)
            log.info("JobManager shut down")

    def list_region_files(self, world_path: str) -> list[Path]:
        """Find all .mca region files under the world directory."""
        base = Path(world_path)
        regions: list[Path] = []
        # Check overworld, nether, end dimension folders
        for sub in ["region", "DIM-1/region", "DIM1/region"]:
            d = base / sub
            if d.is_dir():
                regions.extend(sorted(d.glob("r.*.*.mca")))
        return regions

    async def submit(self, world_path: str, options: dict) -> str:
        job_id = str(uuid.uuid4())[:8]
        regions = self.list_region_files(world_path)

        state = JobState(
            job_id=job_id,
            world_path=world_path,
            options=options,
            total_regions=len(regions),
        )
        self._jobs[job_id] = state
        self._ws_queues[job_id] = []

        if not regions:
            state.status = "error"
            state.error = f"No region files found in {world_path}"
            return job_id

        # Launch async task
        asyncio.create_task(self._run_job(job_id, regions, options))
        return job_id

    async def _run_job(self, job_id: str, regions: list[Path], options: dict):
        state = self._jobs[job_id]
        state.status = "running"
        state.updated_at = datetime.now(timezone.utc)
        await self._broadcast(job_id, state.to_status_dict())

        loop = asyncio.get_event_loop()
        start = time.monotonic()
        region_results: list[dict] = []
        futures = []

        for mca_path in regions:
            fut = loop.run_in_executor(
                self._executor,
                analyze_region,
                str(mca_path),
                options,
            )
            futures.append(fut)

        for fut in asyncio.as_completed(futures):
            try:
                result = await fut
                region_results.append(result)
            except Exception as e:
                log.error("Worker error: %s", e)
                region_results.append({"error": str(e), "block_counter": {}})

            state.processed_regions += 1
            state.updated_at = datetime.now(timezone.utc)
            await self._broadcast(job_id, state.to_status_dict())

        # Merge all results
        merged = merge_region_results(region_results)
        merged["elapsed_s"] = time.monotonic() - start
        merged["world_path"] = state.world_path
        merged["job_id"] = job_id

        state.result = merged
        state.status = "complete"
        state.elapsed_s = merged["elapsed_s"]
        state.updated_at = datetime.now(timezone.utc)
        await self._broadcast(job_id, state.to_status_dict())
        # Signal completion
        await self._broadcast(job_id, None)

    async def _broadcast(self, job_id: str, message):
        for q in list(self._ws_queues.get(job_id, [])):
            await q.put(message)

    def subscribe(self, job_id: str) -> asyncio.Queue:
        q: asyncio.Queue = asyncio.Queue()
        self._ws_queues.setdefault(job_id, []).append(q)
        return q

    def unsubscribe(self, job_id: str, q: asyncio.Queue):
        queues = self._ws_queues.get(job_id, [])
        if q in queues:
            queues.remove(q)

    def get_status(self, job_id: str) -> Optional[dict]:
        state = self._jobs.get(job_id)
        return state.to_status_dict() if state else None

    def get_result(self, job_id: str) -> Optional[dict]:
        state = self._jobs.get(job_id)
        if state and state.status == "complete":
            return state.result
        return None

    def get_heatmap(self, job_id: str, block_name: str) -> Optional[dict]:
        result = self.get_result(job_id)
        if result is None:
            return None
        return build_heatmap(result, block_name)

    def get_depth(self, job_id: str, block_name: str) -> Optional[dict]:
        result = self.get_result(job_id)
        if result is None:
            return None
        return build_depth_profile(result, block_name)

    def cancel(self, job_id: str) -> bool:
        state = self._jobs.get(job_id)
        if state and state.status in ("pending", "running"):
            state.status = "cancelled"
            state.updated_at = datetime.now(timezone.utc)
            return True
        return False

    def estimate_regions(self, world_path: str) -> int:
        return len(self.list_region_files(world_path))


# Global singleton
job_manager = JobManager()
