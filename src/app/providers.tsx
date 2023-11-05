'use client'

import { ReactNode } from "react";
import { SessionProvider } from "next-auth/react";

const Providers = ({ children }:{ children: ReactNode }) => {
    return (
        <AuthProvider>
            {children}
        </AuthProvider>
    )
}

const AuthProvider = ({ children }:{ children: ReactNode }) => {
    return (
        <SessionProvider>
            {children}
        </SessionProvider>
    )
}

export default Providers;