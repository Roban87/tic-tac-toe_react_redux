import React, { MouseEvent } from 'react';
import PropTypes from 'prop-types';
import './BoardTile.css';

interface Props {
  size: number;
  value: string;
  id: string;
  onClickHandler: (e: MouseEvent<HTMLButtonElement>) => void;
}

const PlayerInfo: React.FC<Props> = ({ size, value, id, onClickHandler }) => {
  return (
    <button
      className={`game-btn tile-sizes-${size} ${
        value === 'X' ? 'x-color' : 'o-color'
      }`}
      type="button"
      onClick={e => onClickHandler(e)}
      id={id}
      disabled={!!value}
    >
      {value}
    </button>
  );
};

PlayerInfo.propTypes = {
  size: PropTypes.number.isRequired,
  value: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onClickHandler: PropTypes.func.isRequired,
};

export default PlayerInfo;
