import { useState } from "react"
import reactLogo from "./assets/react.svg"
import "./App.css"
import { Hello } from "@components/Hello"

function App() {
  const [count, setCount] = useState(0)
  const message: string = "Hello, Vite + React!"

  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <Hello />
      <h1>My App React</h1>
      <div className="card">
        <button onClick={() => setCount(count => count + 1)}>
          count is {count}
        </button>
        <p>
          {message}
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
