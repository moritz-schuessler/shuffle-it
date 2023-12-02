import { ReactNode } from 'react';

interface Props {
  style?: 'solid' | 'neutral-900';
  width?: 'full';
  height?: 'full';
  children: ReactNode;
}

const Button = ({ style, width, height, children }: Props) => {
  const buttonStyle = () => {
    if (style === 'solid') {
      return 'bg-light text-dark hover:bg-neutral-300';
    }
    if (style === 'neutral-900') {
      return 'bg-neutral-900';
    }
    return 'hover:bg-neutral-800';
  };

  const buttonWidth = () => {
    if (width === 'full') {
      return 'children:w-full';
    }
    return 'children:px-[1rem] children:py-[.5rem]';
  };

  const buttonHeight = () => {
    if (height === 'full') {
      return 'children:h-full';
    }
    return 'children:py-[.5rem]';
  };

  return (
    <div
      className={`${buttonStyle()} ${buttonWidth()} ${buttonHeight()} 
        flex items-center justify-center rounded-md transition duration-75 children:flex children:items-center children:justify-center`}
    >
      {children}
    </div>
  );
};

export default Button;
