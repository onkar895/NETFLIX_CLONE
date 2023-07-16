/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import CardSlider from './CardSlider'
import { Box, styled } from '@mui/material'

const Slider = ({ movies }) => {

  const getMoviesFromRange = (from, to) => {
    return movies.slice(from, to)
  }
  // console.log(movies)
  return (

    <>
      <Container>

        <CardSlider title="Trending Now" data={getMoviesFromRange(0, 10)} />
        <CardSlider title="New Releases" data={getMoviesFromRange(10, 20)} />
        <CardSlider title="Blockbuster Movies" data={getMoviesFromRange(20, 40)} />
        <CardSlider title="Popular On Netflix" data={getMoviesFromRange(40, 50)} />
        <CardSlider title="Action Movies" data={getMoviesFromRange(50, 60)} />
        <CardSlider title="Epics" data={getMoviesFromRange(60, 70)} />
        <CardSlider title="Crime TV Thrillers" data={getMoviesFromRange(70, 80)} />
        <CardSlider title="Horror" data={getMoviesFromRange(80, 90)} />
        <CardSlider title="Comedy" data={getMoviesFromRange(90, 100)} />
        <CardSlider title="Tv Action and Adventure" data={getMoviesFromRange(100, 110)} />
        <CardSlider title="International TV Shows" data={getMoviesFromRange(110, 120)} />
        <CardSlider title="Suspenseful TV Shows" data={getMoviesFromRange(120, 130)} />

      </Container>

    </>

  )
}

const Container = styled(Box)`
width : 100vw;
`

export default Slider
