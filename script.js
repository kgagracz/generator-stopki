const imgUrlInput = document.getElementById('image-url');
const imgUrlOutput = document.getElementById('image-output');
const bannerInput = document.getElementById('banner-url');
const bannerOutput = document.getElementById('banner-url-output');
const bannerLinkInput = document.getElementById('banner-link');
const bannerLinkOutput = document.getElementById('banner-link-output');

const submitButton = document.getElementById('submit');
const codeOutput = document.getElementById('code');
const codeToHighlight = document.getElementById('Tabela_01');

//generate signifiture
function generate() {
    const formOutputs = document.querySelectorAll('[data-output-target]');
    imgUrlOutput.src = imgUrlInput.value;
    bannerOutput.src = bannerInput.value;
    bannerLinkOutput.href = bannerLinkInput.value;

    formOutputs.forEach(formOutput => {
        formOutput.innerHTML = document.getElementById(formOutput.getAttribute('data-output-target')).value;
    })
    codeOutput.innerHTML = codeToHighlight.outerHTML;
    return removeNonDisplayed();
}
submitButton.addEventListener('click', generate);
    
//hiding elements to remove
let displayed = true;
const outputs = [...document.getElementsByClassName('remove-button')];

outputs.forEach(toggleElement);

function toggleElement(icon) {
    icon.addEventListener('click', () => {
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
    nonDisplayElements.forEach(item => {
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
        })
    })
}

toggleTypography();
changeTypography();