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

  // Initializing the navigate variable using the useNavigate hook from 'react-router-dom' package. This hook allows navigation between different routes.
  const navigate = useNavigate()

  //  showPassword: Represents whether the password field should display the password or not.
  // formValues: Represents the form input values for email and password fields.
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
  // Declared an asynchronous function handleSignUp that will handle the form submission when the sign-up button is clicked:
  //     It prevents the default form submission behavior.
  //     Extracts the email and password from the formValues.
  //    Calls the createUserWithEmailAndPassword function from Firebase's authentication module (firebase/auth) with the email and password.
  //   If there's an error, it logs the error message to the console.

  onAuthStateChanged(firebaseAuth, (currentUser) => {
    if (currentUser) navigate('/login')
  })
  // Listening for changes in the authentication state using the onAuthStateChanged function from Firebase's authentication module:
  // If a user is authenticated(i.e., logged in), it navigates to the '/home' route using the navigate function.

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
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Enter your password"
              value={formValues.password}
              onChange={(e) => setFormValues({
                ...formValues,
                [e.target.name]: e.target.value
              })}
            />
            {/* value={formValues.email}: 
            Binds the value of the input field to the email property in the formValues state variable. This ensures that the input field reflects the current value of the email property.

            onChange={(e) => setFormValues({ ...formValues, [e.target.name]: e.target.value })}: 
            Sets up an event handler for the input's onChange event. 
            When the user types in the input field, this event handler is triggered. 
            It updates the formValues state variable by spreading the existing formValues object and updating the email property with the new value entered by the user. 
            This allows the input field to be controlled and keep track of the user's input. */}

            <Box
              sx={{ cursor: 'pointer', position: 'absolute', margin: '15px 10px 0 0' }}
              onClick={(handleSignUp) => setShowPassword(!showPassword)} >

              {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
            </Box>


          </Box>

        </Form>


        <ButtonContainer
          onClick={handleSignUp}
          color="error"
          variant="contained"
        >Sign Up
        </ButtonContainer>



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
const HeaderBox = styled(Box)(({ theme }) => ({
  fontFamily: "Trebuchet MS",
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginTop: '100px',
  [theme.breakpoints.down('lg')]: {
    width: '100vw'
  },

}))



const Form = styled("form")(({ theme }) => ({

  fontFamily: "Trebuchet MS",
  display: 'flex',
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    height: '30px',
  },

  "& input": {
    marginTop: '10px',
    padding: '1.5rem 4rem',
    outline: 'none',
    border: '1px solid white',
    fontSize: '1rem',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    [theme.breakpoints.down('sm')]: {
      width: '80vw'
    },
  },
}))

const ButtonContainer = styled(Button)(({ theme }) => ({
  margin: "15px 0",
  padding: '15px 25px',
  [theme.breakpoints.down('sm')]: {
    marginTop: '130px',

  }

}))


export default SignUp



