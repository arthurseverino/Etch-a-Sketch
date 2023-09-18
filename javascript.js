
const grid = document.querySelector('.container');


let func = function(e){
    e.target.style.backgroundColor = 'black';
}


function createGrid(){
    for(let i = 0; i < 256; i++){
        let div = document.createElement('div');
        div.classList.add('cell');
        div.style.border = "1px solid black";
        div.addEventListener('pointerover', func)     
        grid.appendChild(div)
    }
}


function removeAllChildNodes(parent){
    while(parent.firstChild){
        parent.removeChild(parent.firstChild);
    }
}


const screenVal = document.querySelector('.value');
const slider = document.querySelector('#slider')
slider.addEventListener('input', function(){
    let val = document.getElementById('slider').value;
    screenVal.textContent = val;
    removeAllChildNodes(grid);
    grid.setAttribute('style', `grid-template-columns: repeat(${val}, 2fr); grid-template-rows: repeat(${val}, 2fr);`);
    for (let i = 0; i < val*val; i++){
        const div = document.createElement('div');
        div.classList.add('cell');
        div.addEventListener('pointerover', func)
    }
    grid.appendChild(div); 
});


const black = document.querySelector('#black');
black.addEventListener('click', function(){
    let val = document.getElementById('slider').value;
    let cell = grid.children;
    for (let i = 0; i < val*val; i++) {
        cell[i].addEventListener('pointerover', func)
    }
})


const reset = document.querySelector("#reset")
reset.addEventListener('click', function(){
    let val = document.getElementById('slider').value;
    let cell = grid.children;
    for(let i = 0; i < val*val; i++){
        cell[i].style.backgroundColor = "white";
    }
});


createGrid();


