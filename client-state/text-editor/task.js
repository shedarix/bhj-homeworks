document.addEventListener('DOMContentLoaded', function() {
    const editor = document.getElementById('editor');
    const clearButton = document.getElementById('clearButton');

    const savedText = localStorage.getItem('textEditorContent');
    if (savedText) {
        editor.value = savedText;
    }

    editor.addEventListener('input', function() {
        localStorage.setItem('textEditorContent', editor.value);
    });

    clearButton.addEventListener('click', function() {
        editor.value = '';
        localStorage.removeItem('textEditorContent');
    });
});