import './Piece.css'

import {
  BispoPreto,
  BispoBranco,
  CavaloBranco,
  CavaloPreto,
  DamaPreta,
  DamaBranca,
  PeaoBranco,
  PeaoPreto,
  ReiPreto,
  ReiBranco,
  TorrePreta,
  TorreBranca
} from '../public/imageIndex'

const piecesKey = {
  "ReiBranco": ReiBranco,
  "ReiPreto": ReiPreto, 
  "DamaBranca": DamaBranca, 
  "DamaPreta": DamaPreta, 
  "TorreBranca": TorreBranca, 
  "TorrePreta": TorrePreta, 
  "BispoBranco": BispoBranco, 
  "BispoPreto": BispoPreto, 
  "CavaloBranco": CavaloBranco, 
  "CavaloPreto": CavaloPreto, 
  "PeaoBranco": PeaoBranco, 
  "PeaoPreto": PeaoPreto
}

export function Piece(pieceKey) {
  return (
    piecesKey[pieceKey]
  )
}