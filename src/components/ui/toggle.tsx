import * as TogglePrimitive from '@radix-ui/react-toggle';
import classNames from 'classnames';

interface Props extends TogglePrimitive.ToggleProps {
  className?: string;
}

const Toggle = ({ className, ...props }: Props) => {
  return (
    <TogglePrimitive.Root
      aria-label='Toggle Library'
      className={classNames(
        className,
        'flex items-center justify-center rounded-md bg-gray-200 px-4 hover:bg-gray-100 data-[state=on]:bg-white data-[state=on]:text-black data-[state=on]:hover:bg-gray-400',
      )}
      {...props}
    />
  );
};
Toggle.displayName = 'Toggle';

export default Toggle;
