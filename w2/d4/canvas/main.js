const canvas = document.querySelector('canvas')
const context = canvas.getContext('2d')

function drawEverythingElse() {
  // params are x, y of top left corner, width, height
  context.fillStyle = 'rgb(255, 128, 0)'
  context.fillRect(20, 50, 100, 200)
  context.fillStyle = 'rgb(25, 128, 0)'
  context.fillRect(220, 250, 100, 200)

  context.lineWidth = 3
  context.strokeStyle = 'blue'
  context.strokeRect(200, 200, 20, 50)

  // remove the painted pixels
  context.clearRect(80, 100, 40, 40)

  buildPath()
  drawCircle(250, 250, 50, 'blue')
  drawSemicircle(350, 450, 20, 'purple')
  drawUpSemicircle(250, 470, 20, 'violet')

  strokeLine(50)
}

function clearCanvas() {
  context.clearRect(0, 0, canvas.width, canvas.height)
}

function buildPath() {
  // start the path
  context.beginPath()
  // give directions
  // STARTING POINT for our path
  context.moveTo(400, 100)
  // DRAW AN EDGE
  context.lineTo(390, 160)
  // DRAW AN EDGE
  context.lineTo(340, 90)
  // context.lineTo(280, 120)
  // end (and close) the path — draws an edge from end back to start
  context.closePath()
  // style the path
  context.fillStyle = 'red'
  context.stroke()
  context.fill()
}

function drawCircle(x, y, radius, fillStyle) {
  context.beginPath()
  context.arc(x, y, radius, 0, 2 * Math.PI)
  context.closePath()
  context.fillStyle = fillStyle
  context.fill()
}

function drawSemicircle(x, y, radius, fillStyle) {
  context.beginPath()
  context.arc(x, y, radius, 0, 1 * Math.PI)
  context.closePath()
  context.fillStyle = fillStyle
  context.fill()
}

function drawUpSemicircle(x, y, radius, fillStyle) {
  context.beginPath()
  context.arc(x, y, radius, Math.PI, 2 * Math.PI)
  context.closePath()
  context.fillStyle = fillStyle
  context.fill()
}

function strokeLine(x) {
  context.beginPath()
  // give directions
  // STARTING POINT for our path
  context.moveTo(x, 0)
  // DRAW AN EDGE
  context.lineTo(x, canvas.height)
  context.closePath()
  context.lineWidth = 1
  context.stroke()
}

class Bullet {
  constructor(x, y) {
    this.x = x
    this.y = y
  }
  draw() {
    drawCircle(this.x, this.y, 20, 'black')
  }
  move() {
    if (this.y > 400) {
      this.y = 50
      this.x = 50
    }
    this.x += 1
    this.y += 2
  }
}

const bullet = new Bullet(60, 70)
const bullet2 = new Bullet(170, 30)

function moveCircle() {
  // MOVE THINGS
  bullet.move()
  bullet2.move()
  // When animating, clear the whole canvas
  clearCanvas()
  // draw anything "static"
  drawEverythingElse()
  // draw the animations
  bullet.draw()
  bullet2.draw()
}

setInterval(moveCircle, 50)
