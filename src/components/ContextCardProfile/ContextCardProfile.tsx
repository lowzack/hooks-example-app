import React from 'react';
import { ProfileContextConsumer } from '../ProfileProvider/ProfileProvider';
import { Card } from '../Card/Card';
import { Profile } from '../Profile/Profile';

export const ContextCardProfile: React.FC = () => (
    <ProfileContextConsumer>
        {({profile, switchProfile}) => {
            return profile && (
            <Card>
              <Profile
                name={`${profile.name.first} ${profile.name.last}`}
                email={profile.email}
                birthday={profile.dob.date}
                phoneNumber={profile.phone}
                profileImage={profile.picture.large}
              />
              <button className="Button" onClick={() => { switchProfile() }}>Randomize</button>
            </Card>
            );
        }}
    </ProfileContextConsumer>
)