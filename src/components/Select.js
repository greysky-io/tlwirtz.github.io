import React from 'react';
import PropTypes from 'prop-types';

const Select = props => {
  const { itemId, name, value, onChange, onBlur, options, displayName } = props;
  return (
    <div className="form-item">
      <p className="text-body text-dark text-hairline">{displayName}</p>
      <select
        id={itemId}
        name={name}
        value={value}
        onChange={e => onChange(e)}
        onBlur={e => onBlur(e)}
        type="text"
      >
        {options.map(opt => <option id={opt.id}>{opt.value}</option>)}
      </select>
    </div>
  );
};

Select.propTypes = {};

export default Select;
