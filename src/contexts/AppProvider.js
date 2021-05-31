import React from 'react';
import { AuthProvider } from './AuthProvider';

export default function AppProvider({ children }) {
    return (
        <>
            <AuthProvider>
                { children }
            </AuthProvider>
        </>
    )
}