import React, { useState, useEffect } from 'react';
import { withFirebase } from '../Firebase';
import AuthUserContext from './context';


  return withFirebase(WithAuthentication);
};

export default withAuthentication;
