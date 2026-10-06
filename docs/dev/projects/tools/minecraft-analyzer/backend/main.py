import logging
from contextlib import asynccontextmanager

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from job_manager import job_manager
from routers import analyze, results, export, websocket, command_blocks

logging.basicConfig(level=logging.INFO)


@asynccontextmanager
async def lifespan(app: FastAPI):
    job_manager.startup()
    yield
    job_manager.shutdown()


app = FastAPI(
    title="Minecraft World Analyzer",
    version="1.0.0",
    lifespan=lifespan,
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173", "http://127.0.0.1:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(analyze.router, prefix="/api")
app.include_router(results.router, prefix="/api")
app.include_router(export.router, prefix="/api")
app.include_router(websocket.router)
app.include_router(command_blocks.router)


@app.get("/api/health")
async def health():
    return {"status": "ok"}
