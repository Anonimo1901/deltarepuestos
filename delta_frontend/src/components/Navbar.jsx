import React from "react";
import { Link } from "react-router-dom";
import LinkA from "./LinkAnimado"; // Asegúrate de que el nombre del archivo sea correcto

function Navbar() {
  return (
    <nav className="text-sm">
      <ul className="flex gap-3">
        <li>
          <LinkA
            colorlink=""
            colorlinea="bg-white"
            ruta="/GestionRepuesto"
          />{" "}
        </li>
        <li>
          <LinkA
            colorlink=""
            colorlinea="bg-red-500"
            ruta="/GestionStock"
          />{" "}
        </li>
        <li>
          <LinkA
            colorlink="bg-blue-500"
            colorlinea="bg-red-500"
            ruta="/GestionProveedores"
          />{" "}
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
