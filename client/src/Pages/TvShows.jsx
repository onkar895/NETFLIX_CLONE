/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import Navbar from '../Components/Navbar'
import { Box, styled } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchMovies, getGenres } from '../Store'
import Slider from '../Components/Slider'
import { onAuthStateChanged } from 'firebase/auth'
import { firebaseAuth } from '../Utils/firebase-config'
import NotAvailable from '../Components/NotAvailable'
import SelectGenres from '../Components/SelectGenres'

const TVPage = () => {

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const [isScrolled, setIsScrolled] = useState(false)

  const genresLoaded = useSelector((state) => state.netflix.genresLoaded)
  const movies = useSelector((state) => state.netflix.movies)
  // console.log(movies)
  const genres = useSelector((state) => state.netflix.genres)
  // console.log(genres)

  useEffect(() => {
    dispatch(getGenres())
  }, [])

  useEffect(() => {
    if (genresLoaded) {
      dispatch(fetchMovies({ genres, type: "tv" }));
    }
  }, [genresLoaded]);


  onAuthStateChanged(firebaseAuth, (currentUser) => {
    // if (currentUser) navigate('/home')
  }, [])

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true)
    return () => (window.onscroll = null);
  }


  return (
    <>

      <Navbar isScrolled={isScrolled} />

      <Data>

        <SelectGenres genres={genres} type='tv' />
        {
          movies.length ? <Slider movies={movies} /> : <NotAvailable />
        }

      </Data>

    </>
  )
}

const Data = styled(Box)`
margin-top : 8rem;
`
export default TVPage;


