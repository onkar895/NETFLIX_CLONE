import VideoPlayer from './Components/VideoPlayer'
import { Login, SignUp, HomePage } from './Pages/index'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Movies from './Pages/Movies'
import TvShows from './Pages/TvShows'

function App() {


  return (
    <>

      <Router>

        <Routes>

          <Route exact path='/' element={<Login />}></Route>
          <Route path='/signup' element={<SignUp />}></Route>
          <Route path='/home' element={<HomePage />}></Route>
          <Route path='/video' element={<VideoPlayer />} />
          <Route path='/movies' element={<Movies />} />
          <Route path='/tv' element={<TvShows />} />


        </Routes>

      </Router>


    </>
  )
}

export default App
