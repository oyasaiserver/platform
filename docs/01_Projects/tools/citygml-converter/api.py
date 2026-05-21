"""
CityGML Converter — FastAPI web interface

Endpoints:
  POST /convert/gltf   — Upload .gml files → download .glb
  POST /convert/schem  — Upload .gml file → download .schem
  GET  /               — Simple HTML upload form
"""
import os
import sys
import subprocess
import tempfile
import shutil
from pathlib import Path
from fastapi import FastAPI, UploadFile, File, HTTPException, Form
from fastapi.responses import FileResponse, HTMLResponse
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(title="CityGML Converter", version="1.0.0")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

_HERE = Path(__file__).parent

HTML = """<!DOCTYPE html>
<html lang="ja">
<head>
<meta charset="UTF-8">
<title>CityGML Converter</title>
<style>
  body { font-family: sans-serif; max-width: 640px; margin: 60px auto; padding: 0 16px; }
  h1 { font-size: 1.4rem; }
  section { border: 1px solid #ddd; border-radius: 8px; padding: 20px; margin-bottom: 24px; }
  h2 { font-size: 1rem; margin-top: 0; }
  label { display: block; margin-bottom: 8px; font-size: 0.9rem; color: #555; }
  input[type=file] { width: 100%; margin-bottom: 12px; }
  select, input[type=number] { padding: 4px 8px; border: 1px solid #ccc; border-radius: 4px; }
  button { background: #2563eb; color: #fff; border: none; padding: 8px 20px;
           border-radius: 6px; cursor: pointer; font-size: 0.95rem; }
  button:hover { background: #1d4ed8; }
  #gltfStatus, #schemStatus { margin-top: 12px; font-size: 0.85rem; color: #555; }
</style>
</head>
<body>
<h1>CityGML Converter</h1>
<p>PLATEAU CityGML (LOD2) ファイルを変換します。</p>

<section>
  <h2>→ glTF (.glb)</h2>
  <form id="gltfForm">
    <label>GML ファイル（複数選択可）</label>
    <input type="file" name="files" accept=".gml,.xml" multiple required>
    <button type="submit">変換してダウンロード</button>
  </form>
  <div id="gltfStatus"></div>
</section>

<section>
  <h2>→ Minecraft Schematic (.schem)</h2>
  <form id="schemForm">
    <label>GML ファイル（1ファイル）</label>
    <input type="file" name="file" accept=".gml,.xml" required>
    <label>スケール (1m = ?ブロック): <input type="number" name="scale" value="1" min="1" max="5" style="width:60px"></label>
    <button type="submit">変換してダウンロード</button>
  </form>
  <div id="schemStatus"></div>
</section>

<script>
function setupForm(formId, endpoint, statusId) {
  document.getElementById(formId).addEventListener('submit', async (e) => {
    e.preventDefault();
    const status = document.getElementById(statusId);
    status.textContent = '変換中...';
    try {
      const res = await fetch(endpoint, { method: 'POST', body: new FormData(e.target) });
      if (!res.ok) { const j = await res.json(); status.textContent = 'エラー: ' + j.detail; return; }
      const blob = await res.blob();
      const cd = res.headers.get('content-disposition') || '';
      const m = cd.match(/filename="?([^"]+)"?/);
      const a = document.createElement('a');
      a.href = URL.createObjectURL(blob);
      a.download = m ? m[1] : 'output';
      a.click();
      status.textContent = 'ダウンロード完了';
    } catch(err) { status.textContent = 'エラー: ' + err.message; }
  });
}
setupForm('gltfForm', '/convert/gltf', 'gltfStatus');
setupForm('schemForm', '/convert/schem', 'schemStatus');
</script>
</body>
</html>"""


@app.get("/", response_class=HTMLResponse)
def index():
    return HTML


@app.post("/convert/gltf")
async def convert_gltf(files: list[UploadFile] = File(...)):
    with tempfile.TemporaryDirectory() as tmp:
        tmp = Path(tmp)
        gml_paths = []
        for uf in files:
            dest = tmp / uf.filename
            dest.write_bytes(await uf.read())
            gml_paths.append(str(dest))

        stem = str(tmp / "output")
        result = subprocess.run(
            [sys.executable, str(_HERE / "citygml_to_gltf.py"), *gml_paths, "-o", stem],
            capture_output=True, text=True, cwd=str(_HERE),
        )
        if result.returncode != 0:
            raise HTTPException(status_code=500, detail=result.stderr[-2000:] or "変換に失敗しました")

        glb = next(Path(tmp).glob("*.glb"), None)
        if not glb:
            raise HTTPException(status_code=500, detail="glb が生成されませんでした")

        dest = Path(tempfile.mktemp(suffix=".glb"))
        shutil.copy(glb, dest)

    return FileResponse(str(dest), media_type="model/gltf-binary", filename="converted.glb")


@app.post("/convert/schem")
async def convert_schem(
    file: UploadFile = File(...),
    scale: int = Form(1),
):
    with tempfile.TemporaryDirectory() as tmp:
        tmp = Path(tmp)
        gml_path = tmp / file.filename
        gml_path.write_bytes(await file.read())
        out_path = tmp / "output.schem"

        result = subprocess.run(
            [sys.executable, str(_HERE / "citygml_to_schem.py"),
             str(gml_path), "-o", str(out_path), "--scale", str(scale)],
            capture_output=True, text=True, cwd=str(_HERE),
        )
        if result.returncode != 0:
            raise HTTPException(status_code=500, detail=result.stderr[-2000:] or "変換に失敗しました")

        if not out_path.exists():
            out_path = next(tmp.glob("*.schem"), None)
        if not out_path:
            raise HTTPException(status_code=500, detail="schem が生成されませんでした")

        dest = Path(tempfile.mktemp(suffix=".schem"))
        shutil.copy(out_path, dest)

    return FileResponse(str(dest), media_type="application/octet-stream", filename="converted.schem")


if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8080)
