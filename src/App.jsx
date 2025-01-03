import Dashboard from './pages/Dashboard'
import Signin from './pages/Signin'
import { BrowserRouter, Route, Routes } from "react-router"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Signin />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
