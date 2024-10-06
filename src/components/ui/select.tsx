import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react';

import * as SelectPrimitive from '@radix-ui/react-select';

import {
  CheckIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from '@radix-ui/react-icons';

interface SelectProps
  extends ComponentPropsWithoutRef<typeof SelectPrimitive.Root> {
  placeholder?: string;
}

const Select = forwardRef<
  ElementRef<typeof SelectPrimitive.Select>,
  SelectProps
>(({ children, ...props }, forwardedRef) => (
  <SelectPrimitive.Root {...props}>
    <SelectPrimitive.Trigger
      ref={forwardedRef}
      className='flex min-w-max items-center justify-between gap-2 rounded-md bg-gray-200 px-3 py-2 text-white outline-none hover:bg-gray-300 [&>span]:line-clamp-1'
    >
      <SelectPrimitive.Value className='w-80' placeholder={props.placeholder} />
      <SelectPrimitive.Icon>
        <ChevronDownIcon />
      </SelectPrimitive.Icon>
    </SelectPrimitive.Trigger>
    <SelectPrimitive.Portal>
      <SelectPrimitive.Content
        className='relative z-50 min-w-[8rem] overflow-hidden rounded-md border bg-black shadow-md'
        position='popper'
        side='top'
        sideOffset={4}
        align='center'
      >
        <SelectPrimitive.ScrollUpButton>
          <ChevronUpIcon />
        </SelectPrimitive.ScrollUpButton>
        <SelectPrimitive.Viewport className='p-1'>
          {children}
        </SelectPrimitive.Viewport>
        <SelectPrimitive.ScrollDownButton>
          <ChevronDownIcon />
        </SelectPrimitive.ScrollDownButton>
      </SelectPrimitive.Content>
    </SelectPrimitive.Portal>
  </SelectPrimitive.Root>
));
Select.displayName = 'Select';

const SelectItem = forwardRef<
  ElementRef<typeof SelectPrimitive.Item>,
  ComponentPropsWithoutRef<typeof SelectPrimitive.Item>
>(({ children, className, ...props }, forwardedRef) => (
  <SelectPrimitive.Item
    className='relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none'
    {...props}
    ref={forwardedRef}
  >
    <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
    <SelectPrimitive.ItemIndicator className='absolute left-0 inline-flex w-[25px] items-center justify-center'>
      <CheckIcon />
    </SelectPrimitive.ItemIndicator>
  </SelectPrimitive.Item>
));
SelectItem.displayName = 'SelectItem';

export { Select, SelectItem };
