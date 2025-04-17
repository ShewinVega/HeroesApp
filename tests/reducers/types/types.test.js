import { types } from "../../../src/auth/types/types";



describe(`Testing "TYPES"`, () => {


  test(`Should return these types`, () => {

    expect(types).toEqual({
      login: 'LOGIN',
      logout: 'LOGOUT'
    });

  });

});
