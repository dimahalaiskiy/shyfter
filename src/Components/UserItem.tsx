import React from 'react';
import { Initials, UserInfo } from './Components.styled';
import DaySquare from './DaySquare';

interface Props {
  user: Users;
  week: Date[];
}

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

const UserItem: React.FC<Props> = ({ user, week }) => {
  return (
    <>
      <UserInfo>
        <Initials>{user.initials}</Initials>
        <p>{user.displayName}</p>
      </UserInfo>
      {week &&
        week.map((day) => {
          return <DaySquare key={Math.random() * 2.5} day={day}></DaySquare>;
        })}
    </>
  );
};

export default UserItem;
