import React from 'react';
import Navbar from "./Navbar";
import Titulo from "./Titulo";

function Encabezado(){
    return(
        <header className='text-sm font-normal p-8 grid items-center bg-slate-500 text-white'>
            
            <Titulo Titulo="Delta Gestión"/>
            <Navbar />
        </header>
    )
}
export default Encabezado;