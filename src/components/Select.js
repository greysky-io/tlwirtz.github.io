import React from 'react';
import PropTypes from 'prop-types';
import Text from './Text';

const Select = props => {
  const { itemId, name, value, onChange, onBlur, options, displayName } = props;
  return (
    <div className="form-item">
      <Text body>{displayName}</Text>
      <select
        id={itemId}
        name={name}
        value={value}
        onChange={e => onChange(e)}
        onBlur={e => onBlur(e)}
        type="text"
      >
        {options.map(opt => <option key={opt.id}>{opt.value}</option>)}
      </select>
    </div>
  );
};

Select.propTypes = {};

export default Select;
