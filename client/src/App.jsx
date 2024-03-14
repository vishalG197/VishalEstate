import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Profile from "./pages/Profile"
import Signin from "./pages/Signin"
import SignUp from "./pages/SignUp"

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About/>} />

      <Route path="/profile" element={<Profile/>} />

      <Route path="/signin" element={<Signin/>} />

      <Route path="/signup" element={<SignUp/>} />

    </Routes>
    </BrowserRouter>
  )
}

export default App
