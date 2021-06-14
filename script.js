let nameInput = document.getElementById('name');
let nameOutput = document.getElementById('name-output');

let positionInput = document.getElementById('position');
let positionOutput = document.getElementById('position-output');

let phoneInput = document.getElementById('phone');
let phoneOutput = document.getElementById('phone-output');
console.log(phoneOutput)
let emailInput = document.getElementById('email');
let emailOutput = document.getElementById('email-output');

let imgUrlInput = document.getElementById('image-url');
let imgUrlOutput = document.getElementById('image-url-output');

let submitButton = document.getElementById('submit');

let codeOutput = document.getElementById('signature');
function generate() {
    nameOutput.innerHTML = nameInput.value;
    positionOutput.innerHTML = positionInput.value;
    phoneOutput.innerHTML = phoneInput.value;
    emailOutput.innerHTML = emailInput.value;
    imgUrlOutput.src = imgUrlInput.value;
    
    
    let codeToHighlight = document.getElementById('Tabela_01');
    codeOutput.innerHTML = codeToHighlight.outerHTML
    

}

submitButton.addEventListener('click', generate);