'use client';

import { signIn, signOut } from 'next-auth/react';

import Button from '@/components/Button';
import SpotifyIcon from '@/assets/icons/SpotifyIcon';
import classNames from 'classnames';

const SignInButton = ({ ...props }) => {
  console.log(props);
  return (
    <Button
      onClick={() => signIn('spotify')}
      className={classNames(props.className)}
    >
      <SpotifyIcon color='black' />
      Spotify
    </Button>
  );
};

const SignOutButton = () => {
  return <Button onClick={() => signOut()}>Sign out</Button>;
};

export { SignInButton, SignOutButton };
