const display = document.querySelector('#display_password');
const copied = document.querySelector('#display_copied');
const copiedIcon = document.querySelector('#display_icon');
const spanLength = document.querySelector('#span_length');
const range = document.querySelector('#range');
const inputsChk = [...document.querySelectorAll('input[type=checkbox')];
const chkUpp = document.querySelector('#upp');
const chkLow = document.querySelector('#low');
const chkNum = document.querySelector('#num');
const chkSym = document.querySelector('#sym');
const levelOutput = document.querySelector('#level_output');
const bars = [...document.querySelectorAll('.bars')];
const generate = document.querySelector('#generate');

let passwordFlag = false;

inputsChk.map((input) => {
    input.checked = true;
});

const getLength = () => {
    range.addEventListener("input", (e) => {
        spanLength.innerText = e.target.value;
    })
}

getLength();

const characters = Array.from(Array(26)).map((_, i) => i + 97);
const lowercaseCharac = characters.map((item) => String.fromCharCode(item));
const uppercaseCharac = lowercaseCharac.map((item) => item.toUpperCase());

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const symbols = ['!', '@', '#', '$', '%', '&', '*', '_', '^', '~'];

generate.addEventListener("click", () => {
    generatePassword();
    checkingSecurity();
});

copiedIcon.addEventListener("click", () => {
    if (passwordFlag) {
        copied.classList.remove('hide');
        copied.setAttribute('style', 'font-size: 0.8rem; color: var(--neon_green); animation: comeAndGo 2s forwards ease-in-out');
        const time = setTimeout(copyPassword, 2000);
        navigator.clipboard.writeText(display.textContent);
    }
})

const copyPassword = () => {
    copied.classList.add('hide');
    copied.setAttribute('style', 'font-size: 0.8rem; color: var(--neon_green)');
}

const generateArrayAndValidation = (
    hasUpper,
    hasLower,
    hasNumbers,
    hasSymbols,
    length
) => {
    const newArray = [
        ...(hasUpper?uppercaseCharac:[]),
        ...(hasLower?lowercaseCharac:[]),
        ...(hasNumbers?numbers:[]),
        ...(hasSymbols?symbols:[])
    ];

    let levelOfSecurity = 0;

    let validationPrototype = '';

    if (hasUpper) {
        validationPrototype += '(?=.*[A-Z])';
        levelOfSecurity++;
    }
    if (hasLower) {
        validationPrototype += '(?=.*[a-z])';
        levelOfSecurity++;
    }
    if (hasNumbers) {
        validationPrototype += '(?=.*\\d)';
        levelOfSecurity++;
    }
    if (hasSymbols) {
        validationPrototype += '(?=.*[}{#@!%&,.^?~=+\\-_\\/*\\-+.\\|])';
        levelOfSecurity++;
    }

    validationPrototype += `.{${length},}`;


    const finalvalidation = new RegExp(validationPrototype);

    return {
        array: newArray,
        validation: finalvalidation,
        security: levelOfSecurity,
    };
};

const generatePassword = () => {
    const passwordObject = generateArrayAndValidation(
        chkUpp.checked,
        chkLow.checked,
        chkNum.checked,
        chkSym.checked,
        range.value
    );

    const elementsRequired = passwordObject.array;

    const validation = passwordObject.validation;

    const length = range.value;

    while (!validation.test(password) || !password) {
        var password = '';
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * elementsRequired.length);
            password += elementsRequired[randomIndex];
        };
    };

    if (passwordObject.array.length != 0) {
        display.textContent = password;
        passwordFlag = true;
    } else {
        display.textContent = 'No requirements!';
        passwordFlag = false;
    }
};

const checkingSecurity = () => {
    const securityLevel = generateArrayAndValidation(
        chkUpp.checked,
        chkLow.checked,
        chkNum.checked,
        chkSym.checked,
        range.value
    ).security;

    const howManyBarsComplete = bars.slice(0, securityLevel);
    const howManyBarsIncomplete = bars.slice(securityLevel, bars.length);

    if (securityLevel == 1) {
        levelOutput.textContent = 'VERY WEAK';
        var cor = 'rgb(231, 45, 45)';
    }
    else if (securityLevel == 2) {
        levelOutput.textContent = 'WEAK';
        var cor = 'rgb(236, 136, 54)';
    }
    else if (securityLevel == 3) {
        levelOutput.textContent = 'MEDIUM';
        var cor = 'rgb(235, 235, 114)'
    }
    else if (securityLevel == 4) {
        levelOutput.textContent = 'STRONG';
        var cor = 'rgb(121, 235, 111)'
    }

    howManyBarsComplete.map((bar) => {
        bar.classList.remove('incomplete');
        bar.classList.add('complete');
        bar.style.backgroundColor = `${cor}`
    });
    howManyBarsIncomplete.map((bar) => {
        bar.classList.remove('complete');
        bar.classList.add('incomplete');
        bar.style.backgroundColor = '#14131A';
    });
};