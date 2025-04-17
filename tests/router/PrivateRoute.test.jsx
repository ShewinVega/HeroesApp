import React from 'react';
import { render, screen } from "@testing-library/react";
import { AuthContext } from "../../src/context/Auth";
import { PrivateRoute } from "../../src/router/PrivateRoute";
import { MemoryRouter, Route } from 'react-router';
import { Routes } from 'react-router';


describe(`Testing private routes`, () => {

  // variables
  const contextValue = {
    logged: true,
    user: {
      id: 'ashosdafaf-14f2903fn8f-93kfhh',
      name: 'Pablo Escobar'
    }
  }


  test(`Should show children if is authenticated`, () => {

    Storage.prototype.setItem = jest.fn();

    render(
      <AuthContext.Provider value={ contextValue }>
        <MemoryRouter initialEntries={['/']}>
          <Routes>
            <Route element = {<PrivateRoute />}>
              <Route path='/' element = { <h1>Ruta Privada</h1> } />
            </Route>
          </Routes>
        </MemoryRouter>
      </AuthContext.Provider>
    );

    // screen.debug();
    const getText = screen.getByText('Ruta Privada'); // getting h1 tag

    expect(getText.textContent).toBe('Ruta Privada'); // testing if the text in the tag is the same.
    expect(localStorage.setItem).toHaveBeenCalled();
  });

});
