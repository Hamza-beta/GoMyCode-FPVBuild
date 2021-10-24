import React from "react";
import { Link, useHistory } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../redux/actions/authActions";
function Signin() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const handleSignIn = (e) => {
    e.preventDefault();
    dispatch(login({ email, password }, history));
  };
  return (
    <div className='Sign-login-page'>
      <div className='Sign-form'>
        <form className='Sign-login-form'>
          <h4>Sign In</h4>
          <input
            className='Sign-input'
            type='text'
            placeholder='user email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className='Sign-input'
            type='password'
            placeholder='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className='Sign-button' onClick={handleSignIn}>
            login
          </button>
          <p class='message'>
            Not registered? <Link to='/signup'>Create an account</Link>
          </p>
        </form>
      </div>
    </div>
  );
}
export default Signin;
