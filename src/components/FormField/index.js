import React from "react";

function FormField ({ label, type, name, NomeDaCategoria, onChange }) {
    return (
        <div>
        <label>
          {label}: 
      <input
            type={type}
            name={name}
            //mostrar o valor dentro do compo nome da categoria
            value={NomeDaCategoria}
            //funçao criada para alterar dados do campo nome da categoria
            onChange={onChange}
          />
        </label>
      </div>

    )

}


export default FormField;