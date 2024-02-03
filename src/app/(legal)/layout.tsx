import Footer from '@/components/footer';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const LegalLayout = ({ children }: Props) => {
  return (
    <div className='mobile:gap-4 flex h-full flex-col items-center gap-8 overflow-hidden *:px-[var(--window-padding-x)] first:*:pt-[var(--window-padding-y)] last:*:pb-[var(--window-padding-y)]'>
      <div className='flex w-full justify-center overflow-scroll'>
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default LegalLayout;
