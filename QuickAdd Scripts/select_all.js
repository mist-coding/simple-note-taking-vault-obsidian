module.exports = async (params) => {
    const {quickAddApi: {inputPrompt, suggester}} = params;
    const {workspace} = params.app;
	
    // Get the active leaf
    let activeLeaf = workspace.activeLeaf;
    if (activeLeaf) {
        // Get the editor instance
        let editor = activeLeaf.view.sourceMode.cmEditor;
        if (editor) {
            // Select all text
            editor.setSelection({line: 0, ch: 0}, {line: editor.lineCount(), ch: 0});
            // Copy selected text to clipboard
			(editor.getSelection());
        }
    }
}