import React, { MouseEvent } from 'react';
import PropTypes from 'prop-types';

interface Props {
  value: string;
  id: string;
  onClickHandler: (e: MouseEvent<HTMLButtonElement>) => void;
}

const style: React.CSSProperties = {
  width: '30px',
  height: '30px',
  margin: '5px',
  backgroundColor: 'blue',
  color: 'white',
};

const PlayerInfo: React.FC<Props> = ({ value, id, onClickHandler }) => {
  return (
    <button
      style={style}
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
  value: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onClickHandler: PropTypes.func.isRequired,
};

export default PlayerInfo;
