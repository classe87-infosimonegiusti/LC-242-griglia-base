const gridDom = document.getElementById('grid');

for (let i =0; i < 64; i++) {

    //gridDom.innerHTML += `<div class="square"></div>`;

    const currentSquare = createNewSquare();

    currentSquare.addEventListener('click', function() {
        this.classList.toggle('clicked');
    });
    
    gridDom.append(currentSquare);

}



function createNewSquare() {
    const currentElement = document.createElement('div');
    currentElement.classList.add('square');
    return currentElement;
}