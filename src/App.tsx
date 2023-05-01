// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Types from './Types';
import Functions from "./Functions";
import Enums,{Color} from "./Enums";
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
function App() {
  // const [count, setCount] = useState(0)
  console.log("hi");
  return (
    <>
      {/* <div>
        console.log("hello")
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
      <Router>
        <Routes>
        <Route path='/types' element={<Types/>}/>
        <Route path='/functions' element={<Functions name="hi"/>}/>
        <Route path='/enums' element={<Enums color={Color.Red}/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
