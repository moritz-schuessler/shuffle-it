'use client'

import { ReactNode } from "react";
import { SessionProvider } from "next-auth/react";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";

const Providers = ({ children }:{ children: ReactNode }) => {
    return (
        <AuthProvider>
            <ReactQueryProvider>
                {children}
            </ReactQueryProvider>
        </AuthProvider>
    )
}

const ReactQueryProvider = ({ children }:{ children: ReactNode }) => {
    const queryClient = new QueryClient()

    return (
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
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