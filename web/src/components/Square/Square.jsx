/* eslint-disable react/prop-types */
import './Square.css'
import { Piece } from '../Piece/Piece'

export function Square(props) {
      if (props.coordinate % 2 == 0) {
          return (
            <div className="square white-square"><Piece className="piece" piece={props.piece}/></div>
          )
      } else {
          return (
            <div className="square black-square"><Piece className="piece" piece={props.piece}/></div>
          )
      }
}