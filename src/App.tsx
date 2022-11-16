import React from 'react'
import Counter from './components/Counter'
import './Style.css'

export const App = () => {
  return (
    <div className="App">
      <div>
        <a href="https://mobx.js.org/README.html">
          <img
            src="https://mobx.js.org/assets/mobx.png"
            className="logo"
            alt="Mobx logo"
          />
        </a>
        <a href="https://reactjs.org">
          <img
            src="https://light9639.github.io/Redux-TypeScript/assets/react.35ef61ed.svg"
            className="logo react"
            alt="React logo"
          />
        </a>
      </div>
      <h1>React + Mobx</h1>
      <div className="card">
        <Counter />
      </div>
      <p className="read-the-docs">
        Click on the Mobx and React logos to learn more
      </p>
    </div>
  )
}
