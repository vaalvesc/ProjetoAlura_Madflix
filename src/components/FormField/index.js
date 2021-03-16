import React from 'react';
import PropTypes from 'prop-types';

function FormField({ label, type, name, NomeDaCategoria, onChange }) {
  const fieldId = `id_${name}`;
  return (
    <div>
      <label>
        {label}:
      <input
          id={fieldId}
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

FormField.defaultProps = {
  type: 'text',
  NomeDaCategoria: '',
  onChange: () => {},
};

FormField.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  NomeDaCategoria: PropTypes.string,
  onChange: PropTypes.func,
  
}

export default FormField;