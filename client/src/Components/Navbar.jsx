/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import Logo from '../assets/logo.png'
import { styled, Box, Button } from '@mui/material'
import { Link } from 'react-router-dom'
import { Menu, Close } from '@mui/icons-material'


const Navbar = ({ isScrolled }) => {

  const links = [
    { name: "Home", link: "/" },
    { name: "Movies", link: "/movies" },
    { name: "TV Shows", link: "/tv" },
    { name: "My List", link: "/mylist" },
  ];

  const [showMenu, setShowMenu] = useState(false)

  return (
    <NavbarContainer
      sx={{
        height: showMenu ? "auto" : "6.5rem", background: isScrolled || showMenu ? "black" : ""
      }}
    >

      <Container>
        <img src={Logo} alt="Netflix_Logo" width={150} />
        <Button
          variant='contained'
          color='error'
          size='small'
          sx={{ display: { md: 'block', lg: 'none !important' } }}
          onClick={() => setShowMenu(!showMenu)}>
          {
            showMenu ? <Close /> : <Menu />
          }
        </Button>
      </Container>

      <UlStyled>
        {
          links.map(({ link, name }) => {
            return (
              <li key={name}>
                <Link to={link}>{name}</Link>
              </li>
            )
          })
        }
      </UlStyled>

    </NavbarContainer>
  )
}

const NavbarContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  position: 'fixed',
  top: '0',
  width: '100vw',
  alignItems: 'center',
  justifyContent: 'start',
  padding: '1rem 1.5rem',
  overflow: 'hidden',
  [theme.breakpoints.down('lg')]: {
    display: 'block',

  }
}))

const Container = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
}))

const UlStyled = styled("ul")(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  listStyle: 'none',
  marginLeft: '10px',

  " & > li ": {
    margin: '0 15px',
  },

  "& a": {
    textDecoration: 'none',
  },
  [theme.breakpoints.down("lg")]: {
    flexDirection: 'column',
    marginTop: '15px',
    alignItems: 'start',
    "& > li": {
      margin: "15px",
    }
  }
}))

export default Navbar