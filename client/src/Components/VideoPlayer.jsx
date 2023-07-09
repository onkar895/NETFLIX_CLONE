/* eslint-disable no-unused-vars */
import React from 'react'
import video from '../assets/video.mp4'
import { Box, styled } from '@mui/material'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const VideoPlayer = () => {
  return (
    <>

      <VideoContainer>

        <Video
          src={video}
          autoPlay
          controls />


      </VideoContainer>

    </>

  )
}

const VideoContainer = styled(Box)`
top : 0;
left : 0;
`

const Video = styled("video")(({ theme }) => ({
  height: '100vh',
  width: '100vw',
  objectFit: 'cover',
}))



export default VideoPlayer
