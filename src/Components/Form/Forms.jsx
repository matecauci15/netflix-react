// import { useState } from "react";
// import validation from "../Validation/Validation";
// import './login.css'

// const Form = () => {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [error, setError] = useState({});

//     const handleSubmit = (event) => {
//       event.preventDefault()
      
//       const errors = validation({ email, password });

//       setError(errors)
//       if (Object.keys(errors).length === 0) {
//         // Aquí puedes realizar la lógica para el inicio de sesión
//         console.log('Inicio de sesión exitoso');
//         setEmail('')
//         setPassword('')
//       }

//     }

//     return (
//         <form onSubmit={handleSubmit}>
//             <div className="principalContainer">

//             <div className="secondaryContainer">
//                 <label htmlFor="email">Email:</label>
//                 <input className="input"
//                     type="email"
//                     id="email"
//                     value={email}
//                     onChange={(event) => setEmail(event.target.value)}
//                     />
//                     {error.email && <p className="error">{error.email}</p>}
//             </div>
//             <div className="secondaryContainer">
//                 <label htmlFor="password">Password:</label>
//                 <input className="input"
//                     type="password"
//                     id="password"
//                     value={password}
//                     onChange={(event) => setPassword(event.target.value)}
//                     />
//                     {error.password && <p className="error">{error.password}</p>}
//             </div>
//             <button className="button" type="submit">Login</button>
//             </div>
//         </form>
//     )
// };

// export default Form;

import { useState } from "react";
import validation from "../Validation/Validation";
import './login.css'


const Form = ({login}) => {
    const [error, setError] = useState({});
    const [userData, setUserData] = useState({
        email: '',
        password: ''
    });

    const handleSubmit = (event) => {
      event.preventDefault()
      login(userData);
      
      const errors = validation({ email, password });

      setError(errors)
      
      if (Object.keys(errors).length === 0) {
        // Aquí puedes realizar la lógica para el inicio de sesión
        console.log('Inicio de sesión exitoso');
        // setEmail('')
        // setPassword('')
        // setUserData('')
      }
    }

    return (
        <div className="login_form">

        <form onSubmit={handleSubmit}>
            {/* <div className="principalContainer"> */}
            <h1>Sign In</h1>
            {/* <div className="secondaryContainer"> */}
                {/* <label htmlFor="email"></label> */}
                <input placeholder=" Email or phone" 
                    type="email"
                    id="email"
                    value={userData.email}
                    onChange={(event) => setUserData({...userData, email: event.target.value})}
                    />
                    <div className="login_errors">
                    {/* {error.email && <p className="error">{error.email}</p>} */}
                    </div>
            {/* </div> */}
            {/* <div className="secondaryContainer"> */}
                {/* <label htmlFor="password"></label> */}
                {/* <div className="input_div"> */}
                <input placeholder=" Password"
                    type="password"
                    id="password"
                    value={userData.password}
                    onChange={(event) => setUserData({ ...userData, password: event.target.value })}
                    />
                {/* </div> */}
                    <div className="login_error">
                    {/* {error.password && <p className="error">{error.password}</p>} */}
                </div>
            {/* </div> */}
            <button className="button" type="submit">Login</button>
            {/* </div> */}
            <h4>
                <span className="login_gray">New to Netflix? </span> 
                <span className="login_link">Sign up now.</span>
            </h4>
        </form>
    </div>
    )
};

export default Form;
