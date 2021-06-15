const nameInput = document.getElementById('name');
const nameOutput = document.getElementById('name-output');
const positionInput = document.getElementById('position');
const positionOutput = document.getElementById('position-output');
const phoneInput = document.getElementById('phone');
const phoneOutput = document.getElementById('phone-output');
const emailInput = document.getElementById('email');
const emailOutput = document.getElementById('email-output');
const imgUrlInput = document.getElementById('image-url');
const imgUrlOutput = document.getElementById('image-output');
const fbLinkInput = document.getElementById('fb-link');
const fbLinkOutput = document.getElementById('fb-output');
const igLinkInput = document.getElementById('ig-link');
const igLinkOutput = document.getElementById('ig-output');
const liLinkInput = document.getElementById('li-link');
const liLinkOutput = document.getElementById('li-output');
const bottomTextInput = document.getElementById('bottom-text');
const bottomTextOutput = document.getElementById('bottom-output')
const submitButton = document.getElementById('submit');
const codeOutput = document.getElementById('code');


function generate() {
    nameOutput.innerHTML = nameInput.value;
    positionOutput.innerHTML = positionInput.value;
    phoneOutput.innerHTML = phoneInput.value;
    emailOutput.href = emailInput.value;
    imgUrlOutput.src = imgUrlInput.value;
    fbLinkOutput.href = fbLinkInput.value;
    igLinkOutput.href = igLinkInput.value;
    liLinkOutput.href = liLinkInput.value;
    bottomTextOutput.innerHTML = bottomTextInput.value;
    
    let codeToHighlight = '';
    codeToHighlight = document.getElementById('Tabela_01').outerHTML;
    codeOutput.innerHTML = codeToHighlight
    console.log(codeToHighlight)

}

submitButton.addEventListener('click', generate);







let outputs = [...document.getElementsByClassName('icon-container')];
outputs.forEach(function(icon) {
    icon.addEventListener('click', function() {
        document.getElementById(icon.id+'-output').remove();
    })
})

