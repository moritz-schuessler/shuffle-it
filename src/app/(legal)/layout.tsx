import Footer from '@/components/footer';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const LegalLayout = ({ children }: Props) => {
  return (
    <div className='flex h-full flex-col items-center gap-4 overflow-hidden *:px-4 first:*:pt-4 last:*:pb-4 xl:gap-8 xl:*:px-8 xl:first:*:pt-8 xl:last:*:pb-8'>
      <div className='flex w-full justify-center overflow-scroll'>
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default LegalLayout;
