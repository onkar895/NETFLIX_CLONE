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

const UserLikedMovies = () => {

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const movies = useSelector((state) => state.netflix.movies)

  const [isScrolled, setIsScrolled] = useState(false)
  const [email, setEmail] = useState(undefined)

  // console.log(movies)

  onAuthStateChanged(firebaseAuth, (currentUser) => {
    if (currentUser) setEmail(currentUser.email);
    else navigate('/')
  })


  useEffect(() => {
    if (email) {
      dispatch(getUserLikedMovies(email));
    }
  }, [email]);

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true)
  }

  return (
    <Container>

      <Navbar isScrolled={isScrolled} />

      <h1>My List</h1>

      <GridContainer>
        {movies.map((movie, index) => {
          return (
            <Card
              key={movie.id}
              index={index}
              movieData={movie}
              isLiked={true}
            />
          );
        })}
      </GridContainer>

    </Container>

  )

}

const Container = styled(Box)`
  margin:2.3rem;
  margin-top:8rem;
  gap:3rem;

  & < h1 {
    margin-left:3rem;
  }
`

const GridContainer = styled(Box)`
flex-wrap:wrap;
gap:1rem;

`


export default UserLikedMovies