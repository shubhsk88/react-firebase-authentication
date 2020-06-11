import React, { useState } from 'react';
import * as ROUTES from '../../constants/routes';
import { useHistory, Link } from 'react-router-dom';
import { withFirebase } from '../Firebase/';
const SignUpPage = () => {
  return (
    <div>
      <h1>Sign Up Page</h1>
      <SignUpForm />
    </div>
  );
};

const SignUpFormBase = ({ firebase }) => {
  const INITIAL_STATE = {
    username: '',
    email: '',
    passwordOne: '',
    passwordTwo: '',
    error: null,
  };

  let history = useHistory();

  const [signup, setSignup] = useState(INITIAL_STATE);

  const onSubmit = (event) => {
    event.preventDefault();
    firebase
      .doCreateUserWithEmailAndPassword(signup.email, signup.passwordOne)
      .then((authUser) => {
        setSignup({ ...INITIAL_STATE });
        history.push(ROUTES.HOME);
      })
      .catch((error) => {
        setSignup({ error });
      });
  };
  const onChange = (event) => {
    setSignup({ ...signup, [event.target.name]: event.target.value });
  };

  const isInvalid =
    signup.passwordOne !== signup.passwordTwo ||
    signup.passwordOne === '' ||
    signup.email === '' ||
    signup.username === '';

  

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        name="username"
        value={signup.username}
        onChange={onChange}
        placeholder="Full NAme"
      />
      <input
        name="email"
        value={signup.email}
        onChange={onChange}
        type="text"
        placeholder="Email Address"
      />
      <input
        name="passwordOne"
        value={signup.passwordOne}
        onChange={onChange}
        type="password"
        placeholder="Password"
      />
      <input
        name="passwordTwo"
        value={signup.passwordTwo}
        onChange={onChange}
        type="password"
        placeholder="Confirm Password"
      />
      <button disable={isInvalid.toString()} type="submit">
        Sign Up
      </button>
      {signup.error && <p>{signup.error.message}</p>}
    </form>
  );
};

const SignUpForm = withFirebase(SignUpFormBase);

const SignUpLink = () => (
  <p>
    Don't have an account? <Link to={ROUTES.SIGN_UP}>Sign Up</Link>
  </p>
);

export default SignUpPage;

export { SignUpForm, SignUpLink };
