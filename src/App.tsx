import React, { useState, useEffect } from 'react';
import './App.css';
import { getWeek } from './helpers/date';
import { OuterLayout } from './styles/Components.styled';
import { getUsers, getShifts } from './utils/requests';
import { getShiftsByUsers } from './helpers/getShiftsByUsers';
import Header from './Components/Header';
import Rechercher from './Components/Rechercher';
import UsersList from './Components/UsersList';
import axios from 'axios';
import { Users, Shifts } from './types/interfaces';

const App = () => {
  const [day, setDay] = useState<Date>(new Date());
  const [week, setWeek] = useState(getWeek(day));
  const [query, setQuery] = useState('');
  const [users, setUsers] = useState<Users[]>([]);
  const [shifts, setShifts] = useState<Shifts[]>([]);
  const [userWithShifts, setUserWithShifts] = useState<Users[]>([]);

  const decrementDateHandler = (numberOfDays: number = 7) => {
    let decrementWeek = day.setDate(day.getDate() - numberOfDays);
    setDay(new Date(decrementWeek));
    setWeek(getWeek(day));
  };
  const incrementDateHandler = (numberOfDays: number = 7) => {
    let incrementWeek = day.setDate(day.getDate() + numberOfDays);
    setDay(new Date(incrementWeek));
    setWeek(getWeek(day));
  };

  const queryHandler = (e: React.FormEvent<HTMLInputElement>): void => {
    setQuery(e.currentTarget.value);
  };

  const filteredUsers = userWithShifts?.filter((user) =>
    user.displayName.toLowerCase().includes(query.toLowerCase())
  );

  const allUsers = async () => {
    try {
      const { data } = await getUsers();
      setUsers(data);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        throw error?.message;
      } else {
        throw new Error('Sorry, we are can not get users from the server');
      }
    }
  };

  const allShifts = async () => {
    try {
      const { data } = await getShifts();
      setShifts(data);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        throw error?.message;
      } else {
        throw new Error('Sorry, we are can not get shifts from the server');
      }
    }
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
      <UsersList week={week} users={filteredUsers} />
    </OuterLayout>
  );
};

export default App;
