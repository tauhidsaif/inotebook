import React, {useState} from 'react'
import './CSS/Login.css'
import {useNavigate} from 'react-router-dom'
const Login = () => {
    let Navigate = useNavigate();
    const [credentials, setCredentials] = useState({email : "", password : ""})

    const handleLogin = async (e)=>{
        e.preventDefault()
        const response = await fetch("http://localhost:5000/api/auth/login", {
            method: 'POST',
            headers : {
                'Content-Type': 'application/json',
            },
            body : JSON.stringify({email : credentials.email, password : credentials.password})
        })
        const json = await response.json() ;
        console.log(json)
        if(json.success){
            // save the auth token  and redirect
            localStorage.setItem('token', json.authtoken);
            Navigate('/', {replace: true})

        }else{
            alert("Please login with correct credentials")
        }
    }

    const onChange = (e) =>{
        setCredentials({...credentials, [e.target.name] : e.target.value})
    }

    

    return (
        <div className='' >
            <form className='my-5 d-flex justify-content-center align-items-center' onSubmit={handleLogin} >
            <div className="form-group ">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input type="email" className="form-control my-2" id="email" onChange={onChange} value={credentials.email} name='email' aria-describedby="emailHelp" placeholder="Enter email"/>
                   
            </div>
            <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input type="password" className="form-control my-2" id="password" value={credentials.password} name='password'onChange={onChange} placeholder="Password"/>
            </div>
           
            <button type="submit" id='loginbtn' className="btn btn-primary ">Login</button>
        </form>
        </div>
    )
}

export default Login