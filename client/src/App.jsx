import { Login, SignUp, HomePage } from './Pages/index'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {


  return (
    <>

      <Router>

        <Routes>

          <Route exact path='/' element={<Login />}></Route>
          <Route path='/signup' element={<SignUp />}></Route>
          <Route path='/home' element={<HomePage />}></Route>
        </Routes>

      </Router>


    </>
  )
}

export default App
