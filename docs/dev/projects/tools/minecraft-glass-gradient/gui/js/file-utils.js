/**
 * file-utils.js
 * Utility functions for local file handling in the browser.
 */

const FileUtils = {
    /**
     * Read a file as text using FileReader
     * @param {File} file - The file object from input or drop
     * @returns {Promise<string>} - A promise resolving to the file's text content
     */
    readAsText: (file) => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();

            reader.onload = (e) => resolve(e.target.result);
            reader.onerror = (e) => reject(new Error('ファイルの読み込みに失敗しました'));

            reader.readAsText(file);
        });
    },

    /**
     * Read a file as DataURL (base64) using FileReader
     * @param {File} file - The file object from input or drop
     * @returns {Promise<string>} - A promise resolving to the file's data url content
     */
    readAsDataURL: (file) => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();

            reader.onload = (e) => resolve(e.target.result);
            reader.onerror = (e) => reject(new Error('画像の読み込みに失敗しました'));

            reader.readAsDataURL(file);
        });
    },

    /**
     * Create a download link for text content and trigger download immediately
     * @param {string} content - The string content to download
     * @param {string} filename - The name of the file to save
     * @param {string} mimeType - e.g., 'text/plain' or 'text/csv'
     */
    downloadText: (content, filename, mimeType = 'text/plain') => {
        // 1. Convert string to Blob
        const blob = new Blob([content], { type: mimeType });

        // 2. Create Object URL pointing to the Blob
        const url = URL.createObjectURL(blob);

        // 3. Create an invisible anchor tag to trigger the download
        const a = document.createElement('a');
        a.style.display = 'none';
        a.href = url;
        a.download = filename;

        // 4. Append, click, and cleanup
        document.body.appendChild(a);
        a.click();

        // Small delay before cleaning up the URL to ensure download starts
        setTimeout(() => {
            document.body.removeChild(a);
            URL.revokeObjectURL(url);
        }, 100);
    },

    /**
     * Create a download link for a Blob and trigger download immediately
     * @param {Blob} blob - The blob object to download
     * @param {string} filename - The name of the file
     */
    downloadBlob: (blob, filename) => {
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.style.display = 'none';
        a.href = url;
        a.download = filename;

        document.body.appendChild(a);
        a.click();

        setTimeout(() => {
            document.body.removeChild(a);
            URL.revokeObjectURL(url);
        }, 100);
    },

    /**
     * Format file size to human readable format
     */
    formatSize: (bytes) => {
        if (bytes === 0) return '0 Bytes';
        const k = 1024;
        const sizes = ['Bytes', 'KB', 'MB', 'GB'];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
    }
};
