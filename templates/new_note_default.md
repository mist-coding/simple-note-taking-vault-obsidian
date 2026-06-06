---
title: |-
  
  <% tp.date.now("DD/MM/YYYY, HH:mm:ss") %>
---
<%* // We use a slightly longer delay (150ms) to ensure the file is created and ready
setTimeout(async () => {
    // 1. Rename the file
    await tp.file.rename(tp.date.now("DD.MM.YYYY-HH.mm.ss"));
    
    // 2. Grab the editor
    const editor = app.workspace.activeLeaf.view.editor;
    
    if (editor) {
        editor.focus();
        // 3. Move the cursor programmatically to the very last line of the file
        editor.setCursor(editor.lastLine());
    }
}, 150);
-%>