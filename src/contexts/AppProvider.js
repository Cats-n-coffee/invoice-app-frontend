import React from 'react';
import { AuthProvider } from './authProvider';

export default function AppProvider({ children }) {
    return (
        <>
            <AuthProvider>
                { children }
            </AuthProvider>
        </>
    )
}