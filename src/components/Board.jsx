import { Square } from "./square"
import '../styles/Board.css'
import { useState } from "react"

export function Board() {
  const [squares] = useState([])
  function removeBoard() {
    squares.length = 0
  }

  function generateBoard() {
    let color = ''
    for (let i = 0; i < 64; i++) {
      if (Math.trunc(i / 8) % 2 == 0) {
        color = i % 2 == 0 ? 'white' : 'black'
      } else {
        color = i % 2 == 0 ? 'black' : 'white'
      }
      squares.push(color)
    }
  }
  
  // function onClick() {
  //   console.log("Clicou")
  // }
  
  removeBoard()
  generateBoard()

  return (
    <div id="board">
      {squares.map((square, index) => {
        return <Square color={square} key={index}/>
      })}
    </div>
  )
}