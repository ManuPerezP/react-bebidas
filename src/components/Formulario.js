import React, {useContext, useState} from  'react';

import { CategotiasContext } from '../context/CategotiasContext';
import { RecetasContext } from '../context/RecetasContext';

const Formulario = ()=>{

    const[busqueda, guardarBusqueda] = useState({
        nombre:'',
        categoria:''
    });

    const {categorias} = useContext(CategotiasContext);
    const {buscarRecetas, guardarConsultar} = useContext(RecetasContext);

    const obtenerDatosReceta = e => {
        guardarBusqueda({
            ...busqueda, [e.target.name]:e.target.value
        });
    }
    return(
        <form
            className="col-12"
            onSubmit={e =>{
                e.preventDefault();
                buscarRecetas(busqueda);
                guardarConsultar(true);
            }}
        >
            <fieldset className="text-center">
                <legend>Busca bebidas por Categoría o Ingredientes</legend>

                <div className="row mt-4">
                <div className="col-md-4">
                    <input
                        name="nombre"
                        className="form-control"
                        type="text"
                        placeholder ="Buscar por Ingrediente"
                        onChange={obtenerDatosReceta}
                    />
                </div>
                <div className="col-md-4">
                    <select
                    className="form-control"
                    name="categoria"
                    onChange={obtenerDatosReceta}
                    >
                        <option value="">--Seleccione--</option>
                        {categorias.map(categoria=>(<option key={categoria.strCategory} value={categoria.strCategory}>{categoria.strCategory}</option>))}
                    </select>
                </div>
                <div className="col-md-4">
                <input
           
                        className="btn-primary btn btn-block"
                        type="submit"
                        value="Buscar receta"
                    />
                </div>
            </div>
            </fieldset>


        </form>
    )
}

export default Formulario;
