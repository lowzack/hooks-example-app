import React from 'react';
import { Card } from '../Card/Card';
import { Profile } from '../Profile/Profile';
import { useRandomProfile } from '../../hooks/useProfile';

export const RandomCardProfile: React.FC = () => {
  const { profile, switchProfile } = useRandomProfile();
  return profile ? (
    <Card>
      <Profile
        name={`${profile.name.first} ${profile.name.last}`}
        email={profile.email}
        birthday={profile.dob.date}
        phoneNumber={profile.phone}
        profileImage={profile.picture.large}
      />
      <button className="Button" onClick={switchProfile}>Randomize</button>
    </Card>
  ) : null;
}