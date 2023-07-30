/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import Logo from '../assets/logo.png'
import avatar from '../assets/avatar.png'
import { styled, Box, Button } from '@mui/material'
import { Link, useNavigate } from 'react-router-dom'
import { Menu, Close } from '@mui/icons-material'
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import SearchIcon from '@mui/icons-material/Search';
import { signOut } from 'firebase/auth'
import { firebaseAuth } from '../Utils/firebase-config'
import { onAuthStateChanged } from 'firebase/auth'



const Navbar = ({ isScrolled }) => {

  const navigate = useNavigate()

  const links = [
    { name: "Home", link: "/" },
    { name: "Movies", link: "/movies" },
    { name: "TV Shows", link: "/tv" },
    { name: "My List", link: "/mylist" },
  ];

  onAuthStateChanged(firebaseAuth, (currentUser) => {
    if (!currentUser) navigate('/')
  })


  const [showMenu, setShowMenu] = useState(false)

  return (
    <NavbarContainer
      sx={{
        height: showMenu ? "auto" : "6.5rem", background: isScrolled || showMenu ? "black" : "", zIndex: 2
      }}
    >

      <Container>
        <img src={Logo} alt="Netflix_Logo" width={160} />
        <Button
          variant='contained'
          color='error'
          size='small'
          sx={{ display: { md: 'block', lg: 'none !important', paddingTop: '8px' } }}
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

      <AvatarContainer>

        <img src={avatar} alt="Avatar" />
        <Box sx={{ cursor: 'pointer', display: 'flex', alignItems: 'center', marginLeft: '8px', fontWeight: 'bold' }}>
          Search
          <SearchIcon sx={{ marginLeft: '5px', marginTop: '4px', color: 'white', fontSize: '24px', }} />
        </Box>



        <LogOutContainer
          onClick={() => signOut(firebaseAuth)}>
          LogOut
          <PowerSettingsNewIcon
            sx={{
              ml: "5px",
              fontSize: '23px',
            }}
          />
        </LogOutContainer>

      </AvatarContainer>



    </NavbarContainer>
  )
}

const NavbarContainer = styled(Box)(({ theme }) => ({
  fontFamily: "Trebuchet MS",
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
  marginLeft: '15px',


  " & > li ": {
    margin: '0 15px',

  },

  "& a": {
    textDecoration: 'none',
    color: 'white',
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


const AvatarContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  marginLeft: '30rem',
  gap: '10px',
  [theme.breakpoints.down("lg")]: {
    flexDirection: 'column',
    marginLeft: '1.3rem',
    marginTop: '0.5rem',
  },
  [theme.breakpoints.down("sm")]: {
    flexDirection: 'column',
    marginRight: '8.8rem',
    marginTop: '0.8rem',
  },

  "& > img": {
    width: '2.5vw',
    marginRight: '5px',
    [theme.breakpoints.down("lg")]: {
      display: 'none'
    },
  },


}))


const LogOutContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  color: 'red',
  fontWeight: 'bolder',
  padding: '5px 10px',
  borderRadius: '3px',
  [theme.breakpoints.down("sm")]: {
    marginLeft: '0.6rem',
    marginTop: '0.6rem',
  },

  ":hover":
    { cursor: 'pointer', background: 'red', color: 'white' },

}))



export default Navbar
