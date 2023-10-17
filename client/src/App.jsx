import VideoPlayer from './Components/VideoPlayer'
import { Login, SignUp, HomePage, Movies, TvShows, UserLikedMovies } from './Pages/index'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'



function App() {

  return (
    <>

      <Router>
        <ToastContainer
          position="top-center"
          autoClose={1000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />

        <Routes>

          <Route exact path='/' element={<SignUp />}></Route>
          <Route exact path='/login' element={<Login />}></Route>
          <Route exact path='/home' element={<HomePage />}></Route>
          <Route exact path='/video' element={<VideoPlayer />} />
          <Route exact path='/movies' element={<Movies />} />
          <Route exact path='/tv' element={<TvShows />} />
          <Route exact path='/mylist' element={<UserLikedMovies />} />

        </Routes>

      </Router>


    </>
  )
}

export default App
