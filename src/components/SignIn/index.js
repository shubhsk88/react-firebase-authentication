import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { withFirebase } from '../Firebase';
import { SignUpLink } from '../SignUp';
import * as ROUTES from '../../constants/routes';

const SignInPage = () => {
  return (
    <div>
      <SignInForm />
      <SignUpLink />
    </div>
  );
};

const SignInFormBase = ({ firebase }) => {
  const INITIAL_STATE = {
    email: '',
    password: '',
    error: null,
  };

  const [signIn, setSignIn] = useState(INITIAL_STATE);

  let history = useHistory();
  const onChange = (event) => {
    setSignIn({ ...signIn, [event.target.name]: event.target.value });
  };
  const onSubmit = (event) => {
    event.preventDefault();
    firebase
      .doSignUserWithEmailAndPassword(signIn.email, signIn.password)
      .then((authUser) => {
        setSignIn({ ...INITIAL_STATE });
        history.push(ROUTES.HOME);
      })
      .catch((error) => {
        setSignIn({ error });
      });
  };
  const isInvalid = signIn.email === '' || signIn.password === '';
  return (
    <form onSubmit={onSubmit}>
      <input
        type="email"
        name="email"
        value={signIn.email}
        onChange={onChange}
        placeholder="Email Adresss"
      />
      <input
        type="password"
        name="password"
        value={signIn.password}
        onChange={onChange}
        placeholder="Password"
      />
      <button disabled={isInvalid} type="submit">
        Log In
      </button>
      {signIn.error && <p>{signIn.error.message}</p>}
    </form>
  );
};

const SignInForm = withFirebase(SignInFormBase);

export default SignInPage;
export { SignInForm };
