const nameInput = document.getElementById('name');
const nameOutput = document.getElementById('name-output');
const positionInput = document.getElementById('position');
const positionOutput = document.getElementById('position-output');
const phoneInput = document.getElementById('phone');
const phoneOutput = document.getElementById('phone-output');
const emailInput = document.getElementById('email');
const emailOutput = document.getElementById('email-output');
const websiteInput = document.getElementById('website');
const websiteOutput = document.getElementById('website-output');
const imgUrlInput = document.getElementById('image-url');
const imgUrlOutput = document.getElementById('image-output');
const fbLinkInput = document.getElementById('fb-link');
const fbLinkOutput = document.getElementById('fb-output');
const igLinkInput = document.getElementById('ig-link');
const igLinkOutput = document.getElementById('ig-output');
const liLinkInput = document.getElementById('li-link');
const liLinkOutput = document.getElementById('li-output');
const bannerInput = document.getElementById('banner');
const bannerOutput = document.getElementById('banner-output');
const bannerLinkInput = document.getElementById('banner-link');
const bannerLinkOutput = document.getElementById('banner-link-output');

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
    emailOutput.innerHTML = emailInput.value;
    websiteOutput.innerHTML = websiteInput.value;
    imgUrlOutput.src = imgUrlInput.value;
    bannerOutput.src = bannerInput.value;
    bannerLinkOutput.href = bannerLinkInput.value;
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
//removing hidden elements
function removeNonDisplayed() {
    const nonDisplayElements = [...codeToHighlight.querySelectorAll('*')];
    nonDisplayElements.forEach(function(item) {
        if (item.style.display === 'none') {
            item.remove();
        }
    })
    
}
// //TYPOGRAPHY 
const typographyPopups = [...document.getElementsByClassName('typography')];
const openButtons = [...document.getElementsByClassName('typography-open')];
const closeButtons = [...document.getElementsByClassName('typography-close')];
const changeButtons = [...document.getElementsByClassName('popup-button')];

function toggleTypography() {
    openButtons.forEach(openButton => {
        openButton.addEventListener('click', () => {
            document.getElementById(openButton.getAttribute('data-popup')).style.display = 'flex'
        })    
    closeButtons.forEach(closeButton => {
        closeButton.addEventListener('click', () => {
            document.getElementById(closeButton.getAttribute('data-popup')).style.display = 'none';
            })
        })
    })
}

function changeTypography() {
    changeButtons.forEach(changeButton => {
        changeButton.addEventListener('click', () => {
            const fontSizeInput = document.getElementById(changeButton.getAttribute('data-popup')+'-font-size');
            const fontColorInput = document.getElementById(changeButton.getAttribute('data-popup')+'-font-color');
            const typographyOutput = document.getElementsByClassName(changeButton.getAttribute('data-popup')+'-output');
            typographyOutput[0].style.fontSize = fontSizeInput.value; 
            typographyOutput[0].style.color = fontColorInput.value; 
            console.log(fontColorInput.value )
        })
    })
}

toggleTypography();
changeTypography();