import { Navigate, NavLink, Route, Routes } from "react-router-dom";
import { LazyLoadPage, LazyLoadPage2, LazyLoadPage3 } from "../pages";

const LazyLayout = () => {
  return (
    <div>
      <h1>LazyLayout Page</h1>
      {/* rutas hijas */}
      {/* Si la persona entra a este modulo se cargan todas estas rutas
      de lo contrario no
      */}

      <ul>
        <li>
          <NavLink to="lazy1">Lazy 1</NavLink>
        </li>
        <li>
          <NavLink to="laz2">Lazy 2</NavLink>
        </li>
        <li>
          <NavLink to="lazy3">Lazy 3</NavLink>
        </li>
      </ul>
      {/* estas rutas se cargan al cargar el componente padre de manera peresoza */}
      <Routes>
        <Route path="lazy1" element={<LazyLoadPage />} />
        <Route path="lazy2" element={<LazyLoadPage2 />} />
        <Route path="lazy3" element={<LazyLoadPage3 />} />
        {/* Si no existe la ruta */}
        {/*         <Route path="*" element={<div>Not found</div>} /> */}
        {/* Si no existe la ruta *  navega a lazy1 */}
        <Route path="*" element={<Navigate replace to="lazy1" />} />
      </Routes>
    </div>
  );
};

export default LazyLayout;
