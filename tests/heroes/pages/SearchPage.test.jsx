import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import { SearchPage } from '../../../src/heroes';

const mockUseNavigate = jest.fn();
jest.mock('react-router', () => ({
  ...jest.requireActual('react-router'),
  useNavigate: () => mockUseNavigate,
}));

describe(`Testing Search page`, () => {


  beforeEach(() => jest.clearAllMocks());

  test(`Should show correctly with default values`, () => {

    const { container } = render(
      <MemoryRouter>
        <SearchPage />
      </MemoryRouter>
    );

    expect(container).toMatchSnapshot();
  });

  test(`Should Show Batman and the input value with the queryString`, () => {

    render(
      <MemoryRouter initialEntries={['/search?q=batman']}>
        <SearchPage />
      </MemoryRouter>
    );

    const input = screen.getByRole('textbox');
    // expect(input.value).toBe('batman');

    const img = screen.getByRole('img');
    console.log(img.src);
    expect(img.src).toContain('/assets/heroes/dc-batman.jpg');

    const alertDanger = screen.getByLabelText('alert-primary');
    expect(alertDanger.style.display).toBe('none');

    // screen.debug();

  });

  test(`Should show an error if the hero does not exist. example(batman007)`, () => {

    render(
      <MemoryRouter initialEntries={['/search?q=batman11']}>
        <SearchPage />
      </MemoryRouter>
    );

    // screen.debug();
    const alertDanger = screen.getByLabelText('alert-danger');
    expect(alertDanger.style.display).not.toBe('none');
  });

  test(`Should call the navigate to a the new page`, () => {
    const query = `superman`;

    render(
      <MemoryRouter initialEntries={[`/search`]}>
        <SearchPage />
      </MemoryRouter>
    );


    const getInput = screen.getByRole('textbox');
    fireEvent.change(getInput, { target: { name: 'searchText' ,value: query } });

    const getForm = screen.getByRole('form');
    fireEvent.submit(getForm);

    expect(mockUseNavigate).toHaveBeenCalledWith(`?q=${query}`);
  });

});
