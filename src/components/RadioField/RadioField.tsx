import React from 'react';
import PropTypes from 'prop-types';
import RadioInput from '../RadioInput/RadioInput';
import './RadioField.css';

interface Props {
  sizes: number[];
  choosenSize: number;
  onChangeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const RadioField: React.FC<Props> = ({
  sizes,
  choosenSize,
  onChangeHandler,
}) => {
  return (
    <fieldset>
      <legend>Choose Game Size</legend>
      {sizes.map(size => {
        return (
          <RadioInput
            key={size}
            value={size}
            label={size.toString()}
            checked={size === choosenSize}
            onChange={onChangeHandler}
          />
        );
      })}
    </fieldset>
  );
};

RadioField.propTypes = {
  sizes: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
  choosenSize: PropTypes.number.isRequired,
  onChangeHandler: PropTypes.func.isRequired,
};

export default RadioField;
