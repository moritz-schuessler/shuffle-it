import Footer from '@/components/footer';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const LegalLayout = ({ children }: Props) => {
  return (
    <div className='mobile:gap-4 flex flex-col items-center gap-8 overflow-hidden *:px-[var(--window-padding-x)] first:*:pt-[var(--window-padding-y)] last:*:pb-[var(--window-padding-y)]'>
      <main className='flex w-full justify-center overflow-scroll hyphens-auto text-pretty break-words'>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default LegalLayout;
