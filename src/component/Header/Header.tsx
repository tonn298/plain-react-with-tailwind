type HeaderProp = { headerMessage: string; className?: string };
export const Header = ({ headerMessage, className }: HeaderProp) => {
  const message = headerMessage.toUpperCase();
  return (
    <div
      className={`${className} pl-[19px] font-roboto text-[50px] font-normal leading-[58.59px] text-header`}
    >
      {message}
    </div>
  );
};
