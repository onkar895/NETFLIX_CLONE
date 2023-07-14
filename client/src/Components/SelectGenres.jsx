/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import { styled } from '@mui/material'
import { useDispatch } from 'react-redux'
import { fetchDataByGenre } from '../Store'

const SelectGenres = ({ genres, type }) => {

  const dispatch = useDispatch()

  return (

    <Select
      lableId="demo-simple-select-lable"
      id="demo-simple-select"
      onChange={(e) => {
        dispatch(fetchDataByGenre({ genre: e.target.value, type }))
      }}
    >
      {
        genres.map((genre, index) => {
          return (
            <option
              value={genre.id}
              key={genre.id}
            >
              {genre.name}
            </option>
          )
        })
      }
    </Select>

  )
}

const Select = styled('select')`
margin-left : 0.7rem;
margin-bottom : 1rem;
padding : 10px 20px;
font-size : 1.2rem;
background : none;
color : white;

& > option {
  background : black;
}
`

export default SelectGenres
