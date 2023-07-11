/* eslint-disable no-unused-vars */
import React from 'react'
import video from '../assets/video.mp4'
import { Box, styled } from '@mui/material'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';



const VideoPlayer = () => {

  const navigate = useNavigate()
  return (
    <>

      <VideoContainer>

        <Player>

          <BackButton>

            <ArrowBackIcon sx={{ fontSize: '3rem', cursor: 'pointer' }} onClick={() => navigate(-1)} />

          </BackButton>

          <Video
            src={video}
            autoPlay
            controls />

        </Player>


      </VideoContainer>

    </>

  )
}

const VideoContainer = styled(Box)`
height: 100vh;
width: 100vw;
overflow : hidden;
`

const Player = styled(Box)`
  position:relative;
  width: 100%;
  height: 100%;
`

const BackButton = styled(Box)`
  position: absolute;
  padding: 2rem;
  z-index: 1;
`

const Video = styled("video")(({ theme }) => ({
  height: '100%',
  width: '100%',
  objectFit: 'cover',
}))



export default VideoPlayer
