/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
import React, { useRef, useState } from 'react'
import Card from './Card'
import { Box, styled } from '@mui/material'
import { ArrowBackIosNew, ArrowForwardIos } from '@mui/icons-material'

export default React.memo(
  function CardSlider({ data, title }) {

    const [showControls, setShowControls] = useState(false)
    const [sliderPosition, setSliderPosition] = useState(0)

    const handleDirection = (direction) => {

    }

    const listRef = useRef()
    return (
      <>
        <Container
          onMouseEnter={() => setShowControls(true)}
          onMouseLeave={() => setShowControls(false)}
        >

          <h2>{title}</h2>

          <Wrapper>

            <Left sx={{ display: !showControls ? "none" : " " }}>
              <ArrowBackIosNew onClick={() => handleDirection('left')} />
            </Left>

            <Slider ref={listRef}>
              {
                data.map((movie, index) => {
                  return (
                    <Card
                      movieData={movie}
                      index={index}
                      key={movie.id}
                      title={title}
                    />
                  )
                })
              }

            </Slider>

            <Right
              sx={{ display: !showControls ? "none" : " " }}>
              <ArrowForwardIos onClick={() => handleDirection('right')} />
            </Right>

          </Wrapper>

        </Container>

      </>
    )
  })

const Container = styled(Box)`
display : flex;
flex-direction : column;
position : relative;
gap : 0.5rem;
padding : 0.3rem 0;

h2 {
  margin-left : 10px;
}

& > div {
  display : flex;
}
`
const Wrapper = styled(Box)`

`
const Slider = styled(Box)`
 display : flex;
  justify-content : center;
  align-items : center;
  width : max-content;
  gap : 0.5rem;
  transform : translate(0px);
  transition : 0.3s ease-in-out;
  margin-left : 10px;
`

const Right = styled(Box)`
position : absolute;
z-index : 99;
height : 100%;
top : 50%;
right : 0;
width : 50px;
transition : 0.3s ease-in-out;
cursor : pointer;

svg {
  font-size : 3rem;
}
`
const Left = styled(Box)`
position : absolute;
z-index : 99;
height : 100%;
top : 50%;
left : 0;
width : 50px;
transition : 0.3s ease-in-out;
cursor : pointer;

svg {
  font-size : 3rem;
}
`