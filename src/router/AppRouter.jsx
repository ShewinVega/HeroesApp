import React from 'react';
import {Routes, Route} from 'react-router';
import { DcPage, HeroPage, MarvelPage, SearchPage } from '../heroes';
import { LoginPage } from '../auth';
import { PrivateRoute } from './PrivateRoute.jsx';
import { PublicRoute } from './PublicRoute.jsx';

export const AppRouter = () => {
    return (
        <>
          <Routes>

            <Route path="/login" element= {
              <PublicRoute>
                <LoginPage />
              </PublicRoute>
            } />

            <Route
              path="/*"
              element={
                <PrivateRoute />
              }
            >
              <Route path="marvel" element={<MarvelPage />} />
              <Route path="dc" element={<DcPage />} />
              <Route path="hero/:id" element={<HeroPage />} />
              <Route path="search" element={<SearchPage />} />
            </Route>

          <Route
            path="*"
            element={
              <LoginPage />
            }
          />
          </Routes>
        </>
    )
}
