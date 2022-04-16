import React from 'react';
import P from 'prop-types';
import * as S from './style';

function Errors({ msg = '', children = '' }) {
  const text = msg !== '' ? msg : children;
  const [menssagem, aviso] = text.split('. ');

  return (
    <>
      <S.ErrorSpan style={{ color: 'red' }}>{menssagem}</S.ErrorSpan>
      {aviso ? <br /> : ''}
      {aviso ? <S.ErrorSpan style={{ color: 'red' }}>{aviso}</S.ErrorSpan> : ''}
    </>
  );
}

export default Errors;

Errors.propTypes = {
  msg: P.string,
  children: P.string,
};
