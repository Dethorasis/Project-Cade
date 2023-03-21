import React from 'react'
import { ReactP5Wrapper } from 'react-p5-wrapper'
import sketch from './sketch'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <>
          <ReactP5Wrapper sketch={sketch} />
        </>
      </header>
    </div>
  )
}

export default App
