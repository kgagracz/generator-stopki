let nameInput = document.getElementById('name');
let nameOutput = document.getElementById('name-output');

let positionInput = document.getElementById('position');
let positionOutput = document.getElementById('position-output');

let phoneInput = document.getElementById('phone');
let phoneOutput = document.getElementById('phone-output');
let emailInput = document.getElementById('email');
let emailOutput = document.getElementById('email-output');
let imgUrlInput = document.getElementById('image-url');
let imgUrlOutput = document.getElementById('image-url-output');

let fbLinkInput = document.getElementById('fb-link');
let fbLinkOutput = document.getElementById('fb-link-output');
let igLinkInput = document.getElementById('ig-link');
let igLinkOutput = document.getElementById('ig-link-output');
let liLinkInput = document.getElementById('li-link');
let liLinkOutput = document.getElementById('li-link-output');

let submitButton = document.getElementById('submit');

let codeOutput = document.getElementById('code');
function generate() {
    nameOutput.innerHTML = nameInput.value;
    positionOutput.innerHTML = positionInput.value;
    phoneOutput.innerHTML = phoneInput.value;
    emailOutput.href = emailInput.value;
    imgUrlOutput.src = imgUrlInput.value;
    fbLinkOutput.href = fbLinkInput.value;
    igLinkOutput.href = igLinkInput.value;
    liLinkOutput.href = liLinkInput.value;
    
    let codeToHighlight = '';
    codeToHighlight = document.getElementById('Tabela_01').outerHTML;
    codeOutput.innerHTML = codeToHighlight
    console.log(codeToHighlight)

}

submitButton.addEventListener('click', generate);