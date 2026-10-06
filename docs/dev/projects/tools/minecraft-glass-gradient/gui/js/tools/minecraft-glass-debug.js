const fs = require('fs');

// We will test if the main file parses ok in node
try {
    const code = fs.readFileSync('gui/js/tools/minecraft-glass.js', 'utf8');
    // Basic syntax check
    new Function(code);
    console.log("Syntax is OK");
} catch(e) {
    console.error("Syntax Error:", e);
}
