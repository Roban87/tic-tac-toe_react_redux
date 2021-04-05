import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

interface Props {
  type: string;
  buttonText: string;
  onClickHandler: () => void;
}

const Button: React.FC<Props> = ({ type, buttonText, onClickHandler }) => {
  return (
    <button
      aria-label={type}
      type="button"
      onClick={onClickHandler}
      className="control-btn"
    >
      {buttonText}
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  onClickHandler: PropTypes.func.isRequired,
};

export default Button;
