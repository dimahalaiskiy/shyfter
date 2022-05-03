import React from 'react';
import { Initials, UserInfo } from '../styles/Components.styled';
import DaySquare from './DaySquare';
import { UserItemProps } from '../types/interfaces';
import { v4 as uuidv4 } from 'uuid';

const UserItem: React.FC<UserItemProps> = ({ user, week }) => {
  return (
    <>
      <UserInfo>
        <Initials>{user.initials}</Initials>
        <p>{user.displayName}</p>
      </UserInfo>
      {week &&
        week.map((day) => {
          return (
            <DaySquare
              key={uuidv4()}
              day={day}
              userShifts={user.shifts}></DaySquare>
          );
        })}
    </>
  );
};

export default UserItem;
