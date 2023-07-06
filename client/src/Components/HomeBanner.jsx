/* eslint-disable no-unused-vars */
import React from 'react'
import HomePage from '../assets/home.jpg'
import { styled, Box } from '@mui/material'

const HomeBanner = () => {
  return (
    <>
      <Image src={HomePage} alt="HomeBannerPage" />

    </>

  )
}

const Image = styled("Img")`
position : absolute;
top : 0;
left : 0;
z-index : -1;
width : 100vw;
height : 100vh;
object-fit : cover;
filter : brightness(50%);
`

export default HomeBanner
