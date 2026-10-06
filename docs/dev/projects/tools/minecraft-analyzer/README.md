# minecraft-world-analyzer

Web-based dashboard to scan all command blocks across multiple Minecraft worlds.

FastAPI backend reads MCA (region) files directly using NBT parsing and exposes results via REST API. React + TypeScript frontend provides filtering, search, and visualization.

## Features

- Scans every region file (`.mca`) across all world folders in parallel
- Extracts command block contents, coordinates, and world name
- Async job system — scan runs in background, poll for status
- WebUI with search, filter by world, and command frequency charts

## Requirements

```bash
# Backend
pip install fastapi uvicorn nbtlib numpy Pillow matplotlib

# Frontend
npm install
```

## Usage

```bash
# Start everything with one command
./run.sh

# Or manually:
cd backend && uvicorn main:app --port 8000 --reload
cd frontend && npm run dev
```

Open `http://localhost:5173`.

### Fast CLI scan

```bash
WORLDS_DIR=/path/to/worlds python backend/fast_scan.py
```

## License

MIT
