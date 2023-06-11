// TODO: add unit test
type bulletCardProps = {
  number: string;
  heading: string;
  body: string;
  className: string;
  // color: string;
};

// xs:bg-red-500 md:bg-black

export const BulletPointCard = ({
  number,
  heading,
  body,
  className,
}: bulletCardProps): JSX.Element => {
  return (
    <div className={`${className} ml-[19px] mr-2`}>
      <div className='flex flex-row'>
        <div className='mx-2 flex flex-col'>
          <div>{number}</div>
          <div className='h-1 rounded-md bg-background-main-purple'></div>
        </div>
        <div className='font-roboto  text-[28px] text-pale-grey'>
          {heading.toUpperCase()}
        </div>
      </div>
      <div>
        <div className='mt-[20px] font-roboto  text-[15px]  '>{body}</div>
      </div>
    </div>
  );
};
