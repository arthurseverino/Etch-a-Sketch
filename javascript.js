
const grid = document.querySelector('.grid');

let gridValue = document.querySelector('.grid-size');
let gridSize = document.querySelector('input');

let squareSize = 8;

createGrid(squareSize);

// Create Squared Divs (cells)
function createDiv(size) {
  const div = document.createElement('div');
  div.classList.add('cell');
  div.style.width = `${size}px`;
  div.style.height = `${size}px`;

  return div;
}

// Create The Grid and appending the children(cells) 
// this is also why is comes out formatted correctly because of the nested for loop
// it will do 8 across before moving on to the next row   
function createGrid(gridSize) {
  for (let i = 0; i < gridSize; i++) {
    for (let j = 0; j < gridSize; j++) {
      grid.appendChild(createDiv(grid.clientWidth / gridSize));
    }
  }
}

// removes the children from current grid
// then creates a new grid with squareSize
function reset() {
  while (grid.firstChild) {
    grid.removeChild(grid.lastChild);
  }
  createGrid(squareSize);
}

// Add the "active" class to divs with a "cell" class
grid.addEventListener('pointerover', function (e) {
  if (e.target.matches('.cell')) {
    e.target.classList.add('active');
  }
});

// listening for slider input
// change value of squareSize and display updated correct size
gridSize.addEventListener('input', function (e) {
  squareSize = e.target.value;
  gridValue.textContent = `${squareSize}x${squareSize}`;
});



const resetBtn = document.querySelector('.reset');
const applyGridSize = document.querySelector('.apply');

// here we are adding event listeners to the buttons 
// this works because reset() applies the correct squareSize by calling createGrid(squareSize);
applyGridSize.addEventListener('click', function () {
  reset();
});

resetBtn.addEventListener('click', reset);

