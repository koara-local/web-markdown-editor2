var Vue = require('vue');
var Marked = require('marked');

var vue = new Vue({
    el: '#preview',
    data: {
        input: ''
    },
    filters: {
        marked: Marked
    }
})

Marked.setOptions({
    highlight: function(code, lang) {
        return hljs.highlightAuto(code, [lang]).value;
    }
});

var cm = CodeMirror.fromTextArea(document.getElementById('input'), {
    mode: "markdown",
    lineNumbers: true,
    indentUnit: 4,
    keyMap: "vim",
    showCursorWhenSelecting: true
});

vue.input = cm.getValue();

cm.on("change", function(cm, change) {
  vue.input = cm.getValue();
});
