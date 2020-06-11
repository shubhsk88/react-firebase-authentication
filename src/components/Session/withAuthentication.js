import React, { useState, useEffect } from 'react';
import { withFirebase } from '../Firebase';
import AuthUserContext from './context';

const AuthUserProviderBase = ({ firebase }) => {
  const [authUser, setAuthUser] = useState(null);
  useEffect(() => {
    firebase.auth.onAuthStateChanged((authen) => {
      authen ? setAuthUser(authen) : setAuthUser(null);
    });
    const D = () => {
      return 'high';
    };
    return (
      <AuthUserContext.Provider value={authUser}>
        <D />
      </AuthUserContext.Provider>
    );
  });
};

const AuthUserProvider = withFirebase(AuthUserProviderBase);

export default AuthUserProvider;
