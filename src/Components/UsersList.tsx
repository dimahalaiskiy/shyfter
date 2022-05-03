import React from 'react';
import { UserListSection } from './Components.styled';
import UserItem from './UserItem';

interface Shifts {
  id: number;
  recordId: number;
  start: string;
  end: string;
}

interface Users {
  recordId: number;
  displayName: string;
  initials: string;
  shifts?: Shifts[];
}
interface Props {
  users?: Users[];
  week: Date[];
  query: string;
}

const UsersList: React.FC<Props> = ({ users, week, query }) => {
  const filteredUsers = users?.filter((user) =>
    user.displayName.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <UserListSection>
      {filteredUsers &&
        filteredUsers.map((user) => {
          return (
            <UserItem key={user.recordId} user={user} week={week}></UserItem>
          );
        })}
    </UserListSection>
  );
};

export default UsersList;
