import React from 'react';
import PropTypes from 'prop-types';
import './PlayerInput.css';

interface Props {
  id: string;
  label: string;
  value: string;
  onNameChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const PlayerInput: React.FC<Props> = ({ id, label, value, onNameChange }) => {
  return (
    <label htmlFor={id} className="text-input">
      {label}
      <input
        type="text"
        id={id}
        placeholder="Name"
        name={id}
        value={value}
        onChange={onNameChange}
        required
      />
    </label>
  );
};

PlayerInput.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onNameChange: PropTypes.func.isRequired,
};

export default PlayerInput;
