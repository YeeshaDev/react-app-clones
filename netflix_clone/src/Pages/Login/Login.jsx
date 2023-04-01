import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../Components/Footer/Footer';
import './Login.css';
import Logo from '../../assets/netflixLogo.png'
import { auth } from '../../Firebase'
import {signInWithEmailAndPassword} from 'firebase/auth';
import {useHistory} from 'react-router-dom'

function Login() {
const history = useHistory();
  const [email, setEmail] = useState ('');
  const [password, setPassword] = useState('');
  const[error,setError] = useState ("")

  const signIn = () => {
    signInWithEmailAndPassword(
      auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user)
    //alert("logged in succesfully")
    history.push("/home")
    // ...
  })
  .catch((error) => {
    //const errorCode = error.code;
    //alert(errorCode)
    const errorMessage = error.message;
    setError(errorMessage)
    // ..
  });

  }
  return (
    <div className='login--content'>
      <div className="login--bg">
        <div className='logo--flex'>
       <img src={Logo}
        alt="logo"
        className='netflix--logo'/>
        <Link to='/payment'>
        <button className='pay-button'>Pay First</button>
        </Link> 
        </div>
        <div className='login--text'>
        <form onSubmit={(e) => e.preventDefault()}>
        <h1>Sign In</h1>
        <p className='errormessage'>{error}</p>
            <input type={email}
            value="demo@gmail.com"
            placeholder="Email or phone number"
            onChange={(e) => setEmail(e.target.value)}
             />
             <input type={password}
             value="Agunbiade01"
             placeholder="Password"
             onChange={(e) => setPassword(e.target.value)}
             />
             <button className='login--btn' onClick={signIn}>Sign In</button>
             <div className="checkbox--content">
              <div className='checkbox'>
              <label htmlFor='Remember me'>Remember me</label>
              <input type="checkbox"/>
               </div>
               <div>
                <p>Need help?</p>
               </div>
              </div> 
        </form>
         <div className='signup'>
        <h3>New to Neflix?</h3>
        <Link to='/'>
        <button>Sign Up now</button>
        </Link>
        </div>
        </div>
        </div>
        <hr/>
        <Footer />
        </div>
  )
}

export default Login