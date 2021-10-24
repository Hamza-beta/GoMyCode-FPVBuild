import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { register } from "../redux/actions/authActions";
import { Link, useHistory } from "react-router-dom";
function Signup() {
  const history = useHistory();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passworda, setPassworda] = useState("");
  const dispatch = useDispatch();
  const handleSignUp = (e) => {
    e.preventDefault();
    dispatch(register({ name, email, password, passworda }, history));
  };
  return (
    <div>
      <div className='Sign-login-page'>
        <div className='Sign-form'>
          <form className='Sign-login-form'>
            <h4>Sign Up</h4>
            <input
              className='Sign-input'
              type='text'
              placeholder='username'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              className='Sign-input'
              type='text'
              placeholder='e-mail'
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
            <input
              className='Sign-input'
              type='password'
              placeholder='confirm password'
              value={passworda}
              onChange={(e) => setPassworda(e.target.value)}
            />
            <button className='Sign-button' onClick={handleSignUp}>
              Submit
            </button>
            <p class='message'>
              Already registered <a href='/signin'>Sign In</a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
export default Signup;
