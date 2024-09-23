'use client';

import { useSearchParams } from 'next/navigation';
import Toggle from '@/components/ui/toggle';
import { useRouter } from 'next/navigation';

const Settings = () => {
  const router = useRouter();

  const showLibrary = useSearchParams().get('library') !== null;

  return (
    <>
      <Toggle
        pressed={showLibrary}
        onPressedChange={() => router.push(`?${showLibrary ? '' : 'library'}`)}
      >
        {showLibrary && 'Hide Library'}
        {!showLibrary && 'Show Library'}
      </Toggle>
    </>
  );
};

export default Settings;
