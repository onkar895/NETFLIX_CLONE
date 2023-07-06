/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import Navbar from '../Components/Navbar'
import HomeBanner from '../Components/HomeBanner'
import Netflix_Image from '../assets/homeTitle.webp'
import { Box, Button, styled } from '@mui/material'
import { InfoOutlined, PlayArrow } from '@mui/icons-material'
import { useNavigate } from 'react-router-dom'

const HomePage = () => {

  const navigate = useNavigate()
  const [isScrolled, setIsScrolled] = useState(false)

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true)
    return () => (window.onscroll = null);
  }

  return (
    <>
      <Navbar isScrolled={isScrolled} />
      <HomeBanner />

      <HomeContainer>

        <Container
        >
          <Image src={Netflix_Image} alt="ImageOfNetflixlogo" />

          <ButtonContainer>

            <Button
              onClick={() => {
                navigate('/video')
              }}
              variant='contained'
              color='error'
              size='large'
              sx={{ width: '8rem' }}
            >
              <PlayArrow
                style={{ fontSize: 30 }} />
              Play
            </Button>

            <Button
              variant='contained'
              color='error'
              size='large'
              sx={{ width: '8rem', height: '46px' }}
            >
              Info &nbsp;
              <InfoOutlined style={{ fontSize: 22 }} />
            </Button>

          </ButtonContainer>

        </Container>

      </HomeContainer>
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
