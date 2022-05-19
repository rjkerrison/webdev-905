// Generate the Grid

// querySelector for  <div class="grid"></div>
const gridContainer = document.querySelector('.grid')
console.log(gridContainer)

const grid = {
  height: 10,
  width: 10,
  container: gridContainer,
  cells: null,
  // function to generate a number of cells inside gridContainer
  generateCells() {
    const size = this.height * this.width
    this.cells = []
    for (let i = 0; i < size; i++) {
      const cell = document.createElement('div')
      cell.classList.add('cell')
      cell.textContent = i
      gridContainer.appendChild(cell)
      this.cells.push(cell)
    }
  },
}

grid.generateCells()

console.log(grid.cells[6])

const food = {
  cellIndex: null,
  randomlyMove() {
    this.hide()
    const randomCellIndex = Math.floor(Math.random() * grid.cells.length)
    this.cellIndex = randomCellIndex
    this.show()
  },
  hide() {
    const cell = grid.cells[this.cellIndex]
    if (cell) {
      cell.classList.remove('food')
    }
  },
  show() {
    const cell = grid.cells[this.cellIndex]
    if (cell) {
      cell.classList.add('food')
    }
  },
}

const player = {
  cellIndex: 5,
  getRow() {
    return Math.floor(this.cellIndex / grid.width)
  },
  getColumn() {
    return this.cellIndex % grid.width
  },
  isInLastRow() {
    return this.getRow() === grid.height - 1
  },
  isInFirstRow() {
    return this.getRow() === 0
  },
  isInLastColumn() {
    return this.getColumn() === grid.width - 1
  },
  isInFirstColumn() {
    return this.getColumn() === 0
  },
  moveRight() {
    if (this.isInLastColumn()) {
      return
    }
    this.cellIndex += 1
  },
  moveLeft() {
    if (this.isInFirstColumn()) {
      return
    }
    this.cellIndex += -1
  },
  moveUp() {
    if (this.isInFirstRow()) {
      return
    }
    this.cellIndex += -grid.width
  },
  moveDown() {
    // detect bottom row case "boundary case"
    if (this.isInLastRow()) {
      return
    }

    this.cellIndex += grid.width
  },
  move(direction) {
    // first hide the old player position
    this.hide()
    // now move
    switch (direction) {
      case 'right':
        this.moveRight()
        break
      case 'left':
        this.moveLeft()
        break
      case 'down':
        this.moveDown()
        break
      case 'up':
        this.moveUp()
        break
    }

    this.checkForFood()

    // now show the new one
    this.show()
  },
  checkForFood() {
    if (this.cellIndex === food.cellIndex) {
      console.log('FOOD FOUND')
      food.randomlyMove()
    }
  },
  hide() {
    const currentPlayerCell = grid.cells[this.cellIndex]
    if (currentPlayerCell) {
      currentPlayerCell.classList.remove('player')
    }
  },
  show() {
    const currentPlayerCell = grid.cells[this.cellIndex]
    if (currentPlayerCell) {
      currentPlayerCell.classList.add('player')
    }
  },
}

document.addEventListener('keydown', (event) => {
  console.log('code', event.code)

  switch (event.code) {
    case 'ArrowLeft':
      player.move('left')
      break
    case 'ArrowRight':
      player.move('right')
      break
    case 'ArrowDown':
      player.move('down')
      break
    case 'ArrowUp':
      player.move('up')
      break
  }
})

player.show()
food.randomlyMove()
