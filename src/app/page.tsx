import Shuffle from '@/components/shuffle';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import auth from '@/lib/auth/auth';

const Home = async () => {
  const session = await auth();

  if (session?.error === 'RefreshAccessTokenError') {
    throw new Error('RefreshAccessTokenError');
  }

  return (
    <main className='flex h-full flex-col justify-between gap-8'>
      <div className='hidden xl:flex xl:flex-col'>{session && <Shuffle />}</div>
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
