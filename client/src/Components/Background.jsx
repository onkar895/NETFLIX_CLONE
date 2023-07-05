/* eslint-disable no-unused-vars */
import React from 'react'
import { styled } from '@mui/material'
import LoginBg_Image from '../assets/login.jpg'

const Image = styled("img")`
height : 100vh;
width : 100vw;
object-fit : cover;
filter : brightness(50%);
`

const Background = () => {
  return (

    <>
      <Image src={LoginBg_Image} alt="background" />
    </>

  )
}

export default Background
