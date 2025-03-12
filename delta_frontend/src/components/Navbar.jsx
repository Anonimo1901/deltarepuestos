// Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';  // Importamos Link de react-router-dom

function Navbar() {
  return (
    <nav>
      <ul className='flex gap-3 justify-center bg-red-300'>
        <li><Link to="/GestionRepuesto">Gestion Repuesto</Link></li>
        <li><Link to="/GestionStock">Gestion Stock</Link></li>
        <li><Link to="/GestionProveedores">Gestion Proveedores</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
