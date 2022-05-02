import { BrowserRouter } from 'react-router-dom';
import { Routes, Route, NavLink, Navigate } from 'react-router-dom';
import { LazyLoadPage, LazyLoadPage2, LazyLoadPage3 } from '../01-lazyLoad/pages';
import { routes } from "./routes";

import logo from '../logo.svg'

export const Navigation = () => {
    return (
        <BrowserRouter>
            <div className="main-layout">
                <nav>
                    <img src={logo} alt="React Logo" />
                    <ul>
                        {
                            routes.map(({ name, to }) => (
                                <li key={to}>
                                    <NavLink to={to} className={({ isActive }) => isActive ? 'nav-active' : ''}>{name}</NavLink>
                                </li>
                            ))
                        }

                    </ul>
                </nav>


                <Routes>
                    {
                        routes.map(({ path, Component }) => (
                            <Route key={path} path={path} element={<Component />} />
                        ))
                    }
                    <Route path="lazy1" element={<LazyLoadPage />} />


                    <Route path="/*" element={<Navigate to={routes[0].to} replace />} />
                </Routes>

            </div>
        </BrowserRouter>
    )
}
