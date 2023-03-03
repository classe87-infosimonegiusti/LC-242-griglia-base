const gridDom = document.getElementById('grid');


let numberBlacklist = []; //qui ci finiscono tutti i numeri già usciti


for (let i = 0; i < 64; i++) {

    const newValidRandomNumber = generateUniqueRandomNumber(numberBlacklist, 1, 64);
    numberBlacklist.push(newValidRandomNumber);

    const currentSquare = createNewSquare(newValidRandomNumber);

    currentSquare.addEventListener('click', function() {
        this.classList.toggle('clicked');
        console.log(newValidRandomNumber);
    });
    
    gridDom.append(currentSquare);

}


function createNewSquare(number) {
    const currentElement = document.createElement('div');
    currentElement.classList.add('square');

    if (isOddEven(number) == 'even') {
        currentElement.classList.add('square-even');
    } else {
        currentElement.classList.add('square-odd');
    }

    currentElement.innerHTML = `<div class="square-number">${number}</div>`;

    return currentElement;
}

function generateUniqueRandomNumber(blacklist, min, max) {

    let isValidNumber = false;
    let randomNumber;

    while (!isValidNumber) {
        randomNumber = generateRandomNumber(min, max);
        if (!blacklist.includes(randomNumber)) {
            isValidNumber = true;
        }
    }

    return randomNumber;

}

function generateRandomNumber(min, max) {
    const number = Math.floor(Math.random() * (max - min +1)) + min;
    return number;
}

function isOddEven(number) {
    if (number % 2 == 0) {
        return 'even';
    } else {
        return 'odd';
    }
}