import React from 'react';
import P from 'prop-types';

function Errors({ children }) {
  return (
    <div>
      <span style={{ color: 'red' }}>{children}</span>
    </div>
  );
}

export default Errors;

Errors.propTypes = {
  children: P.string.isRequired,
};
