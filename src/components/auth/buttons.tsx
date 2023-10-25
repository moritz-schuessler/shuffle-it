'use client'

import {ClientSafeProvider, signIn} from 'next-auth/react';

const SignInButton = ({provider}: {provider: ClientSafeProvider}) => {
    return <button onClick={() => signIn(provider.id)}>Sign in with {provider.name}</button>

}


export {SignInButton}