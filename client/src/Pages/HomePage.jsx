/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import Navbar from '../Components/Navbar'
import HomeBanner from '../Components/HomeBanner'
import Image from '../assets/Whats_new.png'
import { Box, Button, Typography, styled } from '@mui/material'
import { InfoOutlined, PlayArrow } from '@mui/icons-material'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchMovies, getGenres } from '../Store'
import Slider from '../Components/Slider'

const HomePage = () => {

  const navigate = useNavigate()


  const genresLoaded = useSelector((state) => state.netflix.genresLoaded)
  const movies = useSelector((state) => state.netflix.movies)
  // console.log(movies)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getGenres())
  }, [])

  useEffect(() => {
    if (genresLoaded) dispatch(fetchMovies({ type: "all" }))
  }, [genresLoaded])



  return (
    <>
      <Box sx={{ overflowX: 'hidden' }}>
        <Navbar />

        <HomeBanner />

        <HomeContainer>

          <Container>

            <TitleBox>
              <Typography sx={{ fontSize: "70px", fontFamily: "Trebuchet MS", }}>ScooBy-Doo</Typography>
              <img src={Image} alt="What's New Scoob" />
            </TitleBox>


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
                  gap: '4px',
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
                Info
                <InfoOutlined style={{ fontSize: 22 }} />
              </Button>

            </ButtonContainer>

            <InfoContainer>
              <Typography>
                Scoob and the gang face a new mystery when they are lured to Spooky Island,
              </Typography>
              <Typography>
                where a sinister force is brainwashing partying college kids into a dark cult.
              </Typography>
              <Typography>Watch all you want</Typography>
            </InfoContainer>

          </Container>

        </HomeContainer>

        <Slider movies={movies} />

      </Box>

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
bottom: 80px;
left: 35px;
`

const TitleBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',

  [theme.breakpoints.down('sm')]: {
    marginRight: '2rem',
    marginBottom: '1rem'
  },

  "& > p": {

    [theme.breakpoints.down('sm')]: {
      fontSize: '22px'
    },
  },

  "& > img": {
    width: '10vw',
    [theme.breakpoints.down('sm')]: {
      width: '28vw',
      marginTop: '6px',
    },
  }

}))

const ButtonContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: '8px',
  alignItems: 'center',
  [theme.breakpoints.down('sm')]: {
    width: "80vw",
  },
}))

const InfoContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  marginTop: '20px',

  "& > p": {
    fontFamily: "Trebuchet MS",
  }
}))

export default HomePage
