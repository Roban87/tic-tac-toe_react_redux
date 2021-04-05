import React from 'react';
import PropTypes from 'prop-types';
import './PlayerInfo.css';

interface Props {
  sign: string;
  playerName: string;
  active: string;
  steps: number;
}

const PlayerInfo: React.FC<Props> = ({ sign, playerName, steps, active }) => {
  return (
    <section className={`player-info ${active}`}>
      <p>Player{sign}</p>
      <h2>{playerName}</h2>
      <p>Steps: {steps}</p>
    </section>
  );
};

PlayerInfo.propTypes = {
  sign: PropTypes.string.isRequired,
  playerName: PropTypes.string.isRequired,
  active: PropTypes.string.isRequired,
  steps: PropTypes.number.isRequired,
};

export default PlayerInfo;
