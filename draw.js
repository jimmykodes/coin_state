function Canvas(table) {
  this.table = table
  this.canvas = document.getElementById('canvas')
  this.ctx = this.canvas.getContext('2d')
  this.width = undefined
  this.height = undefined
  this.tableEdge = undefined
  this.keyBoundingBox = undefined
  this.key = undefined
  this.canvas.addEventListener('click', e => {
    if (!this.keyBoundingBox) {
      return
    }
    let clickX = e.offsetX
    let clickY = e.offsetY
    if (clickX > this.keyBoundingBox[0] && clickX < this.keyBoundingBox[2]) {
      if (clickY > this.keyBoundingBox[1] && clickY < this.keyBoundingBox[3]) {
        this.ctx.clearRect(0,0,this.width, this.height)
      }
    }
  })

}

Canvas.prototype.setDim = function (width, height) {
  let dpr = window.devicePixelRatio
  this.width = width
  this.height = height
  this.canvas.height = height * dpr
  this.canvas.width = width * dpr
  this.canvas.style.height = `${height}px`
  this.canvas.style.width = `${width}px`
  this.ctx.scale(dpr, dpr)
  this.tableEdge = _.min([width, height]) - 40
  this.key = this.table.findKey()
}

Canvas.prototype.drawBoard = function () {
  let firstX = (this.width - this.tableEdge) / 2
  let firstY = (this.height - this.tableEdge) / 2
  let ctx = this.ctx
  let squareEdge = this.tableEdge / 8
  ctx.fillStyle = "orange"
  ctx.fillRect(firstX, firstY, this.tableEdge, this.tableEdge)
  ctx.fillStyle = 'brown'
  _.forEach(_.range(8), r => {
    _.forEach(_.range(8), c => {
      let x = firstX + (squareEdge * c)
      let y = firstY + (squareEdge * r)
      if ((r * 8) + c === this.key) {
        this.keyBoundingBox = [x, y, x + squareEdge, y + squareEdge]
      }
      if ((r + c) % 2 === 0) {
        ctx.fillRect(x, y, squareEdge, squareEdge)
      }
      ctx.save()
      ctx.fillStyle = this.table.table[r][c] == 1 ? "grey" : "black"
      ctx.beginPath()
      ctx.arc(x + (squareEdge / 2), y + (squareEdge / 2), squareEdge * .4, 0, Math.PI * 2)
      ctx.fill()
      ctx.restore()
    })
  })
};
