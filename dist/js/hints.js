function createEditor() {
    // find the textarea
    var textarea = document.querySelector("form textarea[name=student_code]");

    // create ace editor
    var editor = ace.edit()
    editor.container.style.height = "400px"
    editor.setTheme('ace/theme/monokai')
    editor.session.setMode('ace/mode/python')
    editor.session.setValue(textarea.value)
    editor.setOptions({
        fontSize: "12pt"
    });
    // replace textarea with ace
    textarea.parentNode.insertBefore(editor.container, textarea)
    textarea.style.display = "none"
    // find the parent form and add submit event listener
    var form = textarea
    while (form && form.localName != "form") form = form.parentNode
    document.getElementById("submit").addEventListener("click", function() {
        // update value of textarea to match value in ace
        textarea.value = editor.getValue()

    }, true)
}
createEditor();