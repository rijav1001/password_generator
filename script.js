const PwEl = document.getElementById('pw');
const copyEl = document.getElementById('copy');
const lenEl = document.getElementById('len');
const upperEl = document.getElementById('upper');
const lowerEl = document.getElementById('lower');
const symbolEl = document.getElementById('symbol');
const generateEl = document.getElementById('generate');
const numberEL = document.getElementById('number');
const upperLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowerLetters = 'abcdefghijklmnopqrstuvwxyz';
const numbers = '0123456789';
const symbols = '~!@#$%^&*()_+=|';

// functions to get the characters of the password
function getLowerCase() {
    return lowerLetters[Math.floor(Math.random() * lowerLetters.length)];
}

function getUpperCase() {
    return upperLetters[Math.floor(Math.random() * upperLetters.length)];
}

function getNumber() {
    // console.log(numbers[Math.floor(Math.random() * numbers.length)]);
    return numbers[Math.floor(Math.random() * numbers.length)];
}

function getSymbol() {
    return symbols[Math.floor(Math.random() * symbols.length)];
}

// function to generate the password
function generatePassword() {
    const len = lenEl.value;
    // console.log(len);
    let password = '';
    for(let i = 0; i < len; i++) {
        const x = generateX();
        password += x;
    }
    // console.log(password);
    PwEl.innerText = password;
}

function generateX() {
    const xs = [];
    if(upperEl.checked) {
        xs.push(getUpperCase());
    }

    if(lowerEl.checked) {
        xs.push(getLowerCase());
    }

    if(numberEL.checked) {
        xs.push(getNumber());
    }

    if(symbolEl.checked) {
        xs.push(getSymbol());
    }

    if(xs.length === 0) {
        console.log(xs);
        return '';
    }

    // console.log(xs);
    return xs[Math.floor(Math.random() * xs.length)];
}

generateEl.addEventListener('click', generatePassword);

copyEl.addEventListener('click', () => {
    const txtArea = document.createElement('textarea');
    const password = PwEl.innerText;
    // console.log(password);

    if(!password) {
        return;
    }
    txtArea.value = password;
    document.body.appendChild(txtArea);
    txtArea.select();
    document.execCommand('copy');
    txtArea.remove();
    alert('Password copied to clipboard');
});