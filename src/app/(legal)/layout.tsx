import Footer from '@/components/footer';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const LegalLayout = ({ children }: Props) => {
  return (
    <div className='mobile:gap-4 mobile:*:px-4 mobile:first:*:pt-4 mobile:last:*:pb-4 flex h-full flex-col items-center gap-8 overflow-hidden *:px-8 first:*:pt-8 last:*:pb-8'>
      <div className='flex w-full justify-center overflow-scroll'>
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default LegalLayout;
