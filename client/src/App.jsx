import VideoPlayer from './Components/VideoPlayer'
import { Login, SignUp, HomePage, Movies, TvShows, UserLikedMovies } from './Pages/index'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


function App() {

  return (
    <>

      <Router>

        <Routes>

          <Route exact path='/login' element={<Login />}></Route>
          <Route path='/' element={<SignUp />}></Route>
          <Route path='/home' element={<HomePage />}></Route>
          <Route path='/video' element={<VideoPlayer />} />
          <Route path='/movies' element={<Movies />} />
          <Route path='/tv' element={<TvShows />} />
          <Route path='/mylist' element={<UserLikedMovies />} />


        </Routes>

      </Router>


    </>
  )
}

export default App
