import { useState } from 'react'
import './App.css'


function getMatrix(rows = 3, cols = 3, defaultVal = 0) {
  const matrix = []
  for (let i = 0; i < rows; i++) {
    const row = []
    for (let j = 0; j < cols; j++) {
      row.push(defaultVal)
    }
    matrix.push(row)
  }
  return matrix
}

function App() {
  const [rows, setRows] = useState(3)
  const [cols, setCols] = useState(3)
  const [defaultVal, setDefaultVal] = useState(0)
  const [matrix, setMatrix] = useState(getMatrix(rows, cols, defaultVal))
  const [error, setError] = useState('')


  return (
    <>
      <div>
        <h1 style={{ textAlign: 'center' }}>Matrix Visualizer</h1>
        < input
          type="number"
          value={rows}
          onChange={(e) => setRows(e.target.value)
          }
        />

        < input
          type="number"
          value={cols}
          onChange={(e) => setCols(e.target.value)
          }
        />

        < input
          type="number"
          value={defaultVal}
          onChange={(e) => setDefaultVal(e.target.value)
          }
        />
        <button onClick={() => {
          if (rows > 0 && cols > 0) {
            setMatrix(getMatrix(rows, cols, defaultVal))
            setError('')
          } else {
            setError('Rows and columns must be positive')
          }
        }}>
          Generate Matrix
        </button>
        {error && <div style={{ color: 'red' }}>{error}</div>}
        <div className="grid-container">
          {matrix.map((row, i) => (
            <div key={i}>
              {row.map((cell, j) => (
                <span key={j}>{cell}</span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default App
