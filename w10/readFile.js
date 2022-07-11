const readline = require('readline')

const lineReader = readline.createInterface({
  input: require('fs').createReadStream(__dirname + '/instructions.txt'),
})

let lineCounter = 0
lineReader.on('line', (line) => {
  lineCounter++

  printLine(line, lineCounter)
})

lineReader.on('close', () => {
  console.log('We could now execute some final action')
})

const printLine = (line, i) => {
  console.log(`Line ${i.toString().padStart(2, '0')}: ${line}`)
}
