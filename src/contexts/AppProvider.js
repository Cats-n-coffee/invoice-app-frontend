import React from 'react';
import { AuthProvider } from './authProvider';
import { GlobalStyles } from '../styles/GlobalStyles';

export default function AppProvider({ children }) {
    return (
        <>
            <GlobalStyles />
            <AuthProvider>
                { children }
            </AuthProvider>
        </>
    )
}