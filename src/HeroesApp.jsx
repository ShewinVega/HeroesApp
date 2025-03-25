import { Outlet } from 'react-router';

import {Navbar} from "./ui/index";

function HeroesApp() {
  return (
    <>
        <Navbar />
        <div className="container">
            <Outlet />
        </div>
    </>
  )
}

export default HeroesApp
