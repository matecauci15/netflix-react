import { useState, useEffect } from 'react'
import './App.css'
// import Form from './Components/Form/Forms'
import { Routes, Route, useNavigate, useLocation } from "react-router-dom"
// import Users from './Components/User/Users'
import HomeScreen from './Components/Home/HomeScreen'
import SignUp from './Components/SignUp/SignUp'
import Series from './Components/Series/Series'


function App() {

  // const navigate = useNavigate();
  // const [access, setAccess] = useState(false);

  // const login = (userData) => {
  //    if(userData.email  === email && userData.password === password){
  //     setAccess(true);      
  //     navigate('/home');
  //    }
  //  }
  //  useEffect(() => {
  //   !access && navigate('/')
  //  },[access])

  return (

    <div className="app">
    { <Routes>
      <Route path='/' element={<SignUp/>} />
      {/* <Route path='/login' element={<Form login={login}/>}/> */}
      <Route path='/home' element={<HomeScreen/>} />
      <Route path='/series' element={<Series />}/>

    </Routes> }
    </div>
  )
}

export default App
