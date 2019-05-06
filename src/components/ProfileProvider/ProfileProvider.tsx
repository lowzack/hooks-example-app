import React, { useContext } from 'react';
import {Profile, useRandomProfile } from '../../hooks/useProfile';

type ProfileState = {
    profile?: Profile,
    switchProfile: Function
}

const ProfileContext = React.createContext<ProfileState>({ switchProfile: () => {} });

export const useProfile = () => useContext(ProfileContext);

export const ProfileContextProvider: React.FC = ({ children }) => {
    const context = useRandomProfile();
    return (
        <ProfileContext.Provider value={context}>
            {children}
        </ProfileContext.Provider>
    )
}

export const ProfileContextConsumer = ProfileContext.Consumer;