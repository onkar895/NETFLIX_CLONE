/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import Navbar from '../Components/Navbar'
import { useNavigate } from 'react-router-dom'
import { styled, Box } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { onAuthStateChanged } from 'firebase/auth'
import { firebaseAuth } from '../Utils/firebase-config'
import { getUserLikedMovies } from '../Store'
import Card from '../Components/Card'
import NotAvailable from '../Components/NotAvailable'


const UserLikedMovies = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.netflix.movies);
  const [email, setEmail] = useState(undefined);


  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => window.onscroll = null
  }
  onAuthStateChanged(firebaseAuth, (currentUser) => {
    if (currentUser) setEmail(currentUser.email);
    else navigate("/")
  });


  useEffect(() => {
    if (email) {
      dispatch(getUserLikedMovies(email))
    }
  }, [email]);


  return (
    <Box>
      <Navbar isScrolled={isScrolled} />
      {
        movies?.length <= 0 ? (
          <NotAvailable text='No movies added to my list' />
        ) : (
          <Content>
            <h1>My List</h1>
            <MoviesContainer>
              {
                movies?.map((movie, index) => {
                  return <Card movieData={movie} index={index} key={movie.id} isLiked={true} />
                })
              }
            </MoviesContainer>
          </Content>
        )
      }
    </Box>
  )
}

const Content = styled(Box)`
dispaly:flex;
flex-direction:column;
margin:2.3rem;
margin-top:8rem;
gap:3rem;
h1{
    margin-left:4rem
}
`
const MoviesContainer = styled(Box)`
display:flex;
flex-wrap:wrap;
gap:1rem;
`

export default UserLikedMovies
