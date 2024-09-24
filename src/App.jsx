import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Signup from './signup/Signup'
import Home from './home/Home'
import Signin from './signin/Signin'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
      </Routes>
    </Router>
  )
}

export default App
