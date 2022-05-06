const gridElement = document.querySelector('.grid')

// Cells
const gridWidth = 10
const gridHeight = 10
const cells = []

let score = 0

// which CELL INDEX is the character at
const initialPosition = 0
let currentPosition = initialPosition

// Populate the grid
for (let i = 0; i < gridWidth * gridHeight; i++) {
  const cell = createCell()
  gridElement.appendChild(cell)
  // save the cell for later!
  cells.push(cell)
}

function createCell() {
  const cell = document.createElement('div')
  cell.classList.add('cell')
  return cell
}

function showPlayer(classToAdd) {
  // Show the player in the currentPosition
  cells[currentPosition].classList.add('paddington')
  if (classToAdd) {
    cells[currentPosition].classList.add(classToAdd)
  }
}

function showMarmalade(position) {
  cells[position].classList.add('marmalade')
}

function eatMarmalade(position) {
  cells[position].classList.add('eaten')
}

function removePlayer() {
  // Stop showing the player in the currentPosition
  cells[currentPosition].classList.remove('paddington', 'left')
}

function movePlayer(newPosition, classToAdd) {
  if (newPosition < 0) {
    return
  }
  if (newPosition > gridWidth * gridHeight - 1) {
    return
  }
  removePlayer()
  currentPosition = newPosition

  if (isUneatenMarmalade(newPosition)) {
    score += 50
    console.log('SCORE', score)
    eatMarmalade(newPosition)
  }
  // Always show last
  showPlayer(classToAdd)
}

function isUneatenMarmalade(position) {
  const isMarmalade = cells[position].classList.contains('marmalade')
  const isEaten = cells[position].classList.contains('eaten')
  return isMarmalade && !isEaten
}

// show initial position
showPlayer()

document.addEventListener('keydown', function (event) {
  console.log(event.key, event.keyCode, event.code)

  switch (event.key) {
    case 'ArrowUp':
      movePlayer(currentPosition - gridWidth)
      break
    case 'ArrowDown':
      movePlayer(currentPosition + gridWidth)
      break
    case 'ArrowLeft':
      if (currentPosition % gridWidth === 0) {
        break
      }
      movePlayer(currentPosition - 1, 'left')
      break
    case 'ArrowRight':
      if (currentPosition % gridWidth === gridWidth - 1) {
        break
      }
      movePlayer(currentPosition + 1)
      break
  }
})

function randomlyPlaceMarmalade() {
  const randomPosition = Math.floor(Math.random() * cells.length)
  showMarmalade(randomPosition)
}

for (let i = 0; i < Math.sqrt(gridWidth * gridHeight); i++) {
  randomlyPlaceMarmalade()
}
