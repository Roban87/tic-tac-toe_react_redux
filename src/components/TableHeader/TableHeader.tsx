import React from 'react';
import PropTypes from 'prop-types';

interface Props {
  scoreType: string;
}

const TableHeader: React.FC<Props> = ({ scoreType }) => {
  return (
    <thead>
      <th>Rank</th>
      <th>Name</th>
      <th>{`Number of ${scoreType}`}</th>
    </thead>
  );
};

TableHeader.propTypes = {
  scoreType: PropTypes.string.isRequired,
};

export default TableHeader;
