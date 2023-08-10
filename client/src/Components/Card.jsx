/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import { Box, styled } from '@mui/material'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Scoobvideo from '../assets/video.mp4'
import { getVideo, removeFromLikedMovies } from '../Store'
import { PlayArrow } from '@mui/icons-material'
import { ThumbUp, ThumbDown } from '@mui/icons-material'
import CloseIcon from '@mui/icons-material/Close';
import { Add } from '@mui/icons-material'
import { KeyboardArrowDown } from '@mui/icons-material'
import { onAuthStateChanged } from 'firebase/auth'
import { firebaseAuth } from '../Utils/firebase-config'
import axios from 'axios'
import Youtube from 'react-youtube'
import { useDispatch } from 'react-redux'
import { toast } from 'react-toastify'

export default React.memo(
  function Card({ movieData, isLiked = false }) {

    const [isHovered, setIsHovered] = useState(false)
    const [email, setEmail] = useState(undefined)
    const navigate = useNavigate()
    const [videoName, setVideoName] = useState(' ')
    const dispatch = useDispatch()

    useEffect(() => {
      video()
    })

    const video = async () => {
      const data = await getVideo(movieData.id)
      let url = data?.videos?.results?.find((vid) => vid.name === 'Official Trailer')
      setVideoName(url?.key)
    }

    onAuthStateChanged(firebaseAuth, (currentUser) => {
      if (currentUser) setEmail(currentUser.email)
      else navigate('/')
    })

    const addToList = async () => {
      try {
        const response = await axios.post("https://netflix-backend-1bhe.onrender.com/api/user/add",
          { email, data: movieData })
        console.log(response)
        if (response) {
          if (response.data.success) {
            toast.success(response.data.success);
          } if (response.data.warning) {
            toast.info(response.data.warning)
          } else {
            toast.error(response.data.error)
          }
        } else {
          toast.error("Movie not added");
        }
      } catch (error) {
        console.log(error);
      }
    }

    const handleDelete = () => {
      dispatch(removeFromLikedMovies({ email, movieId: movieData.id }))
      if (dispatch) {
        toast.success("Movie Removed")
      } else {
        toast.error("Movie not deleted")
      }
    }

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
                  />

                  {
                    !videoName ? (
                      <video src={Scoobvideo}
                        onClick={() => navigate('/video')} autoPlay />
                    ) : (
                      <Youtube
                        videoId={videoName} />
                    )
                  }

                </ImageVideoContainer>

                <InfoContainer>
                  <h3>{movieData.name}</h3>

                  <Icons>

                    <Box>

                      <PlayArrow title="play"
                      />

                      <ThumbUp title="like" />

                      <ThumbDown title="dislike" />

                      {
                        isLiked ? (

                          <CloseIcon title="remove from my list" onClick={() => handleDelete()} />
                        ) : (

                          <Add title="add to my list " onClick={addToList} />
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
max-width : 200px;
width : 200px;
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
border-radius : 0.5rem;
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

video, iframe {
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