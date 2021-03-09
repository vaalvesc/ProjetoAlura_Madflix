import React, { useState }from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';

function CadastroCategoria() {

let [NomeDaCategoria, setNomeDaCategoria] = useState('Filmes')

console.log([NomeDaCategoria], NomeDaCategoria)

    return (
    <PageDefault>
      <h1>Cadastro de Categoria: {NomeDaCategoria}</h1>

      <form>

        <label>
        Nome da Categoria:
        <input type="text"
        />
        </label>

        <button>
          Cadastrar
        </button>
      </form>

      <Link to="/">
      Ir para Home
        </Link>
      
    </PageDefault>
    )
    }
  

export default CadastroCategoria;