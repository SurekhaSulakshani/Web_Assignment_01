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