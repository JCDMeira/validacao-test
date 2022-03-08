import React from 'react';
import P from 'prop-types';

function Errors({ msg = '', children = '' }) {
  // console.log(msg !== '' ? msg : children);

  const text = msg !== '' ? msg : children;
  const [menssagem, aviso] = text.split('. ');

  return (
    <div>
      <span style={{ color: 'red' }}>{menssagem}</span>
      {aviso ? <p style={{ color: 'red' }}>{aviso}</p> : ''}
    </div>
  );
}

export default Errors;

Errors.propTypes = {
  msg: P.string,
  children: P.string,
};
