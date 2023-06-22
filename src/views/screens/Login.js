import React from 'react'
import { Avatar, Button } from "@mui/material";
import './Login.css'


function Login() {
  return (
    <div className="flex justify-center items-center h-screen m-5 text-blue-950">
        
      <div className="login__logo">
          <div className=" mb-5 text-center"><h1>Tattometry</h1> by AzulaCorp</div>
          <div className="avatar"><Avatar
          alt="AzulaTech"
          src={require("./azulaLogo.png")}
          sx={{ width: 200, height: 200 }}
        /></div>
        

        <Button className='w-[200px] transform-none text-sm my-10' variant="contained" type="submit">
          Sign In
        </Button>
      </div>
    </div>
  );
}

export default Login