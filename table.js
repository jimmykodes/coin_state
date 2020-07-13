function parity(arr) {
  return _.sum(_.flatten(arr)) % 2
}

function Table() {
  this.table = this.genTable()
}

Table.prototype.genTable = function () {
  return _.map(_.range(8), x => {
    return _.map(_.range(8), y => _.random())
  })
}

Table.prototype.vstripes = function () {
return parity(_.map(this.table, row => [row[1], row[3], row[5], row[7]]))
}

Table.prototype.vbands = function () {
  return parity(_.map(this.table, row => [row[2], row[3], row[6], row[7]]))
}

Table.prototype.vblock = function () {
  return parity(_.map(this.table, row => [row[4], row[5], row[6], row[7]]))
}

Table.prototype.hstripes = function () {
  return parity([this.table[1],this.table[3],this.table[5],this.table[7]])
}

Table.prototype.hbands = function () {
  return parity([this.table[2],this.table[3],this.table[6],this.table[7]])
}

Table.prototype.hblock = function () {
  return parity([this.table[4],this.table[5],this.table[6],this.table[7]])
}

Table.prototype.findKey = function () {
  let bin = [this.vstripes(), this.vbands(), this.vblock(), this.hstripes(), this.hbands(), this.hblock()]
  return _.sum(_.map(bin, (d, i) => d * (2 ** i)))
};
