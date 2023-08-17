import React, { useEffect, useState } from 'react'
import './signup.css'
import Form from '../Form/Forms'
import { useNavigate } from 'react-router-dom';

const email = "matno@gmail.com";
const password = "matt1234";

function SignUp() { 
    const navigate = useNavigate();
    const [access, setAccess] = useState(false);
  
    const login = (userData) => {
       if(userData.email  === email && userData.password === password){
        setAccess(true);      
        navigate('/home');
       }
     }
     useEffect(() => {
      !access && navigate('/')
     },[access])

    const [signIn, setSignIn] = useState(false)

    return (
        <div className='signUp'>
            <div className="signUp_background">
            <img 
                className='signUp_logo'
                src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt="netflix logo" 
            />
                <button onClick={() => setSignIn(true)} className="signUp_button"> Sign In </button>
                <div className="signUp_gradient">
            </div>
            <div className="signUp_body">

                {signIn ? (
                    <Form login={login}/>
                ) : (
                    <>
                    <h1>Unlimited movies, TV shows, and more.</h1>
                    <h2>Watch anywhere. Cancel at any time</h2>
                <h3>Ready to watch? Enter your email to create or restart your membership.</h3>

                <div className="signUp_input">  
                    <form>
                        <input type="email" placeholder='Email Address' />
                        <button onClick={() => setSignIn(true)} className='signUp_buttonStart'>GET  STARTED</button>
                    </form>
                </div>
            </>
                    )
                }
        </div>
    </div>        
</div>
  )
}

export default SignUp