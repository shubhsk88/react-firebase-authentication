import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, withRouter } from 'react-router-dom';
import Navigation from '../Navigation';
import LandingPage from '../Landing';
import SignUpPage from '../SignUp';
import SignInPage from '../SignIn';
import PasswordForgetPage from '../PasswordForget';
import HomePage from '../Home';
import AccountPage from '../Account';
import { withFirebase } from '../Firebase';
import AdminPage from '../Admin';
import * as ROUTES from '../../constants/routes';
import {AuthUserContext} from '../Session';


const App = ({ firebase }) => {
  const [authUser, setAuthUser] = useState(null);
  useEffect(() => {
    firebase.auth.onAuthStateChanged((authen) => {
      authen ? setAuthUser(authen) : setAuthUser(null);
    });
  });

  return (
    <AuthUserContext.Provider value={authUser}>
    <Router>
      <Navigation  />

      <hr />
      <Route exact path={ROUTES.LANDING} component={LandingPage} />
      <Route exact path={ROUTES.SIGN_IN} component={withRouter(SignInPage)} />
      <Route exact path={ROUTES.SIGN_UP} component={withRouter(SignUpPage)} />
      <Route exact path={ROUTES.HOME} component={HomePage} />
      <Route
        exact
        path={ROUTES.PASSWORD_FORGET}
        component={PasswordForgetPage}
      />
      <Route exact path={ROUTES.ACCOUNT} component={AccountPage} />
      <Route exact path={ROUTES.ADMIN} component={AdminPage} />
    </Router>
    </AuthUserContext.Provider>
  );
};

export default withFirebase(App);
