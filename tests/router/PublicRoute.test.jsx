import React from 'react';
import { render, screen } from "@testing-library/react";
import { AuthContext } from "../../src/context/Auth";
import { PublicRoute } from "../../src/router/PublicRoute";
import { MemoryRouter, Route, Routes } from 'react-router';



describe(`Testing public routes`, () => {

  // variables
  // not authenticated
  const contextValue = {
    logged: false
  }

  // authenticated
  const newContextValue = {
    logged: true,
    user: {
      id: 'ashosdafaf-14f2903fn8f-93kfhh',
      name: 'Pablo Escobar'
    }
  }

  test(`Should show children if not authenticated`, () => {

    render(
      <AuthContext.Provider value={ contextValue }>
        <PublicRoute>
          <h1>This is the public route</h1>
        </PublicRoute>
      </AuthContext.Provider>
    );

    // screen.debug();
    expect(screen.getByText('This is the public route')).toBeTruthy();
  });


  test(`Should navigate if is authenticated`, () => {

    render(
      <AuthContext.Provider value={ newContextValue }>
        <MemoryRouter initialEntries={['/login']}>
          <Routes>
            <Route path='login' element = {
              <PublicRoute>
                <h1>This is the public route</h1>
              </PublicRoute>
            } />
            <Route path='marvel' element = { <h1>Pagina de Marvel</h1> } />
          </Routes>
        </MemoryRouter>
      </AuthContext.Provider>
    );

    expect(screen.getByText('Pagina de Marvel')).toBeTruthy();
    // screen.debug();

  });

});
