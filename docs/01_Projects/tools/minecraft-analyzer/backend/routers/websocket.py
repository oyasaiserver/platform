import asyncio
import json
import logging

from fastapi import APIRouter, WebSocket, WebSocketDisconnect

from job_manager import job_manager

router = APIRouter()
log = logging.getLogger(__name__)


@router.websocket("/ws/{job_id}")
async def websocket_progress(websocket: WebSocket, job_id: str):
    await websocket.accept()

    status = job_manager.get_status(job_id)
    if status is None:
        await websocket.send_json({"error": "Job not found"})
        await websocket.close()
        return

    # If already complete, send status and close
    if status["status"] in ("complete", "error", "cancelled"):
        await websocket.send_json(status)
        await websocket.close()
        return

    queue = job_manager.subscribe(job_id)
    try:
        while True:
            try:
                message = await asyncio.wait_for(queue.get(), timeout=30.0)
            except asyncio.TimeoutError:
                # Send ping to keep connection alive
                await websocket.send_json({"ping": True})
                continue

            if message is None:
                # Job completed signal
                break

            await websocket.send_json(message)

            if message.get("status") in ("complete", "error", "cancelled"):
                break

    except WebSocketDisconnect:
        log.debug("WebSocket disconnected for job %s", job_id)
    except Exception as e:
        log.error("WebSocket error for job %s: %s", job_id, e)
    finally:
        job_manager.unsubscribe(job_id, queue)
        try:
            await websocket.close()
        except Exception:
            pass
