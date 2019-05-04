import { useState, useEffect } from 'react';

type Results = {
    results?: Array<Profile>;
}

export type Profile = {
    name: {
        first: string,
        last: string,
    },
    picture: {
        large: string
    },
    email: string,
    dob: {
        date: string,
        age: number
    },
    phone: string
}

export function useRandomProfile() {
    const [ profile, setProfile ] = useState<Profile>();

    const fetchNewProfile = async () => {
        const data = await fetch('https://randomuser.me/api/');
        const results: Results = await data.json();
        if(results && results.results) {
            setProfile(results.results[0]);
        }
    };

    useEffect(() => {
        fetchNewProfile();
    }, [])

    return { 
        profile,
        switchProfile: fetchNewProfile
    };
}