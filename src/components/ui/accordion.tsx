'use client';

import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react';
import * as AccordionPrimitive from '@radix-ui/react-accordion';
import classNames from 'classnames';
import { ChevronDownIcon } from '@radix-ui/react-icons';

const Accordion = forwardRef<
  ElementRef<typeof AccordionPrimitive.Root>,
  ComponentPropsWithoutRef<typeof AccordionPrimitive.Root>
>(({ children, className, ...props }, forwardedRef) => (
  <AccordionPrimitive.Root
    className={classNames(className, 'flex flex-col')}
    ref={forwardedRef}
    {...props}
  >
    {children}
  </AccordionPrimitive.Root>
));
Accordion.displayName = 'Accordion';

const AccordionItem = forwardRef<
  ElementRef<typeof AccordionPrimitive.Item>,
  ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ children, className, ...props }, forwardedRef) => (
  <AccordionPrimitive.Item
    className={classNames(
      className,
      'overflow-hidden border-b border-neutral-600',
    )}
    ref={forwardedRef}
    {...props}
  >
    {children}
  </AccordionPrimitive.Item>
));
AccordionItem.displayName = 'AccordionItem';

const AccordionTrigger = forwardRef<
  ElementRef<typeof AccordionPrimitive.Trigger>,
  ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ children, className, ...props }, forwardedRef) => (
  <AccordionPrimitive.Header className='flex'>
    <AccordionPrimitive.Trigger
      className={classNames(
        className,
        'group flex w-full cursor-pointer items-center justify-between py-4 font-medium transition-all hover:underline',
      )}
      {...props}
      ref={forwardedRef}
    >
      {children}
      <ChevronDownIcon
        className='size-4 transition-transform duration-300 ease-[cubic-bezier(0.87,_0,_0.13,_1)] group-data-[state=open]:rotate-180'
        aria-hidden
      />
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
));
AccordionTrigger.displayName = 'AccordionTrigger';

const AccordionContent = forwardRef<
  ElementRef<typeof AccordionPrimitive.Content>,
  ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ children, className, ...props }, forwardedRef) => (
  <AccordionPrimitive.Content
    className={classNames(
      className,
      'overflow-hidden data-[state=closed]:animate-slideUp data-[state=open]:animate-slideDown',
    )}
    {...props}
    ref={forwardedRef}
  >
    <div className='pb-4'>{children}</div>
  </AccordionPrimitive.Content>
));
AccordionContent.displayName = 'AccordionContent';

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
