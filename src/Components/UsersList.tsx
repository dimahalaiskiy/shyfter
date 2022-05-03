import React from 'react';
import { UserListSection } from '../styles/Components.styled';
import UserItem from './UserItem';
import { UsersListProps } from '../types/interfaces';

const UsersList: React.FC<UsersListProps> = ({ users, week }) => {
  return (
    <UserListSection>
      {users &&
        users.map((user) => {
          return (
            <UserItem key={user.recordId} user={user} week={week}></UserItem>
          );
        })}
    </UserListSection>
  );
};

export default UsersList;
