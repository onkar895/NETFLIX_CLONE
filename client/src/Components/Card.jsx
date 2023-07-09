/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import { Box, styled } from '@mui/material'
import React from 'react'

export default React.memo(
  function Card({ movieData }) {
    return (
      <>
        <Container>
          <img src={`https://image.tmdb.org/t/p/w500${movieData.image}`} />
        </Container>

      </>
    )
  })

const Container = styled(Box)`

  `