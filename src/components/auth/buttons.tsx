'use client'

import {signIn, signOut, ClientSafeProvider} from 'next-auth/react';

const SignInButton = ({ provider }: { provider:  ClientSafeProvider }) => {
    return <button onClick={() => signIn(provider.id)}>Sign in with {provider.name}</button>

}

const SignOutButton = () => {
    return <button onClick={() => signOut()}>Sign out</button>;
}

export { SignInButton, SignOutButton }