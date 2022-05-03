import React, { useState, useEffect } from 'react';
import './App.css';
import { getWeek } from './helpers/date';
import { OuterLayout } from './Components/Components.styled';
import { getUsers, getShifts } from './services/api';
import { getShiftsByUsers } from './helpers/getShiftsByUsers';
import Header from './Components/Header';
import Rechercher from './Components/Rechercher';
import UsersList from './Components/UsersList';

const App = () => {
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

  const [day, setDay] = useState<Date>(new Date());
  const [week, setWeek] = useState(getWeek(day));
  const [query, setQuery] = useState('');
  const [users, setUsers] = useState<Users[]>([]);
  const [shifts, setShifts] = useState<Shifts[]>([]);
  const [userWithShifts, setUserWithShifts] = useState<Users[]>([]);

  const decrementDateHandler = () => {
    let decrementWeek = day.setDate(day.getDate() - 7);
    setDay(new Date(decrementWeek));
    setWeek(getWeek(day));
  };
  const incrementDateHandler = () => {
    let incrementWeek = day.setDate(day.getDate() + 7);
    setDay(new Date(incrementWeek));
    setWeek(getWeek(day));
  };

  const queryHandler = (e: React.FormEvent<HTMLInputElement>): void => {
    setQuery(e.currentTarget.value);
  };

  const allUsers = async () => {
    setUsers(await getUsers());
  };

  const allShifts = async () => {
    setShifts(await getShifts());
  };

  useEffect(() => {
    allUsers();
    allShifts();
  }, []);

  useEffect(() => {
    setUserWithShifts(getShiftsByUsers(users, shifts));
  }, [shifts, users]);

  return (
    <OuterLayout>
      <Header
        week={week}
        incrementDate={incrementDateHandler}
        decrementDate={decrementDateHandler}
      />
      <Rechercher queryHandler={queryHandler} query={query} week={week} />
      <UsersList query={query} week={week} users={userWithShifts} />
    </OuterLayout>
  );
};

export default App;
