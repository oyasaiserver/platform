/**
 * text-cleaner.js
 * Sample tool to read a text file, clean whitespace/newlines, and offer for download.
 */

document.addEventListener('DOMContentLoaded', () => {

    // UI Elements
    const dropzone = document.getElementById('tc-dropzone');
    const fileInput = document.getElementById('tc-fileInput');
    const resultArea = document.getElementById('tc-resultArea');
    const statusMsg = document.getElementById('tc-status');
    const downloadBtn = document.getElementById('tc-downloadBtn');
    const resetBtn = document.getElementById('tc-resetBtn');

    // State
    let processedText = '';
    let originalFilename = '';

    // ==========================================
    // Event Listeners (Drag & Drop + File Input)
    // ==========================================

    // Click on dropzone opens standard file picker
    dropzone.addEventListener('click', () => fileInput.click());

    // File input selection
    fileInput.addEventListener('change', (e) => {
        if (e.target.files.length) {
            handleFile(e.target.files[0]);
        }
    });

    // Drag and Drop
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
        if (e.dataTransfer.files.length) {
            handleFile(e.dataTransfer.files[0]);
        }
    });

    // Actions
    downloadBtn.addEventListener('click', () => {
        if (!processedText) return;
        const newFilename = originalFilename.replace(/\.[^/.]+$/, "") + "_cleaned.txt";
        FileUtils.downloadText(processedText, newFilename);
    });

    resetBtn.addEventListener('click', () => {
        resetTool();
    });

    // ==========================================
    // Logic Flow
    // ==========================================

    /**
     * Entry point for reading and processing a file
     */
    async function handleFile(file) {
        if (!file.name.match(/\.(txt|csv|md)$/i)) {
            alert('テキスト形式のファイル（.txt, .csv, .md）を選択してください');
            return;
        }

        originalFilename = file.name;
        dropzone.classList.add('hidden'); // Hide upload zone

        try {
            // Read
            const rawText = await FileUtils.readAsText(file);

            // Process
            processedText = cleanText(rawText);

            // Show Success UI
            statusMsg.textContent = `${file.name} （変換前: ${FileUtils.formatSize(file.size)}）の処理が完了しました！`;
            resultArea.classList.remove('hidden');

        } catch (error) {
            alert('ファイルの処理中にエラーが発生しました: ' + error.message);
            resetTool();
        }
    }

    /**
     * Core logic of this specific tool.
     * Takes raw text and returns processed text.
     */
    function cleanText(text) {
        // Example cleaning: Let's remove multiple blank lines and trim start/end
        let lines = text.split('\n');

        // Remove empty lines and trailing spaces
        lines = lines
            .map(line => line.trimEnd())
            .filter(line => line.trim().length > 0);

        return lines.join('\n');
    }

    /**
     * Reset tool UI
     */
    function resetTool() {
        processedText = '';
        originalFilename = '';
        fileInput.value = ''; // clear input
        resultArea.classList.add('hidden');
        dropzone.classList.remove('hidden');
    }

});
