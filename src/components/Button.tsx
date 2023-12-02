import { ReactNode } from 'react';

interface Props {
  style?: 'solid' | 'neutral-800';
  width?: 'full';
  children: ReactNode;
}

const Button = ({ style, width, children }: Props) => {
  const buttonStyle = () => {
    if (style === 'solid') {
      return 'bg-light text-dark hover:bg-neutral-300';
    }
    if (style === 'neutral-800') {
      return 'bg-neutral-800';
    }
    return 'hover:bg-neutral-800';
  };

  const buttonWidth = () => {
    if (width === 'full') {
      return 'children:w-full';
    }
    return 'children:px-[1rem] children:py-[.5rem]';
  };

  return (
    <div
      className={`${buttonStyle()} ${buttonWidth()} 
        flex items-center justify-center rounded-md transition duration-75 children:flex children:items-center children:justify-center children:py-[.5rem]`}
    >
      {children}
    </div>
  );
};

export default Button;
