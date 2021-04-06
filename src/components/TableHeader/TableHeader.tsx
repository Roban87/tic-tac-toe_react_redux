import React from 'react';
import PropTypes from 'prop-types';
import './TableHeader.css';

interface Props {
  scoreType: string;
}

const TableHeader: React.FC<Props> = ({ scoreType }) => {
  return (
    <thead>
      <tr>
        <th>Rank</th>
        <th>Name</th>
        <th>{`No#${scoreType}`}</th>
      </tr>
    </thead>
  );
};

TableHeader.propTypes = {
  scoreType: PropTypes.string.isRequired,
};

export default TableHeader;
