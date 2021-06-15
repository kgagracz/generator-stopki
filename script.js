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
const codeToHighlight = document.getElementById('Tabela_01');

//generate signifiture
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
    
    codeOutput.innerHTML = codeToHighlight.outerHTML;
    console.log(codeToHighlight);
    return removeNonDisplayed();
}
submitButton.addEventListener('click', generate);

//hiding elements to remove
let displayed = true;
const outputs = [...document.getElementsByClassName('remove-button')];

outputs.forEach(toggleElement);

function toggleElement(icon) {
    icon.addEventListener('click', function() {
        if (displayed) {
            displayed = false;
            document.getElementById(icon.id+'-output').style.display = 'none';
            icon.querySelector('i').innerHTML = 'add';
            icon.style.color = 'green';
        } else {
            displayed = true;
            document.getElementById(icon.id+'-output').style.display = 'block';
            icon.querySelector('i').innerHTML = 'remove';
            icon.style.color = 'red';
        }
    })
}
//removing hided elements
function removeNonDisplayed() {
    const nonDisplayElements = [...codeToHighlight.querySelectorAll('*')];
    nonDisplayElements.forEach(function(item) {
        if (item.style.display === 'none') {
            item.remove();
        }
    })
    
}
//TYPOGRAPHY 
//opening typography 
const nameTypographyOpen = document.getElementById('name-typography-open')
nameTypographyOpen.addEventListener('click', function() {
    typographyPopup.style.display = 'flex';
})
//closing typography
const closeTypography = document.getElementById('close-typography');
const typographyPopup = document.getElementById('typography');
closeTypography.addEventListener('click', function() {
    typographyPopup.style.display = 'none';
})
const typographyButton = document.getElementById('name-typography');
typographyButton.addEventListener('click', changeTypography) 
//change of typography
function changeTypography() {
    const fontSizeInput = document.getElementById('font-size-input');
    const fontColorInput = document.getElementById('font-color-input');
    
    nameOutput.style.fontSize = fontSizeInput.value
    nameOutput.style.color = fontColorInput.value
}


