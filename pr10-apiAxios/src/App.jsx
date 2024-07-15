import { BrowserRouter, Route, Routes } from "react-router-dom"
import View from "./View"

function App() {

  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path={'/'} element={<View />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
