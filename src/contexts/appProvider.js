import React from 'react';
import { QueryClientProvider, QueryClient } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools'
import { AuthProvider } from './authProvider';
import { GlobalStyles } from '../styles/GlobalStyles';

const queryClient = new QueryClient();

export default function AppProvider({ children }) {
    return (
        <>
            <QueryClientProvider client={ queryClient }>
                <GlobalStyles />
                    <AuthProvider>
                        { children }
                    </AuthProvider>
                    <ReactQueryDevtools />
            </QueryClientProvider>
        </>
    )
}