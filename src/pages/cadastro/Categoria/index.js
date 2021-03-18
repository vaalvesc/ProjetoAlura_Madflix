import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import FormField from '../../../components/FormField';
import PageDefault from '../../../components/PageDefault';
import Button from '../../../components/Button';

function CadastroCategoria() {
  const [categorias, setCategorias] = useState([]);

  const dadosIniciais = {
    nome: '',
    descricao: '',
    cor: '',

  };

  const [NomeDaCategoria, setNomeDaCategoria] = useState(dadosIniciais);
  // função set - usada para alterar o NomeDaCategoria
  
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

        <FormField
          label="Descrição"
          type="textarea"
          name="text"
          value={NomeDaCategoria.text}
          onChange={handlChange}
        />
        <FormField
          label="cor"
          type="color"
          name="cor"
          value={NomeDaCategoria.cor}
          onChange={handlChange}
        />
        <Button>
          Cadastrar
        </Button>
      </form>

      <ul>
        {categorias.map((categoria) => (
          <li key={`${categoria.nome}`}>
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
