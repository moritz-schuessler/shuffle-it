'use client';

import { signIn, useSession } from 'next-auth/react';

import Shuffle from '@/components/Shuffle';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/Accordion';
import { useEffect } from 'react';

const Home = () => {
  const { data: session, status } = useSession();

  useEffect(() => {
    if (session?.error === 'RefreshAccessTokenError') {
      console.log('RefreshAccessTokenError');
      signIn('spotify');
    }
  }, [session]);

  return (
    <main className='flex h-full w-full flex-col items-stretch justify-between'>
      <div className='flex flex-col'>
        {status === 'authenticated' && <Shuffle />}
        {status === 'unauthenticated' && <div />}
      </div>
      <Accordion type='single' collapsible>
        <AccordionItem value='item-1'>
          <AccordionTrigger>
            What issue does this project aim to solve?
          </AccordionTrigger>
          <AccordionContent>
            Spotify does not offer a option to Shuffle your Saved Albums. This
            web app tries to solve this problem.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value='item-2'>
          <AccordionTrigger>
            How does this app solve the problem?
          </AccordionTrigger>
          <AccordionContent>
            By integrating with the Spotify API, this project solves the problem
            by retrieving saved albums and controlling the playback.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value='item-3'>
          <AccordionTrigger>
            What are the prerequisites for using the app?
          </AccordionTrigger>
          <AccordionContent>
            To use the app, you need a Spotify Account and an active instance of
            the Spotify app.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </main>
  );
};

export default Home;
