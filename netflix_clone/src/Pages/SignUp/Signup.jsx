import React,{useState} from 'react';
import './Signup.css';
import Logo from '../../assets/netflixLogo.png'
import { Link } from 'react-router-dom';
import Footer from '../../Components/Footer/Footer';
import { auth } from '../../Firebase'
import {createUserWithEmailAndPassword} from 'firebase/auth';
import {useHistory} from 'react-router-dom'

function Signup() {
const history = useHistory();
  const [email, setEmail] = useState ("");
  const [password, setPassword] = useState("");
  const[error,setError] = useState ("")
  const [passError, setPassError] = useState("")

  const signUp = () => {
    createUserWithEmailAndPassword(
      auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user)
    //alert("logged in succesfully")
    history.push("/payment")
    // ...
  })
  .catch((error) => {
    //const errorCode = error.code;
    //alert(errorCode)
    const errorMessage = error.message;
    console.log(errorMessage)
    setError("Email is invalid")
    setPassError("Password is invalid")
    // ..
  });

  }
  return (
    <div className='signup--details'>
      
      <div className='signup--header'>
        <img src={Logo}
        alt="logo"
        className='signup--logo'/>
        <Link to="/login">
        <button>Sign In</button>
        </Link>
      </div>
      <hr/>
      <div className='signup--box'>
      <div className='signup--content'>
       <p>Step<b> 1</b> OF <b>2</b></p>
       <h1>Welcome back!</h1>
       <h1>Joining Netflix is easy</h1>
       <h3>Enter your password and 
        you'll be watching in no time.</h3>
        <form className='form' onSubmit={(e) => e.preventDefault()}>
          <input type="email"
           placeholder='Email'
           value={email}
           onChange={(e) => setEmail(e.target.value)}
           />
           <p className='error'>{error}</p>
           <input type="password"
           placeholder='Password'
           value={password}
           onChange={(e) => setPassword(e.target.value)}
           />
           <p className='error'>{passError}</p>
           <a href="https://www.netflix.com/ng/LoginHelp">Forgot your password?</a>
          <button className='signup--btn' onClick={signUp}>Next</button>
        </form>
        </div>
        </div>
        <div className='sign--footer'>
        <Footer />
        </div>
        </div>
  )
}

export default Signup