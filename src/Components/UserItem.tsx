import React from 'react';
import { UserItemSection, UserInfo, Initials } from './Components.styled';

const UserItem = () => {
  return (
    <UserItemSection>
      <UserInfo>
        <Initials />
        <p>name</p>
      </UserInfo>
    </UserItemSection>
  );
};

export default UserItem;
