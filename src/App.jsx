import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/Home"
import About from "./pages/About"
import Help from "./pages/Help"
import Clock from "./pages/Clock";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/help" element={<Help />} />
        <Route path="/clock" element={<Clock />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
