/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import { Box, styled } from '@mui/material'
import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import video from '../assets/video.mp4'
import { PlayArrow } from '@mui/icons-material'
import { ThumbUp, ThumbDown } from '@mui/icons-material'
import { Check, Add } from '@mui/icons-material'
import { KeyboardArrowDown } from '@mui/icons-material'


export default React.memo(
  function Card({ movieData, isLiked = false }) {

    const [isHovered, setIsHovered] = useState(false)
    const navigate = useNavigate()

    return (
      <>
        <Container
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <img src={`https://image.tmdb.org/t/p/w500${movieData.image}`} alt='movie' />
          {
            isHovered &&
            (
              <HoverContainer>

                <ImageVideoContainer>

                  <img
                    src={`https://image.tmdb.org/t/p/w500${movieData.image}`} alt='movie'
                    onClick={() => navigate('/video')} />

                  <video
                    autoPlay
                    loop
                    muted
                    controls
                    src={video} />

                </ImageVideoContainer>

                <InfoContainer>
                  <h3 onClick={() => navigate('/video')}>{movieData.name}</h3>

                  <Icons>

                    <Box>

                      <PlayArrow onClick={() => navigate('/video')} title="play"
                      />

                      <ThumbUp title="like" />

                      <ThumbDown title="dislike" />
                      {
                        isLiked ? (

                          <Check title="remove from my list" />
                        ) : (
                          <Add title="add to my list " />

                        )
                      }

                    </Box>

                    <Info>

                      <KeyboardArrowDown title="More Info" />

                    </Info>

                  </Icons>

                  <Genres>
                    <ul>
                      {movieData.genres.map((genre) => (
                        <li key={genre}>{genre}</li>
                      ))}
                    </ul>
                  </Genres>

                </InfoContainer>

              </HoverContainer>

            )
          }
        </Container>

      </>
    )
  })

const Container = styled(Box)`
max-width : 220px;
width : 220px;
height : 100%;
cursor : pointer;
position : relative;

img {
  border-radius : 0.2rem;
  width : 100%;
  height : 100%;
  z-index : 10;
}
`
const InfoContainer = styled(Box)`
display : flex;
flex-direction : column;
padding : 1rem;
gap : 0.5rem;
  `
const Info = styled(Box)`

`

const Genres = styled(Box)`
display : flex;

& > ul {
  display : flex;
  gap : 0.5rem;

  & > li {
    padding-right : 0.7rem;

    & : first-of-type {
      list-style-type : none;
    } 
  }
}
`
const Icons = styled(Box)`
display : flex;
justify-content : space-between;

& > div {
  display : flex;
  gap : 1rem;
}

svg {
  font-size : 2rem;
  cursor : pointer;
  transition : 0.3s ease-in-out;

  :hover {
    color : #b8b8b8;
  }
}
`
const HoverContainer = styled(Box)`
z-index : 20;
height : max-content;
position : absolute;
width : 20rem;
top : -18vh;
left : 0;
border-radius : 0.3rem;
box-shadow : rgba(0,0,0,0.8) 0px 3px 10px;
background : #181818;
transition : 0.3s ease-in-out;
`

const ImageVideoContainer = styled(Box)`
position : relative;
height : 140px;


& > img {
  width : 100%;
  height : 160px;
  object-fit : cover;
  border-radius : 0.3rem;
  top : 0;
  z-index : 5;
  position : absolute;
}

video {
  width : 100%;
  height : 160px;
  object-fit : cover;
  border-radius : 0.3rem;
  top : 0;
  left : 0;
  z-index : 5;
  position : absolute;
}
`