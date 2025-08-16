document.addEventListener('DOMContentLoaded', function() {
    const editor = document.getElementById('editor');
    const clearButton = document.getElementById('clearButton');

    editor.value = localStorage.getItem('textEditorContent');

    editor.addEventListener('input', function() {
        localStorage.setItem('textEditorContent', editor.value);
    });

    clearButton.addEventListener('click', function() {
        editor.value = '';
        localStorage.removeItem('textEditorContent');
    });
});