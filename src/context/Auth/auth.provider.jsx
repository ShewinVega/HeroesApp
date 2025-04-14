import { useReducer } from 'react';
import { AuthContext } from './auth.context';
import { authReducer } from './auth.reducer';
import { types } from '../../auth/types/types';


// Initializer function
const init = () => {
  const user = JSON.parse(localStorage.getItem('user'));

  return {
    logged: !!user,
    user: user,
  }
}

export const AuthProvider = ({ children }) => {

  const [authState, dispatch] = useReducer(authReducer, {} , init);

  const login = ( name = '' ) => {
    const payload =  {
      id: 'abc',
      name
    }
    // We are going to create the action for dispatch
    const action = {
      type: types.login,
      payload,
    };

    // save user in localStorage
    localStorage.setItem('user', JSON.stringify(payload));

    dispatch(action);
  }

  const logout = () => {
    // Create action to dispatch
    const action = {
      type: types.logout
    };

    localStorage.removeItem('user');
    dispatch(action);

  }

  return (
    <AuthContext.Provider
     value={{
       ...authState,
       login,
       logout
     }}
    >
    {children}
    </AuthContext.Provider>
  )
}
