import { configureStore, createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { API_KEY, TMDB_BASE_URL } from '../Utils/Constants'
import axios from 'axios'

const initialState = {
  movies: [],
  genresLoaded: false,
  genres: []
}

export const getGenres = createAsyncThunk('netflix/genres', async () => {
  try {
    const { data: { genres } } = await axios.get(
       `${TMDB_BASE_URL}/genre/movie/list?api_key=${API_KEY}`
    )
    console.log(genres)
    return(genres)
  } catch (err) {
    console.log(err)
  }
})

const createArrayFromRawData = (array, movieArray, genres) => {
  try {
    array.forEach((movie) => {
      const movieGenres = []
      movie.genre_ids.forEach((genre) => {
        const name = genres.find(({ id }) => id === genre)
        if (name) movieGenres.push(name.name)
      })
      if (movie.backdrop_path) {
        movieArray.push({
          id: movie.id,
          name: movie?.original_name ? movie.original_name : movie.original_title,
          image: movie.backdrop_path,
          genres: movieGenres.slice(0, 3),
        })
      }
    
    })
  } catch (err) {
    console.log(err)
  }
}

export const getRawData = async (url, genres, paging) => {
  try {
    const movieArray = []
  
    for (let i = 1; movieArray.length < 140 && i < 10; i++) {
      const { data: { results } } = await axios.get(`${url}${paging ? `&page=${i}` : " "}`)
      createArrayFromRawData(results, movieArray, genres)
    }
    return movieArray
  } catch (err) {
    console.log(err.message)
  }
}

export const fetchMovies = createAsyncThunk("netflix/trending", async ({type}, thunkAPI) => {
    const { netflix: { genres },} = thunkAPI.getState()
    return getRawData(`${TMDB_BASE_URL}/trending/${type}/week?api_key=${API_KEY}`,
    genres,
    true
   )
 }
)

const NetflixSlice = createSlice({
  name: 'Netflix',
  initialState,
  extraReducers: (builders) => {
    builders.addCase(getGenres.fulfilled, (state, action) => {
      state.genres = action.payload;
      state.genresLoaded = true;
    })
    builders.addCase(fetchMovies.fulfilled, (state, action) => {
      state.movies = action.payload
    })
  }
})


export const store = configureStore(
  {
    reducer: {
      netflix: NetflixSlice.reducer ,
    } ,
  }
)