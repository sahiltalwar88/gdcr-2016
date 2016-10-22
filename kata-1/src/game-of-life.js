function createBoard (columns) {
  var board = []

  for (var i = 0; i <= columns; i++) {
    board.push([ { alive: true } ])
  }

  return board
}

var Game = {
  board: createBoard(this.columns),
  columns: 100,
  rows: 100,

  getCells: function () {
    return this.rows * this.columns
  }
}

module.exports = Game
