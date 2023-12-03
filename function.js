function Feature_Bold() {
    document.execCommand('bold', true, null)
}

function Feature_Underline() {
    document.execCommand('underline', true, null)
}

function Feature_Italic() {
    document.execCommand('italic', true, null)
}

function Feature_TextColor() {
    var fontColor = document.querySelector('input[type="color"]').value;
    if (fontColor) {
        document.execCommand('styleWithCSS', false, true);
        document.execCommand('foreColor', false, fontColor);
    }
}

function Feature_LeftAlign() {
    document.execCommand('justifyLeft', false, null);
}

function Feature_ceneter() {
    document.execCommand('justifyCenter', false, null);
}

function Feature_RightAlign() {
    document.execCommand('justifyRight', false, null);
}

function Feature_Justify() {
    document.execCommand('justifyFull', false, null);
}

function Feature_Undo() {
    document.execCommand('undo', false, null);
}

function Feature_Redo() {
    document.execCommand('redo', false, null);
}


