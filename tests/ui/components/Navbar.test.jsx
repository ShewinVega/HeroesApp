import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { AuthContext } from '../../../src/context/Auth';
import { MemoryRouter, useNavigate} from 'react-router';
import { Navbar } from '../../../src/ui';


const mockUseNavigate = jest.fn();
jest.mock('react-router', () => ({
  ...jest.requireActual('react-router'),
  useNavigate: () => mockUseNavigate,
}));

describe(`Testing Navbar component`, () => {

  const contextValue = {
    logged: true,
    user: {
      id: 'ashosdafaf-14f2903fn8f-93kfhh',
      name: 'David Goggins'
    },
    logout: jest.fn()
  }

  beforeEach(() => jest.clearAllMocks());

  test(`Should show the username`, () => {

    render(
      <AuthContext.Provider value={ contextValue }>
        <MemoryRouter initialEntries={['/']}>
          <Navbar />
        </MemoryRouter>
      </AuthContext.Provider>
    );

    expect(screen.getByText('David Goggins').textContent).toBe(contextValue.user.name);
    // screen.debug();
  });

  test(`Should call logout and navigate when click the logout button `, () => {

    render(
      <AuthContext.Provider value={ contextValue }>
        <MemoryRouter initialEntries={['/']}>
          <Navbar />
        </MemoryRouter>
      </AuthContext.Provider>
    );

    const logoutBtn = screen.getByRole('button');
    fireEvent.click(logoutBtn);

    expect(contextValue.logout).toHaveBeenCalledTimes(1);
    expect(mockUseNavigate).toHaveBeenCalledWith("/login", {"replace": true});
  });


});
