/* eslint-env mocha */

var assert = require('assert')
var Game = require('../src/game-of-life')

describe('Game of Life', function () {
  it('should have 100 rows', function () {
    assert.equal(Game.rows, 100)
  })

  it('should have 100 columns', function () {
    assert.equal(Game.columns, 100)
  })

  it('should provide access to the board', function () {
    assert(Game.board instanceof Array)
  })

  it('should have as many cells in the board as rows times columns', function () {
    assert(Game.getCells(), Game.rows * Game.columns)
  })

  it('should have a board which has an array for every column', function () {
    Game.board.forEach(function (array) {
      assert(array instanceof Array)
    })
    assert.equal(Game.board.length, Game.columns)
  })

  it('should start with some live cells', function () {
    var someLiveCells = false

    Game.board.forEach(function (array) {
      array.forEach(function (cell) {
        if (cell.alive === true) {
          someLiveCells = true
          return
        }
      })
    })

    assert(someLiveCells, true)
  })
})
