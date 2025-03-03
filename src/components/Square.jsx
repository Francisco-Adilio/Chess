/* eslint-disable react/prop-types */
import '../styles/Square.css'
import { Piece } from './Piece'

export function Square(props) {
  const color = props.color
  const piece = props.piece
  return (
    <div className="Square" style={{
      backgroundColor: color
    }}>
      {<Piece pieceKey={piece}/>}
    </div>
  )
}