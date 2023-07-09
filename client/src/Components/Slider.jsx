/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import CardSlider from './CardSlider'
import { Box, styled } from '@mui/material'

const Slider = ({ movies }) => {

  const getMoviesFromRange = (from, to) => {
    return movies.slice(from, to)
  }

  return (

    <>
      <Container>
        <CardSlider title="Trending Now" data={getMoviesFromRange(0, 20)} />
        <CardSlider title="New Releases" data={getMoviesFromRange(20, 40)} />
        <CardSlider title="Blockbuster Movies" data={getMoviesFromRange(40, 60)} />
        <CardSlider title="Popular On Netflix" data={getMoviesFromRange(60, 80)} />
        <CardSlider title="Action Movies" data={getMoviesFromRange(80, 100)} />
        <CardSlider title="Epics" data={getMoviesFromRange(100, 120)} />
      </Container>

    </>

  )
}

const Container = styled(Box)`
width : 100w;
overflow : hidden;
`

export default Slider
