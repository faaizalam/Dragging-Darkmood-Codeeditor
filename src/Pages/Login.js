import React, { useEffect } from 'react'
import { Cookies } from 'react-cookie'
import { useNavigate } from 'react-router-dom'


const Login = () => {
  const navig=useNavigate()
  // const cookk= new Cookies()
  // if (cookk.get('myCookie')===undefined) {
  //   navig('/')
  //   console.log(cookk.get('myCookie'),"bro")

    
  // }
  useEffect(()=>{
    const cookiess = new Cookies();
    
  if (cookiess.get('myCookie')===undefined) {
    navig("/")
    
  }
},[navig])
  return (
    <div>Login</div>
  )
}

export default Login