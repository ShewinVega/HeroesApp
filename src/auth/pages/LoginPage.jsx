import React from 'react';
import { useNavigate } from 'react-router';
import { useAuthContext } from '../../context/Auth';

export const LoginPage = () => {

  const { login } = useAuthContext();

  const navigate = useNavigate();

  const onLogin = () => {
    login(' Edwin Vega '); // username that we are going to save in localstorage

    // Verify if it was lastPath
    const lastPath = localStorage.getItem('lastPath') || '/marvel';
    navigate(`${lastPath}`, {
      replace: true,
    });
  }

  return (
    <div className="container mt-5">
      <h1>Login</h1>
      <hr />

      <button
        className="btn btn-primary"
        onClick={onLogin}
      >
        Login
      </button>
    </div>
  );
}
