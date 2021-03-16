import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import FormField from '../../../components/FormField';
import PageDefault from '../../../components/PageDefault';

function CadastroCategoria() {
  const [categorias, setCategorias] = useState([]);

  const dadosIniciais = {
    nome: '',
    descricao: '',
    cor: '',

  };

  const [NomeDaCategoria, setNomeDaCategoria] = useState(dadosIniciais);
  // função set - usada para alterar o NomeDaCategoria
  // console.log([NomeDaCategoria], NomeDaCategoria)

  function setValores(chave, valor) {
    setNomeDaCategoria({
      ...NomeDaCategoria,
      [chave]: valor,
    });
  }

  function handlChange(informeDados) {
    setValores(informeDados.target.getAttribute('name'),
      informeDados.target.value);
  }

  return (
    <PageDefault>
      <h1>
        Cadastro de Categoria:
        {NomeDaCategoria.nome}
      </h1>

      <form onSubmit={function handleSubmit(informeDados) {
        informeDados.preventDefault();
        setCategorias([
          ...categorias,
          NomeDaCategoria,
        ]);

        setNomeDaCategoria(dadosIniciais);
      }}
      >

        <FormField
          label="Nome da Categoria"
          type="text"
          name="nome"
          value={NomeDaCategoria.nome}
          onChange={handlChange}
        />
        {/* <div>
          <label>
            Nome da Categoria:
        <input
              type="text"
              //mostrar o valor dentro do compo nome da categoria
              value={NomeDaCategoria.nome}
              //funçao criada para alterar dados do campo nome da categoria
              name="nome"
              onChange={handlChange}
            />
          </label>
        </div> */}

        <FormField
          label="Descrição"
          type="text"
          name="Descrição"
          value={NomeDaCategoria.nome}
          onChange={handlChange}
        />

        {/* <div>
          <label>
            Descrição:
        <input
              type="text"
              //mostrar o valor dentro do compo nome da categoria
              value={NomeDaCategoria.descricao}
              //funçao criada para alterar dados do campo nome da categoria
              name="descricao"
              onChange={handlChange}
            />
          </label>
        </div> */}

        <FormField
          label="cor"
          type="color"
          name="cor"
          value={NomeDaCategoria.nome}
          onChange={handlChange}
        />

        {/* <div>
          <label>
            Cor:
        <input
              type="color"
              //mostrar o valor dentro do compo nome da categoria
              value={NomeDaCategoria.cor}
              //funçao criada para alterar dados do campo nome da categoria
              name="cor"
              onChange={handlChange}
            />
          </label>
        </div> */}

        <button>
          Cadastrar
        </button>
      </form>

      <ul>
        {categorias.map((categoria, indice) => (
          <li key={`${categoria}${indice}`}>
            {categoria.nome}
          </li>
        ))}

      </ul>

      <Link to="/">
        Ir para Home
      </Link>

    </PageDefault>
  );
}

export default CadastroCategoria;
