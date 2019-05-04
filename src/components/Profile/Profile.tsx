import React from 'react';
import './Profile.scss';

type ProfileProps = {
  profileImage: string,
  name: string,
  email: string,
  phoneNumber: string,
  birthday: string
}

export const Profile: React.FC<ProfileProps> = ({ name, email, birthday, phoneNumber, profileImage }) => {
  return (
    <div className="Profile" >
      <img
        className="Profile-image"
        src={profileImage}
        alt={name}
      />
      <h2>{name}</h2>
      <h3>{email}</h3>
      <ul>
        <li>Birthday: {birthday}</li>
        <li>Phone Number: {phoneNumber}</li>
      </ul>
    </div >
  );
}