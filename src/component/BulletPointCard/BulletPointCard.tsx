import React from 'react';

type bulletCardProps = {
  number: string;
  heading: string;
  body: string;
  color: string;
};

export const BulletPointCard = ({
  number,
  heading,
  body,
}: bulletCardProps): JSX.Element => {
  return (
    <div>
      <div>
        <div className=''>{number}</div>
        <div className=''>{heading}</div>
      </div>
      <div>
        <div className=''>{body}</div>
      </div>
    </div>
  );
};
