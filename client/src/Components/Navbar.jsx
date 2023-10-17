/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import Logo from '../assets/logo.png'
import avatar from '../assets/avatar.png'
import { styled, Box, Button, Typography, AppBar, Toolbar } from '@mui/material'
import { Link, useNavigate } from 'react-router-dom'
import { Menu, Close } from '@mui/icons-material'
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import SearchIcon from '@mui/icons-material/Search';
import { signOut } from 'firebase/auth'
import { firebaseAuth } from '../Utils/firebase-config'
import { onAuthStateChanged } from 'firebase/auth'




const Navbar = () => {

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

  const [isScrolled, setIsScrolled] = useState(false)


  const scroll = () => {
    if (window.scrollY > 50) {
      setIsScrolled(true)
    }
    else {
      setIsScrolled(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', scroll)
    return () => window.removeEventListener('scroll', scroll)
  }, [])


  const [showMenu, setShowMenu] = useState(false)

  return (
    <AppBar sx={{ background: ' none', boxShadow: 'none' }}>
      <NavbarContainer sx={{
        height: showMenu ? "auto" : "6.5rem", background: isScrolled || showMenu ? "black" : "", zIndex: 2
      }}>

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

        <HeaderContainer>
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
              <Typography>LogOut</Typography>
              <PowerSettingsNewIcon
                sx={{
                  ml: "5px",
                  fontSize: '23px',
                }}
              />
            </LogOutContainer>

          </AvatarContainer>
        </HeaderContainer>

      </NavbarContainer>

    </AppBar>

  )
}

const NavbarContainer = styled(Toolbar)(({ theme }) => ({
  fontFamily: "Trebuchet MS",
  display: 'flex',
  width: '100vw',
  alignItems: 'center',
  padding: '1rem 1.5rem',
  overflow: 'hidden',
  [theme.breakpoints.down('lg')]: {
    display: 'block',

  }
}))

const HeaderContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flex: '2',
  justifyContent: 'space-between',
  marginLeft: '15px',
  [theme.breakpoints.down('md')]: {
    justifyContent: 'start',
    flexDirection: 'column'
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
  gap: '10px',
  marginLeft: '22px',
  [theme.breakpoints.down("md")]: {
    flexDirection: 'column',
    alignItems: 'start',
    marginTop: '0.3rem',
  },

  "& > *": {
    marginTop: '0.6rem',
  },


  "& > img": {
    width: '2.5vw',
    marginRight: '8px',
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
  padding: '5px 8px',
  borderRadius: '3px',

  "& > p": {
    fontWeight: 'bolder',
    fontFamily: "Trebuchet MS",
  },

  ":hover":
    { cursor: 'pointer', background: 'red', color: 'white' },

}))



export default Navbar
