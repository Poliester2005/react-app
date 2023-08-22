import { useState } from 'react'
import lobo from './assets/loboPidao.gif'
import peixe from './assets/peixe.gif'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://www.youtube.com/watch?v=QX43QTYyV-8" target="_blank" rel="noreferrer">
          <img src={peixe} className="logo" alt="Vite logo" />
        </a>
        <a href="https://www.youtube.com/watch?v=DDV_tCugCWo" target="_blank" rel="noreferrer">
          <img src={lobo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Eduardo Pielich Sanchez</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          +1
        </button>
        <button onClick={() => setCount((count) => count - 1)}>
          -1
        </button>
        <p>
          O numero é {count}
        </p>
      </div>
      <p className="read-the-docs">
        Poggers
      </p>
    </>
  )
}

export default App
