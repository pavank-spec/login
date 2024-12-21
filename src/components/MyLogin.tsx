import React, { FormEvent } from 'react'
import { useNavigate } from 'react-router-dom';

export default function MyLogin() {

  const myNav = useNavigate();

    const loginPress= (e:FormEvent)=>{

        e.preventDefault();
        console.log('welcome');
        myNav("/stpeter/home");

    }
  return (
    <form onSubmit={loginPress}>
    <div className="form-group">
      <label >Email address</label>
      <input type="email" className="form-control" 
      id="exampleInputEmail1" aria-describedby="emailHelp" 
      placeholder="Enter email" />
      <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
    </div>
    <div className="form-group">
      <label>Password</label>
      <input type="password" className="form-control"
       id="exampleInputPassword1" placeholder="Password" />
    </div>
    <div className="form-check">
      <input type="checkbox" className="form-check-input" 
      id="exampleCheck1" />
      <label className="form-check-label" >Check me out</label>
    </div>
    <button type="submit" className="btn btn-primary">Login</button>
  </form>
  )
}