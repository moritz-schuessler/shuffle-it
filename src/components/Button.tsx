import { ReactNode } from 'react';

interface Props {
  style?: 'solid';
  width?: 'full';
  children: ReactNode;
}

const Button = ({ style, width, children }: Props) => {
  const buttonStyle = `
    ${
      style === 'solid'
        ? 'bg-light text-dark hover:bg-stone-300'
        : 'hover:bg-stone-800'
    }`;

  const buttonWidth = `
    ${width === 'full' ? 'w-full' : ''} 
  `;

  return (
    <div
      className={`${buttonStyle} ${buttonWidth} 
        flex items-center justify-center rounded-md transition duration-75 children:flex children:px-[1rem] children:py-[.5rem]`}
    >
      {children}
    </div>
  );
};

export default Button;
