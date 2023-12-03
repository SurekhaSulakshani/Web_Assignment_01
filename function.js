// Function to apply bold formatting to the selected text
function Feature_Bold() {
    document.execCommand('bold', true, null)
}
// Function to apply underline formatting to the selected text
function Feature_Underline() {
    document.execCommand('underline', true, null)
}
// Function to apply italic formatting to the selected text
function Feature_Italic() {
    document.execCommand('italic', true, null)
}
// Function to change the text color of the selected text
function Feature_TextColor() {
    // Get the selected color value from the input element
    var fontColor = document.querySelector('input[type="color"]').value;
    // Check if a color is selected
    if (fontColor) {
        document.execCommand('styleWithCSS', false, true);
        document.execCommand('foreColor', false, fontColor);
    }
}
// Function to align the text to the left
function Feature_LeftAlign() {
    document.execCommand('justifyLeft', false, null);
}
// Function to center-align the text
function Feature_ceneter() {
    document.execCommand('justifyCenter', false, null);
}
// Function to align the text to the right
function Feature_RightAlign() {
    document.execCommand('justifyRight', false, null);
}
// Function to justify the text
function Feature_Justify() {
    document.execCommand('justifyFull', false, null);
}
// Function to undo the last action
function Feature_Undo() {
    document.execCommand('undo', false, null);
}
// Function to redo the last undone action
function Feature_Redo() {
    document.execCommand('redo', false, null);
}


