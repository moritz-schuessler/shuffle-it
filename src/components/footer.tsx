import Link from 'next/link';

import Button from '@/components/ui/button';
import GithubIcon from '@/assets/icons/github-icon';
import SpotifyIcon from '@/assets/icons/spotify-icon';

const Footer = () => {
  return (
    <footer className='flex items-center justify-between'>
      <div className='flex gap-2'>
        <Button variant='ghost'>
          <Link
            href={'https://moritzschuessler.dev/'}
            target='_blank'
            className='flex gap-2'
          >
            <div>moritzschuessler © {new Date().getFullYear()}</div>
          </Link>{' '}
        </Button>
        <Button variant='ghost' asChild>
          <Link href={'https://open.spotify.com/'} target='_blank'>
            <SpotifyIcon color='white' />
          </Link>
        </Button>
        <Button variant='ghost' asChild>
          <Link
            href={'https://github.com/moritz-schuessler/shuffle-it'}
            target='_blank'
          >
            <GithubIcon color='white' />
          </Link>
        </Button>
      </div>
      <Button variant='ghost' asChild>
        <Link href={'/privacy'}>Privacy</Link>
      </Button>
    </footer>
  );
};

export default Footer;
