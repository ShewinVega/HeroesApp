import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import { AuthContext } from '../../src/context/Auth';
import { AppRouter } from '../../src/router/AppRouter';



describe(`Testing AppRouter`, () => {

  // variables
  const contextValue = {
    logged: false,
  };
  const contextValueLogged = {
    logged: true,
    user: {
      id: 'ashosdafaf-14f2903fn8f-93kfhh',
      name: 'Edwin Vega'
    }
  };

  test(`Should show the login if not authenticated`, () => {

    render(
      <MemoryRouter initialEntries={['/marvel']}>
        <AuthContext.Provider value={contextValue}>
          <AppRouter />
        </AuthContext.Provider>
      </MemoryRouter>
    );

    expect(screen.getByText('Login', { selector: 'h1' })).toBeTruthy();
    expect(screen.getAllByText('Login').length).toBe(2);
  });


  test(`Should show the marvel component if is authenticated`, () => {

    render(
      <MemoryRouter initialEntries={['/marvel']}>
        <AuthContext.Provider value={contextValueLogged}>
          <AppRouter />
        </AuthContext.Provider>
      </MemoryRouter>
    );

    expect(screen.getByText(contextValueLogged.user.name)).toBeTruthy();
    expect(screen.getAllByText('Marvel').length).toBeGreaterThanOrEqual(1);
  });


});
