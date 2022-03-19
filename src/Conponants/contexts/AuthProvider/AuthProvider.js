import React, { createContext } from 'react';
import useFirebase from '../../Hooks/useFirebase';
export const AuthContext= createContext(null)
const AuthProvider = ({childern}) => {
    const allContext = useFirebase();
    return (
        <AuthContext.Provider value={allContext}>
            {childern}
        </AuthContext.Provider>
    );
};

export default AuthProvider;