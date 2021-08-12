
function proper(text){
    return text
        .split(' ')
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join(' ');
}


function sentence(text) {
    text = text.toLowerCase();
    let output = "";
    let isSentenceStart = true;
    for (let character of text) {
        if (isSentenceStart === true && character !== " "){
            character = character.toUpperCase();
            isSentenceStart = false;
        }
        else if (character === "."){
            isSentenceStart = true;
        }

        output = output + character;
    }

    return output;
}

function download(filename, text) {
    let element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}

// Start file download.
download("hello.txt","This is the content of my file :)");


//get text area element
let textArea = document.getElementById("Text-Area");

//get button elements
const ucButton = document.getElementById("upper-case");
const lcButton = document.getElementById("lower-case");
const pcButton = document.getElementById("proper-case");
const scButton = document.getElementById("sentence-case");

const dButton = document.getElementById("save-text-file");

//add handlers
ucButton.addEventListener("click",function () {
    textArea.value = textArea.value.toUpperCase();
});

lcButton.addEventListener("click",function () {
    textArea.value = textArea.value.toLowerCase();
});

pcButton.addEventListener("click",function () {

    textArea.value = proper(textArea.value);
});

scButton.addEventListener("click",function () {
    textArea.value = sentence(textArea.value);
});

dButton.addEventListener("click", function () {
    download("text.txt", textArea.value);
})

