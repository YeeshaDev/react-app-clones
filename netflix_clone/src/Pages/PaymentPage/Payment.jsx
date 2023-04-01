import React, { useState } from 'react';
import './Payment.css';
import Logo from '../../assets/netflixLogo.png'
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import TabletIcon from '@mui/icons-material/Tablet';
import TvIcon from '@mui/icons-material/Tv';
import ComputerIcon from '@mui/icons-material/Computer';
import { Link,useHistory } from 'react-router-dom';
import {usePaystackPayment} from 'react-paystack'


function Payment() {
    const history = useHistory();
    const[cardField,setCardField] = useState ({
        Name: "",
        email: "",
        phoneNo:"",
        amount: "",
		publicKey: "pk_test_87ac60396c1e2cca490d90abc08a418f08c9e970",
        
        
    });
    const initializePayment = usePaystackPayment(cardField);

	// Callback if transaction is successful
	const onSuccess = () => {
		alert("Payment Successful, check your email for confirmation");
        history.push("/home")
	};

	// Callback if payment gateway is closed
	const onClose = () => {
		alert("Opps, Payment not completed");
	};

    const [error, setError] = useState({
        firstName: "Please enter a first name",
        email: "Please enter a valid email",
        phoneNo: "Please enter a valid phone number",
        amount:"You must input a plan"
         
    })
    const[focused,setFocused] = useState(false)

    const handleSubmit = (e) => {
       e.preventDefault(); 
       initializePayment(onSuccess, onClose);
    
    }

    const handleChange = (e) => {
        const {name,value} = e.target;
        let key = e.target.name
        cardField[key] = key ==='amount' ? e.target.value * 100: e.target.value*100;
        setCardField({
          ...cardField,[name]:value
        });
    }
console.log(cardField)
    const handleFocus = () => {
        setFocused(true);
    }

    return (
        <div className='payment--content'>
          <div className='signup--header'>
        <img src={Logo}
        alt="logo"
        className='signup--logo'/>
        <Link to="/">
        <button>Sign Out</button>
        </Link>
      </div>
      <hr/>
      <div className='payment--text'>
      <p>Step<b> 2</b> OF <b>2</b></p>
       <h2>Set up your payment</h2>
       <div className='card--img'>
        <img src='https://assets.nflxext.com/ffe/siteui/acquisition/payment/svg/visa-v3.svg' 
        alt="visa card"
        className='card--logo'/>
        <img src='	https://assets.nflxext.com/ffe/siteui/acquisition/payment/svg/mastercard-v2.svg' 
        alt="master card"
        className='card--logo'/>
        <img src='https://assets.nflxext.com/ffe/siteui/acquisition/payment/icon_verve.png' 
        alt="verve card"/>
       </div>
       <form className='payment--field' onSubmit={handleSubmit}>
        <input type="text" 
        name="Name" 
        placeholder='Name'
        value={cardField.firstName}
        onChange={handleChange}
        required={true}
        onBlur={handleFocus}
        focused={focused.toString()}/>
    <span>{error.firstName}</span>
        <input type="text"
        name="email"  
        placeholder='Email'
        value={cardField.email}
        onChange={handleChange}
        required={true}
        onBlur={handleFocus}
        focused={focused.toString()}
        />
        <span>{error.email}</span>
        <input type="tel"  
        placeholder='Phone number'
        value={cardField.phoneNo}
        onChange={handleChange}
        name="phoneNo"
        required={true}
        onBlur={handleFocus}
        focused={focused.toString()}
        />
    <span>{error.phoneNo}</span>
    <input type="tel"  
        placeholder='Enter your preferred plan (e.g 4400)'
        value={cardField.amount}
        onChange={handleChange}
        name="amount"
        required={true}
        onBlur={handleFocus}
        focused={focused.toString()}
        />
    <span>{error.amount}</span>
        
        
        
        
        <div className='plans'>
            <hr/>
            <h1>Subscription Plans</h1>
            <hr/>
            <div className='prices'>
                <div className='plans--prices'>
                    <div>
                    <h3>Premium</h3>
                    <p>NGN4,400/month</p>
                    </div>
                    <div>
                        <SmartphoneIcon/>
                        <TabletIcon />
                        <ComputerIcon/>
                        <TvIcon/>
                    </div>
                {/*<button>Subscribe</button>*/}
                </div>
                <div className='plans--prices'>
                <div>
                    <h3>Standard</h3>
                    <p>NGN3,600/month</p>
                    </div>
                    <div>
                        <SmartphoneIcon/>
                        <TabletIcon />
                        <ComputerIcon/>
                        <TvIcon/>
                    </div>
                {/*<button>Subscribe</button>*/}
                </div>
                <div className='plans--prices'>
                <div>
                    <h3>Basic</h3>
                    <p>NGN2,900/month</p>
                    </div>
                    <div>
                        <SmartphoneIcon/>
                        <TabletIcon />
                        <ComputerIcon/>
                        <TvIcon/>
                    </div>
                {/*<button>Subscribe</button>*/}
                </div>
                <div className='plans--prices'>
                <div>
                    <h3>Mobile</h3>
                    <p>NGN1,200/month</p>
                    </div>
                    <div>
                        <SmartphoneIcon/>
                        <TabletIcon />
                    </div>
                {/*<button>Subscribe</button>*/}
                </div>
            </div>
            {/*<button className='plan--btn'>Choose</button>*/}
        </div>
        <div className='plan--terms'>
            <p>By checking the checkbox below, you agree to our Terms of Use, Privacy Statement, and that you are over 18. Netflix will automatically continue your membership and charge the membership fee (currently NGN1,200/month) to your payment method until you cancel. You may 
                cancel at any time to avoid future charges.</p>
                <span className='terms--input'>
                <input type="checkbox" />
                <label htmlFor='i agree'>I agree.</label>
                </span>
                
        </div>
        
        <button className='login--btn'>Start Membership</button>
        
       </form>
      </div>
        </div>
    )
}

export default Payment