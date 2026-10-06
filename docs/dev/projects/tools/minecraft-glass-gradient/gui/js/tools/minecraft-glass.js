/**
 * minecraft-glass.js
 * Browser port of the Minecraft Glass Gradient tool.
 * Spawns a Web Worker to keep the UI responsive during heavy processing.
 */

document.addEventListener('DOMContentLoaded', () => {

    const dropzone = document.getElementById('mg-dropzone');
    const fileInput = document.getElementById('mg-fileInput');
    const resultArea = document.getElementById('mg-resultArea');
    const statusMsg = document.getElementById('mg-status');
    const downloadBtn = document.getElementById('mg-downloadBtn');
    const resetBtn = document.getElementById('mg-resetBtn');

    const inputMaxSize = document.getElementById('mg-maxSize');
    const inputLayers = document.getElementById('mg-layers');
    const inputOrientation = document.getElementById('mg-orientation');
    const inputKeepSize = document.getElementById('mg-keepSize');
    const previewCanvas = document.getElementById('mg-previewCanvas');

    if (inputKeepSize) {
        inputKeepSize.addEventListener('change', (e) => {
            inputMaxSize.disabled = e.target.checked;
        });
    }

    let generatedSchemBlob = null;
    let originalFilename = '';

    // ==========================================
    // Event Listeners
    // ==========================================

    dropzone.addEventListener('click', () => fileInput.click());
    fileInput.addEventListener('change', (e) => {
        if (e.target.files.length) handleFile(e.target.files[0]);
    });

    dropzone.addEventListener('dragover', (e) => {
        e.preventDefault();
        dropzone.classList.add('dragover');
    });

    dropzone.addEventListener('dragleave', () => {
        dropzone.classList.remove('dragover');
    });

    dropzone.addEventListener('drop', (e) => {
        e.preventDefault();
        dropzone.classList.remove('dragover');
        if (e.dataTransfer.files.length) handleFile(e.dataTransfer.files[0]);
    });

    downloadBtn.addEventListener('click', () => {
        if (!generatedSchemBlob) return;
        const url = URL.createObjectURL(generatedSchemBlob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `${originalFilename}_miniled.schem`;
        a.click();
        URL.revokeObjectURL(url);
    });

    resetBtn.addEventListener('click', () => {
        generatedSchemBlob = null;
        originalFilename = '';
        fileInput.value = '';
        resultArea.classList.add('hidden');
        dropzone.classList.remove('hidden');
        previewCanvas.classList.add('hidden');
        downloadBtn.textContent = '⬇️ SCHEMダウンロード';
        downloadBtn.className = 'btn primary';
    });

    // ==========================================
    // Logic Flow
    // ==========================================

    async function handleFile(file) {
        if (!file.type.match('image.*')) {
            alert('画像ファイル（PNG, JPG等）を選択してください');
            return;
        }

        originalFilename = file.name.replace(/\.[^/.]+$/, "");
        dropzone.classList.add('hidden');
        statusMsg.textContent = "画像読み込み中...";
        resultArea.classList.remove('hidden');

        const maxSize = parseInt(inputMaxSize.value) || 256;
        const targetLayers = parseInt(inputLayers.value) || 4;
        const orientation = inputOrientation.value;
        const keepSize = inputKeepSize ? inputKeepSize.checked : false;

        try {
            const dataURL = await FileUtils.readAsDataURL(file);
            const img = new Image();
            img.src = dataURL;
            await new Promise((resolve) => { img.onload = resolve; });

            setTimeout(() => {
                processImageToSchemWorker(img, maxSize, targetLayers, orientation, keepSize);
            }, 50);

        } catch (error) {
            alert('処理エラー: ' + error.message);
            resetBtn.click();
        }
    }

    async function processImageToSchemWorker(img, maxSize, layers, orientation, keepSize = false) {
        try {
            statusMsg.textContent = "画像を準備中...";
            let scale = 1.0;
            if (!keepSize) {
                scale = Math.min(maxSize / img.width, maxSize / img.height, 1.0);
            }
            const blocksX = Math.max(1, Math.floor(img.width * scale));
            const blocksY = Math.max(1, Math.floor(img.height * scale));

            const offCanvas = document.createElement('canvas');
            offCanvas.width = blocksX;
            offCanvas.height = blocksY;
            const offCtx = offCanvas.getContext('2d', { willReadFrequently: true });
            offCtx.imageSmoothingEnabled = false;
            offCtx.drawImage(img, 0, 0, blocksX, blocksY);
            const imgData = offCtx.getImageData(0, 0, blocksX, blocksY);

            statusMsg.textContent = "バックグラウンド処理を開始...";

            // Spawn Web Worker from inline script to avoid file:// CORS issues
            let worker;
            try {
                const workerScript = document.getElementById('mg-worker-script').textContent;
                const blob = new Blob([workerScript], { type: 'application/javascript' });
                const workerUrl = URL.createObjectURL(blob);
                worker = new Worker(workerUrl);
            } catch (e) {
                // Fallback for environments lacking Blob URL (very rare)
                worker = new Worker('js/tools/minecraft-glass-worker.js');
            }

            worker.onmessage = async (e) => {
                const msg = e.data;
                if (msg.type === 'progress') {
                    statusMsg.textContent = msg.message;
                } else if (msg.type === 'error') {
                    console.error("Worker error:", msg.error);
                    alert("処理中にエラーが発生しました: " + msg.error);
                    statusMsg.textContent = "エラーが発生しました";
                    worker.terminate();
                } else if (msg.type === 'done') {
                    // Update preview canvas
                    const previewCtx = previewCanvas.getContext('2d');
                    previewCanvas.width = blocksX;
                    previewCanvas.height = blocksY;
                    const previewImgData = previewCtx.createImageData(blocksX, blocksY);

                    for (let i = 0; i < msg.previewPixels.length; i++) {
                        previewImgData.data[i] = msg.previewPixels[i];
                    }

                    previewCtx.putImageData(previewImgData, 0, 0);
                    previewCanvas.classList.remove('hidden');

                    // Compress NBT Buffer
                    statusMsg.textContent = "圧縮中...";
                    const stream = new Blob([msg.nbtBuffer]).stream();
                    const compressedStream = stream.pipeThrough(new CompressionStream("gzip"));
                    const response = await new Response(compressedStream);
                    generatedSchemBlob = await response.blob();

                    const { w, h, l } = msg.stats;
                    statusMsg.textContent = `生成完了！ (${w}x${h}x${l} ブロック)`;
                    downloadBtn.textContent = '⬇️ .schem ダウンロード';
                    worker.terminate();
                }
            };

            // Send the Heavy payload to the worker thread
            worker.postMessage({
                pixels: imgData.data,
                width: blocksX,
                height: blocksY,
                layers: layers,
                orientation: orientation
            });

        } catch (e) {
            console.error(e);
            alert("処理開始時にエラーが発生しました: " + e.message);
            statusMsg.textContent = "エラーが発生しました";
        }
    }
});
