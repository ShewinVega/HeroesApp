import { useReducer } from "react";
import { authReducer  } from "../../../src/context/Auth/auth.reducer";
import { renderHook } from "@testing-library/react";
import { types } from "../../../src/auth/types/types";

describe(`Testing auth-reducer`, () => {

  // Data for test
  const initialState = {
    logged: false,
    user: null,
  };

  const payload = {
    id: `shfosdfsdaf-180129nc32-dsdjsds`,
    name: 'Tommy Shelby'
  }

  test(`Should return the default state`, () => {

    const { result } = renderHook(() => useReducer(authReducer, initialState));

    const [ authState, ] = result.current;

    expect(authState).toEqual(initialState);
  });


  test(`Should call login and return the user authenticated and logged in true`, () => {

    const action = {
      type: types.login,
      payload
    };

    const { logged, user } = authReducer(initialState, action)

    expect(user).toBe(payload);
    expect(logged).toBeTruthy();
  });

  test(`Should delete the username and logged turn to false`, () => {

    const action = { type: types.logout };
    const { logged, user } = authReducer(initialState, action);

    expect(logged).toBeFalsy();
    expect(user).toBe(undefined);
  });

});
