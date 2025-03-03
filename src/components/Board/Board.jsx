import './Board.css'

export function Board() {
  let board = []
  function removeBoard() {
    board.length = 0
  }

  function generateBoard() {
    const horizontalAxis = ["a","b","c","d","e","f","g","h"]
    const verticalAxis = ["1","2","3","4","5","6","7","8"]

    for(let i = 1; i <= horizontalAxis.length; i++) {
      for (let j = 1; j <= verticalAxis.length; j++) {
        if ((i + j) % 2 == 0) {
          board.push(
            <div className="square white-square" key={horizontalAxis[i]+verticalAxis[j]}></div>
          )
        } else {
          board.push(
            <div className="square black-square" key={horizontalAxis[i]+verticalAxis[j]}></div>
          )
        }
      }
    }
  }
  
  removeBoard()
  generateBoard()

  return (
    <div id="board">{board}</div>
  )
}