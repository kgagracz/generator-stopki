const genderInput = document.getElementById('sex');
const nameOutput = document.getElementById('name-output');
const positionOutput = document.getElementById('position-output');
const phoneOutput = document.getElementById('phone-output');
const phone2Output = document.getElementById('phone2-output');
const emailOutput = document.getElementById('email-output');
const websiteOutput = document.getElementById('website-output');
const imgUrlInput = document.getElementById('image-url');
const imgUrlOutput = document.getElementById('image-output');
const bannerInput = document.getElementById('banner-url');
const bannerOutput = document.getElementById('banner-url-output');
const bannerLinkInput = document.getElementById('banner-link');
const bannerLinkOutput = document.getElementById('banner-link-output');
const fbLinkOutput = document.getElementById('fb-output');
const fbInput = document.getElementById('fb-link');
const igLinkOutput = document.getElementById('ig-output');
const igInput = document.getElementById('ig-link');
const liLinkOutput = document.getElementById('li-output');
const liInput = document.getElementById('li-link');
const ttLinkOutput = document.getElementById('tt-output');
const ttInput = document.getElementById('tt-link');
const teLinkOutput = document.getElementById('te-output');
const teInput = document.getElementById('te-link');

const inputs = [...document.getElementsByClassName('form-input')];
const outputs = [];

// removing preloader
    setInterval(() => {
      document.getElementById('preloader').classList.remove('show-preloader');
    }, 1300);

const submitButton = document.getElementById('submit');
const codeOutput = document.getElementById('code');
const codeToHighlight = document.getElementById('Tabela_01');
//generate signifiture
const generate = () => {
    const formOutputs = document.querySelectorAll('[data-output-target]');
    imgUrlOutput.src = imgUrlInput.value;

    if ( !imgUrlInput.value) {
        if (genderInput.value === 'man') {
            imgUrlOutput.src = 'http://stopka.ec-at.com/img/avatar-man.png'
        }
        if (genderInput.value === 'woman') {
            imgUrlOutput.src = 'http://stopka.ec-at.com/img/avatar-woman.png'
        }
    }

    bannerOutput.src = bannerInput.value;
    bannerLinkOutput.href = bannerLinkInput.value;
    fbLinkOutput.href = fbInput.value;
    igLinkOutput.href = igInput.value;
    liLinkOutput.href = liInput.value;
    ttLinkOutput.href = ttInput.value;
    teLinkOutput.href = teInput.value;
    formOutputs.forEach(formOutput => {
        formOutput.innerHTML = document.getElementById(formOutput.getAttribute('data-output-target')).value;
    })
    codeOutput.innerHTML = codeToHighlight.outerHTML;
    return removeHidden();
}
submitButton.addEventListener('click', generate);

//hiding elements to remove
let displayed = true;
const removeButtons = [...document.getElementsByClassName('remove-button')];
const toggleElement = (icon) => {
    icon.addEventListener('click', () => {
        if (displayed) {
            document.getElementById(icon.id+'-output').style.display = 'none';
            icon.querySelector('i').innerHTML = 'add';
            displayed = false;
        } else if (!displayed){
            document.getElementById(icon.id+'-output').style.display = 'inline';
            icon.querySelector('i').innerHTML = 'remove';
            displayed = true;
        }
    })
}
removeButtons.forEach(toggleElement);

//removing hidden elements
const removeHidden = () => {
    const notDisplayedElements = [...codeToHighlight.querySelectorAll('*')];
    notDisplayedElements.forEach(item => {
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

const toggleTypography = () => {
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

const changeTypography = () => {
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

// copying code to clipboard
const copyCodeButton = document.getElementById('copy-code');
const copyCode = () => {
    document.getElementById('code').select();
    document.execCommand('copy');
    alert('Kod stopki został skopiowany do schowka');
}
copyCodeButton.addEventListener('click', copyCode);


// (e)=>(e.target.name, e.target.value)

// updateData = (name, value) => {
//     this.setState({
//         [name]: value
//     })
// }