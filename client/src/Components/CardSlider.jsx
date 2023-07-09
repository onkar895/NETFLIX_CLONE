/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
import React from 'react'
import Card from './Card'

export default React.memo(
  function CardSlider({ data, title }) {
    return (
      <>
        {
          data.map((movie, index) => {
            return <Card movieData={movie} index={index} key={movie.id} />
          })
        }

      </>
    )
  })
