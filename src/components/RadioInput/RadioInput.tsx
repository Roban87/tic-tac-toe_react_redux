import React from 'react';
import PropTypes from 'prop-types';

interface Props {
  value: number;
  label: string;
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const RadioInput: React.FC<Props> = ({ value, label, checked, onChange }) => {
  return (
    <label htmlFor={label}>
      {`${value}X${value}`}
      <input
        type="radio"
        id={label}
        name={label}
        value={value}
        checked={checked}
        onChange={onChange}
      />
    </label>
  );
};

RadioInput.propTypes = {
  value: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default RadioInput;
