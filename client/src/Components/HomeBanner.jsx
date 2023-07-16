/* eslint-disable no-unused-vars */
import React from 'react'
import HomePage from '../assets/scoob.jpg'
import { styled } from '@mui/material'

const HomeBanner = () => {
  return (
    <>

      <Image src={HomePage} alt="HomeBannerPage" />

    </>

  )
}

const Image = styled("img")`
position : absolute;
top : 0;
left : 0;
z-index : -1;
width : 100vw;
height : 100vh;
object-fit : cover;
background-repeat : no-repeat;
background-attachment : fixed;
background-position : center;
filter : brightness(50%);
`

export default HomeBanner
