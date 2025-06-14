import React from 'react';
import { HeroCard } from '../components/HeroCard';
import {useForm} from "../../hooks/useForm.js";
import {useLocation, useNavigate} from "react-router";
import queryString from "query-string";
import {getHeroesByName} from "../helpers/index.js";

export const SearchPage = () => {

  const navigate = useNavigate();
  const location = useLocation();
  const { q = '' } = queryString.parse(location.search);

  const heroes = getHeroesByName(q);

  const showSearch = (q.length === 0);
  const showError = (q.length > 0) && heroes.length === 0;

  const { searchText, onInputChange  } = useForm({
    searchText: '',
  });

  const onSearchSubmit = (event) => {
    event.preventDefault();
    if(searchText.trim().length <= 1) return;
    navigate(`?q=${searchText.toLowerCase().trim()}`);
  }
  return (
    <>
      <div className="row">
        <div className="col-5">
          <h4>Searching</h4>
          <hr />
          <form
           role='form'
            onSubmit={onSearchSubmit}
          >
            <input
                type="text"
                className="form-control"
                name="searchText"
                placeholder="Search"
                autoComplete="off"
                value={searchText}
                onChange={onInputChange}
            />
            <button className="btn btn-outline-primary mt-1">
              Search
            </button>
          </form>
        </div>

        <div className="col-7">
          <h4>Results</h4>
          <hr/>
          <div
            aria-label='alert-primary'
            className="alert alert-primary animate__animated animate__fadeIn"
            style={{ display: showSearch ? '' : 'none' }}
          >
            Search Hero
          </div>

          <div
            aria-label='alert-danger'
            className="alert alert-danger animate__animated animate__fadeIn"
            style={{ display: showError ? ' ' : 'none' }}
          >
            There is no results with <b>{q}</b>
          </div>

          {
            heroes.map(hero => (
                <HeroCard
                    key={hero.id}
                    {...hero}
                />
            ))
          }
        </div>
      </div>
    </>
  )
}
