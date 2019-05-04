import React from 'react';
import {Profile, useRandomProfile } from '../../hooks/useProfile';

type ProfileContext = {
    profile?: Profile,
    switchProfile: Function
}

const ProfileContext = React.createContext<ProfileContext>({ switchProfile: () => {} });

export const ProfileContextProvider: React.FC = ({ children }) => {
    const context = useRandomProfile();
    return (
        <ProfileContext.Provider value={context}>
            {children}
        </ProfileContext.Provider>
    )
}

export const ProfileContextConsumer = ProfileContext.Consumer;