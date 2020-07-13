$(document).ready(() => {
  let table = new Table()
  let canvas = new Canvas(table)
  canvas.setDim(window.innerWidth, window.innerHeight)
  canvas.drawBoard()
})
