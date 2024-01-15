import Footer from '@/components/footer';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const LegalLayout = ({ children }: Props) => {
  return (
    <main className='flex h-full flex-col items-center  gap-8 overflow-hidden p-8'>
      {children}
      <Footer />
    </main>
  );
};

export default LegalLayout;
