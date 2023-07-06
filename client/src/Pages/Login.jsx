/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { Box, styled, Button, Typography, TextField, FormControlLabel, Checkbox, Link } from '@mui/material'
import Background from '../Components/Background'
import { useNavigate } from 'react-router-dom'
import VisibilityIcon from '@mui/icons-material/Visibility'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'
import Header from '../Components/Header'
import { createUserWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth'
import { firebaseAuth } from '../Utils/firebase-config'


const Login = () => {

  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false)
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  })
  console.log(formValues)



  // Handling Login 
  const handleSignIn = async (e) => {
    // console.log(formValue)
    e.preventDefault();
    try {
      const { email, password } = formValues;
      await createUserWithEmailAndPassword(firebaseAuth, email, password)
    } catch (err) {
      console.log(err)
    }
  }

  onAuthStateChanged(firebaseAuth, (currentUser) => {
    if (currentUser) navigate("/home");
  })


  return (

    <Container>
      <Header />

      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          zIndex: -1
        }}>
        <Background />
      </Box>

      <Form>

        <Typography
          sx={{ fontFamily: "Trebuchet MS", fontSize: '30px', fontWeight: 'bold', marginTop: '20px' }}>
          Sign In
        </Typography>

        <Box>
          <TextFieldStyled
            type="email"
            name="email"
            label="Email or Phone number"
            fullWidth required
            variant='standard'
            size="small"
            value={formValues.email}
            onChange={(e) => setFormValues({
              ...formValues,
              [e.target.name]: e.target.value
            })}
          />
        </Box>

        <Box sx={{ position: 'relative', display: 'flex', justifyContent: 'end', alignItems: 'center' }}>
          <TextFieldStyled
            type={showPassword ? "text" : "password"}
            name="password"
            label="Password"
            fullWidth required
            variant='standard'
            size="small"
            value={formValues.password}
            onChange={(e) => setFormValues({
              ...formValues,
              [e.target.name]: e.target.value
            })}
          />

          <Box
            sx={{ cursor: 'pointer', position: 'absolute', margin: '28px 10px 0 0' }}
            onClick={(handleSignIn) => setShowPassword(!showPassword)} >
            {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
          </Box>

        </Box>

        <Button
          size="small" variant='contained' color='error'
          fullWidth
          onClick={handleSignIn}
          sx={{ color: 'white', padding: '12px', marginTop: '30px', fontWeight: 'bolder', fontSize: '14px' }}
        >
          Sign In
        </Button>

        <CheckBoxStyled>

          <FormControlLabel
            control={
              <Checkbox defaultChecked sx={{ color: 'grey' }}
                name='checked8'
                color='primary'
                size="medium"
              />
            }
            label="Remember me"
          />

          <Typography sx={{ marginTop: '10px', cursor: 'pointer' }}>Need Help ?</Typography>

        </CheckBoxStyled>


        <Typography
          sx={{ color: 'white', display: 'flex', marginTop: '45px' }}
        >
          <Box sx={{ color: 'grey' }}>
            New to Netflix ? &nbsp;
          </Box>

          <SignLink
            onClick={() => navigate('/signup')} href="#">
            Sign Up Now
          </SignLink>

        </Typography>

      </Form>

    </Container >
  )
}

const Container = styled(Box)`
font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande", "Lucida Sans", Arial, sans-serif;
position:relative;
display : flex;
justify-content:center;
width:100vw;
height: 100vh;
overflow:hidden;
`
const Form = styled("form")`
 font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande", "Lucida Sans", Arial, sans-serif;
background: rgba(0,0,0,0.7);
border-radius : 8px;
width : 30vw;
height : 82vh;
display : flex;
flex-direction : column;
margin : 90px 0 0 35px;
padding : 30px;

& input {
  color : white;
}
`
const TextFieldStyled = styled(TextField)`
 border: 1px solid white;
 margin-top : 18px;
 padding : 5px;

 & label {
  color : grey;
  padding : 0 10px;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande", "Lucida Sans", Arial, sans-serif;
 }
`
const CheckBoxStyled = styled(Box)`
color : grey;
display : flex;
justify-content : space-between;
`
const SignLink = styled(Link)`
 font-family: "Trebuchet MS";
cursor: pointer;
color: white;
font-weight : bolder;
`

export default Login



