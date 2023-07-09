/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import Navbar from '../Components/Navbar'
import HomeBanner from '../Components/HomeBanner'
import Netflix_Image from '../assets/homeTitle.webp'
import { Box, Button, styled } from '@mui/material'
import { InfoOutlined, PlayArrow } from '@mui/icons-material'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchMovies, getGenres } from '../Store'
import Slider from '../Components/Slider'

const HomePage = () => {

  const navigate = useNavigate()
  const [isScrolled, setIsScrolled] = useState(false)

  const genresLoaded = useSelector((state) => state.netflix.genresLoaded)
  const movies = useSelector((state) => state.netflix.movies)
  // console.log(movies)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getGenres())
  }, [])

  useEffect(() => {
    if (genresLoaded) dispatch(fetchMovies({ type: "all" }))
  }, [])


  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true)
    return () => (window.onscroll = null);
  }

  return (
    <>
      <Navbar isScrolled={isScrolled} />

      <HomeBanner />

      <HomeContainer>

        <Container>

          <Image src={Netflix_Image} alt="ImageOfNetflixlogo" />

          <ButtonContainer>

            <Button
              onClick={() => {
                navigate('/video')
              }}
              variant='contained'
              size='large'
              sx={{
                width: '8rem',
                background: 'white',
                color: 'black',
                fontWeight: 'bolder',

                ":hover": {
                  background: "red",
                  color: 'white',
                }
              }}
            >
              <PlayArrow
                style={{ fontSize: 30 }} />
              Play
            </Button>

            <Button
              variant='contained'
              size='large'
              sx={{
                width: '8rem',
                height: '46px',
                background: 'rgba(225,225,225,0.6)',
                fontWeight: 'bolder',
                color: 'black',

                ":hover": {
                  background: " rgba(255, 0, 0,0.6) ",
                  color: 'white',
                }
              }}
            >
              Info &nbsp;
              <InfoOutlined style={{ fontSize: 22 }} />
            </Button>

          </ButtonContainer>

        </Container>

      </HomeContainer>

      <Slider movies={movies} />

    </>
  )
}

const HomeContainer = styled(Box)`
position : relative;
width : 100vw;
height : 100vh;
`

const Container = styled(Box)`
position: absolute; 
bottom: 100px;
left: 35px;
`

const Image = styled("img")(({ theme }) => ({
  width: "40rem"
}))

const ButtonContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: '8px',
  alignItems: 'center',
  marginTop: '10px',
}))


export default HomePage
