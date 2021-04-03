import React from 'react';
import PropTypes from 'prop-types';

interface Props {
  sign: string;
  playerName: string;
  steps: number;
}

const PlayerInfo: React.FC<Props> = ({ sign, playerName, steps }) => {
  return (
    <>
      <p>{sign}</p>
      <h2>{playerName}</h2>
      <p>{steps}</p>
    </>
  );
};

PlayerInfo.propTypes = {
  sign: PropTypes.string.isRequired,
  playerName: PropTypes.string.isRequired,
  steps: PropTypes.number.isRequired,
};

export default PlayerInfo;
