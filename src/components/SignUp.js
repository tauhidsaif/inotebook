import React, {useState} from 'react'
import './CSS/Login.css'
import {useNavigate} from 'react-router-dom'

const SignUp = (props) => {
  let Navigate = useNavigate();
  const [credentials, setCredentials] = useState({ name: "", email: "", password: "", cpassword:"" })

  const handleSignUp = async (e) => {
    const {name, email , password}= credentials;
    e.preventDefault()
    const response = await fetch("https://tohid-inotebook.herokuapp.com/api/auth/createuser", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({name,email, password })
    })
    const json = await response.json();
    console.log(json)
    if (json.success) {
      // save the auth token  and redirect
      localStorage.setItem('token', json.authToken);
      Navigate('/', { replace: true })
      props.showAlert("Your Account created successfully", 'success')
    } else {
      props.showAlert(`${email} already exists.`, 'danger')
    }
  }

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value })
  }



  return (
    <div className='' >
      <form className='my-5 d-flex justify-content-center align-items-center' onSubmit={handleSignUp} >

      <div className="form-group ">
          <label htmlFor="exampleInputEmail1">Name</label>
          <input type="text" className="form-control my-2" id="name" onChange={onChange} value={credentials.name} name='name' aria-describedby="emailHelp" minLength={5} required placeholder="Enter Name" />
        </div>

        <div className="form-group ">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input type="email" className="form-control my-2" id="email" onChange={onChange} value={credentials.email} name='email' aria-describedby="emailHelp" required placeholder="Enter email" />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input type="password" className="form-control my-2" id="password"  minLength={5} required value={credentials.password} name='password' onChange={onChange} placeholder="Password" />
        </div>

        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Confirm Password</label>
          <input type="password" className="form-control my-2" id="cpassword" minLength={5} required value={credentials.cpassword} name='cpassword' onChange={onChange} placeholder="Confrim Password" />
        </div>

        <button type="submit" id='loginbtn' className="btn btn-primary ">Sign Up</button>
      </form>
    </div>
  )
}
export default SignUp