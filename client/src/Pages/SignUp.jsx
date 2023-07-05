/* eslint-disable no-unused-vars */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { Box, styled, Button } from '@mui/material'
import Background from '../Components/Background'
import Header from '../Components/Header'
import { createUserWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth'
import { firebaseAuth } from '../Utils/firebase-config'
import { useNavigate } from 'react-router-dom'
'react-router-dom'
import VisibilityIcon from '@mui/icons-material/Visibility'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'


const SignUp = () => {

  const navigate = useNavigate()
  const [showPassword, setShowPassword] = useState(false)
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  })
  console.log(formValues)

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const { email, password } = formValues;
      await createUserWithEmailAndPassword(firebaseAuth, email, password)
    } catch (err) {
      console.log(err, "error while handling signup")
    }
  }

  onAuthStateChanged(firebaseAuth, (currentUser) => {
    if (currentUser) navigate('/home')
  })

  return (

    <MainContainer>

      <Container>

        <Header login />


        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            zIndex: -1
          }}>
          <Background />
        </Box>


        <HeaderBox>
          <h2>Unlimited movies, TV shows and more</h2>
          <h4>Watch anywhere. Cancel anytime.</h4>
          <h5>
            Ready to watch? Enter your email to create or restart membership
          </h5>
        </HeaderBox>

        <Form
          sx={{ gridTemplateColumns: `${showPassword ? "1fr 1fr" : "2fr 1fr"}` }}
        >
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formValues.email}
            onChange={(e) => setFormValues({
              ...formValues,
              [e.target.name]: e.target.value
            })}
          />

          <Box sx={{ position: 'relative', display: 'flex', justifyContent: 'end', alignItems: 'center' }}>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              value={formValues.password}
              onChange={(e) => setFormValues({
                ...formValues,
                [e.target.name]: e.target.value
              })}
            />

            <Box
              sx={{ cursor: 'pointer', position: 'absolute', margin: '8px 10px 0 0' }}
              onClick={(handleSignUp) => setShowPassword(!showPassword)} >
              {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
            </Box>

          </Box>

        </Form>


        <Button
          onClick={handleSignUp}
          sx={{ margin: "15px 0", padding: '15px', width: '10vw' }}
          color="error"
          variant="contained"
        >Sign Up</Button>



      </Container >

    </MainContainer >
  )
}

const MainContainer = styled(Box)`
position:relative;
display:flex;
justify-content:center;
align-items:center;
height:100vh;
width:100vw;
color:white;
text-align:center;
padding:10px 20px;
overflow:hidden;
`
const Container = styled(Box)`
 font-family:  "Trebuchet MS",
            "Lucida Sans Unicode", "Lucida Grande", "Lucida Sans", Arial, sans-serif;
text-align:center;
display:flex;
align-items:center;
flex-direction:column;

& > div{
  font-size : 20px;
    gap:1.6rem;
    margin:10px 0;
}
`
const HeaderBox = styled(Box)`
 font-family:  "Trebuchet MS",
            "Lucida Sans Unicode", "Lucida Grande", "Lucida Sans", Arial, sans-serif;
display : flex;
flex-direction : column;
align-items : center;
margin-top : 100px;
`
const Form = styled("form")`
 font-family:  "Trebuchet MS",
            "Lucida Sans Unicode", "Lucida Grande", "Lucida Sans", Arial, sans-serif;
display: flex;
;

& input{
  padding: 1.5rem;
  outline: none;
  width: 25vw;
  border: 1px solid white;
  font - size: 1.5rem;
 background-color: rgba(0,0,0,0.3);
}
`

export default SignUp



