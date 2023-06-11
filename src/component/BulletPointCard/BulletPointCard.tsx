// TODO: add unit test
type bulletCardProps = {
  number: string;
  heading: string;
  body: string;
  className: string;
  darkColorBackground?: boolean;
};

export const BulletPointCard = ({
  number,
  heading,
  body,
  className,
  darkColorBackground = false,
}: bulletCardProps): JSX.Element => {
  return (
    <div className={`${className} ml-[19px] mr-2 md:ml-0 md:mr-0`}>
      <div className='flex flex-row'>
        {/* ASK: design not consistnace ?  on header for dark background*/}
        <div
          className={`mx-2 flex flex-col ${
            darkColorBackground ? ' text-pale-grey' : ''
          } `}
        >
          <div>{number}</div>
          <div
            className={`h-1 rounded-md ${
              darkColorBackground ? 'bg-pale-grey' : 'bg-background-main-purple'
            }`}
          ></div>
        </div>
        <div className='font-roboto  text-[28px] text-pale-grey'>
          {heading.toUpperCase()}
        </div>
      </div>
      <div>
        <div
          className={`mt-[20px] font-roboto  text-[15px] ${
            darkColorBackground ? ' text-pale-grey' : ''
          } `}
        >
          {body}
        </div>
      </div>
    </div>
  );
};
