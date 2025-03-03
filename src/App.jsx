import { Board } from './components/Board'
import { PiecesGrid } from './components/PiecesGrid'
import './styles/App.css'

function App() {
  return (
    <div id='canvas'>
      <Board />
      <PiecesGrid />
    </div>
  )
}

export default App
