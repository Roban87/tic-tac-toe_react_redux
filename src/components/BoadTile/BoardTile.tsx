import React from 'react';
import PropTypes from 'prop-types';

interface Props {
  sign: string;
  id: string;
}

const style: React.CSSProperties = {
  width: '30px',
  height: '30px',
  margin: '5px',
  backgroundColor: 'blue',
};

const PlayerInfo: React.FC<Props> = ({ sign, id }) => {
  return (
    <div style={style} id={id}>
      {sign}
    </div>
  );
};

PlayerInfo.propTypes = {
  sign: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default PlayerInfo;
