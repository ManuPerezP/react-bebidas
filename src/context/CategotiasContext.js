import React, { createContext, useState ,useEffect} from 'react';
import axios from 'axios';

//crear el context
export const CategotiasContext = createContext();

//provider es donde se encuentran las funciones y state
const CategoriasProvider = (props) => {
  //crear el state del Context
  const [categorias, guardarCategorias] = useState([]);


  useEffect(()=>{
    const obtenerCategorias = async ()=>{
            const url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';

            const categotias = await axios.get(url);

            guardarCategorias(categotias.data.drinks);
    }

    obtenerCategorias();

  },[]);

  return (
    <CategotiasContext.Provider
        value={{
            categorias
        }}
    >{props.children}</CategotiasContext.Provider>
  );
};

export default CategoriasProvider; 
