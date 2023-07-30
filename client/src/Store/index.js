import { configureStore, createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { API_KEY, TMDB_BASE_URL } from '../Utils/Constants'
import axios from 'axios'
// the axios library for making HTTP requests.

const initialState = {
  movies: [],
  genresLoaded: false,
  genres: []
}
// It defines the initial state for the Redux store.

export const getVideo = async (id) => {
  const { data } = await axios.get(`${TMDB_BASE_URL}/movie/${id}?api_key=${API_KEY}&append_to_response=videos`)
  return data;
}


export const getGenres = createAsyncThunk('netflix/genres', async () => {
  try {
    const { data: { genres } } = await axios.get(
       `${TMDB_BASE_URL}/genre/movie/list?api_key=${API_KEY}`
    )
    // console.log(genres)
    return(genres)
  } catch (err) {
    console.log(err)
  }
})
// This is an asynchronous thunk action creator named getGenres. It makes an API call to fetch the list of genres from a movie database API. It uses axios to send an HTTP GET request to the specified URL and retrieves the response data. The fetched genres are then returned as the payload of the thunk action. If an error occurs, it is logged to the console as well.

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
// This is a helper function named createArrayFromRawData. It takes an array of movie data, an empty movie array, and the genres array as parameters. It iterates over each movie object in the provided array and extracts the genres from the genre_ids property. It uses the genres array to find the genre name based on the genre ID. If a match is found, the genre name is added to the movieGenres array. Then, if the movie has a backdrop_path, a new movie object is created with selected properties (id, name, image, and genres), and it is pushed into the movieArray. If any error occurs during the process, it is logged to the console.

export const getRawData = async (url, genres, paging) => {
  try {
    const movieArray = []
  
    for (let i = 1; movieArray.length < 130 && i < 10; i++) {
      const { data: { results }, } = await axios.get(`${url}${paging ? `&page=${i}` : " "}`)
      createArrayFromRawData(results, movieArray, genres)
    }
    return movieArray
  } catch (err) {
    console.log(err.message)
  }
}
// This is an asynchronous function named getRawData. It takes a URL, genres array, and a paging flag as parameters. It initializes an empty movieArray to store the movie data. It loops until the movieArray has a length of less than 130 or until i reaches 10. In each iteration, it makes an HTTP GET request to the provided URL (with an optional page parameter if paging is true). It retrieves the results property from the response data and calls the createArrayFromRawData function to process and add the movie data to the movieArray. Finally, it returns the populated movieArray. If any error occurs during the process, the error message is logged to the console.

export const fetchDataByGenre = createAsyncThunk("netflix/genre", async ({ genre, type }, thunkAPI) => {
        const { netflix: { genres },} = thunkAPI.getState();
        return getRawData(
            `${TMDB_BASE_URL}/discover/${type}?api_key=${API_KEY}&with_genres=${genre}`,
            genres
        );
    }
);
// This is an asynchronous thunk action creator named fetchDataByGenre. It takes an object containing genre and type as parameters, along with the thunkAPI object. It extracts the genres array from the Redux store state using the thunkAPI.getState() function. Then, it calls the getRawData function, passing the constructed URL and the genres array as arguments. The resulting movie data is returned as the payload of the thunk action.

export const fetchMovies = createAsyncThunk("netflix/trending", async ({type}, thunkAPI) => {
    const { netflix: { genres },} = thunkAPI.getState()
    return getRawData(`${TMDB_BASE_URL}/trending/${type}/week?api_key=${API_KEY}`,
    genres,
    true
   )
 }
)
// This is another asynchronous thunk action creator named fetchMovies. It takes an object containing type as a parameter, along with the thunkAPI object. It extracts the genres array from the Redux store state using the thunkAPI.getState() function. Then, it calls the getRawData function, passing the constructed URL, the genres array, and true as arguments. The true value indicates that paging is enabled, as it fetches trending movies for a week. The resulting movie data is returned as the payload of the thunk action.

export const getUserLikedMovies = createAsyncThunk('netflix/getLiked', async (email) => {
  try {
    const { data : {movies} } = await axios.get(`http://localhost:8000/api/user/liked/${email}`)
    return movies
  } catch (err) {
    console.log("error while getting the user liked movies", err)
  }
})

export const removeFromLikedMovies = createAsyncThunk("netflix/removeLiked", async ({ movieId, email }) => {
    try {
        const { data: { movies } } = await axios.put('http://localhost:8000/api/user/remove', { email, movieId });
        return movies;
    } catch (error) {
        console.log(error, 'error while calling remove from liked movies api')
    }
})


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
    builders.addCase(fetchDataByGenre.fulfilled, (state, action) => {
    state.movies = action.payload;
    })
    builders.addCase(getUserLikedMovies.fulfilled,(state, action) => {
  state.movies = action.payload
    })
     builders.addCase(removeFromLikedMovies.fulfilled,(state, action) => {
  state.movies = action.payload
     })
  }
})
// This creates a Redux slice named NetflixSlice using the createSlice function. It defines the name of the slice, the initial state, and the extraReducers object. The extraReducers object handles different Redux actions. In this case, it has three cases: getGenres.fulfilled, fetchMovies.fulfilled, and fetchDataByGenre.fulfilled. Each case updates the relevant properties of the state based on the payload of the fulfilled action.

export const store = configureStore(
  {
    reducer: {
      netflix: NetflixSlice.reducer ,
    } ,
  }
)
// This code defines a Redux store using the configureStore function from the Redux Toolkit. The store variable is exported to make it accessible from other parts of the application.
// The store configuration includes a reducer object with a single property called netflix. The NetflixSlice.reducer is assigned to this property, which refers to the reducer generated by the NetflixSlice created earlier using createSlice.
// In summary, the store is configured with the NetflixSlice.reducer as the reducer, allowing the application to manage state using Redux and the defined slice.