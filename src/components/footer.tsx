import Link from 'next/link';

import Button from '@/components/ui/Button';
import GithubIcon from '@/assets/icons/github-icon';
import SpotifyIcon from '@/assets/icons/spotify-icon';

const Footer = () => {
  return (
    <footer className='flex items-center justify-center gap-4'>
      <Button variant='ghost' asChild>
        <Link
          href={'https://github.com/moritz-schuessler/shuffle-it'}
          target='_blank'
          className='flex gap-2'
        >
          <GithubIcon color='white' />
          <div>Project</div>
        </Link>
      </Button>
      <Button variant='ghost' asChild>
        <Link
          href={'https://open.spotify.com/'}
          target='_blank'
          className='flex gap-2'
        >
          <SpotifyIcon color='white' />
          <div>Spotify</div>
        </Link>
      </Button>
    </footer>
  );
};

export default Footer;
