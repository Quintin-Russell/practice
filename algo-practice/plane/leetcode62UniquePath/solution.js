///Users/qrussell/Downloads/[BTCLOD.COM] Invert Binary Tree - Depth First Search - Leetcode 226-720p.mp4

const uniquePaths = (x,y) => {
  const makeBoard = (x,y) => {
    const finalArr = []
    for (let i = 1; i <= y; i++) {
      finalArr.push(Array(x).fill(1))
    }
    return finalArr
  }
  const board = makeBoard(x,y)


  for (let y1 = board.length - 2; y1 >= 0; y1--) {

    for (let x1 = board[y1].length - 2; x1 >= 0; x1--) {
      const D = board[y1 + 1][x1]
      const R = board[y1][x1 + 1]
      board[y1][x1] = D + R
    }
  }

  return board[0][0]
}

console.log(uniquePaths(7,3)) //expected = 28
