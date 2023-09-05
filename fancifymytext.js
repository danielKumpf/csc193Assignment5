textArea = document.getElementById("textEntry");

function bigger() {
    textArea.style.fontSize = "24px";
}

function fancy() {
    textArea.style.fontWeight = "bold";
    textArea.style.color = "blue";
    textArea.style.textDecoration = "underline";
}

function boring() {
    textArea.style.fontWeight = "normal";
    textArea.style.color = "black";
    textArea.style.textDecoration = "none";
}

function moo() {
    textArea.value = textArea.value.toUpperCase();

    // append "Moo" to the last word of each sentence
    function mooHelper(item, index, arr) {
        if (item.trim().length > 0) {
            arr[index] = item + "MOO"
        }
    }
    let sentences = textArea.value.split(".")
    sentences.forEach(mooHelper)
    textArea.value = sentences.join(".")
}
