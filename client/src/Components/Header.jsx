/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import { Box, AppBar, Toolbar, Button, styled } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import Logo from '../assets/logo.png'

const Header = ({ login }) => {

  const navigate = useNavigate()

  return (

    <AppBar
      sx={{ boxShadow: " none ", background: "none" }}
    >

      <ToolbarStyle>

        <Box>
          <img src={Logo} alt="Netflix_Logo" width={200} />
        </Box>

        {
          login &&
          (
            <Button sx={{ marginRight: '20px', marginBottom: '10px' }}
              variant="contained"
              color="error"
              size='large'
              onClick={() => navigate('/login')}> Sign In
            </Button>
          )
        }


      </ToolbarStyle>

    </AppBar>

  )
}


const ToolbarStyle = styled(Toolbar)`
display:flex;
align-items:center;
justify-content:space-between;
`

export default Header
