import Footer from '@/components/footer';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const LegalLayout = ({ children }: Props) => {
  return (
    <div className='flex flex-col items-center gap-8 overflow-hidden'>
      <main className='flex w-full justify-center overflow-scroll hyphens-auto text-pretty break-words'>
        {children}
      </main>
    </div>
  );
};

export default LegalLayout;
