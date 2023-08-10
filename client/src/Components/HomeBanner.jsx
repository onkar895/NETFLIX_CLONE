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

const Image = styled("img")(({ theme }) => ({
  position: 'absolute',
  top: '0',
  left: '0',
  zIndex: '-1',
  width: '100vw',
  height: '100vh',
  objectFit: 'cover',
  objectPosition: 'center',
  filter: 'brightness(50%)',
}))


export default HomeBanner
