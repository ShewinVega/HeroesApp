import {Routes, Route} from 'react-router';

import {
    MarvelPage, 
    SearchPage, 
    HeroPage,
    DcPage,
} from '../heroes';
import HeroesApp from "../HeroesApp.jsx";
import { LoginPage } from '../auth';

export const AppRouter = () => {
    return (
        <>
            <Routes>
                <Route path="login" element={<LoginPage />} />
                <Route path="/*" element={<HeroesApp />}>
                    <Route path="marvel" element={<MarvelPage />} />
                    <Route path="dc" element={<DcPage />} />
                    <Route path="hero/:id" element={<HeroPage />} />
                    <Route path="search" element={<SearchPage />} />
                </Route>
            </Routes>
        </>
    )
}