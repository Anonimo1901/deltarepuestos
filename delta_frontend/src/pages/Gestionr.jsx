// pages/Gestionr.jsx
import React from "react";
import Titulo from "../components/Titulo";
import Table from "../components/Table";
import Main from "../components/Main";

function Gestionr() {
  return (
    <Main>
      <Titulo Titulo="Gestion Repuestos" />
      <Table columnas={["ID", "Descripcion", "Descripcion Adicional", "Categoria", "Subcategoria", "Peso", "Longitud"]} />
    </Main>
  );
}

export default Gestionr;
