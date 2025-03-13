import React from "react";
import { Link } from "react-router-dom"; // No olvides importar Link si lo vas a usar

function LinkA({ colorlink = "bg-white", colorlinea = colorlink, ruta='/'}) {
  return (
    <li className="relative group">
      <Link to={`${ruta}`} className={`relative ${colorlink}`}>
        Gestion Repuesto
        <span
          className={`absolute left-1/2 bottom-0 block w-0 h-0.25 transition-all group-hover:w-full group-hover:left-0 group-hover:right-0 transform origin-center ${colorlinea}`}
        ></span>
      </Link>
    </li>
  );
}

export default LinkA;
