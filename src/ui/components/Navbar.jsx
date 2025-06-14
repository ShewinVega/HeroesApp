import React from 'react';
import { NavLink, useNavigate } from 'react-router';
import { MdLogout } from "react-icons/md";
import { useAuthContext } from '../../context/Auth';

export const Navbar = () => {

  const { user, logout } = useAuthContext();

    const navigate = useNavigate();

    const onLogout = () => {
      logout();
      navigate('/login', {
          replace: true,
      });
    }

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2 mb-2">
            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink
                        to="/marvel"
                        className={({ isActive }) => `nav-item nav-link ${ isActive ? 'active' : '' }`}
                    >
                        Marvel
                    </NavLink>

                    <NavLink
                        to="/dc"
                        className={({ isActive }) => `nav-item nav-link ${ isActive ? 'active' : '' }`}
                    >
                        DC
                    </NavLink>

                    <NavLink
                        to="/search"
                        className={({ isActive }) => `nav-item nav-link ${ isActive ? 'active' : '' }`}
                    >
                        Search
                    </NavLink>
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex flex-column justify-content-start flex-md-row justify-content-md-end">
                <ul className="navbar-nav ml-auto">
                    <span className="nav-item nav-link text-primary">
                      { user?.name ?? '' }
                    </span>
                    <button
                        className="nav-item nav-link btn"
                        onClick={onLogout}
                    >
                      <MdLogout size={20} color='red' />
                    </button>
                </ul>
            </div>
        </nav>
    )
}
