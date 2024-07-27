import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

axios.defaults.withCredentials = true;

export const userContext = createContext({});

export const UserContextProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        if (!user) {
            axios.get('https://slsvacation.com/api/profile').then(({ data }) => {
                setUser(data);
            }).catch(err => {
                console.error('Error fetching profile:', err);
            });
        }
    }, []);

    return (
        <userContext.Provider value={{ user, setUser }}>
            {children}
        </userContext.Provider>
    );
};
