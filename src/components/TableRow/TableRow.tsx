import React from 'react';
import PropTypes from 'prop-types';

interface Props {
  name: string;
  rank: number;
  score: number;
}

const TableHeader: React.FC<Props> = ({ name, rank, score }) => {
  return (
    <tr>
      <td>{rank}</td>
      <td>{name}</td>
      <td>{score}</td>
    </tr>
  );
};

TableHeader.propTypes = {
  name: PropTypes.string.isRequired,
  rank: PropTypes.number.isRequired,
  score: PropTypes.number.isRequired,
};

export default TableHeader;
