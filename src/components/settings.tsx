'use client';

import { useSearchParams } from 'next/navigation';
import Button from '@/components/ui/button';
import Link from 'next/link';

const Settings = () => {
  const showLibrary = useSearchParams().get('library');

  return (
    <>
      <Button asChild>
        <Link href={`?${showLibrary === null ? 'library' : ''}`}>Library</Link>
      </Button>
    </>
  );
};

export default Settings;
