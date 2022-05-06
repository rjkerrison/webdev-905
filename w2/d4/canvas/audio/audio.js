const audioCtx = new (window.AudioContext || window.webkitAudioContext)()

const canvas = document.querySelector('canvas')
const media = document.querySelector('audio')
const source = audioCtx.createMediaElementSource(media)

const analyser = audioCtx.createAnalyser()
analyser.fftSize = 2048

const bufferLength = analyser.frequencyBinCount
const dataArray = new Uint8Array(bufferLength)
analyser.getByteTimeDomainData(dataArray)

// Connect the source to be analysed
source.connect(analyser)

// Get a canvas defined with ID "oscilloscope"
const canvasCtx = canvas.getContext('2d')

// draw an oscilloscope of the current audio source

function draw() {
  requestAnimationFrame(draw)

  analyser.getByteTimeDomainData(dataArray)

  canvasCtx.fillStyle = 'rgb(200, 200, 200)'
  canvasCtx.fillRect(0, 0, canvas.width, canvas.height)

  canvasCtx.lineWidth = 2
  canvasCtx.strokeStyle = 'rgb(0, 0, 0)'

  canvasCtx.beginPath()

  const sliceWidth = (canvas.width * 1.0) / bufferLength
  let x = 0

  for (let i = 0; i < bufferLength; i++) {
    const v = dataArray[i] / 128.0
    const y = (v * canvas.height) / 2

    if (i === 0) {
      canvasCtx.moveTo(x, y)
    } else {
      canvasCtx.lineTo(x, y)
    }

    x += sliceWidth
  }

  canvasCtx.lineTo(canvas.width, canvas.height / 2)
  canvasCtx.stroke()
}

draw()
