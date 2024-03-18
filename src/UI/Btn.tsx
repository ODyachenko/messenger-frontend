import React, { FC } from 'react';
import { BtnType } from '../../@types';

const Btn: FC<BtnType> = ({ value, className, type, handler, variant }) => {
  return (
    <button
      onClick={handler}
      className={`block w-full bg-primary-green text-base text-white rounded-3xl p-3 hover:bg-hover-btn transition-all ${className}`}
      type={type}
    >
      {value}
    </button>
  );
};

export default Btn;
