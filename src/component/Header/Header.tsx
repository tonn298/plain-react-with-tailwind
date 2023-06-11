import React from 'react';

type HeaderProp = { headerMessage: string };
export const Header = ({ headerMessage }: HeaderProp) => {
  const message = headerMessage.toUpperCase();
  return (
    <div className='pl-[19px] font-roboto text-[50px] font-normal leading-[58.59px] text-header'>
      {message}
    </div>
  );
};
