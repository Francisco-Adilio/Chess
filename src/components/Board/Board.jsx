import { Square } from '../Square/Square'
import './Board.css'

export function Board() {
  let board = []
  let pieces = [
    {x:1,y:1,image:"TorreBranca"},
    {x:1,y:2,image:"CavaloBranco"},
    {x:1,y:3,image:"BispoBranco"},
    {x:1,y:4,image:"DamaBranca"},
    {x:1,y:5,image:"ReiBranco"},
    {x:1,y:6,image:"BispoBranco"},
    {x:1,y:7,image:"CavaloBranco"},
    {x:1,y:8,image:"TorreBranca"},
    {x:2,y:1,image:"PeaoBranco"},
    {x:2,y:2,image:"PeaoBranco"},
    {x:2,y:3,image:"PeaoBranco"},
    {x:2,y:4,image:"PeaoBranco"},
    {x:2,y:5,image:"PeaoBranco"},
    {x:2,y:6,image:"PeaoBranco"},
    {x:2,y:7,image:"PeaoBranco"},
    {x:2,y:8,image:"PeaoBranco"},
    {x:8,y:1,image:"TorrePreta"},
    {x:8,y:2,image:"CavaloPreto"},
    {x:8,y:3,image:"BispoPreto"},
    {x:8,y:4,image:"DamaPreta"},
    {x:8,y:5,image:"ReiPreto"},
    {x:8,y:6,image:"BispoPreto"},
    {x:8,y:7,image:"CavaloPreto"},
    {x:8,y:8,image:"TorrePreta"},
    {x:7,y:1,image:"PeaoPreto"},
    {x:7,y:2,image:"PeaoPreto"},
    {x:7,y:3,image:"PeaoPreto"},
    {x:7,y:4,image:"PeaoPreto"},
    {x:7,y:5,image:"PeaoPreto"},
    {x:7,y:6,image:"PeaoPreto"},
    {x:7,y:7,image:"PeaoPreto"},
    {x:7,y:8,image:"PeaoPreto"},

  ]

  function removeBoard() {
    board.length = 0
  }

  function generateBoard() {
    const horizontalAxis = ["a","b","c","d","e","f","g","h"]
    const verticalAxis = ["1","2","3","4","5","6","7","8"]

    for(let i = 1; i <= horizontalAxis.length; i++) {
      for (let j = 1; j <= verticalAxis.length; j++) {
        let image = undefined
        pieces.forEach(p => {
          if (p.x === i && p.y === j) {
            image = p.image
          }
        })

        board.push(<Square coordinate={i+j} piece={image}/>)
      }
    }
  }
  
  removeBoard()
  generateBoard()

  return (
    <div id="board">{board}</div>
  )
}