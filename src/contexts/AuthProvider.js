import React from 'react';

const AuthContext = React.createContext();

function AuthProvider(props) {
    const [user, setUser] = React.useState(
        JSON.parse(window.localStorage.getItem('user')) || null
    );

    const values = { user, setUser }

    return <AuthContext.Provider value={ values } { ...props } />
}

function useAuth() {
    const user = React.useContext(AuthContext);

    if (!user) {
        throw new Error('useAuth must be used inside AuthProvider')
    }

    return user;
}

export {
    AuthProvider,
    useAuth
}